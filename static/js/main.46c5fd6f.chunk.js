(this["webpackJsonpconundrum-calculator"]=this["webpackJsonpconundrum-calculator"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),u=n.n(o),i=(n(15),n(16),n(1)),s=n.n(i),c=n(4),l=n(5),m=n(6),b=n(8),d=n(7),f=n(9),p=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(b.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={readout:"",operation:"",numberOne:"",numberTwo:""},n.clear=function(){n.setState({readout:"",operation:"",numberOne:"",numberTwo:""})},n.setOperatorAfterEquals=function(e){n.setState({numberOne:n.state.readout,numberTwo:"",operation:e})},n.buildOperation=function(e){""!==n.state.numberOne&&""!==n.state.operation&&""!==n.state.readout?n.equals().then(n.setOperatorAfterEquals(e)):""===n.state.numberOne&&""!==n.state.operation&&""!==n.state.readout?n.setOperatorAfterEquals(e):n.setState({operation:e})},n.operation=function(e,t){var a;switch(e=Number(e),t=Number(t),n.state.operation){case"+":a=e+t;break;case"-":a=e-t;break;case"/":a=e/t;break;default:a="something has gone wrong"}return a},n.equals=function(){if(""!==n.state.numberOne&&""!==n.state.operation&&""!==n.state.readout){var e=n.operation(n.state.numberOne,n.state.numberTwo);n.setState({readout:e,numberOne:""})}else if(""===n.state.numberOne&&""!==n.state.operation&&""!==n.state.readout){var t=n.operation(n.state.readout,n.state.numberTwo);n.setState({readout:t})}},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"buildSum",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var n=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===this.state.operation||""!==this.state.numberTwo){e.next=6;break}return e.next=3,new Promise((function(e){return n.setState({readout:t},e)}));case 3:this.setState({numberTwo:this.state.readout}),e.next=23;break;case 6:if(""===this.state.operation||""!==this.state.numberOne){e.next=13;break}return this.clear(),e.next=10,new Promise((function(e){return n.setState({readout:t},e)}));case 10:this.setState({numberOne:this.state.readout}),e.next=23;break;case 13:if(""===this.state.operation){e.next=19;break}return e.next=16,new Promise((function(e){return n.setState({readout:n.state.readout.toString()+t},e)}));case 16:this.setState({numberTwo:this.state.readout}),e.next=23;break;case 19:if(""!==this.state.operation){e.next=23;break}return e.next=22,new Promise((function(e){return n.setState({readout:n.state.readout.toString()+t},e)}));case 22:this.setState({numberOne:this.state.readout});case 23:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"calculator"},r.a.createElement("div",{className:"display"},this.state.readout),r.a.createElement("div",{className:"button clear",onClick:this.clear},"clear"),r.a.createElement("div",{className:"button  operator divide",onClick:function(){return e.buildOperation("/")}},"/"),r.a.createElement("div",{className:"button number seven",onClick:function(){return e.buildSum(7)}},"7"),r.a.createElement("div",{className:"button number eight",onClick:function(){return e.buildSum(8)}},"8"),r.a.createElement("div",{className:"button number nine",onClick:function(){return e.buildSum(9)}},"9"),r.a.createElement("div",{className:"button operator minus",onClick:function(){return e.buildOperation("-")}},"-"),r.a.createElement("div",{className:"button number four",onClick:function(){return e.buildSum(4)}},"4"),r.a.createElement("div",{className:"button number five",onClick:function(){return e.buildSum(5)}},"5"),r.a.createElement("div",{className:"button number six",onClick:function(){return e.buildSum(6)}},"6"),r.a.createElement("div",{className:"button operator plus",onClick:function(){return e.buildOperation("+")}},"+"),r.a.createElement("div",{className:"button number one",onClick:function(){return e.buildSum(1)}},"1"),r.a.createElement("div",{className:"button number two",onClick:function(){return e.buildSum(2)}},"2"),r.a.createElement("div",{className:"button number three",onClick:function(){return e.buildSum(3)}},"3"),r.a.createElement("div",{className:"button operator equals",onClick:this.equals},"="))}}]),t}(a.Component);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.46c5fd6f.chunk.js.map