"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[546],{573:function(n,t,e){e.d(t,{Bt:function(){return l},Ml:function(){return o},Tg:function(){return s},Y5:function(){return p},wL:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="992758a4802a699e8df27d4d6efc34fb",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},546:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c,u=e(861),i=e(439),s=e(757),o=e.n(s),p=e(791),f=e(689),l=e(573),d=e(454),h=e(612),v=e(766),g=e(924),m=g.ZP.ul(r||(r=(0,v.Z)(["\n  list-style-type: none;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  margin-bottom: 20px;\n  gap: 40px;\n"]))),x=g.ZP.p(a||(a=(0,v.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),w=g.ZP.h2(c||(c=(0,v.Z)(["\n  color: #7b7c81;\n  padding-left: 40px;\n"]))),Z=e(184),k=function(){var n=(0,f.UO)().movieId,t=(0,p.useState)([]),e=(0,i.Z)(t,2),r=e[0],a=e[1],c=(0,p.useState)(!0),s=(0,i.Z)(c,2),v=s[0],g=s[1];return(0,p.useEffect)((function(){var t=function(){var t=(0,u.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g(!0),t.next=4,(0,l.wL)(n);case 4:e=t.sent,a(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:return t.prev=11,g(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,Z.jsxs)("div",{children:[v&&(0,Z.jsx)(d.a,{}),(0,Z.jsx)(w,{children:"Movie Cast"}),(0,Z.jsx)(m,{children:r.map((function(n){var t=n.id,e=n.profile_path,r=n.original_name,a=n.name,c=n.character;return(0,Z.jsxs)("li",{children:[(0,Z.jsx)("img",{width:"200px",height:"300px",src:e?"https://image.tmdb.org/t/p/w500".concat(e):"".concat(h),alt:r}),(0,Z.jsx)(x,{children:a}),(0,Z.jsxs)(x,{children:["Character: ",c]})]},t)}))})]})}},612:function(n,t,e){n.exports=e.p+"static/media/noImage.910c93a421e63de36d86.png"}}]);
//# sourceMappingURL=546.bc3c03c2.chunk.js.map