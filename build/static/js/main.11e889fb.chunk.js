(window.webpackJsonpphonebook_react=window.webpackJsonpphonebook_react||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},21:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),u=n.n(c),o=(n(21),n(1)),l=n.n(o),s=n(2),i=n(4),p=function(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{color:"black"}},t))},m=n(5),f=n.n(m),v={login:function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/auth",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),checkStatus:function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("/api/auth","/checkStatus?token=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],u=n[1],o=Object(a.useState)(""),m=Object(i.a)(o,2),f=m[0],b=m[1],d=Object(a.useState)(""),h=Object(i.a)(d,2),w=h[0],E=h[1],k=Object(a.useState)(!1),g=Object(i.a)(k,2),x=g[0],j=g[1],O=function(){var e=Object(s.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:c,password:f},e.prev=2,e.next=5,v.login(n);case 5:a=e.sent,localStorage.setItem("token",a.token),u(""),b(""),E("Log in Successful"),window.location.reload(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),E("Failed to Log In"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,x?r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement(p,{message:w}),r.a.createElement("form",null,"username:"," ",r.a.createElement("input",{onChange:function(e){u(e.target.value)},value:c,type:"text"}),r.a.createElement("br",null),"password:"," ",r.a.createElement("input",{onChange:function(e){b(e.target.value)},value:f,type:"password"}),r.a.createElement("br",null),r.a.createElement("input",{onClick:O,value:"Login",type:"submit"}))):null,r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){j(!0)}},"Show Log In"),r.a.createElement("button",{onClick:function(e){j(!1)}},"Cancel")))},d=function(e){return r.a.createElement("div",null,e.children)},h="/api/persons",w="Bearer ".concat(localStorage.getItem("token")),E=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(h,{headers:{Authorization:w}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(h,t,{headers:{Authorization:w}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("".concat(h,"/").concat(t),n,{headers:{Authorization:w}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x={getAll:E,create:k,remove:function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(h,"/").concat(t),{headers:{Authorization:w}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:g},j=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),m=o[0],f=o[1],h=Object(a.useState)(""),w=Object(i.a)(h,2),E=w[0],k=w[1],g=Object(a.useState)(""),j=Object(i.a)(g,2),O=j[0],y=j[1],S=Object(a.useState)(""),C=Object(i.a)(S,2),A=C[0],L=C[1],I=Object(a.useState)(!1),z=Object(i.a)(I,2),F=z[0],N=z[1];Object(a.useEffect)(Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.checkStatus(window.localStorage.getItem("token"));case 3:t=e.sent,N(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);var B=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getAll();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(B,[]);var D=n.map((function(e){if(e.name.toLowerCase().trim().includes(O.toLowerCase().trim()))return r.a.createElement("div",{key:e.name},r.a.createElement("p",null,e.name," ",e.number),r.a.createElement("button",{onClick:function(){return P(e)}},"delete"))})),J=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,r,u,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),u={name:m,number:E},n.forEach(function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.name.toLowerCase().trim()!==m.toLowerCase().trim()){e.next=18;break}if(a=!0,r=window.confirm("".concat(m," has already been added to the phonebook, would you like to replace the number?")),e.prev=3,!r){e.next=13;break}return e.next=7,x.update(t.id,u);case 7:return e.next=9,x.getAll();case 9:n=e.sent,c(n),f(""),k("");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}()),a){e.next=18;break}return e.prev=4,e.next=7,x.create(u);case 7:o=e.sent,c(n.concat(o)),f(""),k(""),L("Added ".concat(m)),setTimeout((function(){L(null)}),5e3),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.remove(t.id);case 3:return e.next=5,x.getAll();case 5:n=e.sent,c(n),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),L("Information for ".concat(t.name," has already been removed from the server.")),setTimeout((function(){L(null)}),5e3);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),F?null:r.a.createElement(d,null,r.a.createElement(b,null)),r.a.createElement("div",null,F?r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{message:A}),r.a.createElement("div",null,"filter shown with"," ",r.a.createElement("input",{onChange:function(e){y(e.target.value)},value:O})),r.a.createElement("div",null,r.a.createElement("h2",null,"Add New Number"),r.a.createElement("form",{onSubmit:J},r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:function(e){f(e.target.value)},value:m})),r.a.createElement("div",null,"number:"," ",r.a.createElement("input",{onChange:function(e){k(e.target.value)},value:E})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))),r.a.createElement("h2",null,"Numbers"),r.a.createElement("div",null,D)):null))};u.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.11e889fb.chunk.js.map