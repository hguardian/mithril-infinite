"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _appAppGithub=require("app/app/github");var _appAppGithub2=_interopRequireDefault(_appAppGithub);var _mithrilInfinite=require("mithril-infinite");var _mithrilInfinite2=_interopRequireDefault(_mithrilInfinite);var _appAppStyler=require("app/app/styler");var _appAppStyler2=_interopRequireDefault(_appAppStyler);var _horizontalStyle=require("./horizontal-style");var _horizontalStyle2=_interopRequireDefault(_horizontalStyle);_appAppStyler2["default"].add("horizontal",false,_horizontalStyle2["default"]);var IMG_URL="http://arthurclemens.github.io/assets/mithril-infinite-scroll/thumbs/";var vm={seen:{}};var fadeInImage=function fadeInImage(el,imgUrl){var url=IMG_URL+imgUrl;var showImage=function showImage(){el.style.backgroundImage="url("+url+")";el.style.opacity=1;vm.seen[url]=1};function _ref(){showImage()}if(!vm.seen[url]){var img=new Image;img.onload=_ref;img.src=url}else{showImage()}};var item=function item(data){return(0,_mithril2["default"])("a.grid-item",(0,_mithril2["default"])(".image-holder",(0,_mithril2["default"])(".image",{config:function config(el,inited,context){if(context.inited){return}if(_mithrilInfinite2["default"].isElementInViewport({el:el})){fadeInImage(el,data.src);context.inited=true}}})))};var component={};function _ref2(page){return"app/horizontal/data/page-"+page+".json"}function _ref3(content){return(content.length||12)*(210+2*4)}function _ref4(page){if(console){console.log("page",page)}}component.view=function(){return[_mithril2["default"].component(_mithrilInfinite2["default"],{maxPages:16,item:item,pageUrl:_ref2,"class":"horizontal",axis:"x",pageSize:_ref3,pageChange:_ref4}),(0,_appAppGithub2["default"])()]};exports["default"]=component;module.exports=exports["default"];