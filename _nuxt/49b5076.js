(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{745:function(t,n,c){t.exports=c.p+"img/utx_ico_strong_star_01.58c1010.png"},746:function(t,n,c){t.exports=c.p+"img/utx_ico_strong_star_00.cc2c577.png"},747:function(t,n,c){var map={"./bg_0001_01110.png":748,"./bg_0002_00110.png":749,"./bg_0003_00110.png":750,"./bg_0004_00110.png":751,"./bg_0005_00110.png":752,"./bg_0007_00110.png":753,"./bg_0010_00111.png":754,"./bg_0012_00010.png":755,"./bg_0014_00110.png":756,"./bg_0015_00110.png":757,"./bg_0016_00110.png":758,"./bg_0019_00110.png":759,"./bg_0022_00110.png":760,"./bg_0053_00110.png":761,"./bg_0056_00111.png":762,"./bg_0070_00110.png":763,"./bg_0074_00110.png":764,"./bg_0112_00110.png":765,"./bg_0113_00110.png":766,"./bg_0126_00110.png":767,"./bg_0127_00120.png":768};function r(t){var n=e(t);return c(n)}function e(t){if(!c.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=e,t.exports=r,r.id=747},748:function(t,n,c){t.exports=c.p+"img/bg_0001_01110.2b36f8b.png"},749:function(t,n,c){t.exports=c.p+"img/bg_0002_00110.f5af7d2.png"},750:function(t,n,c){t.exports=c.p+"img/bg_0003_00110.d705897.png"},751:function(t,n,c){t.exports=c.p+"img/bg_0004_00110.609b6bc.png"},752:function(t,n,c){t.exports=c.p+"img/bg_0005_00110.ce71769.png"},753:function(t,n,c){t.exports=c.p+"img/bg_0007_00110.668745f.png"},754:function(t,n,c){t.exports=c.p+"img/bg_0010_00111.e4fe8eb.png"},755:function(t,n,c){t.exports=c.p+"img/bg_0012_00010.1564c9e.png"},756:function(t,n,c){t.exports=c.p+"img/bg_0014_00110.c3d41d5.png"},757:function(t,n,c){t.exports=c.p+"img/bg_0015_00110.9239c5e.png"},758:function(t,n,c){t.exports=c.p+"img/bg_0016_00110.1cae788.png"},759:function(t,n,c){t.exports=c.p+"img/bg_0019_00110.2c5bb23.png"},760:function(t,n,c){t.exports=c.p+"img/bg_0022_00110.74c051b.png"},761:function(t,n,c){t.exports=c.p+"img/bg_0053_00110.39ea0cf.png"},762:function(t,n,c){t.exports=c.p+"img/bg_0056_00111.e53811f.png"},763:function(t,n,c){t.exports=c.p+"img/bg_0070_00110.1de83e1.png"},764:function(t,n,c){t.exports=c.p+"img/bg_0074_00110.9900168.png"},765:function(t,n,c){t.exports=c.p+"img/bg_0112_00110.7df1abc.png"},766:function(t,n,c){t.exports=c.p+"img/bg_0113_00110.63274ed.png"},767:function(t,n,c){t.exports=c.p+"img/bg_0126_00110.6e7a976.png"},768:function(t,n,c){t.exports=c.p+"img/bg_0127_00120.1ef8cbf.png"},906:function(t,n,c){"use strict";c.r(n);var r=c(5),e=(c(28),c(182),c(43),c(56),c(66),c(33),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,e,o,l,d,_,f,m,v,h,x,C;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.$getFetchData,e=t.params,l=["BasicCardDataInfo","BasicCharaDataInfo","CharaData","BasicSupportCardDataInfo","CardData","CardRarityData","BackgroundData","CondensedSkillDataInfo"],n.next=4,r(l);case 4:return d=n.sent,o=e.cardId?d.BasicCardDataInfo.find((function(t){return t.cardId===e.cardId})):d.BasicCardDataInfo.find((function(t){return t.cardName===e.cardName})),_=d.CharaData.find((function(t){return t.id===o.charaId})),f=d.BasicCharaDataInfo.find((function(t){return t.charaId===o.charaId})),m=d.CardData.find((function(t){return t.id===o.cardId})),v=d.CondensedSkillDataInfo,h=v.filter((function(t){var n;return null===(n=t.cardIds)||void 0===n?void 0:n.includes(o.cardId)})),x=d.BackgroundData.find((function(t){return t.id===m.bgId})),C=("0000"+x.bgId).slice(-4)+"_"+("00000"+x.bgSub).slice(-5),n.abrupt("return",{bcd:o,chd:_,bchd:f,bcdi:d.BasicCardDataInfo,bscdi:d.BasicSupportCardDataInfo,cd:m,csd:h,cr5d:d.CardRarityData.filter((function(t){return 5===t.rarity})),baseLimit:3,limit:3,backgroundStyleObject:{position:"absolute",minHeight:"100%",background:"linear-gradient(rgba(55, 55, 55, .5), rgba(155, 155, 155, .5)),url("+c(747)("./bg_".concat(C,".png"))+")",opacity:"1",backgroundSize:"cover"}});case 14:case"end":return n.stop()}}),n)})))()},watch:{limit:function(){this.limit=Math.max(this.limit,this.baseLimit)}},computed:{}}),o=c(27),component=Object(o.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row g-0",staticStyle:{position:"relative"}},[r("div",{style:t.backgroundStyleObject}),t._v(" "),r("div",{staticClass:"col-1 px-5 pt-1 pb-4",staticStyle:{width:"256px",padding:"0 16 0 0px"}},[r("div",{staticClass:"position-relative"},[r("img",{staticClass:"card-img-top notDraggable",attrs:{src:c(428)("./chr_icon_"+t.bcd.charaId+"_"+t.bcd.cardId+"_02.png"),alt:"chara_icon"}}),t._v(" "),r("div",{staticStyle:{position:"absolute",bottom:"16px",left:"66px"}},[t._l(5,(function(n){return r("img",{staticClass:"notDraggable",style:"max-width: 34px;position: absolute;left :"+(62+-22*n)+"px",attrs:{src:[6-n>t.limit?c(745):c(746)],alt:"strong_star"}})})),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.limit,expression:"limit"}],staticStyle:{position:"absolute",height:"34px",width:"120px",left:"-48px",opacity:"0",cursor:"pointer"},attrs:{type:"range",name:"limit_range",min:"1",max:"5",step:"1"},domProps:{value:t.limit},on:{__r:function(n){t.limit=n.target.value}}})],2)])]),t._v(" "),r("div",{staticClass:"col row g-0",staticStyle:{"z-index":"1","align-content":"space-around"}},[r("div",{staticClass:"col-md-6 col-12"},[r("div",{staticStyle:{"text-align":"center"}},[r("h5",{staticClass:"card-title fw-bold fs-4",attrs:{id:"outline"}},[t._v(t._s(t.bcd.cardTitle))]),t._v(" "),r("h5",{staticClass:"card-title fw-bold fs-4",attrs:{id:"outline"}},[t._v(t._s(t.bcd.cardName))])])]),t._v(" "),r("div",{staticClass:"col-md-6 col-12"},[r("div",{staticStyle:{"text-align":"center"}},[r("h5",{staticClass:"card-title fw-bold fs-4",attrs:{id:"outline"}},[t._v("CV : "+t._s(t.bchd.charaCv))]),t._v(" "),r("h5",{staticClass:"card-title fw-bold fs-4",attrs:{id:"outline"}},[t._v("Birth Date : "+t._s(t.chd.birthYear)+" / "+t._s(t.chd.birthMonth)+" / "+t._s(t.chd.birthDay))])])])])]),t._v(" "),r("div",{staticClass:"card-body row g-0 p-0",staticStyle:{"background-color":"rgb(242,243,242)"}},[r("div",{staticClass:"col-md-10 col-12"},[r("div",{staticClass:"card rounded m-3 list-group-horizontal",staticStyle:{"border-color":"rgb(121,216,35)"}},t._l(t.c_stats,(function(n,c,e){return r("div",{staticClass:"col list-group-item p-0",staticStyle:{"border-color":"rgb(97,200,23)"}},[r("div",{staticClass:"p-2",staticStyle:{"background-color":"rgb(121,216,35)",height:"40px"}},[r("div",{staticStyle:{position:"absolute"}},[r("img",{staticClass:"px-2",staticStyle:{"object-fit":"contain",height:"22px"},attrs:{src:"/static/icons/charastatus/utx_ico_charastatus_w_0"+e+".png",alt:t.bcd.cardName}}),t._v(" "),r("b",{staticStyle:{color:"white"}},[t._v(t._s(t.bcd.cardName))])])]),t._v(" "),r("img",{staticClass:"p-1",staticStyle:{"object-fit":"contain",height:"34px"},attrs:{src:"/static/icons/fullstatusrank/utx_ico_statusrank_0"+t.m_img_stat(n)+".png",alt:t.bcd.cardName}}),t._v(" "),r("b",{staticClass:"m-1 fs-6",staticStyle:{float:"right"}},[t._v("[[stat]] /1200")])])})),0),t._v(" "),r("ul",{staticClass:"list-group m-3",attrs:{id:"v-for-object"}},t._l(t.lines,(function(line,n){return r("li",{staticClass:"list-group-item border-0 pb-0",staticStyle:{"background-color":"transparent"}},[r("div",{staticClass:"row"},[t._m(0,!0),t._v(" "),t._l(line,(function(n){return r("div",{staticClass:"col-2",staticStyle:{"min-width":"116px","padding-right":"0"}},[r("p",{staticClass:"border rounded row",staticStyle:{"margin-right":"5px","background-color":"rgba(255,255,255,.7)","text-align":"center","max-width":"116px",height:"30px"}},[n.ni?r("img",{staticStyle:{padding:"2px 0 0 0",width:"60%","object-fit":"contain",height:"26px"},attrs:{src:"/static/icons/"+n.ni,alt:n.n}}):r("b",{staticClass:"col",staticStyle:{padding:"2px 0 0 0",width:"45%"}},[t._v("[[icons.n]]")]),t._v(" "),n.vi?r("img",{staticStyle:{width:"40%","object-fit":"contain",height:"28px"},attrs:{src:"/static/icons/"+n.vi,alt:n.v}}):r("b",{staticClass:"col",staticStyle:{padding:"2px 0 0 0",width:"40%"}},[t._v("[[icons.v]]")])])])}))],2)])})),0)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("ul",{staticClass:"list-group-horizontal row g-0 p-0 m-0",staticStyle:{padding:"0px 16px"},attrs:{id:"v-for-object"}},t._l(t.csd,(function(n){return r("li",{staticClass:"list-group-item col-md-6 col-12 border-0 border-top"},[r("Skill",{key:n.skillId,attrs:{skill:n,bcdi:t.bcdi,bscdi:t.bscdi,cr5d:t.cr5d}})],1)})),0)])])}),[function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"col-md-1 col-12",staticStyle:{"min-width":"110px"}},[c("b",[t._v("[[name]]")])])},function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"col-md-2 col-12 p-3 ps-md-0 ps-3"},[c("div",{staticClass:"card text-center"},[c("div",{staticClass:"card-header"},[c("b",[t._v("Best parents")])])])])},function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"card-header",staticStyle:{"text-align":"center"}},[c("h5",[t._v("Skills")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Skill:c(902).default})}}]);