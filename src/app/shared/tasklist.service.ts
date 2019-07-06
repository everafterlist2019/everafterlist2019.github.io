import { Injectable } from '@angular/core';
import { TaskList } from './tasklist.model';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  taskData: TaskList;
  constructor(private firestore:AngularFirestore) { }

  getTasks(){
    return this.firestore.collection('tasks2').snapshotChanges();
  }
}
