(this.webpackJsonpskatteetaten=this.webpackJsonpskatteetaten||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),s=n.n(a),i=(n(14),n(6)),l=n(2),j=n.p+"static/media/logo.35b85e4b.svg",b=n(4),o=n(5),u=n(0),d={km:"",antall:""};var O=function(e){var t=e.id,n=e.handleEdit,r=Object(c.useState)(d),a=Object(l.a)(r,2),s=a[0],i=a[1],j=function(e){var c=e.target.value,r=e.target.name;i(Object(o.a)(Object(o.a)({},s),{},Object(b.a)({},r,c))),n(t,Object(o.a)(Object(o.a)({},s),{},Object(b.a)({},r,c)))};return Object(u.jsxs)("li",{"data-id":t,children:[Object(u.jsxs)("div",{className:"field-group floating-label",children:[Object(u.jsx)("input",{type:"number",name:"km",min:"0",placeholder:"Km",pattern:"[0-9]*",value:s.km,onChange:j}),Object(u.jsx)("label",{htmlFor:"km",children:"Km"})]}),Object(u.jsxs)("div",{className:"field-group floating-label",children:[Object(u.jsx)("input",{type:"number",name:"antall",min:"0",placeholder:"Antall",pattern:"[0-9]*",value:s.antall,onChange:j}),Object(u.jsx)("label",{htmlFor:"antall",children:"Antall"})]})]})};var h=function(e){var t=e.result;return null===t?Object(u.jsx)("div",{className:"info",children:Object(u.jsx)("h3",{children:"Noe gikk galt"})}):Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("h3",{children:"Ditt reisefradrag:"}),Object(u.jsxs)("span",{className:"number",children:[t," kr"]})]})},f=0,m={km:"",antall:""};var g=function(){var e=Object(c.useState)([m]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([m]),s=Object(l.a)(a,2),b=s[0],o=s[1],d=Object(c.useState)(""),g=Object(l.a)(d,2),x=g[0],p=g[1],v=Object(c.useState)(!1),k=Object(l.a)(v,2),y=k[0],N=k[1],S=Object(c.useState)(!1),C=Object(l.a)(S,2),B=C[0],E=C[1],F=Object(c.useState)(!1),A=Object(l.a)(F,2),K=A[0],w=A[1],J=Object(c.useState)(!1),D=Object(l.a)(J,2),L=D[0],P=D[1],T=Object(c.useState)(!1),z=Object(l.a)(T,2),I=z[0],M=z[1],R=function(e,t){var c=Object(i.a)(n);c[e]=t,r(c)},U=function(e,t){var n=Object(i.a)(b);n[e]=t,o(n)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("img",{src:j,className:"logo",alt:"logo"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Reiseregning"}),Object(u.jsx)("p",{children:"Beregning av reisefradrag"})]})]}),Object(u.jsxs)("main",{children:[!L&&!y&&K>=0&&!1!==K&&Object(u.jsx)(h,{result:K}),!L&&B&&Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("h3",{children:"Noe gikk galt"}),Object(u.jsx)("p",{children:"Pr\xf8v igjen senere eller ta kontakt med oss."})]}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),P(!1);var t=n.filter((function(e){return 2!==Object.values(e).filter((function(e){return""===e})).length})),c=b.filter((function(e){return 2!==Object.values(e).filter((function(e){return""===e})).length})),r=t.some((function(e){return!Object.values(e).every((function(e){return e}))})),a=c.some((function(e){return!Object.values(e).every((function(e){return e}))}));M(!(!r&&!a));var s={arbeidsreiser:t,besoeksreiser:c,utgifterBomFergeEtc:x};r||a||(N(!0),fetch("https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){N(!1),w(e.reisefradrag)})).catch((function(e){console.error("Error",e),E(!0),N(!1)})))},children:[Object(u.jsx)("h2",{children:"Arbeidsreiser"}),Object(u.jsx)("ul",{className:"reiser arbeidsreiser unstyled-list",children:n.map((function(e,t){return Object(u.jsx)(O,{id:t,handleEdit:R},"".concat(f,"-").concat(t))}))}),Object(u.jsx)("button",{type:"button",onClick:function(){var e=[].concat(Object(i.a)(n),[m]);r(e)},children:"Legg til arbeidsreise"}),Object(u.jsx)("h2",{children:"Bes\xf8ksreiser"}),Object(u.jsx)("ul",{className:"reiser besoeksreiser unstyled-list",children:b.map((function(e,t){return Object(u.jsx)(O,{id:t,handleEdit:U},"".concat(f,"-").concat(t))}))}),Object(u.jsx)("button",{type:"button",onClick:function(){var e=[].concat(Object(i.a)(b),[m]);o(e)},children:"Legg til bes\xf8ksreise"}),Object(u.jsx)("h2",{children:"Utgifter til bom, ferge etc."}),Object(u.jsxs)("div",{className:"field-group floating-label",children:[Object(u.jsx)("input",{type:"number",name:"utgifter",min:"0",placeholder:"Kr",pattern:"[0-9]*",value:x,onChange:function(e){return p(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"utgifter",children:"Kr"})]}),!y&&Object(u.jsx)("input",{type:"submit",value:"Beregn"}),y&&Object(u.jsx)("div",{className:"loader"}),!L&&I&&Object(u.jsx)("p",{className:"error-invalid-antall",children:"Fyll inn begge felt."}),Object(u.jsx)("hr",{}),Object(u.jsx)("button",{type:"button",onClick:function(){f+=1,r([m]),o([m]),p(""),P(!0)},className:"reset",children:"Begynn p\xe5 nytt"})]})]})]})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2f6ff316.chunk.js.map