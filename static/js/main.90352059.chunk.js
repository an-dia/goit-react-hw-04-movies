(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{16:function(e,t,n){e.exports={List:"App_List__32xuj",Item:"App_Item__2VRbH",LinkBase:"App_LinkBase__1V1ri",LinkActive:"App_LinkActive__3CR9f"}},42:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(33),s=n.n(i),o=(n(41),n(42),n(13)),l=n(2),j=n(16),h=n.n(j),u=n(7),d=n.n(u),p=n(14),b=n(9),v=n(10),m=n(12),O=n(11),f=n(15),x=n.n(f),g=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={trendingMovies:[]},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc");case 2:t=e.sent,console.log(t.data.results),this.setState({trendingMovies:t.data.results});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.trendingMovies;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Trending Today"}),Object(a.jsx)("ul",{children:e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/movies/".concat(e.id),children:e.title?e.title:e.name})},e.id)}))})]})}}]),n}(c.Component),y=n(19),w=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={filter:"",name:""},e.handlerChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(y.a)({},a,c))},e}return Object(v.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:this.state.name,onChange:this.handlerChange})]})})}}]),n}(c.Component),k=n(35),_=n.p+"static/media/cat-cry.1752189b.jpg",A=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={cast:[]},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,x.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US"));case 3:n=e.sent,this.setState({cast:n.data.cast});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.cast;return console.log(e),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{children:e.map((function(t){var n,c=t.id,r=t.name,i=t.character,s=t.profile_path;return Object(a.jsxs)("li",{children:[Object(a.jsx)("img",{src:null!==(n="https://image.tmdb.org/t/p/w300".concat(s))&&void 0!==n?n:_,alt:e.name,width:"150"}),Object(a.jsxs)("p",{children:["Actor name: ",r]}),Object(a.jsxs)("p",{children:["Character: ",i]})]},c)}))})})}}]),n}(c.Component);A.defaultProps={defaultImg:_};var I=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={reviews:[]},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,x.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US&page=1"));case 3:n=e.sent,this.setState({reviews:n.data.results});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.reviews;return Object(a.jsx)(a.Fragment,{children:e.length>0?Object(a.jsx)("ul",{children:e.map((function(e){var t=e.author,n=e.content,c=e.id;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("h2",{children:["Author: ",t]}),Object(a.jsx)("p",{children:n})]},c)}))}):Object(a.jsx)("p",{children:"We don't have any reviews for this movie"})})}}]),n}(c.Component),C=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={poster_path:null,title:null,name:null,vote_average:null,overview:null,genres:[],id:null},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,x.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US"));case 3:n=e.sent,this.setState(Object(k.a)({},n.data));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.state,n=t.poster_path,c=t.title,r=t.name,i=t.vote_average,s=t.overview,j=t.genres;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",children:"Go back"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:c||r}),Object(a.jsx)("img",{src:null!==(e="https://image.tmdb.org/t/p/w300".concat(n))&&void 0!==e?e:this.props.defaultImg,alt:c||r,width:"300"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"User Score:"}),Object(a.jsxs)("p",{children:[10*i,"%"]}),Object(a.jsx)("h3",{children:"Overview"}),Object(a.jsx)("p",{children:s}),Object(a.jsx)("h3",{children:"Genres"}),Object(a.jsx)("ul",{children:j.map((function(e){var t=e.id,n=e.name;return Object(a.jsx)("li",{children:n},t)}))})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Additional information"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(o.c,{to:"".concat(this.props.match.url,"/cast "),children:"Cast"})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(o.c,{to:"".concat(this.props.match.url,"/reviews "),children:"Reviews"})," "]})]}),Object(a.jsx)(l.a,{path:"/movies/:movieId/cast",component:A}),Object(a.jsx)(l.a,{path:"/movies/:movieId/reviews",component:I})]})]})}}]),n}(c.Component);C.defaultProps={defaultImg:_};var L=function(){return Object(a.jsx)("h1",{children:"404 - page not found"})},S=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("ul",{className:h.a.List,children:[Object(a.jsx)("li",{className:h.a.Item,children:Object(a.jsx)(o.c,{exact:!0,className:h.a.LinkBase,activeClassName:h.a.LinkActive,to:"/",children:"Home"})}),Object(a.jsx)("li",{className:h.a.Item,children:Object(a.jsx)(o.c,{className:h.a.LinkBase,activeClassName:h.a.LinkActive,to:"/movies",children:"Authors"})})]}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:g}),Object(a.jsx)(l.a,{path:"/movies/:movieId",component:C}),Object(a.jsx)(l.a,{path:"/movies",component:w}),Object(a.jsx)(l.a,{component:L})]})]})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(S,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.90352059.chunk.js.map