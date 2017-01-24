!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("mithril")):"function"==typeof define&&define.amd?define(["mithril"],t):e["mithril-infinite"]=t(e.m)}(this,function(e){"use strict";function t(e,t){return t={exports:{}},e(t,t.exports),t.exports}function n(e,t){for(var n in t)E.call(t,n)&&(!n.indexOf("$")||n in e||(e[n]=t[n]));return e}function r(e,t){var n,r,i=[];for(r in t)if(E.call(t,r))for(n in e)E.call(e,n)&&i.push(e[n]+t[r]);return i}function i(e){for(var t,n=[],r=[],i=0;t=Z.exec(e);)switch(t[0]){case"(":i++;break;case")":i--;break;case",":if(i)break;n.push(t.index)}for(t=n.length;t--;)r.unshift(e.slice(n[t]+1)),e=e.slice(0,n[t]);return r.unshift(e),r}function l(e,t){for(var n,i,l=[],o=[];i=W.exec(e);)"&"==i[0]&&l.push(i.index);for(i=l.length;i--;)o.unshift(e.slice(l[i]+1)),e=e.slice(0,l[i]);for(o.unshift(e),1===o.length&&o.unshift(""),n=[o[0]],i=1;i<o.length;i++)n=r(n,r(t,[o[i]]));return n.join(",")}function o(e){return function t(n){if(N.call(n)===j)for(var r=0;r<n.length;r++)t(n[r]);else e(n)}}function a(e){for(;X.length<e;)X+=Math.floor(4294967296*Math.random()).toString(36);var t="_"+X.slice(0,e);return X=X.slice(e),t}function c(e){return"-"+e.toLowerCase()}function u(e,t,n,r,i){var l,o,a;if(null!=r)switch(N.call(r=r.valueOf())){case j:for(l=0;l<r.length;l++)u(e,t,n,r[l],i);break;case O:n=n&&n+"-";for(l in r)if(E.call(r,l))if(o=r[l],/\$/.test(l))for(a in l=l.split("$"))E.call(l,a)&&u(e,t,n+l[a],o,i);else u(e,t,n+l,o,i);break;default:if(!n)return t.raw(r);l=n.replace(/_/g,"-").replace(/[A-Z]/g,c),!i||"animation-name"!=l&&"animation"!=l||(r=r.split(",").map(function(t){return t.replace(/^\s*(?:(var\([^)]+\))|:?global\(\s*([_A-Za-z][-\w]*)\s*\)|()(-?[_A-Za-z][-\w]*))/,e.localizeReplacer)}).join(",")),t.decl(l,r)}}function s(e,t,n,r,i,l,a){for(var c=0;c<e.atruleHandlers.length;c++)if(e.atruleHandlers[c](e,t,n,r,i,l,a))return;if(!n[3]&&/^global$/.test(n[2]))f(e,t,i,r,0,a);else if(!n[3]&&/^local$/.test(n[2]))f(e,t,i,r,1,a);else if(n[3]&&/^adopt$/.test(n[2])){if(!l||a)return t.err("@adopt global or nested: "+n[0]);if(!/^\.?[_A-Za-z][-\w]*$/.test(n[3]))return t.err("bad adopter "+JSON.stringify(n[3])+" in "+n[0]);c=[],o(function(e,r){null!=e&&/^\.?[_A-Za-z][-\w]*(?:\s+\.?[_A-Za-z][-\w]*)*$/.test(r=e+"")?c.push(r.replace(/\./g,"")):t.err("bad adoptee "+JSON.stringify(e)+" in "+n[0])})(r),c.length&&(e.localize(n[3]=n[3].replace(/\./g,"")),e.names[n[3]]+=" "+c.join(" "))}else!n[3]&&/^(?:namespace|import|charset)$/.test(n[2])?o(function(e){t.atrule(n[1],n[2],e)})(r):!n[3]&&/^(?:font-face|viewport)$/.test(n[2])?o(function(r){t.atrule(n[1],n[2],n[3],"decl"),u(e,t,"",r,l),t._atrule()})(r):n[3]&&/^(?:media|supports|page|keyframes)$/.test(n[2])?(l&&"keyframes"==n[2]&&(n[3]=n[3].replace(/(var\([^)]+\))|:?global\(\s*([_A-Za-z][-\w]*)\s*\)|()(-?[_A-Za-z][-\w]*)/,e.localizeReplacer)),"page"==n[2]?(t.atrule(n[1],n[2],n[3],"decl"),u(e,t,"",r,l)):(t.atrule(n[1],n[2],n[3],"rule"),f(e,t,"keyframes"==n[2]?"":i,r,l,a+1)),t._atrule()):t.err("Unsupported at-rule: "+n[0])}function f(e,t,n,r,o,a){var c,g,p,d;switch(N.call(r)){case O:for(c in r)if(E.call(r,c))if(g=r[c],n.length>0&&/^[-\w$]+$/.test(c))if(p||(p=1,t.rule(n)),/\$/.test(c))for(d in c=c.split("$"))E.call(c,d)&&u(e,t,c[d],g,o);else u(e,t,c,g,o);else if(/^@/.test(c))p=0,s(e,t,/^(.(?:-[\w]+-)?([_A-Za-z][-\w]*))\b\s*(.*?)\s*$/.exec(c)||[c,"@","",""],g,n,o,a);else{if(p=0,""===c){t._rule(),t.err("Invalid selector ''");continue}f(e,t,n.length>0&&(/,/.test(n)||/,/.test(c))?(d=i(n),i(o?c.replace(/("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,e.localizeReplacer):c).map(function(e){return/&/.test(e)?l(e,d):d.map(function(t){return t+e}).join(",")}).join(",")):/&/.test(c)?l(o?c.replace(/("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,e.localizeReplacer):c,[n]):n+(o?c.replace(/("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,e.localizeReplacer):c),g,o,a+1)}break;case j:for(c=0;c<r.length;c++)f(e,t,n,r[c],o,a);break;case R:n.length&&t.rule(n),t.raw(r)}}function g(e,t){var n;return t?e:{init:function(){n="",e.init()},done:function(){return n&&(e._rule(),n=""),e.done()},atrule:function(t,r,i,l){n&&(e._rule(),n=""),e.atrule(t,r,i,l)},_atrule:function(t){n&&(e._rule(),n=""),e._atrule(t)},rule:function(t){t!==n&&(n&&e._rule(),e.rule(t),n=t)},_rule:function(){n&&(e._rule(),n="")}}}function p(e,t,n,r){r.init();try{e(n,r,"",t,1,0)}catch(e){r.err(e instanceof Error?e.stack:""+e)}return r.done()}function d(e,t,r,i,l,o){function a(n){return E.call(c,n)||(c[n]=e+n+t),c[n].match(/^\S+/)}for(var c={},s={atruleHandlers:r,names:c,localize:a,localizeReplacer:function(e,t,n,r,i){return t||n||r+a(i)}},g={ns:function(e){var n="__"+e.replace(/\W+/g,"_")+"_";return E.call(i,n)||(i[n]=d(n,t,r,i,l,o)),i[n]},names:c,prefix:e,suffix:t,sheet:function(e){return p(f,e,s,l[0])},inline:function(e){return p(u,e,s,l[1])}},h=o.length;h--;)n(g,o[h]);return g}function h(e){e=e||{};var t,r,i=[{init:function(){t=[],r=[]},done:function(e){if(0!=r.length)throw new Error("j2c error(s): "+JSON.stringify(r,null,2)+"in context:\n"+t.join(""));return e?t:t.join("")},err:function(e){r.push(e),t.push("/* +++ ERROR +++ "+e+" */\n")},raw:function(e){t.push(e,"\n")},atrule:function(e,n,r,i){t.push(e,r&&" ",r,i?" {\n":";\n")},_atrule:function(){t.push("}\n")},rule:function(e){t.push(e," {\n")},_rule:function(){t.push("}\n")},decl:function(e,n){t.push(e,":",n,";\n")}}],l=[g],c=[],u=[],s=a(7),f={};N.call(e.plugins)===j&&o(function(e){if(N.call(e)!==O)throw new Error("bad plugin, object expected, got "+N.call(e));N.call(e.filter)===k&&l.push(e.filter),N.call(e.atrule)===k&&c.push(e.atrule),N.call(e.sink)===k&&(i=e.sink()),N.call(e.set)===O&&u.push(e.set)})(e.plugins),N.call(e.suffix)===R&&(s=e.suffix),N.call(e.suffix)===I&&(s=a(e.suffix)),i[1]=i[1]||{init:i[0].init,done:i[0].done,raw:i[0].raw,err:i[0].err,decl:i[0].decl};for(var p=0;p<2;p++)for(var h=l.length;h--;)i[p]=$(n(l[h](i[p],!!p),i[p]));return $(d("",s,c,f,i,u))}e="default"in e?e.default:e;var v={scrollView:"mithril-infinite__scroll-view",scrollViewX:"mithril-infinite__scroll-view--x",scrollViewY:"mithril-infinite__scroll-view--y",scrollContent:"mithril-infinite__scroll-content",content:"mithril-infinite__content",pages:"mithril-infinite__pages",page:"mithril-infinite__page",pageEven:"mithril-infinite__page--even",pageOdd:"mithril-infinite__page--odd",before:"mithril-infinite__before",after:"mithril-infinite__after"},m="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},w=t(function(e){!function(t,n,r){e.exports?e.exports=r():t[n]=r()}(m,"verge",function(){function e(){return{width:s(),height:f()}}function t(e,t){var n={};return t=+t||0,n.width=(n.right=e.right+t)-(n.left=e.left-t),n.height=(n.bottom=e.bottom+t)-(n.top=e.top-t),n}function n(e,n){return e=e&&!e.nodeType?e[0]:e,!(!e||1!==e.nodeType)&&t(e.getBoundingClientRect(),n)}function r(t){t=null==t?e():1===t.nodeType?n(t):t;var r=t.height,i=t.width;return r="function"==typeof r?r.call(t):r,i="function"==typeof i?i.call(t):i,i/r}var i={},l="undefined"!=typeof window&&window,o="undefined"!=typeof document&&document,a=o&&o.documentElement,c=l.matchMedia||l.msMatchMedia,u=c?function(e){return!!c.call(l,e).matches}:function(){return!1},s=i.viewportW=function(){var e=a.clientWidth,t=l.innerWidth;return e<t?t:e},f=i.viewportH=function(){var e=a.clientHeight,t=l.innerHeight;return e<t?t:e};return i.mq=u,i.matchMedia=c?function(){return c.apply(l,arguments)}:function(){return{}},i.viewport=e,i.scrollX=function(){return l.pageXOffset||a.scrollLeft},i.scrollY=function(){return l.pageYOffset||a.scrollTop},i.rectangle=n,i.aspect=r,i.inX=function(e,t){var r=n(e,t);return!!r&&r.right>=0&&r.left<=s()},i.inY=function(e,t){var r=n(e,t);return!!r&&r.bottom>=0&&r.top<=f()},i.inViewport=function(e,t){var r=n(e,t);return!!r&&r.bottom>=0&&r.right>=0&&r.top<=f()&&r.left<=s()},i})}),S=300,z=function(e,t){var n=window.getComputedStyle(e);if("x"===t){var r=parseFloat(n.marginLeft)+parseFloat(n.marginRight);return e.scrollWidth+r}var i=parseFloat(n.marginTop)+parseFloat(n.marginBottom);return e.scrollHeight+i},x=function(e){var t=e.el,n=e.axis,r=void 0===n?"y":n,i=e.leeway,l=void 0===i?S:i;return"y"===r?w.inY(t,l)||w.inY(t,-l):"x"===r?w.inX(t,l)||w.inX(t,-l):w.inViewport(t,l)||w.inViewport(t,-l)},b=function(e){return[v.page,e%2===0?v.pageEven:v.pageOdd].join(" ")},_=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V=function(t){return e.request({method:"GET",url:t,initialValue:[],background:!0})},A={};A.controller=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.pageNum,r=e.prop([]);if(t.pageData){var i=t.pageData(n);i.then?i.then(function(e){r(e)}):r=i}else if(t.pageUrl){var l=t.pageUrl(n);V(l).then(function(t){return r(t),e.redraw()})}return{content:r,className:b(n),pageTag:t.pageTag||"div"}},A.view=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.pageId,i=n.pageSizes[r]||0,l=0;n.pageSize&&(l=n.pageSize(t.content()),n.updatePageSize(r,l));var o=l?l+"px":!n.autoSize||n.isScrolling&&i?i+"px":"auto",a=n.processPageData||function(e,t){return e?e.map(function(e,r){return n.item(e,t,r)}):null};return e(t.pageTag,{"data-page":r,class:t.className,style:i?y({},"x"===n.axis?{width:o}:{height:o}):{},config:l?null:function(t){var l=z(t,n.axis);l&&n.updatePageSize(r,l),i||setTimeout(e.redraw,0)}},a(t.content(),n))};var P={};P.controller=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{className:b(e.pageNum)}},P.view=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.pageId,i=n.pageSizes[r]||0;return e("div",{"data-page":r,class:t.className,style:y({},"x"===n.axis?{width:i+"px"}:{height:i+"px"})})};var T,C={},N=C.toString,j=N.call([]),I=N.call(0),O=N.call(C),R=N.call(""),k=N.call(N),E=C.hasOwnProperty,$=Object.freeze||function(e){return e},Z=/[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g,W=/&|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g,X="",Y=new h,M=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];U(e);var i=document.createElement("style");e&&i.setAttribute("id",e),n.forEach(function(e){Object.keys(e).length&&e.forEach(function(e){var t={"@global":e},n=Y.sheet(t);i.appendChild(document.createTextNode(n))})}),document.head.appendChild(i)},U=function(e){if(e){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}},L=[_({},"."+v.scrollView,(T={"-webkit-overflow-scrolling":"touch",height:"100%"},_(T,"&."+v.scrollViewY,_({overflowX:"hidden",overflowY:"auto",height:"100%"}," ."+v.scrollContent,{height:"100%"})),_(T,"&."+v.scrollViewX,_({overflowX:"auto",overflowY:"hidden",width:"100%"}," ."+v.scrollContent,{width:"100%"})),T))];M("mithril-infinite",L);var D=200,H="000000",q=function(e){return H.substring(0,H.length-(""+e).length)+e},B=function(e,t){for(var n=t.sortedKeys,r=t.beforeSize||0,i=1,l=0;l<n.length;l+=1){var o=n[l];e>r&&(i=parseInt(o,10)),r+=t.pageSizes[o]}return i},F=function(e,t,n){var r=Math.max(0,e-1);if(t<r)return 0;var i=t,l=n.sortedKeys.slice(r,i),o=n.beforeSize||0;return o=l.reduce(function(e,t){return e+=n.pageSizes[t]||0},o),o+=n.afterSize||0},K=function(e,t,n,r){if(!r)return!1;var i=q(e),l=r.querySelector('[data-page="'+i+'"]');return x({el:l,axis:t})},J=function(e){return function(t,n){return e.state.pageSizes[t]=n,e.state.sortedKeys=Object.keys(e.state.pageSizes).sort()}},G={};return G.controller=function(e){var t="x"===e.axis?"scrollLeft":"scrollTop",n=void 0!==e.maxPages?e.maxPages:Number.MAX_VALUE,r=void 0===e.autoSize||e.autoSize!==!1,i=void 0!==e.throttle?1e3*e.throttle:D,l=e.contentTag||"div";return{state:{pageSizes:{},sortedKeys:[],beforeSize:null,afterSize:null},scrollView:null,isScrolling:!1,scrollWatchScrollingStateId:null,scrollWatchUpdateStateId:null,preloadSlots:e.preloadPages||1,boundingClientRect:{},currentPageNum:0,scrollAmount:0,whichScroll:t,maxPages:n,autoSize:r,scrollThrottle:i,contentTag:l}},G.view=function(t,n){var r=t.state;t.scrollAmount=t.scrollView?t.scrollView[t.whichScroll]:0;var i=n.currentPage?parseInt(n.currentPage,10):B(t.scrollAmount,r);i!==t.currentPageNum&&n.pageChange&&n.pageChange(i),t.currentPageNum=i,t.scrollView&&n.getDimensions&&n.getDimensions({scrolled:t.scrollAmount,size:t.contentSize});for(var l=n.from?parseInt(n.from,10):n.currentPage?n.currentPage:1,o=n.to?parseInt(n.to,10):n.currentPage?n.currentPage:t.maxPages,a=[],c=[],u=-t.preloadSlots;u<=t.preloadSlots;u+=1){var s=i+u;s>=l&&s<=o&&a.push(s)}for(var f=1;f<a[0];f+=1)c.push(f);var g=[v.scrollView,"x"===n.axis?v.scrollViewX:v.scrollViewY,n.class].join(" ");t.contentSize=F(1,o,r);var p=!o||K(o,n.axis,r,t.scrollView);if(t.scrollView){var d=t.scrollView.getBoundingClientRect();t.boundingClientRect=t.boundingClientRect||d,d.width===t.boundingClientRect.width&&d.height===t.boundingClientRect.height||(t.preloadSlots=n.preloadPages||1),t.boundingClientRect=d;var h=n.maxPreloadPages||Number.MAX_VALUE;t.contentSize&&t.preloadSlots<a.length&&t.preloadSlots<=h&&t.contentSize<d.height&&(t.preloadSlots++,setTimeout(e.redraw,0))}return e("div",{config:function(r,i,l){if(!i){if(n.scrollView?t.scrollView=document.querySelector(n.scrollView):t.scrollView=r,t.scrollView.className+=" "+g,n.setDimensions){var o=n.setDimensions(),a="x"===n.axis?"width":"height";o.size>0&&(r.style[a]=o.size+"px"),t.scrollView[t.whichScroll]=o.scrolled}var c=function(){t.isScrolling=!0,clearTimeout(t.scrollWatchScrollingStateId),t.scrollWatchScrollingStateId=setTimeout(function(){t.isScrolling=!1,e.redraw()},t.scrollThrottle),t.scrollWatchUpdateStateId||(t.scrollWatchUpdateStateId=setTimeout(function(){e.redraw(),t.scrollWatchUpdateStateId=null},t.scrollThrottle))};t.scrollView.addEventListener("scroll",c),l.onunload=function(){t.scrollView.removeEventListener("scroll",c)}}}},e("div",{class:v.scrollContent,style:t.autoSize?y({},"x"===n.axis?{width:t.contentSize+"px"}:{height:t.contentSize+"px"},n.contentSize?"x"===n.axis?{"min-width":n.contentSize+"px"}:{"min-height":n.contentSize+"px"}:{}):{}},[e(t.contentTag,{class:v.content},[n.before?e("div",{class:v.before,config:function(e){var t=z(e,n.axis);t&&(r.beforeSize=t)}},n.before):null,e("div",{class:v.pages},[c.map(function(t){return e(P,y({},n,{pageNum:t,pageId:q(t),pageSizes:r.pageSizes}))}),a.map(function(i){return e(A,y({},n,{pageNum:i,pageId:q(i),isScrolling:t.isScrolling,pageSizes:r.pageSizes,updatePageSize:J(t),autoSize:t.autoSize}))})]),n.after&&t.contentSize?e("div",{class:v.after,style:{visibility:p?"visible":"hidden"},config:function(e){var t=z(e,n.axis);t&&(r.afterSize=t)}},n.after):null])]))},G.isElementInViewport=x,G});
//# sourceMappingURL=mithril-infinite.js.map
