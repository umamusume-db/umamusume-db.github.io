(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{272:function(t,l,e){var r=e(3),c=e(183).values;r({target:"Object",stat:!0},{values:function(t){return c(t)}})},273:function(t,l,e){e(274)},274:function(t,l,e){"use strict";var r=e(3),c=e(22),n=e(100),o=e(101),d=e(184),h=e(6),_=e(34),v=h("replace"),m=RegExp.prototype,f=Math.max,k=function(t,l,e){return e>t.length?-1:""===l?e:t.indexOf(l,e)};r({target:"String",proto:!0},{replaceAll:function(t,l){var e,r,h,C,x,y,S,w,I=c(this),D=0,E=0,j="";if(null!=t){if((e=n(t))&&!~String(c("flags"in m?t.flags:o.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=t[v]))return r.call(t,I,l);if(_&&e)return String(I).replace(t,l)}for(h=String(I),C=String(t),(x="function"==typeof l)||(l=String(l)),y=C.length,S=f(1,y),D=k(h,C,0);-1!==D;)w=x?String(l(C,D,h)):d(C,h,D,[],void 0,l),j+=h.slice(E,D)+w,E=D+y,D=k(h,C,D+S);return E<h.length&&(j+=h.slice(E)),j}})},276:function(t,l,e){"use strict";e.r(l);e(48),e(67),e(56),e(66),e(185),e(82),e(182),e(29),e(272),e(43),e(133),e(83),e(186),e(273);var r={props:["skill","stat_gain","bcdi","bscdi","cr5d"],mounted:function(){var t;if(this.skill.skillDescEnglish=null===(t=this.skill.skillDescEnglish)||void 0===t?void 0:t.replace("\\n","").replace(/<\/?[^>]+(>|$)/g,""),this.skill.skillDescEnglish&&this.skill.skillDescEnglish.includes("・")){var l=this.skill.skillDescEnglish.split("・");this.skill.skillNameEnglish="[".concat(l[0],"] ").concat(this.skill.skillNameEnglish),this.skill.skillDescEnglish=l[1]}this.stat_gain&&(this.skill=this.statGain())},methods:{customFind:function(t,l,e,r){return t.find((function(t){return t[l]==e}))[r]},statGain:function(){var t="";return Object.values(this.skill).forEach((function(l){var e=l.hintValue1>5?5:l.hintValue1-1;t+=["Speed","Stamina","Power","Guts","Wisdom","Skill points"][e]+" +"+l.hintValue2+"\n"})),{name:"Stat Gain Hint",description:t,need_point:-2,icon_id:"stat_gain"}}},computed:{c_skill_detail:function(){var t={1:"Raw Speed",2:"Raw Stamina",3:"Raw Power",4:"Raw Guts",5:"Raw Inteligence",8:"Visible Distance",9:"Stamina",10:"Starting Gate Delay",13:"Frantic Time",21:"Current Speed",27:"Target Speed",28:"Lane Move Speed",31:"Acceleration"},l=[["abilityType","Effect"],["condition","Activation Condition"],["floatAbilityTime","Duration"],["floatAbilityValue","Effect Value"],["gradeValue","Rank Value"],["needSkillPoint","Base Cost"],["skillId","ID"]];return Object.entries(this.skill).filter((function(e){return l.some((function(l){var r=l[0];if(!e[0].startsWith(r))return 0;var c=e[0].match("[a-z]2")?"2nd ":"",n=e[0].match("2$")?" 2":e[0].match("3$")?" 3":"";return e[0]=c+l[1].replace("Effect","Effect"+n),r.startsWith("condition")?(e[1]=e[1].replaceAll("&","\n&").replaceAll("@","\n\n"),e[1].length>0):r.startsWith("abilityType")?e[1]<=0?0:(e[1]=t[e[1]]?t[e[1]]+" Buff":e[1],1):r.startsWith("needSkillPoint")?e[1]>0:r.startsWith("float")?(e[1]/=1e4,r.startsWith("floatAbilityTime")?e[1]>0?(e[1]+="s",1):0:0!=e[1]):1}))}))}}},c=e(27),component=Object(c.a)(r,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[e("div",{staticClass:"bg-white row g-0"},[e("div",{staticClass:"col-3 p-2"},[e("img",{staticStyle:{"max-height":"92px",height:"92px",width:"100%","object-fit":"contain"},attrs:{src:"https://umadb.skyset.eu/assets/outgame/skillicon/utx_ico_skill_"+t.skill.iconId+".webp",alt:"skill_icon_"+t.skill.iconId}}),t._v(" "),t.stat_gain?t._e():e("div",{staticClass:"text-center"},[e("a",{attrs:{"data-bs-toggle":"modal","data-bs-target":"#modal_skill_"+t.skill.skillId}},[e("p",{staticClass:"uma-text",staticStyle:{"text-decoration":"underline",cursor:"pointer"}},[t._v("\n            Details\n          ")])])])]),t._v(" "),e("div",{staticClass:"col-9"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("\n          "+t._s(t.skill.skillNameEnglish||t.skill.skillName)+"\n        ")]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("\n          "+t._s(t.skill.skillDescEnglish||t.skill.skillDesc)+"\n        ")]),t._v(" "),-1==t.skill.need_point?e("p",{staticClass:"card-text text-end"},[e("small",[t._v("Unique Skill : "+t._s(t.skill.unique_source.name))])]):t._e(),t._v(" "),-2!=t.skill.need_point&&(t.skill.cardIds||t.skill.supportCardIds)?e("p",{staticClass:"card-text"},[e("span",[t._v("From : ")]),t._v(" "),t.skill.cardIds?e("span",{staticClass:"atooltip"},[t._v("Characters\n            "),e("div",{staticClass:"atooltiptext"},t._l(t.skill.cardIds.split(","),(function(l){return e("NuxtLink",{key:l,attrs:{to:"/card/"+l}},[e("img",{staticStyle:{height:"64px",margin:"0 2px 5px 2px",color:"white"},attrs:{loading:"lazy",src:"https://umadb.skyset.eu/assets/chara/chr"+t.customFind(t.bcdi,"cardId",l,"charaId")+"/chr_icon_"+t.customFind(t.bcdi,"cardId",l,"charaId")+"_"+t.customFind(t.cr5d,"cardId",l,"raceDressId")+"_02.webp",alt:l}})])})),1)]):t._e(),t._v(" "),t.skill.cardIds&&t.skill.supportCardIds?e("span",[t._v(", ")]):t._e(),t._v(" "),t.skill.supportCardIds?e("span",{staticClass:"atooltip"},[t._v("Supports\n            "),e("div",{staticClass:"atooltiptext"},t._l(t.skill.supportCardIds.split(",").sort().reverse(),(function(t){return e("NuxtLink",{key:t,attrs:{to:"/support/"+t}},[e("img",{staticStyle:{height:"60px",margin:"5px 2px"},attrs:{loading:"lazy",src:"https://umadb.skyset.eu/assets/supportcard/support"+t+"/support_card_s_"+t+".webp",alt:t}})])})),1)]):t._e()]):t._e()])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"modal_skill_"+t.skill.skillId,tabindex:"-1","aria-labelledby":"ModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable",staticStyle:{"max-width":"720px"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("img",{staticStyle:{"max-height":"58px",width:"auto","object-fit":"contain","margin-right":"16px"},attrs:{src:"https://umadb.skyset.eu/assets/outgame/skillicon/utx_ico_skill_"+t.skill.iconId+".webp"}}),t._v(" "),e("div",[e("h3",{staticClass:"modal-title"},[t._v(t._s(t.skill.skillNameEnglish))])]),t._v(" "),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"p-2 mb-3"},[t._v("\n            "+t._s(t.skill.skillDescEnglish)+"\n          ")]),t._v(" "),e("ul",{staticClass:"list-group"},t._l(t.c_skill_detail,(function(l){var r=l[0],data=l[1];return e("li",{key:r,staticClass:"list-group-item g-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col text-center"},[t._v(t._s(r))]),t._v(" "),e("div",{staticClass:"text-center text-break col border-start",staticStyle:{"white-space":"pre-line"}},[t._v(t._s(data)+"\n                ")])])])})),0)])])])])])}),[],!1,null,null,null);l.default=component.exports},290:function(t,l,e){"use strict";e.r(l);var r=e(4),c=(e(28),e(182),e(43),e(56),e(66),e(35),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function l(){var e,r,c,n,o,d,h,_,v,m,f,k,C;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return e=t.$getFetchData,r=t.params,n=["CondensedSkillDataInfo","BasicCardDataInfo","BasicCharaDataInfo","CharaData","BasicSupportCardDataInfo","CardData","CardRarityData","BackgroundData","AvailableSkillSet"],l.next=4,e(n);case 4:return o=l.sent,c=r.cardId?o.BasicCardDataInfo.find((function(t){return t.cardId==r.cardId})):o.BasicCardDataInfo.find((function(t){return t.cardNameEnglish==r.cardNameEnglish})),d=o.CharaData.find((function(t){return t.id==c.charaId})),h=o.BasicCharaDataInfo.find((function(t){return t.charaId==c.charaId})),_=o.CardData.find((function(t){return t.id==c.cardId})),v=o.CondensedSkillDataInfo,m=v.filter((function(t){var l;return null===(l=t.cardIds)||void 0===l?void 0:l.includes(c.cardId)})),f=o.BackgroundData.find((function(t){return t.id==_.bgId})),k=("0000"+f.bgId).slice(-4)+"_"+("00000"+f.bgSub).slice(-5),C=o.AvailableSkillSet.filter((function(t){return t.availableSkillSetId==_.availableSkillSetId})),l.abrupt("return",{bcd:c,chd:d,bchd:h,bcdi:o.BasicCardDataInfo,bscdi:o.BasicSupportCardDataInfo,cd:_,csd:m,cr5d:o.CardRarityData.filter((function(t){return 5==t.rarity})),crd:o.CardRarityData.filter((function(t){return 5==t.rarity&&t.cardId==r.cardId}))[0],ass:C,baseLimit:3,limit:3,backgroundStyleObject:{position:"absolute",minHeight:"100%",background:'linear-gradient(rgba(55, 55, 55, .5), rgba(155, 155, 155, .5)),url("https://umadb.skyset.eu/assets/bg/bg_'.concat(k,'.webp")'),opacity:"1",backgroundSize:"cover"},lines:{}});case 15:case"end":return l.stop()}}),l)})))()},watch:{limit:function(){this.limit=Math.max(this.limit,this.baseLimit)}},computed:{c_stats:function(){return{}}}}),n=e(27),component=Object(n.a)(c,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row g-0",staticStyle:{position:"relative"}},[e("div",{style:t.backgroundStyleObject}),t._v(" "),e("div",{staticClass:"col-1 px-5 pt-1 pb-4",staticStyle:{width:"256px",padding:"0 16 0 0px"}},[e("div",{staticClass:"position-relative"},[e("img",{staticClass:"card-img-top notDraggable",attrs:{src:"https://umadb.skyset.eu/assets/chara/chr"+t.bcd.charaId+"/chr_icon_"+t.bcd.charaId+"_"+t.crd.raceDressId+"_02.webp",alt:"chara_icon"}}),t._v(" "),e("div",{staticStyle:{position:"absolute",bottom:"16px",left:"66px"}},[t._l(5,(function(l){return e("img",{key:l,staticClass:"notDraggable",style:"max-width: 34px;position: absolute;left :"+(62+-22*l)+"px",attrs:{src:[6-l>t.limit?"https://umadb.skyset.eu/assets/atlas/common/utx_ico_strong_star_01.webp":"https://umadb.skyset.eu/assets/atlas/common/utx_ico_strong_star_00.webp"],alt:"strong_star"}})})),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.limit,expression:"limit"}],staticStyle:{position:"absolute",height:"34px",width:"120px",left:"-48px",opacity:"0",cursor:"pointer"},attrs:{type:"range",name:"limit_range",min:"1",max:"5",step:"1"},domProps:{value:t.limit},on:{__r:function(l){t.limit=l.target.value}}})],2)])]),t._v(" "),e("div",{staticClass:"col row g-0",staticStyle:{"z-index":"1","align-content":"space-around"}},[e("div",{staticClass:"col-md-6 col-12"},[e("div",{staticStyle:{"text-align":"center"}},[e("h5",{staticClass:"card-title fw-bold fs-4",attrs:{id:"outline"}},[t._v("\n              "+t._s(t.bcd.cardTitleEnglish)+"\n            ")]),t._v(" "),e("h5",{staticClass:"card-title fw-bold fs-4",attrs:{id:"outline"}},[t._v("\n              "+t._s(t.bcd.cardNameEnglish)+"\n            ")])])]),t._v(" "),e("div",{staticClass:"col-md-6 col-12"},[e("div",{staticStyle:{"text-align":"center"}},[e("h5",{staticClass:"card-title fw-bold fs-4",attrs:{id:"outline"}},[t._v("\n              CV : "+t._s(t.bchd.charaCv)+"\n            ")]),t._v(" "),e("h5",{staticClass:"card-title fw-bold fs-4",attrs:{id:"outline"}},[t._v("\n              Birth Date : "+t._s(t.chd.birthYear)+" / "+t._s(t.chd.birthMonth)+" /\n              "+t._s(t.chd.birthDay)+"\n            ")])])])])]),t._v(" "),e("div",{staticClass:"card-body row g-0 p-0",staticStyle:{"background-color":"rgb(242,243,242)"}},[e("div",{staticClass:"col-md-10 col-12"},[e("div",{staticClass:"card rounded m-3 list-group-horizontal",staticStyle:{"border-color":"rgb(121,216,35)"}},t._l(t.c_stats,(function(l,r,c){return e("div",{key:c,staticClass:"col list-group-item p-0",staticStyle:{"border-color":"rgb(97,200,23)"}},[e("div",{staticClass:"p-2",staticStyle:{"background-color":"rgb(121,216,35)",height:"40px"}},[e("div",{staticStyle:{position:"absolute"}},[e("img",{staticClass:"px-2",staticStyle:{"object-fit":"contain",height:"22px"},attrs:{src:"/static/icons/charastatus/utx_ico_charastatus_w_0"+c+".webp",alt:t.bcd.cardNameEnglish}}),t._v(" "),e("b",{staticStyle:{color:"white"}},[t._v(t._s(t.bcd.cardNameEnglish))])])]),t._v(" "),e("img",{staticClass:"p-1",staticStyle:{"object-fit":"contain",height:"34px"},attrs:{src:"/static/icons/fullstatusrank/utx_ico_statusrank_0"+t.m_img_stat(l)+".webp",alt:t.bcd.cardNameEnglish}}),t._v(" "),e("b",{staticClass:"m-1 fs-6",staticStyle:{float:"right"}},[t._v("[[stat]] /1200")])])})),0),t._v(" "),e("ul",{staticClass:"list-group m-3",attrs:{id:"v-for-object"}},t._l(t.lines,(function(line,l){return e("li",{key:l,staticClass:"list-group-item border-0 pb-0",staticStyle:{"background-color":"transparent"}},[e("div",{staticClass:"row"},[t._m(0,!0),t._v(" "),t._l(line,(function(l){return e("div",{key:l,staticClass:"col-2",staticStyle:{"min-width":"116px","padding-right":"0"}},[e("p",{staticClass:"border rounded row",staticStyle:{"margin-right":"5px","background-color":"rgba(255,255,255,.7)","text-align":"center","max-width":"116px",height:"30px"}},[l.ni?e("img",{staticStyle:{padding:"2px 0 0 0",width:"60%","object-fit":"contain",height:"26px"},attrs:{src:"/static/icons/"+l.ni,alt:l.n}}):e("b",{staticClass:"col",staticStyle:{padding:"2px 0 0 0",width:"45%"}},[t._v("[[icons.n]]")]),t._v(" "),l.vi?e("img",{staticStyle:{width:"40%","object-fit":"contain",height:"28px"},attrs:{src:"/static/icons/"+l.vi,alt:l.v}}):e("b",{staticClass:"col",staticStyle:{padding:"2px 0 0 0",width:"40%"}},[t._v("[[icons.v]]")])])])}))],2)])})),0)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("ul",{staticClass:"list-group-horizontal row g-0 p-0 m-0",staticStyle:{padding:"0px 16px"},attrs:{id:"v-for-object"}},t._l(t.csd,(function(l){return e("li",{key:l.skillId,staticClass:"list-group-item col-md-6 col-12 border-0 border-top"},[e("Skill",{key:l.skillId,attrs:{skill:l,bcdi:t.bcdi,bscdi:t.bscdi,cr5d:t.cr5d}})],1)})),0)])])}),[function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"col-md-1 col-12",staticStyle:{"min-width":"110px"}},[e("b",[t._v("[[name]]")])])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"col-md-2 col-12 p-3 ps-md-0 ps-3"},[e("div",{staticClass:"card text-center"},[e("div",{staticClass:"card-header"},[e("b",[t._v("Best parents")])])])])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"card-header",staticStyle:{"text-align":"center"}},[e("h5",[t._v("Skills")])])}],!1,null,null,null);l.default=component.exports;installComponents(component,{Skill:e(276).default})}}]);