(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/twitter.91ee1ebe.svg"},23:function(e,t,n){e.exports=n.p+"static/media/person.30351fcf.svg"},24:function(e,t,n){e.exports=n.p+"static/media/add.085a38eb.svg"},42:function(e,t,n){e.exports=n.p+"static/media/heart.822330c7.svg"},43:function(e,t,n){e.exports=n.p+"static/media/unlikeheart.ea28a43c.svg"},44:function(e,t,n){e.exports=n.p+"static/media/email.f2103d04.svg"},45:function(e,t,n){e.exports=n(65)},50:function(e,t,n){},6:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(17),c=n.n(l),i=(n(50),n(31)),r=n(4),s=n(67),u=n(5),d=n(14),m=n(40),f=n(41),p=n(1),E={items:[],item:{}},g={count:1},b={isLoading:!1,data:null},O={isLoading:!1,data:null},v={isLoading:!1,data:null,done:-1},h={isLoading:!1,data:null,done:-1},L={flag:!0,profile:!1},j={isLoading:!1,data:null},y={isLoading:!1,data:null},T=Object(d.combineReducers)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return console.log("reducer.."),Object(p.a)(Object(p.a)({},e),{},{items:t.payload});default:return e}},counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return console.log("reducer.."),Object(p.a)(Object(p.a)({},e),{},{count:t.payload});default:return e}},allTweetsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ALL_TWEETS_LOAD":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"ALL_TWEETS_SUCCESS":case"ALL_TWEETS_FAIL":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,data:t.payload});default:return e}},loginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_LOAD":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"LOGIN_SUCCESS":case"LOGIN_FAIL":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,data:t.payload,done:t.done});case"LOGOUT":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,data:null,done:-1});default:return e}},signupReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP_LOAD":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"SIGNUP_SUCCESS":case"SIGNUP_FAIL":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,data:t.payload,done:t.done});default:return e}},myTweetsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MY_TWEETS_LOAD":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"MY_TWEETS_SUCCESS":case"MY_TWEETS_FAIL":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,data:t.payload});default:return e}},miscActionReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TWEET_PAGE":return Object(p.a)(Object(p.a)({},e),{},{flag:t.payload});case"GO_TO_PROFILE":return Object(p.a)(Object(p.a)({},e),{},{profile:t.payload});default:return e}},profileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROFILE_LOAD":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"GET_PROFILE_SUCCESS":case"GET_PROFILE_FAIL":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,data:t.payload});case"UPD_PROFILE_LOAD":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"UPD_PROFILE_SUCCESS":case"UPD_PROFILE_FAIL":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,data:t.payload});default:return e}},tweetReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TWEET_LOAD":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"CREATE_TWEET_SUCCESS":case"CREATE_TWEET_FAIL":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,data:t.payload});case"UPD_TWEET_LOAD":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"UPD_TWEET_SUCCESS":case"UPD_TWEET_FAIL":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,data:t.payload});case"DEL_TWEET_LOAD":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"DEL_TWEET_SUCCESS":case"DEL_TWEET_FAIL":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,data:t.payload});default:return e}}}),S=[m.a],_=Object(d.createStore)(T,{},Object(f.composeWithDevTools)(d.applyMiddleware.apply(void 0,S))),w=n(10),k=n(2),A=n(16),C=n.n(A),N=(n(6),n(21)),I=n(22),P=n.n(I),U=Object(a.createContext)(),R=function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)(!1),r=Object(k.a)(i,2),s=r[0],u=r[1],d=Object(a.useState)(null),m=Object(k.a)(d,2),f=m[0],p=m[1],E=Object(a.useState)(null),g=Object(k.a)(E,2),b=g[0],O=g[1],v=Object(a.useState)(null),h=Object(k.a)(v,2),L=h[0],j=h[1],y=Object(a.useState)(!1),T=Object(k.a)(y,2),S=T[0],_=T[1],w=Object(a.useState)(!1),A=Object(k.a)(w,2),C=A[0],N=A[1];return o.a.createElement(U.Provider,{value:{chat:l,setChat:c,mytweet:s,setMytweet:u,editTweet:f,setEditTweet:p,editTweetContent:b,setEditTweetContent:O,editTweetLikes:L,setEditTweetLikes:j,loader:S,setLoader:_,loader2:C,setLoader2:N}},e.children)},x=function(){return o.a.createElement("div",{id:"loader"})};var F=Object(u.b)((function(e){return{data:e.signupReducer.data,Loading:e.signupReducer.isLoading,success:e.signupReducer.success}}),(function(e){return{signup:function(t){return e(function(e){return function(t){console.log(e);var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};t({type:"SIGNUP_LOAD",isLoading:!0}),fetch("https://twitter-clone-mukul.herokuapp.com/users/register/",n).then((function(e){console.log(e);e.json().then((function(n){if(console.log(n),200===e.status)t({type:"SIGNUP_SUCCESS",isLoading:!1,payload:n,done:1});else{var a="";for(var o in n)a=a+o+","+n[o]+".";console.log(a),t({type:"SIGNUP_FAIL",isLoading:!1,payload:a,done:0})}}))})).catch((function(e){e.json().then((function(e){console.log(e);var n="";for(var a in e)n=n+a+","+e[a]+".";console.log("error"+n),t({type:"SIGNUP_FAIL",isLoading:!1,payload:n,done:0})}))}))}}(t))}}}))((function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)(null),r=Object(k.a)(i,2),s=r[0],u=r[1];function d(){c(!1)}return Object(a.useEffect)((function(){null!=s&&(console.log(s),e.signup(s))}),[s]),Object(a.useEffect)((function(){1===e.success?console.log("success"):console.log("Profile creation unsuccessful")}),[e.data]),o.a.createElement("div",{className:"App"},o.a.createElement("button",{onClick:function(){c(!0)},className:"signup"},"Sign Up"),o.a.createElement(P.a,{isOpen:l,onRequestClose:d,className:"modalStyle",ariaHideApp:!1},e.Loading?o.a.createElement(x,null):o.a.createElement("div",null,o.a.createElement("img",{src:C.a,alt:"logo",style:{height:"30px",width:"30px",display:"block",margin:"auto",marginTop:"20px"}}),o.a.createElement("form",{id:"signup",className:"formStyle"},o.a.createElement("label",null,"First Name"),o.a.createElement("input",{name:"first_name",type:"text"}),o.a.createElement("label",null,"Last Name"),o.a.createElement("input",{name:"last_name",type:"text"}),o.a.createElement("label",null,"Username"),o.a.createElement("input",{name:"username",type:"text"}),o.a.createElement("label",null,"Email"),o.a.createElement("input",{name:"email",type:"email"}),o.a.createElement("label",null,"Password"),o.a.createElement("input",{name:"password",type:"password"}),o.a.createElement("button",{onClick:function(e){return function(e){e.preventDefault();var t,n=document.getElementById("signup").querySelectorAll("input"),a={},o=Object(N.a)(n);try{for(o.s();!(t=o.n()).done;){var l=t.value;a[l.name]=l.value}}catch(c){o.e(c)}finally{o.f()}console.log(a),u(a),d()}(e)},className:"smallbtn"},"submit")))))})),D=n(66);var W=Object(u.b)((function(e){return{data:e.loginReducer.data,Loading:e.loginReducer.isLoading,success:e.loginReducer.done}}),(function(e){return{login:function(t){return e(function(e){return function(t){console.log(e);var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};t({type:"LOGIN_LOAD",isLoading:!0}),fetch("https://twitter-clone-mukul.herokuapp.com/users/login/",n).then((function(e){console.log(e);e.json().then((function(n){if(console.log(n),200===e.status)t({type:"LOGIN_SUCCESS",isLoading:!1,payload:n,done:1});else{var a="";for(var o in n)a=a+o+","+n[o]+".";console.log(a),t({type:"LOGIN_FAIL",isLoading:!1,payload:a,done:0})}}))})).catch((function(e){e.json().then((function(e){console.log(e);var n="";for(var a in e)n=n+a+","+e[a]+".";console.log("error"+n),t({type:"LOGIN_FAIL",isLoading:!1,payload:n,done:0})}))}))}}(t))}}}))((function(e){var t=Object(D.a)(),n=Object(k.a)(t,2),l=(n[0],n[1]),c=Object(a.useState)(!1),i=Object(k.a)(c,2),r=i[0],s=i[1],u=Object(a.useState)(null),d=Object(k.a)(u,2),m=d[0],f=d[1];function p(){s(!1)}return Object(a.useEffect)((function(){null!=m&&(console.log(m),e.login(m))}),[m]),Object(a.useEffect)((function(){e.data&&(1===e.success?(l("Token",e.data.token,{path:"/"}),l("Username",m.username,{path:"/"})):alert("something went wrong..."),f(null))}),[e.data]),o.a.createElement("div",{className:"App"},o.a.createElement("button",{onClick:function(){s(!0)},className:"login"},"Login"),e.Loading?function(){return p()}:"",o.a.createElement(P.a,{isOpen:r,onRequestClose:p,className:"modalStyle",ariaHideApp:!1},e.Loading?o.a.createElement(x,null):o.a.createElement("div",null,o.a.createElement("img",{src:C.a,alt:"logo",style:{height:"30px",width:"30px",display:"block",margin:"auto",marginTop:"20px"}}),o.a.createElement("form",{id:"login",className:"formStyle",method:"POST"},o.a.createElement("label",null,"Username"),o.a.createElement("input",{name:"username",type:"text"}),o.a.createElement("label",null,"Password"),o.a.createElement("input",{name:"password",type:"password"}),o.a.createElement("button",{onClick:function(e){return function(e){e.preventDefault();var t,n=document.getElementById("login").querySelectorAll("input"),a={},o=Object(N.a)(n);try{for(o.s();!(t=o.n()).done;){var l=t.value;a[l.name]=l.value}}catch(c){o.e(c)}finally{o.f()}console.log(a),f(a)}(e)},className:"smallbtn"},"login")))))}));var G=function(){var e=Object(D.a)(),t=Object(k.a)(e,2),n=t[0];return t[1],o.a.createElement("div",{className:"header"},o.a.createElement("img",{src:C.a,alt:"logo",style:{height:"48px",width:"48px"}}),null===n.Username||void 0===n.Username?o.a.createElement("div",{className:"headerContent"},"Home"):o.a.createElement("div",{className:"headerContent"},"Hey Welcome ",n.Username,"!"),null===n.Username||void 0===n.Username?o.a.createElement(F,null):"",null===n.Username||void 0===n.Username?o.a.createElement(W,null):"")},M=n(15),z=n(42),H=n.n(z),J=n(23),Y=n.n(J),B=n(43),q=n.n(B),$=Object(a.createContext)(),K=function(e){var t={position:"bottom-right",style:{backgroundColor:"#336600",border:"2px solid #408000",color:"white",fontSize:"20px",textAlign:"center",borderRadius:"5px"},closeStyle:{color:"white",fontSize:"16px"}},n={position:"bottom-right",style:{backgroundColor:"#cc3300",border:"2px solid #e63900",color:"white",fontSize:"20px",textAlign:"center",borderRadius:"5px"},closeStyle:{color:"white",fontSize:"16px"}},a=Object(w.b)(t),l=Object(k.a)(a,2),c=l[0],i=l[1],r=Object(w.b)(n),s=Object(k.a)(r,2),u=s[0],d=s[1];return o.a.createElement($.Provider,{value:{options:t,optionsError:n,openSnackbar:c,openErrSnackbar:u,closeSnackbar:i,closeErrSnackbar:d}},e.children)},Q=Object(u.b)((function(e){return{Loading:e.tweetReducer.isLoading}}),(function(e){return{deleteTweet:function(t){return e(function(e){return function(t){console.log(e);var n={method:"DELETE",headers:{Authorization:"Token "+e.token}};t({type:"DEL_TWEET_LOAD",isLoading:!0}),fetch("https://twitter-clone-mukul.herokuapp.com/mytweet/delete/"+e.id+"/",n).then((function(e){if(console.log(e),204===e.status)t({type:"DEL_TWEET_SUCCESS",isLoading:!1,payload:e,done:1});else{var n="";for(var a in e)n=n+a+","+e[a]+".";console.log(n),t({type:"DEL_TWEET_FAIL",isLoading:!1,payload:n,done:0})}})).catch((function(e){e.json().then((function(e){console.log(e);var n="";for(var a in e)n=n+a+","+e[a]+".";console.log("error"+n),t({type:"DEL_TWEET_FAIL",isLoading:!1,payload:n,done:0})}))}))}}(t))},updateTweet:function(t){return e(function(e){return function(t){console.log(e);var n={method:"PUT",headers:{Authorization:"Token "+e.token,"Content-Type":"application/json"},body:e.body};t({type:"UPD_TWEET_LOAD",isLoading:!0}),fetch("https://twitter-clone-mukul.herokuapp.com/mytweet/update/"+e.id+"/",n).then((function(e){console.log(e);e.json().then((function(n){if(console.log(n),200===e.status)t({type:"UPD_TWEET_SUCCESS",isLoading:!1,payload:n,done:1});else{var a="";for(var o in n)a=a+o+","+n[o]+".";console.log(a),t({type:"UPD_TWEET_FAIL",isLoading:!1,payload:a,done:0})}}))})).catch((function(e){e.json().then((function(e){console.log(e);var n="";for(var a in e)n=n+a+","+e[a]+".";console.log("error"+n),t({type:"UPD_TWEET_FAIL",isLoading:!1,payload:n,done:0})}))}))}}(t))}}}))((function(e){var t=Object(D.a)(),n=Object(k.a)(t,2),l=n[0],c=(n[1],Object(a.useRef)(null)),i=Object(a.useState)(null),r=Object(k.a)(i,2),s=r[0],u=r[1],d=Object(a.useState)(null),m=Object(k.a)(d,2),f=m[0],E=m[1],g=Object(a.useState)(null),b=Object(k.a)(g,2),O=b[0],v=b[1],h=Object(a.useState)(!1),L=Object(k.a)(h,2),j=L[0],y=L[1];Object(a.useEffect)((function(){E({content:e.content,likes:e.likes})}),[]);Object(a.useEffect)((function(){!0===j&&c.current.focus()}),[j]),Object(a.useEffect)((function(){if(null!==s){var t={token:l.Token,id:s};e.deleteTweet(t),u(null)}}),[s]),Object(a.useEffect)((function(){}),[f]),Object(a.useEffect)((function(){if(null!==O){var t={token:l.Token,id:O,body:JSON.stringify(f)};e.updateTweet(t),v(null),y(!1)}}),[O]);var T=e.upd,S=T.split("T"),_=new Date(S[0]),w=new Date(T);return o.a.createElement("div",{className:"tweet"},o.a.createElement("div",{className:"aboveTweet"},o.a.createElement("div",{className:"user"},o.a.createElement("img",{src:null==e.image?Y.a:e.image,alt:"profile",style:{height:"30px",width:"30px",display:"inline",margin:"auto",borderRadius:"50%",verticalAlign:"middle"}}),e.user),o.a.createElement("div",{className:"tweetTime"},w.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}),", ",_.toDateString())),o.a.createElement("div",{className:"mainTweet"},!0===j?o.a.createElement("input",{ref:c,onChange:function(e){return t="content",n=e.target.value,void E(Object(p.a)(Object(p.a)({},f),{},Object(M.a)({},t,n)));var t,n},className:"mainTweet editTweetcontent",value:f.content}):o.a.createElement("div",{className:"tweetContent"},e.content),e.post_image?o.a.createElement("img",{src:e.post_image,alt:"image",className:"tweetPostImage"}):""),o.a.createElement("div",{className:"likes"},o.a.createElement("img",{onClick:function(){return function(t){var n={token:l.Token,id:t,body:JSON.stringify(Object(p.a)(Object(p.a)({},f),{},{likes:e.likes+1}))};E(Object(p.a)(Object(p.a)({},f),{},{likes:e.likes+1})),e.updateTweet(n)}(e.id)},src:e.likes>0?H.a:q.a,alt:"like",style:{height:"30px",width:"30px",display:"inline",margin:"auto"}}),e.likes>0?e.likes+" people liked it":"Be the first to like this",l.Username===e.user?o.a.createElement("span",null,o.a.createElement("span",{onClick:function(){return t=e.id,void u(t);var t},className:"deletebtn"},"delete")," ",o.a.createElement("span",{onClick:!0===j?function(){return t=e.id,void v(t);var t}:function(){y(!0)},className:"deletebtn"},!0===j?"save":"edit")):""))})),V=Object(u.b)((function(e){return{myTweets:e.myTweetsReducer.data,Loading:e.myTweetsReducer.isLoading,update:e.tweetReducer.isLoading}}),(function(e){return{fetchMyTweets:function(t){return e(function(e){return function(t){var n={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token "+e.token}};t({type:"MY_TWEETS_LOAD",isLoading:!0}),fetch("https://twitter-clone-mukul.herokuapp.com/mytweet/",n).then((function(e){e.json().then((function(n){if(200===e.status)t({type:"MY_TWEETS_SUCCESS",isLoading:!1,payload:n});else{var a="";for(var o in n)a=a+o+","+n[o]+".";t({type:"MY_TWEETS_FAIL",isLoading:!1,payload:a})}}))})).catch((function(e){e.json().then((function(e){var n="";for(var a in e)n=n+a+","+e[a]+".";t({type:"MY_TWEETS_FAIL",isLoading:!1,payload:n})}))}))}}(t))}}}))((function(e){var t=Object(a.useState)(null),n=Object(k.a)(t,2),l=n[0],c=n[1],i=Object(D.a)(),r=Object(k.a)(i,2),s=r[0];r[1];return Object(a.useEffect)((function(){if(e.myTweets)c(e.myTweets);else{var t={token:s.Token};e.fetchMyTweets(t)}console.log(e.myTweets)}),[e.myTweets,e.Loading,l]),Object(a.useEffect)((function(){var t={token:s.Token};e.fetchMyTweets(t)}),[e.update]),o.a.createElement("div",null,!0===e.Loading?o.a.createElement(x,null):null===l?"":l.slice(0).reverse().map((function(e){return o.a.createElement(Q,{key:e.id,id:e.id,content:e.content,likes:e.likes,upd:e.updation_date,user:e.user.username,image:e.profile_image,post_image:e.image})})))})),X={method:"GET",headers:{"Content-Type":"application/json"}},Z=Object(u.b)((function(e){return{allTweets:e.allTweetsReducer.data,Loading:e.allTweetsReducer.isLoading,update:e.tweetReducer.isLoading}}),(function(e){return{fetchAllTweets:function(){return e((function(e){e({type:"ALL_TWEETS_LOAD",isLoading:!0}),fetch("https://twitter-clone-mukul.herokuapp.com/alltweets/",X).then((function(t){t.json().then((function(n){if(200===t.status)e({type:"ALL_TWEETS_SUCCESS",isLoading:!1,payload:n});else{var a="";for(var o in n)a=a+o+","+n[o]+".";e({type:"ALL_TWEETS_FAIL",isLoading:!1,payload:a})}}))})).catch((function(t){t.json().then((function(t){var n="";for(var a in t)n=n+a+","+t[a]+".";e({type:"ALL_TWEETS_FAIL",isLoading:!1,payload:n})}))}))}))}}}))((function(e){var t=Object(a.useState)(null),n=Object(k.a)(t,2),l=n[0],c=n[1];return Object(a.useEffect)((function(){e.allTweets?(c(e.allTweets),console.log(e.allTweets)):e.fetchAllTweets()}),[e.allTweets,e.Loading,l]),Object(a.useEffect)((function(){e.fetchAllTweets()}),[e.update]),o.a.createElement("div",null,!0===e.Loading?o.a.createElement(x,null):null===l?"":l.slice(0).reverse().map((function(e){return o.a.createElement(Q,{key:e.id,id:e.id,content:e.content,likes:e.likes,upd:e.updation_date,user:e.user.username,image:e.profile_image,post_image:e.image})})))})),ee=function(e){return function(t){t({type:"GO_TO_PROFILE",payload:!e})}},te=Object(u.b)((function(e){return{flag:e.miscActionReducer.flag,profile:e.miscActionReducer.profile}}),(function(e){return{logout:function(){return e((function(e){e({type:"LOGOUT",isLoading:!1})}))},changeTweetPage:function(t){return e((n=t,function(e){e({type:"CHANGE_TWEET_PAGE",payload:!n})}));var n},goToProfile:function(t){return e(ee(t))}}}))((function(e){var t=Object(a.useContext)(U),n=t.chat,l=t.setChat,c=Object(D.a)(),i=Object(k.a)(c,3),r=i[0],s=(i[1],i[2]);return Object(a.useEffect)((function(){}),[e.flag,e.profile]),o.a.createElement("div",{className:"sidebar"},o.a.createElement("div",{className:"sidebarOptions"},"#Explore"),null===r.Username||void 0===r.Username?"":o.a.createElement("div",{className:"mobileSec"},o.a.createElement("div",{onClick:function(){l(!n)},className:"sidebarOptions"},"Messages"),!1===e.profile?o.a.createElement("div",{onClick:function(){e.changeTweetPage(e.flag)},className:"sidebarOptions"},e.flag?"My tweets":"All tweets"):o.a.createElement("div",{onClick:function(){e.goToProfile(e.profile)},className:"sidebarOptions"},"Home"),o.a.createElement("div",{onClick:function(){s("Token",{path:"/"},-1),s("Username",{path:"/"},-1),e.logout()},className:"sidebarOptions"},"log out")))})),ne=function(){var e=Object(a.useContext)(U),t=e.chat;e.setChat;return o.a.createElement("div",{className:"rightSidebar"},o.a.createElement("input",{className:"searchTweet",placeholder:"Search"}),t?o.a.createElement("textarea",{className:"message",rows:"5"}):"")},ae=function(){return o.a.createElement("div",null,o.a.createElement("img",{className:"profilePic",src:Y.a}))},oe=n(24),le=n.n(oe),ce=Object(u.b)((function(e){return{Loading:e.tweetReducer.isLoading}}),(function(e){return{createTweet:function(t){return e(function(e){return function(t){console.log(e);var n={method:"POST",headers:{Authorization:"Token "+e.token},body:e.data};t({type:"CREATE_TWEET_LOAD",isLoading:!0}),fetch("https://twitter-clone-mukul.herokuapp.com/mytweet/",n).then((function(e){console.log(e);e.json().then((function(n){if(console.log(n),200===e.status)t({type:"CREATE_TWEET_SUCCESS",isLoading:!1,payload:n,done:1});else{var a="";for(var o in n)a=a+o+","+n[o]+".";console.log(a),t({type:"CREATE_TWEET_FAIL",isLoading:!1,payload:a,done:0})}}))})).catch((function(e){e.json().then((function(e){console.log(e);var n="";for(var a in e)n=n+a+","+e[a]+".";console.log("error"+n),t({type:"CREATE_TWEET_FAIL",isLoading:!1,payload:n,done:0})}))}))}}(t))},goToProfile:function(t){return e(ee(t))}}}))((function(e){var t=Object(a.useState)(null),n=Object(k.a)(t,2),l=n[0],c=n[1],i=Object(D.a)(),r=Object(k.a)(i,2),s=r[0];r[1];Object(a.useEffect)((function(){}),[l]);var u=function(e,t){c(Object(p.a)(Object(p.a)({},l),{},Object(M.a)({},e,t)))};return o.a.createElement("div",{className:"tweetbox"},!0===e.Loading?o.a.createElement(x,null):o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){e.goToProfile(e.profile)}},o.a.createElement(ae,null)),o.a.createElement("form",{class:"tweetboxform"},o.a.createElement("textarea",{id:"tweetContent",onChange:function(e){return u("content",e.target.value)},name:"content",rows:"5",cols:"30",placeholder:"What's happening?",className:"textArea"}),o.a.createElement("div",null),o.a.createElement("input",{type:"file",id:"postImage",className:"imageUpload",onChange:function(e){return u("image",e.target.files[0])}}),o.a.createElement("label",{className:"uploadImage",htmlFor:"postImage"},o.a.createElement("img",{src:le.a,style:{height:"30px",width:"30px",display:"inline",margin:"auto"}})),o.a.createElement("input",{className:"smallbtn2",onClick:function(t){return function(t){t.preventDefault();var n=new FormData;for(var a in l)n.append(a,l[a]);console.log(n);var o={data:n,token:s.Token};e.createTweet(o)}(t)},type:"submit",value:"Tweet"}))))})),ie=n(44),re=n.n(ie),se=Object(u.b)((function(e){return{profile:e.profileReducer.data,Loading:e.profileReducer.isLoading}}),(function(e){return{fetchProfile:function(t){return e(function(e){return function(t){console.log(e);t({type:"GET_PROFILE_LOAD",isLoading:!0}),fetch("https://twitter-clone-mukul.herokuapp.com/users/profile/"+e.username+"/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){e.json().then((function(n){if(200===e.status)console.log(n),t({type:"GET_PROFILE_SUCCESS",isLoading:!1,payload:n});else{var a="";for(var o in n)a=a+o+","+n[o]+".";console.log(a),t({type:"GET_PROFILE_FAIL",isLoading:!1,payload:a})}}))})).catch((function(e){e.json().then((function(e){var n="";for(var a in e)n=n+a+","+e[a]+".";console.log(n),t({type:"GET_PROFILE_FAIL",isLoading:!1,payload:n})}))}))}}(t))},updateProfile:function(t){return e(function(e){return function(t){console.log(e);var n={method:"PUT",headers:{Authorization:"Token "+e.token},body:e.data};t({type:"UPD_PROFILE_LOAD",isLoading:!0}),fetch("https://twitter-clone-mukul.herokuapp.com/users/profile/"+e.username+"/",n).then((function(e){e.json().then((function(n){if(200===e.status)console.log(n),t({type:"UPD_PROFILE_SUCCESS",isLoading:!1,payload:n});else{var a="";for(var o in n)a=a+o+","+n[o]+".";console.log(a),t({type:"UPD_PROFILE_FAIL",isLoading:!1,payload:a})}}))})).catch((function(e){e.json().then((function(e){var n="";for(var a in e)n=n+a+","+e[a]+".";console.log(n),t({type:"UPD_PROFILE_FAIL",isLoading:!1,payload:n})}))}))}}(t))}}}))((function(e){var t=Object(a.useState)(null),n=Object(k.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)(!1),r=Object(k.a)(i,2),s=r[0],u=r[1],d=Object(a.useState)(null),m=Object(k.a)(d,2),f=m[0],E=m[1],g=Object(D.a)(),b=Object(k.a)(g,2),O=b[0];b[1];Object(a.useEffect)((function(){if(e.profile)c(e.profile),E(Object(p.a)(Object(p.a)({},f),{},{bio:e.profile.bio}));else{var t={username:O.Username};e.fetchProfile(t)}console.log(e.profile)}),[e.profile]),Object(a.useEffect)((function(){}),[s,f]);var v=function(e,t){E(Object(p.a)(Object(p.a)({},f),{},Object(M.a)({},e,t)))};return o.a.createElement("div",null,!0===e.Loading?o.a.createElement(x,null):null===l?"":o.a.createElement("div",null,0==s?o.a.createElement("img",{className:"profilePicProfile",src:l.image}):o.a.createElement("div",null,o.a.createElement("img",{className:"profilePicProfile",src:l.image}),o.a.createElement("input",{type:"file",id:"postImage",className:"imageUpload",onChange:function(e){return v("image",e.target.files[0])}}),o.a.createElement("label",{className:"uploadImageProfile",htmlFor:"postImage"},o.a.createElement("img",{src:le.a,style:{height:"30px",width:"30px",display:"inline",margin:"auto"}}))),o.a.createElement("div",null,o.a.createElement("div",{className:"profileName"},l.user.first_name," ",l.user.last_name),o.a.createElement("div",{className:"profileUsername"},"@",l.user.username),o.a.createElement("div",{className:"profileEmail"}," ",o.a.createElement("img",{src:re.a,style:{height:"20px",width:"20px",display:"inline",margin:"auto",verticalAlign:"middle"}}),"  ",l.user.email),!1===s?o.a.createElement("div",null,null===l.bio?o.a.createElement("div",{className:"bio"}," Tell us about yourself"):o.a.createElement("div",{className:"bio"},l.bio)):o.a.createElement("div",null,o.a.createElement("input",{className:"bioInput",onChange:function(e){return v("bio",e.target.value)},value:null===f?"":f.bio,type:"text",placeholder:"Tell us about yourself..."})),o.a.createElement("div",{className:"follow"},o.a.createElement("div",null,o.a.createElement("span",null,l.following),"Following"),o.a.createElement("div",null,o.a.createElement("span",null,l.followers),"Followers ")),o.a.createElement("div",{className:"editbtn",onClick:function(){!1===s?u(!0):function(){var t=new FormData;for(var n in f)t.append(n,f[n]);console.log(t);var a={data:t,token:O.Token,username:O.Username};e.updateProfile(a),u(!1)}()}},!1===s?"edit":"save"))))})),ue=Object(u.b)((function(e){return{flag:e.miscActionReducer.flag,profile:e.miscActionReducer.profile,Loading:e.tweetReducer.isLoading}}),(function(e){return{}}))((function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),l=(n[0],n[1]);return Object(a.useEffect)((function(){console.log("main"),l(e.Loading)}),[e.flag,e.profile,e.Loading]),Object(a.useEffect)((function(){})),o.a.createElement("div",{className:"mainArea"},!0===e.Loading?o.a.createElement(x,null):!1===e.profile?o.a.createElement("div",null,o.a.createElement(ce,null),e.flag?o.a.createElement(Z,null):o.a.createElement(V,null),o.a.createElement("div",{style:{padding:"50px"}})):o.a.createElement(se,null))}));var de=function(){return o.a.createElement("div",null,o.a.createElement(w.a,null,o.a.createElement(K,null,o.a.createElement(R,null,o.a.createElement(G,null),o.a.createElement(w.a,null,o.a.createElement("div",{className:"dashboard"},o.a.createElement(te,null),o.a.createElement(ue,null),o.a.createElement(ne,null)))))))};var me=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"AppInfo"},o.a.createElement("div",{className:"Info"}," New Twitter")),o.a.createElement("div",{className:"Sign"},o.a.createElement("img",{src:C.a,alt:"logo",style:{height:"180px",width:"180px"}}),"Join New Twitter today!",o.a.createElement(w.a,null,o.a.createElement(F,null),o.a.createElement(W,null))))};var fe=function(){return o.a.createElement("div",null,o.a.createElement(u.a,{store:_},o.a.createElement(s.a,null,o.a.createElement(i.a,null,o.a.createElement(r.c,null,o.a.createElement(r.a,{path:"/entry",exact:!0,component:me}),o.a.createElement(r.a,{path:"/",exact:!0,component:de}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.4d9107a4.chunk.js.map