import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';

import { TasklistService } from 'src/app/tasklist.service';
import { TaskList } from 'src/app/tasklist.model';
import { Task } from 'src/app/task.model';
import { subTask } from 'src/app/subtask2.model';

import { v4 as uuid } from 'uuid';

declare var $: any; //importing jquery

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  allLists: TaskList[];
  masterList: TaskList;
  user1List: TaskList;
  user2List: TaskList;
  newTaskName: string;

  constructor(
    private firestore: AngularFirestore,
    private service2: TasklistService) {}

  ngOnInit() {
    this.newTaskName = '';

    this.service2.getTasks().subscribe(actionArray =>{
      this.allLists = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as TaskList;
      })

      this.masterList = {
        id: this.allLists[0].id,
        tasks : this.allLists[0].tasks
      };
      this.user1List = {
        id: this.allLists[1].id,
        tasks : this.allLists[1].tasks
      };
      this.user2List = {
        id: this.allLists[2].id,
        tasks : this.allLists[2].tasks
      };
      });


    }





  //IS THIS FUNCTION NECESSARY?
  getTaskBySubtask(arr: TaskList,currSubtask: subTask){
    return arr.tasks.find(task => task.subtasks.some(item => item.id === currSubtask.id));
  }

  //---------USER FUNCTIONALITY---------

  //Master List --> <Add New Task/Label>
  addTask(arr: TaskList, newTaskName: string, isLabel?: boolean) {
    var newTask = {
      name: newTaskName,
      id: uuid(),
      done: false,
      inUser1List: false,
      inUser2List: false,
      label: isLabel,
      subtasks: [
        {name:'new subtask...',
        id: uuid(),
        inUser1List:false,
        inUser2List: false,
        done:false}]
    };

    this.arrayUnionFirestore(arr, newTask);

    this.newTaskName = '';
  }

  //Master List --> subtask --> <Add New Task>
  addSubtask(arr: TaskList, currTask: Task, newTaskName: string){
    var newSubtask = {
      name:newTaskName,
      id: uuid(),
      inUser1List:false,
      inUser2List: false,
      done:false
    };
    currTask.subtasks.push(newSubtask);
    this.updateFirestore(arr);
    this.newTaskName = '';
  }

  //Master List --> X
  masterButtonX(task: Task){
    //remove any subtasks from user lists
    for(var i=0;i<this.user1List.tasks.length;i++) {
      if(this.user1List.tasks[i].id == task.id){
        this.deleteTask(this.user1List, this.user1List.tasks[i]);
      }
    }
    for(var i=0;i<this.user2List.tasks.length;i++) {
      if(this.user2List.tasks[i].id == task.id){
        this.deleteTask(this.user2List, this.user2List.tasks[i]);
      }
    }
    //delete task from master
    this.deleteTask(this.masterList, task);
  }

  //Master List --> subtask --> -
  deleteSubtaskAllLists(arr: TaskList, task: Task, subTaskToDelete: subTask, subTaskIndex: number) {
    //if in user 1, delete task containing subtask from user1
    if (subTaskToDelete.inUser1List == true){
      this.deleteUserTask(this.user1List, task, subTaskToDelete);
    }
    //if in user 2, delete task containing subtask from user1
    if (subTaskToDelete.inUser2List == true){
      this.deleteUserTask(this.user1List, task, subTaskToDelete);
    }
    //delete subtask from master
    this.deleteSubtask(this.masterList, task, subTaskIndex);

  }

  //Master List --> subtask --> ☐☐
  userCheckbox(arr: TaskList, currTask: Task, currSubtask: subTask, inUserList: boolean){
    //update master list in firestore
    this.updateFirestore(this.masterList);

    //get subtask in each user, and update inuser1list and inuser2list
    if (currSubtask.inUser1List == true){
      for(var i=0;i<this.user1List.tasks.length;i++) {
          if(this.user1List.tasks[i].subtasks[0].id == currSubtask.id) {
            this.user1List.tasks[i].subtasks[0].inUser1List = currSubtask.inUser1List;
            this.user1List.tasks[i].subtasks[0].inUser2List = currSubtask.inUser2List;
            this.updateFirestore(this.user1List);
          }
      }
    }
    if (currSubtask.inUser2List == true){
      for(var i=0;i<this.user2List.tasks.length;i++) {
          if(this.user2List.tasks[i].subtasks[0].id == currSubtask.id) {
            this.user2List.tasks[i].subtasks[0].inUser1List = currSubtask.inUser1List;
            this.user2List.tasks[i].subtasks[0].inUser2List = currSubtask.inUser2List;
            this.updateFirestore(this.user2List);
          }
      }
    }

    //create or delete item from user list
    if (inUserList == true){
      this.addUserTask(arr, currTask, currSubtask);
    }
    else {

      this.deleteUserTask(arr, currTask, currSubtask);
    }
  }
  addUserTask(arr: TaskList, currTask: Task, currSubtask: subTask){
    //create new user task, with same structure but only 1 subtask
    var newTask = {
      name: currTask.name,
      id: currTask.id,
      done: currTask.done,
      inUser1List: currTask.inUser1List,
      inUser2List: currTask.inUser2List,
      label: currTask.label,
      subtasks: [
        {name:currSubtask.name,
        id: currSubtask.id,
        inUser1List:currSubtask.inUser1List,
        inUser2List: currSubtask.inUser2List,
        done:currSubtask.done}]
    };
    //update user list in firestore
    this.arrayUnionFirestore(arr, newTask);

  }
  deleteUserTask(arr: TaskList, currTask: Task, currSubtask: subTask){
    //get element containing inner subTask
    var UserTaskToDelete = this.getTaskBySubtask(arr, currSubtask);

    //delete element
    this.deleteTask(arr, UserTaskToDelete);

  }

  //Master List --> <task name>
  //Master List --> subtask --> <name>
  //Master List --> subtask --> ☐ done
  //User List --> <task name>
  //User List --> subtask --> <name>
  //User List --> subtask --> ☐ done
  updateTaskAllLists(newTask: Task, newSubtask?: subTask){
    //if no subtask to update, and only updating task name in user lists
    if (newSubtask == null){
        for(var i=0;i<this.user1List.tasks.length;i++) {
          if(this.user1List.tasks[i].id == newTask.id){
            this.user1List.tasks[i].name = newTask.name;
          }
        }
        for(var i=0;i<this.user2List.tasks.length;i++) {
          if(this.user2List.tasks[i].id == newTask.id){
            this.user2List.tasks[i].name = newTask.name;
          }
        }
    }

    else{
      //update master subtask

      var oldTask = this.getTaskBySubtask(this.masterList, newSubtask);
      var oldSubtask;
      for(var i=0;i<oldTask.subtasks.length;i++) {
        //console.log("master subtask:" + oldTask.subtasks.length);
        if(oldTask.subtasks[i].id == newSubtask.id){
          oldSubtask = oldTask.subtasks[i];
          oldTask.subtasks[i].name = newSubtask.name;
          oldTask.subtasks[i].done = newSubtask.done;
        }
      }
      //update all instances in user 1
      if (oldSubtask.inUser1List == true){

        for(var i=0;i<this.user1List.tasks.length;i++) {
          if(this.user1List.tasks[i].id == newTask.id){
            //this.user1List.tasks[i].name = newTask.name;
          //console.log("user 1 subtask:" + this.user1List.tasks[i].subtasks[0].name);
            if(this.user1List.tasks[i].subtasks[0].id == newSubtask.id) {
              this.user1List.tasks[i].subtasks[0].name = newSubtask.name;
              this.user1List.tasks[i].subtasks[0].done = newSubtask.done;
            }
          }
        }
      }
      //update all instances in user 2
      if (oldSubtask.inUser2List == true){

        for(var i=0;i<this.user2List.tasks.length;i++) {
          if(this.user2List.tasks[i].id == newTask.id){
            //this.user1List.tasks[i].name = newTask.name;
            //console.log("user 2 subtask:" + this.user2List.tasks[i].subtasks[0].name);

            if(this.user2List.tasks[i].subtasks[0].id == newSubtask.id) {
              this.user2List.tasks[i].subtasks[0].name = newSubtask.name;
              this.user2List.tasks[i].subtasks[0].done = newSubtask.done;
            }
          }
        }
      }
    }

    this.updateFirestore(this.user1List);
    this.updateFirestore(this.user2List);
    this.updateFirestore(this.masterList);

  }

  //User List --> -
  userButtonDeleteTask(arr: TaskList, task: Task){
    //uncheck task from master list
    for(var i=0;i<this.masterList.tasks.length;i++) {
      for(var x=0;x<this.masterList.tasks[i].subtasks.length;x++) {

        if(this.masterList.tasks[i].subtasks[x].id == task.subtasks[0].id){
          if(arr.id == 'user1'){
            this.masterList.tasks[i].subtasks[x].inUser1List = false;
          }
          if(arr.id == 'user2'){
            this.masterList.tasks[i].subtasks[x].inUser2List = false;
          }
          this.updateFirestore(this.masterList);
        }
      }
    }
    //delete task from user list
    this.deleteTask(arr, task);
  }

  //---------FIRESTORE FUNCTIONALITY---------

  //DELETE TASK IN FIRESTORE
  deleteTask(arr: TaskList, task: Task) {
    if(task !==null){
      this.firestore.doc('tasks2/' + arr.id).update({
        tasks: firestore.FieldValue.arrayRemove(task)
      });
    }
  }

  //DELETE SUBTASK IN FIRESTORE
  deleteSubtask(arr: TaskList, task: Task, subtaskIndex: number) {
    task.subtasks.splice(subtaskIndex,1);
    this.updateFirestore(arr);
  }

  //UPDATE FIRESTORE
  updateFirestore(arr: TaskList){
    this.firestore.doc('tasks2/' + arr.id).update({tasks: arr.tasks});
  }

  //ADD FIRESTORE
  arrayUnionFirestore(arr: TaskList, task: Task){
    this.firestore.doc('tasks2/' + arr.id).update({
      tasks: firestore.FieldValue.arrayUnion(task)
    });
  }

  //DRAG AND DROP
  reorderList(event: CdkDragDrop<string[]>, arr: TaskList, subArr?: subTask[]) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data,event.container.data,
        event.previousIndex, event.currentIndex)
    }
    else {
      //IF MOVING SUBTASKS,
      if (subArr != null){
        moveItemInArray(subArr, event.previousIndex, event.currentIndex);
      }
      //ELSE, MOVING MAIN TASKS
      else{
        moveItemInArray(arr.tasks, event.previousIndex, event.currentIndex);
      }

      //UPDATE BACK TO firestore
      this.updateFirestore(arr);
    }
  }


  /*getTaskByID(arr: TaskList,id: string){
    return arr.tasks.find(x => x.id === id);
  }*/


} //end class
