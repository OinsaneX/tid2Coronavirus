(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/1.e6ec6ac8.jpg"},20:function(e,a,t){e.exports=t.p+"static/media/2.fa42c5f5.jpg"},21:function(e,a,t){e.exports=t.p+"static/media/3.57c1ec76.jpg"},24:function(e,a,t){e.exports=t(49)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){e.exports=t.p+"static/media/login.1703d75a.jpeg"},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(18),l=t.n(s),c=t(3),o=t.n(c),i=t(7),m=t(9),p=(t(30),t(22)),u=t(1),d=(t(31),{getCovidDates:function(){var e=Object(i.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid.ourworldindata.org/data/owid-covid-data.json");case 2:return a=e.sent,t=a.json(),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()});var E=function(e){var a=e.list,t=Object(n.useState)([]),s=Object(m.a)(t,2),l=s[0],c=s[1],p=Object(n.useState)(a),u=Object(m.a)(p,2),E=u[0],h=u[1];function g(){return(g=Object(i.a)(o.a.mark((function e(a){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l,console.log(a.target.value),e.next=4,t.filter((function(e){return e.location.toLowerCase().includes(a.target.value.toLowerCase())}));case 4:n=e.sent,h(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var a,t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(E.length<1)){e.next=9;break}return e.next=3,d.getCovidDates();case 3:for(n in a=e.sent,t=[],a)t.push(a[n]);h(t),c(t),console.log(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar filter"},r.a.createElement("form",{className:"form m-auto col-md-4"},r.a.createElement("input",{className:"form-control mr-sm-2",onChange:function(e){return g.apply(this,arguments)},type:"search",placeholder:"Pais","aria-label":"Search"}))),r.a.createElement("div",{className:"row"},E.map((function(e,a){return r.a.createElement("div",{className:"col-sm-8 col-md-3 py-4 cardd",key:a},r.a.createElement("h2",{className:"title"},e.location),r.a.createElement("h4",{className:"title"},e.continent),r.a.createElement("p",null,r.a.createElement("strong",null,"Poblacion : ")," ",e.population),r.a.createElement("p",null,r.a.createElement("strong",null,"Casos : ")," ",e.data[e.data.length-1].total_cases))}))),r.a.createElement("hr",null),E.length<=0&&r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))};t(32),t(33);var h=function(e){var a=e.login;return r.a.createElement("div",{className:"login-wrap"},r.a.createElement("div",{className:"login-html"},r.a.createElement("input",{id:"tab-1",type:"radio",name:"tab",className:"sign-in",checked:!0}),r.a.createElement("label",{style:{color:"#ffff"},for:"tab-1",className:"tab"},"Sign In"),r.a.createElement("input",{id:"tab-2",type:"radio",name:"tab",className:"sign-up"}),r.a.createElement("label",{style:{color:"#ffff"},for:"tab-2",className:"tab"},"Sign Up"),r.a.createElement("div",{className:"login-form"},r.a.createElement("div",{className:"sign-in-htm"},r.a.createElement("div",{className:"group"},r.a.createElement("label",{for:"user",className:"label"},"Username"),r.a.createElement("input",{id:"user",type:"text",className:"input"})),r.a.createElement("div",{className:"group"},r.a.createElement("label",{for:"pass",className:"label"},"Password"),r.a.createElement("input",{id:"pass",type:"password",className:"input","data-type":"password"})),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"submit",className:"button",value:"Sign In",onClick:function(){return a()}})),r.a.createElement("div",{className:"hr"}),r.a.createElement("div",{className:"foot-lnk"},r.a.createElement("a",{href:"#forgot"},"Forgot Password?"))),r.a.createElement("div",{className:"sign-up-htm"},r.a.createElement("div",{className:"group"},r.a.createElement("label",{for:"user",className:"label"},"Username"),r.a.createElement("input",{id:"user",type:"text",className:"input"})),r.a.createElement("div",{className:"group"},r.a.createElement("label",{for:"pass",className:"label"},"Password"),r.a.createElement("input",{id:"pass",type:"password",className:"input","data-type":"password"})),r.a.createElement("div",{className:"group"},r.a.createElement("label",{for:"pass",className:"label"},"Repeat Password"),r.a.createElement("input",{id:"pass",type:"password",className:"input","data-type":"password"})),r.a.createElement("div",{className:"group"},r.a.createElement("label",{for:"pass",className:"label"},"Email Address"),r.a.createElement("input",{id:"pass",type:"text",className:"input"})),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"submit",className:"button",value:"Sign Up"})),r.a.createElement("div",{className:"hr"})))))};t(34),t(35),t(37);var g=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark rigth  bg-dark "},r.a.createElement("a",{className:"navbar-brand",href:"/#"},"CoviDWeb-19"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse ",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav "},r.a.createElement("a",{className:"nav-link active",href:"/App/Home"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("a",{className:"nav-link active",href:"/App/WorldInfo"},"WorldInfo ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("a",{className:"nav-link active",href:"/App/Notices"},"Notices ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("a",{className:"nav-link active",href:"/App/Profile"},"Profile ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("a",{className:"nav-link active",href:"/App/Credit"},"Credits ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("a",{className:"nav-link active rigth ",href:"/#"},"Logout ",r.a.createElement("span",{className:"sr-only"},"(current)")))))},v=(t(38),t(19)),f=t.n(v),b=t(20),N=t.n(b),y=t(21),w=t.n(y);var k=function(){return r.a.createElement("header",null,r.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})),r.a.createElement("div",{className:"carousel-inner",role:"listbox"},r.a.createElement("div",{className:"carousel-item active",style:{backgroundImage:"url(".concat(f.a,")")}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",{className:"display-4"},"O que \xe9 COVID-19"),r.a.createElement("p",{className:"lead description"},"Os coronav\xedrus s\xe3o uma grande fam\xedlia de v\xedrus comuns em muitas esp\xe9cies diferentes de animais, incluindo camelos, gado, gatos e morcegos. Raramente. Recentemente, em dezembro de 2019, houve a transmiss\xe3o de um novo coronav\xedrus (SARS-CoV-2), o qual foi identificado em Wuhan na China e causou a COVID-19, sendo em seguida disseminada e transmitida pessoa a pessoa."))),r.a.createElement("div",{className:"carousel-item",style:{backgroundImage:"url(".concat(N.a,")")}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",{className:"display-4"},"O que \xe9 COVID-19"),r.a.createElement("p",{className:"lead description"},"A COVID-19 \xe9 uma doen\xe7a causada pelo coronav\xedrus, denominado SARS-CoV-2, que apresenta um espectro cl\xednico variando de infec\xe7\xf5es assintom\xe1ticas a quadros graves. "))),r.a.createElement("div",{className:"carousel-item",style:{backgroundImage:"url(".concat(w.a,")")}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",{className:"display-4"},"Como \xe9 transmitido"),r.a.createElement("p",{className:"lead description"},"A transmiss\xe3o acontece de uma pessoa doente para outra ou por contato pr\xf3ximo por meio de: Toque do aperto de m\xe3o contaminadas; Got\xedculas de saliva; Espirro; Tosse; Catarro; Objetos ou superf\xedcies contaminadas, como celulares, mesas, talheres, ma\xe7anetas, brinquedos, teclados de computador etc.")))),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))))};t(39);var x=function(){return r.a.createElement("div",{className:"container mt-5 mb-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 "},r.a.createElement("div",{className:"card"},r.a.createElement("h3",null,"hola"),r.a.createElement("p",null,"content"))),r.a.createElement("div",{className:"col-md-4 offset-md-5"},r.a.createElement("h4",null,"Latest News"),r.a.createElement("ul",{className:"timeline"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.totoprayogo.com/#"},"Vacina contra coronav\xedrus"),r.a.createElement("a",{href:"/",className:"float-right"},"21 March, 2014"),r.a.createElement("p",null,"Vacina contra coronav\xedrus: por que o Brasil \xe9 considerado o \u2018laborat\xf3rio perfeito\u2019 para testar imuniza\xe7\xe3o contra a Covid-19..."),r.a.createElement("hr",null)),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"BRASIL REGISTRA 4,33 MILH\xd5ES DE CASOS"),r.a.createElement("a",{href:"/",className:"float-right"},"4 March, 2014"),r.a.createElement("p",null,"O Minist\xe9rio da Sa\xfade informou, neste domingo (13), que foram registrados 14.768 novas infec\xe7\xf5es de covid-19 nas \xfaltimas 24 horas, totalizando 4.330.455 casos desde o in\xedcio da pandemia. Deste total, 3.573.958 s\xe3o de recu...")),r.a.createElement("hr",null),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Covid-19: Brasil tem 415 mortes nas \xfaltimas 24h"),r.a.createElement("a",{href:"/",className:"float-right"},"1 April, 2014"),r.a.createElement("p",null,"O Conselho Nacional de Secret\xe1rios de Sa\xfade (Conass) e o Minist\xe9rio da Sa\xfade atualizaram, neste domingo (13), os dados sobre a situa\xe7\xe3o da Covid-19 no Brasil. Veja os n\xfameros do \xfaltimo levantamento. ...")),r.a.createElement("hr",null)))))};t(40);var I=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"blog",className:"row"},r.a.createElement("div",{className:"col-md-10 blogShort"},r.a.createElement("h1",null,"Title 1"),r.a.createElement("img",{src:"http://www.kaczmarek-photo.com/wp-content/uploads/2012/06/guinnes-150x150.jpg",alt:"post img",className:"pull-left img-responsive thumb margin10 img-thumbnail"}),r.a.createElement("em",null,"This snippet use ",r.a.createElement("a",{href:"http://bootsnipp.com/snippets/featured/sexy-sidebar-navigation"},"Sexy Sidebar Navigation")),r.a.createElement("article",null,r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),r.a.createElement("a",{className:"btn btn-blog pull-right marginBottom10",href:"http://bootsnipp.com/user/snippets/2RoQ"},"READ MORE")),r.a.createElement("div",{className:"col-md-10 blogShort"},r.a.createElement("h1",null,"Title 2"),r.a.createElement("img",{src:"http://www.kaczmarek-photo.com/wp-content/uploads/2012/06/DSC_4073-150x150.jpg",alt:"post img",className:"pull-left img-responsive thumb margin10 img-thumbnail"}),r.a.createElement("article",null,r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),r.a.createElement("a",{className:"btn btn-blog pull-right marginBottom10",href:"http://bootsnipp.com/user/snippets/2RoQ"},"READ MORE")),r.a.createElement("div",{className:"col-md-10 blogShort"},r.a.createElement("h1",null,"Title 3"),r.a.createElement("img",{src:"http://www.kaczmarek-photo.com/wp-content/uploads/2012/06/DSC_1681-150x150.jpg",alt:"post img",className:"pull-left img-responsive thumb margin10 img-thumbnail"}),r.a.createElement("article",null,r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),r.a.createElement("a",{className:"btn btn-blog pull-right marginBottom10",href:"http://bootsnipp.com/user/snippets/2RoQ"},"READ MORE")),r.a.createElement("div",{className:"col-md-12 gap10"})))};t(41);var S=function(){return r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-5"},r.a.createElement("div",{class:"media"},r.a.createElement("a",{class:"pull-left",href:"/"},r.a.createElement("img",{class:"media-object dp img-circle",src:"http://cdn.onlinewebfonts.com/svg/img_568656.png",alt:"profile",style:{width:"100px",height:"100px"}})),r.a.createElement("div",{class:"media-body"},r.a.createElement("h4",{class:"media-heading"},"Hardik Sondagar ",r.a.createElement("small",null," India")),r.a.createElement("h5",null,"Software Developer at ",r.a.createElement("a",{href:"http://gridle.in"},"Gridle.in")),r.a.createElement("hr",{style:{margin:"9em"}})))))};var A=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],s=(a[1],Object(n.useState)("")),l=Object(m.a)(s,2),c=l[0],d=(l[1],function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(),window.location.href="/App/";case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),v=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("token","1234"),localStorage.getItem("token");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement(p.a,{basename:"https://oinsanex.github.io/tid2Coronavirus/"},r.a.createElement(u.a,{path:"/App"},r.a.createElement(g,null)),r.a.createElement(u.a,{path:"/App/Home"},r.a.createElement(k,null)),r.a.createElement(u.a,{exact:!0,path:"/App/worldInfo"},r.a.createElement(E,{list:t,token:c})),r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(h,{login:d})),r.a.createElement(u.a,{path:"/App/home"},r.a.createElement(x,null)),r.a.createElement(u.a,{path:"/App/notices"},r.a.createElement(I,null)),r.a.createElement(u.a,{path:"/App/profile"},r.a.createElement(S,null))))};t(46).config(),l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.27cf678b.chunk.js.map