webpackJsonp([0],{"6+dl":function(t,s){},"8jVv":function(t,s){},EkFy:function(t,s){},FPFK:function(t,s){},GsH8:function(t,s){},Jmt5:function(t,s){},M0yf:function(t,s){},M6Sr:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("7+uW"),e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},e,!1,function(t){i("8jVv")},null,null).exports,r=i("/ocq"),c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"pos-f-t",staticStyle:{display:"block"}},[s("div",{ref:"menuContent",attrs:{id:"navbarToggleExternalContent"}},[s("div",{staticClass:"sb-close text-right",on:{click:this.closeMenu}},[s("img",{attrs:{src:i("q6r7"),alt:""}})]),this._v(" "),this._m(0)]),this._v(" "),s("nav",{staticClass:"navbar navbar-dark"},[s("button",{staticClass:"navbar-toggler",attrs:{type:"button"},on:{click:this.menuClick}},[s("span",{staticClass:"icon-bar before"}),this._v(" "),s("span",{staticClass:"icon-bar main"}),this._v(" "),s("span",{staticClass:"icon-bar after"})])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"p-4"},[i("div",{staticClass:"list-group"},[i("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"#"}},[t._v("Home")]),t._v(" "),i("a",{staticClass:"list-group-item list-group-item-action dropdown",attrs:{"data-toggle":"collapse","data-target":"#demo","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v("Tags")]),t._v(" "),i("ul",{staticClass:"collapse",attrs:{id:"demo"}},[i("li",[i("a",{staticClass:"list-group-item list-group-item-action"},[t._v("php")])]),t._v(" "),i("li",[i("a",{staticClass:"list-group-item list-group-item-action"},[t._v("javascript")])]),t._v(" "),i("li",[i("a",{staticClass:"list-group-item list-group-item-action"},[t._v("html")])]),t._v(" "),i("li",[i("a",{staticClass:"list-group-item list-group-item-action"},[t._v("css")])])]),t._v(" "),i("a",{staticClass:"list-group-item list-group-item-action ",attrs:{href:"#"}},[t._v("Link")]),t._v(" "),i("a",{staticClass:"list-group-item list-group-item-action ",attrs:{href:"#"}},[t._v("About")])])])}]};var l=i("VU/8")({name:"navContent",mounted:function(){this.$refs.menuContent.style.opacity=0;var t=this.$refs.menuContent.offsetWidth;this.$refs.menuContent.style.right=-t+"px"},methods:{menuClick:function(){this.$refs.menuContent.style.opacity=1,this.$refs.menuContent.style.right=0},closeMenu:function(){var t=this.$refs.menuContent.offsetWidth;this.$refs.menuContent.style.right=-t+"px"}}},c,!1,function(t){i("d5Ff")},"data-v-3db7d832",null).exports,o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{ref:"navBar",staticClass:"navBar"},[this._m(0)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"navHeader"},[a("div",{staticClass:"container"},[a("div",{staticClass:"logo"},[a("a",{attrs:{href:""}},[a("img",{attrs:{src:i("iU/T"),alt:""}})])]),t._v(" "),a("ul",{staticClass:"navUl"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("一季花开花落")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("git")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("关于我")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Welcome!")])])])])])}]};var v=i("VU/8")({name:"homeHeader",mounted:function(){}},o,!1,function(t){i("EkFy")},"data-v-bf08c5a4",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"copy"},[s("p",[this._v("\n          © 2014 -2018, Content By Kieran. All Rights Reserved.\n        ")]),this._v(" "),s("p",[this._v("Theme By "),s("a",{staticStyle:{color:"#767D84"}},[this._v("Kieran")])])]),this._v(" "),s("div",{staticClass:"social"},[s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/SuperKieran",title:"Github",target:"_blank"}},[s("i",{staticClass:"icon-github"})])]),this._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/1tsKieran",title:"Twitter",target:"_blank"}},[s("i",{staticClass:"icon-twitter"})])]),this._v(" "),s("li",[s("a",{attrs:{href:"http://weibo.com/taokailun",title:"Sina-Weibo",target:"_blank"}},[s("i",{staticClass:"icon-sina-weibo"})])])])])])])])}]};var h=i("VU/8")({name:"homeFooter"},d,!1,function(t){i("M0yf")},"data-v-60cd715f",null).exports,m={name:"homeBanner",mounted:function(){var t=document.body.offsetHeight;this.$refs.heightBlack.style.height=t+"px"}},u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{ref:"heightBlack",staticClass:"homeBanner"},[this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container-fluid bannerBg element-img"},[s("div",{staticClass:"bannerContent"})])}]};var C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"article",attrs:{id:"article"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-8 offset-md-2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("h3",{staticClass:"article-title"},[t._v("CSS 样式防御")]),t._v(" "),i("p",{staticClass:"article-time"},[t._v("2018-08-25 | CSS3, iframe, Shadow DOM")])]),t._v(" "),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"article-info"},[t._v("概念 / 起因什么是样式防御？顾名思义，就是保护你写的样式最后是你想展现的样子。一般样式被破坏多发生于第三方应用编程中，当编写的组件被应用于第三方网站中，组件的样式经常会被网站本身的样式影响而破坏了它本来想展现的样子。 为什么会研究这个东西呢？因为有一天，我引用的第三方代码的 CSS 被我网站上的 CSS 影响了。于是，我噼里啪啦赶紧把第三方的样式又给“强调“了一遍。搞完一想，不对啊，这特么应该是第三方自己没做好对自己 CSS 代")]),t._v(" "),i("p",{staticClass:"pull-right text-right readMore"},[i("a",{attrs:{href:""}},[t._v("Read More...")])])])]),t._v(" "),i("div",{staticClass:"nogutter"})])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-8 offset-md-2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("h3",{staticClass:"article-title"},[t._v("前端也需要了解的 JSONP 安全")]),t._v(" "),i("p",{staticClass:"article-time"},[t._v("2018-08-10 | JavaScript, Security, JSONP")])]),t._v(" "),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"article-info"},[t._v("什么是 JSONP（JSON with Padding）？What? 你还不知道 JSONP 是什么？赶紧去补补吧，我就不多讲了。补个百度百科链接先，https://baike.baidu.com/item/jsonp/493658 会有哪些安全隐患？怎么防范？我们假设有这样一个场景一我登录了 www.qq.com，QQ 为了给第三方提供服务，可能会有这样的 jsonp 接口，www.qq.com/getUserInfo?callba")]),t._v(" "),i("p",{staticClass:"pull-right text-right readMore"},[i("a",{attrs:{href:""}},[t._v("Read More...")])])])]),t._v(" "),i("div",{staticClass:"nogutter"})])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-8 offset-md-2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("h3",{staticClass:"article-title"},[t._v("南北湖 / 奕仙城 / 未完成的一日一夜游小记")]),t._v(" "),i("p",{staticClass:"article-time"},[t._v("2018-01-06 | 南北湖, 奕仙城, Travel")])]),t._v(" "),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"article-info"},[t._v("先来段正规的介绍12345南北湖，浙江省第一批省级风景名胜区、国家AAAA级旅游景区、浙江十大“最佳休闲度假胜地”之一。南北湖，山有层次，水有曲折，海有奇景，村有故事，是我国唯一融山、海、湖、村为一体的全景度假地，依托山海湖·村特色资源，提供多种主题度假方式，感受完美全景度假生活。门票：80元预订：60元海盐本地居民凭 330424 开头的身份证可以办理南北湖旅游年卡，无限次进入南北湖，20元/年年卡办理公众号：nanbeihuly 首")]),t._v(" "),i("p",{staticClass:"pull-right text-right readMore"},[i("a",{attrs:{href:""}},[t._v("Read More...")])])])]),t._v(" "),i("div",{staticClass:"nogutter"})])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-8 offset-md-2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("h3",{staticClass:"article-title"},[t._v("CSS 样式防御")]),t._v(" "),i("p",{staticClass:"article-time"},[t._v("2018-08-25 | CSS3, iframe, Shadow DOM")])]),t._v(" "),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"article-info"},[t._v("概念 / 起因什么是样式防御？顾名思义，就是保护你写的样式最后是你想展现的样子。一般样式被破坏多发生于第三方应用编程中，当编写的组件被应用于第三方网站中，组件的样式经常会被网站本身的样式影响而破坏了它本来想展现的样子。 为什么会研究这个东西呢？因为有一天，我引用的第三方代码的 CSS 被我网站上的 CSS 影响了。于是，我噼里啪啦赶紧把第三方的样式又给“强调“了一遍。搞完一想，不对啊，这特么应该是第三方自己没做好对自己 CSS 代")]),t._v(" "),i("p",{staticClass:"pull-right text-right readMore"},[i("a",{attrs:{href:""}},[t._v("Read More...")])])])]),t._v(" "),i("div",{staticClass:"nogutter"})])]),t._v(" "),i("div",{staticClass:"pagination"},[i("a",{staticClass:"float-left",attrs:{href:""}},[t._v("← Newer Posts")]),t._v(" "),i("a",{staticClass:"float-right",attrs:{href:""}},[t._v("Older Posts →")])])])])])}]};var f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"statement"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row text-center"},[s("p",[this._v("每一个不曾起舞的日子都是对生命的辜负。")])])])])])}]};var p={name:"Home",components:{homeHeader:v,homeBanner:i("VU/8")(m,u,!1,function(t){i("FPFK")},"data-v-5feeb03a",null).exports,navContent:l,homeArticle:i("VU/8")({name:"homeArticle"},C,!1,function(t){i("6+dl")},"data-v-6879a2c2",null).exports,homeFooter:h,statement:i("VU/8")({name:"Statement"},f,!1,function(t){i("GsH8")},"data-v-4854a2a4",null).exports}},_={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("nav-content"),this._v(" "),s("home-header"),this._v(" "),s("home-banner"),this._v(" "),s("home-article"),this._v(" "),s("statement"),this._v(" "),s("home-footer")],1)},staticRenderFns:[]};var g=i("VU/8")(p,_,!1,function(t){i("YbIF")},"data-v-7f5bf202",null).exports;a.a.use(r.a);var b=new r.a({routes:[{path:"/",name:"Home",component:g}]}),A=i("v5o6"),w=i.n(A);i("Jmt5"),i("K3J8"),i("rqXQ"),i("M6Sr");w.a.attach(document.body),a.a.config.productionTip=!1,new a.a({el:"#app",router:b,components:{App:n},template:"<App/>"})},YbIF:function(t,s){},d5Ff:function(t,s){},"iU/T":function(t,s,i){t.exports=i.p+"static/img/nice.eed5492.png"},q6r7:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowOTdmMTA2Yy1lODUyLTRlYmQtYTg5Ni0zMjM2OWY4Mzc2ZWMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUUzN0QyREQ5Q0QwMTFFNDgyRTA5NjhCOTYyMjg0RjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUUzN0QyREM5Q0QwMTFFNDgyRTA5NjhCOTYyMjg0RjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzY2MWVkZjQtOTU0MC00YzU0LWI1N2EtMTc0Zjc4MmU2MjhiIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZGJlMTQ2NGEtZTU1My0xMTc3LWIwMzAtZjhkOTkzY2RhZGMwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nYkNRwAAAVFJREFUeNqUlM0rRUEUwK9XLgsSEQvFxsbbKGKllA1vQ3ob/4fP8rWz8VF4i7dU/gkWz0bKwsdOYWNDSBaS9NT1G+/cnG53xpupX01zzvndO2eaCaIoCqAPcjL3YR0mzTwTVMYETAd+owemIA+hsWajv1Gs8k+64VZq3qDNLIawqGSFfyQdcCm5TzAEGZ0wq2S7FkkX3EjOPfTGsWTigpJtJGLtcCGxV+jX8bSvLivZlqy1wrmsvcBgss7Wh1Ul24FjmT/DQFqNq6lz8K6EdzBsy3eJ6uBRifZdp2kLNMOJCMpKtuYjaoSSFH7AaOIAVqoRNcGpFJj+jKjYtpItuUT1cKi2M5by5U0lm08TNcCRJHzCuKOxe0o2o0UtcCaBL8ufJCkombkNYdzca/iGvMdbVFSybLzYKafj+7AdyC0Ian73Vxm1UPZ83HLwAFc/AgwAZmnxWdk5uacAAAAASUVORK5CYII="},rqXQ:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.5c54e89d328920f15346.js.map