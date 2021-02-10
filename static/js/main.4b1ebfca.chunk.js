(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{18:function(t,n,e){},20:function(t,n,e){},21:function(t,n,e){},22:function(t,n,e){"use strict";e.r(n);var c=e(3),s=e.n(c),r=e(12),a=e.n(r),i=(e(18),e(2)),o=e(1),u=e(0),l="Open",b="Closed",j="Done",d="Failed",f=function(t){return t.status===l},m=function(t){return t.status===j},O=function(t){return t.status===d},h=function(t){return f(t)||O(t)};function g(t){var n=t.cell,e=t.onClick,c=n.status,s=n.symbol;return Object(u.jsx)("div",{className:"cell ".concat(y(c)),onClick:e,children:c===b?"":Object(u.jsx)("img",{src:s,alt:"Rick n Morty",className:"img"})})}function y(t){return t.toLowerCase()}var x=e(13);function v(t){if(t.length<2)return!0;var n=Object(x.a)(t),e=n[0],c=n.slice(1);return o.a(o.d(e),c)}o.c((function(t,n){return o.i(o.f("".concat(t,".status")),n)}));var p=o.c((function(t,n,e){return o.h(o.f("".concat(t,".status")),n,e)})),k=o.c((function(t,n,e){return o.g((function(e){return t(e)?Object(i.a)(Object(i.a)({},e),{},{status:n}):e}),e)})),C=o.c((function(t,n){return o.b((function(n){return t(n)?[n.status]:[]}),n)})),L=o.c((function(t,n){return o.b((function(n){return t(n)?[n.symbol]:[]}),n)}));o.c((function(t,n){return t<n.length&&n[t].status===b&&C(h,n).length<2}));function N(t){var n=t.board,e=t.onClickAt;return Object(c.useEffect)((function(){n.sort((function(){return Math.random()-.5}))}),[]),Object(u.jsx)("div",{className:"board",children:n.map((function(t,n){return Object(u.jsx)(g,{cell:t,onClick:function(t){return e(n)}},n)}))})}function R(t){var n=t.className,e=t.children;return Object(u.jsx)("div",{className:"screen ".concat(n),children:e})}var S=e(5);function w(t){var n=t.status,e=t.board,c=t.onClickAt;switch(n){case G.Running:return Object(u.jsx)(N,{board:e,onClickAt:c});case G.Stopped:return Object(u.jsx)(R,{className:"gray",children:Object(u.jsxs)("div",{style:{textAlign:"center"},children:[Object(u.jsx)("h1",{children:"Memory Game"}),Object(u.jsx)("p",{children:"Click anywhere to start!"})]})});case G.Won:return Object(u.jsx)(R,{className:"green",children:Object(u.jsxs)("div",{style:{textAlign:"center",color:"green"},children:[Object(u.jsx)("h1",{className:"victory-title",children:"Victory!"}),Object(u.jsx)("p",{className:"victory-text",children:"Click anywhere to try again!"})]})});case G.Lost:return Object(u.jsx)(R,{className:"red",children:Object(u.jsxs)("div",{style:{textAlign:"center"},children:[Object(u.jsx)("h1",{className:"main-text",children:"Defeat!"}),Object(u.jsx)("p",{className:"text",children:"Click anywhere to try again!"})]})})}}function A(t){var n=t.status,e=t.secondsLeft;return Object(u.jsx)("div",{className:"status-line",children:Object(u.jsx)("div",{className:"timer",children:n===G.Running&&"Seconds left: ".concat(e)})})}var F=o.c((function(t,n){return Object(i.a)(Object(i.a)({},n),{},{status:t})})),M=function(t){return Object(i.a)(Object(i.a)({},t),{},{secondsLeft:Math.max(t.secondsLeft-1,0)})};function E(){var t=Object(c.useState)(Object(i.a)(Object(i.a)({},V()),{},{status:G.Stopped})),n=Object(S.a)(t,2),e=n[0],s=n[1],r=e.board,a=e.status,l=e.secondsLeft;return Object(c.useEffect)((function(t){if(a===G.Running){if(function(t){return o.e(m,t.board).length===t.board.length}(e))return s(F(G.Won));if(function(t){return!t.secondsLeft}(e))return s(F(G.Lost))}}),[e]),Object(c.useEffect)((function(t){!function(t){var n=L(f,t);return n.length>=2&&v(n)}(r)?function(t){var n=L(f,t);return n.length>=2&&!v(n)}(r)&&(s(H),setTimeout((function(t){s(K)}),500)):s(z)}),[r]),Object(c.useEffect)((function(t){var n=null;return a!==G.Running||n||(n=setInterval((function(){s(M)}),1e3)),function(){clearInterval(n)}}),[a]),Object(u.jsxs)("div",{onClick:function(){a!==G.Running&&s(V)},children:[Object(u.jsx)(A,{status:a,secondsLeft:l}),Object(u.jsx)(w,{status:a,board:r,onClickAt:function(t){a===G.Running&&s(q(t))}})]})}var D=e.p+"static/media/beth.29a4c2a2.jpg",I=e.p+"static/media/green.e05003c6.jpg",W=e.p+"static/media/morty.26c22d26.jpg",T=e.p+"static/media/Rick-and-Morty-Doaly.0716bb12.jpg",B=e.p+"static/media/rick-and-morty.c57b1dc2.jpg",J=e.p+"static/media/bad.5ba423ac.jpg",P=[{symbol:D,status:b},{symbol:I,status:b},{symbol:W,status:b},{symbol:T,status:b},{symbol:B,status:b},{symbol:J,status:b},{symbol:D,status:b},{symbol:I,status:b},{symbol:W,status:b},{symbol:T,status:b},{symbol:B,status:b},{symbol:J,status:b}];e(20),e(21);var G={Stopped:"Stopped",Running:"Running",Won:"Won",Lost:"Lost"},V=function(t){return{board:P,secondsLeft:60,status:G.Running}},q=o.c((function(t,n){return Object(i.a)(Object(i.a)({},n),{},{board:p(t,l,n.board)})})),z=function(t){return Object(i.a)(Object(i.a)({},t),{},{board:k(f,j,t.board)})},H=function(t){return Object(i.a)(Object(i.a)({},t),{},{board:k(f,d,t.board)})},K=function(t){return Object(i.a)(Object(i.a)({},t),{},{board:k(O,b,t.board)})},Q=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(E,{})})},U=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,23)).then((function(n){var e=n.getCLS,c=n.getFID,s=n.getFCP,r=n.getLCP,a=n.getTTFB;e(t),c(t),s(t),r(t),a(t)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(Q,{})}),document.getElementById("root")),U()}},[[22,1,2]]]);
//# sourceMappingURL=main.4b1ebfca.chunk.js.map