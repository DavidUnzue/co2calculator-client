(this["webpackJsonpco2e-calculator-client"]=this["webpackJsonpco2e-calculator-client"]||[]).push([[0],{169:function(e,t,n){e.exports=n(354)},174:function(e,t,n){},176:function(e,t,n){},354:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(52),i=n.n(o),l=(n(174),n(16)),c=n.n(l),u=n(37),s=n(14),f=n(15),h=n(31),d=n(30),p=(n(176),n(53)),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={originId:void 0,destinationId:void 0},e.handleChange=function(t){e.setState(Object(p.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){e.props.onSubmit(e.state.originId,e.state.destinationId)},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this.state,t=e.originId,n=e.destinationId,a=this.props,o=a.origins,i=a.destinations;return r.a.createElement("form",{className:"Selector"},r.a.createElement("div",{className:"Selector-dropdowns"},r.a.createElement("div",{className:"Selector-origin"},r.a.createElement("label",{htmlFor:"originId"},"From: "),r.a.createElement("select",{name:"originId",id:"originId",defaultValue:"default",onChange:this.handleChange},r.a.createElement("option",{value:"default",disabled:!0},"-- Origin --"),o.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id,disabled:e.id===n},e.label)})))),r.a.createElement("div",{className:"Selector-destination"},r.a.createElement("label",{htmlFor:"destinationId"},"To: "),r.a.createElement("select",{name:"destinationId",id:"destinationId",defaultValue:"default",onChange:this.handleChange},r.a.createElement("option",{value:"default",disabled:!0},"-- Destination --"),i.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id,disabled:e.id===t},e.label)}))))),r.a.createElement("button",{type:"button",className:"Selector-button",onClick:this.handleSubmit,disabled:!t||!n},"Calculate"))}}]),n}(r.a.Component);v.defaultProps={origins:[],destinations:[]};var m=v,g=n(18);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=r.a.createElement("path",{d:"M8.4 12H2.8L1 15H0V5h1l1.8 3h5.6L6 0h2l4.8 8H18a2 2 0 1 1 0 4h-5.2L8 20H6l2.4-8z"}),E=function(e){var t=e.svgRef,n=e.title,a=y(e,["svgRef","title"]);return r.a.createElement("svg",b({viewBox:"0 0 20 20",ref:t},a),n?r.a.createElement("title",null,n):null,O)},w=r.a.forwardRef((function(e,t){return r.a.createElement(E,b({svgRef:t},e))}));n.p;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S=r.a.createElement("path",{d:"M2 14v-3H1a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1l4-7h8l4 7h1a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3zm13.86-5L13 4H7L4.14 9h11.72zM5.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}),x=function(e){var t=e.svgRef,n=e.title,a=k(e,["svgRef","title"]);return r.a.createElement("svg",j({viewBox:"0 0 20 20",ref:t},a),n?r.a.createElement("title",null,n):null,S)},R=r.a.forwardRef((function(e,t){return r.a.createElement(x,j({svgRef:t},e))}));n.p;function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var H=r.a.createElement("path",{d:"M12 18H8l-2 2H3l2-2a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2l2 2h-3l-2-2zM5 5v6h10V5H5zm1.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM8 2v1h4V2H8z"}),L=function(e){var t=e.svgRef,n=e.title,a=C(e,["svgRef","title"]);return r.a.createElement("svg",I({viewBox:"0 0 20 20",ref:t},a),n?r.a.createElement("title",null,n):null,H)},P=r.a.forwardRef((function(e,t){return r.a.createElement(L,I({svgRef:t},e))})),z=(n.p,function(e){return r.a.createElement("span",null,e," kg")}),M=function(e){return r.a.createElement("span",null,"CO2e ",e," (kg)")},N=function(e){var t=e.x,n=e.y,a=e.payload.value;switch(a){case"car":return r.a.createElement(R,{x:t-30,y:n-12,width:24,height:24,title:a});case"train":return r.a.createElement(P,{x:t-30,y:n-12,width:24,height:24,title:a});case"plane":return r.a.createElement(w,{x:t-30,y:n-12,width:24,height:24,title:a});default:return r.a.createElement("span",null,a)}},B=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props.routes.map((function(e){return{vehicle:e.vehicle,footprint:e.footprint}}));return r.a.createElement(g.b,{layout:"vertical",width:800,height:350,data:e},r.a.createElement(g.c,{strokeDasharray:"3 3"}),r.a.createElement(g.f,{type:"number"}),r.a.createElement(g.g,{type:"category",dataKey:"vehicle",tick:N}),r.a.createElement(g.e,{formatter:z}),r.a.createElement(g.d,{formatter:M}),r.a.createElement(g.a,{dataKey:"footprint",fill:"#82ca9d"}))}}]),n}(r.a.Component),V=n(82),A={apiRoot:"https://co2e-calculator.herokuapp.com/"},D=new(function(){function e(){Object(s.a)(this,e),this.urlRoot=void 0,this.defaultOptions=void 0,this.urlRoot="".concat(A.apiRoot),this.defaultOptions={redirect:"follow"}}return Object(f.a)(e,[{key:"get",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t,n,a,r,o,i,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"",n=l.length>1&&void 0!==l[1]?l[1]:{},a=l.length>2?l[2]:void 0,r="".concat(this.urlRoot).concat(t),n&&(o=new URLSearchParams(n),r="".concat(r,"?").concat(o.toString())),e.prev=5,e.next=8,fetch(r,Object(V.a)(Object(V.a)({},this.defaultOptions),a));case 8:if((i=e.sent).ok){e.next=11;break}throw new Error("Bad request");case 11:return e.abrupt("return",i.json());case 14:throw e.prev=14,e.t0=e.catch(5),new Error(e.t0);case 17:case"end":return e.stop()}}),e,this,[[5,14]])})));return function(){return e.apply(this,arguments)}}()}]),e}()),F=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={origins:[],destinations:[],routes:[],isLoading:!1,error:!1},e.fetchRoutes=function(){var t=Object(u.a)(c.a.mark((function t(n,a){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.prev=1,t.next=4,D.get("routes",{origin:n,destination:a});case 4:r=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e.setState({error:!0});case 10:return t.prev=10,e.setState({routes:r,isLoading:!1}),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[1,7,10,13]])})));return function(e,n){return t.apply(this,arguments)}}(),e.handleSubmit=function(t,n){e.setState({error:!1,isLoading:!0},(function(){return e.fetchRoutes(t,n)}))},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("places");case 2:t=e.sent,this.setState({origins:t,destinations:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.origins,n=e.destinations,a=e.isLoading,o=e.routes,i=e.error;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Calculate your CO2e footprint"),r.a.createElement(m,{origins:t,destinations:n,onSubmit:this.handleSubmit}),r.a.createElement("div",{className:"Chart"},i?r.a.createElement("p",{className:"Alert"},"Error: Unable to retrieve the footprint data. Try again."):a?r.a.createElement("p",null,"Loading..."):o.length<=0?r.a.createElement("p",null,"Select a route first"):r.a.createElement(B,{routes:o})))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[169,1,2]]]);
//# sourceMappingURL=main.25a4f732.chunk.js.map