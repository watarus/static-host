!function(){"use strict";var p=function(){return(p=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function e(a,i,l,c){return new(l=l||Promise)(function(e,t){function o(e){try{n(c.next(e))}catch(e){t(e)}}function r(e){try{n(c.throw(e))}catch(e){t(e)}}function n(t){t.done?e(t.value):new l(function(e){e(t.value)}).then(o,r)}n((c=c.apply(a,i||[])).next())})}function f(o,r){var n,a,i,e,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,a&&(i=2&t[0]?a.return:t[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,t[1])).done)return i;switch(a=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,a=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(i=0<(i=l.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){l.label=t[1];break}if(6===t[0]&&l.label<i[1]){l.label=i[1],i=t;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(t);break}i[2]&&l.ops.pop(),l.trys.pop();continue}t=r.call(o,l)}catch(e){t=[6,e],a=0}finally{n=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function d(e){var t=document.getElementById("root");if(!t)throw new Error("Could not find root element");var o=t.offsetWidth,r=.75*o,n=e.offsetParent?"":"width:"+o+"px;height:"+r+"px;";e.setAttribute("style",n)}var m={japan:{Hokkaido:{top:38,left:127,width:5},Okinawa:{top:30,left:138,width:6}},us:{Alaska:{left:-128,top:22,width:18},Hawaii:{left:-100,top:18,width:5}},world:{}};function h(){return{lightColorMapOption:{backgroundColor:"#FFFFFF",visualMap:[{pieces:[{min:1e4,color:"#B30000"},{min:1e3,max:1e4,color:"#F4261A"},{min:100,max:1e3,color:"#FF6B25"},{min:10,max:100,color:"#FFAD3F"},{min:1,max:10,color:"#FAF463"},{max:1,color:"#E5E5E5"}]}],geo:{itemStyle:{areaColor:"#E5E5E5",borderColor:"#F2F2F299"}}},darkColorMapOption:{backgroundColor:"#2A2A2A",visualMap:[{pieces:[{min:1e4,color:"#B30000"},{min:1e3,max:1e4,color:"#F4261A"},{min:100,max:1e3,color:"#FF6B25"},{min:10,max:100,color:"#FFAD3F"},{min:1,max:10,color:"#FAF463"},{max:1,color:"#3D3D3D"}]}],geo:{itemStyle:{areaColor:"#3D3D3D",borderColor:"#F2F2F299"}}}}}var t=h(),F=t.lightColorMapOption,w=t.darkColorMapOption;function o(e){return t=".js-"+e+"-input",(o=document.querySelector(t))?JSON.parse(o.value):null;var t,o}var r=(n.prototype.run=function(){return e(this,void 0,void 0,function(){return f(this,function(e){switch(e.label){case 0:return[4,this.buildMap()];case 1:return e.sent(),[2]}})})},n.prototype.buildMap=function(){return e(this,void 0,void 0,function(){var o,r,n,a,i,l,c,s,u;return f(this,function(e){switch(e.label){case 0:return o=this.source,r="us",n=document.querySelector(".js-us-map-container"),[4,this.getGeoJson()];case 1:return a=e.sent(),d(n),i=echarts.init(n),echarts.registerMap(r,a,m[r]),(l={dataset:[],toolbox:{show:!(t="#5997E9")},tooltip:{trigger:"item",formatter:function(e){if(!e.data)return"";var t=(e.data?""+e.value:"0").split(".")[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,");return(e.data.displayName||e.data.name)+": "+t}},background:"#FFFFFF",visualMap:{type:"piecewise",show:!1,pieces:[{min:1e4,color:"#B30000"},{min:1e3,max:1e4,color:"#F4261A"},{min:100,max:1e3,color:"#FF6B25"},{min:10,max:100,color:"#FFAD3F"},{min:1,max:10,color:"#FAF463"},{max:1,color:"#E5E5E5"}]},series:[{type:"map",geoIndex:0}],geo:{map:r,zoom:1.2,roam:!1,itemStyle:{areaColor:"#E5E5E5",borderColor:"#F2F2F299"},emphasis:{itemStyle:{areaColor:t},label:{show:!1}}}}).tooltip.formatter=function(e){return e.data?e.data.displayName||e.data.name:""},l.dataset=[{source:o}],i.setOption(l),i.setOption({visualMap:[{type:"piecewise",left:"right",min:5e5,max:38e6,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]},text:["High","Low"],calculable:!0}]}),c=h(),s=c.lightColorMapOption,u=c.darkColorMapOption,s.visualMap=[{pieces:[{min:1,max:10,color:"#B74493"},{max:1,color:"#E5E5E5"}]}],u.visualMap=[{pieces:[{min:1,max:10,color:"#B74493"},{max:1,color:"#E5E5E5"}]}],s.geo=p(p({},s.geo),{itemStyle:{areaColor:"#E7EDF1",borderColor:"#00000030"}}),u.geo=p(p({},u.geo),{itemStyle:{areaColor:"#3D3D3D",borderColor:"#FFFFFF30"}}),function(e,t,o,r){if(void 0===o&&(o=F),void 0===r&&(r=w),window.addEventListener("resize",function(){d(t),e.resize()}),window.matchMedia){var n=window.matchMedia("(prefers-color-scheme: dark)"),a=function(){n.matches?e.setOption(r):e.setOption(o)};a(),n.onchange=a}}(i,n,s,u),[2]}var t})})},n.prototype.getGeoJson=function(){return e(this,void 0,void 0,function(){var t,o;return f(this,function(e){switch(e.label){case 0:return t="geojson/us.json",[4,fetch(t)];case 1:if(200!==(o=e.sent()).status)throw new Error("Got response code "+o.status+" from "+t);return[4,o.json()];case 2:return[2,e.sent()]}})})},Object.defineProperty(n.prototype,"source",{get:function(){return this.states.map(function(e){return{name:e,displayName:e,value:1}})},enumerable:!0,configurable:!0}),n.defaultInstance=new n,n);function n(){this.states=o("states"),this.run=this.run.bind(this)}window.addEventListener("load",r.defaultInstance.run)}();
