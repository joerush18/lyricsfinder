(this.webpackJsonplyricsfinder=this.webpackJsonplyricsfinder||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(27),i=c.n(r),l=(c(36),c(10)),o=(c(37),c(7)),j=c(28),d=c.n(j).a.create({baseURL:"https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/"}),b=(c(11),function(e){return Object(a.jsx)("div",{className:"col-sm-6 ",children:Object(a.jsx)("div",{className:"card m-2 mt-2",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:e.title}),Object(a.jsx)("p",{className:"card-text",children:e.artistname}),Object(a.jsx)("button",{onClick:e.click,className:"btn btn-primary",children:"Lyrics"})]})})})}),h=function(e){return Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)("div",{className:"spinner-border",style:{width:"10rem",height:"10rem"},role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})})},m="chart.tracks.get?page=6&page_size=6&country=us&f_has_lyrics=10&apikey=".concat("d202f1e62b3af62627c5c2f36246f4f1"),u=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(" "),l=Object(o.a)(i,2),j=l[0],u=l[1],f=Object(n.useState)(!1),O=Object(o.a)(f,2),x=O[0],p=O[1];Object(n.useEffect)((function(){p(!0),d.get(m).then((function(e){r(e.data.message.body.track_list),p(!1)})).catch((function(e){return u(e)}))}),[]),Object(n.useEffect)((function(){return console.log(e)}));var v=s.map((function(t){return Object(a.jsx)(b,{title:t.track.album_name,artistname:t.track.artist_name,click:function(){return function(t,c,a){var n=[encodeURIComponent(t),encodeURIComponent(c),encodeURIComponent(a)];e.history.push({pathname:"/lyrics",search:"?"+n.join("&")})}(t.track.track_id,t.track.album_name,t.track.artist_name)}},t.track.album_id)}));x&&(v=Object(a.jsx)(h,{}));var y=null;return j&&(y=Object(a.jsx)("h1",{style:{color:"red"},children:j})),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"container mt-5 ",children:[Object(a.jsxs)("div",{className:"row  align-items-center",children:[Object(a.jsx)("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",className:" align-center textbi bi-file-earmark-music-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 6.64a1 1 0 0 0-1.243-.97l-1 .25A1 1 0 0 0 8 6.89v4.306A2.572 2.572 0 0 0 7 11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377.5 0 .974-.134 1.338-.377.36-.24.662-.628.662-1.123V8.89l2-.5V6.64z"})}),Object(a.jsx)("h4",{children:"Today's top 6 hits"})]}),Object(a.jsxs)("div",{className:"row text-center",children:[v,Object(a.jsx)("div",{children:y})]})]})})},f=c(2),O=Object(f.e)((function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),s=c[0],r=c[1],i=function(t){t.preventDefault(),e.history.push({pathname:"/search",search:s})};return Object(a.jsx)("div",{className:"container-fluid mt-5 ",children:Object(a.jsxs)("form",{className:"form-inline offset-md-5",onSubmit:i,children:[Object(a.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Enter artist name","aria-label":"Search",onChange:function(e){r(e.target.value),console.log(s)}}),Object(a.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",onClick:i,children:"Search"}),Object(a.jsx)("div",{})]})})})),x=Object(f.e)((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("nav",{className:"navbar navbar-dark bg-dark mb-5",children:Object(a.jsx)("span",{onClick:function(){return e.history.push("/")},className:"navbar-brand mb-0 h1 mx-auto",children:"LyricFinder"})}),Object(a.jsxs)("div",{className:"mr-auto text-center align-content-center ",children:[Object(a.jsxs)("svg",{width:"5em",height:"5em",viewBox:"0 0 16 16",className:"bi bi-music-note-beamed",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("path",{d:"M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"}),Object(a.jsx)("path",{fillRule:"evenodd",d:"M14 11V2h1v9h-1zM6 3v10H5V3h1z"}),Object(a.jsx)("path",{d:"M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"})]}),Object(a.jsx)("h1",{className:"sans-serif",children:"Search song by Artist's name"})]})]})})),p=c(30),v=function(e){var t,c=Object(n.useState)(""),s=Object(o.a)(c,2),r=s[0],i=s[1],l={},j=new URLSearchParams(e.location.search),b=Object(p.a)(j.entries());try{for(b.s();!(t=b.n()).done;){var h=t.value;l[h[0]]=h[1]}}catch(u){b.e(u)}finally{b.f()}var m=Object.keys(l);return Object(n.useEffect)((function(){return console.log(m)}),[]),Object(n.useEffect)((function(){d.get("track.lyrics.get?track_id=".concat(m[0],"&apikey=").concat("d202f1e62b3af62627c5c2f36246f4f1")).then((function(e){return i(e.data.message.body.lyrics.lyrics_body)})).catch((function(e){}))}),[]),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"card m-5",children:[Object(a.jsx)("h5",{className:"card-header",children:m[1]}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:m[2]}),Object(a.jsx)("p",{className:"card-text",children:r}),Object(a.jsx)("button",{onClick:function(){e.history.goBack()},className:"btn btn-primary m-auto",children:"Go back"})]})]})})},y=function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)([]),l=Object(o.a)(i,2),j=l[0],m=l[1],u=Object(n.useState)(!1),f=Object(o.a)(u,2),O=f[0],x=f[1];Object(n.useEffect)((function(){x(!0);var t=e.location.search.replace("?","");p(t)}),[s]);var p=function(e){r(e);var t="track.search?q_artist=".concat(e,"&page_size=6&page=1&s_track_rating=desc&f_has_lyrics&apikey=").concat("d202f1e62b3af62627c5c2f36246f4f1");d.get(t).then((function(e){console.log(e.data.message),m(e.data.message.body.track_list),x(!1)})).catch((function(e){return alert(e)}))},v=Object(a.jsx)(h,{});return O||(v=j.map((function(t){return Object(a.jsx)(b,{title:t.track.track_name,artistname:t.track.artist_name,click:function(){return function(t,c,a){var n=[encodeURIComponent(t),encodeURIComponent(c),encodeURIComponent(a)];e.history.push({pathname:"/lyrics",search:"?"+n.join("&")})}(t.track.track_id,t.track.album_name,t.track.artist_name)}},t.track.track_id)}))),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"container mt-5 mr-auto text-center",children:[Object(a.jsx)("div",{className:"row text-center",children:Object(a.jsxs)("h4",{style:{textTransform:"capitalize"},children:["Songs by: ",s]})}),Object(a.jsx)("div",{className:"row ",children:v})]})})};var g=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{}),Object(a.jsx)(O,{}),Object(a.jsx)(f.a,{path:"/",exact:!0,component:u}),Object(a.jsx)(f.a,{path:"/lyrics",component:v}),Object(a.jsx)(f.a,{path:"/search",component:y})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),k()}},[[60,1,2]]]);
//# sourceMappingURL=main.7a83ed4d.chunk.js.map