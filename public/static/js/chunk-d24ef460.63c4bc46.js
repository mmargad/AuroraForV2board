(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d24ef460"],{"7d08":function(t,n,i){},"8a7e":function(t,n,i){"use strict";i.r(n);var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"error-container"},[i("div",{staticClass:"pic"},[t.lottieOptions.animationData?i("lottie",{staticClass:"in",attrs:{options:t.lottieOptions,height:500,width:500}}):t._e()],1),i("div",{staticClass:"right"},[i("h2",{staticClass:"title"},[t._v(t._s(t.$t("似乎出了点问题")))]),i("p",{staticClass:"desc"},[t._v(t._s(t.$t("请检查您的URL是否正确, 或点击重新登录")))]),i("a-button",{staticClass:"btn",attrs:{type:"primary",round:""},on:{click:t.onBack}},[t._v(t._s(t.$t("重新登录")))])],1)])},o=[],s=(i("ac1f"),i("5319"),i("8c2c")),e=i("bc3a"),c=i.n(e),r=i("54d7"),l={name:"Error",components:{Lottie:s["a"]},data:function(){return{lottieOptions:{animationData:null}}},mounted:function(){var t=this;window.conso1e.log(66),setTimeout((function(){c.a.get(r["n"]+"/98488-bot-error-404.json").then((function(n){t.lottieOptions.animationData=n.data}))}),0)},methods:{onBack:function(){this.$router.replace("/login")}}},u=l,d=(i("8be2"),i("2877")),p=Object(d["a"])(u,a,o,!1,null,"b7bb570a",null);n["default"]=p.exports},"8be2":function(t,n,i){"use strict";i("7d08")}}]);