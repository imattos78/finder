(this.webpackJsonpfinder=this.webpackJsonpfinder||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),r=a.n(l),o=a(10),i=a(11),s=a(13),m=a(12),d=a(14),u=a(28),h=a.n(u),p=a(27),E=a.n(p),f=(a(83),a(53)),v=a.n(f),g=(a(84),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=(new Date).toDateString();return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"appRow mx-auto col-12 col-lg-9 mb-2"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"logo-align"},c.a.createElement("img",{className:"card-title logo-size",src:v.a,alt:"Logo"})),c.a.createElement("h5",{className:"d-flex flex-wrap justify-content-center"},"Welcome to finder - ",c.a.createElement("span",null," map your world ")," ",c.a.createElement("span",null,"- ",e))))))}}]),t}(c.a.Component)),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row d-none d-md-block"},c.a.createElement("div",{className:"appRow mx-auto col-12 col-lg-9 mb-2"},c.a.createElement("div",{className:"card bg-white text-white"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Pharmacies "),c.a.createElement("div",{className:"card-text",color:"#8200ff"},c.a.createElement("h5",null,"There are currently ",this.props.count," pharmacies listed"))))))}}]),t}(c.a.Component),w=a(33),k=a(6),N=a(7),x=(a(88),a(18)),y=a.n(x),A=a(54),j=a.n(A),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={newLocation:"",newTown:"",late:0,vaccs:0,deliver:0,ePres:0,date:E()().format("YYYY-MM-DD"),comments:""},a.handleClick=function(e){e.preventDefault(),a.props.addItemFunc(a.state.newLocation,a.state.newTown,a.state.late,a.state.vaccs,a.state.deliver,a.state.ePres,a.state.date,a.state.comments),a.setState({newLocation:"",newTown:"",comments:"",late:0,vaccs:0,deliver:0,ePres:0})},a.updateText=function(e){var t=e.target.value;a.setState(Object(w.a)({},e.target.name,t))},a.updateCheckboxes=function(e){var t=!0===("checkbox"===e.target.type?e.target.checked:e.target.value)?1:0;a.setState(Object(w.a)({},e.target.name,t))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("form",null,c.a.createElement("div",{id:"add-pharmacy",className:"row"},c.a.createElement("div",{className:"appRow mx-auto col-12 col-lg-9 mb-2"},c.a.createElement("div",{className:"card bg-white text-white"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Add new pharmacy ",c.a.createElement("img",{src:j.a,alt:"icon map pin with pharmacy symbol",width:"20 px"})),c.a.createElement("div",{className:"card-text"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"input-group "},c.a.createElement("div",{className:"form-group col-12 col-lg-9"},c.a.createElement("label",{htmlFor:"examplew3wLocation"},c.a.createElement("img",{className:"card-title",width:"30 px",src:y.a,alt:"w3wLogo"})," Location "),c.a.createElement("input",{type:"text",className:"form-control",id:"examplew3wLocation",placeholder:"office.cheeks.crush",onChange:this.updateText,name:"newLocation",value:this.state.newLocation})),c.a.createElement("div",{className:"form-group col-12 col-lg-9"},c.a.createElement("label",{htmlFor:"exampleTown"},c.a.createElement(k.a,{icon:N.a})," Town"),c.a.createElement("input",{type:"text",className:"form-control",id:"exampleTown",placeholder:"Enter Town",onChange:this.updateText,name:"newTown",value:this.state.newTown})),c.a.createElement("div",{className:"form-group col-8 col-md-4  form-check form-check-inline check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"lateOpening",name:"late",checked:this.state.late,onChange:this.updateCheckboxes}),c.a.createElement("label",{className:"form-check-label",htmlFor:"lateOpening"},"Late Opening ",c.a.createElement(k.a,{icon:N.e})," ")),c.a.createElement("div",{className:"form-group col-8 col-md-4 form-check form-check-inline check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"vaccs",name:"vaccs",checked:this.state.vaccs,onChange:this.updateCheckboxes}),c.a.createElement("label",{className:"form-check-label",htmlFor:"vaccs"},"Vaccinations ",c.a.createElement(k.a,{icon:N.g})," ")),c.a.createElement("div",{className:"form-group col-8 col-md-4 form-check form-check-inline check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"delivery",name:"deliver",checked:this.state.deliver,onChange:this.updateCheckboxes}),c.a.createElement("label",{className:"form-check-label",htmlFor:"delivery"},"Delivery ",c.a.createElement(k.a,{icon:N.i}))),c.a.createElement("div",{className:"form-group col-8 col-md-5 form-check form-check-inline check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"eScript",name:"ePres",checked:this.state.ePres,onChange:this.updateCheckboxes}),c.a.createElement("label",{className:"form-check-label",htmlFor:"eScript"},"e-Prescriptions accepted ",c.a.createElement(k.a,{icon:N.c}))),c.a.createElement("div",{className:"form-group col-12 col-lg-9"},c.a.createElement("label",{htmlFor:"exampleComments"},c.a.createElement(k.a,{icon:N.b})," Comments"),c.a.createElement("input",{type:"textarea",className:"form-control",id:"exampleComments",placeholder:"Add your comments",onChange:this.updateText,name:"comments",value:this.state.comments})),c.a.createElement("div",{className:"col-md-4 col-sm-12 button-align"},c.a.createElement("button",{type:"submit",className:"add",onClick:this.handleClick,disabled:0===this.state.newLocation.length||0===this.state.newTown.length},"Submit")))))))))))}}]),t}(c.a.Component),C=a(19),I=a(55),T=a.n(I),L=a(21),M=a.n(L),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleDelete=function(){a.dialog.show({title:"Delete Pharmacy",body:"Press OK to confirm delete",actions:[M.a.CancelAction(),M.a.OKAction((function(){a.props.deleteItemFunc(a.props.id)}))],bsSize:"small",onHide:function(e){e.hide(),console.log("closed by clicking background.")}})},a.handleUpdate=function(){a.dialog.show({title:"Update Details",body:"Press OK to confirm updates",actions:[M.a.CancelAction(),M.a.OKAction((function(){var e=!0===a.state.categories[0].checked?1:0,t=!0===a.state.categories[1].checked?1:0,n=!0===a.state.categories[2].checked?1:0,c=!0===a.state.categories[3].checked?1:0;a.props.updateItemFunc(a.props.id,e,t,n,c)}))],bsSize:"small",onHide:function(e){e.hide(),console.log("closed by clicking background.")}})},a.state={categories:[{id:1,text:c.a.createElement(k.a,{icon:N.e}),checked:Boolean(a.props.late)},{id:2,text:c.a.createElement(k.a,{icon:N.g}),checked:Boolean(a.props.vaccine)},{id:3,text:c.a.createElement(k.a,{icon:N.i}),checked:Boolean(a.props.delivery)},{id:4,text:c.a.createElement(k.a,{icon:N.c}),checked:Boolean(a.props.e_pres)}],late:0,vaccine:0,delivery:0,e_pres:0},a.handleChange=a.handleChange.bind(Object(C.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({checked:e})}},{key:"renderCatList",value:function(){var e=this;return this.state.categories.map((function(t,a,n){return c.a.createElement("div",{key:a},c.a.createElement("span",null,c.a.createElement(T.a,{onChange:function(t){n[a].checked=t,e.setState({categories:n})},checked:t.checked,className:"react-switch",onColor:"#8200ff",offColor:"#8200ff",height:20,width:40})))}))}},{key:"render",value:function(){var e=this,t="https://what3words.com/"+this.props.location;return c.a.createElement("div",null,c.a.createElement("div",{className:"row pb-3 mb-3 d-flex align-items-end"},c.a.createElement("h5",{className:"col-2 col-md-2"},c.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{width:"30 px",src:y.a,alt:"w3wLogo"}))),c.a.createElement("h5",{className:"col-10 col-md-3"},this.props.town),c.a.createElement("div",{className:"col-8 col-md-4"},c.a.createElement("h5",{display:"inline",className:"d-flex justify-content-around"}," ",this.renderCatList())),c.a.createElement("div",{className:"col-1"},c.a.createElement("button",{className:"btn shadow-none",onClick:this.handleUpdate},c.a.createElement(k.a,{icon:N.f})),c.a.createElement(M.a,{ref:function(t){e.dialog=t}})),c.a.createElement("div",{className:"col-1"},c.a.createElement("button",{className:"btn",onClick:this.handleDelete},c.a.createElement(k.a,{icon:N.h})),c.a.createElement(M.a,{ref:function(t){e.dialog=t}}))))}}]),t}(c.a.Component),S=a(57),U=a.n(S),D=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.pharmacies;return c.a.createElement("div",{id:"list-pharmacy",className:"row"},c.a.createElement("div",{className:"appRow mx-auto col-12 col-lg-9"},c.a.createElement("div",{className:"card bg-white mb-2"},c.a.createElement("div",{className:"card-header bg-transparent"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-9 col-md-6"},c.a.createElement("h5",null,"Pharmacies Found! ",c.a.createElement("img",{src:U.a,alt:"icon magnifier with pharmacy symbol",width:"30 px"}))),c.a.createElement("div",{className:"col-8 col-md-6 d-flex justify-content-center"},c.a.createElement("h6",null,"(Click ",c.a.createElement("img",{width:"20 px",src:y.a,alt:"w3wLogo"})," to find location)"))),c.a.createElement("div",{className:"row taskRow"},c.a.createElement("div",{className:"col-2 col-md-2"},c.a.createElement("h5",null,c.a.createElement(k.a,{icon:N.d}))),c.a.createElement("div",{className:"col-10 col-md-3 "},c.a.createElement("h5",null,"Town")),c.a.createElement("div",{className:"col-8 col-md-4 d-flex justify-content-around"},c.a.createElement("h5",null,c.a.createElement(k.a,{icon:N.e})),c.a.createElement("h5",null,c.a.createElement(k.a,{icon:N.g})),c.a.createElement("h5",null,c.a.createElement(k.a,{icon:N.i})),c.a.createElement("h5",null,c.a.createElement(k.a,{icon:N.c}))))),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"card-text"},t.map((function(t){return c.a.createElement(R,{deleteItemFunc:e.props.deleteItemFunc,updateItemFunc:e.props.updateItemFunc,location:t.location,town:t.town,key:t.id,id:t.id,late:t.late,vaccine:t.vaccine,delivery:t.delivery,e_pres:t.e_pres,date:t.date})})))))))}}]),t}(c.a.Component),F=a(35),W=a.n(F),z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row d-none d-md-block mt-2"},c.a.createElement("div",{className:"mx-auto col-12 col-lg-9"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"text-center"},c.a.createElement("h5",null,c.a.createElement("img",{width:"90 px",src:W.a,alt:"acLogo"})," \xa9 Always Curious 2020 ",c.a.createElement("img",{width:"90 px",src:W.a,alt:"acLogo"})),c.a.createElement("h6",null,c.a.createElement("img",{width:"30 px",src:y.a,alt:"w3wLogo"})," Locations mapped using ",c.a.createElement("a",{href:"https://what3words.com/",target:"_blank",rel:"noopener noreferrer"},"my3words")),c.a.createElement("h6",null,"Logos created free at",c.a.createElement("a",{href:"https://LogoMakr.com",target:"_blank",rel:"noopener noreferrer"}," LogoMakr.com")," "))))))}}]),t}(c.a.Component),B=a(9),Y=a.n(B),Q=a(25),J=a(31),Z=a(58),G=a.n(Z),X=function(){return window.history.replaceState({},document.title,window.location.pathname)},P=c.a.createContext(),V=function(){return Object(n.useContext)(P)},H=a(26),q=(a(94),function(){var e=V(),t=e.isAuthenticated,a=e.loginWithRedirect,n=e.logout;return c.a.createElement("div",{className:"appRow mx-auto col-12 col-lg-9 mb-2 d-flex justify-content-end"},!t&&c.a.createElement("button",{className:"boton",onClick:function(){return a({})}},"Log in"),t&&c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("button",{className:"boton",onClick:function(){return n()}},"Log out"),c.a.createElement("span",null,c.a.createElement("button",{className:"boton"},c.a.createElement(H.a,{className:"Nav_link",to:"/home"},"Home")),"\xa0",c.a.createElement("button",{className:"boton"},c.a.createElement(H.a,{className:"Nav_link",to:"/profile"},"Profile")))))}),K=a(20),_=(a(97),function(){var e=V(),t=e.loading,a=e.user;return t||!a?c.a.createElement("div",null):c.a.createElement("div",{className:"col-12 col-lg-5 d-flex justify-content-center"},c.a.createElement(n.Fragment,null,c.a.createElement("span",{className:"box"},c.a.createElement("img",{className:"rounded-circle pic",src:a.picture,alt:"Profile"}),c.a.createElement("h4",null,a.name))))}),$=a(15),ee=Object($.a)(),te=function(e){var t=e.component,a=e.path,l=Object(J.a)(e,["component","path"]),r=V(),o=r.loading,i=r.isAuthenticated,s=r.loginWithRedirect;Object(n.useEffect)((function(){if(!o&&!i){Y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.awrap(s({appState:{targetUrl:a}}));case 2:case"end":return e.stop()}}))}}),[o,i,s,a]);return c.a.createElement(K.a,Object.assign({path:a,render:function(e){return!0===i?c.a.createElement(t,e):null}},l))},ae=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={pharmacies:[]},a.addNewItem=function(e,t,n,c,l,r){var o=a.state.pharmacies.slice(),i={location:e,town:t,late:n,vaccine:l,delivery:c,e_pres:r,date:E()().format("YYYY-MM-DD")};h.a.post("https://e1vex1qne1.execute-api.eu-west-1.amazonaws.com/dev/pharmacies",i).then((function(e){console.log(e);var t=e.data;o.push(t),a.setState({pharmacies:o})})).catch((function(e){console.log("Error inserting product",e)}))},a.deleteItem=function(e){h.a.delete("https://e1vex1qne1.execute-api.eu-west-1.amazonaws.com/dev/pharmacies/".concat(e)).then((function(t){var n=a.state.pharmacies.filter((function(t){return t.id!==e}));a.setState({pharmacies:n})})).catch((function(e){console.log(e)}))},a.updateItem=function(e,t,n,c,l){var r=a.state.pharmacies,o={};r.forEach((function(a){a.id===e&&(a.late=t,a.vaccine=n,a.delivery=c,a.e_pres=l,a.date=E()().format("YYYY-MM-DD"),o=a)})),h.a.put("https://e1vex1qne1.execute-api.eu-west-1.amazonaws.com/dev/pharmacies/".concat(e),o).then((function(e){a.setState({pharmacies:r})})).catch((function(e){console.log("Error updating item",e)}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://e1vex1qne1.execute-api.eu-west-1.amazonaws.com/dev/pharmacies").then((function(t){var a=t.data;e.setState({pharmacies:a})})).catch((function(e){console.log("Error getting pharmacies data",e)}))}},{key:"render",value:function(){var e=this.state.pharmacies.length;return c.a.createElement("div",{className:"container"},c.a.createElement(K.b,{history:ee},c.a.createElement("div",{className:"col-12"},c.a.createElement(q,null),c.a.createElement(_,null)),c.a.createElement(g,null),c.a.createElement(O,{addItemFunc:this.addNewItem}),c.a.createElement(b,{count:e}),c.a.createElement(D,{pharmacies:this.state.pharmacies,deleteItemFunc:this.deleteItem,updateItemFunc:this.updateItem}),c.a.createElement(z,null),c.a.createElement(K.c,null,c.a.createElement(te,{path:"/",component:_}))))}}]),t}(n.Component);var ne=function(){return V().loading?c.a.createElement("div",null,"Loading..."):c.a.createElement("div",{className:"Home"},c.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(38);a(98);r.a.render(c.a.createElement((function(e){var t=e.children,a=e.onRedirectCallback,l=void 0===a?X:a,r=Object(J.a)(e,["children","onRedirectCallback"]),o=Object(n.useState)(),i=Object(Q.a)(o,2),s=i[0],m=i[1],d=Object(n.useState)(),u=Object(Q.a)(d,2),h=u[0],p=u[1],E=Object(n.useState)(),f=Object(Q.a)(E,2),v=f[0],g=f[1],b=Object(n.useState)(!0),w=Object(Q.a)(b,2),k=w[0],N=w[1],x=Object(n.useState)(!1),y=Object(Q.a)(x,2),A=y[0],j=y[1];Object(n.useEffect)((function(){!function(){var e,t,a,n,c;Y.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Y.a.awrap(G()(r));case 2:if(e=o.sent,g(e),!window.location.search.includes("code=")){o.next=10;break}return o.next=7,Y.a.awrap(e.handleRedirectCallback());case 7:t=o.sent,a=t.appState,l(a);case 10:return o.next=12,Y.a.awrap(e.isAuthenticated());case 12:if(n=o.sent,m(n),!n){o.next=19;break}return o.next=17,Y.a.awrap(e.getUser());case 17:c=o.sent,p(c);case 19:N(!1);case 20:case"end":return o.stop()}}))}()}),[]);return c.a.createElement(P.Provider,{value:{isAuthenticated:s,user:h,loading:k,popupOpen:A,loginWithPopup:function(){var e,t,a=arguments;return Y.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:{},j(!0),n.prev=2,n.next=5,Y.a.awrap(v.loginWithPopup(e));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),console.error(n.t0);case 10:return n.prev=10,j(!1),n.finish(10);case 13:return n.next=15,Y.a.awrap(v.getUser());case 15:t=n.sent,p(t),m(!0);case 18:case"end":return n.stop()}}),null,null,[[2,7,10,13]])},handleRedirectCallback:function(){var e;return Y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return N(!0),t.next=3,Y.a.awrap(v.handleRedirectCallback());case 3:return t.next=5,Y.a.awrap(v.getUser());case 5:e=t.sent,N(!1),m(!0),p(e);case 9:case"end":return t.stop()}}))},getIdTokenClaims:function(){return v.getIdTokenClaims.apply(v,arguments)},loginWithRedirect:function(){return v.loginWithRedirect.apply(v,arguments)},getTokenSilently:function(){return v.getTokenSilently.apply(v,arguments)},getTokenWithPopup:function(){return v.getTokenWithPopup.apply(v,arguments)},logout:function(){return v.logout.apply(v,arguments)}}},t)}),{domain:ce.domain,client_id:ce.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){ee.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},c.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},18:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQkI4QzRFNDlCNUExMUU2OUMyQTlFNDIyQ0MzM0M3QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQkI4QzRFNTlCNUExMUU2OUMyQTlFNDIyQ0MzM0M3QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNCQjhDNEUyOUI1QTExRTY5QzJBOUU0MjJDQzMzQzdCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNCQjhDNEUzOUI1QTExRTY5QzJBOUU0MjJDQzMzQzdCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WFaxEAAAAzhJREFUeNrsW92LTVEUv3PzEeOb5OOBEa6SUGqEIfkqIiUfw7jzrLxJlAcvXqT4D5R7BkMpiXnQyMNwM0UzYsoYzfCAeRHJUBR+O+fhWK2927u7T2dz1q5fa87qN6ezf3utvdbZc6bu5bymX4Ucj2Ih52NU4ucDQH9O5l0C2qkA/YvfdPXmYfZIe0kBEUAEEAFEABFABBABRAARQAQQAUQAOQ9I8bVzBsxRYCxwEa/bAwbuNJgjwGTgErh9Bu7EmDsTuAxuT3ARgIdU9+4ETgMngW74php+pQM4AxwHquDOMnBvAGeBY8BDcOeHmAIbgOWJazX51RqxGmEaE65JQJOGuxRmS8I1DtgYogCtjG9Iwy3XyB0MSgCs0niYPcT9FLn6guGOhtlP3K/AfaxJq0PE/Q7oCi0CdgMTiC/ScLcD04mvTcNVoT6X+NQm+DM0AQ6Ta/WAVzTcFsYXWd7XxM1GgHj33krcnVil9wx3Cswu4q6CO+iQVs9Ca4SamftWNNx9wBhLrktaZSoA3aVHgJuWIf0duO4hrbIRIK7RK2jTgjAdYbgNMOuI+za4Hy3T6i6XVllHAFej2zxsflxaRT4euOhx9XU1+p5lSH8A7lgK+8WQVplFgHWNjlvfRcR9DdwfDmn1NTQBuBpdcUgVF27k66GLnsKfq9G9WKXnlq3vALjdmrSie8Vb4H5oByJcja44tL66Fd0EzPHZ+qYlAFejrzqkikulqPgsW0UP4a+r0cMMV50J7CTuB+AOMdx6TVr1BSWAY43mWt/IkFb1aa6+LwFaHWp02aH1LTukVTYCIEyXFf4+9tLWaHAXwKwh7lvgfmK4s2E226RV1hHg8n7usvkdTKv19SaApvU11egWpvXtsBTLW+vrMwLW29ZoiLUKZqFl67vENq2yFqDBoUbXyk0l/GsVQIX6N7JJ6Wq0OrX9nLiucq1vPB4ByTOBJz5bX28CYAKvYdYCF4ATwF4DdzjmngdOATsMXDV59bZ4rvDnr0rbfLa+dNQlvhZfmaNPZdXrdU8aJ0L/3BABRAARQAQQAUQAEUAEEAFEABFABMjlSH4qW0r+R+V/PkqcAO2SAjkcvwUYAKMIBNtEbuytAAAAAElFTkSuQmCC"},35:function(e,t,a){e.exports=a.p+"static/media/LogoMakr_0bAO9b.11b74e52.png"},38:function(e){e.exports=JSON.parse('{"domain":"dev-5wy-c6ns.eu.auth0.com","clientId":"kC26Wfr6v3hCGC6ovFy8FeoUyAjwhNWx"}')},53:function(e,t,a){e.exports=a.p+"static/media/LogoMakr_8vj7Vz.c63634c9.png"},54:function(e,t,a){e.exports=a.p+"static/media/LogoMakr_2XNkij.718aa4cd.png"},57:function(e,t,a){e.exports=a.p+"static/media/LogoMakr_1cvDUu.2c5c520f.png"},61:function(e,t,a){e.exports=a(100)},83:function(e,t,a){},84:function(e,t,a){},88:function(e,t,a){},94:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.d6069b60.chunk.js.map