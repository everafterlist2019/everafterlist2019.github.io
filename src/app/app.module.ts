import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';

import { TasklistService } from './tasklist.service';
import { TasklistComponent } from './tasklist/tasklist.component';

import { TextareaAutosizeModule } from 'ngx-textarea-autosize';


@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaAutosizeModule
  ],
  providers: [
    TasklistService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
