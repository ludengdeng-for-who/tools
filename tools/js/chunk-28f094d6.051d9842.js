(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28f094d6"],{"2ed1":function(t,a,e){"use strict";var n=e("7dcd"),s=e.n(n);s.a},5884:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"top"},[e("TopBar",{scopedSlots:t._u([{key:"left",fn:function(){return[e("div",{on:{click:t.goBack}},[e("van-icon",{attrs:{name:"arrow-left"}})],1)]},proxy:!0},{key:"center",fn:function(){return[t._v(" 每日新闻 ")]},proxy:!0}])})],1),e("a",{attrs:{href:"",name:"top"}}),e("van-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("van-collapse-item",{attrs:{title:"头条",name:"1"}},t._l(t.data1,(function(t){return e("div",{key:t.uniquekey},[e("Item",{attrs:{item:t}})],1)})),0),e("van-collapse-item",{attrs:{title:"社会",name:"2"}},t._l(t.data2.data,(function(t){return e("div",{key:t.uniquekey},[e("Item",{attrs:{item:t}})],1)})),0),e("van-collapse-item",{attrs:{title:"国内",name:"3"}},t._l(t.data3.data,(function(t){return e("div",{key:t.uniquekey},[e("Item",{attrs:{item:t}})],1)})),0),e("van-collapse-item",{attrs:{title:"国际",name:"4"}},t._l(t.data4.data,(function(t){return e("div",{key:t.uniquekey},[e("Item",{attrs:{item:t}})],1)})),0)],1),e("a",{staticClass:"backtop",attrs:{href:"#top"}},[e("van-icon",{attrs:{name:"arrow-up"}})],1)],1)},s=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"author"},[t._v(t._s(t.item.author_name))]),e("div",{staticClass:"title"},[t._v(t._s(t.item.title))]),e("img",{attrs:{src:t.item.thumbnail_pic_s}})])},r=[],c={props:{item:{type:Object}}},o=c,u=(e("6fae"),e("2877")),l=Object(u["a"])(o,i,r,!1,null,"1666edaa",null),d=l.exports,f=e("b043"),v={components:{TopBar:f["a"],Item:d},data:function(){return{activeName:"0",data1:[],data2:[],data3:[],data4:[]}},created:function(){this.fech()},methods:{goBack:function(){this.$router.push("/")},fech:function(){var t=this;this.$http.get("/news").then((function(a){console.log(a.data),t.data1=a.data.result1,t.data2=a.data.result2,t.data3=a.data.result3,t.data4=a.data.result4}))}}},m=v,p=(e("5a53"),Object(u["a"])(m,n,s,!1,null,"1108b9b4",null));a["default"]=p.exports},"5a53":function(t,a,e){"use strict";var n=e("8e8f"),s=e.n(n);s.a},"6fae":function(t,a,e){"use strict";var n=e("af76"),s=e.n(n);s.a},"7dcd":function(t,a,e){},"8e8f":function(t,a,e){},af76:function(t,a,e){},b043:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"topbar"},[e("van-row",{attrs:{type:"flex",justify:"space-between"}},[e("van-col",{staticClass:"left",attrs:{span:"4"}},[t._t("left")],2),e("van-col",{staticClass:"center",attrs:{span:"10"}},[t._t("center")],2),e("van-col",{attrs:{span:"4"}},[t._t("right")],2)],1)],1)},s=[],i={},r=i,c=(e("2ed1"),e("2877")),o=Object(c["a"])(r,n,s,!1,null,"9d5961ec",null);a["a"]=o.exports}}]);
//# sourceMappingURL=chunk-28f094d6.051d9842.js.map