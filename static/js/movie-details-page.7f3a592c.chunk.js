(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(1),r=n(61),c=n.n(r),s=n(66),i=n(62),o=n(57),h=n(58),l=n(60),p=n(59),u=n(0),j=n(11),d=n(3),v=n(109),b=n(63),m=n.n(b),O=n(9),f=n.p+"static/media/cat-cry.1752189b.jpg",x=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={cast:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,m.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US"));case 3:n=e.sent,this.setState({cast:n.data.cast});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.cast;return console.log(e),Object(a.jsx)(a.Fragment,{children:e&&Object(a.jsx)("ul",{children:e.map((function(t){var n,r=t.id,c=t.name,s=t.character,i=t.profile_path;return Object(a.jsxs)("li",{children:[Object(a.jsx)("img",{src:null!==(n="https://image.tmdb.org/t/p/w300".concat(i))&&void 0!==n?n:f,alt:e.name,width:"150"}),Object(a.jsxs)("p",{children:["Actor name: ",c]}),Object(a.jsxs)("p",{children:["Character: ",s]})]},r)}))})})}}]),n}(u.Component);x.defaultProps={defaultImg:f};var g=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={reviews:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,m.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US&page=1"));case 3:n=e.sent,this.setState({reviews:n.data.results});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.reviews;return Object(a.jsxs)(a.Fragment,{children:[e.length>0&&Object(a.jsx)("ul",{children:e.map((function(e){var t=e.author,n=e.content,r=e.id;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("h2",{children:["Author: ",t]}),Object(a.jsx)("p",{children:n})]},r)}))}),0===e.length&&Object(a.jsx)("p",{children:"We don't have any reviews for this movie"})]})}}]),n}(u.Component),w=function(e){var t=e.poster_path,n=e.title,r=e.name,c=e.vote_average,s=e.overview,i=e.genres;return Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:t?"".concat("https://image.tmdb.org/t/p/w300").concat(t):f,alt:n||r,width:"300"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:n||r}),Object(a.jsx)("h2",{children:"User Score:"}),Object(a.jsxs)("p",{children:[10*c,"%"]}),Object(a.jsx)("h3",{children:"Overview"}),Object(a.jsx)("p",{children:s}),Object(a.jsx)("h3",{children:"Genres"})]}),Object(a.jsx)("ul",{children:i.map((function(e){var t=e.id,n=e.name;return Object(a.jsx)("li",{children:n},t)}))})]})},y=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={poster_path:null,title:null,name:null,vote_average:null,overview:null,genres:[],id:null},e.handleGoBack=function(){var t,n=e.props,a=n.location;n.history.push((null===a||void 0===a||null===(t=a.state)||void 0===t?void 0:t.from)||O.a.home)},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,m.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US"));case 3:n=e.sent,this.setState(Object(s.a)({},n.data));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.poster_path,n=e.title,r=e.name,c=e.vote_average,s=e.overview,i=e.genres;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("button",{type:"button",onClick:this.handleGoBack,children:[Object(a.jsx)(v.a,{style:{marginRight:8}}),"Go back"]}),Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsx)(w,{poster_path:t,title:n,name:r,vote_average:c,overview:s,genres:i})})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Additional information"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.c,{to:"".concat(this.props.match.url,"/cast "),children:"Cast"})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.c,{to:"".concat(this.props.match.url,"/reviews "),children:"Reviews"})," "]})]}),Object(a.jsx)(d.a,{path:"".concat(this.props.match.path,"/cast "),component:x}),Object(a.jsx)(d.a,{path:"".concat(this.props.match.path,"/reviews "),component:g})]})]})}}]),n}(u.Component)}}]);
//# sourceMappingURL=movie-details-page.7f3a592c.chunk.js.map