/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[616],{"04b8f":function(t,e,n){t.exports={listPhotos:"gf4",title:"gf5",mediaList:"gf6",mediaItem:"gf7",image:"gf8",videoIcon:"gf9",overloadMediaList:"gg"}},"0ba6f":function(t,e,n){"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function r(t){return!0==(null!=(e=t)&&"object"==typeof e&&!1===Array.isArray(e))&&"[object Object]"===Object.prototype.toString.call(t);
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var e}function o(t){var e,n;return!1!==r(t)&&("function"==typeof(e=t.constructor)&&(!1!==r(n=e.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf")))}n.r(e);var dfn=Object.defineProperty,c=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function l(t,e,n){void 0===n&&(n=!1);var r={_vueTypes_name:{value:t},def:{value:function(t){return void 0!==t||this.default?(c(t)?this.default=function(){return[].concat(t)}:o(t)?this.default=function(){return Object.assign({},t)}:this.default=t,this):this}},isRequired:{get:function(){return this.required=!0,this}}};return n&&(r.validate={value:function(){}}),Object.assign(Object.defineProperties({validator:function(){return!0}},r),e)}var f,d,h=(f={utils:{toType:l,validate:function(){return!0}}},d={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0},Object.defineProperty(f,"sensibleDefaults",{enumerable:!1,set:function(t){d=!1===t?{}:!0===t?{func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}:t},get:function(){return d}})),y={func:Function,bool:Boolean,string:String,number:Number,array:Array,object:Object,arrayOf:Array,objectOf:Object,shape:Object};function v(t,e,n,r,o){var c;void 0===r&&(r=!1),void 0===o&&(o=!1);var f=((c={})[r?"get":"value"]=function(){return l(e,n,o).def(r?h.sensibleDefaults[e]:void 0)},c);return dfn(t,e,f)}function m(t,e,n){return function(r){return v(t,r,{type:y[r]||null},e,n)}}["any","func","bool","string","number","array","object","symbol"].forEach(m(h,!0,!0)),["oneOf","custom","instanceOf","oneOfType","arrayOf","objectOf"].forEach(m(h,!1)),v(h,"integer",{type:Number},!0),dfn(h,"shape",{value:function(){return dfn(l("shape",{type:Object}),"loose",{get:function(){return this}})}}),h.extend=function(t){var e=t.name,n=t.validate,r=t.getter,c=void 0!==r&&r,l=t.type,f=void 0===l?null:l,d=o(f)&&f.type?null:f;return v(h,e,{type:d},c,!!n)};e.default=h},"30df0":function(t,e,n){"use strict";var r=n("39fac"),o=n("a1cf5"),c=n.n(o),l=function(t,e,n,r){return new(n||(n=Promise))((function(o,c){function l(t){try{d(r.next(t))}catch(t){c(t)}}function f(t){try{d(r.throw(t))}catch(t){c(t)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,f)}d((r=r.apply(t,e||[])).next())}))},f=function(t,body){var e,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(t,o)}catch(t){c=[6,t],n=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}};e.a={data:function(){return{loadingVariantMode:!1}},mounted:function(){this.notSubscribeVariantMode||this.$when(r.c,this.updateWidgetState)},destroyed:function(){this.notSubscribeVariantMode||this.$when.unsubscribe(r.c,this.updateWidgetState)},methods:{updateWidgetState:function(t){var e=t.payload;return l(this,void 0,void 0,(function(){var t,n,r=this;return f(this,(function(o){switch(o.label){case 0:if(t=e.url,n=e.widgetListUpdate,this.loadingVariantMode)return[2];if(c()(n))return[3,5];if(!n.find((function(t){return t===r.componentName})))return[3,5];this.loadingVariantMode=!0,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.fetchAsyncState({},t)];case 2:return o.sent(),[3,4];case 3:return o.sent(),[3,4];case 4:this.loadingVariantMode=!1,o.label=5;case 5:return[2]}}))}))}}}},"39fac":function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"m",(function(){return o})),n.d(e,"t",(function(){return c})),n.d(e,"j",(function(){return l})),n.d(e,"r",(function(){return f})),n.d(e,"k",(function(){return d})),n.d(e,"a",(function(){return h})),n.d(e,"u",(function(){return y})),n.d(e,"v",(function(){return v})),n.d(e,"i",(function(){return m})),n.d(e,"g",(function(){return w})),n.d(e,"f",(function(){return O})),n.d(e,"s",(function(){return S})),n.d(e,"o",(function(){return I})),n.d(e,"q",(function(){return j})),n.d(e,"d",(function(){return _})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return M})),n.d(e,"n",(function(){return C})),n.d(e,"p",(function(){return k})),n.d(e,"l",(function(){return x})),n.d(e,"h",(function(){return A}));var r="createComment",o="rpReportAbuse",c="rpSetOpinionUsefulness",l="rpDeleteMyReview",f="rpImageUpload",d="rpGetCommentsByReviewId",h="rpIgnoreItem",y="UNUSEFUL",v="USEFUL",m="usefulness_desc",w="Пользователь OZON",O="П",S="rdImageUpload",I="reviewsSubscribeV1",j="reviewsUnsubscribeV1",_="reviews/CHANGE_SORTING_REVIEWS",E="reviews/CHANGE_FILTERS_REVIEWS",M="reviews/CHANGE_REVIEW_VARIANT_MODE",C="createReviewForm",k="3000",x="Этот пользователь может предоставлять разъяснения, официальную информацию и консультировать по вопросам, касающимся товаров.",A="Оцените покупку"},"679de":function(t,e,n){"use strict";var r=n("04b8f"),o=n.n(r);e.default=o.a},78763:function(t,e,n){"use strict";var r=n("11078");e.a={inheritAttrs:!1,computed:{showWidget:function(){return!this.hasWidgetError&&(Object.keys(this.widgetState).length||this.asyncType===r.a)},hasWidgetError:function(){return this.widgetState.error}},inject:{$isMobile:{from:"isMobile",default:!1}}}},"7f7c2":function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return l})),function(t){t.IMG="IMAGE",t.VIDEO="VIDEO"}(r||(r={}));var o="reviewPid",c="reviewVid",l=[o,c,"reviewId","itemId"]},"805ab":function(t,e,n){"use strict";n.r(e);var r=n("0ba6f"),o=n("d3037"),c=n("a71f0"),l=n("d52e8"),f=n.n(l),d=n("d68e9"),h=n("78763"),y=n("d0cfe"),v=n("30df0"),m=n("7f7c2"),w=n("ec145"),O=function(t,e,n,r){return new(n||(n=Promise))((function(o,c){function l(t){try{d(r.next(t))}catch(t){c(t)}}function f(t){try{d(r.throw(t))}catch(t){c(t)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,f)}d((r=r.apply(t,e||[])).next())}))},S=function(t,body){var e,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(t,o)}catch(t){c=[6,t],n=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}},I=o.a.extend({name:"WidgetListPhotos",components:{OzImage:d.OzImage,PlayIcon:f.a},mixins:[h.a,v.a,y.a],props:{defaultMediaCount:r.default.number.def(6)},data:function(){return{MEDIA_TYPES:m.a}},methods:{onMediaItemClick:function(t,e){var n=t.galleryParams;return O(this,void 0,void 0,(function(){return S(this,(function(t){switch(t.label){case 0:return this.sendAnalytics(c.b.CLICK_ACTION,"photoClick."+e),n?[4,this.$composerRouter.replace(Object(w.a)(this.$composerRouter.current,n),{silent:!0})]:[2];case 1:return t.sent(),[2]}}))}))}}}),j=n("679de"),_=n("b429c");var component=Object(_.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showWidget?n("div",{class:t.$style.listPhotos},[n("div",{class:t.$style.title},[t._v("\n    Фото и видео покупателей\n  ")]),t._v(" "),t.widgetState.mediaContent&&t.widgetState.mediaContent.length?n("div",{class:t.$style.mediaList,style:"grid-template-columns: repeat("+t.defaultMediaCount+", minmax(56px,90px));"},t._l(t.widgetState.mediaContent.slice(0,t.defaultMediaCount),(function(e,r){return n("button",{key:r,class:t.$style.mediaItem,attrs:{type:"button"},on:{click:function(n){return t.onMediaItemClick(e,r)}}},[n("OzImage",{class:t.$style.image,attrs:{lazy:"","use-cdn":"",size:t.isMobile?128:180,alt:e.alt,src:e.previewUrl}}),t._v(" "),e.type===t.MEDIA_TYPES.VIDEO?n("PlayIcon",{class:t.$style.videoIcon}):t._e(),t._v(" "),t.widgetState.moreMedia&&r===t.defaultMediaCount-1&&t.widgetState.mediaContent.length>=t.defaultMediaCount?n("div",{class:t.$style.overloadMediaList,on:{click:function(e){return e.stopPropagation(),t.onMediaItemClick(t.widgetState.moreMedia,r)}}},[t._v("\n        +"+t._s(t.widgetState.moreMedia.mediaCount)+"\n      ")]):t._e()],1)})),0):t._e()]):t._e()}),[],!1,(function(t){this.$style=j.default.locals||j.default}),null,null);e.default=component.exports},d0cfe:function(t,e,n){"use strict";var r=n("ff287"),o=n.n(r),c=n("a71f0");e.a={methods:{sendAnalytics:function(t,e,n){void 0===n&&(n={});var r=this.getCell(e);"string"!=typeof r?c.a.send(t,{widget:this.trackingInfo,slice:this.sliceTrackingInfo||{},cell:r,custom:n}):this.sendAEvent({actionType:t,key:r,sliceKey:this.sliceTrackingInfo},n)},getCell:function(t){return o()(this,"widgetState.cellTrackingInfo."+t)}}}},d52e8:function(t,e){var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var s,e=1,n=arguments.length;e<n;e++)for(var r in s=arguments[e])Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);return t}).apply(this,arguments)},r=this&&this.__rest||function(t,s){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&s.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)s.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(e[n[r]]=t[n[r]])}return e};t.exports={functional:!0,render:function(t,s){var e=s._c,o=(s._v,s.data),c=s.children,a=void 0===c?[]:c,l=o.class,f=o.staticClass,d=o.style,i=o.staticStyle,p=o.attrs,h=void 0===p?{}:p,y=r(o,["class","staticClass","style","staticStyle","attrs"]);return e("svg",n({class:[l,f],style:[d,i],attrs:Object.assign({width:"40",height:"40",xmlns:"http://www.w3.org/2000/svg"},h)},y),a.concat([e("path",{attrs:{d:"M20 2c9.94 0 18 8.06 18 18s-8.06 18-18 18S2 29.94 2 20 10.06 2 20 2zm0 1.895c-8.895 0-16.105 7.21-16.105 16.105S11.105 36.105 20 36.105 36.105 28.895 36.105 20 28.895 3.895 20 3.895zm-5.47 7.253a1.056 1.056 0 011.064-.008l13.86 7.914c.338.193.546.554.546.947 0 .392-.208.753-.545.946l-13.86 7.913c-.332.19-.737.186-1.065-.008a1.089 1.089 0 01-.53-.938V12.086c0-.386.202-.743.53-.938z",fill:"currentColor","fill-rule":"nonzero"}})]))}}},ec145:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("d336c"),o=n.n(r),c=n("4633b"),l=n.n(c),f=function(){return(f=Object.assign||function(t){for(var s,i=1,e=arguments.length;i<e;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},d=function(t,e,n){var r=e.includes("?")?e:"?"+e,c=new o.a(t,!0),d=new o.a(r,!0);return n&&n.length&&(c.query=l()(c.query,n)),c.set("query",f(f({},c.query||{}),d.query)),c.toString()}}}]);