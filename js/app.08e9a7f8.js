(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)a=s[d],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"33af":function(t,e,n){},"359c":function(t,e,n){t.exports=n.p+"img/github.f9e15284.png"},"3a19":function(t,e,n){t.exports=n.p+"img/profile.7f163d2b.jpg"},5307:function(t,e,n){t.exports=n.p+"img/facebook.76102893.png"},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(n("034f"),n("2877")),s={},c=Object(a["a"])(s,o,i,!1,null,null,null),l=c.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"complete"},[r("m-preloader",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]}),r("div",{attrs:{id:"header-menu"},on:{click:t.toggleMenu}},[r("div",{staticClass:"bar",attrs:{id:"bar1"}}),r("div",{staticClass:"bar",attrs:{id:"bar2"}}),r("div",{staticClass:"bar",attrs:{id:"bar3"}}),t._m(0)]),r("section",{staticClass:"flex-center",attrs:{id:"home","data-index":"0"}},[r("img",{staticClass:"img-rounded",attrs:{src:n("3a19")}}),r("h1",{staticClass:"main-title my-2"},[t._v("Matheus Pedroni")]),r("p",{staticClass:"text-lead"},[t._v("Desenvolvedor front-end")]),r("div",{staticClass:"flex-horizontal my-3"},[r("img",{attrs:{src:n("c7f8"),alt:"Instagram"},on:{click:function(e){return t.toSocial("instagram")}}}),r("img",{attrs:{src:n("e4d7"),alt:"Twitter"},on:{click:function(e){return t.toSocial("twitter")}}}),r("img",{staticClass:"special",attrs:{src:n("359c"),alt:"Github"},on:{click:function(e){return t.toSocial("github")}}}),r("img",{attrs:{src:n("dd32"),alt:"LinkedIn"},on:{click:function(e){return t.toSocial("linkedin")}}}),r("img",{attrs:{src:n("5307"),alt:"Facebook"},on:{click:function(e){return t.toSocial("facebook")}}})])])],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-rows my-3",attrs:{id:"menu-rows"}},[n("h1",[t._v("HOME")]),n("h1",[t._v("PROJETOS")])])}],f={name:"home",data(){return{isLoading:!0,social:{instagram:"https://www.instagram.com/pedr0ni/",twitter:"https://twitter.com/pedr0ni_",github:"https://github.com/pedr0ni",linkedin:"https://www.linkedin.com/in/pedr0ni/",facebook:"https://www.facebook.com/pdrzeraa"}}},methods:{toSocial(t){window.open(this.social[t],"_blank")},toggleMenu(){document.getElementsByTagName("section");let t=document.getElementById("bar1"),e=document.getElementById("bar2"),n=document.getElementById("bar3"),r=document.getElementById("header-menu");document.getElementById("menu-rows");r.classList.contains("active")?(t.style.width="56px",t.style.transform="rotate(0)",e.style.opacity="1",n.style.transform="rotate(0) translateY(0)",n.style.width="18px"):(t.style.width="46px",t.style.transform="rotate(45deg)",e.style.opacity="0",n.style.transform="translateY(11px) rotate(-45deg)",n.style.width="46px"),r.classList.toggle("active")}},mounted(){setTimeout(()=>{this.isLoading=!1;let t=document.getElementsByTagName("section");t[0].classList.toggle("animated")},800)}},m=f,g=Object(a["a"])(m,d,p,!1,null,null,null),v=g.exports;r["a"].use(u["a"]);var h=new u["a"]({routes:[{path:"/",name:"home",component:v}]}),b=n("9483");Object(b["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preloader"},[n("div",{staticClass:"lds-ellipsis"},[n("div"),n("div"),n("div"),n("div")])])}],k={name:"preloader"},x=k,_=(n("ffc1"),Object(a["a"])(x,w,y,!1,null,"4c670906",null)),O=_.exports;r["a"].config.productionTip=!1,r["a"].component("m-preloader",O),new r["a"]({router:h,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){},c7f8:function(t,e,n){t.exports=n.p+"img/instagram.1911c85b.png"},dd32:function(t,e,n){t.exports=n.p+"img/linkedin.d1d54f80.png"},e4d7:function(t,e,n){t.exports=n.p+"img/twitter.de1b904c.png"},ffc1:function(t,e,n){"use strict";var r=n("33af"),o=n.n(r);o.a}});
//# sourceMappingURL=app.08e9a7f8.js.map