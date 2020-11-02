(this["webpackJsonpytube-player-app"]=this["webpackJsonpytube-player-app"]||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a,i=n(2),r=n(0),o=n.n(r),c=n(19),s=n.n(c),u=n(150),d=n(18),l=n(59),p=n(42),h=n(21),j=n(134),b="https://www.googleapis.com/",v=n(146),f=function(e){var t,n;return{status:e.status,errorMessages:e.xhr.response&&(null===(t=e.xhr.response)||void 0===t||null===(n=t.error)||void 0===n?void 0:n.errors)}};!function(e){e.GET="GET"}(a||(a={}));var g=function(){function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.TIMEOUT_IN_MS;Object(d.a)(this,e),this.ajaxCreationMethod=t,this.configuration=n,this.timeout=a,this.sendRequest=function(e){return e.pipe(Object(v.a)((function(e){return console.log("sendRequest",e),Object(j.a)(f(e))})))},this.configuration.baseURL=b}return Object(h.a)(e,[{key:"get",value:function(e,t){var n=this.getRequest(e,t);return this.sendRequest(n)}},{key:"getJSON",value:function(e,t){var n=this.getRequest(e,t);return this.sendRequest(n).pipe(Object(l.a)((function(e){return e.response})))}},{key:"getRequest",value:function(e,t){var n=function(e,t,n){return e+"youtube/"+t+(n||"")}(this.configuration.baseURL,e);return this.buildRequest(n,a.GET,t)}},{key:"buildRequest",value:function(e,t,n,a){return this.ajaxCreationMethod({url:e,method:t,body:a,headers:n,timeout:this.timeout})}}]),e}();g.TIMEOUT_IN_MS=3e4;var O,m=new p.a,y={videosGateway:new function e(t){var n=this;Object(d.a)(this,e),this.networkingService=t,this.searchVideos=function(e){var t=Object(p.b)(),a="v3/search?key=".concat(t,"&type=video&part=snippet&maxResults=1&q=").concat(e);return n.networkingService.getJSON(a).pipe(Object(l.a)(n.mapVideosDataToVideos))},this.mapVideosDataToVideos=function(e){return e.items.map((function(e){var t=e.id.videoId,n=e.snippet;return{id:t,title:n.title,description:n.description,channel:{name:n.channelTitle}}}))}}(new g(u.a,m))},x=n(47),w=n(45),S=n(148),I=function(){function e(){Object(d.a)(this,e),this.updateHandler=void 0}return Object(h.a)(e,[{key:"setUpdateHandler",value:function(e){this.updateHandler=e}},{key:"update",value:function(e){if(!this.updateHandler)throw new Error("Presenter: you must set updateHandler before calling update: "+this);this.updateHandler(e)}}]),e}(),P={id:"",title:"",description:"",channel:{name:""}};!function(e){e.Loading="Loading",e.Empty="Empty",e.Data="Data",e.Error="Error"}(O||(O={}));var E,k=n(137),V=n(60),T=n.n(V),N=n(65),R=n.n(N),C=n(136),B="YouTV",L="Search",q="Search...",D="Welcome! You can search Youtube videos just from here!",M="Play",W="Pause",H="Video is found!",G="No video found!",U="Welcome to You TV",A="Ooops! something is wrong, try again!",F="No chance to use API, reached the maximum number of search by quota!";!function(e){e.PauseIcon="PauseIcon",e.PlayIcon="PlayIcon"}(E||(E={}));var Y,J=Object(C.a)((function(e){return{button:{margin:e.spacing(1)}}})),Q=function(e){var t=J(),n=function(e){switch(e){case E.PlayIcon:return{title:M,getIcon:function(){return Object(i.jsx)(T.a,{})}};case E.PauseIcon:return{title:W,getIcon:function(){return Object(i.jsx)(R.a,{})}}}}(e.buttonType),a=n.title,r=n.getIcon;return Object(i.jsx)("div",{children:Object(i.jsx)(k.a,{disabled:e.disabled,variant:"contained",color:"secondary",className:t.button,startIcon:r(),onClick:function(){var t;return null===(t=e.onClick)||void 0===t?void 0:t.call(e)},children:a})})},_=n(145),z=n(66),X=n(147),K=function(e){return Object(i.jsx)(X.a,Object(z.a)({elevation:6,variant:"filled"},e))},Z=Object(C.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));!function(e){e.Error="Error",e.Warning="Warning",e.Info="Info",e.Success="Success"}(Y||(Y={}));var $=function(e){switch(e){case Y.Error:return"error";case Y.Info:return"info";case Y.Warning:return"warning"}return"success"},ee=function(e){var t=Z();return Object(i.jsx)("div",{className:t.root,children:Object(i.jsx)(_.a,{open:e.isOpen,autoHideDuration:5e3,onClose:e.onClosePress,children:Object(i.jsx)(K,{severity:$(e.state),onClose:e.onClosePress,children:e.message})})})},te={videos:[],selectedVideo:P,searchString:"",isPlaying:!1,viewState:O.Empty,buttonType:E.PlayIcon},ne=function(e){Object(x.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this)).videosService=e,a.searchString="",a.buttonType=E.PlayIcon,a.viewState=O.Empty,a.videos=[],a.selectedVideo=P,a.isPlaying=!1,a.isQuotaExceededError=!1,a.getInitialOutput=function(){return te},a.showSnackBar=function(e){a.showSnackBarAlertBasedOnViewState(e),a.updateOutput()},a.onPlayOrPauseClick=function(){a.isPlaying=!a.isPlaying,a.toggleButtonIconType(),a.updateOutput()},a.searchVideos=function(e){a.viewState=O.Loading,a.searchString=e,a.updateOutput(),a.videosService.searchVideos(e).pipe(Object(S.a)(1e3)).subscribe(a.getVideoSuccess,a.processError)},a.getVideoSuccess=function(e){var t=0===e.length;a.viewState=t?O.Empty:O.Data,a.selectedVideo=e[0],a.videos=e,a.updateOutput()},a.processError=function(e){a.processErrorViewState(e),a.selectedVideo=P,a.videos=[],a.updateOutput()},a.processErrorViewState=function(e){var t=null===e||void 0===e?void 0:e.errorMessages[0];"quotaExceeded"===(null===t||void 0===t?void 0:t.reason)?(a.isQuotaExceededError=!0,a.viewState=O.Loading):(a.isQuotaExceededError=!1,a.viewState=O.Error)},a.toggleButtonIconType=function(){var e=a.buttonType===E.PlayIcon;a.buttonType=e?E.PauseIcon:E.PlayIcon},a.showSnackBarAlertBasedOnViewState=function(e){var t="",n=Y.Info;switch(a.viewState){case O.Data:t=H,n=Y.Success;break;case O.Empty:t=G,n=Y.Info;break;case O.Loading:t=U,n=Y.Info;break;case O.Error:t=a.isQuotaExceededError?F:A,n=Y.Error}e(t,n)},a.updateOutput=function(){a.update({searchString:a.searchString,buttonType:a.buttonType,videos:a.videos,selectedVideo:a.selectedVideo,isPlaying:a.isPlaying,viewState:a.viewState})},a}return n}(I),ae={isOpen:!1,alertState:Y.Info,message:""},ie=function(e){Object(x.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).isOpen=!1,e.message="",e.alertState=Y.Info,e.show=function(t,n){e.alertState=n,e.message=t,e.isOpen=!0,e.updateOutput()},e.hide=function(){e.isOpen=!1,e.message="",e.alertState=Y.Info,e.updateOutput()},e.updateOutput=function(){e.update({message:e.message,isOpen:e.isOpen,alertState:e.alertState})},e}return Object(h.a)(n,[{key:"getInitialOutput",value:function(){return ae}}]),n}(I),re={videoPlayerPresenter:new ne(y.videosGateway),snackBarPresenter:new ie},oe=n(32),ce=function(e){var t=e.getInitialOutput(),n=Object(r.useState)(t),a=Object(oe.a)(n,2),i=a[0],o=a[1];return e.setUpdateHandler(o),i},se=n(140),ue=n(142),de=n(5),le=Object(C.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(de.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"})}})),pe=n(67),he=n.n(pe),je=n(138),be=function(e){var t=e.className;return Object(i.jsx)(je.a,{edge:"start",className:t,color:"inherit","aria-label":"open drawer",children:Object(i.jsx)(he.a,{})})},ve=n(139),fe=function(e){var t=e.title,n=e.className;return Object(i.jsx)(ve.a,{className:n,variant:"h6",noWrap:!0,children:t})},ge=n(68),Oe=n.n(ge),me=n(149),ye=n(10),xe=Object(C.a)((function(e){return{search:Object(de.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ye.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ye.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(de.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),we=function(e){var t=xe();return Object(i.jsxs)("div",{className:t.search,children:[Object(i.jsx)("div",{className:t.searchIcon,children:Object(i.jsx)(Oe.a,{})}),Object(i.jsx)(me.a,{value:e.value,placeholder:q,classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":L},onChange:function(t){e.onSearch(t.target.value)}})]})},Se=n(141),Ie=function(e){var t=le();return Object(i.jsx)("div",{className:t.grow,children:Object(i.jsx)(se.a,{position:"static",children:Object(i.jsx)(Se.a,{maxWidth:"md",children:Object(i.jsxs)(ue.a,{children:[Object(i.jsx)(be,{className:t.menuButton}),Object(i.jsx)(we,{placeholder:q,value:e.search,onSearch:e.onSearch}),Object(i.jsx)("div",{className:t.grow}),Object(i.jsx)(fe,{title:e.title,className:t.title})]})})})})},Pe=n(69),Ee=n.n(Pe),ke=(n(58),"100%"),Ve="100%",Te=function(e){var t,n=(t=e.videoId,"".concat("https://www.youtube.com","/watch?v=").concat(t));return Object(i.jsx)("div",{className:"player-wrapper",children:Object(i.jsx)(Ee.a,{className:"player",url:n,playing:e.isPlaying,controls:!0,width:ke,height:Ve,onReady:function(t){var n;null===(n=e.onVideoReady)||void 0===n||n.call(e,t)},config:{youtube:{playerVars:{showinfo:1}}}})})},Ne=Object(C.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)}}})),Re=function(e){var t=Ne();return Object(i.jsx)(Se.a,{maxWidth:"lg",children:Object(i.jsx)("div",{className:t.root,children:e.children})})},Ce=n(143),Be=function(){return Object(i.jsx)("div",{className:"player-wrapper ",children:Object(i.jsx)(Ce.a,{animation:"wave",variant:"rect",width:ke,height:Ve})})},Le=n(144),qe=n(109),De=Object(C.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)},paper:{maxWidth:"80%",margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(2)}}})),Me=function(e){var t=De();return Object(i.jsx)(qe.a,{className:t.paper,children:Object(i.jsx)(Le.a,{container:!0,wrap:"nowrap",spacing:2,children:Object(i.jsx)(Le.a,{item:!0,xs:!0,zeroMinWidth:!0,children:e.children})})})},We=function(e){var t=function(t){return e.isLoading?Object(i.jsx)(Ce.a,{animation:"wave"}):t};return e.isEmpty?Object(i.jsx)(Me,{children:Object(i.jsx)(ve.a,{variant:"body1",paragraph:!0,children:D})}):Object(i.jsxs)("div",{children:[Object(i.jsx)(Me,{children:Object(i.jsx)(Q,{disabled:e.isButtonDisabled,buttonType:e.buttonType,onClick:e.onButtonClick})}),Object(i.jsx)(Me,{children:Object(i.jsx)(ve.a,{variant:"h6",component:"h4",children:t(e.selectedVideo.title)})}),Object(i.jsx)(Me,{children:Object(i.jsx)(ve.a,{variant:"body1",paragraph:!0,children:t(e.selectedVideo.description)})}),Object(i.jsx)(Me,{children:Object(i.jsx)(ve.a,{variant:"subtitle1",component:"h4",children:t(e.selectedVideo.channel.name)})})]})},He=function(e){var t=re.videoPlayerPresenter,n=re.snackBarPresenter,a=ce(t),o=a.selectedVideo,c=a.buttonType,s=a.isPlaying,u=a.viewState,d=a.searchString;Object(r.useEffect)((function(){t.showSnackBar(n.show)}),[u,t,n]);var l=function(){return u===O.Loading};return Object(i.jsxs)("div",{className:e.className,children:[Object(i.jsx)(Ie,{title:B,onSearch:function(e){t.searchVideos(e)},search:d}),Object(i.jsxs)(Re,{children:[l()?Object(i.jsx)(Be,{}):Object(i.jsx)(Te,{videoId:o.id,isPlaying:s}),Object(i.jsx)(We,{isLoading:l(),isEmpty:u===O.Empty,selectedVideo:o,buttonType:c,isButtonDisabled:u!==O.Data,onButtonClick:function(){t.onPlayOrPauseClick()}})]})]})},Ge=function(){var e=re.snackBarPresenter,t=ce(e);return Object(i.jsx)(ee,{isOpen:t.isOpen,state:t.alertState,message:t.message,onClosePress:e.hide})},Ue=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(He,{}),Object(i.jsx)(Ge,{})]})},Ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))};n(107);s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(Ue,{})}),document.getElementById("root")),Ae()},42:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(18),i=function(){var t;return console.log(e),null!==(t="AIzaSyAW55ywqYRXIMsBEoiRYnbyHkeTyqpooFc")?t:""},r=function e(){Object(a.a)(this,e),this.baseURL=void 0}}).call(this,n(83))},58:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.738bdbab.chunk.js.map