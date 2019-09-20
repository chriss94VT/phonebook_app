(window.webpackJsonpphonebook_react=window.webpackJsonpphonebook_react||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},21:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),u=n.n(c),o=(n(21),n(1)),s=n.n(o),l=n(2),i=n(4),p=function(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{color:"black"}},t))},m=n(5),f=n.n(m),v={login:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),m=o[0],f=o[1],b=Object(a.useState)(null),d=Object(i.a)(b,2),h=(d[0],d[1]),w=Object(a.useState)(""),E=Object(i.a)(w,2),g=E[0],k=E[1],x=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={username:n,password:m},e.prev=2,e.next=5,v.login(a);case 5:r=e.sent,localStorage.setItem("token",r.token),h(r),c(""),f(""),k("Log in Successful"),window.location.reload(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),k("Failed to Log In"),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Log in to access the phonebook"),r.a.createElement(p,{message:g}),r.a.createElement("form",null,"username:"," ",r.a.createElement("input",{onChange:function(e){c(e.target.value)},value:n,type:"text"}),r.a.createElement("br",null),"password:"," ",r.a.createElement("input",{onChange:function(e){f(e.target.value)},value:m,type:"password"}),r.a.createElement("br",null),r.a.createElement("input",{onClick:x,value:"Login",type:"submit"})))},d="/api/persons",h="Bearer ".concat(localStorage.getItem("token")),w=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(d,{headers:{Authorization:h}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(d,t,{headers:{Authorization:h}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("".concat(d,"/").concat(t),n,{headers:{Authorization:h}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k={getAll:w,create:E,remove:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(d,"/").concat(t),{headers:{Authorization:h}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:g},x=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),m=o[0],f=o[1],v=Object(a.useState)(""),d=Object(i.a)(v,2),h=d[0],w=d[1],E=Object(a.useState)(""),g=Object(i.a)(E,2),x=g[0],j=g[1],O=Object(a.useState)(""),y=Object(i.a)(O,2),S=y[0],A=y[1],C=Object(a.useState)(!1),L=Object(i.a)(C,2),I=L[0],z=L[1],F=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.getAll();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(F,[]),Object(a.useEffect)(Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.getAll();case 3:z(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),z(!1);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),[]);var N=n.map((function(e){if(e.name.toLowerCase().trim().includes(x.toLowerCase().trim()))return r.a.createElement("div",{key:e.name},r.a.createElement("p",null,e.name," ",e.number),r.a.createElement("button",{onClick:function(){return D(e)}},"delete"))})),B=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,r,u,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),u={name:m,number:h},n.forEach(function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.name.toLowerCase().trim()!==m.toLowerCase().trim()){e.next=18;break}if(a=!0,r=window.confirm("".concat(m," has already been added to the phonebook, would you like to replace the number?")),e.prev=3,!r){e.next=13;break}return e.next=7,k.update(t.id,u);case 7:return e.next=9,k.getAll();case 9:n=e.sent,c(n),f(""),w("");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}()),a){e.next=18;break}return e.prev=4,e.next=7,k.create(u);case 7:o=e.sent,c(n.concat(o)),f(""),w(""),A("Added ".concat(m)),setTimeout((function(){A(null)}),5e3),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.remove(t.id);case 3:return e.next=5,k.getAll();case 5:n=e.sent,c(n),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),A("Information for ".concat(t.name," has already been removed from the server.")),setTimeout((function(){A(null)}),5e3);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,I?null:r.a.createElement(b,null),I?r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{message:S}),r.a.createElement("div",null,"filter shown with"," ",r.a.createElement("input",{onChange:function(e){j(e.target.value)},value:x})),r.a.createElement("div",null,r.a.createElement("h2",null,"Add New Number"),r.a.createElement("form",{onSubmit:B},r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:function(e){f(e.target.value)},value:m})),r.a.createElement("div",null,"number:"," ",r.a.createElement("input",{onChange:function(e){w(e.target.value)},value:h})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))),r.a.createElement("h2",null,"Numbers"),r.a.createElement("div",null,N)):null)};u.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.defe7ec5.chunk.js.map