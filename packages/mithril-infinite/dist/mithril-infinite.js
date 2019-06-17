!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("mithril"),require("verge"),require("mithril/stream"),require("resize-observer-polyfill"),require("j2c")):"function"==typeof define&&define.amd?define(["mithril","verge","mithril/stream","resize-observer-polyfill","j2c"],t):(e=e||self).mithrilInfinite=t(e.m,e.verge,e.stream,e["resize-observer-polyfill"],e.j2c)}(this,function(e,t,i,r,n){"use strict";function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,i=i&&i.hasOwnProperty("default")?i.default:i,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var l,s={scrollView:"mithril-infinite__scroll-view",scrollViewX:"mithril-infinite__scroll-view--x",scrollViewY:"mithril-infinite__scroll-view--y",scrollContent:"mithril-infinite__scroll-content",content:"mithril-infinite__content",pages:"mithril-infinite__pages",page:"mithril-infinite__page",pageEven:"mithril-infinite__page--even",pageOdd:"mithril-infinite__page--odd",placeholder:"mithril-infinite__page--placeholder",before:"mithril-infinite__before",after:"mithril-infinite__after"},c=function(e,t){return"x"===t?e.offsetWidth:e.offsetHeight},u=function(e){var i=e.el,r=e.axis,n=void 0===r?"y":r,a=e.leeway,o=void 0===a?300:a;return"y"===n?t.inY(i,o)||t.inY(i,-o):"x"===n?t.inX(i,o)||t.inX(i,-o):t.inViewport(i,o)||t.inViewport(i,-o)},f=function(e){return[s.page,e%2==0?s.pageEven:s.pageOdd].join(" ")},g={oninit:function(t){var r=t.state,n=t.attrs,a=n.pageNum,o=i([]);if(n.pageData){var l=n.pageData(a);Promise.resolve(l).then(o).then(e.redraw)}else n.pageUrl&&function(t){return e.request({method:"GET",url:t})}(n.pageUrl(a)).then(o);var s=n.processPageData||function(e,t){return e&&e.length?e.map(function(e,i){return n.item(e,t,i)}):null};r.content=o,r.className=f(a),r.pageTag=n.pageTag||"div",r.processPageData=s},view:function(t){var i=t.state,n=t.attrs,a=n.pageId,o=n.pageSizes[a]||0,l=0;n.pageSize&&(l=n.pageSize(i.content()),n.updatePageSize(a,l));var s=l?l+"px":n.autoSize?"auto":o+"px",u=function(e){if(!l){var t=c(e,n.axis);t&&n.updatePageSize(a,t)}};return e(i.pageTag,{"data-page":a,class:i.className,style:o?"x"===n.axis?{width:s}:{height:s}:null,oncreate:function(e){var t=e.dom;new r(function(e){var i=!0,r=!1,a=void 0;try{for(var l,s=e[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var c=l.value.contentRect,f=c.width,g=c.height;("x"===n.axis&&f!==o||"y"===n.axis&&g!==o)&&u(t)}}catch(e){r=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}}).observe(t)},onupdate:function(e){var t=e.dom;return u(t)}},i.processPageData(i.content(),{pageId:n.pageId,pageNum:n.pageNum}))}},p={oninit:function(e){return e.state.className=f(e.attrs.pageNum)},view:function(t){var i=t.state,r=t.attrs,n=r.pageId,a=r.pageSizes[n]||0;return e("div",{"data-page":n,class:[s.placeholder,i.className].join(" "),style:o({},"x"===r.axis?{width:a+"px"}:{height:a+"px"})})}},d=new n,h=function(e){if(e){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}};!function(e){h(e);var t=document.createElement("style");e&&t.setAttribute("id",e);for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];r.forEach(function(e){Object.keys(e).length&&e.forEach(function(e){var i={"@global":e},r=d.sheet(i);t.appendChild(document.createTextNode(r))})}),document.head.appendChild(t)}("mithril-infinite",[a({},"."+s.scrollView,(l={"-webkit-overflow-scrolling":"touch",height:"100%"},a(l," ."+s.scrollContent,{overflowAnchor:"none"}),a(l,"&."+s.scrollViewY,a({overflowX:"hidden",overflowY:"auto",height:"100%"}," ."+s.scrollContent,{height:"100%"})),a(l,"&."+s.scrollViewX,a({overflowX:"auto",overflowY:"hidden",width:"100%"}," ."+s.scrollContent,{width:"100%"})),l))]);var v=function(e){return"000000".substring(0,"000000".length-(""+e).length)+e},m=function(t){return function(i,r){var n=t.pageSizes[i],a=parseInt(r,10);n!==a&&(t.pageSizes[i]=a,t.sortedKeys=Object.keys(t.pageSizes).sort(),w(t),setTimeout(e.redraw))}},S=function(e,t,i,r){var n=c(e,r);n&&(i[t]=n)},w=function(t){if(t.scrollView){var i=t.scrollView.getBoundingClientRect();t.boundingClientRect=t.boundingClientRect||i,i.width===t.boundingClientRect.width&&i.height===t.boundingClientRect.height||(t.preloadSlots=t.attrsPreloadSlots||1),t.boundingClientRect=i,t.contentSize&&t.preloadSlots<t.pageCount&&t.preloadSlots<=t.attrsMaxPreloadSlots&&t.contentSize<i.height&&(t.preloadSlots++,setTimeout(e.redraw))}};return{oninit:function(t){var i=t.attrs,r=i.axis||"y",n="x"===r?"scrollLeft":"scrollTop",a=void 0===i.autoSize||!1!==i.autoSize,l=i.pageSize,c=i.contentTag||"div",u=[s.scrollView,"x"===r?s.scrollViewX:s.scrollViewY,i.class].join(" "),f=e.redraw;o(t.state,{afterSize:0,beforeSize:0,boundingClientRect:{},currentPageNum:0,pageSizes:{},preloadSlots:i.preloadPages||1,scrollView:null,sortedKeys:[],attrsMaxPreloadSlots:i.maxPreloadPages||Number.MAX_VALUE,attrsPreloadSlots:i.preloadPages||1,autoSize:a,axis:r,classList:u,contentTag:c,pageSize:l,scroll:f,whichScroll:n})},view:function(t){var i=t.state,r=t.attrs,n=i.scrollView?i.scrollView[i.whichScroll]:0,a=i.axis,l=void 0!==r.maxPages?r.maxPages:Number.MAX_VALUE,c=r.currentPage?parseInt(r.currentPage,10):function(e,t){var i=t.sortedKeys;if(0===i.length)return 1;for(var r=t.before||0,n=1,a=0;a<i.length;a+=1){var o=i[a];e>r&&(n=parseInt(o,10)),r+=t.pageSizes[o]}return n}(n,i);r.pageChange&&c!==i.currentPageNum&&r.pageChange(c),i.currentPageNum=c,i.scrollView&&r.getDimensions&&r.getDimensions({scrolled:n,size:i.contentSize});var f=function(e,t,i,r,n,a){for(var o=t?parseInt(t,10):r||1,l=i?parseInt(i,10):r||a,s=[],c=[],u=-n;u<=n;u+=1){var f=e+u;f>=o&&f<=l&&s.push(f)}for(var g=1;g<s[0];g+=1)c.push(g);return{pages:s,prePages:c,maxPageNum:l}}(c,r.from,r.to,r.currentPage,i.preloadSlots,l),d=f.pages,h=f.prePages,z=f.maxPageNum;i.contentSize=void 0!==r.contentSize?r.contentSize:function(e,t,i){var r=Math.max(0,e-1);if(t<r)return 0;var n=t,a=0;return a=i.sortedKeys.slice(r,n).reduce(function(e,t){return e+(i.pageSizes[t]||0)},a)}(1,z,i),w(i),i.pageCount=d.length;var y=!z||function(e,t,i){if(!i)return!1;var r=v(e),n=i.querySelector('[data-page="'.concat(r,'"]'));return u({el:n,axis:t})}(z,a,i.scrollView);return e("div",{oncreate:function(e){var t=e.dom;if(i.scrollView=r.scrollView?document.querySelector(r.scrollView):t,i.scrollView.className+=" "+i.classList,r.setDimensions){var n=r.setDimensions();if(n.size>0){var o="x"===a?"width":"height";t.style[o]=n.size+"px"}i.scrollView[i.whichScroll]=n.scrolled}i.scrollView.addEventListener("scroll",i.scroll)},onremove:function(){return i.scrollView.removeEventListener("scroll",i.scroll)}},e("div",{class:s.scrollContent,style:i.autoSize?o({},"x"===a?{width:i.contentSize+i.beforeSize+i.afterSize+"px"}:{height:i.contentSize+i.beforeSize+i.afterSize+"px"},r.contentSize?"x"===a?{"min-width":r.contentSize+i.beforeSize+i.afterSize+"px"}:{"min-height":r.contentSize+i.beforeSize+i.afterSize+"px"}:{}):null},[e(i.contentTag,{class:s.content},[r.before?e("div",{class:s.before,oncreate:function(e){var t=e.dom;return S(t,"beforeSize",i,a)},onupdate:function(e){var t=e.dom;return S(t,"beforeSize",i,a)}},r.before):null,e("div",{class:s.pages},[h.map(function(t){return e(p,{axis:a,key:(r.pageKey||v)(t),pageId:v(t),pageNum:t,pageSizes:i.pageSizes})}),d.map(function(t){return e(g,{autoSize:i.autoSize,axis:a,item:r.item,key:(r.pageKey||v)(t),pageData:r.pageData,pageId:v(t),pageNum:t,pageSize:i.pageSize,pageSizes:i.pageSizes,pageTag:r.pageTag,pageUrl:r.pageUrl,updatePageSize:m(i)})})]),r.after&&i.contentSize?e("div",{class:s.after,style:{visibility:y?"visible":"hidden"},oncreate:function(e){var t=e.dom;return S(t,"afterSize",i,a)},onupdate:function(e){var t=e.dom;return S(t,"afterSize",i,a)}},r.after):null])]))},isElementInViewport:u}});
//# sourceMappingURL=mithril-infinite.js.map
