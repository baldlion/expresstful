!function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(1);Object.defineProperty(r,"expresstful",{enumerable:!0,get:function(){return n.expresstful}});var o=t(3);Object.defineProperty(r,"controller",{enumerable:!0,get:function(){return o.controller}}),Object.defineProperty(r,"all",{enumerable:!0,get:function(){return o.all}}),Object.defineProperty(r,"del",{enumerable:!0,get:function(){return o.del}}),Object.defineProperty(r,"get",{enumerable:!0,get:function(){return o.get}}),Object.defineProperty(r,"post",{enumerable:!0,get:function(){return o.post}}),Object.defineProperty(r,"put",{enumerable:!0,get:function(){return o.put}})},function(e,r,t){"use strict";function n(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.expresstful=function(e){var r=new o.Router;return e.forEach(function(e){var t=new e,o=!0,u=!1,a=void 0;try{for(var l,f=t.$routes[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var i=l.value,c=i.method,p=i.path,d=i.middleware,s=i.routeFn;r[c].apply(r,[p].concat(n(d),[t[s].bind(t)]))}}catch(e){u=!0,a=e}finally{try{!o&&f.return&&f.return()}finally{if(u)throw a}}}),r};var o=t(2)},function(e,r){e.exports=require("express")},function(e,r,t){"use strict";function n(e,r){for(var t=arguments.length,n=Array(t>2?t-2:0),u=2;u<t;u++)n[u-2]=arguments[u];return function(t,u){t[""+o+u]={method:e,path:r,middleware:n}}}Object.defineProperty(r,"__esModule",{value:!0}),r.controller=function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return function(r,n,u){var a=r.prototype;a.$routes=Object.getOwnPropertyNames(a).filter(function(e){return 0===e.indexOf(o)}).map(function(r){var n=a[r],u=t.concat(n.middleware),l=n.method,f=n.path.length>1?n.path:"",i=r.substring(o.length);return{method:l,path:""+e+f,middleware:u,routeFn:i}})}},r.route=n,r.all=function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return n("all",e,t)},r.del=function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return n("delete",e,t)},r.get=function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return n("get",e,t)},r.post=function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return n("post",e,t)},r.put=function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return n("put",e,t)};var o=r.PREFIX="$$route_"}]);