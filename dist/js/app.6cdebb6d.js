(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i=[];function a(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c4643":"b38e52ee","chunk-2d2163ab":"9fe6f10d","chunk-2d21a3d2":"06311ce2"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(t);var u=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ccc":function(t,e,n){"use strict";n("411f")},"118f":function(t,e,n){"use strict";n("79a4")},1974:function(t,e,n){"use strict";n("c90d")},"1f92":function(t,e,n){t.exports=n.p+"img/cart_active.3f0a2016.svg"},"2f66":function(t,e,n){"use strict";n("c87e")},"411f":function(t,e,n){},"4a21":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view"),r("Tabbar",[r("tab-bar-item",{attrs:{path:"/home",color:"deeppink"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("9443"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("b508"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("div",[t._v("首页")])]},proxy:!0}])}),r("tab-bar-item",{attrs:{path:"/category",color:"deeppink"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("57cd"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("a5ef"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("div",[t._v("分类")])]},proxy:!0}])}),r("tab-bar-item",{attrs:{path:"/cart",color:"deeppink"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("d1c9"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("1f92"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("div",[t._v("购物车")])]},proxy:!0}])}),r("tab-bar-item",{attrs:{path:"/profile",color:"deeppink"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("e55d"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("d151"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("div",[t._v("我的")])]},proxy:!0}])})],1)],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},c=[],s=(n("5a33"),n("2877")),u={},l=Object(s["a"])(u,a,c,!1,null,"57b6d865",null),f=l.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.isClick}},[t.isActive?t._t("item-icon-active"):t._t("item-icon"),n("div",{style:t.active},[t._t("item-text")],2)],2)},d=[],m={name:"TabBarItem",components:{},props:{path:{type:String,default:"/home"},color:{type:String,default:"red"}},data:function(){return{}},computed:{isActive:function(){return this.$route.path==this.path},active:function(){return this.isActive?{color:this.color}:{}}},mounted:function(){},methods:{isClick:function(){this.$router.push(this.path)}}},v=m,h=(n("9894"),Object(s["a"])(v,p,d,!1,null,"45d948ae",null)),b=h.exports,g={name:"App",components:{Tabbar:f,TabBarItem:b}},y=g,_=(n("5c0b"),Object(s["a"])(y,o,i,!1,null,null,null)),x=_.exports,k=(n("d3b7"),n("8c4f")),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("nav-bar",{staticClass:"home-nav",scopedSlots:t._u([{key:"center",fn:function(){return[t._v(" 购物街 ")]},proxy:!0}])}),n("banner",{attrs:{banner:t.banner}}),n("home-recommend-view",{attrs:{recommend:t.recommend}}),n("home-feature-view"),n("tab-control",{attrs:{title:t.title},on:{typeTrans:t.typeTrans}}),n("goods-list",{attrs:{goodsList:t.goods[t.currentType].list}})],1)},j=[],O=n("2909"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"left"},[t._t("left")],2),n("div",{staticClass:"center"},[t._t("center")],2),n("div",{staticClass:"right"},[t._t("right")],2)])},S=[],T={name:"NavBar",components:{},data:function(){return{}},mounted:function(){},methods:{}},$=T,E=(n("9500"),Object(s["a"])($,C,S,!1,null,"4baab9f8",null)),I=E.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[t._l(t.banner,(function(t,e){return n("swiper-slide",{key:e},[n("img",{attrs:{src:t.image,alt:""}})])})),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},L=[],P=(n("bbe3"),n("7212")),A=n("6d3b"),G=n("d17a"),M=n("5dc8");A["a"].use([G["a"],M["a"]]);var B={name:"carrousel",components:{Swiper:P["Swiper"],SwiperSlide:P["SwiperSlide"]},props:{banner:{type:Array}},data:function(){return{swiperOptions:{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:!0,effect:"coverflow"}}}},V=B,R=(n("118f"),Object(s["a"])(V,H,L,!1,null,"444a63b2",null)),q=R.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.title,(function(e,r){return n("div",{key:r,staticClass:"tab-control-item",class:{active:r==t.currentIndex},on:{click:function(e){return t.itemClick(r)}}},[n("span",[t._v(t._s(e))])])})),0)},F=[],J={name:"TabControl",components:{},props:{title:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("typeTrans",t)}}},N=J,U=(n("9156"),Object(s["a"])(N,z,F,!1,null,"5efcf886",null)),D=U.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods-list"},t._l(t.goodsList,(function(t,e){return n("goods-list-item",{key:e,attrs:{goodsItem:t}})})),1)},Q=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods-list-item"},[n("img",{attrs:{src:t.goodsItem.show.img,alt:""}}),n("p",[t._v(t._s(t.goodsItem.title))]),n("div",[n("span",[t._v("￥"+t._s(t.goodsItem.price))]),n("span",[t._v("收藏："+t._s(t.goodsItem.cfav))])])])},X=[],Y={name:"GoodsListItem",props:{goodsItem:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{}},Z=Y,tt=(n("2f66"),Object(s["a"])(Z,W,X,!1,null,"60dda158",null)),et=tt.exports,nt={name:"GoodsList",components:{GoodsListItem:et},props:{goodsList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{}},rt=nt,ot=(n("1974"),Object(s["a"])(rt,K,Q,!1,null,"03a7f558",null)),it=ot.exports,at=n("bc3a"),ct=n.n(at);function st(t){var e=ct.a.create({baseURL:"http://152.136.185.210:7878/api/m5",timeout:5e3});return e.interceptors.request.use((function(t){return t}),(function(t){})),e.interceptors.response.use((function(t){return t}),(function(t){})),e(t)}function ut(){return st({url:"/home/multidata"})}function lt(t,e){return st({url:"/home/data",params:{type:t,page:e}})}var ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},t._l(t.recommend,(function(e,r){return n("div",{key:r},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("div",[t._v(t._s(e.title))])]),n("div")])})),0)},pt=[],dt={name:"HomeRecommendView",components:{},props:{recommend:{type:Array}},data:function(){return{}},mounted:function(){},methods:{}},mt=dt,vt=(n("b57c"),Object(s["a"])(mt,ft,pt,!1,null,"5996c67a",null)),ht=vt.exports,bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},gt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"feature"},[r("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[r("img",{attrs:{src:n("5cbe"),alt:""}})])])}],yt={name:"HomeFeatureView",components:{},data:function(){return{}},mounted:function(){},methods:{}},_t=yt,xt=(n("81e8"),Object(s["a"])(_t,bt,gt,!1,null,"be80080a",null)),kt=xt.exports,wt={name:"Home",components:{NavBar:I,Banner:q,HomeRecommendView:ht,HomeFeatureView:kt,TabControl:D,GoodsList:it},data:function(){return{banner:[],recommend:[],title:["流行","新款","精选"],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop"}},created:function(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},methods:{getHomeMultidata:function(){var t=this;ut().then((function(e){t.banner=e.data.data.banner.list,t.recommend=e.data.data.recommend.list}))},getHomeGoods:function(t){var e=this,n=this.goods[t].page+1;lt(t,n).then((function(r){var o;(o=e.goods[t].list).push.apply(o,Object(O["a"])(r.data.data.list)),e.goods[t].page=n}))},typeTrans:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}}}},jt=wt,Ot=(n("0ccc"),Object(s["a"])(jt,w,j,!1,null,"1db10ea1",null)),Ct=Ot.exports;r["default"].use(k["a"]);var St=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:Ct},{path:"/category",name:"Category",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/cart",name:"Cart",component:function(){return n.e("chunk-2d2163ab").then(n.bind(null,"c228"))}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-2d0c4643").then(n.bind(null,"3b42"))}}],Tt=new k["a"]({mode:"history",routes:St}),$t=Tt,Et=n("2f62");r["default"].use(Et["a"]);var It=new Et["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["default"].config.productionTip=!1,new r["default"]({router:$t,store:It,render:function(t){return t(x)}}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"5a33":function(t,e,n){"use strict";n("6d5f")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},"6d5f":function(t,e,n){},"79a4":function(t,e,n){},"81e8":function(t,e,n){"use strict";n("ac07")},9156:function(t,e,n){"use strict";n("4a21")},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},9500:function(t,e,n){"use strict";n("a337")},9894:function(t,e,n){"use strict";n("ac5c")},"9c0c":function(t,e,n){},a337:function(t,e,n){},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},ac07:function(t,e,n){},ac5c:function(t,e,n){},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},b57c:function(t,e,n){"use strict";n("f386")},c87e:function(t,e,n){},c90d:function(t,e,n){},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},d1c9:function(t,e,n){t.exports=n.p+"img/cart.c68224ce.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"},f386:function(t,e,n){}});
//# sourceMappingURL=app.6cdebb6d.js.map