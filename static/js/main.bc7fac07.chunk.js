(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{23:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);t(23);var r,c,a,i,o,b,u=t(0),d=t.n(u),l=t(11),s=t.n(l),j=t(6),m=t(17),O=t(3),f=t(4),p=f.a.h1(r||(r=Object(O.a)(["\nmargin-left: 75px;\ncolor: gray;\n"]))),x=f.a.h2(c||(c=Object(O.a)(["\n  margin-left: 75px;\n  color: gray;\n"]))),h=t(16),g=f.a.form(a||(a=Object(O.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 40px;\n  padding: 30px;\n  border: none;\n  border-radius: 4px;\n"]))),v=f.a.label(i||(i=Object(O.a)(["\n  font-size: 14px;\n"]))),y=f.a.input(o||(o=Object(O.a)(["\n  padding: 4px;\n  margin-top: 4px;\n"]))),C=f.a.button(b||(b=Object(O.a)(["\n  width: fit-content;\n  padding: 10px;\n  margin-top: 8px;\n  font-size: 14px;\n  background-color: #0e67eb;\n  border: none;\n  border-radius: 10px;\n  &:hover,\n  &:active {\n    cursor: pointer;\n    background-color: #0e67eb;\n  }\n"]))),w=t(38),k=t(18),z=t(7),A=Object(z.b)("contact/addContact",(function(e){var n=e.name,t=e.number;return{payload:{id:Object(w.a)(),name:n,number:t}}})),F=Object(z.b)("contact/removeContact"),S=Object(z.b)("contact/filteredContacts"),L=function(e){return e.contacts.items},I=t(1);var J,N,Z=Object(j.b)((function(e){return{contacts:e.contacts.item}}),(function(e){return{onSubmit:function(n){return e(A(n))}}}))((function(){var e=Object(u.useState)(""),n=Object(h.a)(e,2),t=n[0],r=n[1],c=Object(u.useState)(""),a=Object(h.a)(c,2),i=a[0],o=a[1],b=Object(j.d)(L),d=Object(j.c)(),l=Object(w.a)(),s=Object(w.a)(),m=function(e){var n=e.target,t=n.value;switch(n.name){case"name":r(t);break;case"number":o(t);break;default:return}},O=function(){var e={name:t,number:i};b.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?f(e.name):d(A(e))},f=function(e){return k.Notify.warning(e+" is already in contacts.")};return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(g,{action:"",onSubmit:function(e){e.preventDefault(),O(),r(""),o("")},children:[Object(I.jsx)(v,{htmlFor:"name",children:"Name"}),Object(I.jsx)(y,{onChange:m,type:"text",name:"name",id:l,value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(I.jsx)(v,{htmlFor:"number",children:"Number"}),Object(I.jsx)(y,{onChange:m,type:"tel",name:"number",id:s,value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(I.jsx)(C,{type:"submit",children:" Add contact"})]})})})),q=f.a.ul(J||(J=Object(O.a)(["\n  list-style-type: circle;\n  margin-left: 20px;\n"]))),B=f.a.li(N||(N=Object(O.a)(["\n  margin-top: 8px;\n  font-size: 18px;\n"])));var D,E,M,H=function(e){return e.contacts.items.filter((function(n){return n.name.toLowerCase().includes(e.contacts.filter.toLowerCase())}))},K=Object(j.b)((function(e){return{contacts:H(e)}}),(function(e){return{deleteId:function(n){return e(F(n))}}}))((function(e){var n=e.contacts,t=e.deleteId;return Object(I.jsx)("div",{children:Object(I.jsx)(q,{children:n.map((function(e){var n=e.id,r=e.name,c=e.number;return Object(I.jsxs)(B,{children:[r," - ",c," ",Object(I.jsx)(C,{type:"button",onClick:function(){return t(n)},children:"Delete"})]},n)}))})})})),P=f.a.div(D||(D=Object(O.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 60px;\n"]))),R=f.a.input(E||(E=Object(O.a)(["\n  padding: 4px;\n  margin-top: 4px;\n"]))),T=f.a.label(M||(M=Object(O.a)(["\n  font-weight: 500;\n"]))),$=Object(j.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(n){return e(S(n.target.value))}}}))((function(e){var n=e.value,t=e.onChange;return Object(I.jsxs)(P,{children:[Object(I.jsx)(T,{htmlFor:"filter",children:"Find contacts by name"}),Object(I.jsx)(R,{type:"text",name:"filter",value:n,onChange:t})]})}));function G(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(p,{children:"Phonebook"}),Object(I.jsx)(Z,{}),Object(I.jsx)(x,{children:"Contacts"}),Object(I.jsx)($,{}),Object(I.jsx)(K,{})]})}var Q,U=t(2),V=t(8),W=t(19),X=t.n(W),Y=t(13),_=t(20),ee=Object(z.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(Q={},Object(Y.a)(Q,A,(function(e,n){var t=n.payload;return[].concat(Object(_.a)(e),[t])})),Object(Y.a)(Q,F,(function(e,n){var t=n.payload;return e.filter((function(e){return e.id!==t}))})),Q)),ne=Object(z.c)("",Object(Y.a)({},S,(function(e,n){return n.payload}))),te=Object(U.b)({items:ee,filter:ne}),re={key:"contacts",storage:X.a},ce=Object(U.b)({contacts:te}),ae=Object(V.g)(re,ce),ie=Object(z.a)({reducer:ae,devTools:!1,middleware:function(e){return e({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}})}}),oe=Object(V.h)(ie);s.a.render(Object(I.jsx)(d.a.StrictMode,{children:Object(I.jsx)(j.a,{store:ie,children:Object(I.jsx)(m.a,{loading:null,persistor:oe,children:Object(I.jsx)(G,{})})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.bc7fac07.chunk.js.map