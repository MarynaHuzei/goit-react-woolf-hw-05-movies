"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{573:function(n,t,e){e.d(t,{Bt:function(){return d},Ml:function(){return p},Tg:function(){return i},Y5:function(){return s},wL:function(){return f}});var r=e(861),a=e(757),c=e.n(a),o=e(340);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="992758a4802a699e8df27d4d6efc34fb",i=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},146:function(n,t,e){e.d(t,{e:function(){return g}});var r,a,c,o=e(689),u=e(766),i=e(924),p=e(612),s=e(87),f=i.ZP.ul(r||(r=(0,u.Z)(["\n  list-style-type: none;\n  margin-top: 25px;\n  margin-bottom: 0;\n  margin-left: 0px;\n  margin-right: 580px;\n  padding: 10px;\n  color: black;\n  width: 400px;\n\n  box-shadow: 5px 5px 10px 0 #babecc, -5px -5px 10px 0 #fff;\n  background: #ebecf0;\n  border-radius: 10px;\n\n  &:hover {\n    box-shadow: inset 5px 5px 10px 0 #babecc, inset -5px -5px 10px 0 #fff;\n    background: #ebecf0;\n  }\n"]))),d=i.ZP.li(a||(a=(0,u.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n  color: #616472;\n  padding-left: 20px;\n\n  &:hover {\n    color: #dd1fb7;\n  }\n"]))),x=(0,i.ZP)(s.OL)(c||(c=(0,u.Z)(["\n  color: inherit;\n  text-decoration: none;\n\n  &:hover::after,\n  &:focus::after {\n    content: '';\n    background-image: ",";\n\n    background-size: cover;\n    width: 400px;\n    height: 560px;\n    display: block;\n    border-radius: 4px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: 26%;\n    left: 50%;\n    z-index: 1;\n  }\n"])),(function(n){return n.cover?"url('https://image.tmdb.org/t/p/w500/".concat(n.cover,"')"):"url(".concat(p,")")})),l=e(184),g=function(n){var t=n.films,e=(0,o.TH)();return(0,l.jsx)(f,{children:t.map((function(n){return(0,l.jsx)(d,{children:(0,l.jsx)(x,{to:"/movies/".concat(n.id),state:{from:e},cover:n.poster_path,children:n.title})},n.id)}))})}},485:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a=e(861),c=e(439),o=e(757),u=e.n(o),i=e(573),p=e(791),s=e(454),f=e(146),d=e(766),x=e(924).ZP.h1(r||(r=(0,d.Z)(["\n  font-size: 22px;\n  font-weight: 500;\n  color: #6578c2;\n  text-align: left;\n  padding-top: 8px;\n  padding-bottom: 10px;\n  padding-left: 28px;\n  padding-right: 38px;\n  width: 355px;\n  height: 25px;\n  box-shadow: 5px 5px 10px 0 #babecc, -5px -5px 10px 0 #fff;\n  background: #ebecf0;\n  border-radius: 50px;\n"]))),l=e(184),g=function(){var n=(0,p.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],o=(0,p.useState)(!0),d=(0,c.Z)(o,2),g=d[0],h=d[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,a.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Tg)();case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:return n.prev=10,h(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,l.jsxs)("main",{children:[(0,l.jsx)(x,{children:"Trending today"}),(0,l.jsx)(f.e,{films:e}),g&&(0,l.jsx)(s.a,{})]})}},612:function(n,t,e){n.exports=e.p+"static/media/noImage.910c93a421e63de36d86.png"}}]);
//# sourceMappingURL=485.c27c3d79.chunk.js.map