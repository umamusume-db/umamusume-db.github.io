(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{315:function(t,e,n){"use strict";n.r(e);var c,o=n(16),r=n(4),l=(n(44),n(272),n(183),n(29),n(15),n(82),n(282),n(18),n(286),n(288),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(23),n(38),n(56),n(66),n(190),n(304),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(216),n(217),n(218),n(136),n(305),n(191),n(306),n(307),n(28),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$getFetchData,t.error,c=["BasicLiveDataInfo","LivePermissionData","BasicCharaDataInfo"],e.next=4,n(c);case 4:return o=e.sent,e.abrupt("return",{basicLiveData:o.BasicLiveDataInfo,livePermissionData:o.LivePermissionData,basicCharaData:o.BasicCharaDataInfo,selectedSongId:0,partData:{},voiceDict:{},volumeDict:{},pos:["center"],context:new AudioContext,buttonText:["Play","Stop","Download"]});case 6:case"end":return e.stop()}}),e)})))()},computed:{c_chara_list:function(){var t,e=this,n=Object.values(this.basicCharaData).filter((function(t){return 1001===e.selectedSongId||1006===e.selectedSongId?t.cardId:Object.values(e.livePermissionData).find((function(n){return n.musicId===e.selectedSongId&&n.charaId===t.charaId}))}),this),c=[];return n.forEach((function(t){c.find((function(e){return e.charaId===t.charaId}))||c.push(t)})),!c.length||null!==(t=this.partData)&&void 0!==t&&t.selectedSongId||window.fetch("https://umadb.skyset.eu/assets/live/musicscores/m".concat(this.selectedSongId,"/m").concat(this.selectedSongId,"_part.json")).then((function(t){return t.json()})).then((function(t){e.partData[e.selectedSongId]=t;var n=new Set,c=["left","center","right","lleft","rright","left2","right2","left3","right3"];t.forEach((function(time){c.forEach((function(t){parseInt(time[t])>0&&n.add(t)}))}));var o=Array.from(n);e.pos=c.filter((function(t){return o.includes(t)})),e.pos.length>1&&(e.pos.push("all"),e.pos.push("none"))})),c}},methods:{m_mix:function(t,e,n,c,o){for(var r=t.length,l=0,d=0,i=0;i<r;i++)t[i].numberOfChannels>l&&(l=t[i].numberOfChannels),t[i].duration>d&&(d=t[i].duration);for(var h=this.context.createBuffer(l,this.context.sampleRate*d,this.context.sampleRate),m=this.context.sampleRate/1e3,v=0;v<r;v++)for(var _=0;_<t[v].numberOfChannels;_++){var f=h.getChannelData(_),I=t[v].getChannelData(_),w=0,x="all"==c[v]?1:0,S=n[v][w][c[v]]==o[v]?1:x;for(i=0;i<I.length;i++){var D;i>=(null===(D=n[v][w+1])||void 0===D?void 0:D.time)*m&&(w++,S=(S=n[v][w][c[v]]==o[v]?999!=n[v][w]["".concat(c[v],"_vol")]&&parseFloat(n[v][w]["".concat(c[v],"_vol")])?parseFloat(n[v][w]["".concat(c[v],"_vol")]):1:0)||x),f[i]+=I[i]*e[v]*S}}return h},m_export:function(t){for(var e=[t.getChannelData(0),t.getChannelData(1)],n=e[0],c=e[1],o=new Float32Array(n.length+c.length),r=0,l=0;r<n.length;r++,l+=2)o[l]=n[r],o[l+1]=c[r];var d=function(t,e){var n=e.isFloat?Float32Array:Uint16Array,c=t.byteLength/n.BYTES_PER_ELEMENT,o=function(t){var e=t.numFrames,n=t.numChannels||2,c=t.sampleRate||44100,o=t.isFloat?4:2,r=t.isFloat?3:1,l=n*o,d=c*l,h=e*l,m=new ArrayBuffer(44),v=new DataView(m),p=0;function _(s){for(var i=0;i<s.length;i++)v.setUint8(p+i,s.charCodeAt(i));p+=s.length}function f(t){v.setUint32(p,t,!0),p+=4}function I(t){v.setUint16(p,t,!0),p+=2}return _("RIFF"),f(h+36),_("WAVE"),_("fmt "),f(16),I(r),I(n),f(c),f(d),I(l),I(8*o),_("data"),f(h),new Uint8Array(m)}(Object.assign({},e,{numFrames:c})),r=new Uint8Array(o.length+t.byteLength);return r.set(o,0),r.set(new Uint8Array(t),o.length),r}(o.buffer,{isFloat:!0,numChannels:2,sampleRate:48e3}),h=new Blob([d],{type:"audio/wav"}),m=document.createElement("a");m.href=URL.createObjectURL(h),m.setAttribute("download","song_"+this.selectedSongId+"_time_"+Date.now()+".wav"),m.click()},m_url_vol_list:function(){var t=this,e=[];return!0===this.voiceDict[this.selectedSongId+"_instrumental"]&&e.push([this.c_chara_list.length?"https://umadb.skyset.eu/assets/sound/l/".concat(this.selectedSongId,"/snd_bgm_live_").concat(this.selectedSongId,"_oke_01.awb_1.webm"):"https://umadb.skyset.eu/assets/sound/b/snd_bgm_cs".concat(this.selectedSongId,"_gamesize.awb_1.webm"),this.volumeDict[this.selectedSongId+"_instrumental"]/100,[{time:0,center:1}],"center",1]),this.c_chara_list.forEach((function(n){var c="".concat(t.selectedSongId,"_").concat(n.charaId),o=t.voiceDict[c];o&&(e.push(["https://umadb.skyset.eu/assets/sound/l/".concat(t.selectedSongId,"/snd_bgm_live_").concat(t.selectedSongId,"_chara_").concat(n.charaId,"_01.awb_1.webm"),t.volumeDict[c]/100,t.partData[t.selectedSongId],o,1]),1012!==t.selectedSongId&&1032!==t.selectedSongId&&1037!==t.selectedSongId&&1048!==t.selectedSongId||e.push(["https://umadb.skyset.eu/assets/sound/l/".concat(t.selectedSongId,"/snd_bgm_live_").concat(t.selectedSongId,"_chara_").concat(n.charaId,"_01.awb_2.webm"),t.volumeDict[c]/100,t.partData[t.selectedSongId],o,2]))}),this),e},m_play:(c=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,c,r,l,d,h,m=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.buttonText[0]="...",this.$forceUpdate(),e=this.m_url_vol_list(),n=[],c=[],r=[],l=[],d=[],h=0,t.next=11,e.forEach((function(t,e,v){var _=Object(o.a)(t,5),f=_[0],I=_[1],w=_[2],x=_[3],S=_[4];window.fetch(f).then((function(t){return t.arrayBuffer()})).then((function(t){return m.context.decodeAudioData(t)})).then((function(t){if(c.push(I||1),n.push(t),r.push(w),l.push(x),d.push(S),(h+=1)===v.length){m.m_stop();var source=m.context.createBufferSource();source.buffer=m.m_mix(n,c,r,l,d),source.connect(m.context.destination),source.start(),m.buttonText[0]="Play",m.$forceUpdate()}}))}));case 11:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)}),m_stop:function(){this.context.close(),this.context=new AudioContext},m_download:function(){var t=this;this.buttonText[2]="...",this.$forceUpdate();var e=this.m_url_vol_list(),n=[],c=[],r=[],l=[],d=[],h=0;e.forEach((function(e,m,v){var _=Object(o.a)(e,5),f=_[0],I=_[1],w=_[2],x=_[3],S=_[4];window.fetch(f).then((function(t){return t.arrayBuffer()})).then((function(e){return t.context.decodeAudioData(e)})).then((function(e){c.push(I||1),n.push(e),r.push(w),l.push(x),d.push(S),(h+=1)===v.length&&(t.m_export(t.m_mix(n,c,r,l,d)),t.buttonText[2]="Download",t.$forceUpdate())}))}))}}}),d=n(27),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"d-flex w-100 pt-4 pb-3 px-5 sticky-top bg-dark"},[n("div",{staticClass:"input-group border rounded"},[n("button",{staticClass:"input-group-text btn-dark",attrs:{disabled:""}},[t._v("Song")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedSongId,expression:"selectedSongId"}],staticClass:"form-select btn-dark border-start border-end",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedSongId=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"0",disabled:"",selected:""}},[t._v("Select a song...")]),t._v(" "),t._l(t.basicLiveData,(function(e){return n("option",{key:e.musicId,domProps:{value:e.musicId}},[t._v(t._s(e.songNameEnglish||e.songName))])}))],2),t._v(" "),n("button",{staticClass:"input-group-text btn-dark",on:{click:t.m_play}},[t._v("\n        "+t._s(t.buttonText[0])+"\n      ")]),t._v(" "),n("button",{staticClass:"input-group-text btn-dark border-start",on:{click:t.m_stop}},[t._v("\n        "+t._s(t.buttonText[1])+"\n      ")]),t._v(" "),n("button",{staticClass:"input-group-text btn-dark border-start",on:{click:t.m_download}},[t._v("\n        "+t._s(t.buttonText[2])+"\n      ")])])]),t._v(" "),n("div",[n("transition-group",{directives:[{name:"show",rawName:"v-show",value:t.selectedSongId,expression:"selectedSongId"}],staticClass:"border rounded g-0 p-0 m-0",attrs:{name:"transition-list",tag:"ul"}},[n("li",{directives:[{name:"show",rawName:"v-show",value:t.selectedSongId,expression:"selectedSongId"}],key:"instrumental",staticClass:"row g-0 align-items-center p-2"},[n("img",{staticClass:"px-3 col-3",staticStyle:{height:"100%",width:"100%","max-height":"135px","max-width":"135px","object-fit":"contain"},attrs:{src:"https://umadb.skyset.eu/assets/live/jacket/jacket_icon_l_"+t.selectedSongId+".webp",alt:"Instrumental"}}),t._v(" "),n("h3",{staticClass:"text-white col-3"},[t._v("\n          "+t._s(this.c_chara_list.length?"Instrumental":"Jukebox song")+"\n        ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.voiceDict[t.selectedSongId+"_instrumental"],expression:"voiceDict[selectedSongId + '_instrumental']"}],staticClass:"btn-check",attrs:{type:"checkbox",id:"btn-check-instrumental",autocomplete:"off"},domProps:{checked:Array.isArray(t.voiceDict[t.selectedSongId+"_instrumental"])?t._i(t.voiceDict[t.selectedSongId+"_instrumental"],null)>-1:t.voiceDict[t.selectedSongId+"_instrumental"]},on:{change:function(e){var n=t.voiceDict[t.selectedSongId+"_instrumental"],c=e.target,o=!!c.checked;if(Array.isArray(n)){var r=t._i(n,null);c.checked?r<0&&t.$set(t.voiceDict,t.selectedSongId+"_instrumental",n.concat([null])):r>-1&&t.$set(t.voiceDict,t.selectedSongId+"_instrumental",n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.voiceDict,t.selectedSongId+"_instrumental",o)}}}),t._v(" "),n("label",{staticClass:"btn btn-outline-secondary col-3 mx-2",attrs:{for:"btn-check-instrumental"}},[t._v(t._s(t.voiceDict[t.selectedSongId+"_instrumental"]?"On":"Off"))]),t._v(" "),n("div",{staticClass:"col m-2 mx-5"},[n("p",{staticClass:"text-white text-center m-0"},[t._v("\n            Volume :\n            "+t._s(t.volumeDict[t.selectedSongId+"_instrumental"]?t.volumeDict[t.selectedSongId+"_instrumental"]:100)+"%\n          ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.volumeDict[t.selectedSongId+"_instrumental"],expression:"volumeDict[selectedSongId + '_instrumental']"}],staticClass:"w-100",attrs:{type:"range",min:"0",max:"200",step:"5"},domProps:{value:t.volumeDict[t.selectedSongId+"_instrumental"]},on:{__r:function(e){return t.$set(t.volumeDict,t.selectedSongId+"_instrumental",e.target.value)}}})])]),t._v(" "),t._l(t.c_chara_list,(function(e){return n("li",{key:e.charaId,staticClass:"transition-list-item row g-0 align-items-center border-top p-2"},[n("img",{staticClass:"px-3 col-3",staticStyle:{height:"100%",width:"100%","max-height":"135px","max-width":"135px","object-fit":"contain"},attrs:{src:"https://umadb.skyset.eu/assets/chara/chr"+e.charaId+"/chr_icon_"+e.charaId+".webp",alt:e.charaName}}),t._v(" "),n("div",{staticClass:"col-3"},[n("h3",{staticClass:"text-white"},[t._v("\n            "+t._s(e.charaNameEnglish||e.charaName)+"\n          ")]),t._v(" "),n("h5",{staticClass:"text-white"},[t._v("\n            CV : "+t._s(e.charaCvEnglish||e.charaCv)+"\n          ")])]),t._v(" "),n("div",{staticClass:"col-3 mx-2"},[n("div",{staticClass:"input-group w-100"},[t._l(t.pos,(function(c){return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.voiceDict[t.selectedSongId+"_"+e.charaId],expression:"voiceDict[`${selectedSongId}_${chara.charaId}`]"}],key:c,staticClass:"btn-check",attrs:{type:"radio",name:e.charaId,id:"btn-check-"+e.charaId+"-"+c,autocomplete:"off"},domProps:{value:c,checked:t._q(t.voiceDict[t.selectedSongId+"_"+e.charaId],c)},on:{change:function(n){return t.$set(t.voiceDict,t.selectedSongId+"_"+e.charaId,c)}}}),t._v(" "),n("label",{key:c+"_label",staticClass:"input-group-text btn btn-outline-secondary rounded-0 col",attrs:{for:"btn-check-"+e.charaId+"-"+c}},[t._v(t._s(c.replace("rright","far right").replace("lleft","far left")))])]}))],2)]),t._v(" "),n("div",{staticClass:"col m-2 mx-5",staticStyle:{"min-width":"120px"}},[n("p",{staticClass:"text-white text-center m-0"},[t._v("\n            Volume :\n            "+t._s(t.volumeDict[t.selectedSongId+"_"+e.charaId]?t.volumeDict[t.selectedSongId+"_"+e.charaId]:100)+"%\n          ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.volumeDict[t.selectedSongId+"_"+e.charaId],expression:"volumeDict[selectedSongId + '_' + chara.charaId]"}],staticClass:"w-100",attrs:{type:"range",min:"0",max:"200",step:"5"},domProps:{value:t.volumeDict[t.selectedSongId+"_"+e.charaId]},on:{__r:function(n){return t.$set(t.volumeDict,t.selectedSongId+"_"+e.charaId,n.target.value)}}})])])}))],2)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);