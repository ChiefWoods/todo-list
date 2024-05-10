(()=>{var __webpack_modules__={107:(module,__webpack_exports__,__webpack_require__)=>{"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(756);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(484);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(615);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(367), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(77), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, \`@font-face{font-family:Pacifico;src:url(\${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype")}@font-face{font-family:Heebo;src:url(\${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype")}:root{--primary-color: #0ea5e9;--secondary-color: #bae6fd;--accent-color: #f0f9ff;--btn-hover-color: #e5e7eb;--cancel-color: lightgrey;--delete-color: #dc2626;--priority-low-color: #22c55e;--priority-medium-color: #eab308;--priority-high-color: #ef4444;--scrollbar-thickness: 5px;--font-size-xl: 3rem;--font-size-l: 2.4rem;--font-size-m: 1.8rem;--font-size-s: 1.5rem;--font-size-xs: 1.2rem;--nav-padding: 20px;--nav-item-height: 40px;--nav-item-padding: 10px;--nav-icon-height: 17.5px;--icon-scale: scale(1.25);--section-block-padding: var(--nav-padding);--section-inline-padding: calc(var(--section-block-padding) * 2);--task-icon-height: 20px;--task-checkbox-width: 20px;--dialog-border-radius: 5px;--dialog-padding: 17.5px;--dialog-header-height: 45px;--dialog-form-control-gap: .75ch;--btn-border-width: 3px;--btn-border-style: solid;--btn-transition-property: background-color, border-color, color;--btn-transition-duration: .25s}*::-webkit-scrollbar{width:var(--scrollbar-thickness);height:var(--scrollbar-thickness)}*::-webkit-scrollbar-track{border-radius:calc(var(--scrollbar-thickness) / 2);background-color:#f5f5f5}*::-webkit-scrollbar-track:hover{background-color:#e5e5e5}*::-webkit-scrollbar-thumb{border-radius:calc(var(--scrollbar-thickness) / 2);background-color:#d4d4d4}*::-webkit-scrollbar-thumb:hover{background-color:#a3a3a3}*::-webkit-scrollbar-thumb:active{background-color:#737373}#body{max-height:100vh}header{background-color:var(--primary-color);padding:10px 30px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center}.action-btn{display:none;background-color:transparent;border:none;width:min-content;aspect-ratio:1/1;cursor:pointer;padding:5px}.close-btn{align-self:flex-end;margin-bottom:10px}.action-icon{width:25px;aspect-ratio:1/1}.container-header{display:flex;align-items:center;gap:10px}.logo{height:4.5rem;aspect-ratio:1}.title{font-family:Pacifico,cursive;font-size:4.5rem;font-weight:400;color:#fff;white-space:nowrap}.mobile-logo{display:none;width:30px;aspect-ratio:1/1}main{flex:1;display:flex;min-height:0}main *{font-family:Heebo,sans-serif}nav{overflow-y:auto;background-color:var(--accent-color);display:flex;flex-direction:column;flex-basis:300px;padding:var(--nav-padding);z-index:2}nav *{font-family:Heebo,sans-serif}nav>menu{display:flex;flex-direction:column;gap:5px;list-style:none}.nav-item{width:100%;height:var(--nav-item-height);padding:var(--nav-item-padding);font-size:var(--font-size-s);border-radius:7.5px}button.nav-item{display:flex;align-items:center;gap:var(--nav-item-padding);cursor:pointer;border:none;background-color:transparent;outline:none}button.nav-item:hover,button.nav-item:focus,.user-projects>li:has(.project-delete-btn:hover)>button.nav-item,.user-projects>li:has(.project-delete-btn:focus)>button.nav-item{background-color:var(--btn-hover-color)}.nav-item.selected,.nav-item.selected:hover,.nav-item.selected:focus,.user-projects>li:has(.project-delete-btn:hover)>.nav-item.selected,.user-projects>li:has(.project-delete-btn:focus)>.nav-item.selected{background-color:var(--secondary-color)}.nav-icon{height:var(--nav-icon-height);pointer-events:none}.nav-item>.project-name{text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap}.nav-item.selected>.project-name,.nav-item.add>.project-name{font-weight:500}.task-count{font-size:var(--font-size-xs);color:gray}nav>h2{font-size:var(--font-size-l);font-weight:500;margin:var(--nav-item-padding) 0 var(--nav-item-padding) var(--nav-item-padding)}.project-delete-btn{margin-left:auto;opacity:0;cursor:pointer;background-color:transparent;border:none;outline:none;display:flex}.nav-item:hover>.project-delete-btn,.nav-item:focus>.project-delete-btn,.project-delete-btn:hover,.project-delete-btn:focus{opacity:1}.project-delete-btn:hover,.project-delete-btn:focus{transform:var(--icon-scale)}.add-project>.nav-project-name{font-weight:600}input.nav-item{margin-bottom:10px;border:1px solid black}.add-project>div{display:flex;gap:15px;.nav-item{cursor:pointer;font-size:var(--font-size-s);font-weight:600;text-align:center;border-width:var(--btn-border-width);border-style:solid;justify-content:center;outline:none;transition-property:var(--btn-transition-property);transition-duration:var(--btn-transition-duration)}.project-cancel{border-color:var(--cancel-color);background-color:var(--cancel-color);color:#fff}.project-cancel:hover,.project-cancel:focus{background-color:#fff;color:var(--cancel-color)}.project-add{border-color:var(--primary-color);background-color:var(--primary-color);color:#fff}.project-add:hover,.project-add:focus{background-color:#fff;color:var(--primary-color)}}.project-view{width:clamp(300px,60%,750px);margin:0 auto;padding:var(--section-block-padding) 0 var(--section-block-padding) var(--section-inline-padding);display:flex;flex-direction:column}.project-view>.project-name{font-size:var(--font-size-xl);font-weight:600;text-overflow:ellipsis;overflow-x:clip;width:100%;padding-bottom:20px;padding-right:var(--section-inline-padding)}.task-list{list-style:none;display:flex;flex-direction:column;gap:7.5px;overflow-y:auto;padding-right:var(--section-inline-padding)}button.task{width:100%;height:45px;display:flex;align-items:center;gap:12.5px;padding:7.5px 12.5px;cursor:pointer;background-color:#f3f4f6;border:none;border-left:5px solid transparent;border-radius:5px;outline:none;overflow:hidden}button.task:hover,button.task:focus{background-color:var(--btn-hover-color)}button.task.task-high{border-left-color:var(--priority-high-color)}button.task.task-medium{border-left-color:var(--priority-medium-color)}button.task.task-low{border-left-color:var(--priority-low-color)}input[type=checkbox]{opacity:0;pointer-events:none;position:absolute}label[for^=checkbox]{min-width:var(--task-checkbox-width);min-height:var(--task-checkbox-width);border:2px solid var(--primary-color);border-radius:3px;display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative}label[for^=checkbox]:has(input[type=checkbox]:focus-visible){background-color:var(--secondary-color)}label[for^=checkbox]:after{content:"\\\\2714";color:transparent;transform:scale(0);font-size:1.2rem;transition:all .2s;position:absolute;top:1px}label[for^=checkbox]:has(input[type=checkbox]:checked){background-color:var(--primary-color)}label[for^=checkbox]:has(input[type=checkbox]:checked):after{color:#fff;transform:var(--icon-scale)}.task-title{font-size:var(--font-size-m);text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;min-width:75px;text-align:start}label[for^=checkbox]:has(input[type=checkbox]:checked)+.task-title{text-decoration:line-through}.task>.task-date{font-size:var(--font-size-s);margin-inline:auto 5px}.task>.task-date.expired{font-weight:600;color:red}.task-action-btn{background-color:transparent;border:none;cursor:pointer;display:flex;outline:none}.task-action-btn:hover,.task-action-btn:focus{transform:var(--icon-scale)}.task-icon{height:var(--task-icon-height)}.empty-task{font-size:var(--font-size-m);margin-bottom:20px}dialog::backdrop{background-color:#00000040}dialog{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border:0;width:500px;background-color:transparent}dialog *{font-family:Heebo,sans-serif;font-weight:600}.dialog-header{background-color:var(--primary-color);display:flex;justify-content:space-between;align-items:center;gap:var(--dialog-padding);padding:var(--dialog-padding);height:var(--font-size-xl);box-sizing:content-box;border-radius:var(--dialog-border-radius) var(--dialog-border-radius) 0 0}.dialog-title{font-size:var(--font-size-l);color:#fff;overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis}.dialog-header>.exit-btn{cursor:pointer;background-color:transparent;border:none;display:flex}.exit-icon{height:var(--font-size-xl);aspect-ratio:1}.dialog-main{display:flex;flex-direction:column;padding:var(--dialog-padding);border-radius:0 0 var(--dialog-border-radius) var(--dialog-border-radius);background-color:#fff;gap:5px}.dialog-main *{font-size:var(--font-size-m);color:var(--primary-color)}.dialog-main>.prompt{margin-bottom:30px;overflow-x:hidden;text-overflow:ellipsis;.warning{color:var(--delete-color)}}.dialog-main>.task-desc{min-height:var(--font-size-m);max-height:175px;margin-bottom:30px;overflow-y:auto}.dialog-main>.task-project{text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap}.dialog-main>input[name=title],.dialog-main>textarea{border:none;outline:none;font-weight:500;color:#000}.dialog-main>textarea{resize:none;min-height:150px;padding-right:7.5px}.dialog-main>input[name=title]::placeholder,.dialog-main>textarea::placeholder{font-size:var(--font-size-s);color:#d3d3d3}.date-container{display:flex;gap:calc(var(--dialog-form-control-gap) / 2);flex-wrap:wrap}label[for=dialog-due-date]{margin-right:var(--dialog-form-control-gap)}input[name=due-date]{background-color:var(--primary-color);border:none;outline:none;font-size:var(--font-size-s);font-weight:500;color:#fff;padding:2px 6px;border-radius:3px;cursor:pointer}::-webkit-calendar-picker-indicator{cursor:pointer;filter:invert(1)}.dialog-main>fieldset{border:none;display:flex;gap:calc(var(--dialog-form-control-gap) / 2);align-items:center;flex-wrap:wrap;margin-top:5px}.dialog-main>fieldset>legend{float:inline-start;margin-right:var(--dialog-form-control-gap);white-space:nowrap}.inner-priority-container{display:flex;gap:var(--dialog-form-control-gap);flex-grow:1;flex-wrap:wrap}input[name=priority]{opacity:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none}.dialog-priority{transition-property:var(--btn-transition-property);transition-duration:var(--btn-transition-duration);position:relative}.dialog-priority:has(input:checked,input:focus-visible){color:#fff}.priority-high:has(input:checked){background-color:var(--priority-high-color)}.dialog-priority,.btn-container>button{cursor:pointer;font-size:var(--font-size-s);font-weight:600;padding:3px 9px;border-radius:var(--dialog-border-radius);border-width:var(--btn-border-width);border-style:var(--btn-border-style);outline:none;color:#fff}.btn-container>button{border-radius:var(--dialog-border-radius);transition-property:var(--btn-transition-property);transition-duration:var(--btn-transition-duration)}.btn-container{display:flex;gap:var(--dialog-form-control-gap);margin-left:auto;.cancel-btn{background-color:var(--cancel-color);border-color:var(--cancel-color);margin-left:20px}.cancel-btn:hover,.cancel-btn:focus{background-color:transparent;color:var(--cancel-color)}}.dialog-add,.dialog-edit{.primary-btn{background-color:var(--primary-color);border-color:var(--primary-color)}.primary-btn:hover,.primary-btn:focus{background-color:#fff;color:var(--primary-color)}}.dialog-delete .primary-btn{background-color:var(--delete-color);border-color:var(--delete-color)}.dialog-delete .primary-btn:hover,.dialog-delete .primary-btn:focus{background-color:#fff;color:var(--delete-color)}.priority-low{border-color:var(--priority-low-color);color:var(--priority-low-color)}.priority-low:has(input:checked,input:focus-visible){background-color:var(--priority-low-color)}.priority-medium{border-color:var(--priority-medium-color);color:var(--priority-medium-color)}.priority-medium:has(input:checked,input:focus-visible){background-color:var(--priority-medium-color)}.priority-high{border-color:var(--priority-high-color);color:var(--priority-high-color)}.priority-high:has(input:checked,input:focus-visible){background-color:var(--priority-high-color)}.overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;opacity:0;transition:opacity .4s;z-index:-1}@media (max-width: 992px){header{padding-inline:15px}.container-header{justify-content:center}.menu-btn{display:flex}.mobile-logo{display:block}.close-btn{display:flex}.logo{height:2.5rem}.title{font-size:2rem}nav{position:absolute;top:0;left:0;height:100%;width:100%;max-width:275px;transform:translate(-100%);visibility:hidden;transition:transform,visibility;transition-duration:.3s;transition-timing-function:ease-in-out}nav.active{transform:translate(0);visibility:visible}.project-delete-btn{opacity:1}.project-view{margin:0 auto;width:100%;max-width:550px}button.task{overflow-x:auto}#body:has(nav.active) .overlay{display:block;opacity:.5;z-index:1}}
\`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,WACE,oBAAa,CACb,8DACF,CAEA,WACE,iBAAa,CACb,8DACF,CAEA,MACE,wBAAiB,CACjB,0BAAmB,CACnB,uBAAgB,CAChB,0BAAmB,CACnB,yBAAgB,CAChB,uBAAgB,CAChB,6BAAsB,CACtB,gCAAyB,CACzB,8BAAuB,CACvB,0BAAuB,CACvB,oBAAgB,CAChB,qBAAe,CACf,qBAAe,CACf,qBAAe,CACf,sBAAgB,CAChB,mBAAe,CACf,uBAAmB,CACnB,wBAAoB,CACpB,yBAAmB,CACnB,yBAAoB,CACpB,2CAA6B,CAC7B,gEAA8D,CAC9D,wBAAoB,CACpB,2BAAuB,CACvB,2BAAwB,CACxB,wBAAkB,CAClB,4BAAwB,CACxB,gCAA2B,CAC3B,uBAAoB,CACpB,yBAAoB,CACpB,gEAA2D,CAC3D,+BACF,CAIA,qBACE,gCAAW,CACX,iCACF,CAEA,2BACE,kDAAiD,CACjD,wBACF,CAEA,iCACE,wBACF,CAEA,2BACE,kDAAiD,CACjD,wBACF,CAEA,iCACE,wBACF,CAEA,kCACE,wBACF,CAEA,MACE,gBACF,CAIA,OACE,qCAAsB,CAjFxB,iBAkFgB,CACd,YAAS,CACT,kCAAgC,CAChC,kBACF,CAEA,YACE,YAAS,CACT,4BAAkB,CAClB,WAAQ,CACR,iBAAO,CACP,gBAAgB,CAChB,cAAQ,CA9FV,WAgGA,CAEA,WACE,mBAAY,CACZ,kBACF,CAEA,aACE,UAAO,CACP,gBACF,CAEA,kBACE,YAAS,CACT,kBAAa,CACb,QACF,CAEA,MACE,aAAQ,CACR,cACF,CAEA,OACE,4BAAuB,CACvB,gBAAW,CACX,eAAa,CACb,UAAO,CACP,kBACF,CAEA,aACE,YAAS,CACT,UAAO,CACP,gBACF,CAEA,KACE,MAAM,CACN,YAAS,CACT,YACF,CAEA,OACE,4BACF,CAIA,IACE,eAAY,CACZ,oCAAsB,CACtB,YAAS,CACT,qBAAgB,CAChB,gBAAY,CACZ,0BAAa,CACb,SACF,CAEA,MACE,4BACF,CAEA,SACE,YAAS,CACT,qBAAgB,CAChB,OAAK,CACL,eACF,CAIA,UACE,UAAO,CACP,6BAAY,CACZ,+BAAa,CACb,4BAAe,CA5KjB,mBA8KA,CAEA,gBACE,YAAS,CACT,kBAAa,CACb,2BAAS,CACT,cAAQ,CACR,WAAQ,CACR,4BAAkB,CAClB,YACF,CAEA,8KAIE,uCACF,CAEA,6MAKE,uCACF,CAEA,UACE,6BAAY,CACZ,mBACF,CAEA,wBACE,sBAAe,CACf,iBAAY,CACZ,kBACF,CAEA,6DAEE,eACF,CAEA,YACE,6BAAe,CACf,UACF,CAEA,OACE,4BAAe,CACf,eAAa,CACb,gFAEF,CAEA,oBACE,gBAAa,CACb,SAAS,CACT,cAAQ,CACR,4BAAkB,CAClB,WAAQ,CACR,YAAS,CACT,YACF,CAEA,4HAIE,SACF,CAEA,oDAEE,2BACF,CAIA,+BACE,eACF,CAEA,eACE,kBAAe,CACf,sBACF,CAEA,iBACE,YAAS,CACT,QAAK,CAEL,UACE,cAAQ,CACR,4BAAe,CACf,eAAa,CACb,iBAAY,CACZ,oCAAkB,CAClB,kBAAc,CACd,sBAAiB,CACjB,YAAS,CACT,kDAAyB,CACzB,kDACF,CAEA,gBACE,gCAAkB,CAClB,oCAAsB,CACtB,UACF,CAEA,4CAEE,qBAAkB,CAClB,yBACF,CAEA,aACE,iCAAkB,CAClB,qCAAsB,CACtB,UACF,CAEA,sCAEE,qBAAkB,CAClB,0BACF,CACF,CAIA,cACE,4BAAyB,CAnT3B,aAoTY,CACV,iGACM,CACN,YAAS,CACT,qBACF,CAEA,4BACE,6BAAe,CACf,eAAa,CACb,sBAAe,CACf,eAAY,CACZ,UAAO,CACP,mBAAgB,CAChB,2CACF,CAIA,WACE,eAAY,CACZ,YAAS,CACT,qBAAgB,CAChB,SAAK,CACL,eAAY,CACZ,2CACF,CAEA,YACE,UAAO,CACP,WAAQ,CACR,YAAS,CACT,kBAAa,CACb,UAAK,CArVP,oBAsViB,CACf,cAAQ,CACR,wBAAkB,CAClB,WAAQ,CACR,iCAAuB,CA1VzB,iBA2ViB,CACf,YAAS,CACT,eACF,CAEA,oCAEE,uCACF,CAEA,sBACE,4CACF,CAEA,wBACE,8CACF,CAEA,qBACE,2CACF,CAEA,qBACE,SAAS,CACT,mBAAgB,CAChB,iBACF,CAEA,qBACE,oCAAe,CACf,qCAAgB,CAChB,qCAAsB,CA1XxB,iBA2XiB,CACf,YAAS,CACT,kBAAa,CACb,sBAAiB,CACjB,cAAQ,CACR,iBACF,CAEA,6DACE,uCACF,CAEA,2BACE,eAAS,CACT,iBAAO,CACP,kBAAiB,CACjB,gBAAW,CACX,kBAAgB,CAChB,iBAAU,CACV,OACF,CAEA,uDACE,qCACF,CAEA,6DACE,UAAO,CACP,2BACF,CAEA,YACE,4BAAe,CACf,sBAAe,CACf,iBAAY,CACZ,kBAAa,CACb,cAAW,CACX,gBACF,CAEA,mEACE,4BACF,CAEA,iBACE,4BAAe,CACf,sBACF,CAEA,yBACE,eAAa,CACb,SACF,CAEA,iBACE,4BAAkB,CAClB,WAAQ,CACR,cAAQ,CACR,YAAS,CACT,YACF,CAEA,8CAEE,2BACF,CAEA,WACE,8BACF,CAEA,YACE,4BAAe,CACf,kBACF,CAEA,iBACE,0BACF,CAIA,OACE,iBAAU,CACV,OAAK,CACL,QAAM,CACN,8BAA2B,CAC3B,QAAQ,CACR,WAAO,CACP,4BACF,CAEA,SACE,4BAAoB,CACpB,eACF,CAIA,eACE,qCAAsB,CACtB,YAAS,CACT,6BAAiB,CACjB,kBAAa,CACb,yBAAS,CACT,6BAAa,CACb,0BAAY,CACZ,sBAAY,CACZ,yEACF,CAEA,cACE,4BAAe,CACf,UAAO,CACP,iBAAY,CACZ,kBAAa,CACb,sBACF,CAEA,yBACE,cAAQ,CACR,4BAAkB,CAClB,WAAQ,CACR,YACF,CAEA,WACE,0BAAY,CACZ,cACF,CAIA,aACE,YAAS,CACT,qBAAgB,CAChB,6BAAa,CACb,yEAAmD,CACnD,qBAAkB,CAClB,OACF,CAEA,eACE,4BAAe,CACf,0BACF,CAEA,qBACE,kBAAe,CACf,iBAAY,CACZ,sBAAe,CAEf,SACE,yBACF,CACF,CAEA,wBACE,6BAAgB,CAChB,gBAAY,CACZ,kBAAe,CACf,eACF,CAEA,2BACE,sBAAe,CACf,iBAAY,CACZ,kBACF,CAIA,qDAEE,WAAQ,CACR,YAAS,CACT,eAAa,CACb,UACF,CAEA,sBACE,WAAQ,CACR,gBAAY,CACZ,mBACF,CAEA,+EAEE,4BAAe,CACf,aACF,CAEA,gBACE,YAAS,CACT,4CAA2C,CAC3C,cACF,CAEA,2BACE,2CACF,CAEA,qBACE,qCAAsB,CACtB,WAAQ,CACR,YAAS,CACT,4BAAe,CACf,eAAa,CACb,UAAO,CA3kBT,eA4kBe,CA5kBf,iBA6kBiB,CACf,cACF,CAEA,oCACE,cAAQ,CACR,gBACF,CAEA,sBACE,WAAQ,CACR,YAAS,CACT,4CAA2C,CAC3C,kBAAa,CACb,cAAW,CACX,cACF,CAEA,6BACE,kBAAO,CACP,2CAAkB,CAClB,kBACF,CAEA,0BACE,YAAS,CACT,kCAAS,CACT,WAAW,CACX,cACF,CAEA,qBACE,SAAS,CACT,iBAAU,CACV,OAAK,CACL,QAAM,CACN,8BAA2B,CAC3B,mBACF,CAEA,iBACE,kDAAyB,CACzB,kDAAyB,CACzB,iBACF,CAEA,wDACE,UACF,CAEA,kCACE,2CACF,CAIA,uCAEE,cAAQ,CACR,4BAAe,CACf,eAAa,CAzoBf,eA0oBe,CACb,yCAAmB,CACnB,oCAAkB,CAClB,oCAAkB,CAClB,YAAS,CACT,UACF,CAEA,sBACE,yCAAmB,CACnB,kDAAyB,CACzB,kDACF,CAEA,eACE,YAAS,CACT,kCAAS,CACT,gBAAa,CAEb,YACE,oCAAsB,CACtB,gCAAkB,CAClB,gBACF,CAEA,oCAEE,4BAAkB,CAClB,yBACF,CACF,CAEA,yBAEE,aACE,qCAAsB,CACtB,iCACF,CAEA,sCAEE,qBAAkB,CAClB,0BACF,CACF,CAEA,4BACE,oCAAsB,CACtB,gCACF,CAEA,oEAEE,qBAAkB,CAClB,yBACF,CAIA,cACE,sCAAkB,CAClB,+BACF,CAEA,qDACE,0CACF,CAEA,iBACE,yCAAkB,CAClB,kCACF,CAEA,wDACE,6CACF,CAEA,eACE,uCAAkB,CAClB,gCACF,CAEA,sDACE,2CACF,CAEA,SACE,iBAAU,CACV,KAAK,CACL,MAAM,CACN,UAAO,CACP,WAAQ,CACR,qBAAkB,CAClB,SAAS,CACT,sBAAoB,CACpB,UACF,CAEA,0BACE,OACE,mBACF,CAEA,kBACE,sBACF,CAEA,UACE,YACF,CAEA,aACE,aACF,CAEA,WACE,YACF,CAEA,MACE,aACF,CAEA,OACE,cACF,CAEA,IACE,iBAAU,CACV,KAAK,CACL,MAAM,CACN,WAAQ,CACR,UAAO,CACP,eAAW,CACX,0BAAsB,CACtB,iBAAY,CACZ,+BAAuB,CACvB,uBAAqB,CACrB,sCACF,CAEA,WACE,sBAAsB,CACtB,kBACF,CAEA,oBACE,SACF,CAEA,cAhyBF,aAiyBc,CACV,UAAO,CACP,eACF,CAEA,YACE,eACF,CAEA,+BACE,aAAS,CACT,UAAS,CACT,SACF,CACF","sourcesContent":["@font-face {\\n  font-family: Pacifico;\\n  src: url(fonts/Pacifico/Pacifico-Regular.ttf) format(\\"truetype\\");\\n}\\n\\n@font-face {\\n  font-family: Heebo;\\n  src: url(fonts/Heebo/Heebo-VariableFont_wght.ttf) format(\\"truetype\\");\\n}\\n\\n:root {\\n  --primary-color: #0ea5e9;\\n  --secondary-color: #bae6fd;\\n  --accent-color: #f0f9ff;\\n  --btn-hover-color: #e5e7eb;\\n  --cancel-color: lightgrey;\\n  --delete-color: #dc2626;\\n  --priority-low-color: #22c55e;\\n  --priority-medium-color: #eab308;\\n  --priority-high-color: #ef4444;\\n  --scrollbar-thickness: 5px;\\n  --font-size-xl: 3rem;\\n  --font-size-l: 2.4rem;\\n  --font-size-m: 1.8rem;\\n  --font-size-s: 1.5rem;\\n  --font-size-xs: 1.2rem;\\n  --nav-padding: 20px;\\n  --nav-item-height: 40px;\\n  --nav-item-padding: 10px;\\n  --nav-icon-height: 17.5px;\\n  --icon-scale: scale(1.25);\\n  --section-block-padding: var(--nav-padding);\\n  --section-inline-padding: calc(var(--section-block-padding) * 2);\\n  --task-icon-height: 20px;\\n  --task-checkbox-width: 20px;\\n  --dialog-border-radius: 5px;\\n  --dialog-padding: 17.5px;\\n  --dialog-header-height: 45px;\\n  --dialog-form-control-gap: 0.75ch;\\n  --btn-border-width: 3px;\\n  --btn-border-style: solid;\\n  --btn-transition-property: background-color, border-color, color;\\n  --btn-transition-duration: 0.25s;\\n}\\n\\n/* Scrollbar */\\n\\n*::-webkit-scrollbar {\\n  width: var(--scrollbar-thickness);\\n  height: var(--scrollbar-thickness);\\n}\\n\\n*::-webkit-scrollbar-track {\\n  border-radius: calc(var(--scrollbar-thickness) / 2);\\n  background-color: #f5f5f5;\\n}\\n\\n*::-webkit-scrollbar-track:hover {\\n  background-color: #e5e5e5;\\n}\\n\\n*::-webkit-scrollbar-thumb {\\n  border-radius: calc(var(--scrollbar-thickness) / 2);\\n  background-color: #d4d4d4;\\n}\\n\\n*::-webkit-scrollbar-thumb:hover {\\n  background-color: #a3a3a3;\\n}\\n\\n*::-webkit-scrollbar-thumb:active {\\n  background-color: #737373;\\n}\\n\\n#body {\\n  max-height: 100vh;\\n}\\n\\n/* Header */\\n\\nheader {\\n  background-color: var(--primary-color);\\n  padding: 10px 30px;\\n  display: grid;\\n  grid-template-columns: 1fr auto 1fr;\\n  align-items: center;\\n}\\n\\n.action-btn {\\n  display: none;\\n  background-color: transparent;\\n  border: none;\\n  width: min-content;\\n  aspect-ratio: 1/1;\\n  cursor: pointer;\\n  padding: 5px;\\n}\\n\\n.close-btn {\\n  align-self: flex-end;\\n  margin-bottom: 10px;\\n}\\n\\n.action-icon {\\n  width: 25px;\\n  aspect-ratio: 1/1;\\n}\\n\\n.container-header {\\n  display: flex;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.logo {\\n  height: 4.5rem;\\n  aspect-ratio: 1;\\n}\\n\\n.title {\\n  font-family: Pacifico, cursive;\\n  font-size: 4.5rem;\\n  font-weight: normal;\\n  color: white;\\n  white-space: nowrap;\\n}\\n\\n.mobile-logo {\\n  display: none;\\n  width: 30px;\\n  aspect-ratio: 1/1;\\n}\\n\\nmain {\\n  flex: 1;\\n  display: flex;\\n  min-height: 0;\\n}\\n\\nmain * {\\n  font-family: Heebo, sans-serif;\\n}\\n\\n/* Nav */\\n\\nnav {\\n  overflow-y: auto;\\n  background-color: var(--accent-color);\\n  display: flex;\\n  flex-direction: column;\\n  flex-basis: 300px;\\n  padding: var(--nav-padding);\\n  z-index: 2;\\n}\\n\\nnav * {\\n  font-family: Heebo, sans-serif;\\n}\\n\\nnav > menu {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n  list-style: none;\\n}\\n\\n/* Nav Item */\\n\\n.nav-item {\\n  width: 100%;\\n  height: var(--nav-item-height);\\n  padding: var(--nav-item-padding);\\n  font-size: var(--font-size-s);\\n  border-radius: 7.5px;\\n}\\n\\nbutton.nav-item {\\n  display: flex;\\n  align-items: center;\\n  gap: var(--nav-item-padding);\\n  cursor: pointer;\\n  border: none;\\n  background-color: transparent;\\n  outline: none;\\n}\\n\\nbutton.nav-item:hover,\\nbutton.nav-item:focus,\\n.user-projects > li:has(.project-delete-btn:hover) > button.nav-item,\\n.user-projects > li:has(.project-delete-btn:focus) > button.nav-item {\\n  background-color: var(--btn-hover-color);\\n}\\n\\n.nav-item.selected,\\n.nav-item.selected:hover,\\n.nav-item.selected:focus,\\n.user-projects > li:has(.project-delete-btn:hover) > .nav-item.selected,\\n.user-projects > li:has(.project-delete-btn:focus) > .nav-item.selected {\\n  background-color: var(--secondary-color);\\n}\\n\\n.nav-icon {\\n  height: var(--nav-icon-height);\\n  pointer-events: none;\\n}\\n\\n.nav-item > .project-name {\\n  text-overflow: ellipsis;\\n  overflow-x: hidden;\\n  white-space: nowrap;\\n}\\n\\n.nav-item.selected > .project-name,\\n.nav-item.add > .project-name {\\n  font-weight: 500;\\n}\\n\\n.task-count {\\n  font-size: var(--font-size-xs);\\n  color: gray;\\n}\\n\\nnav > h2 {\\n  font-size: var(--font-size-l);\\n  font-weight: 500;\\n  margin: var(--nav-item-padding) 0 var(--nav-item-padding)\\n    var(--nav-item-padding);\\n}\\n\\n.project-delete-btn {\\n  margin-left: auto;\\n  opacity: 0;\\n  cursor: pointer;\\n  background-color: transparent;\\n  border: none;\\n  outline: none;\\n  display: flex;\\n}\\n\\n.nav-item:hover > .project-delete-btn,\\n.nav-item:focus > .project-delete-btn,\\n.project-delete-btn:hover,\\n.project-delete-btn:focus {\\n  opacity: 1;\\n}\\n\\n.project-delete-btn:hover,\\n.project-delete-btn:focus {\\n  transform: var(--icon-scale);\\n}\\n\\n/* Add Project */\\n\\n.add-project > .nav-project-name {\\n  font-weight: 600;\\n}\\n\\ninput.nav-item {\\n  margin-bottom: 10px;\\n  border: 1px solid black;\\n}\\n\\n.add-project > div {\\n  display: flex;\\n  gap: 15px;\\n\\n  .nav-item {\\n    cursor: pointer;\\n    font-size: var(--font-size-s);\\n    font-weight: 600;\\n    text-align: center;\\n    border-width: var(--btn-border-width);\\n    border-style: solid;\\n    justify-content: center;\\n    outline: none;\\n    transition-property: var(--btn-transition-property);\\n    transition-duration: var(--btn-transition-duration);\\n  }\\n\\n  .project-cancel {\\n    border-color: var(--cancel-color);\\n    background-color: var(--cancel-color);\\n    color: white;\\n  }\\n\\n  .project-cancel:hover,\\n  .project-cancel:focus {\\n    background-color: white;\\n    color: var(--cancel-color);\\n  }\\n\\n  .project-add {\\n    border-color: var(--primary-color);\\n    background-color: var(--primary-color);\\n    color: white;\\n  }\\n\\n  .project-add:hover,\\n  .project-add:focus {\\n    background-color: white;\\n    color: var(--primary-color);\\n  }\\n}\\n\\n/* Section */\\n\\n.project-view {\\n  width: clamp(300px, 60%, 750px);\\n  margin: 0 auto;\\n  padding: var(--section-block-padding) 0 var(--section-block-padding)\\n    var(--section-inline-padding);\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.project-view > .project-name {\\n  font-size: var(--font-size-xl);\\n  font-weight: 600;\\n  text-overflow: ellipsis;\\n  overflow-x: clip;\\n  width: 100%;\\n  padding-bottom: 20px;\\n  padding-right: var(--section-inline-padding);\\n}\\n\\n/* Task */\\n\\n.task-list {\\n  list-style: none;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 7.5px;\\n  overflow-y: auto;\\n  padding-right: var(--section-inline-padding);\\n}\\n\\nbutton.task {\\n  width: 100%;\\n  height: 45px;\\n  display: flex;\\n  align-items: center;\\n  gap: 12.5px;\\n  padding: 7.5px 12.5px;\\n  cursor: pointer;\\n  background-color: #f3f4f6;\\n  border: none;\\n  border-left: 5px solid transparent;\\n  border-radius: 5px;\\n  outline: none;\\n  overflow: hidden;\\n}\\n\\nbutton.task:hover,\\nbutton.task:focus {\\n  background-color: var(--btn-hover-color);\\n}\\n\\nbutton.task.task-high {\\n  border-left-color: var(--priority-high-color);\\n}\\n\\nbutton.task.task-medium {\\n  border-left-color: var(--priority-medium-color);\\n}\\n\\nbutton.task.task-low {\\n  border-left-color: var(--priority-low-color);\\n}\\n\\ninput[type=\\"checkbox\\"] {\\n  opacity: 0;\\n  pointer-events: none;\\n  position: absolute;\\n}\\n\\nlabel[for^=\\"checkbox\\"] {\\n  min-width: var(--task-checkbox-width);\\n  min-height: var(--task-checkbox-width);\\n  border: 2px solid var(--primary-color);\\n  border-radius: 3px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  cursor: pointer;\\n  position: relative;\\n}\\n\\nlabel[for^=\\"checkbox\\"]:has(input[type=\\"checkbox\\"]:focus-visible) {\\n  background-color: var(--secondary-color);\\n}\\n\\nlabel[for^=\\"checkbox\\"]::after {\\n  content: \\"\\\\2714\\";\\n  color: transparent;\\n  transform: scale(0);\\n  font-size: 1.2rem;\\n  transition: all 0.2s;\\n  position: absolute;\\n  top: 1px;\\n}\\n\\nlabel[for^=\\"checkbox\\"]:has(input[type=\\"checkbox\\"]:checked) {\\n  background-color: var(--primary-color);\\n}\\n\\nlabel[for^=\\"checkbox\\"]:has(input[type=\\"checkbox\\"]:checked)::after {\\n  color: white;\\n  transform: var(--icon-scale);\\n}\\n\\n.task-title {\\n  font-size: var(--font-size-m);\\n  text-overflow: ellipsis;\\n  overflow-x: hidden;\\n  white-space: nowrap;\\n  min-width: 75px;\\n  text-align: start;\\n}\\n\\nlabel[for^=\\"checkbox\\"]:has(input[type=\\"checkbox\\"]:checked) + .task-title {\\n  text-decoration: line-through;\\n}\\n\\n.task > .task-date {\\n  font-size: var(--font-size-s);\\n  margin-inline: auto 5px;\\n}\\n\\n.task > .task-date.expired {\\n  font-weight: 600;\\n  color: red;\\n}\\n\\n.task-action-btn {\\n  background-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n  display: flex;\\n  outline: none;\\n}\\n\\n.task-action-btn:hover,\\n.task-action-btn:focus {\\n  transform: var(--icon-scale);\\n}\\n\\n.task-icon {\\n  height: var(--task-icon-height);\\n}\\n\\n.empty-task {\\n  font-size: var(--font-size-m);\\n  margin-bottom: 20px;\\n}\\n\\ndialog::backdrop {\\n  background-color: rgba(0, 0, 0, 0.25);\\n}\\n\\n/* Dialog */\\n\\ndialog {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  border: 0;\\n  width: 500px;\\n  background-color: transparent;\\n}\\n\\ndialog * {\\n  font-family: Heebo, sans-serif;\\n  font-weight: 600;\\n}\\n\\n/* Dialog Header */\\n\\n.dialog-header {\\n  background-color: var(--primary-color);\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: var(--dialog-padding);\\n  padding: var(--dialog-padding);\\n  height: var(--font-size-xl);\\n  box-sizing: content-box;\\n  border-radius: var(--dialog-border-radius) var(--dialog-border-radius) 0 0;\\n}\\n\\n.dialog-title {\\n  font-size: var(--font-size-l);\\n  color: white;\\n  overflow-x: hidden;\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n\\n.dialog-header > .exit-btn {\\n  cursor: pointer;\\n  background-color: transparent;\\n  border: none;\\n  display: flex;\\n}\\n\\n.exit-icon {\\n  height: var(--font-size-xl);\\n  aspect-ratio: 1;\\n}\\n\\n/* Dialog Main */\\n\\n.dialog-main {\\n  display: flex;\\n  flex-direction: column;\\n  padding: var(--dialog-padding);\\n  border-radius: 0 0 var(--dialog-border-radius) var(--dialog-border-radius);\\n  background-color: white;\\n  gap: 5px;\\n}\\n\\n.dialog-main * {\\n  font-size: var(--font-size-m);\\n  color: var(--primary-color);\\n}\\n\\n.dialog-main > .prompt {\\n  margin-bottom: 30px;\\n  overflow-x: hidden;\\n  text-overflow: ellipsis;\\n\\n  .warning {\\n    color: var(--delete-color);\\n  }\\n}\\n\\n.dialog-main > .task-desc {\\n  min-height: var(--font-size-m);\\n  max-height: 175px;\\n  margin-bottom: 30px;\\n  overflow-y: auto;\\n}\\n\\n.dialog-main > .task-project {\\n  text-overflow: ellipsis;\\n  overflow-x: hidden;\\n  white-space: nowrap;\\n}\\n\\n/* Dialog Form Controls */\\n\\n.dialog-main > input[name=\\"title\\"],\\n.dialog-main > textarea {\\n  border: none;\\n  outline: none;\\n  font-weight: 500;\\n  color: black;\\n}\\n\\n.dialog-main > textarea {\\n  resize: none;\\n  min-height: 150px;\\n  padding-right: 7.5px;\\n}\\n\\n.dialog-main > input[name=\\"title\\"]::placeholder,\\n.dialog-main > textarea::placeholder {\\n  font-size: var(--font-size-s);\\n  color: lightgrey;\\n}\\n\\n.date-container {\\n  display: flex;\\n  gap: calc(var(--dialog-form-control-gap) / 2);\\n  flex-wrap: wrap;\\n}\\n\\nlabel[for=\\"dialog-due-date\\"] {\\n  margin-right: var(--dialog-form-control-gap);\\n}\\n\\ninput[name=\\"due-date\\"] {\\n  background-color: var(--primary-color);\\n  border: none;\\n  outline: none;\\n  font-size: var(--font-size-s);\\n  font-weight: 500;\\n  color: white;\\n  padding: 2px 6px;\\n  border-radius: 3px;\\n  cursor: pointer;\\n}\\n\\n::-webkit-calendar-picker-indicator {\\n  cursor: pointer;\\n  filter: invert(1);\\n}\\n\\n.dialog-main > fieldset {\\n  border: none;\\n  display: flex;\\n  gap: calc(var(--dialog-form-control-gap) / 2);\\n  align-items: center;\\n  flex-wrap: wrap;\\n  margin-top: 5px;\\n}\\n\\n.dialog-main > fieldset > legend {\\n  float: inline-start;\\n  margin-right: var(--dialog-form-control-gap);\\n  white-space: nowrap;\\n}\\n\\n.inner-priority-container {\\n  display: flex;\\n  gap: var(--dialog-form-control-gap);\\n  flex-grow: 1;\\n  flex-wrap: wrap;\\n}\\n\\ninput[name=\\"priority\\"] {\\n  opacity: 0;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  pointer-events: none;\\n}\\n\\n.dialog-priority {\\n  transition-property: var(--btn-transition-property);\\n  transition-duration: var(--btn-transition-duration);\\n  position: relative;\\n}\\n\\n.dialog-priority:has(input:checked, input:focus-visible) {\\n  color: white;\\n}\\n\\n.priority-high:has(input:checked) {\\n  background-color: var(--priority-high-color);\\n}\\n\\n/* Dialog Btn Container */\\n\\n.dialog-priority,\\n.btn-container > button {\\n  cursor: pointer;\\n  font-size: var(--font-size-s);\\n  font-weight: 600;\\n  padding: 3px 9px;\\n  border-radius: var(--dialog-border-radius);\\n  border-width: var(--btn-border-width);\\n  border-style: var(--btn-border-style);\\n  outline: none;\\n  color: white;\\n}\\n\\n.btn-container > button {\\n  border-radius: var(--dialog-border-radius);\\n  transition-property: var(--btn-transition-property);\\n  transition-duration: var(--btn-transition-duration);\\n}\\n\\n.btn-container {\\n  display: flex;\\n  gap: var(--dialog-form-control-gap);\\n  margin-left: auto;\\n\\n  .cancel-btn {\\n    background-color: var(--cancel-color);\\n    border-color: var(--cancel-color);\\n    margin-left: 20px;\\n  }\\n\\n  .cancel-btn:hover,\\n  .cancel-btn:focus {\\n    background-color: transparent;\\n    color: var(--cancel-color);\\n  }\\n}\\n\\n.dialog-add,\\n.dialog-edit {\\n  .primary-btn {\\n    background-color: var(--primary-color);\\n    border-color: var(--primary-color);\\n  }\\n\\n  .primary-btn:hover,\\n  .primary-btn:focus {\\n    background-color: white;\\n    color: var(--primary-color);\\n  }\\n}\\n\\n.dialog-delete .primary-btn {\\n  background-color: var(--delete-color);\\n  border-color: var(--delete-color);\\n}\\n\\n.dialog-delete .primary-btn:hover,\\n.dialog-delete .primary-btn:focus {\\n  background-color: white;\\n  color: var(--delete-color);\\n}\\n\\n/* Priority Levels */\\n\\n.priority-low {\\n  border-color: var(--priority-low-color);\\n  color: var(--priority-low-color);\\n}\\n\\n.priority-low:has(input:checked, input:focus-visible) {\\n  background-color: var(--priority-low-color);\\n}\\n\\n.priority-medium {\\n  border-color: var(--priority-medium-color);\\n  color: var(--priority-medium-color);\\n}\\n\\n.priority-medium:has(input:checked, input:focus-visible) {\\n  background-color: var(--priority-medium-color);\\n}\\n\\n.priority-high {\\n  border-color: var(--priority-high-color);\\n  color: var(--priority-high-color);\\n}\\n\\n.priority-high:has(input:checked, input:focus-visible) {\\n  background-color: var(--priority-high-color);\\n}\\n\\n.overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgb(0, 0, 0);\\n  opacity: 0;\\n  transition: opacity 0.4s;\\n  z-index: -1;\\n}\\n\\n@media (max-width: 992px) {\\n  header {\\n    padding-inline: 15px;\\n  }\\n\\n  .container-header {\\n    justify-content: center;\\n  }\\n\\n  .menu-btn {\\n    display: flex;\\n  }\\n\\n  .mobile-logo {\\n    display: block;\\n  }\\n\\n  .close-btn {\\n    display: flex;\\n  }\\n\\n  .logo {\\n    height: 2.5rem;\\n  }\\n\\n  .title {\\n    font-size: 2rem;\\n  }\\n\\n  nav {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    height: 100%;\\n    width: 100%;\\n    max-width: 275px;\\n    transform: translateX(-100%);\\n    visibility: hidden;\\n    transition: transform, visibility;\\n    transition-duration: 0.3s;\\n    transition-timing-function: ease-in-out;\\n  }\\n\\n  nav.active {\\n    transform: translateX(0);\\n    visibility: visible;\\n  }\\n\\n  .project-delete-btn {\\n    opacity: 1;\\n  }\\n\\n  .project-view {\\n    margin: 0 auto;\\n    width: 100%;\\n    max-width: 550px;\\n  }\\n\\n  button.task {\\n    overflow-x: auto;\\n  }\\n\\n  #body:has(nav.active) .overlay {\\n    display: block;\\n    opacity: 0.5;\\n    z-index: 1;\\n  }\\n}\\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDJEQUEyRCxnREFBZ0QsR0FBRyxzQkFBc0IsK0NBQStDLHdDQUF3QyxHQUFHLDhEQUE4RCxtREFBbUQsR0FBRyxvQkFBb0IsNkNBQTZDLHNDQUFzQyxHQUFHLDREQUE0RCxpREFBaUQsR0FBRyxjQUFjLHVCQUF1QixXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQixtQ0FBbUMsZUFBZSw2QkFBNkIsZ0JBQWdCLEdBQUcsK0JBQStCLFlBQVksMkJBQTJCLEtBQUsseUJBQXlCLDhCQUE4QixLQUFLLGlCQUFpQixvQkFBb0IsS0FBSyxvQkFBb0IscUJBQXFCLEtBQUssa0JBQWtCLG9CQUFvQixLQUFLLGFBQWEscUJBQXFCLEtBQUssY0FBYyxzQkFBc0IsS0FBSyxXQUFXLHlCQUF5QixhQUFhLGNBQWMsbUJBQW1CLGtCQUFrQix1QkFBdUIsbUNBQW1DLHlCQUF5Qix3Q0FBd0MsZ0NBQWdDLDhDQUE4QyxLQUFLLGtCQUFrQiwrQkFBK0IsMEJBQTBCLEtBQUssMkJBQTJCLGlCQUFpQixLQUFLLHFCQUFxQixxQkFBcUIsa0JBQWtCLHVCQUF1QixLQUFLLG1CQUFtQix1QkFBdUIsS0FBSyxzQ0FBc0MscUJBQXFCLG1CQUFtQixpQkFBaUIsS0FBSyxHQUFHLHFCQUFxQjtBQUMzOHBCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz81YzZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy9QYWNpZmljby9QYWNpZmljby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnRzL0hlZWJvL0hlZWJvLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2V7Zm9udC1mYW1pbHk6UGFjaWZpY287c3JjOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKX1AZm9udC1mYWNle2ZvbnQtZmFtaWx5OkhlZWJvO3NyYzp1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIil9OnJvb3R7LS1wcmltYXJ5LWNvbG9yOiAjMGVhNWU5Oy0tc2Vjb25kYXJ5LWNvbG9yOiAjYmFlNmZkOy0tYWNjZW50LWNvbG9yOiAjZjBmOWZmOy0tYnRuLWhvdmVyLWNvbG9yOiAjZTVlN2ViOy0tY2FuY2VsLWNvbG9yOiBsaWdodGdyZXk7LS1kZWxldGUtY29sb3I6ICNkYzI2MjY7LS1wcmlvcml0eS1sb3ctY29sb3I6ICMyMmM1NWU7LS1wcmlvcml0eS1tZWRpdW0tY29sb3I6ICNlYWIzMDg7LS1wcmlvcml0eS1oaWdoLWNvbG9yOiAjZWY0NDQ0Oy0tc2Nyb2xsYmFyLXRoaWNrbmVzczogNXB4Oy0tZm9udC1zaXplLXhsOiAzcmVtOy0tZm9udC1zaXplLWw6IDIuNHJlbTstLWZvbnQtc2l6ZS1tOiAxLjhyZW07LS1mb250LXNpemUtczogMS41cmVtOy0tZm9udC1zaXplLXhzOiAxLjJyZW07LS1uYXYtcGFkZGluZzogMjBweDstLW5hdi1pdGVtLWhlaWdodDogNDBweDstLW5hdi1pdGVtLXBhZGRpbmc6IDEwcHg7LS1uYXYtaWNvbi1oZWlnaHQ6IDE3LjVweDstLWljb24tc2NhbGU6IHNjYWxlKDEuMjUpOy0tc2VjdGlvbi1ibG9jay1wYWRkaW5nOiB2YXIoLS1uYXYtcGFkZGluZyk7LS1zZWN0aW9uLWlubGluZS1wYWRkaW5nOiBjYWxjKHZhcigtLXNlY3Rpb24tYmxvY2stcGFkZGluZykgKiAyKTstLXRhc2staWNvbi1oZWlnaHQ6IDIwcHg7LS10YXNrLWNoZWNrYm94LXdpZHRoOiAyMHB4Oy0tZGlhbG9nLWJvcmRlci1yYWRpdXM6IDVweDstLWRpYWxvZy1wYWRkaW5nOiAxNy41cHg7LS1kaWFsb2ctaGVhZGVyLWhlaWdodDogNDVweDstLWRpYWxvZy1mb3JtLWNvbnRyb2wtZ2FwOiAuNzVjaDstLWJ0bi1ib3JkZXItd2lkdGg6IDNweDstLWJ0bi1ib3JkZXItc3R5bGU6IHNvbGlkOy0tYnRuLXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgY29sb3I7LS1idG4tdHJhbnNpdGlvbi1kdXJhdGlvbjogLjI1c30qOjotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDp2YXIoLS1zY3JvbGxiYXItdGhpY2tuZXNzKTtoZWlnaHQ6dmFyKC0tc2Nyb2xsYmFyLXRoaWNrbmVzcyl9Kjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7Ym9yZGVyLXJhZGl1czpjYWxjKHZhcigtLXNjcm9sbGJhci10aGlja25lc3MpIC8gMik7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fSo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2U1ZTVlNX0qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntib3JkZXItcmFkaXVzOmNhbGModmFyKC0tc2Nyb2xsYmFyLXRoaWNrbmVzcykgLyAyKTtiYWNrZ3JvdW5kLWNvbG9yOiNkNGQ0ZDR9Kjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojYTNhM2EzfSo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiM3MzczNzN9I2JvZHl7bWF4LWhlaWdodDoxMDB2aH1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1wcmltYXJ5LWNvbG9yKTtwYWRkaW5nOjEwcHggMzBweDtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciBhdXRvIDFmcjthbGlnbi1pdGVtczpjZW50ZXJ9LmFjdGlvbi1idG57ZGlzcGxheTpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7d2lkdGg6bWluLWNvbnRlbnQ7YXNwZWN0LXJhdGlvOjEvMTtjdXJzb3I6cG9pbnRlcjtwYWRkaW5nOjVweH0uY2xvc2UtYnRue2FsaWduLXNlbGY6ZmxleC1lbmQ7bWFyZ2luLWJvdHRvbToxMHB4fS5hY3Rpb24taWNvbnt3aWR0aDoyNXB4O2FzcGVjdC1yYXRpbzoxLzF9LmNvbnRhaW5lci1oZWFkZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTBweH0ubG9nb3toZWlnaHQ6NC41cmVtO2FzcGVjdC1yYXRpbzoxfS50aXRsZXtmb250LWZhbWlseTpQYWNpZmljbyxjdXJzaXZlO2ZvbnQtc2l6ZTo0LjVyZW07Zm9udC13ZWlnaHQ6NDAwO2NvbG9yOiNmZmY7d2hpdGUtc3BhY2U6bm93cmFwfS5tb2JpbGUtbG9nb3tkaXNwbGF5Om5vbmU7d2lkdGg6MzBweDthc3BlY3QtcmF0aW86MS8xfW1haW57ZmxleDoxO2Rpc3BsYXk6ZmxleDttaW4taGVpZ2h0OjB9bWFpbiAqe2ZvbnQtZmFtaWx5OkhlZWJvLHNhbnMtc2VyaWZ9bmF2e292ZXJmbG93LXk6YXV0bztiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFjY2VudC1jb2xvcik7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWJhc2lzOjMwMHB4O3BhZGRpbmc6dmFyKC0tbmF2LXBhZGRpbmcpO3otaW5kZXg6Mn1uYXYgKntmb250LWZhbWlseTpIZWVibyxzYW5zLXNlcmlmfW5hdj5tZW51e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjVweDtsaXN0LXN0eWxlOm5vbmV9Lm5hdi1pdGVte3dpZHRoOjEwMCU7aGVpZ2h0OnZhcigtLW5hdi1pdGVtLWhlaWdodCk7cGFkZGluZzp2YXIoLS1uYXYtaXRlbS1wYWRkaW5nKTtmb250LXNpemU6dmFyKC0tZm9udC1zaXplLXMpO2JvcmRlci1yYWRpdXM6Ny41cHh9YnV0dG9uLm5hdi1pdGVte2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOnZhcigtLW5hdi1pdGVtLXBhZGRpbmcpO2N1cnNvcjpwb2ludGVyO2JvcmRlcjpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7b3V0bGluZTpub25lfWJ1dHRvbi5uYXYtaXRlbTpob3ZlcixidXR0b24ubmF2LWl0ZW06Zm9jdXMsLnVzZXItcHJvamVjdHM+bGk6aGFzKC5wcm9qZWN0LWRlbGV0ZS1idG46aG92ZXIpPmJ1dHRvbi5uYXYtaXRlbSwudXNlci1wcm9qZWN0cz5saTpoYXMoLnByb2plY3QtZGVsZXRlLWJ0bjpmb2N1cyk+YnV0dG9uLm5hdi1pdGVte2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnRuLWhvdmVyLWNvbG9yKX0ubmF2LWl0ZW0uc2VsZWN0ZWQsLm5hdi1pdGVtLnNlbGVjdGVkOmhvdmVyLC5uYXYtaXRlbS5zZWxlY3RlZDpmb2N1cywudXNlci1wcm9qZWN0cz5saTpoYXMoLnByb2plY3QtZGVsZXRlLWJ0bjpob3Zlcik+Lm5hdi1pdGVtLnNlbGVjdGVkLC51c2VyLXByb2plY3RzPmxpOmhhcygucHJvamVjdC1kZWxldGUtYnRuOmZvY3VzKT4ubmF2LWl0ZW0uc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zZWNvbmRhcnktY29sb3IpfS5uYXYtaWNvbntoZWlnaHQ6dmFyKC0tbmF2LWljb24taGVpZ2h0KTtwb2ludGVyLWV2ZW50czpub25lfS5uYXYtaXRlbT4ucHJvamVjdC1uYW1le3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3cteDpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwfS5uYXYtaXRlbS5zZWxlY3RlZD4ucHJvamVjdC1uYW1lLC5uYXYtaXRlbS5hZGQ+LnByb2plY3QtbmFtZXtmb250LXdlaWdodDo1MDB9LnRhc2stY291bnR7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZS14cyk7Y29sb3I6Z3JheX1uYXY+aDJ7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZS1sKTtmb250LXdlaWdodDo1MDA7bWFyZ2luOnZhcigtLW5hdi1pdGVtLXBhZGRpbmcpIDAgdmFyKC0tbmF2LWl0ZW0tcGFkZGluZykgdmFyKC0tbmF2LWl0ZW0tcGFkZGluZyl9LnByb2plY3QtZGVsZXRlLWJ0bnttYXJnaW4tbGVmdDphdXRvO29wYWNpdHk6MDtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO291dGxpbmU6bm9uZTtkaXNwbGF5OmZsZXh9Lm5hdi1pdGVtOmhvdmVyPi5wcm9qZWN0LWRlbGV0ZS1idG4sLm5hdi1pdGVtOmZvY3VzPi5wcm9qZWN0LWRlbGV0ZS1idG4sLnByb2plY3QtZGVsZXRlLWJ0bjpob3ZlciwucHJvamVjdC1kZWxldGUtYnRuOmZvY3Vze29wYWNpdHk6MX0ucHJvamVjdC1kZWxldGUtYnRuOmhvdmVyLC5wcm9qZWN0LWRlbGV0ZS1idG46Zm9jdXN7dHJhbnNmb3JtOnZhcigtLWljb24tc2NhbGUpfS5hZGQtcHJvamVjdD4ubmF2LXByb2plY3QtbmFtZXtmb250LXdlaWdodDo2MDB9aW5wdXQubmF2LWl0ZW17bWFyZ2luLWJvdHRvbToxMHB4O2JvcmRlcjoxcHggc29saWQgYmxhY2t9LmFkZC1wcm9qZWN0PmRpdntkaXNwbGF5OmZsZXg7Z2FwOjE1cHg7Lm5hdi1pdGVte2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUtcyk7Zm9udC13ZWlnaHQ6NjAwO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci13aWR0aDp2YXIoLS1idG4tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6c29saWQ7anVzdGlmeS1jb250ZW50OmNlbnRlcjtvdXRsaW5lOm5vbmU7dHJhbnNpdGlvbi1wcm9wZXJ0eTp2YXIoLS1idG4tdHJhbnNpdGlvbi1wcm9wZXJ0eSk7dHJhbnNpdGlvbi1kdXJhdGlvbjp2YXIoLS1idG4tdHJhbnNpdGlvbi1kdXJhdGlvbil9LnByb2plY3QtY2FuY2Vse2JvcmRlci1jb2xvcjp2YXIoLS1jYW5jZWwtY29sb3IpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FuY2VsLWNvbG9yKTtjb2xvcjojZmZmfS5wcm9qZWN0LWNhbmNlbDpob3ZlciwucHJvamVjdC1jYW5jZWw6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOnZhcigtLWNhbmNlbC1jb2xvcil9LnByb2plY3QtYWRke2JvcmRlci1jb2xvcjp2YXIoLS1wcmltYXJ5LWNvbG9yKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXByaW1hcnktY29sb3IpO2NvbG9yOiNmZmZ9LnByb2plY3QtYWRkOmhvdmVyLC5wcm9qZWN0LWFkZDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6dmFyKC0tcHJpbWFyeS1jb2xvcil9fS5wcm9qZWN0LXZpZXd7d2lkdGg6Y2xhbXAoMzAwcHgsNjAlLDc1MHB4KTttYXJnaW46MCBhdXRvO3BhZGRpbmc6dmFyKC0tc2VjdGlvbi1ibG9jay1wYWRkaW5nKSAwIHZhcigtLXNlY3Rpb24tYmxvY2stcGFkZGluZykgdmFyKC0tc2VjdGlvbi1pbmxpbmUtcGFkZGluZyk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ucHJvamVjdC12aWV3Pi5wcm9qZWN0LW5hbWV7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZS14bCk7Zm9udC13ZWlnaHQ6NjAwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3cteDpjbGlwO3dpZHRoOjEwMCU7cGFkZGluZy1ib3R0b206MjBweDtwYWRkaW5nLXJpZ2h0OnZhcigtLXNlY3Rpb24taW5saW5lLXBhZGRpbmcpfS50YXNrLWxpc3R7bGlzdC1zdHlsZTpub25lO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjcuNXB4O292ZXJmbG93LXk6YXV0bztwYWRkaW5nLXJpZ2h0OnZhcigtLXNlY3Rpb24taW5saW5lLXBhZGRpbmcpfWJ1dHRvbi50YXNre3dpZHRoOjEwMCU7aGVpZ2h0OjQ1cHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTIuNXB4O3BhZGRpbmc6Ny41cHggMTIuNXB4O2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtY29sb3I6I2YzZjRmNjtib3JkZXI6bm9uZTtib3JkZXItbGVmdDo1cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo1cHg7b3V0bGluZTpub25lO292ZXJmbG93OmhpZGRlbn1idXR0b24udGFzazpob3ZlcixidXR0b24udGFzazpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJ0bi1ob3Zlci1jb2xvcil9YnV0dG9uLnRhc2sudGFzay1oaWdoe2JvcmRlci1sZWZ0LWNvbG9yOnZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpfWJ1dHRvbi50YXNrLnRhc2stbWVkaXVte2JvcmRlci1sZWZ0LWNvbG9yOnZhcigtLXByaW9yaXR5LW1lZGl1bS1jb2xvcil9YnV0dG9uLnRhc2sudGFzay1sb3d7Ym9yZGVyLWxlZnQtY29sb3I6dmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKX1pbnB1dFt0eXBlPWNoZWNrYm94XXtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZX1sYWJlbFtmb3JePWNoZWNrYm94XXttaW4td2lkdGg6dmFyKC0tdGFzay1jaGVja2JveC13aWR0aCk7bWluLWhlaWdodDp2YXIoLS10YXNrLWNoZWNrYm94LXdpZHRoKTtib3JkZXI6MnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO2JvcmRlci1yYWRpdXM6M3B4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZX1sYWJlbFtmb3JePWNoZWNrYm94XTpoYXMoaW5wdXRbdHlwZT1jaGVja2JveF06Zm9jdXMtdmlzaWJsZSl7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zZWNvbmRhcnktY29sb3IpfWxhYmVsW2Zvcl49Y2hlY2tib3hdOmFmdGVye2NvbnRlbnQ6XCJcXFxcMjcxNFwiO2NvbG9yOnRyYW5zcGFyZW50O3RyYW5zZm9ybTpzY2FsZSgwKTtmb250LXNpemU6MS4ycmVtO3RyYW5zaXRpb246YWxsIC4ycztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MXB4fWxhYmVsW2Zvcl49Y2hlY2tib3hdOmhhcyhpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkKXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXByaW1hcnktY29sb3IpfWxhYmVsW2Zvcl49Y2hlY2tib3hdOmhhcyhpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkKTphZnRlcntjb2xvcjojZmZmO3RyYW5zZm9ybTp2YXIoLS1pY29uLXNjYWxlKX0udGFzay10aXRsZXtmb250LXNpemU6dmFyKC0tZm9udC1zaXplLW0pO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3cteDpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwO21pbi13aWR0aDo3NXB4O3RleHQtYWxpZ246c3RhcnR9bGFiZWxbZm9yXj1jaGVja2JveF06aGFzKGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQpKy50YXNrLXRpdGxle3RleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2h9LnRhc2s+LnRhc2stZGF0ZXtmb250LXNpemU6dmFyKC0tZm9udC1zaXplLXMpO21hcmdpbi1pbmxpbmU6YXV0byA1cHh9LnRhc2s+LnRhc2stZGF0ZS5leHBpcmVke2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjpyZWR9LnRhc2stYWN0aW9uLWJ0bntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6ZmxleDtvdXRsaW5lOm5vbmV9LnRhc2stYWN0aW9uLWJ0bjpob3ZlciwudGFzay1hY3Rpb24tYnRuOmZvY3Vze3RyYW5zZm9ybTp2YXIoLS1pY29uLXNjYWxlKX0udGFzay1pY29ue2hlaWdodDp2YXIoLS10YXNrLWljb24taGVpZ2h0KX0uZW1wdHktdGFza3tmb250LXNpemU6dmFyKC0tZm9udC1zaXplLW0pO21hcmdpbi1ib3R0b206MjBweH1kaWFsb2c6OmJhY2tkcm9we2JhY2tncm91bmQtY29sb3I6IzAwMDAwMDQwfWRpYWxvZ3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtib3JkZXI6MDt3aWR0aDo1MDBweDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWRpYWxvZyAqe2ZvbnQtZmFtaWx5OkhlZWJvLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NjAwfS5kaWFsb2ctaGVhZGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tcHJpbWFyeS1jb2xvcik7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6dmFyKC0tZGlhbG9nLXBhZGRpbmcpO3BhZGRpbmc6dmFyKC0tZGlhbG9nLXBhZGRpbmcpO2hlaWdodDp2YXIoLS1mb250LXNpemUteGwpO2JveC1zaXppbmc6Y29udGVudC1ib3g7Ym9yZGVyLXJhZGl1czp2YXIoLS1kaWFsb2ctYm9yZGVyLXJhZGl1cykgdmFyKC0tZGlhbG9nLWJvcmRlci1yYWRpdXMpIDAgMH0uZGlhbG9nLXRpdGxle2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUtbCk7Y29sb3I6I2ZmZjtvdmVyZmxvdy14OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1vdmVyZmxvdzplbGxpcHNpc30uZGlhbG9nLWhlYWRlcj4uZXhpdC1idG57Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtkaXNwbGF5OmZsZXh9LmV4aXQtaWNvbntoZWlnaHQ6dmFyKC0tZm9udC1zaXplLXhsKTthc3BlY3QtcmF0aW86MX0uZGlhbG9nLW1haW57ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nOnZhcigtLWRpYWxvZy1wYWRkaW5nKTtib3JkZXItcmFkaXVzOjAgMCB2YXIoLS1kaWFsb2ctYm9yZGVyLXJhZGl1cykgdmFyKC0tZGlhbG9nLWJvcmRlci1yYWRpdXMpO2JhY2tncm91bmQtY29sb3I6I2ZmZjtnYXA6NXB4fS5kaWFsb2ctbWFpbiAqe2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUtbSk7Y29sb3I6dmFyKC0tcHJpbWFyeS1jb2xvcil9LmRpYWxvZy1tYWluPi5wcm9tcHR7bWFyZ2luLWJvdHRvbTozMHB4O292ZXJmbG93LXg6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7Lndhcm5pbmd7Y29sb3I6dmFyKC0tZGVsZXRlLWNvbG9yKX19LmRpYWxvZy1tYWluPi50YXNrLWRlc2N7bWluLWhlaWdodDp2YXIoLS1mb250LXNpemUtbSk7bWF4LWhlaWdodDoxNzVweDttYXJnaW4tYm90dG9tOjMwcHg7b3ZlcmZsb3cteTphdXRvfS5kaWFsb2ctbWFpbj4udGFzay1wcm9qZWN0e3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3cteDpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwfS5kaWFsb2ctbWFpbj5pbnB1dFtuYW1lPXRpdGxlXSwuZGlhbG9nLW1haW4+dGV4dGFyZWF7Ym9yZGVyOm5vbmU7b3V0bGluZTpub25lO2ZvbnQtd2VpZ2h0OjUwMDtjb2xvcjojMDAwfS5kaWFsb2ctbWFpbj50ZXh0YXJlYXtyZXNpemU6bm9uZTttaW4taGVpZ2h0OjE1MHB4O3BhZGRpbmctcmlnaHQ6Ny41cHh9LmRpYWxvZy1tYWluPmlucHV0W25hbWU9dGl0bGVdOjpwbGFjZWhvbGRlciwuZGlhbG9nLW1haW4+dGV4dGFyZWE6OnBsYWNlaG9sZGVye2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUtcyk7Y29sb3I6I2QzZDNkM30uZGF0ZS1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2dhcDpjYWxjKHZhcigtLWRpYWxvZy1mb3JtLWNvbnRyb2wtZ2FwKSAvIDIpO2ZsZXgtd3JhcDp3cmFwfWxhYmVsW2Zvcj1kaWFsb2ctZHVlLWRhdGVde21hcmdpbi1yaWdodDp2YXIoLS1kaWFsb2ctZm9ybS1jb250cm9sLWdhcCl9aW5wdXRbbmFtZT1kdWUtZGF0ZV17YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1wcmltYXJ5LWNvbG9yKTtib3JkZXI6bm9uZTtvdXRsaW5lOm5vbmU7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZS1zKTtmb250LXdlaWdodDo1MDA7Y29sb3I6I2ZmZjtwYWRkaW5nOjJweCA2cHg7Ym9yZGVyLXJhZGl1czozcHg7Y3Vyc29yOnBvaW50ZXJ9Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3J7Y3Vyc29yOnBvaW50ZXI7ZmlsdGVyOmludmVydCgxKX0uZGlhbG9nLW1haW4+ZmllbGRzZXR7Ym9yZGVyOm5vbmU7ZGlzcGxheTpmbGV4O2dhcDpjYWxjKHZhcigtLWRpYWxvZy1mb3JtLWNvbnRyb2wtZ2FwKSAvIDIpO2FsaWduLWl0ZW1zOmNlbnRlcjtmbGV4LXdyYXA6d3JhcDttYXJnaW4tdG9wOjVweH0uZGlhbG9nLW1haW4+ZmllbGRzZXQ+bGVnZW5ke2Zsb2F0OmlubGluZS1zdGFydDttYXJnaW4tcmlnaHQ6dmFyKC0tZGlhbG9nLWZvcm0tY29udHJvbC1nYXApO3doaXRlLXNwYWNlOm5vd3JhcH0uaW5uZXItcHJpb3JpdHktY29udGFpbmVye2Rpc3BsYXk6ZmxleDtnYXA6dmFyKC0tZGlhbG9nLWZvcm0tY29udHJvbC1nYXApO2ZsZXgtZ3JvdzoxO2ZsZXgtd3JhcDp3cmFwfWlucHV0W25hbWU9cHJpb3JpdHlde29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtwb2ludGVyLWV2ZW50czpub25lfS5kaWFsb2ctcHJpb3JpdHl7dHJhbnNpdGlvbi1wcm9wZXJ0eTp2YXIoLS1idG4tdHJhbnNpdGlvbi1wcm9wZXJ0eSk7dHJhbnNpdGlvbi1kdXJhdGlvbjp2YXIoLS1idG4tdHJhbnNpdGlvbi1kdXJhdGlvbik7cG9zaXRpb246cmVsYXRpdmV9LmRpYWxvZy1wcmlvcml0eTpoYXMoaW5wdXQ6Y2hlY2tlZCxpbnB1dDpmb2N1cy12aXNpYmxlKXtjb2xvcjojZmZmfS5wcmlvcml0eS1oaWdoOmhhcyhpbnB1dDpjaGVja2VkKXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpfS5kaWFsb2ctcHJpb3JpdHksLmJ0bi1jb250YWluZXI+YnV0dG9ue2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUtcyk7Zm9udC13ZWlnaHQ6NjAwO3BhZGRpbmc6M3B4IDlweDtib3JkZXItcmFkaXVzOnZhcigtLWRpYWxvZy1ib3JkZXItcmFkaXVzKTtib3JkZXItd2lkdGg6dmFyKC0tYnRuLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJ0bi1ib3JkZXItc3R5bGUpO291dGxpbmU6bm9uZTtjb2xvcjojZmZmfS5idG4tY29udGFpbmVyPmJ1dHRvbntib3JkZXItcmFkaXVzOnZhcigtLWRpYWxvZy1ib3JkZXItcmFkaXVzKTt0cmFuc2l0aW9uLXByb3BlcnR5OnZhcigtLWJ0bi10cmFuc2l0aW9uLXByb3BlcnR5KTt0cmFuc2l0aW9uLWR1cmF0aW9uOnZhcigtLWJ0bi10cmFuc2l0aW9uLWR1cmF0aW9uKX0uYnRuLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7Z2FwOnZhcigtLWRpYWxvZy1mb3JtLWNvbnRyb2wtZ2FwKTttYXJnaW4tbGVmdDphdXRvOy5jYW5jZWwtYnRue2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FuY2VsLWNvbG9yKTtib3JkZXItY29sb3I6dmFyKC0tY2FuY2VsLWNvbG9yKTttYXJnaW4tbGVmdDoyMHB4fS5jYW5jZWwtYnRuOmhvdmVyLC5jYW5jZWwtYnRuOmZvY3Vze2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tY2FuY2VsLWNvbG9yKX19LmRpYWxvZy1hZGQsLmRpYWxvZy1lZGl0ey5wcmltYXJ5LWJ0bntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXByaW1hcnktY29sb3IpO2JvcmRlci1jb2xvcjp2YXIoLS1wcmltYXJ5LWNvbG9yKX0ucHJpbWFyeS1idG46aG92ZXIsLnByaW1hcnktYnRuOmZvY3Vze2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjp2YXIoLS1wcmltYXJ5LWNvbG9yKX19LmRpYWxvZy1kZWxldGUgLnByaW1hcnktYnRue2JhY2tncm91bmQtY29sb3I6dmFyKC0tZGVsZXRlLWNvbG9yKTtib3JkZXItY29sb3I6dmFyKC0tZGVsZXRlLWNvbG9yKX0uZGlhbG9nLWRlbGV0ZSAucHJpbWFyeS1idG46aG92ZXIsLmRpYWxvZy1kZWxldGUgLnByaW1hcnktYnRuOmZvY3Vze2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjp2YXIoLS1kZWxldGUtY29sb3IpfS5wcmlvcml0eS1sb3d7Ym9yZGVyLWNvbG9yOnZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7Y29sb3I6dmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKX0ucHJpb3JpdHktbG93OmhhcyhpbnB1dDpjaGVja2VkLGlucHV0OmZvY3VzLXZpc2libGUpe2JhY2tncm91bmQtY29sb3I6dmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKX0ucHJpb3JpdHktbWVkaXVte2JvcmRlci1jb2xvcjp2YXIoLS1wcmlvcml0eS1tZWRpdW0tY29sb3IpO2NvbG9yOnZhcigtLXByaW9yaXR5LW1lZGl1bS1jb2xvcil9LnByaW9yaXR5LW1lZGl1bTpoYXMoaW5wdXQ6Y2hlY2tlZCxpbnB1dDpmb2N1cy12aXNpYmxlKXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXByaW9yaXR5LW1lZGl1bS1jb2xvcil9LnByaW9yaXR5LWhpZ2h7Ym9yZGVyLWNvbG9yOnZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO2NvbG9yOnZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpfS5wcmlvcml0eS1oaWdoOmhhcyhpbnB1dDpjaGVja2VkLGlucHV0OmZvY3VzLXZpc2libGUpe2JhY2tncm91bmQtY29sb3I6dmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcil9Lm92ZXJsYXl7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZC1jb2xvcjojMDAwO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgLjRzO3otaW5kZXg6LTF9QG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtoZWFkZXJ7cGFkZGluZy1pbmxpbmU6MTVweH0uY29udGFpbmVyLWhlYWRlcntqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5tZW51LWJ0bntkaXNwbGF5OmZsZXh9Lm1vYmlsZS1sb2dve2Rpc3BsYXk6YmxvY2t9LmNsb3NlLWJ0bntkaXNwbGF5OmZsZXh9LmxvZ297aGVpZ2h0OjIuNXJlbX0udGl0bGV7Zm9udC1zaXplOjJyZW19bmF2e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO21heC13aWR0aDoyNzVweDt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xMDAlKTt2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2l0aW9uOnRyYW5zZm9ybSx2aXNpYmlsaXR5O3RyYW5zaXRpb24tZHVyYXRpb246LjNzO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fW5hdi5hY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKTt2aXNpYmlsaXR5OnZpc2libGV9LnByb2plY3QtZGVsZXRlLWJ0bntvcGFjaXR5OjF9LnByb2plY3Qtdmlld3ttYXJnaW46MCBhdXRvO3dpZHRoOjEwMCU7bWF4LXdpZHRoOjU1MHB4fWJ1dHRvbi50YXNre292ZXJmbG93LXg6YXV0b30jYm9keTpoYXMobmF2LmFjdGl2ZSkgLm92ZXJsYXl7ZGlzcGxheTpibG9jaztvcGFjaXR5Oi41O3otaW5kZXg6MX19XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQ0Usb0JBQWEsQ0FDYiw4REFDRixDQUVBLFdBQ0UsaUJBQWEsQ0FDYiw4REFDRixDQUVBLE1BQ0Usd0JBQWlCLENBQ2pCLDBCQUFtQixDQUNuQix1QkFBZ0IsQ0FDaEIsMEJBQW1CLENBQ25CLHlCQUFnQixDQUNoQix1QkFBZ0IsQ0FDaEIsNkJBQXNCLENBQ3RCLGdDQUF5QixDQUN6Qiw4QkFBdUIsQ0FDdkIsMEJBQXVCLENBQ3ZCLG9CQUFnQixDQUNoQixxQkFBZSxDQUNmLHFCQUFlLENBQ2YscUJBQWUsQ0FDZixzQkFBZ0IsQ0FDaEIsbUJBQWUsQ0FDZix1QkFBbUIsQ0FDbkIsd0JBQW9CLENB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QkFBb0IsQ0FDcEIsVUFDRixDQUVBLDBCQUNFLE9BQ0UsbUJBQ0YsQ0FFQSxrQkFDRSxzQkFDRixDQUVBLFVBQ0UsWUFDRixDQUVBLGFBQ0UsYUFDRixDQUVBLFdBQ0UsWUFDRixDQUVBLE1BQ0UsYUFDRixDQUVBLE9BQ0UsY0FDRixDQUVBLElBQ0UsaUJBQVUsQ0FDVixLQUFLLENBQ0wsTUFBTSxDQUNOLFdBQVEsQ0FDUixVQUFPLENBQ1AsZUFBVyxDQUNYLDBCQUFzQixDQUN0QixpQkFBWSxDQUNaLCtCQUF1QixDQUN2Qix1QkFBcUIsQ0FDckIsc0NBQ0YsQ0FFQSxXQUNFLHNCQUFzQixDQUN0QixrQkFDRixDQUVBLG9CQUNFLFNBQ0YsQ0FFQSxjQWh5QkYsYUFpeUJjLENBQ1YsVUFBTyxDQUNQLGVBQ0YsQ0FFQSxZQUNFLGVBQ0YsQ0FFQSwrQkFDRSxhQUFTLENBQ1QsVUFBUyxDQUNULFNBQ0YsQ0FDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBQYWNpZmljbztcXG4gIHNyYzogdXJsKGZvbnRzL1BhY2lmaWNvL1BhY2lmaWNvLVJlZ3VsYXIudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEhlZWJvO1xcbiAgc3JjOiB1cmwoZm9udHMvSGVlYm8vSGVlYm8tVmFyaWFibGVGb250X3dnaHQudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzBlYTVlOTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjYmFlNmZkO1xcbiAgLS1hY2NlbnQtY29sb3I6ICNmMGY5ZmY7XFxuICAtLWJ0bi1ob3Zlci1jb2xvcjogI2U1ZTdlYjtcXG4gIC0tY2FuY2VsLWNvbG9yOiBsaWdodGdyZXk7XFxuICAtLWRlbGV0ZS1jb2xvcjogI2RjMjYyNjtcXG4gIC0tcHJpb3JpdHktbG93LWNvbG9yOiAjMjJjNTVlO1xcbiAgLS1wcmlvcml0eS1tZWRpdW0tY29sb3I6ICNlYWIzMDg7XFxuICAtLXByaW9yaXR5LWhpZ2gtY29sb3I6ICNlZjQ0NDQ7XFxuICAtLXNjcm9sbGJhci10aGlja25lc3M6IDVweDtcXG4gIC0tZm9udC1zaXplLXhsOiAzcmVtO1xcbiAgLS1mb250LXNpemUtbDogMi40cmVtO1xcbiAgLS1mb250LXNpemUtbTogMS44cmVtO1xcbiAgLS1mb250LXNpemUtczogMS41cmVtO1xcbiAgLS1mb250LXNpemUteHM6IDEuMnJlbTtcXG4gIC0tbmF2LXBhZGRpbmc6IDIwcHg7XFxuICAtLW5hdi1pdGVtLWhlaWdodDogNDBweDtcXG4gIC0tbmF2LWl0ZW0tcGFkZGluZzogMTBweDtcXG4gIC0tbmF2LWljb24taGVpZ2h0OiAxNy41cHg7XFxuICAtLWljb24tc2NhbGU6IHNjYWxlKDEuMjUpO1xcbiAgLS1zZWN0aW9uLWJsb2NrLXBhZGRpbmc6IHZhcigtLW5hdi1wYWRkaW5nKTtcXG4gIC0tc2VjdGlvbi1pbmxpbmUtcGFkZGluZzogY2FsYyh2YXIoLS1zZWN0aW9uLWJsb2NrLXBhZGRpbmcpICogMik7XFxuICAtLXRhc2staWNvbi1oZWlnaHQ6IDIwcHg7XFxuICAtLXRhc2stY2hlY2tib3gtd2lkdGg6IDIwcHg7XFxuICAtLWRpYWxvZy1ib3JkZXItcmFkaXVzOiA1cHg7XFxuICAtLWRpYWxvZy1wYWRkaW5nOiAxNy41cHg7XFxuICAtLWRpYWxvZy1oZWFkZXItaGVpZ2h0OiA0NXB4O1xcbiAgLS1kaWFsb2ctZm9ybS1jb250cm9sLWdhcDogMC43NWNoO1xcbiAgLS1idG4tYm9yZGVyLXdpZHRoOiAzcHg7XFxuICAtLWJ0bi1ib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgLS1idG4tdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCBjb2xvcjtcXG4gIC0tYnRuLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xcbn1cXG5cXG4vKiBTY3JvbGxiYXIgKi9cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogdmFyKC0tc2Nyb2xsYmFyLXRoaWNrbmVzcyk7XFxuICBoZWlnaHQ6IHZhcigtLXNjcm9sbGJhci10aGlja25lc3MpO1xcbn1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXNjcm9sbGJhci10aGlja25lc3MpIC8gMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbn1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhci10cmFjazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcbn1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXNjcm9sbGJhci10aGlja25lc3MpIC8gMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xcbn1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNhM2EzO1xcbn1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNzM3MztcXG59XFxuXFxuI2JvZHkge1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hY3Rpb24tYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmFjdGlvbi1pY29uIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5jb250YWluZXItaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IDQuNXJlbTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBQYWNpZmljbywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogNC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5tb2JpbGUtbG9nbyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxufVxcblxcbm1haW4gKiB7XFxuICBmb250LWZhbWlseTogSGVlYm8sIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIE5hdiAqL1xcblxcbm5hdiB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1iYXNpczogMzAwcHg7XFxuICBwYWRkaW5nOiB2YXIoLS1uYXYtcGFkZGluZyk7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG5uYXYgKiB7XFxuICBmb250LWZhbWlseTogSGVlYm8sIHNhbnMtc2VyaWY7XFxufVxcblxcbm5hdiA+IG1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIE5hdiBJdGVtICovXFxuXFxuLm5hdi1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtaXRlbS1oZWlnaHQpO1xcbiAgcGFkZGluZzogdmFyKC0tbmF2LWl0ZW0tcGFkZGluZyk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xcbn1cXG5cXG5idXR0b24ubmF2LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLW5hdi1pdGVtLXBhZGRpbmcpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5idXR0b24ubmF2LWl0ZW06aG92ZXIsXFxuYnV0dG9uLm5hdi1pdGVtOmZvY3VzLFxcbi51c2VyLXByb2plY3RzID4gbGk6aGFzKC5wcm9qZWN0LWRlbGV0ZS1idG46aG92ZXIpID4gYnV0dG9uLm5hdi1pdGVtLFxcbi51c2VyLXByb2plY3RzID4gbGk6aGFzKC5wcm9qZWN0LWRlbGV0ZS1idG46Zm9jdXMpID4gYnV0dG9uLm5hdi1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5uYXYtaXRlbS5zZWxlY3RlZCxcXG4ubmF2LWl0ZW0uc2VsZWN0ZWQ6aG92ZXIsXFxuLm5hdi1pdGVtLnNlbGVjdGVkOmZvY3VzLFxcbi51c2VyLXByb2plY3RzID4gbGk6aGFzKC5wcm9qZWN0LWRlbGV0ZS1idG46aG92ZXIpID4gLm5hdi1pdGVtLnNlbGVjdGVkLFxcbi51c2VyLXByb2plY3RzID4gbGk6aGFzKC5wcm9qZWN0LWRlbGV0ZS1idG46Zm9jdXMpID4gLm5hdi1pdGVtLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5uYXYtaWNvbiB7XFxuICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWhlaWdodCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm5hdi1pdGVtID4gLnByb2plY3QtbmFtZSB7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5uYXYtaXRlbS5zZWxlY3RlZCA+IC5wcm9qZWN0LW5hbWUsXFxuLm5hdi1pdGVtLmFkZCA+IC5wcm9qZWN0LW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRhc2stY291bnQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblxcbm5hdiA+IGgyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWwpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbjogdmFyKC0tbmF2LWl0ZW0tcGFkZGluZykgMCB2YXIoLS1uYXYtaXRlbS1wYWRkaW5nKVxcbiAgICB2YXIoLS1uYXYtaXRlbS1wYWRkaW5nKTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmF2LWl0ZW06aG92ZXIgPiAucHJvamVjdC1kZWxldGUtYnRuLFxcbi5uYXYtaXRlbTpmb2N1cyA+IC5wcm9qZWN0LWRlbGV0ZS1idG4sXFxuLnByb2plY3QtZGVsZXRlLWJ0bjpob3ZlcixcXG4ucHJvamVjdC1kZWxldGUtYnRuOmZvY3VzIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1idG46aG92ZXIsXFxuLnByb2plY3QtZGVsZXRlLWJ0bjpmb2N1cyB7XFxuICB0cmFuc2Zvcm06IHZhcigtLWljb24tc2NhbGUpO1xcbn1cXG5cXG4vKiBBZGQgUHJvamVjdCAqL1xcblxcbi5hZGQtcHJvamVjdCA+IC5uYXYtcHJvamVjdC1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmlucHV0Lm5hdi1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmFkZC1wcm9qZWN0ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxuXFxuICAubmF2LWl0ZW0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXMpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnRuLWJvcmRlci13aWR0aCk7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB2YXIoLS1idG4tdHJhbnNpdGlvbi1wcm9wZXJ0eSk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLWJ0bi10cmFuc2l0aW9uLWR1cmF0aW9uKTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhbmNlbCB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2FuY2VsLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FuY2VsOmhvdmVyLFxcbiAgLnByb2plY3QtY2FuY2VsOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS1jYW5jZWwtY29sb3IpO1xcbiAgfVxcblxcbiAgLnByb2plY3QtYWRkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWFkZDpob3ZlcixcXG4gIC5wcm9qZWN0LWFkZDpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB9XFxufVxcblxcbi8qIFNlY3Rpb24gKi9cXG5cXG4ucHJvamVjdC12aWV3IHtcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgNjAlLCA3NTBweCk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tYmxvY2stcGFkZGluZykgMCB2YXIoLS1zZWN0aW9uLWJsb2NrLXBhZGRpbmcpXFxuICAgIHZhcigtLXNlY3Rpb24taW5saW5lLXBhZGRpbmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0LXZpZXcgPiAucHJvamVjdC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93LXg6IGNsaXA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tc2VjdGlvbi1pbmxpbmUtcGFkZGluZyk7XFxufVxcblxcbi8qIFRhc2sgKi9cXG5cXG4udGFzay1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNy41cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tc2VjdGlvbi1pbmxpbmUtcGFkZGluZyk7XFxufVxcblxcbmJ1dHRvbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEyLjVweDtcXG4gIHBhZGRpbmc6IDcuNXB4IDEyLjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmJ1dHRvbi50YXNrOmhvdmVyLFxcbmJ1dHRvbi50YXNrOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1ob3Zlci1jb2xvcik7XFxufVxcblxcbmJ1dHRvbi50YXNrLnRhc2staGlnaCB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XFxufVxcblxcbmJ1dHRvbi50YXNrLnRhc2stbWVkaXVtIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWRpdW0tY29sb3IpO1xcbn1cXG5cXG5idXR0b24udGFzay50YXNrLWxvdyB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbmxhYmVsW2Zvcl49XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgbWluLXdpZHRoOiB2YXIoLS10YXNrLWNoZWNrYm94LXdpZHRoKTtcXG4gIG1pbi1oZWlnaHQ6IHZhcigtLXRhc2stY2hlY2tib3gtd2lkdGgpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5sYWJlbFtmb3JePVxcXCJjaGVja2JveFxcXCJdOmhhcyhpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzLXZpc2libGUpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbmxhYmVsW2Zvcl49XFxcImNoZWNrYm94XFxcIl06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjcxNFxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXB4O1xcbn1cXG5cXG5sYWJlbFtmb3JePVxcXCJjaGVja2JveFxcXCJdOmhhcyhpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG5sYWJlbFtmb3JePVxcXCJjaGVja2JveFxcXCJdOmhhcyhpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQpOjphZnRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2Zvcm06IHZhcigtLWljb24tc2NhbGUpO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tKTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1pbi13aWR0aDogNzVweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG5sYWJlbFtmb3JePVxcXCJjaGVja2JveFxcXCJdOmhhcyhpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQpICsgLnRhc2stdGl0bGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrID4gLnRhc2stZGF0ZSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zKTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG8gNXB4O1xcbn1cXG5cXG4udGFzayA+IC50YXNrLWRhdGUuZXhwaXJlZCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2stYWN0aW9uLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udGFzay1hY3Rpb24tYnRuOmhvdmVyLFxcbi50YXNrLWFjdGlvbi1idG46Zm9jdXMge1xcbiAgdHJhbnNmb3JtOiB2YXIoLS1pY29uLXNjYWxlKTtcXG59XFxuXFxuLnRhc2staWNvbiB7XFxuICBoZWlnaHQ6IHZhcigtLXRhc2staWNvbi1oZWlnaHQpO1xcbn1cXG5cXG4uZW1wdHktdGFzayB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tKTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLyogRGlhbG9nICovXFxuXFxuZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuZGlhbG9nICoge1xcbiAgZm9udC1mYW1pbHk6IEhlZWJvLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLyogRGlhbG9nIEhlYWRlciAqL1xcblxcbi5kaWFsb2ctaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLWRpYWxvZy1wYWRkaW5nKTtcXG4gIHBhZGRpbmc6IHZhcigtLWRpYWxvZy1wYWRkaW5nKTtcXG4gIGhlaWdodDogdmFyKC0tZm9udC1zaXplLXhsKTtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZGlhbG9nLWJvcmRlci1yYWRpdXMpIHZhcigtLWRpYWxvZy1ib3JkZXItcmFkaXVzKSAwIDA7XFxufVxcblxcbi5kaWFsb2ctdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5kaWFsb2ctaGVhZGVyID4gLmV4aXQtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmV4aXQtaWNvbiB7XFxuICBoZWlnaHQ6IHZhcigtLWZvbnQtc2l6ZS14bCk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxufVxcblxcbi8qIERpYWxvZyBNYWluICovXFxuXFxuLmRpYWxvZy1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogdmFyKC0tZGlhbG9nLXBhZGRpbmcpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLWRpYWxvZy1ib3JkZXItcmFkaXVzKSB2YXIoLS1kaWFsb2ctYm9yZGVyLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uZGlhbG9nLW1haW4gKiB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmRpYWxvZy1tYWluID4gLnByb21wdCB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFxuICAud2FybmluZyB7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWxldGUtY29sb3IpO1xcbiAgfVxcbn1cXG5cXG4uZGlhbG9nLW1haW4gPiAudGFzay1kZXNjIHtcXG4gIG1pbi1oZWlnaHQ6IHZhcigtLWZvbnQtc2l6ZS1tKTtcXG4gIG1heC1oZWlnaHQ6IDE3NXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5kaWFsb2ctbWFpbiA+IC50YXNrLXByb2plY3Qge1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4vKiBEaWFsb2cgRm9ybSBDb250cm9scyAqL1xcblxcbi5kaWFsb2ctbWFpbiA+IGlucHV0W25hbWU9XFxcInRpdGxlXFxcIl0sXFxuLmRpYWxvZy1tYWluID4gdGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5kaWFsb2ctbWFpbiA+IHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgcGFkZGluZy1yaWdodDogNy41cHg7XFxufVxcblxcbi5kaWFsb2ctbWFpbiA+IGlucHV0W25hbWU9XFxcInRpdGxlXFxcIl06OnBsYWNlaG9sZGVyLFxcbi5kaWFsb2ctbWFpbiA+IHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zKTtcXG4gIGNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiBjYWxjKHZhcigtLWRpYWxvZy1mb3JtLWNvbnRyb2wtZ2FwKSAvIDIpO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcImRpYWxvZy1kdWUtZGF0ZVxcXCJdIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tZGlhbG9nLWZvcm0tY29udHJvbC1nYXApO1xcbn1cXG5cXG5pbnB1dFtuYW1lPVxcXCJkdWUtZGF0ZVxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXMpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJweCA2cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG4uZGlhbG9nLW1haW4gPiBmaWVsZHNldCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiBjYWxjKHZhcigtLWRpYWxvZy1mb3JtLWNvbnRyb2wtZ2FwKSAvIDIpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmRpYWxvZy1tYWluID4gZmllbGRzZXQgPiBsZWdlbmQge1xcbiAgZmxvYXQ6IGlubGluZS1zdGFydDtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tZGlhbG9nLWZvcm0tY29udHJvbC1nYXApO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmlubmVyLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1kaWFsb2ctZm9ybS1jb250cm9sLWdhcCk7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbmlucHV0W25hbWU9XFxcInByaW9yaXR5XFxcIl0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmRpYWxvZy1wcmlvcml0eSB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB2YXIoLS1idG4tdHJhbnNpdGlvbi1wcm9wZXJ0eSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1idG4tdHJhbnNpdGlvbi1kdXJhdGlvbik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kaWFsb2ctcHJpb3JpdHk6aGFzKGlucHV0OmNoZWNrZWQsIGlucHV0OmZvY3VzLXZpc2libGUpIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2g6aGFzKGlucHV0OmNoZWNrZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xcbn1cXG5cXG4vKiBEaWFsb2cgQnRuIENvbnRhaW5lciAqL1xcblxcbi5kaWFsb2ctcHJpb3JpdHksXFxuLmJ0bi1jb250YWluZXIgPiBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogM3B4IDlweDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWRpYWxvZy1ib3JkZXItcmFkaXVzKTtcXG4gIGJvcmRlci13aWR0aDogdmFyKC0tYnRuLWJvcmRlci13aWR0aCk7XFxuICBib3JkZXItc3R5bGU6IHZhcigtLWJ0bi1ib3JkZXItc3R5bGUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIgPiBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZGlhbG9nLWJvcmRlci1yYWRpdXMpO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdmFyKC0tYnRuLXRyYW5zaXRpb24tcHJvcGVydHkpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tYnRuLXRyYW5zaXRpb24tZHVyYXRpb24pO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1kaWFsb2ctZm9ybS1jb250cm9sLWdhcCk7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG5cXG4gIC5jYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWNvbG9yKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jYW5jZWwtY29sb3IpO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIH1cXG5cXG4gIC5jYW5jZWwtYnRuOmhvdmVyLFxcbiAgLmNhbmNlbC1idG46Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHZhcigtLWNhbmNlbC1jb2xvcik7XFxuICB9XFxufVxcblxcbi5kaWFsb2ctYWRkLFxcbi5kaWFsb2ctZWRpdCB7XFxuICAucHJpbWFyeS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5wcmltYXJ5LWJ0bjpob3ZlcixcXG4gIC5wcmltYXJ5LWJ0bjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB9XFxufVxcblxcbi5kaWFsb2ctZGVsZXRlIC5wcmltYXJ5LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWxldGUtY29sb3IpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kZWxldGUtY29sb3IpO1xcbn1cXG5cXG4uZGlhbG9nLWRlbGV0ZSAucHJpbWFyeS1idG46aG92ZXIsXFxuLmRpYWxvZy1kZWxldGUgLnByaW1hcnktYnRuOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHZhcigtLWRlbGV0ZS1jb2xvcik7XFxufVxcblxcbi8qIFByaW9yaXR5IExldmVscyAqL1xcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eS1sb3c6aGFzKGlucHV0OmNoZWNrZWQsIGlucHV0OmZvY3VzLXZpc2libGUpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eS1tZWRpdW0ge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWRpdW0tY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZGl1bS1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eS1tZWRpdW06aGFzKGlucHV0OmNoZWNrZWQsIGlucHV0OmZvY3VzLXZpc2libGUpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZGl1bS1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoOmhhcyhpbnB1dDpjaGVja2VkLCBpbnB1dDpmb2N1cy12aXNpYmxlKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmctaW5saW5lOiAxNXB4O1xcbiAgfVxcblxcbiAgLmNvbnRhaW5lci1oZWFkZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5tZW51LWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICAubW9iaWxlLWxvZ28ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5jbG9zZS1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gIH1cXG5cXG4gIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDI3NXB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSwgdmlzaWJpbGl0eTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgbmF2LmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWRlbGV0ZS1idG4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgLnByb2plY3QtdmlldyB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXG4gIH1cXG5cXG4gIGJ1dHRvbi50YXNrIHtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gIH1cXG5cXG4gICNib2R5OmhhcyhuYXYuYWN0aXZlKSAub3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///107
`)},484:module=>{"use strict";eval(`
module.exports = function(cssWithMappingToString) {
  var list = [];
  list.toString = function toString() {
    return this.map(function(item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, void 0]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg0LmpzIiwibWFwcGluZ3MiOiI7QUFNQSxPQUFPLFVBQVUsU0FBVSx3QkFBd0I7QUFDakQsTUFBSSxPQUFPLENBQUM7QUFHWixPQUFLLFdBQVcsU0FBUyxXQUFXO0FBQ2xDLFdBQU8sS0FBSyxJQUFJLFNBQVUsTUFBTTtBQUM5QixVQUFJLFVBQVU7QUFDZCxVQUFJLFlBQVksT0FBTyxLQUFLLENBQUMsTUFBTTtBQUNuQyxVQUFJLEtBQUssQ0FBQyxHQUFHO0FBQ1gsbUJBQVcsY0FBYyxPQUFPLEtBQUssQ0FBQyxHQUFHLEtBQUs7QUFBQSxNQUNoRDtBQUNBLFVBQUksS0FBSyxDQUFDLEdBQUc7QUFDWCxtQkFBVyxVQUFVLE9BQU8sS0FBSyxDQUFDLEdBQUcsSUFBSTtBQUFBLE1BQzNDO0FBQ0EsVUFBSSxXQUFXO0FBQ2IsbUJBQVcsU0FBUyxPQUFPLEtBQUssQ0FBQyxFQUFFLFNBQVMsSUFBSSxJQUFJLE9BQU8sS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUk7QUFBQSxNQUNoRjtBQUNBLGlCQUFXLHVCQUF1QixJQUFJO0FBQ3RDLFVBQUksV0FBVztBQUNiLG1CQUFXO0FBQUEsTUFDYjtBQUNBLFVBQUksS0FBSyxDQUFDLEdBQUc7QUFDWCxtQkFBVztBQUFBLE1BQ2I7QUFDQSxVQUFJLEtBQUssQ0FBQyxHQUFHO0FBQ1gsbUJBQVc7QUFBQSxNQUNiO0FBQ0EsYUFBTztBQUFBLElBQ1QsQ0FBQyxFQUFFLEtBQUssRUFBRTtBQUFBLEVBQ1o7QUFHQSxPQUFLLElBQUksU0FBUyxFQUFFLFNBQVMsT0FBTyxRQUFRLFVBQVUsT0FBTztBQUMzRCxRQUFJLE9BQU8sWUFBWSxVQUFVO0FBQy9CLGdCQUFVLENBQUMsQ0FBQyxNQUFNLFNBQVMsTUFBUyxDQUFDO0FBQUEsSUFDdkM7QUFDQSxRQUFJLHlCQUF5QixDQUFDO0FBQzlCLFFBQUksUUFBUTtBQUNWLGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLEtBQUs7QUFDcEMsWUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDbEIsWUFBSSxNQUFNLE1BQU07QUFDZCxpQ0FBdUIsRUFBRSxJQUFJO0FBQUEsUUFDL0I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUNBLGFBQVMsS0FBSyxHQUFHLEtBQUssUUFBUSxRQUFRLE1BQU07QUFDMUMsVUFBSSxPQUFPLENBQUMsRUFBRSxPQUFPLFFBQVEsRUFBRSxDQUFDO0FBQ2hDLFVBQUksVUFBVSx1QkFBdUIsS0FBSyxDQUFDLENBQUMsR0FBRztBQUM3QztBQUFBLE1BQ0Y7QUFDQSxVQUFJLE9BQU8sVUFBVSxhQUFhO0FBQ2hDLFlBQUksT0FBTyxLQUFLLENBQUMsTUFBTSxhQUFhO0FBQ2xDLGVBQUssQ0FBQyxJQUFJO0FBQUEsUUFDWixPQUFPO0FBQ0wsZUFBSyxDQUFDLElBQUksU0FBUyxPQUFPLEtBQUssQ0FBQyxFQUFFLFNBQVMsSUFBSSxJQUFJLE9BQU8sS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxPQUFPLEtBQUssQ0FBQyxHQUFHLEdBQUc7QUFDbEcsZUFBSyxDQUFDLElBQUk7QUFBQSxRQUNaO0FBQUEsTUFDRjtBQUNBLFVBQUksT0FBTztBQUNULFlBQUksQ0FBQyxLQUFLLENBQUMsR0FBRztBQUNaLGVBQUssQ0FBQyxJQUFJO0FBQUEsUUFDWixPQUFPO0FBQ0wsZUFBSyxDQUFDLElBQUksVUFBVSxPQUFPLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxPQUFPLEtBQUssQ0FBQyxHQUFHLEdBQUc7QUFDN0QsZUFBSyxDQUFDLElBQUk7QUFBQSxRQUNaO0FBQUEsTUFDRjtBQUNBLFVBQUksVUFBVTtBQUNaLFlBQUksQ0FBQyxLQUFLLENBQUMsR0FBRztBQUNaLGVBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxRQUFRO0FBQUEsUUFDOUIsT0FBTztBQUNMLGVBQUssQ0FBQyxJQUFJLGNBQWMsT0FBTyxLQUFLLENBQUMsR0FBRyxLQUFLLEVBQUUsT0FBTyxLQUFLLENBQUMsR0FBRyxHQUFHO0FBQ2xFLGVBQUssQ0FBQyxJQUFJO0FBQUEsUUFDWjtBQUFBLE1BQ0Y7QUFDQSxXQUFLLEtBQUssSUFBSTtBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanM/MjRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///484
`)},615:module=>{"use strict";eval(`
module.exports = function(url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }
  if (/["'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {
    return '"'.concat(url.replace(/"/g, '\\\\"').replace(/\\n/g, "\\\\n"), '"');
  }
  return url;
};
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjE1LmpzIiwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLFVBQVUsU0FBVSxLQUFLLFNBQVM7QUFDdkMsTUFBSSxDQUFDLFNBQVM7QUFDWixjQUFVLENBQUM7QUFBQSxFQUNiO0FBQ0EsTUFBSSxDQUFDLEtBQUs7QUFDUixXQUFPO0FBQUEsRUFDVDtBQUNBLFFBQU0sT0FBTyxJQUFJLGFBQWEsSUFBSSxVQUFVLEdBQUc7QUFHL0MsTUFBSSxlQUFlLEtBQUssR0FBRyxHQUFHO0FBQzVCLFVBQU0sSUFBSSxNQUFNLEdBQUcsRUFBRTtBQUFBLEVBQ3ZCO0FBQ0EsTUFBSSxRQUFRLE1BQU07QUFDaEIsV0FBTyxRQUFRO0FBQUEsRUFDakI7QUFJQSxNQUFJLG9CQUFvQixLQUFLLEdBQUcsS0FBSyxRQUFRLFlBQVk7QUFDdkQsV0FBTyxJQUFLLE9BQU8sSUFBSSxRQUFRLE1BQU0sS0FBSyxFQUFFLFFBQVEsT0FBTyxLQUFLLEdBQUcsR0FBSTtBQUFBLEVBQ3pFO0FBQ0EsU0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcz8xZGU1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///615
`)},756:module=>{"use strict";eval(`
module.exports = function(item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\\n");
  }
  return [content].join("\\n");
};
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzU2LmpzIiwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLE1BQUksVUFBVSxLQUFLLENBQUM7QUFDcEIsTUFBSSxhQUFhLEtBQUssQ0FBQztBQUN2QixNQUFJLENBQUMsWUFBWTtBQUNmLFdBQU87QUFBQSxFQUNUO0FBQ0EsTUFBSSxPQUFPLFNBQVMsWUFBWTtBQUM5QixRQUFJLFNBQVMsS0FBSyxTQUFTLG1CQUFtQixLQUFLLFVBQVUsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUMxRSxRQUFJLE9BQU8sK0RBQStELE9BQU8sTUFBTTtBQUN2RixRQUFJLGdCQUFnQixPQUFPLE9BQU8sTUFBTSxLQUFLO0FBQzdDLFdBQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEtBQUssSUFBSTtBQUFBLEVBQ3BEO0FBQ0EsU0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUk7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcz9hZjEyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///756
`)},136:(module,__unused_webpack_exports,__webpack_require__)=>{eval(`const numbers = __webpack_require__(157);
const lowercase = __webpack_require__(446);
const uppercase = __webpack_require__(443);
module.exports = numbers + lowercase + uppercase;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM2LmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxtQkFBTyxDQUFDLEdBQVc7QUFDbkMsTUFBTSxZQUFZLG1CQUFPLENBQUMsR0FBYTtBQUN2QyxNQUFNLFlBQVksbUJBQU8sQ0FBQyxHQUFhO0FBRXZDLE9BQU8sVUFBVSxVQUFVLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvbmFub2lkLWRpY3Rpb25hcnkvYWxwaGFudW1lcmljLmpzPzI2ODciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbnVtYmVycyA9IHJlcXVpcmUoJy4vbnVtYmVycycpO1xuY29uc3QgbG93ZXJjYXNlID0gcmVxdWlyZSgnLi9sb3dlcmNhc2UnKTtcbmNvbnN0IHVwcGVyY2FzZSA9IHJlcXVpcmUoJy4vdXBwZXJjYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbnVtYmVycyArIGxvd2VyY2FzZSArIHVwcGVyY2FzZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///136
`)},111:(module,__unused_webpack_exports,__webpack_require__)=>{eval(`module.exports = {
  lowercase: __webpack_require__(446),
  uppercase: __webpack_require__(443),
  numbers: __webpack_require__(157),
  nolookalikes: __webpack_require__(618),
  nolookalikesSafe: __webpack_require__(530),
  alphanumeric: __webpack_require__(136)
};
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTExLmpzIiwibWFwcGluZ3MiOiJBQUFBLE9BQU8sVUFBVTtBQUFBLEVBQ2YsV0FBVyxtQkFBTyxDQUFDLEdBQWE7QUFBQSxFQUNoQyxXQUFXLG1CQUFPLENBQUMsR0FBYTtBQUFBLEVBQ2hDLFNBQVMsbUJBQU8sQ0FBQyxHQUFXO0FBQUEsRUFDNUIsY0FBYyxtQkFBTyxDQUFDLEdBQWdCO0FBQUEsRUFDdEMsa0JBQWtCLG1CQUFPLENBQUMsR0FBcUI7QUFBQSxFQUMvQyxjQUFjLG1CQUFPLENBQUMsR0FBZ0I7QUFDeEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvbmFub2lkLWRpY3Rpb25hcnkvaW5kZXguanM/NWUwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbG93ZXJjYXNlOiByZXF1aXJlKCcuL2xvd2VyY2FzZScpLFxuICB1cHBlcmNhc2U6IHJlcXVpcmUoJy4vdXBwZXJjYXNlJyksXG4gIG51bWJlcnM6IHJlcXVpcmUoJy4vbnVtYmVycycpLFxuICBub2xvb2thbGlrZXM6IHJlcXVpcmUoJy4vbm9sb29rYWxpa2VzJyksXG4gIG5vbG9va2FsaWtlc1NhZmU6IHJlcXVpcmUoJy4vbm9sb29rYWxpa2VzLXNhZmUnKSxcbiAgYWxwaGFudW1lcmljOiByZXF1aXJlKCcuL2FscGhhbnVtZXJpYycpLFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///111
`)},446:module=>{eval(`module.exports = "abcdefghijklmnopqrstuvwxyz";
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvbmFub2lkLWRpY3Rpb25hcnkvbG93ZXJjYXNlLmpzP2FiOWEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonOyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVOyIsIm5hbWVzIjpbXSwiZmlsZSI6IjQ0Ni5qcyIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///446
`)},530:module=>{eval(`module.exports = "6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz";
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvbmFub2lkLWRpY3Rpb25hcnkvbm9sb29rYWxpa2VzLXNhZmUuanM/MmQ2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9ICc2Nzg5QkNERkdISktMTU5QUVJUV2JjZGZnaGprbW5wcXJ0d3onOyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVOyIsIm5hbWVzIjpbXSwiZmlsZSI6IjUzMC5qcyIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///530
`)},618:module=>{eval(`module.exports = "346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz";
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvbmFub2lkLWRpY3Rpb25hcnkvbm9sb29rYWxpa2VzLmpzP2FkYjMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAnMzQ2Nzg5QUJDREVGR0hKS0xNTlBRUlRVVldYWWFiY2RlZmdoaWprbW5wcXJ0d3h5eic7XG4iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sVUFBVTsiLCJuYW1lcyI6W10sImZpbGUiOiI2MTguanMiLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///618
`)},157:module=>{eval(`module.exports = "0123456789";
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvbmFub2lkLWRpY3Rpb25hcnkvbnVtYmVycy5qcz8xMmY4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gJzAxMjM0NTY3ODknOyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVOyIsIm5hbWVzIjpbXSwiZmlsZSI6IjE1Ny5qcyIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///157
`)},443:module=>{eval(`module.exports = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvbmFub2lkLWRpY3Rpb25hcnkvdXBwZXJjYXNlLmpzPzcxZDQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonOyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVOyIsIm5hbWVzIjpbXSwiZmlsZSI6IjQ0My5qcyIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///443
`)},72:module=>{"use strict";eval(`

var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzIuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanM/MmRiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///72
`)},659:module=>{"use strict";eval(`

var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjU5LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanM/YjIxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///659
`)},540:module=>{"use strict";eval(`

/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQwLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanM/ZGU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///540
`)},56:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";eval(`

/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTYuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanM/ZGRjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///56
`)},825:module=>{"use strict";eval(`

/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODI1LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanM/ZTQ3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///825
`)},113:module=>{"use strict";eval(`

/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanM/MWRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///113
`)},77:(I,B,g)=>{"use strict";I.exports=g.p+"src/fonts/Heebo//Heebo-VariableFont_wght.5774c4b9e8fb220b3b4b..ttf"},367:(I,B,g)=>{"use strict";I.exports=g.p+"src/fonts/Pacifico//Pacifico-Regular.7bdf9e5e21239393db89..ttf"},170:(__unused_webpack___webpack_module__,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";eval(`
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/esbuild-loader/dist/index.cjs??ruleSet[1].rules[0].use[2]!./src/styles.css
var styles = __webpack_require__(107);
;// CONCATENATED MODULE: ./src/styles.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.A, options);




       /* harmony default export */ const src_styles = (styles/* default */.A && styles/* default */.A.locals ? styles/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
const formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs

const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/en-US/_lib/localize.mjs

const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
const localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/en-US/_lib/match.mjs


const matchOrdinalNumberPattern = /^(\\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\\d+/i;
const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\\.?\\s?c\\.?|b\\.?\\s?c\\.?\\s?e\\.?|a\\.?\\s?d\\.?|c\\.?\\s?e\\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\\.?\\s?m\\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/en-US.mjs





const enUS = {
  code: "en-US",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const en_US = ((/* unused pure expression or super */ null && (enUS)));

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/defaultOptions.mjs
let defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/constants.mjs
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
const minTime = -maxTime;
const millisecondsInWeek = 6048e5;
const millisecondsInDay = 864e5;
const millisecondsInMinute = 6e4;
const millisecondsInHour = 36e5;
const millisecondsInSecond = 1e3;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;

;// CONCATENATED MODULE: ./node_modules/date-fns/toDate.mjs
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new argument.constructor(+argument);
  } else if (typeof argument === "number" || argStr === "[object Number]" || typeof argument === "string" || argStr === "[object String]") {
    return new Date(argument);
  } else {
    return /* @__PURE__ */ new Date(NaN);
  }
}
/* harmony default export */ const date_fns_toDate = ((/* unused pure expression or super */ null && (toDate)));

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfDay.mjs

function startOfDay(date) {
  const _date = toDate(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
/* harmony default export */ const date_fns_startOfDay = ((/* unused pure expression or super */ null && (startOfDay)));

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs

function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/differenceInCalendarDays.mjs



function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = startOfDay(dateLeft);
  const startOfDayRight = startOfDay(dateRight);
  const timestampLeft = +startOfDayLeft - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  const timestampRight = +startOfDayRight - getTimezoneOffsetInMilliseconds(startOfDayRight);
  return Math.round((timestampLeft - timestampRight) / millisecondsInDay);
}
/* harmony default export */ const date_fns_differenceInCalendarDays = ((/* unused pure expression or super */ null && (differenceInCalendarDays)));

;// CONCATENATED MODULE: ./node_modules/date-fns/constructFrom.mjs
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}
/* harmony default export */ const date_fns_constructFrom = ((/* unused pure expression or super */ null && (constructFrom)));

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfYear.mjs


function startOfYear(date) {
  const cleanDate = toDate(date);
  const _date = constructFrom(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
/* harmony default export */ const date_fns_startOfYear = ((/* unused pure expression or super */ null && (startOfYear)));

;// CONCATENATED MODULE: ./node_modules/date-fns/getDayOfYear.mjs



function getDayOfYear(date) {
  const _date = toDate(date);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}
/* harmony default export */ const date_fns_getDayOfYear = ((/* unused pure expression or super */ null && (getDayOfYear)));

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfWeek.mjs


function startOfWeek(date, options) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
/* harmony default export */ const date_fns_startOfWeek = ((/* unused pure expression or super */ null && (startOfWeek)));

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfISOWeek.mjs

function startOfISOWeek(date) {
  return startOfWeek(date, { weekStartsOn: 1 });
}
/* harmony default export */ const date_fns_startOfISOWeek = ((/* unused pure expression or super */ null && (startOfISOWeek)));

;// CONCATENATED MODULE: ./node_modules/date-fns/getISOWeekYear.mjs



function getISOWeekYear(date) {
  const _date = toDate(date);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
/* harmony default export */ const date_fns_getISOWeekYear = ((/* unused pure expression or super */ null && (getISOWeekYear)));

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfISOWeekYear.mjs



function startOfISOWeekYear(date) {
  const year = getISOWeekYear(date);
  const fourthOfJanuary = constructFrom(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}
/* harmony default export */ const date_fns_startOfISOWeekYear = ((/* unused pure expression or super */ null && (startOfISOWeekYear)));

;// CONCATENATED MODULE: ./node_modules/date-fns/getISOWeek.mjs




function getISOWeek(date) {
  const _date = toDate(date);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}
/* harmony default export */ const date_fns_getISOWeek = ((/* unused pure expression or super */ null && (getISOWeek)));

;// CONCATENATED MODULE: ./node_modules/date-fns/getWeekYear.mjs




function getWeekYear(date, options) {
  const _date = toDate(date);
  const year = _date.getFullYear();
  const defaultOptions = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
/* harmony default export */ const date_fns_getWeekYear = ((/* unused pure expression or super */ null && (getWeekYear)));

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfWeekYear.mjs




function startOfWeekYear(date, options) {
  const defaultOptions = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}
/* harmony default export */ const date_fns_startOfWeekYear = ((/* unused pure expression or super */ null && (startOfWeekYear)));

;// CONCATENATED MODULE: ./node_modules/date-fns/getWeek.mjs




function getWeek(date, options) {
  const _date = toDate(date);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}
/* harmony default export */ const date_fns_getWeek = ((/* unused pure expression or super */ null && (getWeek)));

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/addLeadingZeros.mjs
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/format/lightFormatters.mjs

const lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/format/formatters.mjs







const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
const formatters = {
  // Era
  G: function(date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between \`y\` and \`u\` localizers are B.C. years:
  // | Year | \`y\` | \`u\` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also \`yy\` always returns the last two digits of a year,
  // while \`uu\` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize) {
    let hours = date.getHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always \`'Z'\`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is \`'+00:00'\` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    const timestamp = date.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/format/longFormatters.mjs
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};
const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};
const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/protectedTokens.mjs
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token))
    throw new RangeError(_message);
}
function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return \`Use \\\`\${token.toLowerCase()}\\\` instead of \\\`\${token}\\\` (in \\\`\${format}\\\`) for formatting \${subject} to the input \\\`\${input}\\\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\`;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/isDate.mjs
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
/* harmony default export */ const date_fns_isDate = ((/* unused pure expression or super */ null && (isDate)));

;// CONCATENATED MODULE: ./node_modules/date-fns/isValid.mjs


function isValid(date) {
  if (!isDate(date) && typeof date !== "number") {
    return false;
  }
  const _date = toDate(date);
  return !isNaN(Number(_date));
}
/* harmony default export */ const date_fns_isValid = ((/* unused pure expression or super */ null && (isValid)));

;// CONCATENATED MODULE: ./node_modules/date-fns/format.mjs








const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\\w)\\1*|''|'(''|[^'])+('|$)|./g;
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

function format(date, formatStr, options) {
  const defaultOptions = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate(date);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character \`" + firstCharacter + "\`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken)
      return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}
/* harmony default export */ const date_fns_format = ((/* unused pure expression or super */ null && (format)));

;// CONCATENATED MODULE: ./src/components/Utility.js

/* harmony default export */ const Utility = (/* @__PURE__ */(() => {
  const createText = (ele, className, content = "") => {
    const text = document.createElement(ele);
    text.classList.add(...className.filter((name) => name !== ""));
    text.innerHTML = content;
    return text;
  };
  const createImg = (src, className, alt = "", id = "") => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add(...className);
    img.alt = alt;
    img.id = id;
    return img;
  };
  const createFormControl = (type, name, value = "", required = false) => {
    const control = type !== "textarea" ? document.createElement("input") : document.createElement("textarea");
    if (type !== "textarea") {
      control.type = type;
    }
    control.name = name;
    control.value = value;
    control.required = required;
    return control;
  };
  const changeDocumentTitle = (name = null) => {
    document.title = \`\${name ? \`\${name} - \` : ""}Todo List\`;
  };
  const formatDate = (date) => {
    return date ? format(new Date(date), "dd/MM/yyyy") : "-";
  };
  return {
    createText,
    createImg,
    createFormControl,
    changeDocumentTitle,
    formatDate
  };
})());

;// CONCATENATED MODULE: ./node_modules/date-fns/isPast.mjs

function isPast(date) {
  return +toDate(date) < Date.now();
}
/* harmony default export */ const date_fns_isPast = ((/* unused pure expression or super */ null && (isPast)));

;// CONCATENATED MODULE: ./node_modules/date-fns/compareAsc.mjs

function compareAsc(dateLeft, dateRight) {
  const _dateLeft = toDate(dateLeft);
  const _dateRight = toDate(dateRight);
  const diff = _dateLeft.getTime() - _dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
  } else {
    return diff;
  }
}
/* harmony default export */ const date_fns_compareAsc = ((/* unused pure expression or super */ null && (compareAsc)));

;// CONCATENATED MODULE: ./node_modules/nanoid/index.browser.js


let random = (bytes) => crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
  let step = -~(1.6 * mask * defaultSize / alphabet.length);
  return (size = defaultSize) => {
    let id = "";
    while (true) {
      let bytes = getRandom(step);
      let j = step;
      while (j--) {
        id += alphabet[bytes[j] & mask] || "";
        if (id.length === size)
          return id;
      }
    }
  };
};
let customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random);
let nanoid = (size = 21) => {
  let id = "";
  let bytes = crypto.getRandomValues(new Uint8Array(size));
  while (size--) {
    id += scopedUrlAlphabet[bytes[size] & 63];
  }
  return id;
};

// EXTERNAL MODULE: ./node_modules/nanoid-dictionary/index.js
var nanoid_dictionary = __webpack_require__(111);
;// CONCATENATED MODULE: ./node_modules/date-fns/constructNow.mjs

function constructNow(date) {
  return constructFrom(date, Date.now());
}
/* harmony default export */ const date_fns_constructNow = ((/* unused pure expression or super */ null && (constructNow)));

;// CONCATENATED MODULE: ./node_modules/date-fns/isSameDay.mjs

function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = startOfDay(dateLeft);
  const dateRightStartOfDay = startOfDay(dateRight);
  return +dateLeftStartOfDay === +dateRightStartOfDay;
}
/* harmony default export */ const date_fns_isSameDay = ((/* unused pure expression or super */ null && (isSameDay)));

;// CONCATENATED MODULE: ./node_modules/date-fns/isToday.mjs


function isToday(date) {
  return isSameDay(date, constructNow(date));
}
/* harmony default export */ const date_fns_isToday = ((/* unused pure expression or super */ null && (isToday)));

;// CONCATENATED MODULE: ./node_modules/date-fns/isSameWeek.mjs

function isSameWeek(dateLeft, dateRight, options) {
  const dateLeftStartOfWeek = startOfWeek(dateLeft, options);
  const dateRightStartOfWeek = startOfWeek(dateRight, options);
  return +dateLeftStartOfWeek === +dateRightStartOfWeek;
}
/* harmony default export */ const date_fns_isSameWeek = ((/* unused pure expression or super */ null && (isSameWeek)));

;// CONCATENATED MODULE: ./node_modules/date-fns/isThisWeek.mjs


function isThisWeek(date, options) {
  return isSameWeek(date, constructNow(date), options);
}
/* harmony default export */ const date_fns_isThisWeek = ((/* unused pure expression or super */ null && (isThisWeek)));

;// CONCATENATED MODULE: ./node_modules/date-fns/addDays.mjs


function addDays(date, amount) {
  const _date = toDate(date);
  if (isNaN(amount))
    return constructFrom(date, NaN);
  if (!amount) {
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}
/* harmony default export */ const date_fns_addDays = ((/* unused pure expression or super */ null && (addDays)));

;// CONCATENATED MODULE: ./node_modules/date-fns/subDays.mjs

function subDays(date, amount) {
  return addDays(date, -amount);
}
/* harmony default export */ const date_fns_subDays = ((/* unused pure expression or super */ null && (subDays)));

;// CONCATENATED MODULE: ./src/classes/Project.js

class Project {
  name;
  tasks = [];
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  getAllTasks() {
    return this.tasks;
  }
  setTasks(tasks) {
    this.tasks = tasks;
  }
  getTodayTasks() {
    return this.tasks.filter(
      (task) => isToday(new Date(this.formatDate(task.getDueDate())))
    );
  }
  getThisWeekTasks() {
    return this.tasks.filter(
      (task) => isThisWeek(subDays(new Date(this.formatDate(task.getDueDate())), 1))
    );
  }
  getImportantTasks() {
    return this.tasks.filter((task) => task.getPriority() === "high");
  }
  getTask(title) {
    return this.tasks.find((task) => task.getTitle() === title);
  }
  addTask(task) {
    this.tasks.push(task);
  }
  deleteTask(title) {
    this.tasks = this.tasks.filter((task) => task.getTitle() !== title);
  }
  formatDate(date) {
    if (date) {
      const [year, month, day] = date.split("-");
      return \`\${month}/\${day}/\${year}\`;
    } else {
      return null;
    }
  }
}

;// CONCATENATED MODULE: ./src/classes/Task.js
class Task {
  id;
  title;
  description;
  dueDate;
  priority;
  completed;
  constructor(id, title, desc, dueDate, priority, completed) {
    this.id = id;
    this.title = title;
    this.description = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getDueDate() {
    return this.dueDate;
  }
  getPriority() {
    return this.priority;
  }
  getCompleted() {
    return this.completed;
  }
  toggleCompleted() {
    this.completed = !this.completed;
  }
  updateTask(title, desc, dueDate, priority) {
    this.title = title;
    this.description = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

;// CONCATENATED MODULE: ./src/classes/TodoList.js





const TodoList_nanoid = customAlphabet(nanoid_dictionary.alphanumeric, 10);
class TodoList {
  weightage = {
    high: 1,
    medium: 2,
    low: 3
  };
  projects;
  usedId = /* @__PURE__ */ new Set();
  constructor(defaults = null) {
    this.projects = defaults ? defaults.map((name) => new Project(name)) : [];
  }
  getAllProjects() {
    return this.projects;
  }
  getProject(name) {
    return this.projects.find((project) => project.getName() === name);
  }
  setProjects(projects) {
    this.projects = projects;
  }
  addProject(name) {
    this.projects.push(new Project(name));
  }
  deleteProject(defaults, name) {
    this.projects = this.projects.filter(
      (project) => project.getName() !== name
    );
    this.updateDefaultProjects(defaults);
  }
  getAllTasks(name) {
    return this.getProject(name).getAllTasks();
  }
  addTask(defaults, name, title, desc, date, priority) {
    const project = this.getProject(name);
    let id;
    do {
      id = TodoList_nanoid();
    } while (this.usedId.has(id));
    project.addTask(new Task(id, title, desc, date, priority, false));
    this.usedId.add(id);
    this.updateDefaultProjects(defaults);
  }
  deleteTask(defaults, name, title) {
    this.getProject(name).deleteTask(title);
    this.updateDefaultProjects(defaults);
  }
  updateTask(defaults, name, oldTitle, newTitle, desc, dueDate, priority) {
    this.getProject(name).getTask(oldTitle).updateTask(newTitle, desc, dueDate, priority);
    this.updateDefaultProjects(defaults);
  }
  toggleTaskCompleted(defaults, id) {
    this.projects.forEach((project) => {
      project.getAllTasks().forEach((task) => {
        if (task.getId() === id) {
          task.toggleCompleted();
        }
      });
    });
    this.updateDefaultProjects(defaults);
  }
  updateDefaultProjects(defaults) {
    defaults.forEach((name) => {
      const defaultProject = this.getProject(name);
      defaultProject.setTasks([]);
      this.projects.forEach((project) => {
        if (!defaults.includes(project.getName())) {
          const tasks = name === "Today" ? project.getTodayTasks() : name === "This week" ? project.getThisWeekTasks() : project.getImportantTasks();
          tasks.forEach((task) => {
            defaultProject.addTask(
              new Task(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.getDueDate(),
                task.getPriority(),
                task.getCompleted()
              )
            );
          });
          name === "Today" ? this.sortByPriority(defaultProject.getAllTasks()) : defaultProject.setTasks(
            this.sortByDate(defaultProject.getAllTasks())
          );
        }
      });
    });
  }
  sortByPriority(tasks) {
    tasks.sort(
      (a, b) => this.weightage[a.priority] - this.weightage[b.priority]
    );
  }
  sortByDate(tasks) {
    const tasksNoDates = [];
    const tasksWithDates = [];
    tasks.forEach((task) => {
      !task.dueDate ? tasksNoDates.push(task) : tasksWithDates.push(task);
    });
    this.sortByPriority(tasksNoDates);
    this.sortByPriority(tasksWithDates);
    tasksWithDates.sort(
      (a, b) => compareAsc(new Date(a.dueDate), new Date(b.dueDate))
    );
    return [...tasksWithDates, ...tasksNoDates];
  }
}

;// CONCATENATED MODULE: ./src/classes/serializer.js



function serialize(todoList) {
  const replacer = (key, value) => {
    if (value instanceof TodoList) {
      return serializeTodoList(value);
    }
    return value;
  };
  return JSON.stringify(todoList, replacer);
}
function deserialize(str) {
  const reviver = (key, value) => {
    if (typeof value === "object" && value !== null && "projects" in value) {
      return deserializeTodoList(value);
    }
    return value;
  };
  return JSON.parse(str, reviver);
}
function serializeTodoList(todoList) {
  return {
    projects: todoList.projects.map(serializeProject),
    usedId: Array.from(todoList.usedId)
  };
}
function deserializeTodoList(data) {
  const todoList = new TodoList();
  todoList.projects = data.projects.map(deserializeProject);
  todoList.usedId = new Set(data.usedId);
  return todoList;
}
function serializeProject(project) {
  return {
    name: project.name,
    tasks: project.tasks.map(serializeTask),
    taskCount: project.tasks.length
  };
}
function deserializeProject(data) {
  const project = new Project(data.name);
  project.tasks = data.tasks.map(deserializeTask);
  return project;
}
function serializeTask(task) {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
    priority: task.priority,
    completed: task.completed
  };
}
function deserializeTask(data) {
  return new Task(
    data.id,
    data.title,
    data.description,
    data.dueDate,
    data.priority,
    data.completed
  );
}

;// CONCATENATED MODULE: ./src/classes/Storage.js


class Storage {
  static defaults = ["Today", "This week", "Important"];
  static todoList;
  static getTodoList() {
    this.todoList = deserialize(localStorage.getItem("todoList")) ?? new TodoList(this.defaults);
    return this.todoList;
  }
  static setTodoList(todoList) {
    localStorage.setItem("todoList", serialize(todoList));
  }
  static updateDefaultProjects() {
    this.getTodoList().updateDefaultProjects(this.defaults);
    this.setTodoList(this.todoList);
  }
  static containsProject(name) {
    return Boolean(this.getTodoList().getProject(name));
  }
  static getAllProjects() {
    return this.getTodoList().getAllProjects();
  }
  static addProject(name) {
    this.getTodoList().addProject(name);
    this.setTodoList(this.todoList);
  }
  static deleteProject(name) {
    this.getTodoList().deleteProject(this.defaults, name);
    this.setTodoList(this.todoList);
  }
  static getAllTasks(name) {
    return this.getTodoList().getAllTasks(name);
  }
  static getTask(name, title) {
    return this.getTodoList().getProject(name).getTask(title);
  }
  static addTask(name, title, desc, date, priority) {
    this.getTodoList().addTask(
      this.defaults,
      name,
      title,
      desc,
      date,
      priority
    );
    this.setTodoList(this.todoList);
  }
  static deleteTask(name, title) {
    this.getTodoList().deleteTask(this.defaults, name, title);
    this.setTodoList(this.todoList);
  }
  static updateTask(name, oldTitle, newTitle, desc, dueDate, priority) {
    this.getTodoList().updateTask(
      this.defaults,
      name,
      oldTitle,
      newTitle,
      desc,
      dueDate,
      priority
    );
    this.setTodoList(this.todoList);
  }
  static toggleTaskCompleted(id) {
    this.getTodoList().toggleTaskCompleted(this.defaults, id);
    this.setTodoList(this.todoList);
  }
  static getProjectName(title) {
    const userProjects = this.getTodoList().getAllProjects().filter((project) => !this.defaults.includes(project.getName()));
    for (const project of userProjects) {
      const selectedTask = project.getTask(title);
      if (selectedTask) {
        for (const task of project.getAllTasks()) {
          if (task === selectedTask) {
            return project.getName();
          }
        }
      }
    }
  }
}

;// CONCATENATED MODULE: ./src/icons/close-white.svg
const close_white_namespaceObject = __webpack_require__.p + "src/icons//close-white.5bd61c199d043e6a3e3a..svg";
;// CONCATENATED MODULE: ./src/components/Dialog.js





/* harmony default export */ const Dialog = (/* @__PURE__ */(() => {
  const priorityLevels = ["low", "medium", "high"];
  const createDialog = (type, task = null, projectName = null, selectedTaskTitle = null) => {
    const dialog = Utility.createText("dialog", [\`dialog-\${type}\`]);
    dialog.addEventListener("click", (e) => {
      if (e.clientX !== 0 && e.clientY !== 0) {
        const dimensions = dialog.getBoundingClientRect();
        if (e.clientX < dimensions.left || e.clientX > dimensions.right || e.clientY < dimensions.top || e.clientY > dimensions.bottom) {
          dialog.remove();
        }
      }
    });
    switch (type) {
      case "view":
        dialog.append(
          createDialogHeader(task.getTitle(), dialog),
          createDialogViewMain(
            task.getDescription(),
            projectName,
            task.getDueDate(),
            task.getPriority()
          )
        );
        break;
      case "add":
      case "edit":
        dialog.append(
          createDialogHeader(\`\${capitalizeFirstLetter(type)} Task\`, dialog),
          createDialogForm(
            type,
            dialog,
            task?.getTitle() ?? "",
            task?.getDescription() ?? "",
            task?.getDueDate() ?? "",
            task?.getPriority() ?? "",
            selectedTaskTitle
          )
        );
        break;
      case "delete":
        dialog.append(
          createDialogHeader(
            \`Delete \${selectedTaskTitle ? "Task" : "Project"}\`,
            dialog
          ),
          createDialogDeleteMain(dialog, projectName, selectedTaskTitle)
        );
    }
    document.querySelector("#body").append(dialog);
    dialog.showModal();
  };
  const createDialogHeader = (title, dialog) => {
    const dialogHeader = Utility.createText("div", ["dialog-header"]);
    const exitBtn = Utility.createText("button", ["exit-btn"]);
    exitBtn.type = "reset";
    exitBtn.addEventListener("click", () => dialog.remove());
    const exitIcon = Utility.createImg(close_white_namespaceObject, ["exit-icon"], "Exit Dialog");
    exitBtn.append(exitIcon);
    dialogHeader.append(
      Utility.createText("h4", ["dialog-title"], title),
      exitBtn
    );
    return dialogHeader;
  };
  const createDialogViewMain = (desc, project, date, priority) => {
    const dialogMain = Utility.createText("div", ["dialog-main"]);
    const taskPriority = Utility.createText(
      "p",
      ["task-priority"],
      "Priority : "
    );
    taskPriority.append(
      Utility.createText(
        "span",
        [\`priority-\${priority}\`],
        capitalizeFirstLetter(priority)
      )
    );
    dialogMain.append(
      Utility.createText("p", ["task-desc"], desc.replace(/\\n/g, "<br>")),
      Utility.createText("p", ["task-project"], \`Project : \${project}\`),
      Utility.createText(
        "p",
        ["task-date"],
        \`Due Date : \${Utility.formatDate(date)}\`
      ),
      taskPriority
    );
    return dialogMain;
  };
  const createDialogForm = (type, dialog, title, desc, date, priority, selectedTaskTitle) => {
    const dialogMain = Utility.createText("form", ["dialog-main"]);
    dialogMain.addEventListener("submit", (e) => {
      e.preventDefault();
      dialog.remove();
      const formData = new FormData(dialogMain);
      const { title: title2, desc: desc2, priority: priority2 } = Object.fromEntries(formData.entries());
      const dueDate = formData.get("due-date") === "" ? null : formData.get("due-date");
      const projectName = Section.getProjectName();
      type === "add" ? Storage.addTask(projectName, title2, desc2, dueDate, priority2) : Storage.updateTask(
        Storage.getProjectName(selectedTaskTitle),
        selectedTaskTitle,
        title2,
        desc2,
        dueDate,
        priority2
      );
      Nav.updateTaskCount();
      Section.replaceSection();
    });
    const titleInput = Utility.createFormControl("text", "title", title, true);
    titleInput.placeholder = "Title";
    titleInput.autofocus = true;
    const descTextarea = Utility.createFormControl("textarea", "desc", desc);
    descTextarea.placeholder = "Description";
    const dateDiv = Utility.createText("div", ["date-container"]);
    const dateLabel = Utility.createText("label", [], "Due By :");
    dateLabel.htmlFor = "dialog-due-date";
    const dateInput = Utility.createFormControl("date", "due-date", date);
    dateInput.id = "dialog-due-date";
    dateInput.addEventListener("click", () => dateInput.showPicker());
    dateDiv.append(dateLabel, dateInput);
    const fieldset = Utility.createText("fieldset", ["priority-container"]);
    const legend = Utility.createText("legend", [], "Priority :");
    const radioGroup = priorityLevels.map((level) => {
      const label = Utility.createText(
        "label",
        ["dialog-priority", \`priority-\${level}\`],
        capitalizeFirstLetter(level)
      );
      label.htmlFor = level;
      const input = Utility.createFormControl(
        "radio",
        "priority",
        level,
        level === "low"
      );
      input.name = "priority";
      input.id = level;
      input.checked = level === priority;
      label.append(input);
      return label;
    });
    const primaryBtn = createDialogPrimaryBtn(type);
    primaryBtn.type = "submit";
    const innerContainer = Utility.createText("div", [
      "inner-priority-container"
    ]);
    innerContainer.append(
      ...radioGroup,
      createDialogBtnGroup([createDialogCancelBtn(dialog), primaryBtn])
    );
    fieldset.append(legend, innerContainer);
    dialogMain.append(titleInput, descTextarea, dateDiv, fieldset);
    return dialogMain;
  };
  const createDialogDeleteMain = (dialog, projectName, selectedTaskTitle) => {
    const dialogMain = Utility.createText("div", ["dialog-main"]);
    const confirmation = Utility.createText(
      "p",
      ["prompt"],
      \`Are you sure you want to delete \${selectedTaskTitle ? "this task" : "project " + projectName}?\`
    );
    if (!selectedTaskTitle) {
      confirmation.append(
        Utility.createText(
          "span",
          ["warning"],
          " Warning: this is irreversible!"
        )
      );
    }
    const primaryBtn = createDialogPrimaryBtn("delete");
    primaryBtn.type = "button";
    primaryBtn.addEventListener("click", () => {
      dialog.remove();
      if (selectedTaskTitle) {
        Storage.deleteTask(
          Storage.getProjectName(selectedTaskTitle),
          selectedTaskTitle
        );
      } else {
        Storage.deleteProject(projectName);
        Nav.removeNavBtn(projectName);
        Nav.showNav();
      }
      Nav.updateTaskCount();
      Section.replaceSection();
    });
    dialogMain.append(
      confirmation,
      createDialogBtnGroup([createDialogCancelBtn(dialog), primaryBtn])
    );
    return dialogMain;
  };
  const createDialogPrimaryBtn = (content) => {
    return Utility.createText(
      "button",
      ["primary-btn"],
      capitalizeFirstLetter(content)
    );
  };
  const createDialogCancelBtn = (dialog) => {
    const cancelBtn = Utility.createText("button", ["cancel-btn"], "Cancel");
    cancelBtn.type = "reset";
    cancelBtn.addEventListener("click", () => dialog.remove());
    return cancelBtn;
  };
  const createDialogBtnGroup = (btns) => {
    const btnGroup = Utility.createText("div", ["btn-container"]);
    btnGroup.append(...btns);
    return btnGroup;
  };
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return {
    createDialog
  };
})());

;// CONCATENATED MODULE: ./src/icons/square-edit-outline.svg
const square_edit_outline_namespaceObject = __webpack_require__.p + "src/icons//square-edit-outline.8421b7fc701a0f1a93be..svg";
;// CONCATENATED MODULE: ./src/icons/delete.svg
const delete_namespaceObject = __webpack_require__.p + "src/icons//delete.bde675c38d54979f589e..svg";
;// CONCATENATED MODULE: ./src/icons/plus.svg
const plus_namespaceObject = __webpack_require__.p + "src/icons//plus.3cffe9a515498593b872..svg";
;// CONCATENATED MODULE: ./src/components/Section.js







/* harmony default export */ const Section = (/* @__PURE__ */(() => {
  let selectedTaskTitle = null;
  const createSection = (name = null) => {
    const section = Utility.createText("section", ["project-view"]);
    const header = Utility.createText(
      "h3",
      ["project-name"],
      name ?? "Select a project"
    );
    section.append(header);
    if (name) {
      const list = Utility.createText("menu", ["task-list"]);
      Storage.getAllTasks(name).length ? list.append(...Storage.getAllTasks(name).map(createTaskBtn)) : header.insertAdjacentElement(
        "afterend",
        Utility.createText(
          "p",
          ["empty-task"],
          "It's quite empty in here..."
        )
      );
      if (!Storage.defaults.includes(name)) {
        list.append(createTaskBtn());
      }
      section.append(list);
    }
    return section;
  };
  const createTaskBtn = (task = null) => {
    const li = document.createElement("li");
    const taskBtn = Utility.createText("button", [
      "task",
      \`\${task ? \`task-\${task.priority}\` : "add-task"}\`
    ]);
    if (task) {
      taskBtn.addEventListener("click", (e) => {
        if (["LABEL", "INPUT"].includes(e.target.tagName))
          return;
        const projectName = getProjectName();
        Dialog.createDialog(
          "view",
          Storage.getTask(projectName, getTaskTitle(e.target)),
          projectName
        );
      });
      const label = document.createElement("label");
      label.htmlFor = \`checkbox-\${task.id}\`;
      const checkbox = Utility.createFormControl("checkbox", "");
      checkbox.id = \`checkbox-\${task.id}\`;
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", (e) => {
        const taskHeader = e.target.closest(".task").querySelector(".task-title");
        taskHeader.classList.toggle("completed");
        Storage.toggleTaskCompleted(task.id);
      });
      label.append(checkbox);
      const taskTitle = Utility.createText(
        "p",
        ["task-title", \`\${task.completed ? "completed" : ""}\`],
        task.title
      );
      const taskDate = Utility.createText(
        "p",
        [
          "task-date",
          \`\${task.dueDate && isPast(new Date(task.dueDate)) ? "expired" : ""}\`
        ],
        Utility.formatDate(task.dueDate)
      );
      const editBtn = Utility.createText("button", ["task-action-btn"]);
      editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedTaskTitle = getTaskTitle(e.target);
        const projectName = getProjectName();
        Dialog.createDialog(
          "edit",
          Storage.getTask(projectName, selectedTaskTitle),
          projectName,
          selectedTaskTitle
        );
      });
      editBtn.append(Utility.createImg(square_edit_outline_namespaceObject, ["task-icon"], "Edit Task"));
      const trashBtn = Utility.createText("button", ["task-action-btn"]);
      trashBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedTaskTitle = getTaskTitle(e.target);
        const projectName = getProjectName();
        Dialog.createDialog(
          "delete",
          Storage.getTask(projectName, selectedTaskTitle),
          projectName,
          selectedTaskTitle
        );
      });
      trashBtn.append(Utility.createImg(delete_namespaceObject, ["task-icon"], "Delete Task"));
      taskBtn.append(label, taskTitle, taskDate, editBtn, trashBtn);
    } else {
      taskBtn.addEventListener("click", () => {
        Dialog.createDialog("add", null, getProjectName());
      });
      taskBtn.append(
        Utility.createImg(plus_namespaceObject, ["task-icon"]),
        Utility.createText("p", ["task-title"], "Add Task")
      );
    }
    li.append(taskBtn);
    return li;
  };
  const replaceSection = () => {
    const projectName = getProjectName();
    document.querySelector(".project-view").replaceWith(createSection(projectName));
    Utility.changeDocumentTitle(projectName);
  };
  const getProjectName = () => {
    return document.querySelector(".nav-item.selected > .project-name")?.textContent;
  };
  const getTaskTitle = (ele) => {
    return ele.closest(".task").querySelector(".task-title").textContent;
  };
  return {
    createSection,
    replaceSection,
    getProjectName
  };
})());

;// CONCATENATED MODULE: ./src/icons/calendar-today.svg
const calendar_today_namespaceObject = __webpack_require__.p + "src/icons//calendar-today.233385e32206cd372d69..svg";
;// CONCATENATED MODULE: ./src/icons/calendar-week.svg
const calendar_week_namespaceObject = __webpack_require__.p + "src/icons//calendar-week.518ff47ec29e1552eabd..svg";
;// CONCATENATED MODULE: ./src/icons/calendar-alert.svg
const calendar_alert_namespaceObject = __webpack_require__.p + "src/icons//calendar-alert.05872146a8dde038f082..svg";
;// CONCATENATED MODULE: ./src/icons/format-list-bulleted.svg
const format_list_bulleted_namespaceObject = __webpack_require__.p + "src/icons//format-list-bulleted.365f3e7f182c9f913994..svg";
;// CONCATENATED MODULE: ./src/icons/close.svg
const close_namespaceObject = __webpack_require__.p + "src/icons//close.e8df49869ef43eb30ac9..svg";
;// CONCATENATED MODULE: ./src/components/Nav.js










/* harmony default export */ const Nav = ((() => {
  const mobileBreakpoint = 992;
  let nav;
  let mobileView = window.innerWidth < mobileBreakpoint;
  const createNav = (header, main) => {
    nav = document.createElement("nav");
    nav.addEventListener("focusout", (e) => {
      if (!nav.contains(e.relatedTarget)) {
        hideNav();
      }
    });
    const closeBtn = Utility.createText("button", ["close-btn", "action-btn"]);
    closeBtn.append(Utility.createImg(close_namespaceObject, ["action-icon"], "Close"));
    closeBtn.addEventListener("click", hideNav);
    nav.append(
      closeBtn,
      createNavMenu("default", [
        createNavBtn("Today", calendar_today_namespaceObject),
        createNavBtn("This week", calendar_week_namespaceObject),
        createNavBtn("Important", calendar_alert_namespaceObject)
      ]),
      Utility.createText("h2", [], "Projects"),
      createNavMenu("user", [
        ...Storage.getAllProjects().filter((project) => !Storage.defaults.includes(project.getName())).map((project) => createNavBtn(project.getName())),
        createNavBtn()
      ])
    );
    window.addEventListener("resize", () => {
      if (window.innerWidth < mobileBreakpoint && !mobileView) {
        header.append(document.adoptNode(nav));
        mobileView = true;
      } else if (window.innerWidth > mobileBreakpoint && mobileView) {
        main.insertAdjacentElement("afterbegin", document.adoptNode(nav));
        mobileView = false;
      }
    });
    return nav;
  };
  const createNavMenu = (type, btns) => {
    const menu = Utility.createText("menu", [\`\${type}-projects\`]);
    menu.append(...btns);
    return menu;
  };
  const createNavBtn = (projectName = null, icon = null) => {
    const li = document.createElement("li");
    const navBtn = Utility.createText("button", [
      "nav-item",
      \`\${projectName ? "project" : "add"}\`
    ]);
    if (projectName) {
      navBtn.addEventListener("click", () => {
        document.querySelector(".selected")?.classList.remove("selected");
        navBtn.classList.add("selected");
        Section.replaceSection();
        hideNav();
      });
      navBtn.append(
        Utility.createImg(icon ?? format_list_bulleted_namespaceObject, ["nav-icon"]),
        Utility.createText("p", ["project-name"], projectName),
        Utility.createText("span", ["task-count"], getTaskCount(projectName))
      );
      if (!Storage.defaults.includes(projectName)) {
        const deleteBtn = Utility.createText("button", ["project-delete-btn"]);
        deleteBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const projectName2 = e.target.parentNode.querySelector(".project-name").textContent;
          Dialog.createDialog("delete", null, projectName2);
          hideNav();
        });
        deleteBtn.append(
          Utility.createImg(close_namespaceObject, ["nav-icon"], "Delete Project")
        );
        navBtn.append(deleteBtn);
      }
    } else {
      navBtn.addEventListener("click", () => {
        navBtn.parentNode.replaceWith(createInputProject());
        document.querySelector("input.nav-item").focus();
      });
      navBtn.append(
        Utility.createImg(plus_namespaceObject, ["nav-icon"]),
        Utility.createText("p", ["project-name"], "Add Project")
      );
    }
    li.append(navBtn);
    return li;
  };
  const createInputProject = () => {
    const form = Utility.createText("form", ["add-project"]);
    const input = Utility.createFormControl("text", "project-name");
    input.className = "nav-item";
    input.placeholder = "Enter project name";
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      createNewProject(form, input.value);
    });
    const div = document.createElement("div");
    const cancelBtn = Utility.createText(
      "button",
      ["nav-item", "project-cancel"],
      "Cancel"
    );
    cancelBtn.type = "button";
    cancelBtn.addEventListener("click", () => {
      form.replaceWith(createNavBtn());
    });
    const addBtn = Utility.createText(
      "button",
      ["nav-item", "project-add"],
      "Add"
    );
    addBtn.type = "submit";
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        createNewProject(form, e.target.value);
      } else if (e.key === "Escape") {
        form.replaceWith(createNavBtn());
      }
    });
    div.append(cancelBtn, addBtn);
    form.append(input, div);
    return form;
  };
  const createNewProject = (form, projectName) => {
    if (!projectName) {
      alert("Project name cannot be empty!");
    } else if (Storage.containsProject(projectName)) {
      alert("Project name already exists!");
    } else {
      Storage.addProject(projectName);
      form.replaceWith(createNavBtn(projectName), createNavBtn());
    }
  };
  const removeNavBtn = (projectName) => {
    document.querySelectorAll(".nav-item").forEach((btn) => {
      if (btn.querySelector(".project-name").textContent === projectName) {
        btn.parentNode.remove();
        return;
      }
    });
  };
  const getTaskCount = (projectName) => {
    const taskCount = Storage.getAllTasks(projectName).length;
    return taskCount ? taskCount.toString() : "";
  };
  const updateTaskCount = () => {
    const projectBtns = document.querySelectorAll(".project");
    projectBtns.forEach((btn) => {
      const projectName = btn.querySelector(".project-name").textContent;
      btn.querySelector(".task-count").textContent = getTaskCount(projectName);
    });
  };
  const showNav = () => {
    if (mobileView && !document.querySelector(".selected")) {
      nav.classList.add("active");
    }
  };
  const hideNav = () => {
    nav.classList.remove("active");
  };
  return {
    createNav,
    removeNavBtn,
    updateTaskCount,
    showNav,
    hideNav
  };
})());

;// CONCATENATED MODULE: ./src/icons/clipboard-check-outline.svg
const clipboard_check_outline_namespaceObject = __webpack_require__.p + "src/icons//clipboard-check-outline.43cbd3d95bc9f1dd0305..svg";
;// CONCATENATED MODULE: ./src/icons/menu-white.svg
const menu_white_namespaceObject = __webpack_require__.p + "src/icons//menu-white.23591a1884f56da3f8a7..svg";
;// CONCATENATED MODULE: ./src/components/Header.js



/* harmony default export */ const Header = (/* @__PURE__ */(() => {
  const createHeader = () => {
    const header = document.createElement("header");
    const menuBtn = Utility.createText("button", ["menu-btn", "action-btn"]);
    menuBtn.append(Utility.createImg(menu_white_namespaceObject, ["action-icon"], "Sidebar"));
    menuBtn.addEventListener("click", () => {
      document.querySelector("nav").classList.add("active");
    });
    const div = Utility.createText("div", ["container-header"]);
    div.append(
      Utility.createImg(clipboard_check_outline_namespaceObject, ["logo"], "Todo List"),
      Utility.createText("h1", ["title"], "Todo List")
    );
    header.append(menuBtn, div);
    return header;
  };
  return { createHeader };
})());

;// CONCATENATED MODULE: ./src/icons/github.svg
const github_namespaceObject = __webpack_require__.p + "src/icons//github.76c251b9dd291d8c1256..svg";
;// CONCATENATED MODULE: ./src/components/Footer.js


/* harmony default export */ const Footer = (/* @__PURE__ */(() => {
  const createFooter = () => {
    const footer = document.createElement("footer");
    const githubLink = Utility.createText("a", ["github-link"]);
    githubLink.href = "https://github.com/ChiefWoods/todo-list";
    githubLink.target = "_blank";
    githubLink.append(Utility.createImg(github_namespaceObject, ["github-icon"], "GitHub"));
    footer.append(
      Utility.createText(
        "p",
        ["made-by"],
        \`Copyright @ \${(/* @__PURE__ */ new Date()).getFullYear()} ChiefWoods\`
      ),
      githubLink
    );
    return footer;
  };
  return { createFooter };
})());

;// CONCATENATED MODULE: ./src/index.js







Storage.updateDefaultProjects();
const main = document.createElement("main");
const header = Header.createHeader();
main.append(Nav.createNav(header, main), Section.createSection("Today"));
const overlay = Utility.createText("div", ["overlay"]);
overlay.addEventListener("click", Nav.hideNav);
document.querySelector("#body").append(header, main, Footer.createFooter(), overlay);
for (const navBtn of document.querySelectorAll(".nav-item.project")) {
  const projectName = navBtn.querySelector(".project-name").textContent;
  if (projectName === "Today") {
    navBtn.classList.add("selected");
    Utility.changeDocumentTitle(projectName);
    break;
  }
}
setInterval(() => {
  const date = /* @__PURE__ */ new Date();
  if (date.getHours() === 0 && date.getMinutes() === 0) {
    Storage.updateDefaultProjects();
  }
}, 6e4);
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBSSxLQUFLLFNBQVMsTUFBTSxLQUFLLEtBQUssV0FBVyxNQUFNLEdBQUc7QUFDcEQsV0FBTyxDQUFDLHNCQUFzQjtBQUFBLEVBQ2hDO0FBQ0YsR0FBRyxHQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/MzZlOSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzP2ZkMjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qcz8zZjIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qcz9iZDg2Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanM/Yjk5NSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qcz81YTg4Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanM/MjkwNyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuLm1qcz83OGVjIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLm1qcz9iOWM2Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC5tanM/N2M2NiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTLm1qcz9iMThlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcz8xZmUwIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdGFudHMubWpzPzI2ZDciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanM/ZDQ2OSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanM/YWNjYSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qcz84MGE2Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzPzc0YzUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzP2U5ZjQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZZZWFyLm1qcz9iYzg1Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXlPZlllYXIubWpzP2I3MjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLm1qcz81Y2YzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vlay5tanM/OTg2NSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vla1llYXIubWpzPzE2NWQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrWWVhci5tanM/N2E3ZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vlay5tanM/OWNlMCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIubWpzP2VmMzgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrWWVhci5tanM/ODBjNCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vlay5tanM/OTRiYiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9hZGRMZWFkaW5nWmVyb3MubWpzP2IyZGUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy5tanM/ZGJhNSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvZm9ybWF0dGVycy5tanM/MjNlZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzPzYxMjEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qcz85MDAzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0RhdGUubWpzPzA5YjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVmFsaWQubWpzPzhjMzkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2Zvcm1hdC5tanM/MzhhNSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9VdGlsaXR5LmpzP2IzOTAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzUGFzdC5tanM/YTI2YyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29tcGFyZUFzYy5tanM/Y2ZkYyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmJyb3dzZXIuanM/ZTFiZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0Tm93Lm1qcz9kZTM2Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVEYXkubWpzPzVjZTUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVG9kYXkubWpzPzMyNDMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZVdlZWsubWpzP2RhOGYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVGhpc1dlZWsubWpzPzE0NjQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2FkZERheXMubWpzPzM1ODUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N1YkRheXMubWpzPzRiNGQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NsYXNzZXMvUHJvamVjdC5qcz9iN2JkIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jbGFzc2VzL1Rhc2suanM/NTZiMCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2xhc3Nlcy9Ub2RvTGlzdC5qcz84MDNkIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jbGFzc2VzL3NlcmlhbGl6ZXIuanM/MzhhMyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2xhc3Nlcy9TdG9yYWdlLmpzPzI5YjgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvRGlhbG9nLmpzPzFkNGIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcz9jZjAxIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL05hdi5qcz9mMzk0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcz9hZDhlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qcz8yNzBiIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL2VzYnVpbGQtbG9hZGVyL2Rpc3QvaW5kZXguY2pzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsyXSEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvZXNidWlsZC1sb2FkZXIvZGlzdC9pbmRleC5janM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzJdIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImNvbnN0IGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIHNlY29uZFwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiBcIjEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICBoYWxmQU1pbnV0ZTogXCJoYWxmIGEgbWludXRlXCIsXG5cbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICB4TWludXRlczoge1xuICAgIG9uZTogXCIxIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBob3VyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeEhvdXJzOiB7XG4gICAgb25lOiBcIjEgaG91clwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhEYXlzOiB7XG4gICAgb25lOiBcIjEgZGF5XCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGRheXNcIixcbiAgfSxcblxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogXCJhYm91dCAxIHdlZWtcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICB4V2Vla3M6IHtcbiAgICBvbmU6IFwiMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiBcImFib3V0IDEgbW9udGhcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgeE1vbnRoczoge1xuICAgIG9uZTogXCIxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIHhZZWFyczoge1xuICAgIG9uZTogXCIxIHllYXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiBcIm92ZXIgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwib3ZlciB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWxtb3N0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFsbW9zdCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREaXN0YW5jZSA9ICh0b2tlbiwgY291bnQsIG9wdGlvbnMpID0+IHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKFwie3tjb3VudH19XCIsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnM/LmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIFwiaW4gXCIgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyBcIiBhZ29cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBUaGUgbG9jYWxpemUgZnVuY3Rpb24gYXJndW1lbnQgY2FsbGJhY2sgd2hpY2ggYWxsb3dzIHRvIGNvbnZlcnQgcmF3IHZhbHVlIHRvXG4gKiB0aGUgYWN0dWFsIHR5cGUuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgY29udmVydGVkIHZhbHVlXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwIG9mIGxvY2FsaXplZCB2YWx1ZXMgZm9yIGVhY2ggd2lkdGguXG4gKi9cblxuLyoqXG4gKiBUaGUgaW5kZXggdHlwZSBvZiB0aGUgbG9jYWxlIHVuaXQgdmFsdWUuIEl0IHR5cGVzIGNvbnZlcnNpb24gb2YgdW5pdHMgb2ZcbiAqIHZhbHVlcyB0aGF0IGRvbid0IHN0YXJ0IGF0IDAgKGkuZS4gcXVhcnRlcnMpLlxuICovXG5cbi8qKlxuICogQ29udmVydHMgdGhlIHVuaXQgdmFsdWUgdG8gdGhlIHR1cGxlIG9mIHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZXJhIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBCQyxcbiAqIHRoZSBzZWNvbmQgZWxlbWVudCByZXByZXNlbnRzIEFELlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBxdWFydGVyIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBRMS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZGF5IHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBTdW5kYXkuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIG1vbnRoIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBKYW51YXJ5LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IG9wdGlvbnM/LmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgbGV0IHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSBcImZvcm1hdHRpbmdcIiAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID1cbiAgICAgICAgYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbd2lkdGhdIHx8IGFyZ3MudmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGJ1aWxkTG9jYWxpemVGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi5tanNcIjtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgYnVpbGRNYXRjaEZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaEZuLm1qc1wiO1xuaW1wb3J0IHsgYnVpbGRNYXRjaFBhdHRlcm5GbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzXCI7XG5cbmNvbnN0IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG5jb25zdCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcblxuY29uc3QgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pLFxufTtcbmNvbnN0IHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldLFxufTtcblxuY29uc3QgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaSxcbn07XG5jb25zdCBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV0sXG59O1xuXG5jb25zdCBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcbn07XG5jb25zdCBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogW1xuICAgIC9eai9pLFxuICAgIC9eZi9pLFxuICAgIC9ebS9pLFxuICAgIC9eYS9pLFxuICAgIC9ebS9pLFxuICAgIC9eai9pLFxuICAgIC9eai9pLFxuICAgIC9eYS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxuXG4gIGFueTogW1xuICAgIC9eamEvaSxcbiAgICAvXmYvaSxcbiAgICAvXm1hci9pLFxuICAgIC9eYXAvaSxcbiAgICAvXm1heS9pLFxuICAgIC9eanVuL2ksXG4gICAgL15qdWwvaSxcbiAgICAvXmF1L2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG59O1xuXG5jb25zdCBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiAodmFsdWUpID0+IHBhcnNlSW50KHZhbHVlLCAxMCksXG4gIH0pLFxuXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgICB2YWx1ZUNhbGxiYWNrOiAoaW5kZXgpID0+IGluZGV4ICsgMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJhbnlcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRMb25nIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0UmVsYXRpdmUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qc1wiO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2xvY2FsaXplLm1qc1wiO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi9lbi1VUy9fbGliL21hdGNoLm1qc1wiO1xuXG4vKipcbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwKVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXShodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzKVxuICovXG5leHBvcnQgY29uc3QgZW5VUyA9IHtcbiAgY29kZTogXCJlbi1VU1wiLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMSxcbiAgfSxcbn07XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZW5VUztcbiIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIF9kYXRlLmdldE1vbnRoKCksXG4gICAgICBfZGF0ZS5nZXREYXRlKCksXG4gICAgICBfZGF0ZS5nZXRIb3VycygpLFxuICAgICAgX2RhdGUuZ2V0TWludXRlcygpLFxuICAgICAgX2RhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgX2RhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgKSxcbiAgKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihfZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuICtkYXRlIC0gK3V0Y0RhdGU7XG59XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkRheSB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgY29uc3QgdGltZXN0YW1wTGVmdCA9XG4gICAgK3N0YXJ0T2ZEYXlMZWZ0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIGNvbnN0IHRpbWVzdGFtcFJpZ2h0ID1cbiAgICArc3RhcnRPZkRheVJpZ2h0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5EYXkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mWWVhcihuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDAwKSlcbiAqIC8vPT4gV2VkIEphbiAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IGNsZWFuRGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGUgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBfZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZlllYXI7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERheU9mWWVhclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlLCBzdGFydE9mWWVhcihfZGF0ZSkpO1xuICBjb25zdCBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXREYXlPZlllYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkYXkgPSBfZGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG5cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2VlaztcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRhdGUpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRhdGUsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0SVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDU6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWtZZWFyKGRhdGUpIHtcbiAgY29uc3QgeWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnkgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiA1M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2VlayhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZJU09XZWVrKF9kYXRlKSAtICtzdGFydE9mSVNPV2Vla1llYXIoX2RhdGUpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCB3aXRoIHRoZSBkZWZhdWx0IHNldHRpbmdzP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSlcbiAqIC8vPT4gMjAwNVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgd2VlayBzdGFydHMgb24gU2F0dXJkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IHdlZWtTdGFydHNPbjogNiB9KVxuICogLy89PiAyMDA0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB0aGUgZmlyc3Qgd2VlayBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWtZZWFyO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWtZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSB3aXRoIGRlZmF1bHQgb3B0aW9ucz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSxcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLFxuICogLy8gYW5kIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyIGFsd2F5cyBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiA1M1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZldlZWsoX2RhdGUsIG9wdGlvbnMpIC0gK3N0YXJ0T2ZXZWVrWWVhcihfZGF0ZSwgb3B0aW9ucyk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VlaztcbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3Qgc2lnbiA9IG51bWJlciA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKS5wYWRTdGFydCh0YXJnZXRMZW5ndGgsIFwiMFwiKTtcbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59XG4iLCJpbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG5leHBvcnQgY29uc3QgbGlnaHRGb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gXCJ5eVwiID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gXCJNXCIgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXREYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0SG91cnMoKSAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09IFwiYW1cIiA/IFwiYS5tLlwiIDogXCJwLm0uXCI7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0U2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICBjb25zdCBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGgudHJ1bmMoXG4gICAgICBtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSxcbiAgICApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgZ2V0RGF5T2ZZZWFyIH0gZnJvbSBcIi4uLy4uL2dldERheU9mWWVhci5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gXCIuLi8uLi9nZXRXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuaW1wb3J0IHsgbGlnaHRGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vbGlnaHRGb3JtYXR0ZXJzLm1qc1wiO1xuXG5jb25zdCBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogXCJhbVwiLFxuICBwbTogXCJwbVwiLFxuICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICBub29uOiBcIm5vb25cIixcbiAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gIG5pZ2h0OiBcIm5pZ2h0XCIsXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxuZXhwb3J0IGNvbnN0IGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZXJhID0gZGF0ZS5nZXRGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSBcIkdcIjpcbiAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgY2FzZSBcIkdHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIm5hcnJvd1wiIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgXCJHR0dHXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJ3aWRlXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcInlvXCIpIHtcbiAgICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHNpZ25lZFdlZWtZZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09IFwiWVlcIikge1xuICAgICAgY29uc3QgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwiWW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgaXNvV2Vla1llYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcIlFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwiUVFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcIlFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcIlFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJRUVFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJRUVFRXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwicW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwicXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcInFxcXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcInFxcXFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIk1vXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJNTU1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIkxvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHdlZWsgPSBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIndvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGlzb1dlZWsgPSBnZXRJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIklvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJkb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldERhdGUoKSwgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiRG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7IHVuaXQ6IFwiZGF5T2ZZZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcIkVFXCI6XG4gICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcIkVFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgXCJlXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImVlXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiZW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiZWVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiZWVlZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJjY1wiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiY29cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiY2NjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlIFwiaVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSBcImlpXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlIFwiaW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiaWlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiaWlpaVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImJcIjpcbiAgICAgIGNhc2UgXCJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYmJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiYlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGNhc2UgXCJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiaG9cIikge1xuICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiSG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRIb3VycygpLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiS29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJrb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIm1vXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCB7IHVuaXQ6IFwibWludXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJzb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgeyB1bml0OiBcInNlY29uZFwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiWlwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlIFwiWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlIFwieHh4eFwiOlxuICAgICAgY2FzZSBcInh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlIFwieHh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwiT1wiOlxuICAgICAgY2FzZSBcIk9PXCI6XG4gICAgICBjYXNlIFwiT09PXCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcIk9PT09cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwielwiOlxuICAgICAgY2FzZSBcInp6XCI6XG4gICAgICBjYXNlIFwienp6XCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcInp6enpcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLnRydW5jKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApO1xuICBjb25zdCBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgY29uc3QgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuIiwiY29uc3QgZGF0ZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCB0aW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwicHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwicHBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJwcHBwXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIGNvbnN0IG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIGNvbnN0IGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIGNvbnN0IHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIGxldCBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXRcbiAgICAucmVwbGFjZShcInt7ZGF0ZX19XCIsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSlcbiAgICAucmVwbGFjZShcInt7dGltZX19XCIsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIsXG59O1xuIiwiY29uc3QgZGF5T2ZZZWFyVG9rZW5SRSA9IC9eRCskLztcbmNvbnN0IHdlZWtZZWFyVG9rZW5SRSA9IC9eWSskLztcblxuY29uc3QgdGhyb3dUb2tlbnMgPSBbXCJEXCIsIFwiRERcIiwgXCJZWVwiLCBcIllZWVlcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBkYXlPZlllYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiB3ZWVrWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IF9tZXNzYWdlID0gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCk7XG4gIGNvbnNvbGUud2FybihfbWVzc2FnZSk7XG4gIGlmICh0aHJvd1Rva2Vucy5pbmNsdWRlcyh0b2tlbikpIHRocm93IG5ldyBSYW5nZUVycm9yKF9tZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBzdWJqZWN0ID0gdG9rZW5bMF0gPT09IFwiWVwiID8gXCJ5ZWFyc1wiIDogXCJkYXlzIG9mIHRoZSBtb250aFwiO1xuICByZXR1cm4gYFVzZSBcXGAke3Rva2VuLnRvTG93ZXJDYXNlKCl9XFxgIGluc3RlYWQgb2YgXFxgJHt0b2tlbn1cXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgJHtzdWJqZWN0fSB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGA7XG59XG4iLCIvKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzRGF0ZTtcbiIsImltcG9ydCB7IGlzRGF0ZSB9IGZyb20gXCIuL2lzRGF0ZS5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZSlcbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB2YWxpZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChkYXRlKSB7XG4gIGlmICghaXNEYXRlKGRhdGUpICYmIHR5cGVvZiBkYXRlICE9PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihfZGF0ZSkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWQ7XG4iLCJpbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQgeyBsb25nRm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHtcbiAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbixcbiAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLFxuICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yLFxufSBmcm9tIFwiLi9fbGliL3Byb3RlY3RlZFRva2Vucy5tanNcIjtcbmltcG9ydCB7IGlzVmFsaWQgfSBmcm9tIFwiLi9pc1ZhbGlkLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vLyBSZXhwb3J0cyBvZiBpbnRlcm5hbCBmb3IgbGlicmFyaWVzIHRvIHVzZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNjM4I2lzc3VlY29tbWVudC0xODc3MDgyODc0XG5leHBvcnQgeyBmb3JtYXR0ZXJzLCBsb25nRm9ybWF0dGVycyB9O1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5jb25zdCB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbmV4cG9ydCB7IGZvcm1hdCBhcyBmb3JtYXREYXRlIH07XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXR9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBhbGlhcyBmb3JtYXREYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXIpXG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyKSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICpcbiAqIEB0aHJvd3MgYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChkYXRlLCBmb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gZm9ybWF0U3RyXG4gICAgLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwicFwiIHx8IGZpcnN0Q2hhcmFjdGVyID09PSBcIlBcIikge1xuICAgICAgICBjb25zdCBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKVxuICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogXCInXCIgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZykgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IHRydWUsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgICAgICBcIkZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgXCIgK1xuICAgICAgICAgICAgZmlyc3RDaGFyYWN0ZXIgK1xuICAgICAgICAgICAgXCJgXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgfSk7XG5cbiAgLy8gaW52b2tlIGxvY2FsaXplIHByZXByb2Nlc3NvciAob25seSBmb3IgZnJlbmNoIGxvY2FsZXMgYXQgdGhlIG1vbWVudClcbiAgaWYgKGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3IpIHtcbiAgICBwYXJ0cyA9IGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3Iob3JpZ2luYWxEYXRlLCBwYXJ0cyk7XG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlLFxuICB9O1xuXG4gIHJldHVybiBwYXJ0c1xuICAgIC5tYXAoKHBhcnQpID0+IHtcbiAgICAgIGlmICghcGFydC5pc1Rva2VuKSByZXR1cm4gcGFydC52YWx1ZTtcblxuICAgICAgY29uc3QgdG9rZW4gPSBwYXJ0LnZhbHVlO1xuXG4gICAgICBpZiAoXG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSkgfHxcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikpXG4gICAgICApIHtcbiAgICAgICAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyLCBTdHJpbmcoZGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW3Rva2VuWzBdXTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIob3JpZ2luYWxEYXRlLCB0b2tlbiwgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgY29uc3QgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRleHQgZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgZWxlbWVudCB0eXBlLCBjbGFzcyBuYW1lcywgYW5kIGNvbnRlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbGUgLSBUaGUgdHlwZSBvZiBlbGVtZW50IHRvIGNyZWF0ZS5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIG5hbWVzIHRvIGFkZCB0byB0aGUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50PVwiXCJdIC0gVGhlIGNvbnRlbnQgdG8gYWRkIHRvIHRoZSBlbGVtZW50LlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFRoZSB0ZXh0IGVsZW1lbnQuXG4gICAqL1xuICBjb25zdCBjcmVhdGVUZXh0ID0gKGVsZSwgY2xhc3NOYW1lLCBjb250ZW50ID0gXCJcIikgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZS5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09IFwiXCIpKTtcbiAgICB0ZXh0LmlubmVySFRNTCA9IGNvbnRlbnQ7XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGltYWdlIGVsZW1lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIHNvdXJjZSwgY2xhc3MgbmFtZXMsIGFuZCBhbHQgdGV4dC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIFRoZSBzb3VyY2Ugb2YgdGhlIGltYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgbmFtZXMgdG8gYWRkIHRvIHRoZSBpbWFnZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFthbHQ9XCJcIl0gLSBUaGUgYWx0IHRleHQgb2YgdGhlIGltYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2lkPVwiXCJdIC0gVGhlIGlkIG9mIHRoZSBpbWFnZS5cbiAgICogQHJldHVybnMge0hUTUxJbWFnZUVsZW1lbnR9IFRoZSBpbWFnZSBlbGVtZW50LlxuICAgKi9cbiAgY29uc3QgY3JlYXRlSW1nID0gKHNyYywgY2xhc3NOYW1lLCBhbHQgPSBcIlwiLCBpZCA9IFwiXCIpID0+IHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcbiAgICBpbWcuYWx0ID0gYWx0O1xuICAgIGltZy5pZCA9IGlkO1xuXG4gICAgcmV0dXJuIGltZztcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgZm9ybSBjb250cm9sIGVsZW1lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIHR5cGUsIG5hbWUsIHZhbHVlLCBhbmQgcmVxdWlyZWQgYXR0cmlidXRlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSB0eXBlIG9mIGZvcm0gY29udHJvbCB0byBjcmVhdGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGZvcm0gY29udHJvbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZT1cIlwiXSAtIFRoZSB2YWx1ZSBvZiB0aGUgZm9ybSBjb250cm9sLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXF1aXJlZD1mYWxzZV0gLSBUaGUgcmVxdWlyZWQgYXR0cmlidXRlIG9mIHRoZSBmb3JtIGNvbnRyb2wuXG4gICAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR9IFRoZSBmb3JtIGNvbnRyb2wgZWxlbWVudC5cbiAgICovXG4gIGNvbnN0IGNyZWF0ZUZvcm1Db250cm9sID0gKHR5cGUsIG5hbWUsIHZhbHVlID0gXCJcIiwgcmVxdWlyZWQgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRyb2wgPVxuICAgICAgdHlwZSAhPT0gXCJ0ZXh0YXJlYVwiXG4gICAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG4gICAgaWYgKHR5cGUgIT09IFwidGV4dGFyZWFcIikge1xuICAgICAgY29udHJvbC50eXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBjb250cm9sLm5hbWUgPSBuYW1lO1xuICAgIGNvbnRyb2wudmFsdWUgPSB2YWx1ZTtcbiAgICBjb250cm9sLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG5cbiAgICByZXR1cm4gY29udHJvbDtcbiAgfTtcblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSBkb2N1bWVudCB0aXRsZSB0byB0aGUgcHJvamVjdCBuYW1lIGZvbGxvd2VkIGJ5IFwiIC0gVG9kbyBMaXN0XCIuXG4gICAqL1xuICBjb25zdCBjaGFuZ2VEb2N1bWVudFRpdGxlID0gKG5hbWUgPSBudWxsKSA9PiB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSBgJHtuYW1lID8gYCR7bmFtZX0gLSBgIDogXCJcIn1Ub2RvIExpc3RgO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGb3JtYXQgdGhlIGRhdGUgdG8gXCJkZC9NTS95eXl5XCIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlIC0gVGhlIGRhdGUgdG8gZm9ybWF0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIGRhdGUuXG4gICAqL1xuICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gZGF0ZSA/IGZvcm1hdChuZXcgRGF0ZShkYXRlKSwgXCJkZC9NTS95eXl5XCIpIDogXCItXCI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUZXh0LFxuICAgIGNyZWF0ZUltZyxcbiAgICBjcmVhdGVGb3JtQ29udHJvbCxcbiAgICBjaGFuZ2VEb2N1bWVudFRpdGxlLFxuICAgIGZvcm1hdERhdGUsXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogY29uc3QgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Bhc3QoZGF0ZSkge1xuICByZXR1cm4gK3RvRGF0ZShkYXRlKSA8IERhdGUubm93KCk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNQYXN0O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICpcbiAqIEByZXR1cm5zIFRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IGRpZmYgPSBfZGF0ZUxlZnQuZ2V0VGltZSgpIC0gX2RhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb21wYXJlQXNjO1xuIiwiaW1wb3J0IHsgdXJsQWxwaGFiZXQgYXMgc2NvcGVkVXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmV4cG9ydCB7IHVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5leHBvcnQgbGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuZXhwb3J0IGxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCAoTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgbGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBzaXplID0gMjEpID0+XG4gIGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxuZXhwb3J0IGxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PiB7XG4gIGxldCBpZCA9ICcnXG4gIGxldCBieXRlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpXG4gIHdoaWxlIChzaXplLS0pIHtcbiAgICBpZCArPSBzY29wZWRVcmxBbHBoYWJldFtieXRlc1tzaXplXSAmIDYzXVxuICB9XG4gIHJldHVybiBpZFxufVxuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgY29uc3RydWN0Tm93XG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgbmV3IGN1cnJlbnQgZGF0ZSB1c2luZyB0aGUgcGFzc2VkIHZhbHVlIGNvbnN0cnVjdG9yLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGN1cnJlbnQgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbVxuICogdGhlIHJlZmVyZW5jZSBkYXRlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBkYXRlXG4gKiBleHRlbnNpb25zIGFuZCB1c2UgdGhlIGN1cnJlbnQgZGF0ZS5cbiAqXG4gKiBJdCBkZWZhdWx0cyB0byBgRGF0ZWAgaWYgdGhlIHBhc3NlZCByZWZlcmVuY2UgZGF0ZSBpcyBhIG51bWJlciBvciBhIHN0cmluZy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqXG4gKiBAcmV0dXJucyBDdXJyZW50IGRhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgY29uc3RydWN0b3JcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0Tm93LCBpc1NhbWVEYXkgfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiBmdW5jdGlvbiBpc1RvZGF5PERhdGVUeXBlIGV4dGVuZHMgRGF0ZT4oXG4gKiAgIGRhdGU6IERhdGVUeXBlIHwgbnVtYmVyIHwgc3RyaW5nLFxuICogKTogYm9vbGVhbiB7XG4gKiAgIC8vIElmIHdlIHdlcmUgdG8gdXNlIGBuZXcgRGF0ZSgpYCBkaXJlY3RseSwgdGhlIGZ1bmN0aW9uIHdvdWxkICBiZWhhdmVcbiAqICAgLy8gZGlmZmVyZW50bHkgaW4gZGlmZmVyZW50IHRpbWV6b25lcyBhbmQgcmV0dXJuIGZhbHNlIGZvciB0aGUgc2FtZSBkYXRlLlxuICogICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIGNvbnN0cnVjdE5vdyhkYXRlKSk7XG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3ROb3coZGF0ZSkge1xuICByZXR1cm4gY29uc3RydWN0RnJvbShkYXRlLCBEYXRlLm5vdygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3ROb3c7XG4iLCJpbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mRGF5ID09PSArZGF0ZVJpZ2h0U3RhcnRPZkRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVEYXk7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3ROb3cgfSBmcm9tIFwiLi9jb25zdHJ1Y3ROb3cubWpzXCI7XG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBjb25zdHJ1Y3ROb3coZGF0ZSkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNTYW1lV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGF0ZUxlZnQsIG9wdGlvbnMpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRhdGVSaWdodCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZXZWVrID09PSArZGF0ZVJpZ2h0U3RhcnRPZldlZWs7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdE5vdyB9IGZyb20gXCIuL2NvbnN0cnVjdE5vdy5tanNcIjtcbmltcG9ydCB7IGlzU2FtZVdlZWsgfSBmcm9tIFwiLi9pc1NhbWVXZWVrLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNUaGlzV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGF0ZSwgb3B0aW9ucykge1xuICByZXR1cm4gaXNTYW1lV2VlayhkYXRlLCBjb25zdHJ1Y3ROb3coZGF0ZSksIG9wdGlvbnMpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVGhpc1dlZWs7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gYW1vdW50IC0gVGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLlxuICpcbiAqIEByZXR1cm5zIFRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGFtb3VudCkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiBjb25zdHJ1Y3RGcm9tKGRhdGUsIE5hTik7XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBfZGF0ZTtcbiAgfVxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBhZGREYXlzO1xuIiwiaW1wb3J0IHsgYWRkRGF5cyB9IGZyb20gXCIuL2FkZERheXMubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3ViRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gYW1vdW50IC0gVGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIHN1YnRyYWN0ZWQuXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgc3VidHJhY3RlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCAxMCBkYXlzIGZyb20gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1YkRheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBGcmkgQXVnIDIyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YkRheXMoZGF0ZSwgYW1vdW50KSB7XG4gIHJldHVybiBhZGREYXlzKGRhdGUsIC1hbW91bnQpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN1YkRheXM7XG4iLCJpbXBvcnQgeyBpc1RvZGF5LCBpc1RoaXNXZWVrLCBzdWJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBuYW1lO1xuICB0YXNrcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0QWxsVGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3M7XG4gIH1cblxuICBzZXRUYXNrcyh0YXNrcykge1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgfVxuXG4gIGdldFRvZGF5VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PlxuICAgICAgaXNUb2RheShuZXcgRGF0ZSh0aGlzLmZvcm1hdERhdGUodGFzay5nZXREdWVEYXRlKCkpKSksXG4gICAgKTtcbiAgfVxuXG4gIGdldFRoaXNXZWVrVGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PlxuICAgICAgaXNUaGlzV2VlayhzdWJEYXlzKG5ldyBEYXRlKHRoaXMuZm9ybWF0RGF0ZSh0YXNrLmdldER1ZURhdGUoKSkpLCAxKSksXG4gICAgKTtcbiAgfVxuXG4gIGdldEltcG9ydGFudFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRQcmlvcml0eSgpID09PSBcImhpZ2hcIik7XG4gIH1cblxuICBnZXRUYXNrKHRpdGxlKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0aXRsZSk7XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICBkZWxldGVUYXNrKHRpdGxlKSB7XG4gICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgIT09IHRpdGxlKTtcbiAgfVxuXG4gIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgIGlmIChkYXRlKSB7XG4gICAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBkYXRlLnNwbGl0KFwiLVwiKTtcblxuICAgICAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGlkO1xuICB0aXRsZTtcbiAgZGVzY3JpcHRpb247XG4gIGR1ZURhdGU7XG4gIHByaW9yaXR5O1xuICBjb21wbGV0ZWQ7XG5cbiAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzYztcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgfVxuXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldER1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgZ2V0Q29tcGxldGVkKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZDtcbiAgfVxuXG4gIHRvZ2dsZUNvbXBsZXRlZCgpIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZDtcbiAgfVxuXG4gIHVwZGF0ZVRhc2sodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wYXJlQXNjIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBjdXN0b21BbHBoYWJldCB9IGZyb20gXCJuYW5vaWRcIjtcbmltcG9ydCB7IGFscGhhbnVtZXJpYyB9IGZyb20gXCJuYW5vaWQtZGljdGlvbmFyeVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFzay5qc1wiO1xuXG5jb25zdCBuYW5vaWQgPSBjdXN0b21BbHBoYWJldChhbHBoYW51bWVyaWMsIDEwKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xuICB3ZWlnaHRhZ2UgPSB7XG4gICAgaGlnaDogMSxcbiAgICBtZWRpdW06IDIsXG4gICAgbG93OiAzLFxuICB9O1xuXG4gIHByb2plY3RzO1xuICB1c2VkSWQgPSBuZXcgU2V0KCk7XG5cbiAgY29uc3RydWN0b3IoZGVmYXVsdHMgPSBudWxsKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IGRlZmF1bHRzID8gZGVmYXVsdHMubWFwKChuYW1lKSA9PiBuZXcgUHJvamVjdChuYW1lKSkgOiBbXTtcbiAgfVxuXG4gIGdldEFsbFByb2plY3RzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICB9XG5cbiAgZ2V0UHJvamVjdChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IG5hbWUpO1xuICB9XG5cbiAgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gIH1cblxuICBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QobmFtZSkpO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdChkZWZhdWx0cywgbmFtZSkge1xuICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSAhPT0gbmFtZSxcbiAgICApO1xuXG4gICAgdGhpcy51cGRhdGVEZWZhdWx0UHJvamVjdHMoZGVmYXVsdHMpO1xuICB9XG5cbiAgZ2V0QWxsVGFza3MobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmdldFByb2plY3QobmFtZSkuZ2V0QWxsVGFza3MoKTtcbiAgfVxuXG4gIGFkZFRhc2soZGVmYXVsdHMsIG5hbWUsIHRpdGxlLCBkZXNjLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QobmFtZSk7XG4gICAgbGV0IGlkO1xuXG4gICAgZG8ge1xuICAgICAgaWQgPSBuYW5vaWQoKTtcbiAgICB9IHdoaWxlICh0aGlzLnVzZWRJZC5oYXMoaWQpKTtcblxuICAgIHByb2plY3QuYWRkVGFzayhuZXcgVGFzayhpZCwgdGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5LCBmYWxzZSkpO1xuXG4gICAgdGhpcy51c2VkSWQuYWRkKGlkKTtcbiAgICB0aGlzLnVwZGF0ZURlZmF1bHRQcm9qZWN0cyhkZWZhdWx0cyk7XG4gIH1cblxuICBkZWxldGVUYXNrKGRlZmF1bHRzLCBuYW1lLCB0aXRsZSkge1xuICAgIHRoaXMuZ2V0UHJvamVjdChuYW1lKS5kZWxldGVUYXNrKHRpdGxlKTtcbiAgICB0aGlzLnVwZGF0ZURlZmF1bHRQcm9qZWN0cyhkZWZhdWx0cyk7XG4gIH1cblxuICB1cGRhdGVUYXNrKGRlZmF1bHRzLCBuYW1lLCBvbGRUaXRsZSwgbmV3VGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5nZXRQcm9qZWN0KG5hbWUpXG4gICAgICAuZ2V0VGFzayhvbGRUaXRsZSlcbiAgICAgIC51cGRhdGVUYXNrKG5ld1RpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgdGhpcy51cGRhdGVEZWZhdWx0UHJvamVjdHMoZGVmYXVsdHMpO1xuICB9XG5cbiAgdG9nZ2xlVGFza0NvbXBsZXRlZChkZWZhdWx0cywgaWQpIHtcbiAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3QuZ2V0QWxsVGFza3MoKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLmdldElkKCkgPT09IGlkKSB7XG4gICAgICAgICAgdGFzay50b2dnbGVDb21wbGV0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZURlZmF1bHRQcm9qZWN0cyhkZWZhdWx0cyk7XG4gIH1cblxuICB1cGRhdGVEZWZhdWx0UHJvamVjdHMoZGVmYXVsdHMpIHtcbiAgICBkZWZhdWx0cy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChuYW1lKTtcblxuICAgICAgZGVmYXVsdFByb2plY3Quc2V0VGFza3MoW10pO1xuXG4gICAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKCFkZWZhdWx0cy5pbmNsdWRlcyhwcm9qZWN0LmdldE5hbWUoKSkpIHtcbiAgICAgICAgICBjb25zdCB0YXNrcyA9XG4gICAgICAgICAgICBuYW1lID09PSBcIlRvZGF5XCJcbiAgICAgICAgICAgICAgPyBwcm9qZWN0LmdldFRvZGF5VGFza3MoKVxuICAgICAgICAgICAgICA6IG5hbWUgPT09IFwiVGhpcyB3ZWVrXCJcbiAgICAgICAgICAgICAgICA/IHByb2plY3QuZ2V0VGhpc1dlZWtUYXNrcygpXG4gICAgICAgICAgICAgICAgOiBwcm9qZWN0LmdldEltcG9ydGFudFRhc2tzKCk7XG5cbiAgICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC5hZGRUYXNrKFxuICAgICAgICAgICAgICBuZXcgVGFzayhcbiAgICAgICAgICAgICAgICB0YXNrLmdldElkKCksXG4gICAgICAgICAgICAgICAgdGFzay5nZXRUaXRsZSgpLFxuICAgICAgICAgICAgICAgIHRhc2suZ2V0RGVzY3JpcHRpb24oKSxcbiAgICAgICAgICAgICAgICB0YXNrLmdldER1ZURhdGUoKSxcbiAgICAgICAgICAgICAgICB0YXNrLmdldFByaW9yaXR5KCksXG4gICAgICAgICAgICAgICAgdGFzay5nZXRDb21wbGV0ZWQoKSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBuYW1lID09PSBcIlRvZGF5XCJcbiAgICAgICAgICAgID8gdGhpcy5zb3J0QnlQcmlvcml0eShkZWZhdWx0UHJvamVjdC5nZXRBbGxUYXNrcygpKVxuICAgICAgICAgICAgOiBkZWZhdWx0UHJvamVjdC5zZXRUYXNrcyhcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRCeURhdGUoZGVmYXVsdFByb2plY3QuZ2V0QWxsVGFza3MoKSksXG4gICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc29ydEJ5UHJpb3JpdHkodGFza3MpIHtcbiAgICB0YXNrcy5zb3J0KFxuICAgICAgKGEsIGIpID0+IHRoaXMud2VpZ2h0YWdlW2EucHJpb3JpdHldIC0gdGhpcy53ZWlnaHRhZ2VbYi5wcmlvcml0eV0sXG4gICAgKTtcbiAgfVxuXG4gIHNvcnRCeURhdGUodGFza3MpIHtcbiAgICBjb25zdCB0YXNrc05vRGF0ZXMgPSBbXTtcbiAgICBjb25zdCB0YXNrc1dpdGhEYXRlcyA9IFtdO1xuXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgIXRhc2suZHVlRGF0ZSA/IHRhc2tzTm9EYXRlcy5wdXNoKHRhc2spIDogdGFza3NXaXRoRGF0ZXMucHVzaCh0YXNrKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ydEJ5UHJpb3JpdHkodGFza3NOb0RhdGVzKTtcbiAgICB0aGlzLnNvcnRCeVByaW9yaXR5KHRhc2tzV2l0aERhdGVzKTtcblxuICAgIHRhc2tzV2l0aERhdGVzLnNvcnQoKGEsIGIpID0+XG4gICAgICBjb21wYXJlQXNjKG5ldyBEYXRlKGEuZHVlRGF0ZSksIG5ldyBEYXRlKGIuZHVlRGF0ZSkpLFxuICAgICk7XG5cbiAgICByZXR1cm4gWy4uLnRhc2tzV2l0aERhdGVzLCAuLi50YXNrc05vRGF0ZXNdO1xuICB9XG59XG4iLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vVG9kb0xpc3QuanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3QuanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZSh0b2RvTGlzdCkge1xuICBjb25zdCByZXBsYWNlciA9IChrZXksIHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVG9kb0xpc3QpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVUb2RvTGlzdCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QsIHJlcGxhY2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplKHN0cikge1xuICBjb25zdCByZXZpdmVyID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIFwicHJvamVjdHNcIiBpbiB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRlc2VyaWFsaXplVG9kb0xpc3QodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyLCByZXZpdmVyKTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplVG9kb0xpc3QodG9kb0xpc3QpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0czogdG9kb0xpc3QucHJvamVjdHMubWFwKHNlcmlhbGl6ZVByb2plY3QpLFxuICAgIHVzZWRJZDogQXJyYXkuZnJvbSh0b2RvTGlzdC51c2VkSWQpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZVRvZG9MaXN0KGRhdGEpIHtcbiAgY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKTtcbiAgdG9kb0xpc3QucHJvamVjdHMgPSBkYXRhLnByb2plY3RzLm1hcChkZXNlcmlhbGl6ZVByb2plY3QpO1xuICB0b2RvTGlzdC51c2VkSWQgPSBuZXcgU2V0KGRhdGEudXNlZElkKTtcbiAgcmV0dXJuIHRvZG9MaXN0O1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVQcm9qZWN0KHByb2plY3QpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgdGFza3M6IHByb2plY3QudGFza3MubWFwKHNlcmlhbGl6ZVRhc2spLFxuICAgIHRhc2tDb3VudDogcHJvamVjdC50YXNrcy5sZW5ndGgsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplUHJvamVjdChkYXRhKSB7XG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChkYXRhLm5hbWUpO1xuICBwcm9qZWN0LnRhc2tzID0gZGF0YS50YXNrcy5tYXAoZGVzZXJpYWxpemVUYXNrKTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZVRhc2sodGFzaykge1xuICByZXR1cm4ge1xuICAgIGlkOiB0YXNrLmlkLFxuICAgIHRpdGxlOiB0YXNrLnRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiB0YXNrLmRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGU6IHRhc2suZHVlRGF0ZSxcbiAgICBwcmlvcml0eTogdGFzay5wcmlvcml0eSxcbiAgICBjb21wbGV0ZWQ6IHRhc2suY29tcGxldGVkLFxuICB9O1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZVRhc2soZGF0YSkge1xuICByZXR1cm4gbmV3IFRhc2soXG4gICAgZGF0YS5pZCxcbiAgICBkYXRhLnRpdGxlLFxuICAgIGRhdGEuZGVzY3JpcHRpb24sXG4gICAgZGF0YS5kdWVEYXRlLFxuICAgIGRhdGEucHJpb3JpdHksXG4gICAgZGF0YS5jb21wbGV0ZWQsXG4gICk7XG59XG4iLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vVG9kb0xpc3QuanNcIjtcbmltcG9ydCB7IHNlcmlhbGl6ZSwgZGVzZXJpYWxpemUgfSBmcm9tIFwiLi9zZXJpYWxpemVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICBzdGF0aWMgZGVmYXVsdHMgPSBbXCJUb2RheVwiLCBcIlRoaXMgd2Vla1wiLCBcIkltcG9ydGFudFwiXTtcbiAgc3RhdGljIHRvZG9MaXN0O1xuXG4gIHN0YXRpYyBnZXRUb2RvTGlzdCgpIHtcbiAgICB0aGlzLnRvZG9MaXN0ID1cbiAgICAgIGRlc2VyaWFsaXplKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpID8/XG4gICAgICBuZXcgVG9kb0xpc3QodGhpcy5kZWZhdWx0cyk7XG5cbiAgICByZXR1cm4gdGhpcy50b2RvTGlzdDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRUb2RvTGlzdCh0b2RvTGlzdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgc2VyaWFsaXplKHRvZG9MaXN0KSk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlRGVmYXVsdFByb2plY3RzKCkge1xuICAgIHRoaXMuZ2V0VG9kb0xpc3QoKS51cGRhdGVEZWZhdWx0UHJvamVjdHModGhpcy5kZWZhdWx0cyk7XG4gICAgdGhpcy5zZXRUb2RvTGlzdCh0aGlzLnRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyBjb250YWluc1Byb2plY3QobmFtZSkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0KG5hbWUpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBbGxQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2RvTGlzdCgpLmdldEFsbFByb2plY3RzKCk7XG4gIH1cblxuICBzdGF0aWMgYWRkUHJvamVjdChuYW1lKSB7XG4gICAgdGhpcy5nZXRUb2RvTGlzdCgpLmFkZFByb2plY3QobmFtZSk7XG4gICAgdGhpcy5zZXRUb2RvTGlzdCh0aGlzLnRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVQcm9qZWN0KG5hbWUpIHtcbiAgICB0aGlzLmdldFRvZG9MaXN0KCkuZGVsZXRlUHJvamVjdCh0aGlzLmRlZmF1bHRzLCBuYW1lKTtcbiAgICB0aGlzLnNldFRvZG9MaXN0KHRoaXMudG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIGdldEFsbFRhc2tzKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2RvTGlzdCgpLmdldEFsbFRhc2tzKG5hbWUpO1xuICB9XG5cbiAgc3RhdGljIGdldFRhc2sobmFtZSwgdGl0bGUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2RvTGlzdCgpLmdldFByb2plY3QobmFtZSkuZ2V0VGFzayh0aXRsZSk7XG4gIH1cblxuICBzdGF0aWMgYWRkVGFzayhuYW1lLCB0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLmdldFRvZG9MaXN0KCkuYWRkVGFzayhcbiAgICAgIHRoaXMuZGVmYXVsdHMsXG4gICAgICBuYW1lLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjLFxuICAgICAgZGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICk7XG5cbiAgICB0aGlzLnNldFRvZG9MaXN0KHRoaXMudG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZVRhc2sobmFtZSwgdGl0bGUpIHtcbiAgICB0aGlzLmdldFRvZG9MaXN0KCkuZGVsZXRlVGFzayh0aGlzLmRlZmF1bHRzLCBuYW1lLCB0aXRsZSk7XG4gICAgdGhpcy5zZXRUb2RvTGlzdCh0aGlzLnRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUYXNrKG5hbWUsIG9sZFRpdGxlLCBuZXdUaXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLmdldFRvZG9MaXN0KCkudXBkYXRlVGFzayhcbiAgICAgIHRoaXMuZGVmYXVsdHMsXG4gICAgICBuYW1lLFxuICAgICAgb2xkVGl0bGUsXG4gICAgICBuZXdUaXRsZSxcbiAgICAgIGRlc2MsXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgKTtcblxuICAgIHRoaXMuc2V0VG9kb0xpc3QodGhpcy50b2RvTGlzdCk7XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlVGFza0NvbXBsZXRlZChpZCkge1xuICAgIHRoaXMuZ2V0VG9kb0xpc3QoKS50b2dnbGVUYXNrQ29tcGxldGVkKHRoaXMuZGVmYXVsdHMsIGlkKTtcbiAgICB0aGlzLnNldFRvZG9MaXN0KHRoaXMudG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIGdldFByb2plY3ROYW1lKHRpdGxlKSB7XG4gICAgY29uc3QgdXNlclByb2plY3RzID0gdGhpcy5nZXRUb2RvTGlzdCgpXG4gICAgICAuZ2V0QWxsUHJvamVjdHMoKVxuICAgICAgLmZpbHRlcigocHJvamVjdCkgPT4gIXRoaXMuZGVmYXVsdHMuaW5jbHVkZXMocHJvamVjdC5nZXROYW1lKCkpKTtcblxuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiB1c2VyUHJvamVjdHMpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHByb2plY3QuZ2V0VGFzayh0aXRsZSk7XG5cbiAgICAgIGlmIChzZWxlY3RlZFRhc2spIHtcbiAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2plY3QuZ2V0QWxsVGFza3MoKSkge1xuICAgICAgICAgIGlmICh0YXNrID09PSBzZWxlY3RlZFRhc2spIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBVdGlsaXR5IGZyb20gXCIuL1V0aWxpdHkuanNcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2LmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9TZWN0aW9uLmpzXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi4vY2xhc3Nlcy9TdG9yYWdlLmpzXCI7XG5pbXBvcnQgZXhpdCBmcm9tIFwiLi4vaWNvbnMvY2xvc2Utd2hpdGUuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIGNvbnN0IHByaW9yaXR5TGV2ZWxzID0gW1wibG93XCIsIFwibWVkaXVtXCIsIFwiaGlnaFwiXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGRpYWxvZyBib3ggZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIGFjdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgdHlwZSBvZiBkaWFsb2cgYm94IHRvIGJlIGNyZWF0ZWQuXG4gICAqIEBwYXJhbSB7VGFza30gdGFzayAtIFRoZSB0YXNrIG9iamVjdCB0byBiZSBkaXNwbGF5ZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9qZWN0TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0ZWRUYXNrVGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIHNlbGVjdGVkIHRhc2suXG4gICAqL1xuICBjb25zdCBjcmVhdGVEaWFsb2cgPSAoXG4gICAgdHlwZSxcbiAgICB0YXNrID0gbnVsbCxcbiAgICBwcm9qZWN0TmFtZSA9IG51bGwsXG4gICAgc2VsZWN0ZWRUYXNrVGl0bGUgPSBudWxsLFxuICApID0+IHtcbiAgICBjb25zdCBkaWFsb2cgPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJkaWFsb2dcIiwgW2BkaWFsb2ctJHt0eXBlfWBdKTtcblxuICAgIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmNsaWVudFggIT09IDAgJiYgZS5jbGllbnRZICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBkaWFsb2cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGUuY2xpZW50WCA8IGRpbWVuc2lvbnMubGVmdCB8fFxuICAgICAgICAgIGUuY2xpZW50WCA+IGRpbWVuc2lvbnMucmlnaHQgfHxcbiAgICAgICAgICBlLmNsaWVudFkgPCBkaW1lbnNpb25zLnRvcCB8fFxuICAgICAgICAgIGUuY2xpZW50WSA+IGRpbWVuc2lvbnMuYm90dG9tXG4gICAgICAgICkge1xuICAgICAgICAgIGRpYWxvZy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwidmlld1wiOlxuICAgICAgICBkaWFsb2cuYXBwZW5kKFxuICAgICAgICAgIGNyZWF0ZURpYWxvZ0hlYWRlcih0YXNrLmdldFRpdGxlKCksIGRpYWxvZyksXG4gICAgICAgICAgY3JlYXRlRGlhbG9nVmlld01haW4oXG4gICAgICAgICAgICB0YXNrLmdldERlc2NyaXB0aW9uKCksXG4gICAgICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIHRhc2suZ2V0RHVlRGF0ZSgpLFxuICAgICAgICAgICAgdGFzay5nZXRQcmlvcml0eSgpLFxuICAgICAgICAgICksXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImFkZFwiOlxuICAgICAgY2FzZSBcImVkaXRcIjpcbiAgICAgICAgZGlhbG9nLmFwcGVuZChcbiAgICAgICAgICBjcmVhdGVEaWFsb2dIZWFkZXIoYCR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHR5cGUpfSBUYXNrYCwgZGlhbG9nKSxcbiAgICAgICAgICBjcmVhdGVEaWFsb2dGb3JtKFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGRpYWxvZyxcbiAgICAgICAgICAgIHRhc2s/LmdldFRpdGxlKCkgPz8gXCJcIixcbiAgICAgICAgICAgIHRhc2s/LmdldERlc2NyaXB0aW9uKCkgPz8gXCJcIixcbiAgICAgICAgICAgIHRhc2s/LmdldER1ZURhdGUoKSA/PyBcIlwiLFxuICAgICAgICAgICAgdGFzaz8uZ2V0UHJpb3JpdHkoKSA/PyBcIlwiLFxuICAgICAgICAgICAgc2VsZWN0ZWRUYXNrVGl0bGUsXG4gICAgICAgICAgKSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGVsZXRlXCI6XG4gICAgICAgIGRpYWxvZy5hcHBlbmQoXG4gICAgICAgICAgY3JlYXRlRGlhbG9nSGVhZGVyKFxuICAgICAgICAgICAgYERlbGV0ZSAke3NlbGVjdGVkVGFza1RpdGxlID8gXCJUYXNrXCIgOiBcIlByb2plY3RcIn1gLFxuICAgICAgICAgICAgZGlhbG9nLFxuICAgICAgICAgICksXG4gICAgICAgICAgY3JlYXRlRGlhbG9nRGVsZXRlTWFpbihkaWFsb2csIHByb2plY3ROYW1lLCBzZWxlY3RlZFRhc2tUaXRsZSksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2R5XCIpLmFwcGVuZChkaWFsb2cpO1xuXG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZGlhbG9nIGhlYWRlciB3aXRoIHRoZSBzcGVjaWZpZWQgdGl0bGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgZGlhbG9nIGJveC5cbiAgICogQHBhcmFtIHtIVE1MRGlhbG9nRWxlbWVudH0gZGlhbG9nIC0gVGhlIGRpYWxvZyBib3ggZWxlbWVudC5cbiAgICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fSBUaGUgZGlhbG9nIGhlYWRlciBlbGVtZW50LlxuICAgKi9cbiAgY29uc3QgY3JlYXRlRGlhbG9nSGVhZGVyID0gKHRpdGxlLCBkaWFsb2cpID0+IHtcbiAgICBjb25zdCBkaWFsb2dIZWFkZXIgPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJkaXZcIiwgW1wiZGlhbG9nLWhlYWRlclwiXSk7XG5cbiAgICBjb25zdCBleGl0QnRuID0gVXRpbGl0eS5jcmVhdGVUZXh0KFwiYnV0dG9uXCIsIFtcImV4aXQtYnRuXCJdKTtcbiAgICBleGl0QnRuLnR5cGUgPSBcInJlc2V0XCI7XG4gICAgZXhpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlhbG9nLnJlbW92ZSgpKTtcblxuICAgIGNvbnN0IGV4aXRJY29uID0gVXRpbGl0eS5jcmVhdGVJbWcoZXhpdCwgW1wiZXhpdC1pY29uXCJdLCBcIkV4aXQgRGlhbG9nXCIpO1xuICAgIGV4aXRCdG4uYXBwZW5kKGV4aXRJY29uKTtcblxuICAgIGRpYWxvZ0hlYWRlci5hcHBlbmQoXG4gICAgICBVdGlsaXR5LmNyZWF0ZVRleHQoXCJoNFwiLCBbXCJkaWFsb2ctdGl0bGVcIl0sIHRpdGxlKSxcbiAgICAgIGV4aXRCdG4sXG4gICAgKTtcblxuICAgIHJldHVybiBkaWFsb2dIZWFkZXI7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBkaWFsb2cgbWFpbiBlbGVtZW50IGZvciB2aWV3aW5nIGEgdGFzay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2MgLSBUaGUgdGFzayBkZXNjcmlwdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb2plY3QgLSBUaGUgcHJvamVjdCBuYW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZSAtIFRoZSB0YXNrIGR1ZSBkYXRlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJpb3JpdHkgLSBUaGUgdGFzayBwcmlvcml0eS5cbiAgICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fSBUaGUgZGlhbG9nIG1haW4gZWxlbWVudC5cbiAgICovXG4gIGNvbnN0IGNyZWF0ZURpYWxvZ1ZpZXdNYWluID0gKGRlc2MsIHByb2plY3QsIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgZGlhbG9nTWFpbiA9IFV0aWxpdHkuY3JlYXRlVGV4dChcImRpdlwiLCBbXCJkaWFsb2ctbWFpblwiXSk7XG5cbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBVdGlsaXR5LmNyZWF0ZVRleHQoXG4gICAgICBcInBcIixcbiAgICAgIFtcInRhc2stcHJpb3JpdHlcIl0sXG4gICAgICBcIlByaW9yaXR5IDogXCIsXG4gICAgKTtcblxuICAgIHRhc2tQcmlvcml0eS5hcHBlbmQoXG4gICAgICBVdGlsaXR5LmNyZWF0ZVRleHQoXG4gICAgICAgIFwic3BhblwiLFxuICAgICAgICBbYHByaW9yaXR5LSR7cHJpb3JpdHl9YF0sXG4gICAgICAgIGNhcGl0YWxpemVGaXJzdExldHRlcihwcmlvcml0eSksXG4gICAgICApLFxuICAgICk7XG5cbiAgICBkaWFsb2dNYWluLmFwcGVuZChcbiAgICAgIFV0aWxpdHkuY3JlYXRlVGV4dChcInBcIiwgW1widGFzay1kZXNjXCJdLCBkZXNjLnJlcGxhY2UoL1xcbi9nLCBcIjxicj5cIikpLFxuICAgICAgVXRpbGl0eS5jcmVhdGVUZXh0KFwicFwiLCBbXCJ0YXNrLXByb2plY3RcIl0sIGBQcm9qZWN0IDogJHtwcm9qZWN0fWApLFxuICAgICAgVXRpbGl0eS5jcmVhdGVUZXh0KFxuICAgICAgICBcInBcIixcbiAgICAgICAgW1widGFzay1kYXRlXCJdLFxuICAgICAgICBgRHVlIERhdGUgOiAke1V0aWxpdHkuZm9ybWF0RGF0ZShkYXRlKX1gLFxuICAgICAgKSxcbiAgICAgIHRhc2tQcmlvcml0eSxcbiAgICApO1xuXG4gICAgcmV0dXJuIGRpYWxvZ01haW47XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBkaWFsb2cgbWFpbiBlbGVtZW50IGZvciBhZGRpbmcgb3IgZWRpdGluZyBhIHRhc2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIHR5cGUgb2YgdGFzayB0byBiZSBjcmVhdGVkLlxuICAgKiBAcGFyYW0ge0hUTUxEaWFsb2dFbGVtZW50fSBkaWFsb2cgLSBUaGUgZGlhbG9nIGJveCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgLSBUaGUgdGFzayB0aXRsZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2MgLSBUaGUgdGFzayBkZXNjcmlwdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGUgLSBUaGUgdGFzayBkdWUgZGF0ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByaW9yaXR5IC0gVGhlIHRhc2sgcHJpb3JpdHkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RlZFRhc2tUaXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgc2VsZWN0ZWQgdGFzay5cbiAgICogQHJldHVybnMge0hUTUxGb3JtRWxlbWVudH0gVGhlIGRpYWxvZyBtYWluIGVsZW1lbnQuXG4gICAqL1xuICBjb25zdCBjcmVhdGVEaWFsb2dGb3JtID0gKFxuICAgIHR5cGUsXG4gICAgZGlhbG9nLFxuICAgIHRpdGxlLFxuICAgIGRlc2MsXG4gICAgZGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBzZWxlY3RlZFRhc2tUaXRsZSxcbiAgKSA9PiB7XG4gICAgY29uc3QgZGlhbG9nTWFpbiA9IFV0aWxpdHkuY3JlYXRlVGV4dChcImZvcm1cIiwgW1wiZGlhbG9nLW1haW5cIl0pO1xuXG4gICAgZGlhbG9nTWFpbi5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkaWFsb2cucmVtb3ZlKCk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRpYWxvZ01haW4pO1xuICAgICAgY29uc3QgeyB0aXRsZSwgZGVzYywgcHJpb3JpdHkgfSA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9XG4gICAgICAgIGZvcm1EYXRhLmdldChcImR1ZS1kYXRlXCIpID09PSBcIlwiID8gbnVsbCA6IGZvcm1EYXRhLmdldChcImR1ZS1kYXRlXCIpO1xuXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IFNlY3Rpb24uZ2V0UHJvamVjdE5hbWUoKTtcblxuICAgICAgdHlwZSA9PT0gXCJhZGRcIlxuICAgICAgICA/IFN0b3JhZ2UuYWRkVGFzayhwcm9qZWN0TmFtZSwgdGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgICAgICA6IFN0b3JhZ2UudXBkYXRlVGFzayhcbiAgICAgICAgICAgIFN0b3JhZ2UuZ2V0UHJvamVjdE5hbWUoc2VsZWN0ZWRUYXNrVGl0bGUpLFxuICAgICAgICAgICAgc2VsZWN0ZWRUYXNrVGl0bGUsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGRlc2MsXG4gICAgICAgICAgICBkdWVEYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgKTtcblxuICAgICAgTmF2LnVwZGF0ZVRhc2tDb3VudCgpO1xuICAgICAgU2VjdGlvbi5yZXBsYWNlU2VjdGlvbigpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IFV0aWxpdHkuY3JlYXRlRm9ybUNvbnRyb2woXCJ0ZXh0XCIsIFwidGl0bGVcIiwgdGl0bGUsIHRydWUpO1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5hdXRvZm9jdXMgPSB0cnVlO1xuXG4gICAgY29uc3QgZGVzY1RleHRhcmVhID0gVXRpbGl0eS5jcmVhdGVGb3JtQ29udHJvbChcInRleHRhcmVhXCIsIFwiZGVzY1wiLCBkZXNjKTtcbiAgICBkZXNjVGV4dGFyZWEucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCI7XG5cbiAgICBjb25zdCBkYXRlRGl2ID0gVXRpbGl0eS5jcmVhdGVUZXh0KFwiZGl2XCIsIFtcImRhdGUtY29udGFpbmVyXCJdKTtcblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IFV0aWxpdHkuY3JlYXRlVGV4dChcImxhYmVsXCIsIFtdLCBcIkR1ZSBCeSA6XCIpO1xuICAgIGRhdGVMYWJlbC5odG1sRm9yID0gXCJkaWFsb2ctZHVlLWRhdGVcIjtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IFV0aWxpdHkuY3JlYXRlRm9ybUNvbnRyb2woXCJkYXRlXCIsIFwiZHVlLWRhdGVcIiwgZGF0ZSk7XG4gICAgZGF0ZUlucHV0LmlkID0gXCJkaWFsb2ctZHVlLWRhdGVcIjtcbiAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRhdGVJbnB1dC5zaG93UGlja2VyKCkpO1xuXG4gICAgZGF0ZURpdi5hcHBlbmQoZGF0ZUxhYmVsLCBkYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgZmllbGRzZXQgPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJmaWVsZHNldFwiLCBbXCJwcmlvcml0eS1jb250YWluZXJcIl0pO1xuICAgIGNvbnN0IGxlZ2VuZCA9IFV0aWxpdHkuY3JlYXRlVGV4dChcImxlZ2VuZFwiLCBbXSwgXCJQcmlvcml0eSA6XCIpO1xuXG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IHByaW9yaXR5TGV2ZWxzLm1hcCgobGV2ZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gVXRpbGl0eS5jcmVhdGVUZXh0KFxuICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgIFtcImRpYWxvZy1wcmlvcml0eVwiLCBgcHJpb3JpdHktJHtsZXZlbH1gXSxcbiAgICAgICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGxldmVsKSxcbiAgICAgICk7XG5cbiAgICAgIGxhYmVsLmh0bWxGb3IgPSBsZXZlbDtcblxuICAgICAgY29uc3QgaW5wdXQgPSBVdGlsaXR5LmNyZWF0ZUZvcm1Db250cm9sKFxuICAgICAgICBcInJhZGlvXCIsXG4gICAgICAgIFwicHJpb3JpdHlcIixcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGxldmVsID09PSBcImxvd1wiLFxuICAgICAgKTtcbiAgICAgIGlucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gICAgICBpbnB1dC5pZCA9IGxldmVsO1xuICAgICAgaW5wdXQuY2hlY2tlZCA9IGxldmVsID09PSBwcmlvcml0eTtcblxuICAgICAgbGFiZWwuYXBwZW5kKGlucHV0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJpbWFyeUJ0biA9IGNyZWF0ZURpYWxvZ1ByaW1hcnlCdG4odHlwZSk7XG4gICAgcHJpbWFyeUJ0bi50eXBlID0gXCJzdWJtaXRcIjtcblxuICAgIGNvbnN0IGlubmVyQ29udGFpbmVyID0gVXRpbGl0eS5jcmVhdGVUZXh0KFwiZGl2XCIsIFtcbiAgICAgIFwiaW5uZXItcHJpb3JpdHktY29udGFpbmVyXCIsXG4gICAgXSk7XG4gICAgaW5uZXJDb250YWluZXIuYXBwZW5kKFxuICAgICAgLi4ucmFkaW9Hcm91cCxcbiAgICAgIGNyZWF0ZURpYWxvZ0J0bkdyb3VwKFtjcmVhdGVEaWFsb2dDYW5jZWxCdG4oZGlhbG9nKSwgcHJpbWFyeUJ0bl0pLFxuICAgICk7XG5cbiAgICBmaWVsZHNldC5hcHBlbmQobGVnZW5kLCBpbm5lckNvbnRhaW5lcik7XG4gICAgZGlhbG9nTWFpbi5hcHBlbmQodGl0bGVJbnB1dCwgZGVzY1RleHRhcmVhLCBkYXRlRGl2LCBmaWVsZHNldCk7XG5cbiAgICByZXR1cm4gZGlhbG9nTWFpbjtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGRpYWxvZyBtYWluIGVsZW1lbnQgZm9yIGRlbGV0aW5nIGEgdGFzayBvciBwcm9qZWN0LlxuICAgKiBAcGFyYW0ge0hUTUxEaWFsb2dFbGVtZW50fSBkaWFsb2cgLSBUaGUgZGlhbG9nIGJveCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvamVjdE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdGVkVGFza1RpdGxlIC0gVGhlIHRpdGxlIG9mIHRoZSBzZWxlY3RlZCB0YXNrLlxuICAgKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9IFRoZSBkaWFsb2cgbWFpbiBlbGVtZW50LlxuICAgKi9cbiAgY29uc3QgY3JlYXRlRGlhbG9nRGVsZXRlTWFpbiA9IChkaWFsb2csIHByb2plY3ROYW1lLCBzZWxlY3RlZFRhc2tUaXRsZSkgPT4ge1xuICAgIGNvbnN0IGRpYWxvZ01haW4gPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJkaXZcIiwgW1wiZGlhbG9nLW1haW5cIl0pO1xuXG4gICAgY29uc3QgY29uZmlybWF0aW9uID0gVXRpbGl0eS5jcmVhdGVUZXh0KFxuICAgICAgXCJwXCIsXG4gICAgICBbXCJwcm9tcHRcIl0sXG4gICAgICBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke3NlbGVjdGVkVGFza1RpdGxlID8gXCJ0aGlzIHRhc2tcIiA6IFwicHJvamVjdCBcIiArIHByb2plY3ROYW1lfT9gLFxuICAgICk7XG5cbiAgICBpZiAoIXNlbGVjdGVkVGFza1RpdGxlKSB7XG4gICAgICBjb25maXJtYXRpb24uYXBwZW5kKFxuICAgICAgICBVdGlsaXR5LmNyZWF0ZVRleHQoXG4gICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgW1wid2FybmluZ1wiXSxcbiAgICAgICAgICBcIiBXYXJuaW5nOiB0aGlzIGlzIGlycmV2ZXJzaWJsZSFcIixcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbWFyeUJ0biA9IGNyZWF0ZURpYWxvZ1ByaW1hcnlCdG4oXCJkZWxldGVcIik7XG4gICAgcHJpbWFyeUJ0bi50eXBlID0gXCJidXR0b25cIjtcblxuICAgIHByaW1hcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRpYWxvZy5yZW1vdmUoKTtcblxuICAgICAgaWYgKHNlbGVjdGVkVGFza1RpdGxlKSB7XG4gICAgICAgIFN0b3JhZ2UuZGVsZXRlVGFzayhcbiAgICAgICAgICBTdG9yYWdlLmdldFByb2plY3ROYW1lKHNlbGVjdGVkVGFza1RpdGxlKSxcbiAgICAgICAgICBzZWxlY3RlZFRhc2tUaXRsZSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFN0b3JhZ2UuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIE5hdi5yZW1vdmVOYXZCdG4ocHJvamVjdE5hbWUpO1xuICAgICAgICBOYXYuc2hvd05hdigpO1xuICAgICAgfVxuXG4gICAgICBOYXYudXBkYXRlVGFza0NvdW50KCk7XG4gICAgICBTZWN0aW9uLnJlcGxhY2VTZWN0aW9uKCk7XG4gICAgfSk7XG5cbiAgICBkaWFsb2dNYWluLmFwcGVuZChcbiAgICAgIGNvbmZpcm1hdGlvbixcbiAgICAgIGNyZWF0ZURpYWxvZ0J0bkdyb3VwKFtjcmVhdGVEaWFsb2dDYW5jZWxCdG4oZGlhbG9nKSwgcHJpbWFyeUJ0bl0pLFxuICAgICk7XG5cbiAgICByZXR1cm4gZGlhbG9nTWFpbjtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHByaW1hcnkgYnV0dG9uIGZvciB0aGUgZGlhbG9nIGJveC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgLSBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uLlxuICAgKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnR9IFRoZSBwcmltYXJ5IGJ1dHRvbiBlbGVtZW50LlxuICAgKi9cbiAgY29uc3QgY3JlYXRlRGlhbG9nUHJpbWFyeUJ0biA9IChjb250ZW50KSA9PiB7XG4gICAgcmV0dXJuIFV0aWxpdHkuY3JlYXRlVGV4dChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBbXCJwcmltYXJ5LWJ0blwiXSxcbiAgICAgIGNhcGl0YWxpemVGaXJzdExldHRlcihjb250ZW50KSxcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY2FuY2VsIGJ1dHRvbiBmb3IgdGhlIGRpYWxvZyBib3guXG4gICAqIEBwYXJhbSB7SFRNTERpYWxvZ0VsZW1lbnR9IGRpYWxvZyAtIFRoZSBkaWFsb2cgYm94IGVsZW1lbnQuXG4gICAqIEByZXR1cm5zIHtIVE1MQnV0dG9uRWxlbWVudH0gVGhlIGNhbmNlbCBidXR0b24gZWxlbWVudC5cbiAgICovXG4gIGNvbnN0IGNyZWF0ZURpYWxvZ0NhbmNlbEJ0biA9IChkaWFsb2cpID0+IHtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJidXR0b25cIiwgW1wiY2FuY2VsLWJ0blwiXSwgXCJDYW5jZWxcIik7XG4gICAgY2FuY2VsQnRuLnR5cGUgPSBcInJlc2V0XCI7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaWFsb2cucmVtb3ZlKCkpO1xuXG4gICAgcmV0dXJuIGNhbmNlbEJ0bjtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGJ1dHRvbiBncm91cCBmb3IgdGhlIGRpYWxvZyBib3guXG4gICAqIEBwYXJhbSB7SFRNTEJ1dHRvbkVsZW1lbnRbXX0gYnRucyAtIFRoZSBidXR0b25zIHRvIGJlIGFkZGVkIHRvIHRoZSBncm91cC5cbiAgICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fSBUaGUgYnV0dG9uIGdyb3VwIGVsZW1lbnQuXG4gICAqL1xuICBjb25zdCBjcmVhdGVEaWFsb2dCdG5Hcm91cCA9IChidG5zKSA9PiB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJkaXZcIiwgW1wiYnRuLWNvbnRhaW5lclwiXSk7XG5cbiAgICBidG5Hcm91cC5hcHBlbmQoLi4uYnRucyk7XG5cbiAgICByZXR1cm4gYnRuR3JvdXA7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhcGl0YWxpemVzIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSB3b3JkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gd29yZCAtIFRoZSB3b3JkIHRvIGJlIGNhcGl0YWxpemVkLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgd29yZCB3aXRoIHRoZSBmaXJzdCBsZXR0ZXIgY2FwaXRhbGl6ZWQuXG4gICAqL1xuICBjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAod29yZCkgPT4ge1xuICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZURpYWxvZyxcbiAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBpc1Bhc3QgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuL1V0aWxpdHkuanNcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nLmpzXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi4vY2xhc3Nlcy9TdG9yYWdlLmpzXCI7XG5pbXBvcnQgZWRpdCBmcm9tIFwiLi4vaWNvbnMvc3F1YXJlLWVkaXQtb3V0bGluZS5zdmdcIjtcbmltcG9ydCB0cmFzaCBmcm9tIFwiLi4vaWNvbnMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IGFkZCBmcm9tIFwiLi4vaWNvbnMvcGx1cy5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgbGV0IHNlbGVjdGVkVGFza1RpdGxlID0gbnVsbDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHNlY3Rpb24gZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgbmFtZS4gSWYgbm8gbmFtZSBpcyBwcm92aWRlZCwgYSBkZWZhdWx0IHNlY3Rpb24gaXMgY3JlYXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lPW51bGxdIC0gVGhlIG5hbWUgb2YgdGhlIHNlY3Rpb24uXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIHNlY3Rpb24gZWxlbWVudC5cbiAgICovXG4gIGNvbnN0IGNyZWF0ZVNlY3Rpb24gPSAobmFtZSA9IG51bGwpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gVXRpbGl0eS5jcmVhdGVUZXh0KFwic2VjdGlvblwiLCBbXCJwcm9qZWN0LXZpZXdcIl0pO1xuICAgIGNvbnN0IGhlYWRlciA9IFV0aWxpdHkuY3JlYXRlVGV4dChcbiAgICAgIFwiaDNcIixcbiAgICAgIFtcInByb2plY3QtbmFtZVwiXSxcbiAgICAgIG5hbWUgPz8gXCJTZWxlY3QgYSBwcm9qZWN0XCIsXG4gICAgKTtcblxuICAgIHNlY3Rpb24uYXBwZW5kKGhlYWRlcik7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgY29uc3QgbGlzdCA9IFV0aWxpdHkuY3JlYXRlVGV4dChcIm1lbnVcIiwgW1widGFzay1saXN0XCJdKTtcblxuICAgICAgU3RvcmFnZS5nZXRBbGxUYXNrcyhuYW1lKS5sZW5ndGhcbiAgICAgICAgPyBsaXN0LmFwcGVuZCguLi5TdG9yYWdlLmdldEFsbFRhc2tzKG5hbWUpLm1hcChjcmVhdGVUYXNrQnRuKSlcbiAgICAgICAgOiBoZWFkZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgICAgICAgICAgXCJhZnRlcmVuZFwiLFxuICAgICAgICAgICAgVXRpbGl0eS5jcmVhdGVUZXh0KFxuICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgW1wiZW1wdHktdGFza1wiXSxcbiAgICAgICAgICAgICAgXCJJdCdzIHF1aXRlIGVtcHR5IGluIGhlcmUuLi5cIixcbiAgICAgICAgICAgICksXG4gICAgICAgICAgKTtcblxuICAgICAgaWYgKCFTdG9yYWdlLmRlZmF1bHRzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgIGxpc3QuYXBwZW5kKGNyZWF0ZVRhc2tCdG4oKSk7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uYXBwZW5kKGxpc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWN0aW9uO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgdGFzayBidXR0b24gd2l0aCB0aGUgc3BlY2lmaWVkIHRhc2sgZGF0YS4gSWYgbm8gdGFzayBpcyBwcm92aWRlZCwgYW4gXCJBZGQgVGFza1wiIGJ1dHRvbiBpcyBjcmVhdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW3Rhc2s9bnVsbF0gLSBUaGUgdGFzayBkYXRhLlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFRoZSB0YXNrIGJ1dHRvbiBlbGVtZW50LlxuICAgKi9cbiAgY29uc3QgY3JlYXRlVGFza0J0biA9ICh0YXNrID0gbnVsbCkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgY29uc3QgdGFza0J0biA9IFV0aWxpdHkuY3JlYXRlVGV4dChcImJ1dHRvblwiLCBbXG4gICAgICBcInRhc2tcIixcbiAgICAgIGAke3Rhc2sgPyBgdGFzay0ke3Rhc2sucHJpb3JpdHl9YCA6IFwiYWRkLXRhc2tcIn1gLFxuICAgIF0pO1xuXG4gICAgaWYgKHRhc2spIHtcbiAgICAgIHRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChbXCJMQUJFTFwiLCBcIklOUFVUXCJdLmluY2x1ZGVzKGUudGFyZ2V0LnRhZ05hbWUpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBnZXRQcm9qZWN0TmFtZSgpO1xuXG4gICAgICAgIERpYWxvZy5jcmVhdGVEaWFsb2coXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgU3RvcmFnZS5nZXRUYXNrKHByb2plY3ROYW1lLCBnZXRUYXNrVGl0bGUoZS50YXJnZXQpKSxcbiAgICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGxhYmVsLmh0bWxGb3IgPSBgY2hlY2tib3gtJHt0YXNrLmlkfWA7XG5cbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gVXRpbGl0eS5jcmVhdGVGb3JtQ29udHJvbChcImNoZWNrYm94XCIsIFwiXCIpO1xuICAgICAgY2hlY2tib3guaWQgPSBgY2hlY2tib3gtJHt0YXNrLmlkfWA7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XG5cbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0hlYWRlciA9IGUudGFyZ2V0XG4gICAgICAgICAgLmNsb3Nlc3QoXCIudGFza1wiKVxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGVcIik7XG5cbiAgICAgICAgdGFza0hlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuXG4gICAgICAgIFN0b3JhZ2UudG9nZ2xlVGFza0NvbXBsZXRlZCh0YXNrLmlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBsYWJlbC5hcHBlbmQoY2hlY2tib3gpO1xuXG4gICAgICBjb25zdCB0YXNrVGl0bGUgPSBVdGlsaXR5LmNyZWF0ZVRleHQoXG4gICAgICAgIFwicFwiLFxuICAgICAgICBbXCJ0YXNrLXRpdGxlXCIsIGAke3Rhc2suY29tcGxldGVkID8gXCJjb21wbGV0ZWRcIiA6IFwiXCJ9YF0sXG4gICAgICAgIHRhc2sudGl0bGUsXG4gICAgICApO1xuXG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IFV0aWxpdHkuY3JlYXRlVGV4dChcbiAgICAgICAgXCJwXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBcInRhc2stZGF0ZVwiLFxuICAgICAgICAgIGAke3Rhc2suZHVlRGF0ZSAmJiBpc1Bhc3QobmV3IERhdGUodGFzay5kdWVEYXRlKSkgPyBcImV4cGlyZWRcIiA6IFwiXCJ9YCxcbiAgICAgICAgXSxcbiAgICAgICAgVXRpbGl0eS5mb3JtYXREYXRlKHRhc2suZHVlRGF0ZSksXG4gICAgICApO1xuXG4gICAgICBjb25zdCBlZGl0QnRuID0gVXRpbGl0eS5jcmVhdGVUZXh0KFwiYnV0dG9uXCIsIFtcInRhc2stYWN0aW9uLWJ0blwiXSk7XG5cbiAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHNlbGVjdGVkVGFza1RpdGxlID0gZ2V0VGFza1RpdGxlKGUudGFyZ2V0KTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGdldFByb2plY3ROYW1lKCk7XG5cbiAgICAgICAgRGlhbG9nLmNyZWF0ZURpYWxvZyhcbiAgICAgICAgICBcImVkaXRcIixcbiAgICAgICAgICBTdG9yYWdlLmdldFRhc2socHJvamVjdE5hbWUsIHNlbGVjdGVkVGFza1RpdGxlKSxcbiAgICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgICBzZWxlY3RlZFRhc2tUaXRsZSxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBlZGl0QnRuLmFwcGVuZChVdGlsaXR5LmNyZWF0ZUltZyhlZGl0LCBbXCJ0YXNrLWljb25cIl0sIFwiRWRpdCBUYXNrXCIpKTtcblxuICAgICAgY29uc3QgdHJhc2hCdG4gPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJidXR0b25cIiwgW1widGFzay1hY3Rpb24tYnRuXCJdKTtcblxuICAgICAgdHJhc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHNlbGVjdGVkVGFza1RpdGxlID0gZ2V0VGFza1RpdGxlKGUudGFyZ2V0KTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGdldFByb2plY3ROYW1lKCk7XG5cbiAgICAgICAgRGlhbG9nLmNyZWF0ZURpYWxvZyhcbiAgICAgICAgICBcImRlbGV0ZVwiLFxuICAgICAgICAgIFN0b3JhZ2UuZ2V0VGFzayhwcm9qZWN0TmFtZSwgc2VsZWN0ZWRUYXNrVGl0bGUpLFxuICAgICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICAgIHNlbGVjdGVkVGFza1RpdGxlLFxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHRyYXNoQnRuLmFwcGVuZChVdGlsaXR5LmNyZWF0ZUltZyh0cmFzaCwgW1widGFzay1pY29uXCJdLCBcIkRlbGV0ZSBUYXNrXCIpKTtcblxuICAgICAgdGFza0J0bi5hcHBlbmQobGFiZWwsIHRhc2tUaXRsZSwgdGFza0RhdGUsIGVkaXRCdG4sIHRyYXNoQnRuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBEaWFsb2cuY3JlYXRlRGlhbG9nKFwiYWRkXCIsIG51bGwsIGdldFByb2plY3ROYW1lKCkpO1xuICAgICAgfSk7XG5cbiAgICAgIHRhc2tCdG4uYXBwZW5kKFxuICAgICAgICBVdGlsaXR5LmNyZWF0ZUltZyhhZGQsIFtcInRhc2staWNvblwiXSksXG4gICAgICAgIFV0aWxpdHkuY3JlYXRlVGV4dChcInBcIiwgW1widGFzay10aXRsZVwiXSwgXCJBZGQgVGFza1wiKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGkuYXBwZW5kKHRhc2tCdG4pO1xuXG4gICAgcmV0dXJuIGxpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgY3VycmVudCBzZWN0aW9uIHdpdGggYSBuZXcgc2VjdGlvbi5cbiAgICovXG4gIGNvbnN0IHJlcGxhY2VTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0UHJvamVjdE5hbWUoKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXZpZXdcIilcbiAgICAgIC5yZXBsYWNlV2l0aChjcmVhdGVTZWN0aW9uKHByb2plY3ROYW1lKSk7XG4gICAgVXRpbGl0eS5jaGFuZ2VEb2N1bWVudFRpdGxlKHByb2plY3ROYW1lKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0cyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBwcm9qZWN0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcHJvamVjdCBuYW1lLlxuICAgKi9cbiAgY29uc3QgZ2V0UHJvamVjdE5hbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWl0ZW0uc2VsZWN0ZWQgPiAucHJvamVjdC1uYW1lXCIpXG4gICAgICA/LnRleHRDb250ZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB0aXRsZSBvZiB0aGUgdGFzayBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGUgLSBUaGUgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIHRhc2suXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB0aXRsZSBvZiB0aGUgdGFzay5cbiAgICovXG4gIGNvbnN0IGdldFRhc2tUaXRsZSA9IChlbGUpID0+IHtcbiAgICByZXR1cm4gZWxlLmNsb3Nlc3QoXCIudGFza1wiKS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVTZWN0aW9uLFxuICAgIHJlcGxhY2VTZWN0aW9uLFxuICAgIGdldFByb2plY3ROYW1lLFxuICB9O1xufSkoKTtcbiIsImltcG9ydCBVdGlsaXR5IGZyb20gXCIuL1V0aWxpdHkuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuL1NlY3Rpb24uanNcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nLmpzXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi4vY2xhc3Nlcy9TdG9yYWdlLmpzXCI7XG5pbXBvcnQgdG9kYXkgZnJvbSBcIi4uL2ljb25zL2NhbGVuZGFyLXRvZGF5LnN2Z1wiO1xuaW1wb3J0IHdlZWsgZnJvbSBcIi4uL2ljb25zL2NhbGVuZGFyLXdlZWsuc3ZnXCI7XG5pbXBvcnQgaW1wb3J0YW50IGZyb20gXCIuLi9pY29ucy9jYWxlbmRhci1hbGVydC5zdmdcIjtcbmltcG9ydCBsaXN0IGZyb20gXCIuLi9pY29ucy9mb3JtYXQtbGlzdC1idWxsZXRlZC5zdmdcIjtcbmltcG9ydCBjbG9zZSBmcm9tIFwiLi4vaWNvbnMvY2xvc2Uuc3ZnXCI7XG5pbXBvcnQgYWRkIGZyb20gXCIuLi9pY29ucy9wbHVzLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBtb2JpbGVCcmVha3BvaW50ID0gOTkyO1xuXG4gIGxldCBuYXY7XG4gIGxldCBtb2JpbGVWaWV3ID0gd2luZG93LmlubmVyV2lkdGggPCBtb2JpbGVCcmVha3BvaW50O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBuYXZpZ2F0aW9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIG5hdmlnYXRpb24gZWxlbWVudC5cbiAgICovXG4gIGNvbnN0IGNyZWF0ZU5hdiA9IChoZWFkZXIsIG1haW4pID0+IHtcbiAgICBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXG4gICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoZSkgPT4ge1xuICAgICAgaWYgKCFuYXYuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICBoaWRlTmF2KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IFV0aWxpdHkuY3JlYXRlVGV4dChcImJ1dHRvblwiLCBbXCJjbG9zZS1idG5cIiwgXCJhY3Rpb24tYnRuXCJdKTtcbiAgICBjbG9zZUJ0bi5hcHBlbmQoVXRpbGl0eS5jcmVhdGVJbWcoY2xvc2UsIFtcImFjdGlvbi1pY29uXCJdLCBcIkNsb3NlXCIpKTtcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlTmF2KTtcblxuICAgIG5hdi5hcHBlbmQoXG4gICAgICBjbG9zZUJ0bixcbiAgICAgIGNyZWF0ZU5hdk1lbnUoXCJkZWZhdWx0XCIsIFtcbiAgICAgICAgY3JlYXRlTmF2QnRuKFwiVG9kYXlcIiwgdG9kYXkpLFxuICAgICAgICBjcmVhdGVOYXZCdG4oXCJUaGlzIHdlZWtcIiwgd2VlayksXG4gICAgICAgIGNyZWF0ZU5hdkJ0bihcIkltcG9ydGFudFwiLCBpbXBvcnRhbnQpLFxuICAgICAgXSksXG4gICAgICBVdGlsaXR5LmNyZWF0ZVRleHQoXCJoMlwiLCBbXSwgXCJQcm9qZWN0c1wiKSxcbiAgICAgIGNyZWF0ZU5hdk1lbnUoXCJ1c2VyXCIsIFtcbiAgICAgICAgLi4uU3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpXG4gICAgICAgICAgLmZpbHRlcigocHJvamVjdCkgPT4gIVN0b3JhZ2UuZGVmYXVsdHMuaW5jbHVkZXMocHJvamVjdC5nZXROYW1lKCkpKVxuICAgICAgICAgIC5tYXAoKHByb2plY3QpID0+IGNyZWF0ZU5hdkJ0bihwcm9qZWN0LmdldE5hbWUoKSkpLFxuICAgICAgICBjcmVhdGVOYXZCdG4oKSxcbiAgICAgIF0pLFxuICAgICk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCBtb2JpbGVCcmVha3BvaW50ICYmICFtb2JpbGVWaWV3KSB7XG4gICAgICAgIGhlYWRlci5hcHBlbmQoZG9jdW1lbnQuYWRvcHROb2RlKG5hdikpO1xuICAgICAgICBtb2JpbGVWaWV3ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPiBtb2JpbGVCcmVha3BvaW50ICYmIG1vYmlsZVZpZXcpIHtcbiAgICAgICAgbWFpbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGRvY3VtZW50LmFkb3B0Tm9kZShuYXYpKTtcbiAgICAgICAgbW9iaWxlVmlldyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5hdjtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5hdmlnYXRpb24gbWVudSB3aXRoIHRoZSBzcGVjaWZpZWQgdHlwZSBhbmQgYnV0dG9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgdHlwZSBvZiBuYXZpZ2F0aW9uIG1lbnUgdG8gY3JlYXRlLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50W119IGJ0bnMgLSBUaGUgYnV0dG9ucyB0byBhZGQgdG8gdGhlIG5hdmlnYXRpb24gbWVudS5cbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBUaGUgbmF2aWdhdGlvbiBtZW51LlxuICAgKi9cbiAgY29uc3QgY3JlYXRlTmF2TWVudSA9ICh0eXBlLCBidG5zKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IFV0aWxpdHkuY3JlYXRlVGV4dChcIm1lbnVcIiwgW2Ake3R5cGV9LXByb2plY3RzYF0pO1xuXG4gICAgbWVudS5hcHBlbmQoLi4uYnRucyk7XG5cbiAgICByZXR1cm4gbWVudTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5hdmlnYXRpb24gYnV0dG9uIHdpdGggdGhlIHNwZWNpZmllZCBwcm9qZWN0IG5hbWUgYW5kIGljb24uIElmIG5vIHByb2plY3QgbmFtZSBpcyBwcm92aWRlZCwgYW4gXCJBZGQgUHJvamVjdFwiIGJ1dHRvbiBpcyBjcmVhdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Byb2plY3ROYW1lPW51bGxdIC0gVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbaWNvbj1udWxsXSAtIFRoZSBpY29uIHRvIGRpc3BsYXkgb24gdGhlIGJ1dHRvbi5cbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBUaGUgbmF2aWdhdGlvbiBidXR0b24uXG4gICAqL1xuICBjb25zdCBjcmVhdGVOYXZCdG4gPSAocHJvamVjdE5hbWUgPSBudWxsLCBpY29uID0gbnVsbCkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IG5hdkJ0biA9IFV0aWxpdHkuY3JlYXRlVGV4dChcImJ1dHRvblwiLCBbXG4gICAgICBcIm5hdi1pdGVtXCIsXG4gICAgICBgJHtwcm9qZWN0TmFtZSA/IFwicHJvamVjdFwiIDogXCJhZGRcIn1gLFxuICAgIF0pO1xuXG4gICAgaWYgKHByb2plY3ROYW1lKSB7XG4gICAgICBuYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKT8uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuXG4gICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgICAgU2VjdGlvbi5yZXBsYWNlU2VjdGlvbigpO1xuICAgICAgICBoaWRlTmF2KCk7XG4gICAgICB9KTtcblxuICAgICAgbmF2QnRuLmFwcGVuZChcbiAgICAgICAgVXRpbGl0eS5jcmVhdGVJbWcoaWNvbiA/PyBsaXN0LCBbXCJuYXYtaWNvblwiXSksXG4gICAgICAgIFV0aWxpdHkuY3JlYXRlVGV4dChcInBcIiwgW1wicHJvamVjdC1uYW1lXCJdLCBwcm9qZWN0TmFtZSksXG4gICAgICAgIFV0aWxpdHkuY3JlYXRlVGV4dChcInNwYW5cIiwgW1widGFzay1jb3VudFwiXSwgZ2V0VGFza0NvdW50KHByb2plY3ROYW1lKSksXG4gICAgICApO1xuXG4gICAgICBpZiAoIVN0b3JhZ2UuZGVmYXVsdHMuaW5jbHVkZXMocHJvamVjdE5hbWUpKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IFV0aWxpdHkuY3JlYXRlVGV4dChcImJ1dHRvblwiLCBbXCJwcm9qZWN0LWRlbGV0ZS1idG5cIl0pO1xuXG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPVxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKS50ZXh0Q29udGVudDtcblxuICAgICAgICAgIERpYWxvZy5jcmVhdGVEaWFsb2coXCJkZWxldGVcIiwgbnVsbCwgcHJvamVjdE5hbWUpO1xuICAgICAgICAgIGhpZGVOYXYoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVsZXRlQnRuLmFwcGVuZChcbiAgICAgICAgICBVdGlsaXR5LmNyZWF0ZUltZyhjbG9zZSwgW1wibmF2LWljb25cIl0sIFwiRGVsZXRlIFByb2plY3RcIiksXG4gICAgICAgICk7XG5cbiAgICAgICAgbmF2QnRuLmFwcGVuZChkZWxldGVCdG4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbmF2QnRuLnBhcmVudE5vZGUucmVwbGFjZVdpdGgoY3JlYXRlSW5wdXRQcm9qZWN0KCkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQubmF2LWl0ZW1cIikuZm9jdXMoKTtcbiAgICAgIH0pO1xuXG4gICAgICBuYXZCdG4uYXBwZW5kKFxuICAgICAgICBVdGlsaXR5LmNyZWF0ZUltZyhhZGQsIFtcIm5hdi1pY29uXCJdKSxcbiAgICAgICAgVXRpbGl0eS5jcmVhdGVUZXh0KFwicFwiLCBbXCJwcm9qZWN0LW5hbWVcIl0sIFwiQWRkIFByb2plY3RcIiksXG4gICAgICApO1xuICAgIH1cblxuICAgIGxpLmFwcGVuZChuYXZCdG4pO1xuXG4gICAgcmV0dXJuIGxpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGlucHV0IGZvcm0gdG8gYWRkIGEgbmV3IHByb2plY3QuXG4gICAqXG4gICAqIEByZXR1cm5zIHtIVE1MRm9ybUVsZW1lbnR9IFRoZSBpbnB1dCBmb3JtLlxuICAgKi9cbiAgY29uc3QgY3JlYXRlSW5wdXRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJmb3JtXCIsIFtcImFkZC1wcm9qZWN0XCJdKTtcblxuICAgIGNvbnN0IGlucHV0ID0gVXRpbGl0eS5jcmVhdGVGb3JtQ29udHJvbChcInRleHRcIiwgXCJwcm9qZWN0LW5hbWVcIik7XG4gICAgaW5wdXQuY2xhc3NOYW1lID0gXCJuYXYtaXRlbVwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBwcm9qZWN0IG5hbWVcIjtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY3JlYXRlTmV3UHJvamVjdChmb3JtLCBpbnB1dC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gVXRpbGl0eS5jcmVhdGVUZXh0KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFtcIm5hdi1pdGVtXCIsIFwicHJvamVjdC1jYW5jZWxcIl0sXG4gICAgICBcIkNhbmNlbFwiLFxuICAgICk7XG4gICAgY2FuY2VsQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBmb3JtLnJlcGxhY2VXaXRoKGNyZWF0ZU5hdkJ0bigpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IFV0aWxpdHkuY3JlYXRlVGV4dChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBbXCJuYXYtaXRlbVwiLCBcInByb2plY3QtYWRkXCJdLFxuICAgICAgXCJBZGRcIixcbiAgICApO1xuICAgIGFkZEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KGZvcm0sIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgZm9ybS5yZXBsYWNlV2l0aChjcmVhdGVOYXZCdG4oKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kKGNhbmNlbEJ0biwgYWRkQnRuKTtcbiAgICBmb3JtLmFwcGVuZChpbnB1dCwgZGl2KTtcblxuICAgIHJldHVybiBmb3JtO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IHByb2plY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIG5hbWUsIGFuZCByZXBsYWNlcyB0aGUgaW5wdXQgZm9ybSB3aXRoIHRoZSBcIkFkZCBQcm9qZWN0XCIgYnV0dG9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybSAtIFRoZSBmb3JtIGVsZW1lbnQgdG8gcmVwbGFjZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb2plY3ROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuXG4gICAqL1xuICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKGZvcm0sIHByb2plY3ROYW1lKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0TmFtZSkge1xuICAgICAgYWxlcnQoXCJQcm9qZWN0IG5hbWUgY2Fubm90IGJlIGVtcHR5IVwiKTtcbiAgICB9IGVsc2UgaWYgKFN0b3JhZ2UuY29udGFpbnNQcm9qZWN0KHByb2plY3ROYW1lKSkge1xuICAgICAgYWxlcnQoXCJQcm9qZWN0IG5hbWUgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBTdG9yYWdlLmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuXG4gICAgICBmb3JtLnJlcGxhY2VXaXRoKGNyZWF0ZU5hdkJ0bihwcm9qZWN0TmFtZSksIGNyZWF0ZU5hdkJ0bigpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIG5hdmlnYXRpb24gYnV0dG9uIHdpdGggdGhlIHNwZWNpZmllZCBwcm9qZWN0IG5hbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9qZWN0TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0IHRvIHJlbW92ZS5cbiAgICovXG4gIGNvbnN0IHJlbW92ZU5hdkJ0biA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWl0ZW1cIikuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBpZiAoYnRuLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICBidG4ucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgdGFza3MgaW4gdGhlIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvamVjdE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIG51bWJlciBvZiB0YXNrcyBpbiB0aGUgcHJvamVjdCBpbiBzdHJpbmcgZm9ybWF0LlxuICAgKi9cbiAgY29uc3QgZ2V0VGFza0NvdW50ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgdGFza0NvdW50ID0gU3RvcmFnZS5nZXRBbGxUYXNrcyhwcm9qZWN0TmFtZSkubGVuZ3RoO1xuICAgIHJldHVybiB0YXNrQ291bnQgPyB0YXNrQ291bnQudG9TdHJpbmcoKSA6IFwiXCI7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHRhc2sgY291bnQgZm9yIGVhY2ggcHJvamVjdCBidXR0b24uXG4gICAqL1xuICBjb25zdCB1cGRhdGVUYXNrQ291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG5cbiAgICBwcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gYnRuLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50O1xuICAgICAgYnRuLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb3VudFwiKS50ZXh0Q29udGVudCA9IGdldFRhc2tDb3VudChwcm9qZWN0TmFtZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3dzIHRoZSBuYXZpZ2F0aW9uIG1lbnUuXG4gICAqL1xuICBjb25zdCBzaG93TmF2ID0gKCkgPT4ge1xuICAgIGlmIChtb2JpbGVWaWV3ICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpKSB7XG4gICAgICBuYXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBuYXZpZ2F0aW9uIG1lbnUuXG4gICAqL1xuICBjb25zdCBoaWRlTmF2ID0gKCkgPT4ge1xuICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlTmF2LFxuICAgIHJlbW92ZU5hdkJ0bixcbiAgICB1cGRhdGVUYXNrQ291bnQsXG4gICAgc2hvd05hdixcbiAgICBoaWRlTmF2LFxuICB9O1xufSkoKTtcbiIsImltcG9ydCBVdGlsaXR5IGZyb20gXCIuL1V0aWxpdHkuanNcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi9pY29ucy9jbGlwYm9hcmQtY2hlY2stb3V0bGluZS5zdmdcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuLi9pY29ucy9tZW51LXdoaXRlLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgaGVhZGVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIGhlYWRlciBlbGVtZW50LlxuICAgKi9cbiAgY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCBtZW51QnRuID0gVXRpbGl0eS5jcmVhdGVUZXh0KFwiYnV0dG9uXCIsIFtcIm1lbnUtYnRuXCIsIFwiYWN0aW9uLWJ0blwiXSk7XG4gICAgbWVudUJ0bi5hcHBlbmQoVXRpbGl0eS5jcmVhdGVJbWcobWVudSwgW1wiYWN0aW9uLWljb25cIl0sIFwiU2lkZWJhclwiKSk7XG5cbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaXYgPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJkaXZcIiwgW1wiY29udGFpbmVyLWhlYWRlclwiXSk7XG5cbiAgICBkaXYuYXBwZW5kKFxuICAgICAgVXRpbGl0eS5jcmVhdGVJbWcobG9nbywgW1wibG9nb1wiXSwgXCJUb2RvIExpc3RcIiksXG4gICAgICBVdGlsaXR5LmNyZWF0ZVRleHQoXCJoMVwiLCBbXCJ0aXRsZVwiXSwgXCJUb2RvIExpc3RcIiksXG4gICAgKTtcblxuICAgIGhlYWRlci5hcHBlbmQobWVudUJ0biwgZGl2KTtcblxuICAgIHJldHVybiBoZWFkZXI7XG4gIH07XG5cbiAgcmV0dXJuIHsgY3JlYXRlSGVhZGVyIH07XG59KSgpO1xuIiwiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vVXRpbGl0eS5qc1wiO1xuaW1wb3J0IGdpdGh1YiBmcm9tIFwiLi4vaWNvbnMvZ2l0aHViLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZm9vdGVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIGZvb3RlciBlbGVtZW50LlxuICAgKi9cbiAgY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cbiAgICBjb25zdCBnaXRodWJMaW5rID0gVXRpbGl0eS5jcmVhdGVUZXh0KFwiYVwiLCBbXCJnaXRodWItbGlua1wiXSk7XG4gICAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vQ2hpZWZXb29kcy90b2RvLWxpc3RcIjtcbiAgICBnaXRodWJMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICBnaXRodWJMaW5rLmFwcGVuZChVdGlsaXR5LmNyZWF0ZUltZyhnaXRodWIsIFtcImdpdGh1Yi1pY29uXCJdLCBcIkdpdEh1YlwiKSk7XG5cbiAgICBmb290ZXIuYXBwZW5kKFxuICAgICAgVXRpbGl0eS5jcmVhdGVUZXh0KFxuICAgICAgICBcInBcIixcbiAgICAgICAgW1wibWFkZS1ieVwiXSxcbiAgICAgICAgYENvcHlyaWdodCBAICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBDaGllZldvb2RzYCxcbiAgICAgICksXG4gICAgICBnaXRodWJMaW5rLFxuICAgICk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZUZvb3RlciB9O1xufSkoKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vY29tcG9uZW50cy9VdGlsaXR5LmpzXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuL2NvbXBvbmVudHMvTmF2LmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXIuanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Gb290ZXIuanNcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL2NsYXNzZXMvU3RvcmFnZS5qc1wiO1xuXG5TdG9yYWdlLnVwZGF0ZURlZmF1bHRQcm9qZWN0cygpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5jb25zdCBoZWFkZXIgPSBIZWFkZXIuY3JlYXRlSGVhZGVyKCk7XG5cbm1haW4uYXBwZW5kKE5hdi5jcmVhdGVOYXYoaGVhZGVyLCBtYWluKSwgU2VjdGlvbi5jcmVhdGVTZWN0aW9uKFwiVG9kYXlcIikpO1xuXG5jb25zdCBvdmVybGF5ID0gVXRpbGl0eS5jcmVhdGVUZXh0KFwiZGl2XCIsIFtcIm92ZXJsYXlcIl0pO1xub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTmF2LmhpZGVOYXYpO1xuXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNib2R5XCIpXG4gIC5hcHBlbmQoaGVhZGVyLCBtYWluLCBGb290ZXIuY3JlYXRlRm9vdGVyKCksIG92ZXJsYXkpO1xuXG5mb3IgKGNvbnN0IG5hdkJ0biBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1pdGVtLnByb2plY3RcIikpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBuYXZCdG4ucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIikudGV4dENvbnRlbnQ7XG5cbiAgaWYgKHByb2plY3ROYW1lID09PSBcIlRvZGF5XCIpIHtcbiAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIFV0aWxpdHkuY2hhbmdlRG9jdW1lbnRUaXRsZShwcm9qZWN0TmFtZSk7XG4gICAgYnJlYWs7XG4gIH1cbn1cblxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblxuICBpZiAoZGF0ZS5nZXRIb3VycygpID09PSAwICYmIGRhdGUuZ2V0TWludXRlcygpID09PSAwKSB7XG4gICAgU3RvcmFnZS51cGRhdGVEZWZhdWx0UHJvamVjdHMoKTtcbiAgfVxufSwgNjAwMDApO1xuIl0sIm5hbWVzIjpbInRpdGxlIiwiZGVzYyIsInByaW9yaXR5IiwicHJvamVjdE5hbWUiXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///170
`)}},__webpack_module_cache__={};function __webpack_require__(I){var B=__webpack_module_cache__[I];if(B!==void 0)return B.exports;var g=__webpack_module_cache__[I]={id:I,exports:{}};return __webpack_modules__[I](g,g.exports,__webpack_require__),g.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=I=>{var B=I&&I.__esModule?()=>I.default:()=>I;return __webpack_require__.d(B,{a:B}),B},__webpack_require__.d=(I,B)=>{for(var g in B)__webpack_require__.o(B,g)&&!__webpack_require__.o(I,g)&&Object.defineProperty(I,g,{enumerable:!0,get:B[g]})},__webpack_require__.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),__webpack_require__.o=(I,B)=>Object.prototype.hasOwnProperty.call(I,B),(()=>{var I;__webpack_require__.g.importScripts&&(I=__webpack_require__.g.location+"");var B=__webpack_require__.g.document;if(!I&&B&&(B.currentScript&&(I=B.currentScript.src),!I)){var g=B.getElementsByTagName("script");if(g.length)for(var F=g.length-1;F>-1&&(!I||!/^http(s?):/.test(I));)I=g[F--].src}if(!I)throw new Error("Automatic publicPath is not supported in this browser");I=I.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=I})(),(()=>{__webpack_require__.b=document.baseURI||self.location.href;var I={792:0}})(),__webpack_require__.nc=void 0;var __webpack_exports__=__webpack_require__(170)})();
