(this.webpackJsonpreact_advanced_playground=this.webpackJsonpreact_advanced_playground||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),c=a(19),l=a.n(c),o=a(26),s=(a(90),a(91),a(13)),u=a(22),m=a(25),d=a(24),b=a(43),f=a(8),h=a(137),p=a(138),v=function(){return i.a.createElement(h.a,{className:"h-100",fluid:!0},i.a.createElement("h1",{className:"mt-3"},"Home"),i.a.createElement(p.a,{className:"d-flex justify-content-center align-items-center"},i.a.createElement("p",null,"Experimental playgrounds for React app features.")))},E=a(23),g=a.n(E),j=a(139),y=a(117),k=a(141),O=a(151),C=a(5),w=a(71),D=a.n(w),P=Object(C.a)((function(e){return{root:{flexGrow:1},menu_item:{color:"#697387"},gradient:{backgroundImage:"linear-gradient(to right, #fcfaff, #f2f9fc)"}}}))((function(e){var t=e.classes,a=Object(f.g)(),n=function(e){return function(){return a.push(e)}};return i.a.createElement("div",{className:g()(t.root)},i.a.createElement(j.a,{position:"static",style:{boxShadow:"none"}},i.a.createElement(k.a,{className:t.gradient},i.a.createElement(O.a,{onClick:n("/")},i.a.createElement(D.a,{style:{color:"#52cbff"}})),i.a.createElement(O.a,{onClick:n("/weather-forecast")},i.a.createElement(y.a,{className:t.menu_item},"Weather Forecast")),i.a.createElement(O.a,{onClick:n("/teeko-game")},i.a.createElement(y.a,{className:t.menu_item},"Teeko Game")),i.a.createElement(O.a,{onClick:n("/image-crop-tool")},i.a.createElement(y.a,{className:t.menu_item},"Image Crop Tool")))))})),x=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],S=[[1,2,3,4],[2,3,4,5],[6,7,8,9],[7,8,9,10],[11,12,13,14],[12,13,14,15],[16,17,18,19],[17,18,19,20],[21,22,23,24],[22,23,24,25],[1,6,11,16],[6,11,16,21],[2,7,12,17],[7,12,17,22],[3,8,13,18],[8,13,18,23],[4,9,14,19],[9,14,19,24],[5,10,15,20],[10,15,20,25],[16,12,8,4],[22,18,14,10],[21,17,13,9],[17,13,9,5],[20,14,8,2],[24,18,12,6],[25,19,13,7],[19,13,7,1]],N={1:[6,7,2],2:[1,6,7,8,3],3:[2,7,8,9,4],4:[3,8,9,10,5],5:[4,9,10],6:[1,2,7,12,11],7:[1,2,3,8,13,12,11,6],8:[2,3,4,9,14,13,12,7],9:[3,4,5,10,15,14,13,8],10:[5,4,9,14,15],11:[6,7,12,17,16],12:[6,7,8,13,18,17,16,11],13:[7,8,9,14,19,18,17,12],14:[8,9,10,15,20,19,18,13],15:[10,9,14,19,20],16:[11,12,17,22,21],17:[11,12,13,18,23,22,21,16],18:[12,13,14,19,24,23,22,17],19:[13,14,15,20,25,24,23,18],20:[15,14,19,24,25],21:[16,17,22],22:[21,16,17,18,23],23:[22,17,18,19,24],24:[23,18,19,20,25],25:[24,19,20]},W=Object(C.a)((function(e){return{block:{width:50,height:50,zIndex:10,borderWidth:2,marginLeft:2.5,display:"flex",marginRight:2.5,borderRadius:25,flexWrap:"wrap",borderStyle:"solid",borderColor:"black",alignItems:"center",justifyContent:"center"},inner_block:{width:40,height:40,borderRadius:20}}}))((function(e){var t=e.color,a=e.onClick,n=e.selectedAreaColor,r=e.classes,c=r.inner_block,l=r.block;return i.a.createElement("div",{className:l,onClick:a,style:{backgroundColor:n}},i.a.createElement("div",{className:c,style:{backgroundColor:t}}))})),z=Object(o.b)("teekoStore")(n=Object(o.c)(n=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.teekoStore,n=a.redPositions,r=a.circleClicked,c=a.selectedPiece,l=a.blackPositions;return i.a.createElement(h.a,{className:"h-100",fluid:!0},i.a.createElement("h1",{className:"mt-3"},"Teeko Game"),i.a.createElement(p.a,{className:"d-flex justify-content-center align-items-center"},i.a.createElement("div",{className:t.board},i.a.createElement("div",{className:t.board_inner},i.a.createElement("div",{className:t.emblishment1}),i.a.createElement("div",{className:t.emblishment2}),x.map((function(e){var t;return n.includes(e)?t="#bd172a":l.includes(e)&&(t="#3b3233"),i.a.createElement(W,{key:e,color:t,onClick:function(){return r(e)},selectedAreaColor:c===e?"#52cbff":"white"})}))))))}}]),a}(r.Component))||n)||n,B=Object(C.a)((function(e){return{board:{width:340,height:340,marginTop:20,display:"flex",borderWidth:15,borderStyle:"solid",borderColor:"black",alignItems:"center",justifyContent:"center",boxShadow:"3px 3px 15px grey"},board_inner:{width:300,height:300,paddingTop:5,borderWidth:6,display:"flex",flexWrap:"wrap",paddingBottom:5,alignItems:"center",borderStyle:"solid",borderColor:"black",position:"relative",justifyContent:"center"},emblishment1:{top:30,left:30,right:30,bottom:30,zPosition:0,borderWidth:4,borderColor:"grey",borderStyle:"solid",position:"absolute"},emblishment2:{top:85,left:85,right:85,bottom:85,zPosition:0,borderWidth:4,borderColor:"grey",borderStyle:"solid",position:"absolute"}}}))(z),R=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a,{className:"h-100",fluid:!0},i.a.createElement("h1",{className:"mt-3"},"Image Crop Tool"),i.a.createElement(p.a,{className:"d-flex justify-content-center align-items-center"}))}}]),a}(r.Component),I=a(150),T=a(75),A=a(72),_=a.n(A),F=a(147),L=a(149),V=a(73),M=a.n(V),Y=a(148),G=a(143),K=a(146),H=a(142),J=a(145),q=a(144),U=Object(H.a)({root:{padding:5,minWidth:120},title:{fontSize:14},pos:{marginBottom:12}});function $(e){var t=e.convertedDate,a=e.isCelcius,n=e.temp,r=e.humidity,c=U();return i.a.createElement(G.a,{className:c.root,variant:"outlined"},i.a.createElement(q.a,null,i.a.createElement(y.a,{className:c.title,color:"textSecondary",gutterBottom:!0},t),i.a.createElement(y.a,{variant:"h6",component:"h6"},n,a?"\u02daC":"\u02daF"),i.a.createElement(y.a,{className:c.pos,color:"textSecondary"},"Humidity - ",r)),i.a.createElement(J.a,{onClick:function(){return alert("Go to weather app for more info")}},i.a.createElement(K.a,{size:"small"},"Learn More")))}var Q,X=Object(C.a)((function(e){return{container:{left:0,right:0,top:100,bottom:0,display:"flex",position:"absolute"}}}))((function(e){var t=e.classes;return i.a.createElement(h.a,{className:t.container},i.a.createElement(p.a,{className:"d-flex flex-fill justify-content-center align-items-center"},i.a.createElement("p",null,"Loading\u2026")))})),Z=Object(H.a)({root:{padding:5,minWidth:120},title:{fontSize:14},pos:{marginBottom:12}});function ee(e){var t=e.isCelcius,a=Z();return i.a.createElement(G.a,{className:a.root,variant:"outlined"},i.a.createElement(q.a,null,i.a.createElement(y.a,{className:a.title,color:"textSecondary",gutterBottom:!0},".........."),i.a.createElement(y.a,{variant:"h6",component:"h6"},"--",t?"\u02daC":"\u02daF"),i.a.createElement(y.a,{className:a.pos,color:"textSecondary"},"Humidity - ....")),i.a.createElement(J.a,{onClick:function(){return alert("Go to weather app for more info")}},i.a.createElement(K.a,{size:"small"},"Learn More")))}var te,ae,ne,re,ie,ce,le,oe,se,ue,me,de,be,fe,he=Object(o.b)("weatherStore")(Q=Object(o.c)(Q=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.weatherStore.fetchWeatherData)()}},{key:"render",value:function(){var e=this.props.weatherStore,t=e.isCelcius,a=e.isRefreshing,n=e.onVisibleDateBack,r=e.visibleWeatherData,c=e.onVisibleDateForward,l=e.toggleCelciusFarenheit;return r?i.a.createElement(h.a,{fluid:!0},i.a.createElement("h1",{className:"mt-3"},"Weather Forecast"),i.a.createElement(T.a,{className:"p-3 p-md-5 mt-4"},i.a.createElement(F.a,null,i.a.createElement(p.a,{className:"d-flex justify-content-center"},i.a.createElement(Y.a,{value:"celcius",label:"Celcius",checked:t,control:i.a.createElement(I.a,null),onChange:function(e){return l(!0)}})),i.a.createElement(p.a,{className:"d-flex justify-content-center"},i.a.createElement(Y.a,{value:"fahrenheit",label:"Fahrenheit",control:i.a.createElement(I.a,null),checked:!t,onChange:function(e){return l(!1)}}))),i.a.createElement(F.a,{className:"d-flex my-3 justify-content-between"},i.a.createElement(L.a,{size:"medium",onClick:function(){return n()}},i.a.createElement(_.a,null)),i.a.createElement(L.a,{size:"medium",onClick:function(){return c()}},i.a.createElement(M.a,null))),a?i.a.createElement(F.a,null,i.a.createElement(p.a,null,i.a.createElement(ee,{isCelcius:t})),i.a.createElement(p.a,null,i.a.createElement(ee,{isCelcius:t})),i.a.createElement(p.a,null,i.a.createElement(ee,{isCelcius:t}))):i.a.createElement(F.a,null,r.map((function(e,a){var n=e.dt,r=new Date(1e3*n);return i.a.createElement(p.a,{key:n},i.a.createElement($,{temp:e.main.temp,isCelcius:t,humidity:e.main.humidity,convertedDate:r.toDateString()}))}))))):i.a.createElement(X,null)}}]),a}(i.a.Component))||Q)||Q,pe=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement(b.a,{basename:"/React-Advanced-Playground"},i.a.createElement(P,null),i.a.createElement(f.d,null,i.a.createElement(f.b,{path:"/",exact:!0,component:v}),i.a.createElement(f.b,{path:"/teeko-game",exact:!0,component:B}),i.a.createElement(f.b,{path:"/image-crop-tool",exact:!0,component:R}),i.a.createElement(f.b,{path:"/weather-forecast",exact:!0,component:he}),i.a.createElement(f.a,{to:"/"})))}}]),a}(r.Component),ve=a(49),Ee=a(16),ge=a(27),je=a(17),ye=(a(59),a(3)),ke=(te=ye.n.ref,ae=ye.n.ref,ne=function e(){Object(s.a)(this,e),Object(ge.a)(this,"isBlackTurn",!0),Object(Ee.a)(this,"selectedPiece",re,this),Object(Ee.a)(this,"redPositions",ie,this),Object(Ee.a)(this,"blackPositions",ce,this),Object(Ee.a)(this,"circleClicked",le,this),Object(ge.a)(this,"evaluater",(function(e,t){return!(e.length<=3)&&e.every((function(e){return t.includes(e)}))})),Object(ye.m)(this)},re=Object(je.a)(ne.prototype,"selectedPiece",[ye.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ie=Object(je.a)(ne.prototype,"redPositions",[te],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ce=Object(je.a)(ne.prototype,"blackPositions",[ae],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),le=Object(je.a)(ne.prototype,"circleClicked",[ye.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var a=e.redPositions.includes(t),n=e.blackPositions.includes(t),r=4===e.redPositions.length,i=4===e.blackPositions.length;if(a||n){var c,l;e.isBlackTurn?i&&!a?e.selectedPiece=t:(c=i?e.selectedPiece?"Please find an empty slot.":'You need to select a "BLACK" piece.':'Please place "BLACK" in an empty area.',alert(c)):r&&!n?e.selectedPiece=t:(l=i?e.selectedPiece?"Please find an empty slot.":'You need to select a "RED" piece.':'Please place "RED" in an empty area.',alert(l))}else{if(e.isBlackTurn){if(i&&!e.selectedPiece)return void alert('Please select a "BLACK" piece to move.');if(i&&!N[e.selectedPiece].includes(t))return void alert("Invalid Move!");if(i){var o=e.blackPositions.indexOf(e.selectedPiece);e.blackPositions.splice(o,1)}e.blackPositions=[].concat(Object(ve.a)(e.blackPositions),[t])}else{if(r&&!e.selectedPiece)return void alert('Please select a "RED" piece to move.');if(r&&!N[e.selectedPiece].includes(t))return void alert("Invalid Move!");if(r){var s=e.redPositions.indexOf(e.selectedPiece);e.redPositions.splice(s,1)}e.redPositions=[].concat(Object(ve.a)(e.redPositions),[t])}var u=!1,m=!1;if(S.forEach((function(t){e.evaluater(e.redPositions,t)&&(u=!0),e.evaluater(e.blackPositions,t)&&(m=!0)})),u||m)alert('CONGRATULATIONS! "'.concat(u?"RED":"BLACK",' PLAYER" WINS!!')),e.redPositions=[],e.isBlackTurn=!0,e.blackPositions=[];else e.isBlackTurn=!e.isBlackTurn;e.selectedPiece=null}}}}),ne),Oe=a(35),Ce=a.n(Oe),we=a(46),De=a(47),Pe=a.n(De),xe=a(74),Se=a(48),Ne=a.n(Se);function We(e){return Ne()(1e3*e).format("YYYY-MM-DD")}var ze=(oe=function e(){var t=this;Object(s.a)(this,e),Object(ge.a)(this,"weatherData",void 0),Object(Ee.a)(this,"isCelcius",se,this),Object(Ee.a)(this,"visibleWeatherData",ue,this),Object(Ee.a)(this,"isRefreshing",me,this),Object(ge.a)(this,"fetchWeatherData",Object(we.a)(Ce.a.mark((function e(){var a,n;return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.isCelcius?"metric":"imperial",e.prev=1,t.source=Pe.a.CancelToken.source(),e.next=5,Pe.a.get("https://api.openweathermap.org/data/2.5/forecast?q=Kathmandu&units=".concat(a,"&APPID=").concat(xe.appId));case 5:n=e.sent,t.filterAndSetData(n.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))),Object(Ee.a)(this,"filterAndSetData",de,this),Object(Ee.a)(this,"toggleCelciusFarenheit",be,this),Object(ge.a)(this,"onVisibleDateForward",(function(){t.visibleDateEnd!==t.weatherData.length&&(t.visibleDateEnd++,t.visibleDateStart++,t.setVisibleDate())})),Object(ge.a)(this,"onVisibleDateBack",(function(){0!==t.visibleDateStart&&(t.visibleDateEnd--,t.visibleDateStart--,t.setVisibleDate())})),Object(Ee.a)(this,"setVisibleDate",fe,this),this.visibleDateEnd=3,this.visibleDateStart=0,Object(ye.m)(this)},se=Object(je.a)(oe.prototype,"isCelcius",[ye.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),ue=Object(je.a)(oe.prototype,"visibleWeatherData",[ye.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),me=Object(je.a)(oe.prototype,"isRefreshing",[ye.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),de=Object(je.a)(oe.prototype,"filterAndSetData",[ye.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var a=[];t.list.forEach((function(t,n){var r=t.dt;if(e.prevDate&&function(e,t){var a=We(e),n=We(t);return Ne()(a).isSame(n,"day")}(e.prevDate,t.dt))return null;e.prevDate=r,a.push(t)})),e.weatherData=a,e.setVisibleDate()}}}),be=Object(je.a)(oe.prototype,"toggleCelciusFarenheit",[ye.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(we.a)(Ce.a.mark((function t(a){return Ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isRefreshing=!0,e.isCelcius=a,t.next=4,e.fetchWeatherData();case 4:e.isRefreshing=!1;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),fe=Object(je.a)(oe.prototype,"setVisibleDate",[ye.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.visibleWeatherData=e.weatherData.slice(e.visibleDateStart,e.visibleDateEnd)}}}),oe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=new function e(){Object(s.a)(this,e),this.teekoStore=new ke(this),this.weatherStore=new ze(this)};l.a.render(i.a.createElement(o.a,{rootStore:Be,teekoStore:Be.teekoStore,weatherStore:Be.weatherStore},i.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t){e.exports={appId:"a44c63bf4a70d8d8dd6758497afce4ec"}},85:function(e,t,a){e.exports=a(116)},91:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.9817396e.chunk.js.map