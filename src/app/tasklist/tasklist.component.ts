import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';

import { TasklistService } from 'src/app/shared/tasklist.service';
import { TaskList } from 'src/app/shared/tasklist.model';
import { Task } from 'src/app/shared/task.model';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  allLists: TaskList[];
  //masterList: Task[];
  //user1List: Task[];
  //user2List: Task[];
  newTaskName: string;

  constructor(
    private firestore: AngularFirestore,
    private toastr:ToastrService,
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
      //this.masterTaskList = this.allTaskLists[0].tasks;
      //this.user1List = this.allTaskLists[1].tasks;
      //this.user2List = this.allTaskLists[2].tasks;

      //console.log("NGONINIT FUNCTION :" + this.masterTaskList[0].name);
      //this.masterTaskList[0].name = "initTask";
      //this.firestore.doc('tasks2/master').update({tasks: this.masterTaskList});

    });
  }



}
