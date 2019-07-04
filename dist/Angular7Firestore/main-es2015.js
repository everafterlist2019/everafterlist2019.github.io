(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"\">\n  <app-employees></app-employees>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employees/employee-list/employee-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees/employee-list/employee-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"listsWrapper\">\n  <!--START USER 1 LIST-->\n  <div class=\"user1List user\">\n      <h1 class=\"display-4\">Shari</h1>\n      <ul *ngIf=\"doc$ | async as doc\" cdkDropList [cdkDropListData]=\"doc.user1\" #mainList=\"cdkDropList\" (cdkDropListDropped)=\"reorderList($event, doc.user1, null, 'user1')\">\n          <li class=\"task-wrapper\" *ngFor=\"let currTask of doc.user1; let i = index\" cdkDrag>\n            <div class=\"task\" >\n              <input (change)=\"fromUserEditMaster(doc.tasks, doc.user1, currTask, 'user1')\" type=\"checkbox\" [(ngModel)]=\"currTask.subtaskDone\" />\n              <div>\n                <p [ngClass]=\"{'done': currTask.subtaskDone==true}\" >{{currTask.subtask}}</p>\n                <p class=\"from\">\n                  <span>from </span>\n                  <span [ngClass]=\"{'done': currTask.subtaskDone==true}\">{{currTask.name}}</span>\n                </p>\n              </div>\n              <span class=\"trash\" (click)=\"deleteFromUserList(doc.tasks, doc.user1, currTask, 'user1')\">X</span>\n              <div class=\"drag-handle container\" cdkDragHandle>\n                <div class=\"row\">\n                  <span class=\"dot\"></span>\n                  <span class=\"dot\"></span>\n                </div>\n                <div class=\"row\">\n                  <span class=\"dot\"></span>\n                  <span class=\"dot\"></span>\n                </div>\n              </div><!--end drag handle-->\n            </div>\n          </li>\n      </ul>\n  </div>\n  <!--END USER 2 LIST-->\n  <!--START MASTER LIST-->\n  <div class=\"masterList\">\n    <h1 class=\"display-4\">Task List</h1>\n    <ul *ngIf=\"doc$ | async as doc\" cdkDropList [cdkDropListData]=\"doc.tasks\" #mainList=\"cdkDropList\" (cdkDropListDropped)=\"reorderList($event, doc.tasks, null, 'master')\">\n        <li class=\"task-wrapper\" *ngFor=\"let currTask of doc.tasks; let i = index\" cdkDrag [ngClass]=\"{'label': currTask.done==null}\">\n          <div class=\"task\" >\n            <input (change)=\"editTask(doc.tasks)\" type=\"checkbox\" [(ngModel)]=\"currTask.done\" />\n            <textarea [(ngModel)]=\"currTask.name\" class=\"autosize\" [ngClass]=\"{'done': currTask.done==true}\" (blur)=\"editTask(doc.tasks)\"></textarea>\n            <span class=\"trash\" (click)=\"deleteTask(currTask)\">X</span>\n            <div class=\"drag-handle container\" cdkDragHandle>\n              <div class=\"row\">\n                <span class=\"dot\"></span>\n                <span class=\"dot\"></span>\n              </div>\n              <div class=\"row\">\n                <span class=\"dot\"></span>\n                <span class=\"dot\"></span>\n              </div>\n            </div><!--end drag handle-->\n\n          </div><!--END TASK-->\n         <div class=\"subtasks\">\n         <ul cdkDropList [cdkDropListData]=\"currTask.subtasks\" #secondList=\"cdkDropList\" (cdkDropListDropped)=\"reorderList($event, doc.tasks, currTask.subtasks, 'master')\">\n                <li *ngFor=\"let currSubtask of currTask.subtasks; let x = index\" cdkDrag cdkDragLockAxis=\"y\">\n\n                <input (change)=\"editTask(doc.tasks)\" type=\"checkbox\" [(ngModel)]=\"currSubtask.done\" />\n                <textarea class=\"autosize\" [ngClass]=\"{'done': currSubtask.done==true}\" (blur)=\"editTask(doc.tasks)\" [(ngModel)]=\"currSubtask.name\" ></textarea>\n                <input (change)=\"fromMasterEditUser(doc.tasks, i, x, 'user1')\" type=\"checkbox\" [(ngModel)]=\"currSubtask.inUser1List\" />\n                <input (change)=\"fromMasterEditUser(doc.tasks, i, x, 'user2')\" type=\"checkbox\" [(ngModel)]=\"currSubtask.inUser2List\" />\n                <a class=\"trash\" (click)=\"deleteTask(null, doc.tasks, i, x)\">-</a>\n\n                <div class=\"drag-handle container\" cdkDragHandle>\n                  <div class=\"row\">\n                    <span class=\"dot\"></span>\n                    <span class=\"dot\"></span>\n                  </div>\n                  <div class=\"row\">\n                    <span class=\"dot\"></span>\n                    <span class=\"dot\"></span>\n                  </div>\n                </div><!--end drag handle-->\n\n              </li>\n              <li>\n                <a class=\"add\" (click)=\"addTask(null, doc.tasks, i)\">+</a>\n              </li>\n            </ul>\n          </div><!--END SUBTASK-->\n        </li>\n    </ul>\n\n    <div>\n      <input class=\"newTask\" type=\"text\" [(ngModel)]=\"newTaskName\"/>\n      <a (click)=\"addTask('label', null, null)\" class=\"btn \">ADD NEW LABEL</a>\n      <a (click)=\"addTask(null, null, null)\" class=\"btn \">ADD NEW TASK</a>\n    </div>\n  </div>\n  <!--END MASTER LIST-->\n  <!--START USER 2 LIST-->\n  <!--START USER 1 LIST-->\n  <div class=\"user2List user\">\n      <h1 class=\"display-4\">Kevin</h1>\n      <ul *ngIf=\"doc$ | async as doc\" cdkDropList [cdkDropListData]=\"doc.user2\" #mainList=\"cdkDropList\" (cdkDropListDropped)=\"reorderList($event, doc.user2, null, 'user2')\">\n          <li class=\"task-wrapper\" *ngFor=\"let currTask of doc.user2; let i = index\" cdkDrag>\n            <div class=\"task\" >\n              <input (change)=\"fromUserEditMaster(doc.tasks, doc.user2, currTask, 'user2')\" type=\"checkbox\" [(ngModel)]=\"currTask.subtaskDone\" />\n              <div>\n                <p [ngClass]=\"{'done': currTask.subtaskDone==true}\" >{{currTask.subtask}}</p>\n                <p class=\"from\">\n                  <span>from </span>\n                  <span [ngClass]=\"{'done': currTask.subtaskDone==true}\">{{currTask.name}}</span>\n                </p>\n              </div>\n                  <span class=\"trash\" (click)=\"deleteFromUserList(doc.tasks, doc.user2, currTask, 'user2')\">X</span>\n                  <div class=\"drag-handle container\" cdkDragHandle>\n                    <div class=\"row\">\n                      <span class=\"dot\"></span>\n                      <span class=\"dot\"></span>\n                    </div>\n                    <div class=\"row\">\n                      <span class=\"dot\"></span>\n                      <span class=\"dot\"></span>\n                    </div>\n                  </div><!--end drag handle-->\n            </div>\n          </li>\n      </ul>\n  </div>\n  <!--END USER 2 LIST-->\n</div>\n\n\n\n<!--\n<div class=\"listsWrapper\">\n  <div class=\"user1List\">\n      <h1 class=\"display-4\">User1</h1>\n      <div cdkDropList  [cdkDropListData]=\"list\" #firstList=\"cdkDropList\" (cdkDropListDropped)=\"drop($event)\">\n        <div *ngFor=\"let emp of list | sortBy:'displayOrder': 'asc'\" >\n          <ul *ngIf=\"emp.inUser1List === true\" class=\"task-wrapper\" cdkDrag [ngClass]=\"{'label': emp.done==null}\" >\n            <div >\n                <input (change)=\"onEdit(emp)\" type=\"checkbox\" [(ngModel)]=\"emp.inUser1List\" />\n\n                <li class=\"task\">\n                  <input (change)=\"onEdit(emp)\" type=\"checkbox\" [(ngModel)]=\"emp.done\" />\n                  <textarea class='autoExpand' rows='1' data-min-rows='1' placeholder='Auto-Expanding Textarea' [ngClass]=\"{'done': emp.done==true,'not-done': emp.done==false}\" (blur)=\"onEdit(emp)\" type=\"text\" [(ngModel)]=\"emp.fullName\"></textarea>\n                  <a class=\"btn \" (click)=\"onDelete(emp.id)\">X</a>\n\n                </li>\n                <li cdkDropList  [cdkDropListData]=\"emp.subTasks\" #secondList=\"cdkDropList\" (cdkDropListDropped)=\"dropSubTask($event, emp)\" class=\"subTasks\">\n                  <ul *ngFor=\"let sub of emp.subTasks; let i = index\" [attr.data-index]=\"i\" cdkDrag>\n                    <div >\n                      <input (change)=\"onCheckSubTask(emp,sub.done,i)\" type=\"checkbox\" [(ngModel)]=\"sub.done\" />\n                      <textarea class='autoExpand' rows='1' data-min-rows='1' placeholder='Auto-Expanding Textarea' [ngClass]=\"{'done': sub.done,'not-done': sub.done==false}\" (blur)=\"onEdit(emp,sub.name,i)\" type=\"text\" [(ngModel)]=\"sub.name\"></textarea>\n                      <a (click)=\"deleteSubTask(emp,i)\" class=\"btn \">-</a>\n                    </div>\n                  </ul>\n\n                </li>\n                <li>\n                  <input type=\"text\" [(ngModel)]=\"emp.newSubTask\"/>\n                  <a (click)=\"addSubTask(emp)\" class=\"btn \">+</a>\n\n                </li>\n            </div>\n          </ul>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"masterList\">\n      <h1 class=\"display-4\">Task List</h1>\n      <div cdkDropList  [cdkDropListData]=\"list\" #firstList=\"cdkDropList\" (cdkDropListDropped)=\"drop($event)\">\n        <ul class=\"task-wrapper\" *ngFor=\"let emp of list; let x=index\" cdkDrag [ngClass]=\"{'label': emp.done==null}\">\n\n          <input (change)=\"onEdit(emp)\" type=\"checkbox\" [(ngModel)]=\"emp.inUser1List\" />\n          <input (change)=\"onEdit(emp)\" type=\"checkbox\" [(ngModel)]=\"emp.inUser2List\" />\n          <li class=\"task\">\n            <p>{{emp.displayOrder}}</p>\n            <p>{{x}}</p>\n            <input (change)=\"onEdit(emp)\" type=\"checkbox\" [(ngModel)]=\"emp.done\" />\n            <textarea class='autoExpand' rows='1' data-min-rows='1' placeholder='Auto-Expanding Textarea' [ngClass]=\"{'done': emp.done==true,'not-done': emp.done==false}\" (blur)=\"onEdit(emp)\" type=\"text\" [(ngModel)]=\"emp.fullName\"></textarea>\n            <a class=\"btn \" (click)=\"onDelete(emp.id)\">X</a>\n\n          </li>\n          <li class=\"subTasks\">\n            <ul *ngFor=\"let sub of emp.subTasks; let i = index\" [attr.data-index]=\"i\" cdkDrag>\n              <div >\n                <input (change)=\"onCheckSubTask(emp,sub.done,i)\" type=\"checkbox\" [(ngModel)]=\"sub.done\" />\n                <textarea [ngClass]=\"{'done': sub.done,'not-done': sub.done==false}\" (blur)=\"onEdit(emp,sub.name,i)\" type=\"text\" [(ngModel)]=\"sub.name\"></textarea>\n                <a (click)=\"deleteSubTask(emp,i)\" class=\"btn \">-</a>\n              </div>\n            </ul>\n\n          </li>\n          <li>\n            <input type=\"text\" [(ngModel)]=\"emp.newSubTask\"/>\n            <a (click)=\"addSubTask(emp)\" class=\"btn \">+</a>\n\n          </li>\n\n        </ul>\n      </div>\n      <div>\n        <input type=\"text\" [(ngModel)]=\"newTaskName\"/>\n        <a (click)=\"addLabel(newTaskName)\" class=\"btn \">ADD NEW LABEL</a>\n        <a (click)=\"addTask(newTaskName)\" class=\"btn \">ADD NEW TASK</a>\n      </div>\n  </div>\n\n\n\n  <div class=\"user2List\">\n      <h1 class=\"display-4\">User 2</h1>\n      <div cdkDropList  [cdkDropListData]=\"list\" #firstList=\"cdkDropList\" (cdkDropListDropped)=\"drop($event)\">\n        <div *ngFor=\"let emp of list | sortBy:'displayOrder': 'asc'\" >\n          <ul *ngIf=\"emp.inUser2List === true\" class=\"task-wrapper\" cdkDrag [ngClass]=\"{'label': emp.done==null}\" >\n            <div >\n                <input (change)=\"onEdit(emp)\" type=\"checkbox\" [(ngModel)]=\"emp.inUser2List\" />\n\n                <li class=\"task\">\n                  <input (change)=\"onEdit(emp)\" type=\"checkbox\" [(ngModel)]=\"emp.done\" />\n                  <textarea class='autoExpand' rows='1' data-min-rows='1' placeholder='Auto-Expanding Textarea' [ngClass]=\"{'done': emp.done==true,'not-done': emp.done==false}\" (blur)=\"onEdit(emp)\" type=\"text\" [(ngModel)]=\"emp.fullName\"></textarea>\n                  <a class=\"btn \" (click)=\"onDelete(emp.id)\">X</a>\n\n                </li>\n                <li cdkDropList  [cdkDropListData]=\"emp.subTasks\" #secondList=\"cdkDropList\" (cdkDropListDropped)=\"dropSubTask($event, emp)\" class=\"subTasks\">\n                  <ul *ngFor=\"let sub of emp.subTasks; let i = index\" [attr.data-index]=\"i\" cdkDrag>\n                    <div >\n                      <input (change)=\"onCheckSubTask(emp,sub.done,i)\" type=\"checkbox\" [(ngModel)]=\"sub.done\" />\n                      <textarea class='autoExpand' rows='1' data-min-rows='1' placeholder='Auto-Expanding Textarea' [ngClass]=\"{'done': sub.done,'not-done': sub.done==false}\" (blur)=\"onEdit(emp,sub.name,i)\" type=\"text\" [(ngModel)]=\"sub.name\"></textarea>\n                      <a (click)=\"deleteSubTask(emp,i)\" class=\"btn \">-</a>\n                    </div>\n                  </ul>\n\n                </li>\n                <li>\n                  <input type=\"text\" [(ngModel)]=\"emp.newSubTask\"/>\n                  <a (click)=\"addSubTask(emp)\" class=\"btn \">+</a>\n\n                </li>\n            </div>\n          </ul>\n        </div>\n      </div>\n  </div>\n</div>-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employees/employee/employee.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees/employee/employee.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n  <input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"service.formData.id\">\n  <div class=\"form-group\">\n    <input name=\"fullName\" #fullName=\"ngModel\" [(ngModel)]=\"service.formData.fullName\" type=\"text\" class=\"form-control\" placeholder=\"New Task\" required>\n    <div *ngIf=\"fullName.invalid && fullName.touched\" class=\"validation-error\">this field is required</div>\n    <button [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-lg btn-info\" name=\"button\">Add</button>\n  </div>\n</form>-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employees/employees.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees/employees.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"\">\n      <!--current task list-->\n      <app-employee-list></app-employee-list>\n      <!-- add new form -->\n      <!--<app-employee></app-employee>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Angular7Firestore';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employees/employee/employee.component */ "./src/app/employees/employee/employee.component.ts");
/* harmony import */ var _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employees/employee-list/employee-list.component */ "./src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _sort_by_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sort-by.pipe */ "./src/app/sort-by.pipe.ts");
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sortable.directive */ "./src/app/sortable.directive.ts");
/* harmony import */ var _contenteditable_model_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contenteditable-model.directive */ "./src/app/contenteditable-model.directive.ts");
/* harmony import */ var _ng_stack_contenteditable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-stack/contenteditable */ "./node_modules/@ng-stack/contenteditable/fesm2015/ng-stack-contenteditable.js");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _employees_employees_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesComponent"],
            _employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeComponent"],
            _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeListComponent"],
            _sort_by_pipe__WEBPACK_IMPORTED_MODULE_15__["SortByPipe"],
            _sortable_directive__WEBPACK_IMPORTED_MODULE_16__["SortableDirective"],
            _contenteditable_model_directive__WEBPACK_IMPORTED_MODULE_17__["ContenteditableModelDirective"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
            _ng_stack_contenteditable__WEBPACK_IMPORTED_MODULE_18__["ContenteditableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        providers: [_shared_employee_service__WEBPACK_IMPORTED_MODULE_13__["EmployeeService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contenteditable-model.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/contenteditable-model.directive.ts ***!
  \****************************************************/
/*! exports provided: ContenteditableModelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenteditableModelDirective", function() { return ContenteditableModelDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


//import {isPropertyUpdated} from "@angular/src/common/forms/directives/shared";
let ContenteditableModelDirective = class ContenteditableModelDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (changes['model'] && changes['model'].currentValue !== this.lastViewModel) {
            this.lastViewModel = this.model;
            this.refreshView();
        }
    }
    onBlur() {
        var value = this.elRef.nativeElement.innerText;
        this.lastViewModel = value;
        this.update.emit(value);
    }
    refreshView() {
        this.elRef.nativeElement.innerText = this.model;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('contenteditableModel'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ContenteditableModelDirective.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('contenteditableModelChange'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ContenteditableModelDirective.prototype, "update", void 0);
ContenteditableModelDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[contenteditableModel]',
        host: {
            '(blur)': 'onBlur()'
        }
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ContenteditableModelDirective);



/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let EmployeeListComponent = class EmployeeListComponent {
    constructor(service, firestore, toastr, afs) {
        this.service = service;
        this.firestore = firestore;
        this.toastr = toastr;
        this.afs = afs;
        this.templateDrivenForm = 'This is contenteditable text for template-driven form';
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"];
    }
    ngOnInit() {
        this.newTaskName = '';
        this.service.getEmployees().subscribe(actionArray => {
            this.list = actionArray.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
        /*this.list = _.orderBy(this.list, ['orderBy'],['asc']);
        this.updateOrder();*/
        this.docRef = this.afs.doc(`tasks/master`);
        this.doc$ = this.docRef.valueChanges();
        this.myControl.setValue(`This is contenteditable text for reactive form`);
    }
    //ADD NEW Task to masterList
    //Given string, create new task and push to firestore
    addTask(isLabel, arr, i) {
        console.log("add task: " + this.newTaskName);
        //IF SUBTASK
        if (i !== null) {
            var newIndex = arr[i].subtasks.length + 1;
            var newSub = { name: "", inUser1List: false, inUser2List: false, done: false };
            arr[i].subtasks.push(newSub);
            this.firestore.doc('tasks/master').update({ tasks: arr });
        }
        //ELSE IT'S A NEW TASK OR LABEL
        else {
            var newTask = {
                name: this.newTaskName,
                done: false,
                inUser1List: false,
                inUser2List: false,
                subtasks: [{ name: 'sub1', inUser1List: false, inUser2List: false, done: false }, { name: 'sub2', inUser1List: false, inUser2List: false, done: false }]
            };
            if (isLabel != null) {
                newTask.done = null;
                newTask.subtasks = [{ name: 'Lead.', inUser1List: false, inUser2List: false, done: false }, { name: 'Lag.', inUser1List: false, inUser2List: false, done: false }];
            }
            this.docRef.update({
                tasks: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion(newTask)
            });
        }
        this.newTaskName = '';
    }
    //DELETE NEW Task to masterList
    deleteTask(task, arr, i, x) {
        //IF DELETING TASK
        if (task !== null) {
            this.docRef.update({
                tasks: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayRemove(task)
            });
        }
        //IF DELETING SUBTASK
        else {
            arr[i].subtasks.splice(x, 1);
            this.firestore.doc('tasks/master').update({ tasks: arr });
        }
    }
    editTask(arr) {
        this.firestore.doc('tasks/master').update({ tasks: arr });
    }
    deleteFromUserList(masterArr, userArr, userTask, user) {
        if (user == 'user1') {
            this.docRef.update({
                user1: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayRemove(userTask)
            });
        }
        if (user == 'user2') {
            this.docRef.update({
                user2: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayRemove(userTask)
            });
        }
        //uncheck from master lists
        for (var i = 0; i < masterArr.length; i++) {
            if (masterArr[i].name == userTask.name) {
                for (var x = 0; x < masterArr[i].subtasks.length; x++) {
                    if (masterArr[i].subtasks[x].name == userTask.subtask) {
                        if (user == 'user1') {
                            masterArr[i].subtasks[x].inUser1List = false;
                        }
                        if (user == 'user2') {
                            masterArr[i].subtasks[x].inUser2List = false;
                        }
                    }
                }
            }
        }
        this.firestore.doc('tasks/master').update({ tasks: masterArr });
    }
    //user: 'user1' or 'user2'
    fromUserEditMaster(masterArr, userArr, userTask, user) {
        //UPDATE DONE CHECKBOX IN USER LIST
        if (user == 'user1') {
            this.firestore.doc('tasks/master').update({ user1: userArr });
        }
        if (user == 'user2') {
            this.firestore.doc('tasks/master').update({ user2: userArr });
        }
        //UPDATE DONE CHECKBOX IN master LIST
        for (var i = 0; i < masterArr.length; i++) {
            if (masterArr[i].name == userTask.name) {
                for (var x = 0; x < masterArr[i].subtasks.length; x++) {
                    if (masterArr[i].subtasks[x].name == userTask.subtask) {
                        masterArr[i].subtasks[x].done = userTask.subtaskDone;
                    }
                }
            }
        }
        this.firestore.doc('tasks/master').update({ tasks: masterArr });
    }
    //based on checkbox in master list, add or delete items to user list
    fromMasterEditUser(masterArr, taskIndex, subtaskIndex, user) {
        //update list first to make sure checkbox is persistent in master list
        this.firestore.doc('tasks/master').update({ tasks: masterArr });
        var task = {
            nameIndex: taskIndex,
            name: masterArr[taskIndex].name,
            subtaskIndex: subtaskIndex,
            subtask: masterArr[taskIndex].subtasks[subtaskIndex].name,
            subtaskDone: masterArr[taskIndex].subtasks[subtaskIndex].done
        };
        if (user == "user1") {
            //if adding to user list
            var user1checkbox = masterArr[taskIndex].subtasks[subtaskIndex].inUser1List;
            if (user1checkbox == true) {
                this.docRef.update({
                    user1: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion(task)
                });
            }
            //else deleting from user list
            else {
                this.docRef.update({
                    user1: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayRemove(task)
                });
            }
        }
        //ELSE USER 2
        else {
            //if adding to user list
            var user2checkbox = masterArr[taskIndex].subtasks[subtaskIndex].inUser2List;
            if (user2checkbox == true) {
                this.docRef.update({
                    user2: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion(task)
                });
            }
            //else deleting from user list
            else {
                this.docRef.update({
                    user2: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayRemove(task)
                });
            }
        }
    }
    // ...omitted
    appendItem() {
        const emoji = '🍺 Beer Me';
        this.docRef.update({
            favs: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion(emoji)
        });
    }
    removeItem(emoji) {
        this.docRef.update({
            favs: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayRemove(emoji)
        });
    }
    addSubTask(emp) {
        var subTaskObj = { name: emp.newSubTask, done: false };
        emp.subTasks.push(subTaskObj);
        emp.newSubTask = '';
        this.firestore.doc('employees/' + emp.id).update(emp);
    }
    //PURPOSE: to store/edit done boolean value for sub tasks
    //GIVEN list/employee object and index of subtask array, update boolean value in database
    onCheckSubTask(emp, subDone, i) {
        this.firestore.doc('employees/' + emp.id).update(emp);
    }
    //PURPOSE: to delete subtask of item
    //Given list/employee object and index of subtask array, delete item at index
    deleteSubTask(emp, i) {
        emp.subTasks.splice(i, 1);
        this.firestore.doc('employees/' + emp.id).update(emp);
    }
    onEdit(emp, sub, i) {
        //if it's a subtask, first update employee.
        if (sub != null) {
            emp.subTasks[i].name = sub;
        }
        //console.log("on edit"+ emp.inUser2List);
        this.firestore.doc('employees/' + emp.id).update(emp);
    }
    //Given task/employee object, reset the value for newSubTask
    /*clearTask(emp: Employee) {
      console.log("current value: " + emp.newSubTask);
      emp.newSubTask = '';
      console.log("current value: " + emp.newSubTask);
    }*/
    onDelete(id) {
        this.firestore.doc('employees/' + id).delete();
        //this.updateOrder();
        //this.toastr.warning('Deleted successfully','EMP. Register');
    }
    updateOrder() {
        for (var i = 0; i < this.list.length; i++) {
            this.list[i].displayOrder = i;
            console.log("move item" + i);
            console.log("move item" + this.list[i].fullName);
            console.log("move item" + this.list[i].displayOrder);
            //this.firestore.doc('employees/' + this.list[i].id).update(this.list[i]);
        }
        for (var i = 0; i < this.list.length; i++) {
            //this.list[i].displayOrder = i;
            console.log("move item" + i);
            console.log("move item" + this.list[i].fullName);
            console.log("move item" + this.list[i].displayOrder);
            this.firestore.doc('employees/' + this.list[i].id).update(this.list[i]);
        }
    }
    reorderList(event, arr, subArr, list) {
        console.log("drop function: " + arr);
        if (event.previousContainer !== event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            //IF MOVING SUBTASKS,
            if (subArr != null) {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(subArr, event.previousIndex, event.currentIndex);
            }
            //ELSE, MOVING MAIN TASKS
            else {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(arr, event.previousIndex, event.currentIndex);
            }
            //UPDATE BACK TO firestore
            if (list == "master") {
                this.firestore.doc('tasks/master').update({ tasks: arr });
            }
            else if (list == "user1") {
                this.firestore.doc('tasks/master').update({ user1: arr });
            }
            else {
                this.firestore.doc('tasks/master').update({ user2: arr });
            }
        }
    }
};
EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-employee-list',
        template: __webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees/employee-list/employee-list.component.html"),
        styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employees/employee-list/employee-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
], EmployeeListComponent);



/***/ }),

/***/ "./src/app/employees/employee/employee.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/employees/employee/employee.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let EmployeeComponent = class EmployeeComponent {
    constructor(service, firestore, toastr) {
        this.service = service;
        this.firestore = firestore;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            id: null,
            inUser1List: false,
            inUser2List: false,
            displayOrder: 0,
            fullName: '',
            done: false,
            newSubTask: '',
            subTasks: [{ name: 'sub1', done: false }, { name: 'sub2', done: false }]
        };
    }
    onSubmit(form) {
        let data = Object.assign({}, form.value);
        data.newSubTask = '';
        data.subTasks = [{ name: 'sub1', done: false }, { name: 'sub2', done: false }];
        delete data.id;
        if (form.value.id == null) {
            this.firestore.collection('employees').add(data);
            //console.log("id value is null");
        }
        else {
            this.firestore.doc('employees/' + form.value.id).update(data);
            //console.log("id value is not null");
        }
        this.resetForm(form);
        //this.toastr.success('Submitted successfully', 'EMP. Register');
    }
};
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee',
        template: __webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees/employee/employee.component.html"),
        styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employees/employee/employee.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], EmployeeComponent);



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmployeesComponent = class EmployeesComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employees',
        template: __webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees/employees.component.html"),
        styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EmployeesComponent);



/***/ }),

/***/ "./src/app/shared/employee.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/employee.service.ts ***!
  \********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let EmployeeService = class EmployeeService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getEmployees() {
        return this.firestore.collection('tasks').snapshotChanges();
    }
};
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], EmployeeService);



/***/ }),

/***/ "./src/app/sort-by.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/sort-by.pipe.ts ***!
  \*********************************/
/*! exports provided: SortByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByPipe", function() { return SortByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



let SortByPipe = class SortByPipe {
    transform(value, column, order = '') {
        if (!value || !column || column === '' || order === '') {
            return value;
        } // no array
        if (value.length <= 1) {
            return value;
        } // array with only one item
        return lodash__WEBPACK_IMPORTED_MODULE_2__["orderBy"](value, [column], [order]);
    }
};
SortByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sortBy'
    })
], SortByPipe);



/***/ }),

/***/ "./src/app/sortable.directive.ts":
/*!***************************************!*\
  !*** ./src/app/sortable.directive.ts ***!
  \***************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shopify_draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/draggable */ "./node_modules/@shopify/draggable/lib/draggable.bundle.js");
/* harmony import */ var _shopify_draggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_draggable__WEBPACK_IMPORTED_MODULE_2__);



let SortableDirective = class SortableDirective {
    constructor(el) {
        this.el = el;
        this.stop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngAfterViewInit() {
        this.sortable = new _shopify_draggable__WEBPACK_IMPORTED_MODULE_2__["Sortable"](this.el.nativeElement, {
            draggable: 'li'
        });
        this.sortable.on('sortable:stop', e => this.handleStop(e));
    }
    handleStop(e) {
        /*console.log("in directive handle stop - this.data: " + this.data);
        console.log("in directive handle stop - this.data: " + this.data[0]);
        console.log("in directive handle stop - this.data: " + this.data.length);
    
        console.log(e);
        console.log("in directive handle stop: ")*/
        const { newIndex, oldIndex } = e;
        //console.log("HANDLE STOP: " + this.data[oldIndex].name);
        const next = this.data;
        console.log("HANDLE STOP: " + this.data[oldIndex]);
        const moved = next.splice(oldIndex, 1);
        next.splice(newIndex, 0, moved[0]);
        this.stop.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], SortableDirective.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SortableDirective.prototype, "stop", void 0);
SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[sortable]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], SortableDirective);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDkGXc-8d1nHxAOEtkUpDDnVGoeobhUBcc",
        authDomain: "firestorecrud-e330f.firebaseapp.com",
        databaseURL: "https://firestorecrud-e330f.firebaseio.com",
        projectId: "firestorecrud-e330f",
        storageBucket: "firestorecrud-e330f.appspot.com",
        messagingSenderId: "784685414637",
        appId: "1:784685414637:web:b78b60485df4b583"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shariafuso/websites/everafterlist2019.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map