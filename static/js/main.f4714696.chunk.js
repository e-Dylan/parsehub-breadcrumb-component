(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n.n(r),a=n(6),s=n.n(a),l=(n(12),n(13),n(2)),u=n.n(l),o=n(4),j=n(3);n(15),n(16);function d(e){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],null!=t&&"dir"===t.type&&Object.keys(t.children).map((function(e,c){n.push({fileName:Object.keys(t.children)[c],fileType:t.children[e].type,path:t,ref:t.children[e]})})),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return Object(c.jsx)("span",{style:{margin:"40px"},children:"/"})}function f(e){var t=Object(r.useState)([]),n=Object(j.a)(t,2),i=n[0],a=n[1],s=Object(r.useState)(null),l=Object(j.a)(s,2),h=l[0],f=l[1],b=Object(r.useState)(e.changeDir(e.root)),m=Object(j.a)(b,2),O=m[0],x=m[1],y={name:"root",path:e.root,parent:void 0},v=Object(r.useState)([y]),g=Object(j.a)(v,2),N=g[0],C=g[1];function k(e){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),e.next=4,d(t);case 4:n=e.sent,a(n);case 6:return e.prev=6,f(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){a(k(e.root))}),[]),h?"loading...":Object(c.jsxs)("div",{children:[Object(c.jsx)("nav",{className:"breadcrumb-nav",children:Object(c.jsx)("ol",{className:"breadcrumb",children:N.map((function(t,n){return Object(c.jsxs)("li",{className:"crumb",children:[Object(c.jsx)(p,{}),Object(c.jsx)("a",{style:{color:n===N.length-1?"gray":"#0099ff"},onClick:function(){x(e.changeDir(t.path)),a(k(t.path)),C(e.updatePreviousCrumbs(N,n))},children:t.name})]},n)}))})}),Object(c.jsxs)("div",{className:"contents-container",children:[Object(c.jsxs)("div",{className:"content-bars",children:[Object(c.jsxs)("ul",{className:"file-bar",children:[Object(c.jsx)("li",{children:"File Name"}),Object(c.jsx)("li",{children:"Type"}),Object(c.jsx)("li",{children:"Created"}),Object(c.jsx)("li",{children:"Modified"})]}),i.map((function(t,n){return Object(c.jsxs)("ul",{className:"file-bar",children:[Object(c.jsx)("li",{className:"file-name",onClick:function(){C(e.addCrumb(N,O,t)),x(e.changeDir(t.ref)),a(k(t.ref))},children:t.fileName},t.children),Object(c.jsx)("li",{children:t.fileType}),Object(c.jsx)("li",{children:"0:00 PM"}),Object(c.jsx)("li",{children:"0:00 PM"})]},n)}))]}),N.length>0&&"file"===N[N.length-1].path.type&&Object(c.jsxs)("div",{className:"active-file",onClick:console.log(N),children:[Object(c.jsx)("span",{children:"Current open file: "}),Object(c.jsx)("a",{children:N[N.length-1].name})]})]})]})}var b={type:"dir",children:{home:{type:"dir",children:{myname:{type:"dir",children:{"filea.txt":{type:"file"},"fileb.txt":{type:"file"},projects:{type:"dir",children:{mysupersecretproject:{type:"dir",children:{mysupersecretfile:{type:"file"}}}}}}}}}}};function m(e,t,n){return e.push({name:n.fileName,path:n.ref,parent:t}),e}function O(e,t){return e=e.slice(0,t+1)}function x(e){return e}var y=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(f,{root:b,addCrumb:m,updatePreviousCrumbs:O,changeDir:x})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),v()}],[[17,1,2]]]);
//# sourceMappingURL=main.f4714696.chunk.js.map