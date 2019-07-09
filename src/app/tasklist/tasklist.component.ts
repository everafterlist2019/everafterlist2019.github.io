import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';

import { TasklistService } from 'src/app/tasklist.service';
import { TaskList } from 'src/app/tasklist.model';
import { Task } from 'src/app/task.model';

import { v4 as uuid } from 'uuid';

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
    private service2: TasklistService) {

     }

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
    console.log("NG ON INIT: " + this.masterList.id);


      //this.user1List = this.allLists[1].tasks;
      //this.user2List = this.allLists[2].tasks;

      //console.log('new uid: ', uuid());
      //console.log("NGONINIT FUNCTION :" + this.masterTaskList[0].name);
      //this.masterTaskList[0].name = "initTask";
      //this.firestore.doc('tasks2/master').update({tasks: this.masterTaskList});

      });
    }


  //Add New Task to List
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

    this.firestore.doc('tasks2/' + arr.id).update({
      tasks: firestore.FieldValue.arrayUnion(newTask)
    });

    this.newTaskName = '';
  } //end addTask

} //end class

/*


  addSubTask(emp: Employee) {
    var subTaskObj = {name:emp.newSubTask,done:false};
    emp.subTasks.push(subTaskObj);
    emp.newSubTask = '';
    this.firestore.doc('employees/' + emp.id).update(emp);

  }
  appendItem() {
    const emoji = '🍺 Beer Me'
    this.docRef.update({
      favs: firestore.FieldValue.arrayUnion(emoji)
    })
  }

  removeItem(emoji) {
    this.docRef.update({
      favs:  firestore.FieldValue.arrayRemove(emoji)
    })



    onDelete(id: string) {
      this.firestore.doc('employees/' + id).delete();
      //this.updateOrder();
      //this.toastr.warning('Deleted successfully','EMP. Register');
    }


    onDelete(id: string) {
      this.firestore.doc('employees/' + id).delete();
      //this.updateOrder();
      //this.toastr.warning('Deleted successfully','EMP. Register');
    }

    updateOrder(){
      for(var i=0;i<this.list.length;i++) {
        this.list[i].displayOrder = i;
        console.log("move item" + i);
        console.log("move item" + this.list[i].fullName);
        console.log("move item" + this.list[i].displayOrder);
        //this.firestore.doc('employees/' + this.list[i].id).update(this.list[i]);
      }
      for(var i=0;i<this.list.length;i++) {
        //this.list[i].displayOrder = i;
        console.log("move item" + i);
        console.log("move item" + this.list[i].fullName);
        console.log("move item" + this.list[i].displayOrder);
        this.firestore.doc('employees/' + this.list[i].id).update(this.list[i]);

      }
    }

    reorderList(event: CdkDragDrop<string[]>, arr: any, subArr: any, list: string) {
      console.log("drop function: " + arr);
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
          moveItemInArray(arr, event.previousIndex, event.currentIndex);
        }

        //UPDATE BACK TO firestore
        if (list=="master"){
          this.firestore.doc('tasks/master').update({tasks: arr});
        }
        else if (list=="user1"){
          this.firestore.doc('tasks/master').update({user1: arr});
        }
        else{
          this.firestore.doc('tasks/master').update({user2: arr});
        }
      }
    }

    //ADD NEW Task to masterList
    //Given string, create new task and push to firestore
    addTask(isLabel?: string, arr?: any, i?: number) {
      console.log("add task: " + this.newTaskName);
      //IF SUBTASK
      if (i !== null){
        var newIndex = arr[i].subtasks.length+1;
        var newSub = {name:"", inUser1List:false, inUser2List: false, done:false};
        arr[i].subtasks.push(newSub);
        this.firestore.doc('tasks/master').update({tasks: arr});
      }
      //ELSE IT'S A NEW TASK OR LABEL
      else {
        var newTask = {
          name: this.newTaskName,
          done: false,
          inUser1List: false,
          inUser2List: false,
          subtasks: [{name:'sub1', inUser1List:false, inUser2List: false, done:false},{name:'sub2', inUser1List:false, inUser2List: false, done:false}]
        };

        if (isLabel != null) {
          newTask.done = null;
          newTask.subtasks = [{name:'Lead.', inUser1List:false, inUser2List: false, done:false},{name:'Lag.', inUser1List:false, inUser2List: false, done:false}]

        }

        this.docRef.update({
          tasks: firestore.FieldValue.arrayUnion(newTask)
        })
      }

      this.newTaskName = '';

    }



    //DELETE NEW Task to masterList
    deleteTask (task?: any, arr?: any, i?: number, x?: number){
      //IF DELETING TASK
      if(task !==null){
        this.docRef.update({
          tasks: firestore.FieldValue.arrayRemove(task)
        })
      }
      //IF DELETING SUBTASK
      else {
        arr[i].subtasks.splice(x,1);
        this.firestore.doc('tasks/master').update({tasks: arr});
      }
    }

    editTask (arr: any) {
      this.firestore.doc('tasks/master').update({tasks: arr});
    }

    deleteFromUserList(masterArr: any, userArr: any, userTask: any, user:string){
      if(user == 'user1'){
        this.docRef.update({
          user1: firestore.FieldValue.arrayRemove(userTask)
        })
      }
      if(user == 'user2'){
        this.docRef.update({
          user2: firestore.FieldValue.arrayRemove(userTask)
        })
      }
      //uncheck from master lists
      for(var i=0;i<masterArr.length;i++) {
        if(masterArr[i].name == userTask.name){
          for (var x=0;x<masterArr[i].subtasks.length;x++){
            if(masterArr[i].subtasks[x].name == userTask.subtask){
              if (user == 'user1'){
                masterArr[i].subtasks[x].inUser1List = false;
              }
              if (user == 'user2'){
                masterArr[i].subtasks[x].inUser2List = false;
              }
            }
          }
        }
      }
      this.firestore.doc('tasks/master').update({tasks: masterArr});
    }

    //user: 'user1' or 'user2'
    fromUserEditMaster(masterArr: any, userArr: any, userTask: any, user:string){
      //UPDATE DONE CHECKBOX IN USER LIST
      if(user == 'user1'){
        this.firestore.doc('tasks/master').update({user1: userArr});
      }
      if(user == 'user2'){
        this.firestore.doc('tasks/master').update({user2: userArr});
      }

      //UPDATE DONE CHECKBOX IN master LIST
      for(var i=0;i<masterArr.length;i++) {
        if(masterArr[i].name == userTask.name){
          for (var x=0;x<masterArr[i].subtasks.length;x++){
            if(masterArr[i].subtasks[x].name == userTask.subtask){

              masterArr[i].subtasks[x].done = userTask.subtaskDone;
            }
          }
        }
      }
      this.firestore.doc('tasks/master').update({tasks: masterArr});
    }

    //based on checkbox in master list, add or delete items to user list
    fromMasterEditUser(masterArr: any, taskIndex: number, subtaskIndex: number, user: string){
      //update list first to make sure checkbox is persistent in master list
      this.firestore.doc('tasks/master').update({tasks: masterArr});
      var task = {
        nameIndex: taskIndex,
        name: masterArr[taskIndex].name,
        subtaskIndex: subtaskIndex,
        subtask: masterArr[taskIndex].subtasks[subtaskIndex].name,
        subtaskDone: masterArr[taskIndex].subtasks[subtaskIndex].done
      };
      if(user == "user1"){
        //if adding to user list
        var user1checkbox = masterArr[taskIndex].subtasks[subtaskIndex].inUser1List;
        if (user1checkbox == true){
          this.docRef.update({
            user1: firestore.FieldValue.arrayUnion(task)
          })
        }
        //else deleting from user list
        else{
          this.docRef.update({
            user1: firestore.FieldValue.arrayRemove(task)
          })

        }
      }
      //ELSE USER 2
      else {
        //if adding to user list
        var user2checkbox = masterArr[taskIndex].subtasks[subtaskIndex].inUser2List;
        if (user2checkbox == true){
          this.docRef.update({
            user2: firestore.FieldValue.arrayUnion(task)
          })
        }
        //else deleting from user list
        else{
          this.docRef.update({
            user2: firestore.FieldValue.arrayRemove(task)
          })

        }
      }

    }












    // ...omitted
   appendItem() {
     const emoji = '🍺 Beer Me'
     this.docRef.update({
       favs: firestore.FieldValue.arrayUnion(emoji)
     })
   }

   removeItem(emoji) {
     this.docRef.update({
       favs:  firestore.FieldValue.arrayRemove(emoji)
     })
   }






    addSubTask(emp: Employee) {
      var subTaskObj = {name:emp.newSubTask,done:false};
      emp.subTasks.push(subTaskObj);
      emp.newSubTask = '';
      this.firestore.doc('employees/' + emp.id).update(emp);

    }

    //PURPOSE: to store/edit done boolean value for sub tasks
    //GIVEN list/employee object and index of subtask array, update boolean value in database
    onCheckSubTask(emp:Employee, subDone:boolean, i:number) {
      this.firestore.doc('employees/' + emp.id).update(emp);
    }

    //PURPOSE: to delete subtask of item
    //Given list/employee object and index of subtask array, delete item at index
    deleteSubTask(emp: Employee, i:number){
      emp.subTasks.splice(i,1);
      this.firestore.doc('employees/' + emp.id).update(emp);
      }

    onEdit(emp: Employee, sub?: string, i?: number) {
      //if it's a subtask, first update employee.
      if (sub!= null){
        emp.subTasks[i].name = sub;
      }
      //console.log("on edit"+ emp.inUser2List);
      this.firestore.doc('employees/' + emp.id).update(emp);
    }


  }*/
