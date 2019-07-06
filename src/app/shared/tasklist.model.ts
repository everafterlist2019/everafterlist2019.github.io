import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

import { TasklistService } from 'src/app/shared/tasklist.service';
import { TaskList } from 'src/app/shared/tasklist.model';
import { Task } from 'src/app/shared/task.model';

export class TaskList {
  id: string;
  tasks : Task[];
}
