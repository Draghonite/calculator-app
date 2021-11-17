(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(4),r=n.n(l),u=(n(11),n(2)),s=(n(12),n(5)),i=n(6),o=function(){function e(){var t=this;Object(s.a)(this,e),this.updatePreviousDisplay=function(){var e=t.previousValue,n=e.value,a=e.operator,c=parseFloat(n);isNaN(c)?t.previousValue.display=null:t.previousValue.display="".concat(c.toLocaleString()," ").concat(a)},this.updateCurrentDisplay=function(){var e=parseFloat(t.currentValue.value);isNaN(e)?t.currentValue.display=null:t.currentValue.display=e.toLocaleString()},this.append=function(e){if("."!==e||!/\./.test(t.currentValue.value)){var n="".concat(t.currentValue.value||"").concat(e.toString());t.currentValue.value=n,t.updateCurrentDisplay()}},this.setOperator=function(e){t.previousValue.value?!t.currentValue.value&&/^[+\-x/]$/.test(e)?(t.previousValue.operator=e,t.updatePreviousDisplay()):t.calculate():(t.previousValue.value=t.currentValue.value,t.previousValue.operator=e,t.currentValue.value=null,t.updatePreviousDisplay(),t.updateCurrentDisplay())},this.remove=function(){t.currentValue.value&&(t.currentValue.value=t.currentValue.value.toString().slice(0,-1),t.updateCurrentDisplay())},this.clear=function(){t.previousValue={value:null,operator:null,display:null},t.currentValue={value:null,display:null}},this.calculate=function(){var e=null,n=parseFloat(t.previousValue.value),a=parseFloat(t.currentValue.value);switch(t.previousValue.operator){case"+":e=n+a;break;case"-":e=n-a;break;case"x":e=n*a;break;case"/":e=n/a;break;default:return}t.clear(),t.currentValue.value=e.toString(),t.updatePreviousDisplay(),t.updateCurrentDisplay()},this.previousValue={value:null,operator:null,display:null},this.currentValue={value:null,display:null}}return Object(i.a)(e,[{key:"previousDisplay",get:function(){return this.previousValue.display}},{key:"currentDisplay",get:function(){return this.currentValue.display}}],[{key:"getInstance",value:function(){return null==e.myInstance&&(e.myInstance=new e),this.myInstance}}]),e}();o.myInstance=null;var p=o,d=n(0);var b=function(){var e,t,n,c,l=(null===(e=window)||void 0===e?void 0:e.matchMedia)&&(null===(t=window)||void 0===t?void 0:t.matchMedia("(prefers-color-scheme: dark)").matches),r=((null===(n=window)||void 0===n?void 0:n.matchMedia)&&(null===(c=window)||void 0===c||c.matchMedia("(prefers-color-scheme: light)").matches),Object(a.useState)()),s=Object(u.a)(r,2),i=s[0],o=s[1],b=Object(a.useState)(399981),h=Object(u.a)(b,2),v=h[0],j=h[1],m=Object(a.useState)(l?3:1),f=Object(u.a)(m,2),y=f[0],O=f[1],x=p.getInstance();Object(a.useEffect)((function(){var e=function(e){e.matches&&O(3)},t=function(e){e.matches&&O(1)};return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",t),function(){window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e),window.matchMedia("(prefers-color-scheme: light)").removeEventListener("change",t)}}));var N=function(e){if(/^[0-9.]$/.test(e))x.append(e);else if(/^[+\-x/=]$/.test(e))x.setOperator(e);else switch(e){case"delete":x.remove();break;case"reset":x.clear();break;default:return}o(x.previousDisplay),j(x.currentDisplay)},k=function(e){O(+e)};return Object(d.jsx)("div",{className:"app theme".concat(y),children:Object(d.jsxs)("div",{className:"calculator-container",children:[Object(d.jsxs)("header",{className:"calculator-header",children:[Object(d.jsx)("h1",{className:"app-name",children:"calc"}),Object(d.jsxs)("div",{className:"theme-chooser",children:[Object(d.jsx)("span",{className:"theme-chooser-label",children:"THEME"}),Object(d.jsxs)("div",{className:"theme-controls",children:[Object(d.jsxs)("label",{id:"theme-options",className:"theme-options",children:[Object(d.jsx)("span",{className:"theme-label",onClick:function(){return k(1)},children:"1"}),Object(d.jsx)("span",{className:"theme-label",onClick:function(){return k(2)},children:"2"}),Object(d.jsx)("span",{className:"theme-label",onClick:function(){return k(3)},children:"3"})]}),Object(d.jsx)("input",{type:"range",min:"1","aria-valuemin":"1",max:"3","aria-valuemax":"3",value:y,"aria-valuenow":y,onChange:function(e){return k(e.target.value)},"aria-label":"Theme Options"})]})]})]}),Object(d.jsxs)("div",{className:"calculator-results",role:"main","aria-label":"Calculator Screen",children:[Object(d.jsx)("span",{className:"previous-value",children:i}),Object(d.jsx)("span",{className:"current-value",children:v})]}),Object(d.jsxs)("div",{className:"calculator-buttons",role:"main","aria-label":"Calculator Buttons",children:[Object(d.jsx)("button",{type:"button",className:"seven",onClick:function(){return N(7)},children:"7"}),Object(d.jsx)("button",{type:"button",className:"eight",onClick:function(){return N(8)},children:"8"}),Object(d.jsx)("button",{type:"button",className:"nine",onClick:function(){return N(9)},children:"9"}),Object(d.jsx)("button",{type:"button",className:"delete",onClick:function(){return N("delete")},children:"DEL"}),Object(d.jsx)("button",{type:"button",className:"four",onClick:function(){return N(4)},children:"4"}),Object(d.jsx)("button",{type:"button",className:"five",onClick:function(){return N(5)},children:"5"}),Object(d.jsx)("button",{type:"button",className:"six",onClick:function(){return N(6)},children:"6"}),Object(d.jsx)("button",{type:"button",className:"plus",onClick:function(){return N("+")},children:"+"}),Object(d.jsx)("button",{type:"button",className:"one",onClick:function(){return N(1)},children:"1"}),Object(d.jsx)("button",{type:"button",className:"two",onClick:function(){return N(2)},children:"2"}),Object(d.jsx)("button",{type:"button",className:"three",onClick:function(){return N(3)},children:"3"}),Object(d.jsx)("button",{type:"button",className:"minus",onClick:function(){return N("-")},children:"-"}),Object(d.jsx)("button",{type:"button",className:"period",onClick:function(){return N(".")},children:"."}),Object(d.jsx)("button",{type:"button",className:"zero",onClick:function(){return N(0)},children:"0"}),Object(d.jsx)("button",{type:"button",className:"divide",onClick:function(){return N("/")},children:"/"}),Object(d.jsx)("button",{type:"button",className:"multiply",onClick:function(){return N("x")},children:"x"}),Object(d.jsx)("button",{type:"button",className:"reset",onClick:function(){return N("reset")},children:"RESET"}),Object(d.jsx)("button",{type:"button",className:"equals",onClick:function(){return N("=")},children:"="})]})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),l(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),h()}},[[14,1,2]]]);
//# sourceMappingURL=main.d1c7fe5b.chunk.js.map