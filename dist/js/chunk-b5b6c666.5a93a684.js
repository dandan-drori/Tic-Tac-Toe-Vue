(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5b6c666"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),s=n("577e"),a=n("5899"),o="["+a+"]",c=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),l=function(t){return function(e){var n=s(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(t,e,n){var r=n("861d"),s=n("d2bb");t.exports=function(t,e,n){var a,o;return s&&"function"==typeof(a=e.constructor)&&a!==n&&r(o=a.prototype)&&o!==n.prototype&&s(t,o),t}},"7d36":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"game"},[n("Score"),n("Board"),t.winner?n("Modal"):t._e(),n("Back")],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"board"},t._l(t.board,(function(e,r){return n("Cell",{key:r,attrs:{idx:r,shape:e},on:{onMarkCell:t.markCell}})})),1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"cell",on:{click:t.onMarkCell}},[n("Shape",{attrs:{shape:t.shape}})],1)},i=[],l=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"shape"},["X"===t.shape?n("section",{staticClass:"X"},[n("div"),n("div")]):t._e(),"O"===t.shape?n("section",{staticClass:"O"}):t._e()])}),u=[],p={props:{shape:String}},f=p,h=n("2877"),d=Object(h["a"])(f,l,u,!1,null,null,null),m=d.exports,_={components:{Shape:m},props:{idx:Number,shape:String},computed:{currShape:function(){return this.$store.getters.turn}},methods:{onMarkCell:function(){this.$emit("onMarkCell",{idx:this.idx,shape:this.currShape})}}},b=_,v=Object(h["a"])(b,c,i,!1,null,null,null),C=v.exports,E={components:{Cell:C},computed:{board:function(){return this.$store.getters.board},winner:function(){return this.$store.getters.winner}},methods:{markCell:function(t){var e=t.idx,n=t.shape;this.board[e]||this.winner||(this.$store.commit("markCell",{idx:e,shape:n}),this.$store.commit("checkGameOver"),this.$store.commit("switchTurn"))}}},g=E,k=Object(h["a"])(g,a,o,!1,null,null,null),w=k.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"score"},[n("section",{staticClass:"X"},[n("Shape",{attrs:{shape:"X"}}),n("span",[t._v(":")]),n("span",[t._v(t._s(t.score.X))])],1),n("section",{staticClass:"O"},[n("Shape",{attrs:{shape:"O"}}),n("span",[t._v(":")]),n("span",[t._v(t._s(t.score.O))])],1)])},N=[],x={components:{Shape:m},computed:{score:function(){return this.$store.getters.score}}},$=x,S=Object(h["a"])($,I,N,!1,null,null,null),O=S.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"modal-container"},[n("section",{staticClass:"modal"},["tie"===t.winner?n("h2",[t._v("It's a tie!")]):n("h2",[t._v(t._s(t.winner)+" Wins!")]),n("button",{on:{click:t.restart}},[t._v("Restart")])])])},M=[],y={computed:{winner:function(){return this.$store.getters.winner}},methods:{restart:function(){this.$store.commit("clearBoard")}}},T=y,j=Object(h["a"])(T,A,M,!1,null,null,null),X=j.exports,F=n("d76a"),B={components:{Board:w,Score:O,Modal:X,Back:F["a"]},computed:{winner:function(){return this.$store.getters.winner}}},R=B,G=Object(h["a"])(R,r,s,!1,null,null,null);e["default"]=G.exports},a9e3:function(t,e,n){"use strict";var r=n("83ab"),s=n("da84"),a=n("94ca"),o=n("6eeb"),c=n("5135"),i=n("c6b6"),l=n("7156"),u=n("d9b5"),p=n("c04e"),f=n("d039"),h=n("7c73"),d=n("241c").f,m=n("06cf").f,_=n("9bf2").f,b=n("58a8").trim,v="Number",C=s[v],E=C.prototype,g=i(h(E))==v,k=function(t){if(u(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,s,a,o,c,i,l=p(t,"number");if("string"==typeof l&&l.length>2)if(l=b(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+l}for(a=l.slice(2),o=a.length,c=0;c<o;c++)if(i=a.charCodeAt(c),i<48||i>s)return NaN;return parseInt(a,r)}return+l};if(a(v,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var w,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(g?f((function(){E.valueOf.call(n)})):i(n)!=v)?l(new C(k(e)),n,I):k(e)},N=r?d(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;N.length>x;x++)c(C,w=N[x])&&!c(I,w)&&_(I,w,m(C,w));I.prototype=E,E.constructor=I,o(s,v,I)}},d76a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"back"},[n("router-link",{attrs:{to:"/"}},[t._v(" ← ")])],1)},s=[],a={},o=a,c=n("2877"),i=Object(c["a"])(o,r,s,!1,null,null,null);e["a"]=i.exports}}]);
//# sourceMappingURL=chunk-b5b6c666.5a93a684.js.map