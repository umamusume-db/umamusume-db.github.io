(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{130:function(t,e,r){"use strict";r(33),r(15),r(32),r(38),r(18),r(26),r(39),r(40),r(22);var n=r(5);r(28);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}e.a=function(t,e){var r=t.$http,l=t.store;e("getFetchData",function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var n,c,d,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={},c=o(e),t.prev=2,c.s();case 4:if((d=c.n()).done){t.next=16;break}if(v=d.value,void 0!==l.state.data[v]){t.next=13;break}return t.next=9,r.$get("/api/"+v);case 9:n[v]=t.sent,l.commit("add",{route:v,data:n[v]}),t.next=14;break;case 13:n[v]=l.state.data[v];case 14:t.next=4;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(2),c.e(t.t0);case 21:return t.prev=21,c.f(),t.finish(21);case 24:return t.abrupt("return",n);case 25:case"end":return t.stop()}}),t,null,[[2,18,21,24]])})));return function(e){return t.apply(this,arguments)}}())}},170:function(t,e,r){"use strict";r.r(e);var n=r(27),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"d-flex justify-content-center align-items-end end-footer"},[r("p",{staticClass:"text-center m-0 p-1 w-100 text-white"},[t._v("Umamusume content and materials are trademarks and copyrights of Cygames, Inc. or its licensors. All rights reserved.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:r(170).default})},180:function(t,e,r){"use strict";var n=r(27),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NavBar"),t._v(" "),r("Nuxt"),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavBar:r(271).default,Footer:r(170).default})},214:function(t,e,r){r(215),t.exports=r(216)},251:function(t,e,r){var content=r(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(103).default)("e622d370",content,!0,{sourceMap:!1})},252:function(t,e,r){var n=r(102)(!1);n.push([t.i,':root{--uma-text-color:#794016;--slider-thumb-height:18px;--slider-thumb-color:#444;--slider-track-color:#ccc}.card *,.card-body *,.modal-content *,.uma-text{color:#794016;color:var(--uma-text-color)}html{overflow:hidden}button,input,label,select{outline:none;box-shadow:none!important}label{cursor:pointer}body{padding-top:60px;background-color:#212529!important}#__nuxt{height:calc(100vh - 56px);overflow-y:auto}#__layout,#__layout>div,#__nuxt{display:flex;flex-direction:column}#__layout,#__layout>div{height:100%}#__layout>div>.container-fluid{flex-grow:1;display:flex;flex-direction:column;max-width:992px}.notDraggable,a,img{user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-drag:none;-webkit-user-select:none;-ms-user-select:none}#outline{text-shadow:-1px -1px 0 rgba(0,0,0,.55),1px -1px 0 rgba(0,0,0,.55),-1px 1px 0 rgba(0,0,0,.55),1px 1px 0 rgba(0,0,0,.55);color:#fff}.atooltip{position:relative;display:inline-block;border-bottom:1px dotted #000}.atooltip .atooltiptext{visibility:hidden;width:200px;background-color:#555;color:#fff;text-align:center;padding:-5px 0;border-radius:6px;position:absolute;z-index:1400;bottom:100%;left:50%;margin-left:-100px;opacity:0;transition:opacity .3s}.atooltip .atooltiptext:after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-top-color:#555}.atooltip:hover .atooltiptext{visibility:visible;opacity:1}.bannerimg{-o-object-fit:contain;object-fit:contain;height:75%;width:75%;max-width:384px}.transition-list-item{transition:transform .25s}.transition-list-enter-from{opacity:0}.transition-list-enter-active{transition:opacity .5s}.transition-list-leave-active{opacity:0;position:absolute!important}.transition-skill-list-leave-active{display:none!important}.transition-skill-list-item{transition:all .15s}.transition-skill-list-enter-from{opacity:0;transition:all 0s;transform:translateY(2vh)}input[type=range]{-webkit-appearance:none;padding:0;font:inherit;outline:none;color:green;opacity:.8;background:#ccc;box-sizing:border-box;transition:opacity .2s;cursor:pointer;height:8px;border-radius:8px}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:18px;height:var(--slider-thumb-height);width:18px;width:var(--slider-thumb-height);background:#444;background:var(--slider-thumb-color);border-radius:50%}input[type=range]::-moz-range-thumb{height:18px;height:var(--slider-thumb-height);width:18px;width:var(--slider-thumb-height);border:0;background:#444;background:var(--slider-thumb-color);border-radius:50%}input[type=range]::-ms-thumb{height:18px;height:var(--slider-thumb-height);width:18px;width:var(--slider-thumb-height);border:0;background:#444;background:var(--slider-thumb-color);border-radius:50%}.delayed-display{opacity:0!important}.layout-enter-active,.page-enter-active{transition:opacity .2s}.page-enter,.page-leave-to{opacity:0}.layout-leave-active,.page-leave-active{transition:opacity .1s}.layout-enter,.layout-leave-active{opacity:0}',""]),t.exports=n},253:function(t,e,r){t.exports=r.p+"img/utx_ico_menu_23.4f3eb73.png"},254:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o}));var n=function(){return{data:{}}},o={add:function(t,e){t.data[e.route]=e.data}}},271:function(t,e,r){"use strict";r.r(e);var n=r(27),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark fixed-top border-bottom",staticStyle:{"border-color":"black !important"},attrs:{id:"top-nav"}},[n("div",{staticClass:"container-fluid"},[n("NuxtLink",{staticClass:"navbar-brand me-4",attrs:{to:"/"}},[n("img",{staticClass:"img-fluid ps-1",staticStyle:{width:"27px",height:"100%"},attrs:{src:r(253),alt:"logo"}}),t._v(" "),n("b",{staticClass:"ps-1",staticStyle:{color:"white"}},[t._v("Umamusume Database")])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/card"}},[t._v("Characters"),n("span",{staticClass:"sr-only"})])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/support"}},[t._v("Supports")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/skill"}},[t._v("Skills")])],1),t._v(" "),n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("Tools")]),t._v(" "),n("ul",{staticClass:"dropdown-menu dropdown-menu-dark",staticStyle:{"max-width":"220px"},attrs:{"aria-labelledby":"navbarDropdown"}},[n("li",[n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/succession"}},[t._v("Succession")])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/song"}},[t._v("Song Maker")])],1)])]),t._v(" "),n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdown2",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("Other")]),t._v(" "),n("ul",{staticClass:"dropdown-menu dropdown-menu-dark mb-2",staticStyle:{"max-width":"220px"},attrs:{"aria-labelledby":"navbarDropdown2"}},[n("li",[n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/race"}},[t._v("Races")])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/mob"}},[t._v("Mobs")])],1)])])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,null,null);e.default=component.exports}},[[214,15,2,16]]]);