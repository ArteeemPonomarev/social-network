(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{293:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__6P9nW",dialogItems:"Dialogs_dialogItems__2JJRr",activeLink:"Dialogs_activeLink__33IRI",messages:"Dialogs_messages__1OCb6",item:"Dialogs_item__oJ7CO"}},298:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(104),l=t(293),m=t.n(l),o=t(10),c=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:m.a.item},s.a.createElement(o.b,{activeClassName:m.a.activeLink,to:a},e.name))},r=function(e){return s.a.createElement("div",{className:m.a.message},e.message)},g=t(21),d=t(87),u=t(127),b=t(33),E=t(84),v=Object(E.a)(50),f=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(d.a,{component:b.b,validate:[E.b,v],name:"newMessageBody",placeholder:"Enter your message"})),s.a.createElement("div",null,s.a.createElement("button",null,"Send Message")))})),p=function(e){var a=e.dialogsPage.dialogsData.map((function(e){return s.a.createElement(c,{name:e.name,id:e.id,key:e.id})})),t=e.dialogsPage.messagesData.map((function(e){return s.a.createElement(r,{message:e.message,key:e.id})}));return e.isAuth?s.a.createElement("div",{className:m.a.dialogs},s.a.createElement("div",{className:m.a.dialogItems},a),s.a.createElement("div",{className:m.a.messages},s.a.createElement("div",null,t)),s.a.createElement(f,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})):s.a.createElement(g.a,{to:"/login"})},_=t(9),k=t(36),y=t(7);a.default=Object(y.compose)(Object(_.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})),k.a)(p)}}]);
//# sourceMappingURL=4.2e40b2f8.chunk.js.map