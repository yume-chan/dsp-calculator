(this["webpackJsonpdsp-calculator"]=this["webpackJsonpdsp-calculator"]||[]).push([[0],{33:function(t,i,e){},35:function(t,i,e){},39:function(t,i,e){"use strict";e.r(i);var n=e(4),r=e(0),a=e.n(r),o=e(13),c=e.n(o),s=(e(33),e(23)),l=(e(34),["Circuit board","Coal ore","Copper ingot","Copper ore","Crude oil","Electric motor","Electromagnetic turbine","Gear","Graphene","Graphite","High-purity silicon","Interstellar logistics station","Iron ingot","Iron ore","Logistics station","Magnet","Magnetic coil","Microcrystalline component","Particle container","Processor","Refined oil","Silicon ore","Steel","Stone ore","Sulfuric acid","Titanium alloy","Titanium ingot","Titanium ore","Water"]),u={"Circuit board":{yields:2,ingredients:[{item:"Iron ingot",quantity:2},{item:"Copper ingot",quantity:1}]},"Copper ingot":{yields:1,ingredients:[{item:"Copper ore",quantity:1}]},"Electric motor":{yields:1,ingredients:[{item:"Iron ingot",quantity:2},{item:"Gear",quantity:1},{item:"Magnetic coil",quantity:1}]},"Electromagnetic turbine":{yields:1,ingredients:[{item:"Electric motor",quantity:2},{item:"Magnetic coil",quantity:2}]},Gear:{yields:1,ingredients:[{item:"Iron ingot",quantity:1}]},Graphene:{yields:2,ingredients:[{item:"Graphite",quantity:3},{item:"Sulfuric acid",quantity:1}]},Graphite:{yields:1,ingredients:[{item:"Coal ore",quantity:2}]},"Iron ingot":{yields:1,ingredients:[{item:"Iron ore",quantity:1}]},"High-purity silicon":{yields:1,ingredients:[{item:"Silicon ore",quantity:2}]},"Interstellar logistics station":{yields:1,ingredients:[{item:"Logistics station",quantity:1},{item:"Titanium alloy",quantity:50},{item:"Particle container",quantity:20}]},"Logistics station":{yields:1,ingredients:[{item:"Steel",quantity:50},{item:"Titanium ingot",quantity:50},{item:"Processor",quantity:50},{item:"Particle container",quantity:20}]},Magnet:{yields:1,ingredients:[{item:"Iron ore",quantity:1}]},"Magnetic coil":{yields:2,ingredients:[{item:"Magnet",quantity:2},{item:"Copper ingot",quantity:1}]},"Microcrystalline component":{yields:1,ingredients:[{item:"High-purity silicon",quantity:2},{item:"Copper ingot",quantity:1}]},"Particle container":{yields:1,ingredients:[{item:"Electromagnetic turbine",quantity:2},{item:"Copper ingot",quantity:2},{item:"Graphene",quantity:2}]},Processor:{yields:1,ingredients:[{item:"Circuit board",quantity:2},{item:"Microcrystalline component",quantity:2}]},"Refined oil":{yields:2,ingredients:[{item:"Crude oil",quantity:2}]},Steel:{yields:1,ingredients:[{item:"Iron ingot",quantity:3}]},"Sulfuric acid":{yields:4,ingredients:[{item:"Refined oil",quantity:6},{item:"Stone ore",quantity:8},{item:"Water",quantity:4}]},"Titanium alloy":{yields:4,ingredients:[{item:"Titanium ingot",quantity:4},{item:"Steel",quantity:4},{item:"Sulfuric acid",quantity:8}]},"Titanium ingot":{yields:1,ingredients:[{item:"Titanium ore",quantity:2}]}},d=e(27),y=e(44);e(35);function m(t,i,e,r){var a,o=u[t];return null===o||void 0===o||null===(a=o.ingredients)||void 0===a?void 0:a.map((function(t){var a=m(t.item,i*t.quantity,e,r);return Object(n.jsx)("ul",{children:Object(n.jsxs)("li",{children:[Object(n.jsxs)("a",{href:"#",onClick:function(){e(t.item),r(i*t.quantity)},children:[t.item,": ",i*t.quantity/o.yields]}),a]})})}))}var g=function(){var t=a.a.useState("Interstellar logistics station"),i=Object(s.a)(t,2),e=i[0],r=i[1],o=a.a.useState(1),c=Object(s.a)(o,2),u=c[0],g=c[1],p=l.map((function(t){return Object(n.jsx)(d.a.Item,{eventKey:t,children:t})})),q=m(e,u,r,g),b=Number.isNaN(u)?"Invalid quantity":q;return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"basic-addon",children:"Quantity"})}),Object(n.jsx)("input",{type:"number",className:"form-control",placeholder:"Quantity",value:u,onChange:function(t){return g(Number.parseInt(t.target.value))}})]}),Object(n.jsx)("br",{}),Object(n.jsx)(y.a,{id:"dropdown-basic-button",title:e,onSelect:function(t){r(t),g(1)},children:p}),Object(n.jsx)("br",{}),b]})})},p=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,45)).then((function(i){var e=i.getCLS,n=i.getFID,r=i.getFCP,a=i.getLCP,o=i.getTTFB;e(t),n(t),r(t),a(t),o(t)}))};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),p()}},[[39,1,2]]]);
//# sourceMappingURL=main.89ab4720.chunk.js.map