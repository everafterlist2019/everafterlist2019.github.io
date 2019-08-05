import { Injectable } from '@angular/core';
import { TaskList } from './tasklist.model';
import { AngularFirestore } from '@angular/fire/firestore';


/* Auth service */
import { AuthenticationService } from './shared/authentication.service';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  taskData: TaskList;
//userId: string;

  constructor(private firestore:AngularFirestore) {


  }

  createNewTaskList(){
    console.log("createNewTaskList");
  }


  getTasks(){
    //var userID = 'tasks2';
    var testID = firebase.auth().currentUser.uid;
    console.log("testID: " + testID);
    /*console.log("tasklist service: " + firebase.auth().currentUser.uid);
    var testID = firebase.auth().currentUser.uid;

    if (this.firestore.doc(testID + '/master') == null){
      console.log("tasklist service: " + "it is null!!!!");
    }*/
    return this.firestore.collection(testID).snapshotChanges();
  }
}
