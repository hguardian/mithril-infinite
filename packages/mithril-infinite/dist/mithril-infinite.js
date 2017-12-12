!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("mithril"),require("verge"),require("resize-observer-polyfill"),require("j2c")):"function"==typeof define&&define.amd?define(["mithril","verge","resize-observer-polyfill","j2c"],t):e["mithril-infinite"]=t(e.m,e.verge,e["resize-observer-polyfill"],e.j2c)}(this,function(e,t,n,r){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r;var i,o={scrollView:"mithril-infinite__scroll-view",scrollViewX:"mithril-infinite__scroll-view--x",scrollViewY:"mithril-infinite__scroll-view--y",scrollContent:"mithril-infinite__scroll-content",content:"mithril-infinite__content",pages:"mithril-infinite__pages",page:"mithril-infinite__page",pageEven:"mithril-infinite__page--even",pageOdd:"mithril-infinite__page--odd",placeholder:"mithril-infinite__page--placeholder",before:"mithril-infinite__before",after:"mithril-infinite__after"},s=function(e,t){var n=window.getComputedStyle(e);if("x"===t){var r=parseFloat(n.marginLeft)+parseFloat(n.marginRight);return e.scrollWidth+r}var a=parseFloat(n.marginTop)+parseFloat(n.marginBottom);return e.scrollHeight+a},l=function(e){var n=e.el,r=e.axis,a=void 0===r?"y":r,i=e.leeway,o=void 0===i?300:i;return"y"===a?t.inY(n,o)||t.inY(n,-o):"x"===a?t.inX(n,o)||t.inX(n,-o):t.inViewport(n,o)||t.inViewport(n,-o)},u=function(e){return[o.page,e%2==0?o.pageEven:o.pageOdd].join(" ")},c=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){!function(){function t(){function e(){return arguments.length>0&&arguments[0]!==m&&n(e,arguments[0]),e._state.value}return function(e){e.constructor=t,e._state={id:h++,value:void 0,state:0,derive:void 0,recover:void 0,deps:{},parents:[],endStream:void 0,unregister:void 0},e.map=e["fantasy-land/map"]=l,e["fantasy-land/ap"]=u,e["fantasy-land/of"]=t,e.valueOf=c,e.toJSON=f,e.toString=c,Object.defineProperties(e,{end:{get:function(){if(!e._state.endStream){var n=t();n.map(function(t){return!0===t&&(s(e),n._state.unregister=function(){s(n)}),t}),e._state.endStream=n}return e._state.endStream}}})}(e),arguments.length>0&&arguments[0]!==m&&n(e,arguments[0]),e}function n(e,t){r(e,t);for(var n in e._state.deps)a(e._state.deps[n],!1);null!=e._state.unregister&&e._state.unregister(),function(e){e._state.changed=!1;for(var t in e._state.deps)e._state.deps[t]._state.changed=!1}(e)}function r(e,t){e._state.value=t,e._state.changed=!0,2!==e._state.state&&(e._state.state=1)}function a(e,t){var n=e._state.parents;if(n.length>0&&n.every(d)&&(t||n.some(g))){var a=e._state.derive();if(a===m)return!1;r(e,a)}}function i(e,n){if(!n.every(p))throw new Error("Ensure that each item passed to stream.combine/stream.merge is a stream");return function(e,t,n){var r=e._state;return r.derive=n,r.parents=t.filter(v),o(e,r.parents),a(e,!0),e}(t(),n,function(){return e.apply(this,n.concat([n.filter(g)]))})}function o(e,t){for(var n=0;n<t.length;n++)t[n]._state.deps[e._state.id]=e,o(e,t[n]._state.parents)}function s(e){for(var t=0;t<e._state.parents.length;t++){delete e._state.parents[t]._state.deps[e._state.id]}for(var n in e._state.deps){var r=e._state.deps[n],a=r._state.parents.indexOf(e);a>-1&&r._state.parents.splice(a,1)}e._state.state=2,e._state.deps={}}function l(e){return i(function(t){return e(t())},[this])}function u(e){return i(function(e,t){return e()(t())},[e,this])}function c(){return this._state.value}function f(){return null!=this._state.value&&"function"==typeof this._state.value.toJSON?this._state.value.toJSON():this._state.value}function p(e){return e._state}function d(e){return 1===e._state.state}function g(e){return e._state.changed}function v(e){return 2!==e._state.state}var h=0,m={};t["fantasy-land/of"]=t,t.merge=function(e){return i(function(){return e.map(function(e){return e()})},e)},t.combine=i,t.scan=function(e,t,n){var r=i(function(n){return t=e(t,n._state.value)},[n]);return 0===r._state.state&&r(t),r},t.scanMerge=function(e,t){var n=e.map(function(e){var t=e[0];return 0===t._state.state&&t(void 0),t});return i(function(){var r=arguments[arguments.length-1];return n.forEach(function(n,a){r.indexOf(n)>-1&&(t=e[a][1](t,n._state.value))}),t},n)},t.HALT=m,e.exports=t}()}),f={oninit:function(t){var n=t.state,r=t.attrs,a=r.pageNum,i=c([]);if(r.pageData){var o=r.pageData(a);Promise.resolve(o).then(i).then(e.redraw)}else r.pageUrl&&function(t){return e.request({method:"GET",url:t})}(r.pageUrl(a)).then(i);var s=r.processPageData||function(e,t){return e&&e.length?e.map(function(e,n){return r.item(e,t,n)}):null};n.content=i,n.className=u(a),n.pageTag=r.pageTag||"div",n.processPageData=s},view:function(t){var r=t.state,a=t.attrs,i=a.pageId,o=a.pageSizes[i]||0,l=0;a.pageSize&&(l=a.pageSize(r.content()),a.updatePageSize(i,l));var u=l?l+"px":a.autoSize?"auto":o+"px",c=function(e){if(!l){var t=s(e,a.axis);t&&a.updatePageSize(i,t)}};return e(r.pageTag,{"data-page":i,class:r.className,style:o?"x"===a.axis?{width:u}:{height:u}:null,oncreate:function(e){var t=e.dom;new n(function(e){var n=!0,r=!1,i=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done);n=!0){var u=s.value.contentRect,f=u.width,p=u.height;("x"===a.axis&&f!==o||"y"===a.axis&&p!==o)&&c(t)}}catch(e){r=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(r)throw i}}}).observe(t)},onupdate:function(e){var t=e.dom;return c(t)}},r.processPageData(r.content(),{pageId:a.pageId,pageNum:a.pageNum}))}},p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d={oninit:function(e){return e.state.className=u(e.attrs.pageNum)},view:function(t){var n=t.state,r=t.attrs,a=r.pageId,i=r.pageSizes[a]||0;return e("div",{"data-page":a,class:[o.placeholder,n.className].join(" "),style:p({},"x"===r.axis?{width:i+"px"}:{height:i+"px"})})}},g=new r,v=function(e){if(e){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}};!function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];v(e);var a=document.createElement("style");e&&a.setAttribute("id",e),n.forEach(function(e){Object.keys(e).length&&e.forEach(function(e){var t={"@global":e},n=g.sheet(t);a.appendChild(document.createTextNode(n))})}),document.head.appendChild(a)}("mithril-infinite",[a({},"."+o.scrollView,(i={"-webkit-overflow-scrolling":"touch",height:"100%"},a(i,"&."+o.scrollViewY,a({overflowX:"hidden",overflowY:"auto",height:"100%"}," ."+o.scrollContent,{height:"100%"})),a(i,"&."+o.scrollViewX,a({overflowX:"auto",overflowY:"hidden",width:"100%"}," ."+o.scrollContent,{width:"100%"})),i))]);var h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=function(e){return"000000".substring(0,"000000".length-(""+e).length)+e},_=function(e,t,n,r){var a=s(e,r);a&&(n[t]=a)},w=function(t){if(t.scrollView){var n=t.scrollView.getBoundingClientRect();t.boundingClientRect=t.boundingClientRect||n,n.width===t.boundingClientRect.width&&n.height===t.boundingClientRect.height||(t.preloadSlots=t.attrsPreloadSlots||1),t.boundingClientRect=n,t.contentSize&&t.preloadSlots<t.pageCount&&t.preloadSlots<=t.attrsMaxPreloadSlots&&t.contentSize<n.height&&(t.preloadSlots++,setTimeout(e.redraw,0))}};return{oninit:function(t){var n=t.attrs,r=n.axis||"y",a="x"===r?"scrollLeft":"scrollTop",i=void 0===n.autoSize||!1!==n.autoSize,s=n.pageSize,l=n.contentTag||"div",u=[o.scrollView,"x"===r?o.scrollViewX:o.scrollViewY,n.class].join(" ");t.state={afterSize:null,beforeSize:null,boundingClientRect:{},currentPageNum:0,pageSizes:{},preloadSlots:n.preloadPages||1,scrollView:null,sortedKeys:[],attrsMaxPreloadSlots:n.maxPreloadPages||Number.MAX_VALUE,attrsPreloadSlots:n.preloadPages||1,autoSize:i,axis:r,classList:u,contentTag:l,pageSize:s,scroll:function(){return e.redraw()},whichScroll:a}},view:function(t){var n=t.state,r=t.attrs,a=n.scrollView?n.scrollView[n.whichScroll]:0,i=n.axis,s=void 0!==r.maxPages?r.maxPages:Number.MAX_VALUE,u=r.currentPage?parseInt(r.currentPage,10):function(e,t){var n=t.sortedKeys;if(0===n.length)return 1;for(var r=t.beforeSize||0,a=1,i=0;i<n.length;i+=1){var o=n[i];e>r&&(a=parseInt(o,10)),r+=t.pageSizes[o]}return a}(a,n);r.pageChange&&u!==n.currentPageNum&&r.pageChange(u),n.currentPageNum=u,n.scrollView&&r.getDimensions&&r.getDimensions({scrolled:a,size:n.contentSize});var c=function(e,t,n,r,a,i){for(var o=t?parseInt(t,10):r||1,s=n?parseInt(n,10):r||i,l=[],u=[],c=-a;c<=a;c+=1){var f=e+c;f>=o&&f<=s&&l.push(f)}for(var p=1;p<l[0];p+=1)u.push(p);return{pages:l,prePages:u,maxPageNum:s}}(u,r.from,r.to,r.currentPage,n.preloadSlots,s),p=c.pages,g=c.prePages,v=c.maxPageNum;n.contentSize=void 0!==r.contentSize?r.contentSize:function(e,t,n){var r=Math.max(0,e-1);if(t<r)return 0;var a=t,i=n.sortedKeys.slice(r,a),o=n.beforeSize||0;return o=i.reduce(function(e,t){return e+=n.pageSizes[t]||0},o),o+=n.afterSize||0}(1,v,n),n.pageCount=p.length;var S=!v||function(e,t,n,r){if(!r)return!1;var a=m(e),i=r.querySelector('[data-page="'+a+'"]');return l({el:i,axis:t})}(v,i,0,n.scrollView);return e("div",{oncreate:function(e){var t=e.dom;if(n.scrollView=r.scrollView?document.querySelector(r.scrollView):t,n.scrollView.className+=" "+n.classList,r.setDimensions){var a=r.setDimensions();if(a.size>0){var o="x"===i?"width":"height";t.style[o]=a.size+"px"}n.scrollView[n.whichScroll]=a.scrolled}n.scrollView.addEventListener("scroll",n.scroll)},onremove:function(){return n.scrollView.removeEventListener("scroll",n.scroll)}},e("div",{class:o.scrollContent,style:n.autoSize?h({},"x"===i?{width:n.contentSize+"px"}:{height:n.contentSize+"px"},r.contentSize?"x"===i?{"min-width":r.contentSize+"px"}:{"min-height":r.contentSize+"px"}:{}):null},[e(n.contentTag,{class:o.content},[r.before?e("div",{class:o.before,oncreate:function(e){var t=e.dom;return _(t,"before",n,i)},onupdate:function(e){var t=e.dom;return _(t,"before",n,i)}},r.before):null,e("div",{class:o.pages},[g.map(function(t){return e(d,{axis:i,key:m(t),pageId:m(t),pageNum:t,pageSizes:n.pageSizes})}),p.map(function(t){return e(f,{autoSize:n.autoSize,axis:i,item:r.item,key:m(t),pageData:r.pageData,pageId:m(t),pageNum:t,pageSize:n.pageSize,pageSizes:n.pageSizes,pageTag:r.pageTag,pageUrl:r.pageUrl,updatePageSize:function(e){return function(t,n){return e.pageSizes[t]=parseInt(n,10),e.sortedKeys=Object.keys(e.pageSizes).sort(),w(e)}}(n)})})]),r.after&&n.contentSize?e("div",{class:o.after,style:{visibility:S?"visible":"hidden"},oncreate:function(e){var t=e.dom;return _(t,"after",n,i)},onupdate:function(e){var t=e.dom;return _(t,"after",n,i)}},r.after):null])]))},isElementInViewport:l}});
//# sourceMappingURL=mithril-infinite.js.map
