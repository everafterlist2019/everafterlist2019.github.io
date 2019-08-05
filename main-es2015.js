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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"\">\n\n\n  <h1 *ngIf=\"authenticationService.userData | async\">Hello {{ (authenticationService.userData | async)?.email }}</h1>\n\n  <div *ngIf=\"!(authenticationService.userData | async)\">\n      <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"email\">\n      <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\">\n\n      <button (click)=\"signUp()\">Sign Up</button>\n\n      <button (click)=\"signIn()\">Login</button>\n  </div>\n\n  <button (click)=\"signOut()\" *ngIf=\"authenticationService.userData | async\">Logout</button>\n\n\n  <app-tasklist *ngIf=\"authenticationService.userData | async\"></app-tasklist>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasklist/tasklist.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasklist/tasklist.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-title\">\n  <div class=\"title-wrapper\">\n    <h1>trello</h1>\n  </div>\n</div>\n\n<div class=\"listsWrapper d-inline-flex p-3 mw-100\">\n  <div class=\"user1List user list m-3 flex-shrink-1 w-25\">\n    <!--<h1 class=\"display-4\">User 1.</h1>-->\n    <ul *ngIf=\"user1List\" cdkDropList [cdkDropListData]=\"user1List\" #userList1=\"cdkDropList\" (cdkDropListDropped)=\"reorderList($event, user1List, null)\">\n      <li *ngFor=\"let currTask of user1List.tasks; let i = index\" class=\"task-wrapper\" [ngClass]=\"{'label': currTask.label==true}\" cdkDrag>\n        <div class=\"task\">\n          <ul >\n            <li *ngFor=\"let currSubtask of currTask.subtasks; let x = index\" >\n              <div class=\"task-name-container\">\n                <input [(ngModel)]=\"currSubtask.done\" (change)=\"updateTaskAllLists(currTask, currSubtask)\" type=\"checkbox\" class=\"input-done\" />\n                <textarea [(ngModel)]=\"currSubtask.name\" [ngClass]=\"{'done': currSubtask.done==true}\" (blur)=\"updateTaskAllLists(currTask, currSubtask)\" autosize></textarea>\n\n                <div class=\"drag-handle container\" cdkDragHandle>\n                  <div class=\"row\">\n                    <span class=\"dot\"></span>\n                    <span class=\"dot\"></span>\n                  </div>\n                  <div class=\"row\">\n                    <span class=\"dot\"></span>\n                    <span class=\"dot\"></span>\n                  </div>\n                </div>\n                <a class=\"trash\" (click)=\"userButtonDeleteTask(user1List, currTask)\">-</a>\n\n              </div>\n\n              <p class=\"from\" [ngClass]=\"{'done': currSubtask.done==true}\" ><span>from </span><span>{{currTask.name}}</span></p>\n\n\n            </li>\n          </ul>\n        </div><!--end subtask-->\n      </li>\n    </ul>\n  </div><!--END userList-->\n\n  <div class=\"masterList list m-3 flex-shrink-1 w-25\">\n    <!--<h1 class=\"display-4\">Task List</h1>-->\n    <ul *ngIf=\"masterList\" cdkDropList [cdkDropListData]=\"masterList\" #mainList=\"cdkDropList\" (cdkDropListDropped)=\"reorderList($event, masterList, null)\">\n      <li *ngFor=\"let currTask of masterList.tasks; let i = index\" class=\"task-wrapper\" [ngClass]=\"{'label': currTask.label==true}\" cdkDrag>\n        <div class=\"task\">\n            <input [(ngModel)]=\"currTask.done\" (change)=\"updateFirestore(masterList)\" type=\"checkbox\"  class=\"input-done\"/>\n            <textarea id=\"mytextarea\" [(ngModel)]=\"currTask.name\" [ngClass]=\"{'done': currTask.done==true}\" (blur)=\"updateTaskAllLists(currTask, null)\" autosize></textarea>\n            <div class=\"drag-handle container\" cdkDragHandle>\n              <div class=\"row\">\n                <span class=\"dot\"></span>\n                <span class=\"dot\"></span>\n              </div>\n              <div class=\"row\">\n                <span class=\"dot\"></span>\n                <span class=\"dot\"></span>\n              </div>\n            </div>\n            <span class=\"trash\" (click)=\"masterButtonX(currTask)\">X</span>\n\n        </div><!--end task-->\n        <div class=\"subtasks\">\n          <ul cdkDropList [cdkDropListData]=\"currTask.subtasks\" #secondList=\"cdkDropList\" (cdkDropListDropped)=\"reorderList($event, masterList, currTask.subtasks)\">\n            <li *ngFor=\"let currSubtask of currTask.subtasks; let x = index\" cdkDrag cdkDragLockAxis=\"y\">\n\n              <input [(ngModel)]=\"currSubtask.done\" (change)=\"updateTaskAllLists(currTask, currSubtask)\" type=\"checkbox\" class=\"input-done\"/>\n              <textarea [(ngModel)]=\"currSubtask.name\" [ngClass]=\"{'done': currSubtask.done==true, 'highlight':currSubtask.inUser1List || currSubtask.inUser2List}\" (blur)=\"updateTaskAllLists(currTask, currSubtask)\" autosize></textarea>\n              <input [(ngModel)]=\"currSubtask.inUser1List\" (change)=\"userCheckbox(user1List, currTask, currSubtask, currSubtask.inUser1List)\" type=\"checkbox\" class=\"assignUserCheckbox\"/>\n              <input [(ngModel)]=\"currSubtask.inUser2List\" (change)=\"userCheckbox(user2List, currTask, currSubtask, currSubtask.inUser2List)\" type=\"checkbox\" class=\"assignUserCheckbox\" />\n\n              <div class=\"drag-handle container\" cdkDragHandle>\n                <div class=\"row\">\n                  <span class=\"dot\"></span>\n                  <span class=\"dot\"></span>\n                </div>\n                <div class=\"row\">\n                  <span class=\"dot\"></span>\n                  <span class=\"dot\"></span>\n                </div>\n              </div>\n              <a class=\"trash\" (click)=\"deleteSubtaskAllLists(masterList, currTask, currSubtask, x)\">-</a>\n\n            </li>\n            <li>\n              <a class=\"add\" (click)=\"addSubtask(masterList, currTask, newTaskName)\">+</a>\n            </li>\n          </ul>\n        </div><!--end subtask-->\n      </li>\n    </ul>\n    <div class=\"add-task-buttons\">\n      <!--<input class=\"newTask\" type=\"text\" [(ngModel)]=\"newTaskName\"/>-->\n      <a (click)=\"addTask(masterList, newTaskName, true)\" class=\"btn \">Add Label</a>\n      <a (click)=\"addTask(masterList, newTaskName, false)\" class=\"btn \">Add Task</a>\n    </div>\n  </div><!--END masterList-->\n\n\n  <div class=\"user2List user list m-3 flex-shrink-1 w-25\">\n    <!--<h1 class=\"display-4\">User 1.</h1>-->\n    <ul *ngIf=\"user2List\" cdkDropList [cdkDropListData]=\"user2List\" #userList1=\"cdkDropList\" (cdkDropListDropped)=\"reorderList($event, user2List, null)\">\n      <li *ngFor=\"let currTask of user2List.tasks; let i = index\" class=\"task-wrapper\" [ngClass]=\"{'label': currTask.label==true}\" cdkDrag>\n        <div class=\"task\">\n          <ul >\n            <li *ngFor=\"let currSubtask of currTask.subtasks; let x = index\" >\n              <div class=\"task-name-container\">\n                <input [(ngModel)]=\"currSubtask.done\" (change)=\"updateTaskAllLists(currTask, currSubtask)\" type=\"checkbox\" class=\"input-done\" />\n                <textarea [(ngModel)]=\"currSubtask.name\" [ngClass]=\"{'done': currSubtask.done==true}\" (blur)=\"updateTaskAllLists(currTask, currSubtask)\" autosize></textarea>\n\n                <div class=\"drag-handle container\" cdkDragHandle>\n                  <div class=\"row\">\n                    <span class=\"dot\"></span>\n                    <span class=\"dot\"></span>\n                  </div>\n                  <div class=\"row\">\n                    <span class=\"dot\"></span>\n                    <span class=\"dot\"></span>\n                  </div>\n                </div>\n                <a class=\"trash\" (click)=\"userButtonDeleteTask(user2List, currTask)\">-</a>\n\n              </div>\n\n              <p class=\"from\" [ngClass]=\"{'done': currSubtask.done==true}\" ><span>from </span><span>{{currTask.name}}</span></p>\n\n\n            </li>\n          </ul>\n        </div><!--end subtask-->\n      </li>\n    </ul>\n  </div><!--END userList-->\n\n</div><!--END listsWrapper-->\n"

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
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/authentication.service */ "./src/app/shared/authentication.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var src_app_tasklist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/tasklist.service */ "./src/app/tasklist.service.ts");





let AppComponent = class AppComponent {
    //userID: string;
    //allLists2: TaskList[];
    constructor(authenticationService, firestore, service3) {
        /*this.service2.getTasks().subscribe(actionArray =>{
          this.allLists2 = actionArray.map(item => {
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data()
            } as TaskList;
          })
        });*/
        //this.userID = null;
        this.authenticationService = authenticationService;
        this.firestore = firestore;
        this.service3 = service3;
        this.title = 'Angular7Firestore';
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
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        src_app_tasklist_service__WEBPACK_IMPORTED_MODULE_4__["TasklistService"]])
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
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _tasklist_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tasklist.service */ "./src/app/tasklist.service.ts");
/* harmony import */ var _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tasklist/tasklist.component */ "./src/app/tasklist/tasklist.component.ts");
/* harmony import */ var ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-textarea-autosize */ "./node_modules/ngx-textarea-autosize/fesm2015/ngx-textarea-autosize.js");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/authentication.service */ "./src/app/shared/authentication.service.ts");
















/* Auth service */

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_13__["TasklistComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_14__["TextareaAutosizeModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"]
        ],
        providers: [
            _tasklist_service__WEBPACK_IMPORTED_MODULE_12__["TasklistService"],
            _shared_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/authentication.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/authentication.service.ts ***!
  \**************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");



let AuthenticationService = class AuthenticationService {
    constructor(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
        this.userData = angularFireAuth.authState;
    }
    /* Sign up */
    SignUp(email, password) {
        this.angularFireAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
            console.log('Successfully signed up!', res);
        })
            .catch(error => {
            console.log('Something is wrong:', error.message);
            //alert(error.message);
        });
    }
    /* Sign in */
    SignIn(email, password) {
        this.angularFireAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(res => {
            console.log('Successfully signed in!');
        })
            .catch(err => {
            console.log('Something is wrong:', err.message);
        });
    }
    /* Sign out */
    SignOut() {
        this.angularFireAuth
            .auth
            .signOut();
    }
};
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/tasklist.service.ts":
/*!*************************************!*\
  !*** ./src/app/tasklist.service.ts ***!
  \*************************************/
/*! exports provided: TasklistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklistService", function() { return TasklistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




let TasklistService = class TasklistService {
    //userId: string;
    constructor(firestore) {
        this.firestore = firestore;
    }
    createNewTaskList() {
        console.log("createNewTaskList");
    }
    getTasks() {
        //var userID = 'tasks2';
        var testID = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
        console.log("testID: " + testID);
        /*console.log("tasklist service: " + firebase.auth().currentUser.uid);
        var testID = firebase.auth().currentUser.uid;
    
        if (this.firestore.doc(testID + '/master') == null){
          console.log("tasklist service: " + "it is null!!!!");
        }*/
        return this.firestore.collection(testID).snapshotChanges();
    }
};
TasklistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], TasklistService);



/***/ }),

/***/ "./src/app/tasklist/tasklist.component.css":
/*!*************************************************!*\
  !*** ./src/app/tasklist/tasklist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tsaXN0L3Rhc2tsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/tasklist/tasklist.component.ts":
/*!************************************************!*\
  !*** ./src/app/tasklist/tasklist.component.ts ***!
  \************************************************/
/*! exports provided: TasklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklistComponent", function() { return TasklistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var src_app_tasklist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/tasklist.service */ "./src/app/tasklist.service.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);








let TasklistComponent = class TasklistComponent {
    constructor(firestore, service2) {
        this.firestore = firestore;
        this.service2 = service2;
    }
    ngOnInit() {
        //console.log("ngOnInit" + firebase.auth().currentUser.uid);
        this.newTaskName = '';
        this.userID = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid;
        //this.userID = 'tasks2';
        this.service2.getTasks().subscribe(actionArray => {
            this.allLists = actionArray.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            console.log("ngoninit: " + this.userID);
            //console.log("ngOnInit allList id: " + this.allLists[0].id);
            console.log("ngOnInit allList length: " + this.allLists.length);
            //if new user, create new collection and add in sample tasks
            if (this.allLists.length < 3) {
                console.log("success!!!!!");
                var newTask = {
                    name: "yay",
                    id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(),
                    done: false,
                    inUser1List: true,
                    inUser2List: true,
                    label: false,
                    subtasks: [
                        { name: 'new subtask...',
                            id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(),
                            inUser1List: true,
                            inUser2List: true,
                            done: false }
                    ]
                };
                this.firestore.doc(this.userID + '/' + 'master').set({
                    tasks: [newTask]
                });
                this.firestore.doc(this.userID + '/' + 'user1').set({
                    tasks: [newTask]
                });
                this.firestore.doc(this.userID + '/' + 'user2').set({
                    tasks: [newTask]
                });
                this.masterList = {
                    id: 'master',
                    tasks: [newTask]
                };
                this.user1List = {
                    id: 'user1',
                    tasks: [newTask]
                };
                this.user2List = {
                    id: 'user2',
                    tasks: [newTask]
                };
            }
            else {
                this.masterList = {
                    id: this.allLists[0].id,
                    tasks: this.allLists[0].tasks
                };
                this.user1List = {
                    id: this.allLists[1].id,
                    tasks: this.allLists[1].tasks
                };
                this.user2List = {
                    id: this.allLists[2].id,
                    tasks: this.allLists[2].tasks
                };
            }
        });
        console.log(this.firestore.doc(this.userID + '/master'));
    }
    //IS THIS FUNCTION NECESSARY?
    getTaskBySubtask(arr, currSubtask) {
        return arr.tasks.find(task => task.subtasks.some(item => item.id === currSubtask.id));
    }
    //---------USER FUNCTIONALITY---------
    //Master List --> <Add New Task/Label>
    addTask(arr, newTaskName, isLabel) {
        var newTask = {
            name: newTaskName,
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(),
            done: false,
            inUser1List: false,
            inUser2List: false,
            label: isLabel,
            subtasks: [
                { name: 'new subtask...',
                    id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(),
                    inUser1List: false,
                    inUser2List: false,
                    done: false }
            ]
        };
        this.arrayUnionFirestore(arr, newTask);
        this.newTaskName = '';
    }
    //Master List --> subtask --> <Add New Task>
    addSubtask(arr, currTask, newTaskName) {
        var newSubtask = {
            name: newTaskName,
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(),
            inUser1List: false,
            inUser2List: false,
            done: false
        };
        currTask.subtasks.push(newSubtask);
        this.updateFirestore(arr);
        this.newTaskName = '';
    }
    //Master List --> X
    masterButtonX(task) {
        //remove any subtasks from user lists
        for (var i = 0; i < this.user1List.tasks.length; i++) {
            if (this.user1List.tasks[i].id == task.id) {
                this.deleteTask(this.user1List, this.user1List.tasks[i]);
            }
        }
        for (var i = 0; i < this.user2List.tasks.length; i++) {
            if (this.user2List.tasks[i].id == task.id) {
                this.deleteTask(this.user2List, this.user2List.tasks[i]);
            }
        }
        //delete task from master
        this.deleteTask(this.masterList, task);
    }
    //Master List --> subtask --> -
    deleteSubtaskAllLists(arr, task, subTaskToDelete, subTaskIndex) {
        //if in user 1, delete task containing subtask from user1
        if (subTaskToDelete.inUser1List == true) {
            this.deleteUserTask(this.user1List, task, subTaskToDelete);
        }
        //if in user 2, delete task containing subtask from user1
        if (subTaskToDelete.inUser2List == true) {
            this.deleteUserTask(this.user1List, task, subTaskToDelete);
        }
        //delete subtask from master
        this.deleteSubtask(this.masterList, task, subTaskIndex);
    }
    //Master List --> subtask --> ☐☐
    userCheckbox(arr, currTask, currSubtask, inUserList) {
        //update master list in firestore
        this.updateFirestore(this.masterList);
        //get subtask in each user, and update inuser1list and inuser2list
        if (currSubtask.inUser1List == true) {
            for (var i = 0; i < this.user1List.tasks.length; i++) {
                if (this.user1List.tasks[i].subtasks[0].id == currSubtask.id) {
                    this.user1List.tasks[i].subtasks[0].inUser1List = currSubtask.inUser1List;
                    this.user1List.tasks[i].subtasks[0].inUser2List = currSubtask.inUser2List;
                    this.updateFirestore(this.user1List);
                }
            }
        }
        if (currSubtask.inUser2List == true) {
            for (var i = 0; i < this.user2List.tasks.length; i++) {
                if (this.user2List.tasks[i].subtasks[0].id == currSubtask.id) {
                    this.user2List.tasks[i].subtasks[0].inUser1List = currSubtask.inUser1List;
                    this.user2List.tasks[i].subtasks[0].inUser2List = currSubtask.inUser2List;
                    this.updateFirestore(this.user2List);
                }
            }
        }
        //create or delete item from user list
        if (inUserList == true) {
            this.addUserTask(arr, currTask, currSubtask);
        }
        else {
            this.deleteUserTask(arr, currTask, currSubtask);
        }
    }
    addUserTask(arr, currTask, currSubtask) {
        //create new user task, with same structure but only 1 subtask
        var newTask = {
            name: currTask.name,
            id: currTask.id,
            done: currTask.done,
            inUser1List: currTask.inUser1List,
            inUser2List: currTask.inUser2List,
            label: currTask.label,
            subtasks: [
                { name: currSubtask.name,
                    id: currSubtask.id,
                    inUser1List: currSubtask.inUser1List,
                    inUser2List: currSubtask.inUser2List,
                    done: currSubtask.done }
            ]
        };
        //update user list in firestore
        this.arrayUnionFirestore(arr, newTask);
    }
    deleteUserTask(arr, currTask, currSubtask) {
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
    updateTaskAllLists(newTask, newSubtask) {
        //if no subtask to update, and only updating task name in user lists
        if (newSubtask == null) {
            for (var i = 0; i < this.user1List.tasks.length; i++) {
                if (this.user1List.tasks[i].id == newTask.id) {
                    this.user1List.tasks[i].name = newTask.name;
                }
            }
            for (var i = 0; i < this.user2List.tasks.length; i++) {
                if (this.user2List.tasks[i].id == newTask.id) {
                    this.user2List.tasks[i].name = newTask.name;
                }
            }
        }
        else {
            //update master subtask
            var oldTask = this.getTaskBySubtask(this.masterList, newSubtask);
            var oldSubtask;
            for (var i = 0; i < oldTask.subtasks.length; i++) {
                //console.log("master subtask:" + oldTask.subtasks.length);
                if (oldTask.subtasks[i].id == newSubtask.id) {
                    oldSubtask = oldTask.subtasks[i];
                    oldTask.subtasks[i].name = newSubtask.name;
                    oldTask.subtasks[i].done = newSubtask.done;
                }
            }
            //update all instances in user 1
            if (oldSubtask.inUser1List == true) {
                for (var i = 0; i < this.user1List.tasks.length; i++) {
                    if (this.user1List.tasks[i].id == newTask.id) {
                        //this.user1List.tasks[i].name = newTask.name;
                        //console.log("user 1 subtask:" + this.user1List.tasks[i].subtasks[0].name);
                        if (this.user1List.tasks[i].subtasks[0].id == newSubtask.id) {
                            this.user1List.tasks[i].subtasks[0].name = newSubtask.name;
                            this.user1List.tasks[i].subtasks[0].done = newSubtask.done;
                        }
                    }
                }
            }
            //update all instances in user 2
            if (oldSubtask.inUser2List == true) {
                for (var i = 0; i < this.user2List.tasks.length; i++) {
                    if (this.user2List.tasks[i].id == newTask.id) {
                        //this.user1List.tasks[i].name = newTask.name;
                        //console.log("user 2 subtask:" + this.user2List.tasks[i].subtasks[0].name);
                        if (this.user2List.tasks[i].subtasks[0].id == newSubtask.id) {
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
    userButtonDeleteTask(arr, task) {
        //uncheck task from master list
        for (var i = 0; i < this.masterList.tasks.length; i++) {
            for (var x = 0; x < this.masterList.tasks[i].subtasks.length; x++) {
                if (this.masterList.tasks[i].subtasks[x].id == task.subtasks[0].id) {
                    if (arr.id == 'user1') {
                        this.masterList.tasks[i].subtasks[x].inUser1List = false;
                    }
                    if (arr.id == 'user2') {
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
    deleteTask(arr, task) {
        if (task !== null) {
            this.firestore.doc(this.userID + '/' + arr.id).update({
                tasks: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayRemove(task)
            });
        }
    }
    //DELETE SUBTASK IN FIRESTORE
    deleteSubtask(arr, task, subtaskIndex) {
        task.subtasks.splice(subtaskIndex, 1);
        this.updateFirestore(arr);
    }
    //UPDATE FIRESTORE
    updateFirestore(arr) {
        this.firestore.doc(this.userID + '/' + arr.id).update({ tasks: arr.tasks });
    }
    //ADD FIRESTORE
    arrayUnionFirestore(arr, task) {
        this.firestore.doc(this.userID + '/' + arr.id).update({
            tasks: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayUnion(task)
        });
    }
    createNewCollection() {
        console.log("create new collection");
    }
    //DRAG AND DROP
    reorderList(event, arr, subArr) {
        if (event.previousContainer !== event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            //IF MOVING SUBTASKS,
            if (subArr != null) {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(subArr, event.previousIndex, event.currentIndex);
            }
            //ELSE, MOVING MAIN TASKS
            else {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(arr.tasks, event.previousIndex, event.currentIndex);
            }
            //UPDATE BACK TO firestore
            this.updateFirestore(arr);
        }
    }
}; //end class
TasklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tasklist',
        template: __webpack_require__(/*! raw-loader!./tasklist.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasklist/tasklist.component.html"),
        styles: [__webpack_require__(/*! ./tasklist.component.css */ "./src/app/tasklist/tasklist.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        src_app_tasklist_service__WEBPACK_IMPORTED_MODULE_5__["TasklistService"]])
], TasklistComponent);



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