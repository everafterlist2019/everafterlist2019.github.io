(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/ngx-toastr/toastr.css":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/ngx-toastr/toastr.css ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n\n.toast-title {\n  font-weight: bold;\n}\n\n.toast-message {\n  word-wrap: break-word;\n}\n\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n\n.toast-container * {\n  box-sizing: border-box;\n}\n\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n.toast-success {\n  background-color: #51A351;\n}\n\n.toast-error {\n  background-color: #BD362F;\n}\n\n.toast-info {\n  background-color: #2F96B4;\n}\n\n.toast-warning {\n  background-color: #F89406;\n}\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9uZ3gtdG9hc3RyL3RvYXN0ci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0pBQWtKOztBQUVsSixhQUFhOztBQUNiO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UsTUFBTTtFQUNOLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFDQTtFQUNFLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUNBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUNBO0VBQ0UsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFDQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBQ0E7O3lEQUV5RDs7QUFDekQ7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFDQSxpSEFBaUg7O0FBQ2pIO0VBQ0UscWxCQUFxbEI7QUFDdmxCOztBQUNBLGtIQUFrSDs7QUFDbEg7RUFDRSw2akJBQTZqQjtBQUMvakI7O0FBQ0EsMkdBQTJHOztBQUMzRztFQUNFLHdkQUF3ZDtBQUMxZDs7QUFDQSwwSEFBMEg7O0FBQzFIO0VBQ0Usc29CQUFzb0I7QUFDeG9COztBQUNBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBOztFQUVFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUNBLHNCQUFzQjs7QUFDdEI7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7QUFDRjs7QUFDQTtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjtBQUNGOztBQUNBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoibm9kZV9tb2R1bGVzL25neC10b2FzdHIvdG9hc3RyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJhc2VkIG9uIGFuZ3VsYXItdG9hc3RyIGNzcyBodHRwczovL2dpdGh1Yi5jb20vRm94YW5keHNzL2FuZ3VsYXItdG9hc3RyL2Jsb2IvY2I1MDhmZTY4MDFkNmIyODhkM2FmYzUyNWJiNDBmZWUxYjEwMTY1MC9kaXN0L2FuZ3VsYXItdG9hc3RyLmNzcyAqL1xuXG4vKiBwb3NpdGlvbiAqL1xuLnRvYXN0LWNlbnRlci1jZW50ZXIge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi50b2FzdC10b3AtY2VudGVyIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9hc3QtYm90dG9tLWNlbnRlciB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvYXN0LXRvcC1mdWxsLXdpZHRoIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2FzdC10b3AtbGVmdCB7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMTJweDtcbn1cbi50b2FzdC10b3AtcmlnaHQge1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xufVxuLnRvYXN0LWJvdHRvbS1yaWdodCB7XG4gIHJpZ2h0OiAxMnB4O1xuICBib3R0b206IDEycHg7XG59XG4udG9hc3QtYm90dG9tLWxlZnQge1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IDEycHg7XG59XG5cbi8qIHRvYXN0IHN0eWxlcyAqL1xuLnRvYXN0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udG9hc3QtbWVzc2FnZSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi50b2FzdC1tZXNzYWdlIGEsXG4udG9hc3QtbWVzc2FnZSBsYWJlbCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnRvYXN0LW1lc3NhZ2UgYTpob3ZlciB7XG4gIGNvbG9yOiAjQ0NDQ0NDO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogLTAuM2VtO1xuICB0b3A6IC0wLjNlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZmZmZjtcbiAgLyogb3BhY2l0eTogMC44OyAqL1xufVxuLnRvYXN0LWNsb3NlLWJ1dHRvbjpob3Zlcixcbi50b2FzdC1jbG9zZS1idXR0b246Zm9jdXMge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi8qQWRkaXRpb25hbCBwcm9wZXJ0aWVzIGZvciBidXR0b24gdmVyc2lvblxuIGlPUyByZXF1aXJlcyB0aGUgYnV0dG9uIGVsZW1lbnQgaW5zdGVhZCBvZiBhbiBhbmNob3IgdGFnLlxuIElmIHlvdSB3YW50IHRoZSBhbmNob3IgdmVyc2lvbiwgaXQgcmVxdWlyZXMgYGhyZWY9XCIjXCJgLiovXG5idXR0b24udG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuLnRvYXN0LWNvbnRhaW5lciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cbi50b2FzdC1jb250YWluZXIgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4udG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgMCA2cHg7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNXB4IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTJweCAjOTk5OTk5O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTJweCAjMDAwMDAwO1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9pbmZvLWNpcmNsZS5zdmcgKi9cbi50b2FzdC1pbmZvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHonLyUzRSUzQy9zdmclM0VcIik7XG59XG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci90aW1lcy1jaXJjbGUuc3ZnICovXG4udG9hc3QtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4em0xMjEuNiAzMTMuMWM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzM4IDM3Ny42Yy00LjcgNC43LTEyLjMgNC43LTE3IDBMMjU2IDMxMmwtNjUuMSA2NS42Yy00LjcgNC43LTEyLjMgNC43LTE3IDBMMTM0LjQgMzM4Yy00LjctNC43LTQuNy0xMi4zIDAtMTdsNjUuNi02NS02NS42LTY1LjFjLTQuNy00LjctNC43LTEyLjMgMC0xN2wzOS42LTM5LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDY1IDY1LjcgNjUuMS02NS42YzQuNy00LjcgMTIuMy00LjcgMTcgMGwzOS42IDM5LjZjNC43IDQuNyA0LjcgMTIuMyAwIDE3TDMxMiAyNTZsNjUuNiA2NS4xeicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2NoZWNrLnN2ZyAqL1xuLnRvYXN0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00xNzMuODk4IDQzOS40MDRsLTE2Ni40LTE2Ni40Yy05Ljk5Ny05Ljk5Ny05Ljk5Ny0yNi4yMDYgMC0zNi4yMDRsMzYuMjAzLTM2LjIwNGM5Ljk5Ny05Ljk5OCAyNi4yMDctOS45OTggMzYuMjA0IDBMMTkyIDMxMi42OSA0MzIuMDk1IDcyLjU5NmM5Ljk5Ny05Ljk5NyAyNi4yMDctOS45OTcgMzYuMjA0IDBsMzYuMjAzIDM2LjIwNGM5Ljk5NyA5Ljk5NyA5Ljk5NyAyNi4yMDYgMCAzNi4yMDRsLTI5NC40IDI5NC40MDFjLTkuOTk4IDkuOTk3LTI2LjIwNyA5Ljk5Ny0zNi4yMDQtLjAwMXonLyUzRSUzQy9zdmclM0VcIik7XG59XG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9leGNsYW1hdGlvbi10cmlhbmdsZS5zdmcgKi9cbi50b2FzdC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMicgd2lkdGg9JzU3NicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC10b3AtY2VudGVyIC5uZ3gtdG9hc3RyLFxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tY2VudGVyIC5uZ3gtdG9hc3RyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC10b3AtZnVsbC13aWR0aCAubmd4LXRvYXN0cixcbi50b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGggLm5neC10b2FzdHIge1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLm5neC10b2FzdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMzAzO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi50b2FzdC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxQTM1MTtcbn1cbi50b2FzdC1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCRDM2MkY7XG59XG4udG9hc3QtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyRjk2QjQ7XG59XG4udG9hc3Qtd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGODk0MDY7XG59XG4udG9hc3QtcHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAyNDBweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggNTBweDtcbiAgICB3aWR0aDogMTFlbTtcbiAgfVxuICAudG9hc3QtY29udGFpbmVyIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgIHJpZ2h0OiAtMC4yZW07XG4gICAgdG9wOiAtMC4yZW07XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDI0MXB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDUwcHg7XG4gICAgd2lkdGg6IDE4ZW07XG4gIH1cbiAgLnRvYXN0LWNvbnRhaW5lciAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgICByaWdodDogLTAuMmVtO1xuICAgIHRvcDogLTAuMmVtO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICAgIHdpZHRoOiAyNWVtO1xuICB9XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--13-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap\");\n/* You can add global styles to this file, and also import other style files */\nbody {\n  background-color: #FAFAFA;\n}\n.main-title {\n  margin-bottom: 25px;\n  display: flex;\n  overflow: hidden;\n  height: 128px;\n}\n.main-title .title-wrapper {\n  flex: 1;\n  background: #DADCE0;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  margin-bottom: -37px;\n}\n.main-title h1 {\n  font-family: \"Montserrat\", sans-serif;\n  color: white;\n  background-color: #DADCE0;\n  text-align: left;\n  font-size: 7.5rem;\n  text-align: center;\n  font-weight: 600;\n}\n.listsWrapper .w-25 {\n  width: 30% !important;\n}\n.listsWrapper .list {\n  background-color: white;\n  border-radius: 28px;\n  padding-top: 50px;\n}\n.listsWrapper .add-task-buttons {\n  text-align: center;\n  padding-bottom: 29px;\n  color: #989898;\n}\n/*----all task styling----*/\n.task-wrapper {\n  padding: 17px 37px 0px;\n  /*HOVER FUNCTIONALITY*/\n  /*END HOVER FUNCTIONALITY*/\n}\n.task-wrapper .highlight {\n  background-color: #dadce0;\n  background-image: linear-gradient(to right, #f3eeee 0%, #e7e9ec 100%);\n}\n.task-wrapper .trash {\n  font-size: 0.9rem;\n  padding: 0px 10px;\n  color: #aaa5a5 !important;\n}\n.task-wrapper textarea {\n  resize: none;\n  font-family: \"Montserrat\", sans-serif;\n  color: #989898;\n  text-align: left;\n  padding-top: 0px;\n  padding-left: 7px;\n  padding-right: 9px;\n}\n.task-wrapper .task textarea {\n  margin-bottom: -6px;\n  font-size: 0.9rem;\n}\n.task-wrapper .subtasks textarea {\n  font-size: 0.6rem;\n  line-height: 0.6rem;\n}\n.task-wrapper .subtasks .trash {\n  margin-top: -6px;\n}\n.task-wrapper .subtasks li {\n  margin-bottom: -6px;\n  display: flex;\n  align-items: flex-start;\n  margin-left: 21px;\n  font-size: 0.8rem;\n  margin-top: 7px;\n}\n.task-wrapper .trash, .task-wrapper .drag-handle, .task-wrapper .assignUserCheckbox, .task-wrapper .add {\n  opacity: 0;\n}\n.task-wrapper li:hover .trash, .task-wrapper li:hover .drag-handle, .task-wrapper li:hover .assignUserCheckbox, .task-wrapper li:hover .add {\n  opacity: 1;\n}\n.task-wrapper .task:hover .trash, .task-wrapper .task:hover .drag-handle, .task-wrapper .task:hover .add {\n  opacity: 1;\n}\n.task-wrapper .drag-handle {\n  display: flex;\n  flex-direction: column;\n  width: 10px;\n  margin-left: 8px;\n  margin-right: -7px;\n  padding-right: 0px;\n}\n/*----user task styling----*/\n.user .task-name-container {\n  position: relative;\n}\n.user .task textarea {\n  margin-top: 3px;\n  margin-bottom: -5px;\n  line-height: 20px;\n}\n.user .trash {\n  position: absolute;\n  right: 0px;\n  top: 0;\n}\n.user .drag-handle {\n  position: absolute;\n  right: 22px;\n  top: 7px;\n}\n.user .from {\n  margin-top: 5px;\n  font-size: 0.6rem;\n  border-bottom: 0px;\n  padding-left: 20px;\n  font-style: italic;\n  margin-left: 0px;\n  color: #989898;\n  border-bottom: 0px;\n}\n.user .task-wrapper {\n  padding-bottom: 17px;\n}\n.user .label .from {\n  display: none;\n}\n.user .label .trash {\n  position: absolute;\n  right: 39px;\n  top: 0;\n}\n.user .label .drag-handle {\n  position: absolute;\n  right: 62px;\n  top: 7px;\n}\n/*label task styling----*/\n.task-wrapper.label {\n  font-family: \"Montserrat\", sans-serif;\n  color: white;\n  background-color: #DADCE0;\n  text-align: left;\n  font-size: 3.5rem;\n  margin-left: -11px;\n  border-radius: 3px;\n  margin-right: 32px;\n}\n.task-wrapper.label .task textarea {\n  font-weight: 700;\n}\n.task-wrapper.label textarea {\n  color: white;\n  font-size: 1.4rem;\n}\n.task-wrapper.label .subtasks textarea {\n  font-size: 0.7rem;\n}\n.task-wrapper.label .input-done {\n  display: none;\n}\n.task-wrapper.label .subtasks li {\n  margin-left: 0px;\n}\n.task-wrapper.label .add {\n  margin-left: 7px;\n}\ninput.ng-touched.ng-invalid {\n  border-color: red;\n}\nul {\n  list-style-type: none;\n  padding-left: 0px;\n}\nhtml {\n  font-size: 16px;\n}\nh1.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n  text-align: center;\n  font-weight: 600;\n  color: #272626;\n}\n.subTasks {\n  font-size: 0.8rem;\n}\n.done {\n  text-decoration: line-through;\n}\n.listsWrapper {\n  display: flex;\n  justify-content: space-around;\n}\n/*-------start all form-------*/\ninput, textarea {\n  background: none;\n  border: none;\n}\nul {\n  margin-bottom: 0;\n}\n/*-------end all forms-------*/\n/*-------start task-------*/\n.task {\n  display: flex;\n  align-items: center;\n}\n.task textarea {\n  font-size: 1.5rem;\n}\n.add {\n  color: #aaa5a5 !important;\n}\n/*-------end task-------*/\n/*-------NEW TASK BUTTON-------*/\n.newTask {\n  border-bottom: solid 2px #000000;\n}\n/*------end task button--------*/\n.user .task {\n  align-items: flex-start;\n}\n.user .task input {\n  margin-top: 6px;\n}\n.user .task p {\n  margin-bottom: 0px;\n}\n.user .task-name-container {\n  display: flex;\n  flex-direction: row;\n}\n.user .task-wrapper {\n  position: relative;\n}\n.drag-handle .dot {\n  height: 4px;\n  width: 3px;\n  background-color: #bbb;\n  border-radius: 1px;\n  margin-right: 2px;\n  margin-bottom: 2px;\n}\n@media only screen and (max-width: 480px) {\n  .listsWrapper {\n    justify-content: initial;\n  }\n\n  .user h1 {\n    width: 83vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFyaWFmdXNvL3dlYnNpdGVzL2V2ZXJhZnRlcmxpc3QyMDE5LmdpdGh1Yi5pby9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtRLHNGQUFBO0FBTFIsOEVBQUE7QUErQkE7RUFDRSx5QkFwQmE7QUNSZjtBRCtCQTtFQUNFLG1CQXJCWTtFQXNCWixhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDNUJGO0FENkJFO0VBQ0UsT0FBQTtFQUNBLG1CQTdCVTtFQThCVixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDM0JKO0FENkJFO0VBNUJBLHFDQWJXO0VBY1gsWUFaZTtFQWFmLHlCQVRZO0VBVVosZ0JBQUE7RUEyQkUsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDeEJKO0FENkJFO0VBQ0UscUJBQUE7QUMxQko7QUQ0QkU7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBL0NXO0FDcUJmO0FENEJFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBMURZO0FDZ0NoQjtBRCtCQSwyQkFBQTtBQUNBO0VBQ0ksc0JBQUE7RUFxQ0Ysc0JBQUE7RUFxQkEsMEJBQUE7QUNwRkY7QUQyQkU7RUFDRSx5QkFBQTtFQUNBLHFFQUFBO0FDekJKO0FEMkJFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDekJKO0FEMkJFO0VBQ0UsWUFBQTtFQTVERixxQ0FuQlc7RUFvQlgsY0FqQmM7RUFrQmQsZ0JBQUE7RUE0REUsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDdkJKO0FEeUJFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ3ZCSjtBRDBCRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUN4Qko7QUQwQkU7RUFDRSxnQkFBQTtBQ3hCSjtBRDBCRTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUN4Qk47QUQ2Qkk7RUFDRSxVQUFBO0FDM0JOO0FEZ0NJO0VBQ0UsVUFBQTtBQzlCTjtBRG9DSTtFQUNFLFVBQUE7QUNsQ047QUQwQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDeENKO0FENENBLDRCQUFBO0FBRUU7RUFDRSxrQkFBQTtBQzFDSjtBRDRDRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDMUNKO0FENENFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtBQzFDSjtBRDRDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUMxQ0o7QUQ0Q0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBcEtZO0VBcUtaLGtCQUFBO0FDMUNKO0FENENFO0VBQ0Usb0JBQUE7QUMxQ0o7QUQ0Q0U7RUFDRSxhQUFBO0FDMUNKO0FENENFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQzFDSjtBRDRDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUMxQ0o7QUQrQ0EseUJBQUE7QUFDQTtFQWpMRSxxQ0FiVztFQWNYLFlBWmU7RUFhZix5QkFUWTtFQVVaLGdCQUFBO0VBZ0xFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDekNKO0FEMENJO0VBQ0UsZ0JBQUE7QUN4Q047QUQwQ0k7RUFDRSxZQXRNVztFQXVNWCxpQkFBQTtBQ3hDTjtBRDBDSTtFQUNFLGlCQUFBO0FDeENOO0FEMENJO0VBQ0UsYUFBQTtBQ3hDTjtBRDBDSTtFQUNFLGdCQUFBO0FDeENOO0FENENJO0VBQ0UsZ0JBQUE7QUMxQ047QURzREE7RUFDRSxpQkFBQTtBQ25ERjtBRHNEQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUNuREY7QURzREE7RUFDRSxlQUFBO0FDbkRGO0FEc0RBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNuREo7QUR1REE7RUFDRSxpQkFBQTtBQ3BERjtBRHdEQTtFQUNFLDZCQUFBO0FDckRGO0FEd0RBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FDckRGO0FEd0RBLCtCQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNyREY7QUR1REE7RUFDRSxnQkFBQTtBQ3BERjtBRHlEQSw4QkFBQTtBQUlBLDJCQUFBO0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUMxREY7QUQ0REE7RUFDRSxpQkFBQTtBQ3pERjtBRDZEQTtFQUNFLHlCQUFBO0FDMURGO0FENkRBLHlCQUFBO0FBRUEsZ0NBQUE7QUFDQTtFQUNJLGdDQUFBO0FDM0RKO0FENkRBLGdDQUFBO0FBRUE7RUFDRSx1QkFBQTtBQzNERjtBRDZEQTtFQUNFLGVBQUE7QUMxREY7QUQ0REE7RUFDRSxrQkFBQTtBQ3pERjtBRDREQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ3pERjtBRDREQTtFQUNFLGtCQUFBO0FDekRGO0FENERBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3pERjtBRDREQTtFQUVFO0lBQ0ksd0JBQUE7RUMxREo7O0VENERBO0lBQ0UsV0FBQTtFQ3pERjtBQUNGIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8vQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcbi8vQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcbi8vQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ob3RvK1NhbnMrSlA6NDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcbi8vQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDYwMCZkaXNwbGF5PXN3YXAnKTtcblxuJGZvbnRGYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiRmb250U2l6ZUJhc2VsaW5lOiAxNnB4O1xuJGZvbnRDb2xvckxpZ2h0OiB3aGl0ZTtcbiRmb250Q29sb3JEYXJrOiAjOTg5ODk4O1xuXG4kYmdDb2xvckxpZ2h0OiAjRkFGQUZBO1xuJGJnQ29sb3JEYXJrOiAjREFEQ0UwO1xuXG4kbWFyZ2luU21hbGw6IDI1cHg7XG4kbWFyZ2luTWVkaXVtOiA1MHB4O1xuJG1hcmdpbkxhcmdlOiA5MHB4O1xuXG5AbWl4aW4gZm9udExpZ2h0KCl7XG4gIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcbiAgY29sb3I6ICRmb250Q29sb3JMaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnQ29sb3JEYXJrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuQG1peGluIGZvbnREYXJrKCl7XG4gIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcbiAgY29sb3I6ICRmb250Q29sb3JEYXJrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnQ29sb3JMaWdodDtcbn1cblxuLm1haW4tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAkbWFyZ2luU21hbGw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTI4cHg7XG4gIC50aXRsZS13cmFwcGVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQ6ICRiZ0NvbG9yRGFyaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMzdweDtcbiAgfVxuICBoMSB7XG4gICAgQGluY2x1ZGUgZm9udExpZ2h0KCk7XG4gICAgZm9udC1zaXplOiA3LjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cblxuLmxpc3RzV3JhcHBlcntcbiAgLnctMjUge1xuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbiAgfVxuICAubGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICBwYWRkaW5nLXRvcDogJG1hcmdpbk1lZGl1bTtcbiAgfVxuICAuYWRkLXRhc2stYnV0dG9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAyOXB4O1xuICAgIGNvbG9yOiAkZm9udENvbG9yRGFyaztcbiAgfVxuXG59XG5cbi8qLS0tLWFsbCB0YXNrIHN0eWxpbmctLS0tKi9cbi50YXNrLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDE3cHggMzdweCAwcHg7XG4gIC5oaWdobGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZTA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjNlZWVlIDAlLCAjZTdlOWVjIDEwMCUpO1xuICB9XG4gIC50cmFzaCB7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBjb2xvcjogI2FhYTVhNSAhaW1wb3J0YW50O1xuICB9XG4gIHRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udERhcmsoKTtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDlweDtcbiAgfVxuICAudGFzayB0ZXh0YXJlYXtcbiAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgLy9yZXNpemU6IG5vbmU7XG4gIH1cbiAgLnN1YnRhc2tzIHRleHRhcmVhe1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjZyZW07XG4gIH1cbiAgLnN1YnRhc2tzIC50cmFzaCB7XG4gICAgbWFyZ2luLXRvcDogLTZweDtcbiAgfVxuICAuc3VidGFza3MgbGkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMXB4O1xuICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgfVxuICAvKkhPVkVSIEZVTkNUSU9OQUxJVFkqL1xuXG5cbiAgICAudHJhc2gsIC5kcmFnLWhhbmRsZSwgLmFzc2lnblVzZXJDaGVja2JveCwgLmFkZHtcbiAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG5cblxuICBsaTpob3ZlcntcbiAgICAudHJhc2gsIC5kcmFnLWhhbmRsZSwgLmFzc2lnblVzZXJDaGVja2JveCwgLmFkZHtcbiAgICAgIG9wYWNpdHk6MTtcblxuICAgIH1cbiAgfVxuXG4gIC50YXNrOmhvdmVye1xuICAgIC50cmFzaCwgLmRyYWctaGFuZGxlLCAuYWRke1xuICAgICAgb3BhY2l0eToxO1xuICAgIH1cbiAgfVxuXG4gIC8qRU5EIEhPVkVSIEZVTkNUSU9OQUxJVFkqL1xuXG5cblxuICAuZHJhZy1oYW5kbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTdweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbn1cblxuLyotLS0tdXNlciB0YXNrIHN0eWxpbmctLS0tKi9cbi51c2VyIHtcbiAgLnRhc2stbmFtZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAudGFzayB0ZXh0YXJlYSB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLnRyYXNoe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogMDtcbiAgfVxuICAuZHJhZy1oYW5kbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjJweDtcbiAgICB0b3A6IDdweDtcbiAgfVxuICAuZnJvbSB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgY29sb3I6ICRmb250Q29sb3JEYXJrO1xuICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgfVxuICAudGFzay13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTdweDtcbiAgfVxuICAubGFiZWwgLmZyb20ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmxhYmVsIC50cmFzaHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDM5cHg7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5sYWJlbCAuZHJhZy1oYW5kbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNjJweDtcbiAgICB0b3A6IDdweDtcbiAgfVxuXG59XG5cbi8qbGFiZWwgdGFzayBzdHlsaW5nLS0tLSovXG4udGFzay13cmFwcGVyLmxhYmVsIHtcbiAgICBAaW5jbHVkZSBmb250TGlnaHQoKTtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogLTExcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbi1yaWdodDogMzJweDtcbiAgICAudGFzayB0ZXh0YXJlYXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICAgIHRleHRhcmVhe1xuICAgICAgY29sb3I6ICRmb250Q29sb3JMaWdodDtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtIDtcbiAgICB9XG4gICAgLnN1YnRhc2tzIHRleHRhcmVhe1xuICAgICAgZm9udC1zaXplOiAuN3JlbSA7XG4gICAgfVxuICAgIC5pbnB1dC1kb25lIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5zdWJ0YXNrcyBsaSB7XG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgLy9tYXJnaW4tdG9wOjBweDtcbiAgICAgICAgICAvL21hcmdpbi1ib3R0b206IDZweDtcbiAgICB9XG4gICAgLmFkZCB7XG4gICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cbmlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6MTZweDtcbn1cblxuaDEuZGlzcGxheS00IHtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMyNzI2MjY7XG59XG5cblxuLnN1YlRhc2tzIHtcbiAgZm9udC1zaXplOiAuOHJlbTtcbn1cblxuXG4uZG9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4ubGlzdHNXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi8qLS0tLS0tLXN0YXJ0IGFsbCBmb3JtLS0tLS0tLSovXG5pbnB1dCwgdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG51bCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cblxuXG4vKi0tLS0tLS1lbmQgYWxsIGZvcm1zLS0tLS0tLSovXG5cblxuXG4vKi0tLS0tLS1zdGFydCB0YXNrLS0tLS0tLSovXG5cbi50YXNre1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRhc2sgdGV4dGFyZWF7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5cbi5hZGQge1xuICBjb2xvcjogI2FhYTVhNSAhaW1wb3J0YW50O1xufVxuXG4vKi0tLS0tLS1lbmQgdGFzay0tLS0tLS0qL1xuXG4vKi0tLS0tLS1ORVcgVEFTSyBCVVRUT04tLS0tLS0tKi9cbi5uZXdUYXNre1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjMDAwMDAwO1xuICB9XG4vKi0tLS0tLWVuZCB0YXNrIGJ1dHRvbi0tLS0tLS0tKi9cblxuLnVzZXIgLnRhc2sge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi51c2VyIC50YXNrIGlucHV0IHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnVzZXIgLnRhc2sgcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnVzZXIgLnRhc2stbmFtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udXNlciAudGFzay13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJhZy1oYW5kbGUgLmRvdCB7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcblxuICAubGlzdHNXcmFwcGVyIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcbiAgICB9XG4gIC51c2VyIGgxIHtcbiAgICB3aWR0aDogODN2dztcbiAgfVxufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNjAwJmRpc3BsYXk9c3dhcFwiKTtcbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG4ubWFpbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTI4cHg7XG59XG4ubWFpbi10aXRsZSAudGl0bGUtd3JhcHBlciB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNEQURDRTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IC0zN3B4O1xufVxuLm1haW4tdGl0bGUgaDEge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRENFMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiA3LjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmxpc3RzV3JhcHBlciAudy0yNSB7XG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbn1cbi5saXN0c1dyYXBwZXIgLmxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG4ubGlzdHNXcmFwcGVyIC5hZGQtdGFzay1idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjlweDtcbiAgY29sb3I6ICM5ODk4OTg7XG59XG5cbi8qLS0tLWFsbCB0YXNrIHN0eWxpbmctLS0tKi9cbi50YXNrLXdyYXBwZXIge1xuICBwYWRkaW5nOiAxN3B4IDM3cHggMHB4O1xuICAvKkhPVkVSIEZVTkNUSU9OQUxJVFkqL1xuICAvKkVORCBIT1ZFUiBGVU5DVElPTkFMSVRZKi9cbn1cbi50YXNrLXdyYXBwZXIgLmhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZTA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YzZWVlZSAwJSwgI2U3ZTllYyAxMDAlKTtcbn1cbi50YXNrLXdyYXBwZXIgLnRyYXNoIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBjb2xvcjogI2FhYTVhNSAhaW1wb3J0YW50O1xufVxuLnRhc2std3JhcHBlciB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzk4OTg5ODtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDlweDtcbn1cbi50YXNrLXdyYXBwZXIgLnRhc2sgdGV4dGFyZWEge1xuICBtYXJnaW4tYm90dG9tOiAtNnB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi50YXNrLXdyYXBwZXIgLnN1YnRhc2tzIHRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGxpbmUtaGVpZ2h0OiAwLjZyZW07XG59XG4udGFzay13cmFwcGVyIC5zdWJ0YXNrcyAudHJhc2gge1xuICBtYXJnaW4tdG9wOiAtNnB4O1xufVxuLnRhc2std3JhcHBlciAuc3VidGFza3MgbGkge1xuICBtYXJnaW4tYm90dG9tOiAtNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luLWxlZnQ6IDIxcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG4udGFzay13cmFwcGVyIC50cmFzaCwgLnRhc2std3JhcHBlciAuZHJhZy1oYW5kbGUsIC50YXNrLXdyYXBwZXIgLmFzc2lnblVzZXJDaGVja2JveCwgLnRhc2std3JhcHBlciAuYWRkIHtcbiAgb3BhY2l0eTogMDtcbn1cbi50YXNrLXdyYXBwZXIgbGk6aG92ZXIgLnRyYXNoLCAudGFzay13cmFwcGVyIGxpOmhvdmVyIC5kcmFnLWhhbmRsZSwgLnRhc2std3JhcHBlciBsaTpob3ZlciAuYXNzaWduVXNlckNoZWNrYm94LCAudGFzay13cmFwcGVyIGxpOmhvdmVyIC5hZGQge1xuICBvcGFjaXR5OiAxO1xufVxuLnRhc2std3JhcHBlciAudGFzazpob3ZlciAudHJhc2gsIC50YXNrLXdyYXBwZXIgLnRhc2s6aG92ZXIgLmRyYWctaGFuZGxlLCAudGFzay13cmFwcGVyIC50YXNrOmhvdmVyIC5hZGQge1xuICBvcGFjaXR5OiAxO1xufVxuLnRhc2std3JhcHBlciAuZHJhZy1oYW5kbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAtN3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi8qLS0tLXVzZXIgdGFzayBzdHlsaW5nLS0tLSovXG4udXNlciAudGFzay1uYW1lLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51c2VyIC50YXNrIHRleHRhcmVhIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi51c2VyIC50cmFzaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAwO1xufVxuLnVzZXIgLmRyYWctaGFuZGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjJweDtcbiAgdG9wOiA3cHg7XG59XG4udXNlciAuZnJvbSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGJvcmRlci1ib3R0b206IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGNvbG9yOiAjOTg5ODk4O1xuICBib3JkZXItYm90dG9tOiAwcHg7XG59XG4udXNlciAudGFzay13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDE3cHg7XG59XG4udXNlciAubGFiZWwgLmZyb20ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVzZXIgLmxhYmVsIC50cmFzaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM5cHg7XG4gIHRvcDogMDtcbn1cbi51c2VyIC5sYWJlbCAuZHJhZy1oYW5kbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA2MnB4O1xuICB0b3A6IDdweDtcbn1cblxuLypsYWJlbCB0YXNrIHN0eWxpbmctLS0tKi9cbi50YXNrLXdyYXBwZXIubGFiZWwge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRENFMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMTFweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4udGFzay13cmFwcGVyLmxhYmVsIC50YXNrIHRleHRhcmVhIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi50YXNrLXdyYXBwZXIubGFiZWwgdGV4dGFyZWEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLnRhc2std3JhcHBlci5sYWJlbCAuc3VidGFza3MgdGV4dGFyZWEge1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbi50YXNrLXdyYXBwZXIubGFiZWwgLmlucHV0LWRvbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnRhc2std3JhcHBlci5sYWJlbCAuc3VidGFza3MgbGkge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLnRhc2std3JhcHBlci5sYWJlbCAuYWRkIHtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cblxuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaDEuZGlzcGxheS00IHtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyNzI2MjY7XG59XG5cbi5zdWJUYXNrcyB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uZG9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4ubGlzdHNXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi8qLS0tLS0tLXN0YXJ0IGFsbCBmb3JtLS0tLS0tLSovXG5pbnB1dCwgdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLyotLS0tLS0tZW5kIGFsbCBmb3Jtcy0tLS0tLS0qL1xuLyotLS0tLS0tc3RhcnQgdGFzay0tLS0tLS0qL1xuLnRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzayB0ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uYWRkIHtcbiAgY29sb3I6ICNhYWE1YTUgIWltcG9ydGFudDtcbn1cblxuLyotLS0tLS0tZW5kIHRhc2stLS0tLS0tKi9cbi8qLS0tLS0tLU5FVyBUQVNLIEJVVFRPTi0tLS0tLS0qL1xuLm5ld1Rhc2sge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzAwMDAwMDtcbn1cblxuLyotLS0tLS1lbmQgdGFzayBidXR0b24tLS0tLS0tLSovXG4udXNlciAudGFzayB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4udXNlciAudGFzayBpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLnVzZXIgLnRhc2sgcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnVzZXIgLnRhc2stbmFtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udXNlciAudGFzay13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJhZy1oYW5kbGUgLmRvdCB7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmxpc3RzV3JhcHBlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xuICB9XG5cbiAgLnVzZXIgaDEge1xuICAgIHdpZHRoOiA4M3Z3O1xuICB9XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/ngx-toastr/toastr.css":
/*!********************************************!*\
  !*** ./node_modules/ngx-toastr/toastr.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../postcss-loader/src??embedded!./toastr.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/ngx-toastr/toastr.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!********************************************************************!*\
  !*** multi ./src/styles.scss ./node_modules/ngx-toastr/toastr.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/shariafuso/websites/everafterlist2019.github.io/src/styles.scss */"./src/styles.scss");
module.exports = __webpack_require__(/*! /Users/shariafuso/websites/everafterlist2019.github.io/node_modules/ngx-toastr/toastr.css */"./node_modules/ngx-toastr/toastr.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map