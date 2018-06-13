webpackJsonp([1],{"+W2U":
/*!******************************************!*\
  !*** ./src/components/Header/Header.tsx ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(/*! tslib */"TToO"),l=a.__importDefault(r(/*! react */"GiK3")),n=a.__importDefault(r(/*! ./Header.css */"iXIm"));t.default=(()=>l.default.createElement("header",{className:n.default.Header},l.default.createElement("h1",null,"Exmo Api App")))},0:
/*!********************************************!*\
  !*** multi babel-polyfill ./src/index.tsx ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){r(/*! babel-polyfill */"j1ja"),e.exports=r(/*! ./src/index.tsx */"qMEF")},"0PLO":
/*!****************************************************!*\
  !*** ./src/components/OrderButton/OrderButton.tsx ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(/*! tslib */"TToO"),l=a.__importDefault(r(/*! react */"GiK3")),n=a.__importDefault(r(/*! ./OrderButton.css */"F+6W"));t.default=(({onFetchOrders:e})=>l.default.createElement("button",{className:n.default.OrderBtn,onClick:e},"Взять ордеры"))},"72sv":
/*!**************************************************!*\
  !*** ./src/components/OrderTable/OrderTable.css ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports={TableWrapper:"OrderTable__TableWrapper__3TWyE",tableWrapper:"OrderTable__TableWrapper__3TWyE",Table:"OrderTable__Table__1TVH4",table:"OrderTable__Table__1TVH4"}},"9Ktt":
/*!*************************************************!*\
  !*** ./src/components/OrdersList/OrderList.css ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports={List:"OrderList__List__17BaU",list:"OrderList__List__17BaU"}},BHWY:
/*!**************************************************!*\
  !*** ./src/components/OrdersList/OrdersList.tsx ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(/*! tslib */"TToO"),l=a.__importDefault(r(/*! react */"GiK3")),n=a.__importDefault(r(/*! ./OrderList.css */"9Ktt")),o=a.__importDefault(r(/*! ../OrderItem/OrderItem */"uIdH"));t.default=(({orders:e,changedOrders:t,onOpenPopup:r})=>l.default.createElement("ul",{className:n.default.List},Object.keys(e).slice(0,10).map((a,n)=>l.default.createElement(o.default,{key:a,orderName:a,order:e[a],changedPrice:null!==t?t[n]:"",onOpenPopup:r}))))},EtHn:
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){},"F+6W":
/*!****************************************************!*\
  !*** ./src/components/OrderButton/OrderButton.css ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports={OrderBtn:"OrderButton__OrderBtn__3phPh",orderBtn:"OrderButton__OrderBtn__3phPh"}},FOiH:
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(/*! tslib */"TToO"),l=a.__importDefault(r(/*! react */"GiK3")),n=a.__importDefault(r(/*! ./App.css */"VTUT")),o=a.__importDefault(r(/*! ./Header/Header */"+W2U")),u=a.__importDefault(r(/*! ./OrdersWrapper/OrdersWrapper */"Y4dx")),d=a.__importDefault(r(/*! ./OrderButton/OrderButton */"0PLO")),_=a.__importDefault(r(/*! ./Popup/Popup */"uwQz")),s=r(/*! ../api */"rW+9"),i=r(/*! ../helpers */"XtEA");t.default=class extends l.default.Component{constructor(){super(...arguments),this.state={orders:null,changedOrders:[],currentOrder:null,orderBook:null,isFetching:!1,isOpen:!1,error:""},this.getOrdersFromStorage=(()=>{let e=localStorage.getItem("orders");return null!==e?e=JSON.parse(e):null}),this.handleOpenPopup=((e,t,r)=>{this.setState({currentOrder:null,orderBook:null}),this.handleOrderBook(e),this.setState({isOpen:!0,currentOrder:{[e]:r,className:t}})}),this.handleClosePopup=(()=>{this.setState({isOpen:!1})}),this.handleOrderBook=(e=>a.__awaiter(this,void 0,void 0,function*(){const t=yield s.fetchOrderBook(e);i.handleErrors(t)&&this.setState({error:"Возникли неполадки на стороне сервера:("}),this.setState({orderBook:{[e]:t[e]}})})),this.handleOrders=(()=>a.__awaiter(this,void 0,void 0,function*(){const e=this.getOrdersFromStorage();this.setState({isFetching:!0});const t=yield s.fetchOrders();if(i.handleErrors(t))this.setState({isFetching:!1,error:"Возникли неполадки на стороне сервера:("});else{localStorage.setItem("orders",JSON.stringify(t));const r=e?this.compareOrders(t,e):null;this.setState({orders:t,changedOrders:r,isFetching:!1})}})),this.compareOrders=((e,t)=>{const r=Object.keys(e).slice(0,10).map(t=>e[t]),a=Object.keys(t).slice(0,10).map(t=>e[t]);return r.map((e,t)=>{const r=e.buy_price,l=a[t].buy_price;return r>l?"up":r<l?"down":""})})}componentDidMount(){const e=this.getOrdersFromStorage();null!==e&&this.setState({orders:e})}render(){const{orders:e,changedOrders:t,currentOrder:r,orderBook:a,isFetching:s,isOpen:i,error:p}=this.state;return l.default.createElement(l.default.Fragment,null,l.default.createElement(o.default,null),l.default.createElement("div",{className:n.default.Container},l.default.createElement(u.default,{orders:e,changedOrders:t,isFetching:s,onOpenPopup:this.handleOpenPopup,error:p}),l.default.createElement(d.default,{onFetchOrders:this.handleOrders})),l.default.createElement(_.default,{onClosePopup:this.handleClosePopup,isOpen:i,currentOrder:r,orderBook:a&&a,error:p}))}}},K9GG:
/*!********************************************!*\
  !*** ./src/components/Spinner/Spinner.tsx ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(/*! tslib */"TToO"),l=a.__importDefault(r(/*! react */"GiK3")),n=a.__importDefault(r(/*! ./Spinner.css */"ZAiX"));t.default=(()=>l.default.createElement("div",{className:`${n.default.Spinner} ${n.default.Skeleton}`}))},VTUT:
/*!********************************!*\
  !*** ./src/components/App.css ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports={Container:"App__Container__2dWDC",container:"App__Container__2dWDC"}},XtEA:
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleErrors=function(e){return"string"==typeof e}},Y4dx:
/*!********************************************************!*\
  !*** ./src/components/OrdersWrapper/OrdersWrapper.tsx ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(/*! tslib */"TToO"),l=a.__importDefault(r(/*! react */"GiK3")),n=a.__importDefault(r(/*! ./OrdersWrapper.css */"ktrx")),o=a.__importDefault(r(/*! ../OrdersList/OrdersList */"BHWY")),u=a.__importDefault(r(/*! ../Spinner/Spinner */"K9GG"));t.default=(({orders:e,changedOrders:t,isFetching:r,onOpenPopup:a,error:d})=>l.default.createElement("div",{className:n.default.OrdersWrapper},l.default.createElement("h2",{className:n.default.TraiderHeader},"Сам себе трейдер"),l.default.createElement("h3",{className:n.default.CurrencyHeader},"Валютные пары"),d?l.default.createElement("h3",null,d):null,r&&l.default.createElement(u.default,null),!r&&e&&l.default.createElement(o.default,{orders:e,changedOrders:t,onOpenPopup:a})))},ZAiX:
/*!********************************************!*\
  !*** ./src/components/Spinner/Spinner.css ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports={Spinner:"Spinner__Spinner__7IqKl",spinner:"Spinner__Spinner__7IqKl",Skeleton:"Spinner__Skeleton__28Zb0",skeleton:"Spinner__Skeleton__28Zb0","cp-skeleton-animate":"Spinner__cp-skeleton-animate__2hj7N",cpSkeletonAnimate:"Spinner__cp-skeleton-animate__2hj7N"}},gVXt:
/*!************************************************!*\
  !*** ./src/components/OrderItem/OrderItem.css ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports={OrderItem:"OrderItem__OrderItem__1VTT0",orderItem:"OrderItem__OrderItem__1VTT0",Up:"OrderItem__Up__2HwGP",up:"OrderItem__Up__2HwGP",Down:"OrderItem__Down__39fZ4",down:"OrderItem__Down__39fZ4"}},iXIm:
/*!******************************************!*\
  !*** ./src/components/Header/Header.css ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports={Header:"Header__Header__2A0yN",header:"Header__Header__2A0yN"}},ktrx:
/*!********************************************************!*\
  !*** ./src/components/OrdersWrapper/OrdersWrapper.css ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports={OrdersWrapper:"OrdersWrapper__OrdersWrapper__S3pQa",ordersWrapper:"OrdersWrapper__OrdersWrapper__S3pQa",TraiderHeader:"OrdersWrapper__TraiderHeader__3v1UJ",traiderHeader:"OrdersWrapper__TraiderHeader__3v1UJ",CurrencyHeader:"OrdersWrapper__CurrencyHeader__5RPwj",currencyHeader:"OrdersWrapper__CurrencyHeader__5RPwj"}},qCYo:
/*!**************************************************!*\
  !*** ./src/components/OrderTable/OrderTable.tsx ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(/*! tslib */"TToO"),l=a.__importDefault(r(/*! react */"GiK3")),n=a.__importDefault(r(/*! ./OrderTable.css */"72sv"));t.default=(({orderBook:e})=>{return l.default.createElement("div",{className:n.default.TableWrapper},l.default.createElement("table",{className:n.default.Table},l.default.createElement("thead",null,l.default.createElement("tr",null,l.default.createElement("th",{scope:"col"},"Цена"),l.default.createElement("th",{scope:"col"},"Количество"),l.default.createElement("th",{scope:"col"},"Сумма"))),l.default.createElement("tbody",null,(()=>{let t,r,a;return e.map((e,n)=>(t=e[0],r=e[1],a=e[2],l.default.createElement("tr",{key:n+t},l.default.createElement("td",null,t),l.default.createElement("td",null,r),l.default.createElement("td",null,a))))})())))})},qMEF:
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(/*! tslib */"TToO"),l=a.__importStar(r(/*! react */"GiK3")),n=a.__importStar(r(/*! react-dom */"O27J")),o=r(/*! react-hot-loader */"rGbO");r(/*! normalize.css/normalize.css */"uMhA"),r(/*! ./styles/styles.css */"EtHn");const u=a.__importDefault(r(/*! ./components/App */"FOiH")),d=document.getElementById("root"),_=e=>{n.render(l.createElement(o.AppContainer,null,l.createElement(e,null)),d)};_(u.default)},"rW+9":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(/*! tslib */"TToO");t.fetchOrders=(()=>a.__awaiter(this,void 0,void 0,function*(){try{return yield(yield fetch("https://api.exmo.com/v1/ticker/")).json()}catch(e){return e.message}})),t.fetchOrderBook=(e=>a.__awaiter(this,void 0,void 0,function*(){const t=`https://api.exmo.com/v1/order_book/?limit=50&pair=${e}`;try{return yield(yield fetch(t)).json()}catch(e){return e.message}}))},tnkw:
/*!****************************************!*\
  !*** ./src/components/Popup/Popup.css ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports={Popup:"Popup__Popup__3Gh_H",popup:"Popup__Popup__3Gh_H",Error:"Popup__Error__18ufz",error:"Popup__Error__18ufz",SpinnerCenter:"Popup__SpinnerCenter__1hyTL",spinnerCenter:"Popup__SpinnerCenter__1hyTL",orderInfo:"Popup__orderInfo__3Njvv",orderVolumes:"Popup__orderVolumes__3Is6z",orderVolumesLeft:"Popup__orderVolumesLeft__3Fqg8",orderVolumesRight:"Popup__orderVolumesRight__2uUQf",TableContainer:"Popup__TableContainer__2tytr",tableContainer:"Popup__TableContainer__2tytr",TableItem:"Popup__TableItem__1qxWF",tableItem:"Popup__TableItem__1qxWF",BuyPrice:"Popup__BuyPrice__2qq9M",buyPrice:"Popup__BuyPrice__2qq9M",Up:"Popup__Up__32W8s",up:"Popup__Up__32W8s",Down:"Popup__Down__RUXHi",down:"Popup__Down__RUXHi"}},uIdH:
/*!************************************************!*\
  !*** ./src/components/OrderItem/OrderItem.tsx ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(/*! tslib */"TToO"),l=a.__importStar(r(/*! react */"GiK3")),n=a.__importDefault(r(/*! ./OrderItem.css */"gVXt"));t.default=(({orderName:e,order:t,changedPrice:r,onOpenPopup:a})=>{const o="up"===r?"Up":"down"===r?"Down":"";return l.createElement("li",{className:n.default.OrderItem},l.createElement("a",{onClick:function(){a(e,o,t)}},l.createElement("p",{className:n.default[`${o}`]},e),l.createElement("span",{className:n.default[`${o}`]},parseFloat(t.buy_price).toFixed(2).replace(".",","))))})},uwQz:
/*!****************************************!*\
  !*** ./src/components/Popup/Popup.tsx ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(/*! tslib */"TToO"),l=a.__importDefault(r(/*! react */"GiK3")),n=a.__importDefault(r(/*! react-transition-group/Transition */"TAxY")),o=a.__importDefault(r(/*! ../OrderTable/OrderTable */"qCYo")),u=a.__importDefault(r(/*! ../Spinner/Spinner */"K9GG")),d=a.__importDefault(r(/*! ./Popup.css */"tnkw")),_=500,s={top:0,transition:`all ${_}ms ease-in-out`,opacity:0},i={entering:{opacity:0,top:0},entered:{opacity:1,top:"50%"},exiting:{opacity:1,top:"50%"},exited:{opacity:0,top:-100}};t.default=class extends l.default.PureComponent{render(){const{isOpen:e,onClosePopup:t,currentOrder:r,orderBook:a,error:p}=this.props,c=r?Object.keys(r)[0]:"";let f,m;return null!==a&&(f=a[c].ask,m=a[c].bid),l.default.createElement(n.default,{in:e,timeout:_},e=>l.default.createElement("div",{style:Object.assign({},s,i[e]),className:`${d.default.Popup} ${e}`},r&&(()=>{const e=r[c];return l.default.createElement("div",{className:d.default.orderInfo},l.default.createElement("header",null,l.default.createElement("h1",null,c,l.default.createElement("span",{className:`${d.default.BuyPrice} ${d.default[`${r.className}`]}`},e.buy_price.replace(".",","))),l.default.createElement("p",null,"Статистика за 24 часа:")),l.default.createElement("div",{className:d.default.orderVolumes},l.default.createElement("div",{className:d.default.orderVolumesLeft},l.default.createElement("p",null,"Объем торгов: ",l.default.createElement("span",null,e.vol)),l.default.createElement("p",null,"Объем сделок: ",l.default.createElement("span",null,e.vol_curr))),l.default.createElement("div",{className:d.default.orderVolumesRight},l.default.createElement("p",null,"Средняя цена сделки: ",l.default.createElement("span",null,e.avg)),l.default.createElement("p",null,"Максимальная цена сделки: ",l.default.createElement("span",null,e.high)),l.default.createElement("p",null,"Минимальная цена сделки: ",l.default.createElement("span",null,e.low)))),a?l.default.createElement("div",{className:d.default.TableContainer},l.default.createElement("div",{className:d.default.TableItem},l.default.createElement("h2",null,"Покупка"),l.default.createElement(o.default,{orderBook:f})),l.default.createElement("div",{className:d.default.TableItem},l.default.createElement("h2",null,"Продажа"),l.default.createElement(o.default,{orderBook:m}))):l.default.createElement("div",{className:d.default.SpinnerCenter},l.default.createElement("p",null,"Ждем получения ордеров по валютной паре"),l.default.createElement(u.default,null)),p&&l.default.createElement("p",{className:d.default.Error},p))})(),l.default.createElement("a",{onClick:t},"✕")))}}}},[0]);