(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),r=n.n(i),l=n(6),s=n.n(l),a=(n(12),n(13),n(2)),u=n.n(a),j=n(4),o=n(3),f=(n(15),n(16),{type:"dir",children:{home:{type:"dir",children:{myname:{type:"dir",children:{"filea.txt":{type:"file"},"fileb.txt":{type:"file"},projects:{type:"dir",children:{mysupersecretproject:{type:"dir",children:{mysupersecretfile:{type:"file"}}}}}}}}}}});function d(e){return p.apply(this,arguments)}function p(){return(p=Object(j.a)(u.a.mark((function e(t){var n,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=f,c=[],t=(t=t.split("/")).slice(1,t.length),i=0;i<t.length;i++)n=n.children[t[i]];return"dir"===n.type?Object.keys(n.children).map((function(e,t){var i={fileName:Object.keys(n.children)[t],fileType:n.children[e].type};c.push(i)})):n.type,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return Object(c.jsx)("span",{style:{margin:"40px"},children:"/"})}function h(e){var t=Object(i.useState)([]),n=Object(o.a)(t,2),r=n[0],l=n[1],s=Object(i.useState)(null),a=Object(o.a)(s,2),f=a[0],p=a[1],h=Object(i.useState)(null),O=Object(o.a)(h,2),m=O[0],x=O[1],y=Object(i.useState)("root"),v=Object(o.a)(y,2),N=v[0],g=v[1],C=Object(i.useState)([N]),k=Object(o.a)(C,2),S=k[0],w=k[1];function T(){return(T=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,d(t);case 4:n=e.sent,l(n);case 6:return e.prev=6,x(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})))).apply(this,arguments)}return Object(i.useEffect)((function(){l(function(e){return T.apply(this,arguments)}(N)),w(N.split("/"))}),[N]),Object(i.useEffect)((function(){w(N.split("/"))}),[]),m?"loading...":Object(c.jsxs)("div",{children:[Object(c.jsx)("nav",{className:"breadcrumb-nav",children:Object(c.jsx)("ol",{className:"breadcrumb",children:S.map((function(e,t){return Object(c.jsxs)("li",{className:"crumb",children:[Object(c.jsx)(b,{}),Object(c.jsx)("a",{style:{color:t===S.length-1?"gray":"#0099ff"},onClick:function(){var e="",n=N.split("/");console.log(n);for(var c=0;c<t+1;c++)e+=c==t?"".concat(n[c]):"".concat(n[c],"/");console.log(e),g(e)},children:e})]},t)}))})}),Object(c.jsx)("div",{className:"contents-container",children:Object(c.jsxs)("div",{className:"content-bars",children:[Object(c.jsxs)("ul",{className:"file-bar",children:[Object(c.jsx)("li",{children:"File Name"}),Object(c.jsx)("li",{children:"Type"}),Object(c.jsx)("li",{children:"Created"}),Object(c.jsx)("li",{children:"Modified"})]}),r.map((function(e,t){return Object(c.jsxs)("ul",{className:"file-bar",children:[Object(c.jsx)("li",{className:"file-name",onClick:function(){g(N+"/"+e.fileName),"file"===e.fileType?p(e.fileName):p(null)},children:e.fileName},e.fileName),Object(c.jsx)("li",{children:e.fileType}),Object(c.jsx)("li",{children:"0:00 PM"}),Object(c.jsx)("li",{children:"0:00 PM"})]},t)})),f&&Object(c.jsxs)("div",{className:"active-file",children:[Object(c.jsx)("span",{children:"Current open file: "}),Object(c.jsx)("a",{children:f})]})]})})]})}function O(e,t,n){return e.push({name:n.fileName,path:n.ref,parent:t}),e}function m(e,t){return e=e.slice(0,t+1)}function x(e){return e}var y=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(h,{addCrumb:O,updatePreviousCrumbs:m,changeDir:x})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),i(e),r(e),l(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),v()}],[[17,1,2]]]);
//# sourceMappingURL=main.fa27e058.chunk.js.map