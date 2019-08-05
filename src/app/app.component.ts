import { Component } from '@angular/core';
import { AuthenticationService } from './shared/authentication.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { TasklistComponent } from './tasklist/tasklist.component';
declare var $: any; //importing jquery

import * as firebase from 'firebase';


import { TasklistService } from 'src/app/tasklist.service';
import { TaskList } from 'src/app/tasklist.model';
import { Task } from 'src/app/task.model';
import { subTask } from 'src/app/subtask2.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular7Firestore';

  email: string;
  password: string;
  //userID: string;
  //allLists2: TaskList[];

  constructor(public authenticationService: AuthenticationService,
    private firestore: AngularFirestore,
    private service3: TasklistService) {

      /*this.service2.getTasks().subscribe(actionArray =>{
        this.allLists2 = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as TaskList;
        })
      });*/
      //this.userID = null;



  }

  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';


    //CREATE NEW FIRESTORE COLLECTION


    /*firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.userID = firebase.auth().currentUser.uid;
        console.log("HOPEFULLY USER ID" + this.userID);
        //waitForElement();
        //this.service3.createNewTaskList();
      } else {
        //console.log("i suck");
        // No user is signed in.
      }
    });*/







    //END NEW FIRESTORE COLLECTION
  }



  signIn() {
    this.authenticationService.SignIn(this.email, this.password);

    console.log("signed in function" + this.email);
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.authenticationService.SignOut();
  }




}
