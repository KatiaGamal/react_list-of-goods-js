(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),i=n(6),o=n(8),r=(n(13),n(14),n(1)),a=n(4),l=n.n(a),u=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="alphabetically",h="length";var d=function(){var t=Object(r.useState)(""),e=Object(i.a)(t,2),n=e[0],s=e[1],c=Object(r.useState)(!1),a=Object(i.a)(c,2),d=a[0],g=a[1],p=function(t,e,n){var s=Object(o.a)(t);switch(e){case j:s.sort();break;case h:s.sort((function(t,e){return t.length-e.length}))}return n&&s.reverse(),s}(b,n,d),O=n||d;return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":n!==j}),onClick:function(){return s(j)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-success",{"is-light":n!==h}),onClick:function(){return s(h)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-warning",{"is-light":!d}),onClick:function(){return g(!d)},children:"Reverse"}),O&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){g(!1),s("")},children:"Reset"})]}),Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.72fdf9a4.chunk.js.map