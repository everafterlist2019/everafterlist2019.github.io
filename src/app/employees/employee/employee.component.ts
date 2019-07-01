import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
    private firestore:AngularFirestore,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm( form?: NgForm){
    if (form!= null)
      form.resetForm();
    this.service.formData = {
      id: null,
      inUser1List: false,
      inUser2List: false,
      displayOrder: 0,
      fullName: '',
      done: false,
      newSubTask: '',
      subTasks: [{name:'sub1',done:false},{name:'sub2',done:false}]
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    data.newSubTask = '';
    data.subTasks = [{name:'sub1',done:false},{name:'sub2',done:false}];
    delete data.id;
    if (form.value.id == null){
      this.firestore.collection('employees').add(data);
      //console.log("id value is null");
    }
    else{
      this.firestore.doc('employees/' + form.value.id).update(data);
      //console.log("id value is not null");
    }
    this.resetForm(form);
    //this.toastr.success('Submitted successfully', 'EMP. Register');
  }


}
