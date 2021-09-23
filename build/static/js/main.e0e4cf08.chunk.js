(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{152:function(e,t,n){},354:function(e,t,n){},355:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(58),s=n.n(c),o=(n(152),n(31)),i=n.n(o),l=n(59),u=n(10),d=(n(88),n(1)),j=a.a.createContext({userId:null,username:"",isUserValid:!1}),b=function(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),o=Object(u.a)(s,2),i=o[0],l=o[1];return Object(d.jsx)(j.Provider,{value:{username:a,userId:i,changeUserdetails:function(e,t){l(t),c(e)},resetUserDetails:function(){l(""),c("")}},children:e.children})},p=j,O=n(38),h=Object(O.withScriptjs)(Object(O.withGoogleMap)((function(){var e=Object(r.useContext)(p),t=Object(r.useState)([]),n=Object(u.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(),o=Object(u.a)(s,2),j=o[0],b=o[1],h=new window.google.maps.LatLngBounds;return Object(r.useEffect)(Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users",{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),a.map((function(e){var t=new window.google.maps.LatLng(parseFloat(e.address.geo.lat),parseFloat(e.address.geo.lng));h.extend(t)})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),b(e.t0),window.alert("Error ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])}))),[]),a&&!j&&Object(d.jsx)(O.GoogleMap,{defaultZoom:2,defaultCenter:{lat:-37.3159,lng:81.1496},children:a.map((function(t){return Object(d.jsx)(O.Marker,{position:{lat:parseFloat(t.address.geo.lat),lng:parseFloat(t.address.geo.lng)},onClick:function(){return e.changeUserdetails(t.name,t.id)},icon:{url:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-person-1024.png",scaledSize:new window.google.maps.Size(35,35)}},t.id)}))})}))),g=n(359),m=n(15),f=n(60),x=(n(354),["label","error","errorMsg"]),v=a.a.forwardRef((function(e,t){var n=e.label,a=e.error,c=e.errorMsg,s=Object(f.a)(e,x),o=Object(r.useRef)();return Object(r.useImperativeHandle)(t,(function(){return{focus:o.current.focus(),value:o.current.value}})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"inputControls ".concat(a?"invalid":""),children:[Object(d.jsx)("label",{children:n}),Object(d.jsx)("input",Object(m.a)({ref:o},s)),Object(d.jsx)("br",{})]}),Object(d.jsx)("div",{className:"error",children:a?c:""})]})})),y=(n(355),function(e){return Object(d.jsx)("div",{className:"Card",children:e.children})}),w=function(){var e=Object(r.useContext)(p),t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),o=Object(u.a)(s,2),j=o[0],b=o[1],O=Object(r.useState)(!0),h=Object(u.a)(O,2),m=h[0],f=h[1],x=Object(r.useState)(!0),w=Object(u.a)(x,2),S=w[0],C=w[1],E=Object(r.useState)(!0),M=Object(u.a)(E,2),k=M[0],F=M[1],U=function(e){return e.toString().trim().length>0},N=function(){b(""),c(""),e.resetUserDetails(),f(!0),C(!0),F(!0)},D=function(e,t){"title"===t&&(f(!0),c(e.target.value)),"body"===t&&(C(!0),b(e.target.value))},I=function(){var t=Object(l.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(U(a)&&U(j)&&U(e.username))){t.next=17;break}return console.log("All clear"),r={id:e.userId,title:a,body:j},t.prev=4,t.next=7,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/JSON"}});case 7:t.sent.ok&&window.alert("Data added successfully"),N(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),window.alert("Error in Posting ",t.t0);case 15:t.next=20;break;case 17:U(a)||f(!1),U(j)||C(!1),U(e.username)?F(!0):F(!1);case 20:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)(y,{children:[Object(d.jsx)("h3",{children:"User Form"}),Object(d.jsxs)("form",{onSubmit:I,children:[Object(d.jsx)(v,{label:"Username",type:"text",value:e.username,error:!k&&!e.username,errorMsg:"Please select a user!",placeholder:"Select a user",readOnly:!0}),Object(d.jsx)(v,{label:"Title",type:"text",value:a,onChange:function(e){return D(e,"title")},error:!m,errorMsg:"Empty Title!",placeholder:"Enter title"}),Object(d.jsx)(v,{label:"Body",type:"text",value:j,onChange:function(e){return D(e,"body")},error:!S,errorMsg:"Empty Body!",placeholder:"Enter body"}),Object(d.jsx)(g.a,{type:"submit",style:{margin:"1rem 0",width:"100%"},children:"Post"}),Object(d.jsx)(g.a,{variant:"warning",onClick:N,style:{margin:"1rem 0",width:"100%"},children:"Reset"})]})]})},S=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"Map",children:Object(d.jsx)(h,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyDvqyM5GIDCWmDG3p2cUGdJVhRhMEgMQX0"),loadingElement:Object(d.jsx)("div",{style:{height:"100%"}}),containerElement:Object(d.jsx)("div",{className:"mapContainer"}),mapElement:Object(d.jsx)("div",{style:{height:"100%"}})})}),Object(d.jsxs)("div",{className:"Form",children:[Object(d.jsx)("h2",{children:"USERS"}),Object(d.jsx)(w,{})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,360)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(356);s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(b,{children:Object(d.jsx)(S,{})})}),document.getElementById("root")),C()},88:function(e,t,n){}},[[357,1,2]]]);
//# sourceMappingURL=main.e0e4cf08.chunk.js.map