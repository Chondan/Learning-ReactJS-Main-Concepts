(this["webpackJsonplearn-react-js"]=this["webpackJsonplearn-react-js"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(4),l=a(3),o=a(0),u=a.n(o),s=a(7),i=a.n(s),h=a(9),m=a(8),d=a(5),p=(a(15),[{category:"Sporting Goods",price:"$49.99",stocked:!0,name:"Football"},{category:"Sporting Goods",price:"$9.99",stocked:!0,name:"Baseball"},{category:"Sporting Goods",price:"$29.99",stocked:!1,name:"Basketball"},{category:"Electronics",price:"$99.99",stocked:!0,name:"iPod Touch"},{category:"Electronics",price:"$399.99",stocked:!1,name:"iPhone 5"},{category:"Electronics",price:"$199.99",stocked:!0,name:"Nexus 7"}]),b=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={searchValue:"",filterValue:!1},c.handleChange=c.handleChange.bind(Object(d.a)(c)),c}return Object(c.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;n="checkbox"===t.type?e.target.checked:n,this.setState(Object(m.a)({},a,n))}},{key:"render",value:function(){return u.a.createElement("div",{className:"filterable-product-table"},u.a.createElement(E,{onChange:this.handleChange,searchValue:this.state.searchValue,checkboxValue:this.state.filterValue}),u.a.createElement(k,{products:p,searchValue:this.state.searchValue,checkboxValue:this.state.filterValue}))}}]),a}(u.a.Component);function E(e){return u.a.createElement("div",{className:"search-bar"},u.a.createElement("input",{name:"searchValue",type:"text",placeholder:"Search...",onChange:e.onChange}),u.a.createElement("div",{className:"checkbox-elem"},u.a.createElement("input",{name:"filterValue",type:"checkbox",checked:e.checkboxValue,onChange:e.onChange}),u.a.createElement("span",null,"Only show products in stock")))}function k(e){var t=e.searchValue,a=e.checkboxValue,n=e.products.filter((function(e){return a?-1!==e.name.toLowerCase().search(t.toLowerCase())&&e.stocked:-1!==e.name.toLowerCase().search(t.toLowerCase())})),c=Object(h.a)(new Set(n.map((function(e){return e.category})))),r=[];return c.forEach((function(e){r.push(u.a.createElement(f,{categoryName:e,key:e})),n.filter((function(t){return t.category===e})).forEach((function(t){r.push(u.a.createElement(g,{name:t.name,price:t.price,stocked:t.stocked,key:t.name+t.price+t.stocked+e}))}))})),u.a.createElement("div",{className:"product-table"},u.a.createElement("table",null,u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Name"),u.a.createElement("th",null,"Price"))),u.a.createElement("tbody",null,r)))}function f(e){return u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"2"},e.categoryName))}function g(e){return u.a.createElement("tr",{className:"stocked-"+e.stocked.toString()},u.a.createElement("td",null,e.name),u.a.createElement("td",null,e.price))}var y=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("h1",{className:"learning-topic"},"Thinking In React"),u.a.createElement(b,null))}}]),a}(u.a.Component),v=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(y,null))}}]),a}(u.a.Component);i.a.render(u.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ad5245e7.chunk.js.map