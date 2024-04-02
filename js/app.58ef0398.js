(function(){"use strict";var e={9506:function(e,a,t){var n=t(9242),o=t(2483),l=t(3396),r=t(7139),s=t(4870);const i=e=>{(0,l.bv)((()=>document.title=`Nadin Soft - ${e}`))};var c=i;const u={class:"container"},d=["textContent"],m=["dir"];var v={__name:"Home",setup(e){c("Dashboard");const a=(0,s.iH)(localStorage.getItem("userName")||"user"),t=(0,s.iH)(),n=(0,s.iH)(),o=(0,s.iH)();let i=(0,s.iH)();const v=()=>{t.value=(new Date).getHours(),n.value=(new Date).getMinutes(),t.value<10&&(t.value=`0${t.value}`),n.value<10&&(n.value=`0${n.value}`),i.value=`${t.value}:${n.value}`};return v(),setInterval(v,1e3),t.value<12?o.value="morning":t.value<13?o.value="noon":t.value<18?o.value="afternoon":t.value<=20?o.value="evening":t.value>20&&(o.value="night"),(e,t)=>((0,l.wg)(),(0,l.iD)("section",u,[(0,l._)("h1",{class:"home-clock",textContent:(0,r.zw)((0,s.SU)(i))},null,8,d),(0,l._)("p",{class:"title-lg",dir:"persian"==e.$i18n.locale?"rtl":"ltr"},(0,r.zw)(e.$t(`good ${o.value}`))+" "+(0,r.zw)(a.value),9,m)]))}},h=t(89);const p=(0,h.Z)(v,[["__scopeId","data-v-fae3d85c"]]);var g=p,w=(t(560),t(681)),f=t(3318);const _={class:"container"},b={class:"title-lg"},y={class:"form-group"},k={for:"new-todo"},z=(0,l._)("input",{type:"submit",class:"btn",value:"add"},null,-1),$={class:"title-md subline"},S={key:0,class:"todos"},H=["onClick","textContent"],j={class:"todo-item-btn"},D=["onClick"],K=["onClick"],C={key:1};var O={__name:"Todos",setup(e){c("Todos");const a=(0,s.iH)(""),t=[{done:!1,content:"Write a blog post"}],o=JSON.parse(localStorage.getItem("todos"))||t,i=(0,s.iH)(o);function u(){a.value.trim()&&(i.value.push({done:!1,content:a.value}),a.value=""),h()}const d=e=>{e.done=!e.done,h()},m=e=>{i.value.splice(e,1),h()},v=e=>{a.value=i.value[e].content,m(e),h()},h=()=>{const e=JSON.stringify(i.value);localStorage.setItem("todos",e)};return(e,t)=>((0,l.wg)(),(0,l.iD)("div",_,[(0,l._)("h1",b,(0,r.zw)(e.$t("to do")),1),(0,l._)("form",{onSubmit:t[1]||(t[1]=(0,n.iM)((e=>u()),["prevent"]))},[(0,l._)("div",y,[(0,l._)("label",k,(0,r.zw)(e.$t("enter to do")),1),(0,l.wy)((0,l._)("input",{id:"new-todo","onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),autocomplete:"off",placeholder:"new to do"},null,512),[[n.nr,a.value]])]),z],32),(0,l._)("h2",$,(0,r.zw)(e.$t("to do list")),1),0!=i.value.length?((0,l.wg)(),(0,l.iD)("ul",S,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.value,((e,a)=>((0,l.wg)(),(0,l.iD)("li",{key:a,class:"todo-item"},[(0,l._)("span",{class:(0,r.C_)({done:e.done}),onClick:a=>d(e),textContent:(0,r.zw)(e.content)},null,10,H),(0,l._)("div",j,[(0,l._)("button",{onClick:e=>v(a),class:"btn"},[(0,l.Wm)((0,s.SU)(f.Z))],8,D),(0,l._)("button",{onClick:e=>m(a),class:"btn"},[(0,l.Wm)((0,s.SU)(w.Z))],8,K)])])))),128))])):(0,l.kq)("",!0),0===i.value.length?((0,l.wg)(),(0,l.iD)("h4",C,(0,r.zw)(e.$t("empty list")),1)):(0,l.kq)("",!0)]))}};const U=O;var W=U;const I={class:"container container-sm"},M={class:"title-lg jj"},x={class:"form-group"},P={for:"city-name"},Z={key:0,class:"error"},N={key:1,class:"weather"},Y=["src"],L={class:"weather-temperature"},T={class:"weather-city"};var A={__name:"Weather",setup(e){c("Weather");const a=e=>`https://murphyslaw.github.io/hosted-assets/weather/${e.toLowerCase()}.png`,t=async e=>{const a=`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=16a38d83af836c90ee6837bcc746a9d6`;let t={};try{const e=await fetch(a);if(t=await e.json(),!e.ok||200!==t.cod)throw new Error(t.message||"Network response was not OK")}catch(n){throw new Error("Unable to fetch weather data",{cause:n})}return t},o=(0,s.iH)(),i=(0,s.iH)(),u=(0,s.iH)({city:null,temperature:null,icon:null});return(0,l.YP)(i,(async()=>{try{const e=await t(i.value);u.value.city=e.name,u.value.temperature=Math.round(e.main.temp),u.value.icon=a(e.weather[0].main)}catch(e){o.value=e.message}})),(e,a)=>((0,l.wg)(),(0,l.iD)("div",I,[(0,l._)("h1",M,(0,r.zw)(e.$t("weather")),1),(0,l._)("div",x,[(0,l._)("label",P,(0,r.zw)(e.$t("enter city name")),1),(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e),placeholder:"city name",spellcheck:"false",autofocus:"",id:"city-name"},null,512),[[n.nr,i.value,void 0,{lazy:!0,trim:!0}]])]),o.value?((0,l.wg)(),(0,l.iD)("div",Z,[(0,l._)("p",null,(0,r.zw)(o.value),1)])):(0,l.kq)("",!0),!o.value&&u.value.city?((0,l.wg)(),(0,l.iD)("div",N,[(0,l._)("img",{class:"weather-icon",src:u.value.icon,alt:"weather-icon"},null,8,Y),(0,l._)("h1",L,(0,r.zw)(u.value.temperature)+"°C",1),(0,l._)("h2",T,(0,r.zw)(u.value.city),1)])):(0,l.kq)("",!0)]))}};const q=A;var G=q;const Q={class:"container container-sm"},V={class:"title-lg"},E={class:"form-group"},F={for:"name"},J={class:"form-group"},B={for:"theme"},R={value:"dark",selected:""},X={value:"light"},ee={class:"form-group"},ae={for:"locale"},te=["value"],ne=(0,l._)("input",{type:"submit",class:"btn",value:"save"},null,-1);var oe={__name:"Profile",setup(e){c("Profile");const a=(0,s.iH)(localStorage.getItem("userName")||""),t=(0,s.iH)(localStorage.getItem("theme")||"dark");function o(){localStorage.setItem("userName",a.value),localStorage.setItem("theme",t.value),window.document.body.dataset.theme=t.value}return window.document.body.dataset.theme=localStorage.getItem("theme"),(e,s)=>((0,l.wg)(),(0,l.iD)("div",Q,[(0,l._)("h1",V,(0,r.zw)(e.$t("profile")),1),(0,l._)("form",{onSubmit:s[3]||(s[3]=(0,n.iM)((e=>o()),["prevent"]))},[(0,l._)("div",E,[(0,l._)("label",F,(0,r.zw)(e.$t("enter name")),1),(0,l.wy)((0,l._)("input",{id:"name",placeholder:"name",spellcheck:"false",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=e=>a.value=e),required:""},null,512),[[n.nr,a.value,void 0,{trim:!0}]])]),(0,l._)("div",J,[(0,l._)("label",B,(0,r.zw)(e.$t("select theme")),1),(0,l.wy)((0,l._)("select",{id:"theme","onUpdate:modelValue":s[1]||(s[1]=e=>t.value=e)},[(0,l._)("option",R,(0,r.zw)(e.$t("dark")),1),(0,l._)("option",X,(0,r.zw)(e.$t("light")),1)],512),[[n.bM,t.value]])]),(0,l._)("div",ee,[(0,l._)("label",ae,(0,r.zw)(e.$t("select locale")),1),(0,l.wy)((0,l._)("select",{id:"locale","onUpdate:modelValue":s[2]||(s[2]=a=>e.$i18n.locale=a)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.$i18n.availableLocales,(a=>((0,l.wg)(),(0,l.iD)("option",{key:`locale-${a}`,value:a},(0,r.zw)(e.$t(a)),9,te)))),128))],512),[[n.bM,e.$i18n.locale]])]),ne],32)]))}};const le=oe;var re=le;const se=[{path:"/",name:"home",component:g},{path:"/todos",name:"todos",component:W},{path:"/weather",name:"weather",component:G},{path:"/profile",name:"profile",component:re}],ie=(0,o.p7)({history:(0,o.PO)(),routes:se});var ce=ie,ue=t(7853),de=JSON.parse('{"dashboard":"dashboard","todos":"todos","weather":"weather","profile":"profile","good morning":"good morning","good noon":"good noon","good afternoon":"good afternoon","good evening":"good evening","good night":"good night","to do":"to do","enter to do":"enter to do","new to do":"new to do","add":"add","to do list":"to do list","enter city name":"enter city name","empty list":"empty list","Tehran":"Tehran","Gilan":"Gilan","Khuzestan":"Khuzestan","Fars":"Fars","Isfahan":"Isfahan","Mashhad":"Mashhad","Qazvin":"Qazvin","Semnan":"Semnan","Qom":"Qom","Markazi":"Markazi","Zanjan":"Zanjan","Mazandaran":"Mazandaran","Golestan":"Golestan","Ardebil":"Ardebil","West Azerbaijan Province":"West Azerbaijan Province","Razavi Khorasan Province":"Razavi Khorasan Province","Hamadan":"Hamadan","Kurdistan":"Kurdistan","Kermanshah":"Kermanshah","Lorestan":"Lorestan","Bushehr":"Bushehr","Kerman":"Kerman","Hormozgan":"Hormozgan","Yazd":"Yazd","Zahedan":"Zahedan","Ilam":"Ilam","Yasuj":"Yasuj","Karaj":"Karaj","enter name":"enter name","name":"name","select theme":"select theme","dark":"dark","light":"light","select locale":"select locale","english":"english","persian":"persian","save":"save"}'),me=JSON.parse('{"dashboard":"داشبورد","todos":"انجام کار ها","weather":"آب و هوا","profile":"پروفایل","good morning":"صبح بخیر","good noon":"ظهر بخیر","good afternoon":"بعد از ظهر بخیر","good evening":"عصر بخیر","good night":"شب بخیر","to do":"برای انجام","enter to do":"To Do را وارد کنید","new to do":"جدید برای انجام","add":"اضافه کردن","to do list":"لیست انجام کار","enter city name":"نام شهر را وارد کنید","empty list":"لیست خالی","Tehran":"تهران","Gilan":"گیلان","Khuzestan":"خوزستان","Fars":"فارس","Isfahan":"اصفهان","Mashhad":"مشهد","Qazvin":"قزوین","Semnan":"سمنان","Qom":"قم","Markazi":"مرکزی","Zanjan":"زنجان","Mazandaran":"مازندران","Golestan":"گلستان","Ardebil":"اردبیل","West Azerbaijan Province":"استان آذربایجان غربی","Razavi Khorasan Province":"استان خراسان رضوی","Hamadan":"همدان","Kurdistan":"کردستان","Kermanshah":"کرمانشاه","Lorestan":"لرستان","Bushehr":"بوشهر","Kerman":"کرمان","Hormozgan":"هرمزگان","Yazd":"یزد","Zahedan":"زاهدان","Ilam":"ایلام","Yasuj":"یاسوج","Karaj":"کرج","enter name":"نام را وارد کنید","name":"نام","select theme":"نمایه را انتخاب کنید","dark":"تیره","light":"روشن","select locale":"زبان را انتخاب کنید","english":"انگلیسی","persian":"فارسی","save":"ذخیره"}');const ve=()=>{const e=[{english:de},{persian:me}],a={};for(const t of e){const e=Object.keys(t);a[e]=t[e]}return a};var he=(0,ue.o)({locale:"english",fallbackLocale:"english",messages:ve()});const pe=(0,l._)("div",{class:"loader"},null,-1),ge=[pe];var we={__name:"SiteLoader",setup(e){let a=(0,s.iH)(!1);return document.onreadystatechange=()=>{"complete"==document.readyState&&(a.value=!0)},(e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,r.C_)(["site-loader",{"hide-loader":(0,s.SU)(a)}])},ge,2))}};const fe=we;var _e=fe,be=t.p+"img/logo-sm.fbc3d7ea.png",ye=t.p+"img/logo-lg.7b2f020b.png",ke=t(6072),ze=t(5599);const $e=be,Se={class:"navbar"},He=(0,l._)("a",{href:"index.html",title:"website logo",class:"website-logo"},[(0,l._)("picture",null,[(0,l._)("source",{media:"(max-width:768px)",srcset:$e}),(0,l._)("img",{src:ye,alt:"nadin soft logo"})])],-1),je={class:"menu-item"},De={class:"menu-item"},Ke={class:"menu-item"},Ce={class:"menu-item"},Oe={key:0},Ue={key:1};var We={__name:"Header",setup(e){const a=(0,s.iH)(!1);window.addEventListener("click",(e=>{"svg"!=e.target.tagName&&(a.value=!1)}));const t=()=>a.value=!a.value;return(e,n)=>{const o=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("nav",Se,[He,(0,l._)("ul",{class:(0,r.C_)(["menu",{"show-menu":a.value}])},[(0,l._)("li",je,[(0,l.Wm)(o,{"active-class":"active",to:{name:"home"},class:"menu-item-link btn-primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.$t("dashboard")),1)])),_:1})]),(0,l._)("li",De,[(0,l.Wm)(o,{"active-class":"active",to:{name:"todos"},class:"menu-item-link btn-primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.$t("todos")),1)])),_:1})]),(0,l._)("li",Ke,[(0,l.Wm)(o,{"active-class":"active",to:{name:"weather"},class:"menu-item-link btn-primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.$t("weather")),1)])),_:1})]),(0,l._)("li",Ce,[(0,l.Wm)(o,{"active-class":"active",to:{name:"profile"},class:"menu-item-link btn-primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.$t("profile")),1)])),_:1})])],2),(0,l._)("div",{class:"menu-hamburger",onClick:t},[a.value?((0,l.wg)(),(0,l.iD)("div",Oe,[(0,l.Wm)((0,s.SU)(ze.Z))])):((0,l.wg)(),(0,l.iD)("div",Ue,[(0,l.Wm)((0,s.SU)(ke.Z))]))])])}}};const Ie=We;var Me=Ie;const xe={id:"header"},Pe={id:"main"};var Ze={__name:"App",setup(e){return(e,a)=>{const t=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(_e),(0,l._)("header",xe,[(0,l.Wm)((0,s.SU)(Me))]),(0,l._)("main",Pe,[(0,l.Wm)(t)])],64)}}};const Ne=Ze;var Ye=Ne;(0,n.ri)(Ye).use(ce).use(he).mount("#app")}},a={};function t(n){var o=a[n];if(void 0!==o)return o.exports;var l=a[n]={exports:{}};return e[n].call(l.exports,l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(a,n,o,l){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],l=e[u][2];for(var s=!0,i=0;i<n.length;i++)(!1&l||r>=l)&&Object.keys(t.O).every((function(e){return t.O[e](n[i])}))?n.splice(i--,1):(s=!1,l<r&&(r=l));if(s){e.splice(u--,1);var c=o();void 0!==c&&(a=c)}}return a}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,o,l]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var o,l,r=n[0],s=n[1],i=n[2],c=0;if(r.some((function(a){return 0!==e[a]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(i)var u=i(t)}for(a&&a(n);c<r.length;c++)l=r[c],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(u)},n=self["webpackChunkrest_api"]=self["webpackChunkrest_api"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(9506)}));n=t.O(n)})();
//# sourceMappingURL=app.58ef0398.js.map