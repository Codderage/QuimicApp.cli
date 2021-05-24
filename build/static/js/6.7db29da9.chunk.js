(this.webpackJsonpquimicapp=this.webpackJsonpquimicapp||[]).push([[6],{152:function(e,t,n){"use strict";var r,o=n(1),a=n(16),c=n(21),i=n(5),s=n(6).c.div(r||(r=Object(i.a)(["\n  position: relative;\n  margin: 3rem 0rem;\n\n  & input {\n    width: 100%;\n    height: 3.2rem;\n    border-radius: 1.5rem;\n    filter: drop-shadow(0rem 0.19rem 0.2rem #757575);\n    border: none;\n    padding-left: 4rem;\n\n    &:focus {\n      outline: none;\n    }\n  }\n  & .search-icon {\n    font-size: 20px;\n    position: absolute;\n    left: 30px;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 2;\n    & path {\n      fill: #0a1128;\n    }\n  }\n"]))),l=n(0);t.a=function(){var e=Object(o.useState)(!1),t=e.keyword,n=e.setKeyword;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(s,{className:"search-bar-wrapper",children:[Object(l.jsx)(a.a,{icon:c.f,className:"search-icon"}),Object(l.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}},"searchUser")]})})}},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(7),o=n(115),a=n(116),c=n(1),i=n(114),s=n.n(i),l=n(136),u=n(327);function p(e){var t=e.className,n=e.direction,a=e.index,i=e.marginDirection,s=e.children,l=e.split,u=e.wrap,p=c.useContext(m),d=p.horizontalSize,b=p.verticalSize,f=p.latestIndex,h={};return"vertical"===n?a<f&&(h={marginBottom:d/(l?2:1)}):h=Object(r.a)(Object(r.a)({},a<f&&Object(o.a)({},i,d/(l?2:1))),u&&{paddingBottom:b}),null===s||void 0===s?null:c.createElement(c.Fragment,null,c.createElement("div",{className:t,style:h},s),a<f&&l&&c.createElement("span",{className:"".concat(t,"-split"),style:h},l))}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},m=c.createContext({latestIndex:0,horizontalSize:0,verticalSize:0}),b={small:8,middle:16,large:24};t.b=function(e){var t,n=c.useContext(u.b),i=n.getPrefixCls,f=n.space,h=n.direction,v=e.size,x=void 0===v?(null===f||void 0===f?void 0:f.size)||"small":v,g=e.align,E=e.className,j=e.children,O=e.direction,w=void 0===O?"horizontal":O,y=e.prefixCls,C=e.split,S=e.style,k=e.wrap,N=void 0!==k&&k,z=d(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),q=c.useMemo((function(){return(Array.isArray(x)?x:[x,x]).map((function(e){return function(e){return"string"===typeof e?b[e]:e||0}(e)}))}),[x]),P=Object(a.a)(q,2),I=P[0],B=P[1],A=Object(l.a)(j,{keepEmpty:!0});if(0===A.length)return null;var D=void 0===g&&"horizontal"===w?"center":g,F=i("space",y),T=s()(F,"".concat(F,"-").concat(w),(t={},Object(o.a)(t,"".concat(F,"-rtl"),"rtl"===h),Object(o.a)(t,"".concat(F,"-align-").concat(D),D),t),E),J="".concat(F,"-item"),M="rtl"===h?"marginLeft":"marginRight",V=0,L=A.map((function(e,t){return null!==e&&void 0!==e&&(V=t),c.createElement(p,{className:J,key:"".concat(J,"-").concat(t),direction:w,index:t,marginDirection:M,split:C,wrap:N},e)}));return c.createElement("div",Object(r.a)({className:T,style:Object(r.a)(Object(r.a)({},N&&{flexWrap:"wrap",marginBottom:-B}),S)},z),c.createElement(m.Provider,{value:{horizontalSize:I,verticalSize:B,latestIndex:V}},L))}},710:function(e,t,n){"use strict";n.r(t);var r,o,a=n(12),c=n(152),i=n(173),s=n(17),l=n(9),u=n.n(l),p=n(18),d=n(1),m=n(15),b=n(208),f=n(703),h=n(16),v=n(21),x=n(4),g=n.n(x),E=n(19),j=n(22),O=n.n(j),w=n(5),y=n(6),C=y.c.div(r||(r=Object(w.a)(["\n  & .components-table {\n    & table {\n      border-collapse: separate;\n      border-spacing: 0 0.3rem;\n    }\n    & .ant-table-selection,\n    .ant-checkbox-wrapper {\n      display: none;\n    }\n    & tr {\n      height: 5rem;\n      font-size: 17px;\n      &:hover > td {\n        background-color: #6bb1c5;\n      }\n      & td:last-of-type {\n        text-align: center;\n      }\n    }\n    & thead tr th {\n      background-color: #0a1128;\n      color: #fefcfb;\n    }\n    & tr td {\n      background-color: #0a1128;\n      color: #fefcfb;\n    }\n    & tr td:first-child,\n    tr th:first-child {\n      border-top-left-radius: 0.3rem;\n      border-bottom-left-radius: 0.3rem;\n    }\n    & tr td:last-child,\n    tr th:last-child {\n      border-top-right-radius: 0.3rem;\n      border-bottom-right-radius: 0.3rem;\n    }\n    & .ant-table-column-has-sorters:hover {\n      background-color: #6bb1c5;\n    }\n    & td div div {\n      &:first-child {\n        a path {\n          fill: #3d6e9c;\n        }\n      }\n      &:last-child {\n        a path {\n          fill: #c56b6b;\n        }\n      }\n      & a {\n        padding: 0rem 0rem;\n        border: none;\n        border-radius: 0.2rem;\n        font-weight: 400;\n        text-decoration: none;\n      }\n    }\n  }\n"]))),S=y.c.a(o||(o=Object(w.a)(["\n  display: block;\n  width: 195px;\n  height: 45px;\n  background: #6bb1c5;\n  padding: 10px;\n  margin-bottom: 2rem;\n  text-align: center;\n  border-radius: 5px;\n  color: white;\n  font-weight: bold;\n  background-color: #6bb1c5;\n  text-decoration: none;\n  box-shadow: 0rem 0.2rem 0.2rem 0rem #bdbdbd;\n  float: right;\n  &:hover {\n    color: white;\n  }\n"]))),k=n(0),N=[{title:"Nombre",dataIndex:"nombreCompuesto",sorter:function(e,t){return e.nombreCompuesto<t.nombreCompuesto?1:t.nombreCompuesto<e.nombreCompuesto?-1:0},sortDirections:["descend","ascend"]},{title:"Descripci\xf3n",dataIndex:"descripcion",responsive:["lg"]},{title:"F\xf3rmula",dataIndex:"formula",responsive:["lg"]},{title:"Tipo",dataIndex:"tipo",responsive:["lg"],sorter:function(e,t){return e.tipo<t.tipo?1:t.tipo<e.tipo?-1:0},sortDirections:["descend","ascend"]},{title:"Estructura",dataIndex:"estructura",responsive:["lg"]},{title:"",key:"accion",dataIndex:"accion",render:function(e,t){return Object(k.jsxs)(b.b,{size:"middle",children:[Object(k.jsx)("a",{title:"Ver",children:Object(k.jsx)(h.a,{icon:v.d,className:"view-icon"})}),Object(k.jsx)("a",{title:"Editar",children:Object(k.jsx)(h.a,{icon:v.c,className:"view-icon",onClick:function(e){I(t.key,t.idCompuesto,t.nombreCompuesto,t.descripcion,t.formula,t.tipo,t.estructura,e)}})}),Object(k.jsx)("a",{title:"Eliminar",children:Object(k.jsx)(h.a,{icon:v.g,className:"delete-icon",onClick:function(e){q(t.id)}})})]})}}],z=function(){var e=JSON.parse(sessionStorage.getItem("user"));if(e&&e.id_profesor)return Object(k.jsx)(S,{className:"btn",onClick:function(e){B()},children:"+ Crear componente"})},q=function(e){g()({title:"\xbfEst\xe1s seguro?",text:"Eliminar\xe1s el compuesto y luego no podr\xe1s volver a recuperarlo.",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){t&&(g()({icon:E.a,button:!1,allowOutsideClick:!1}),m.a.delete("compuesto-quimico/"+e).then((function(e){e.status>=200&&e.status<=205&&window.location.reload(!0)})).catch((function(e){401==e.status?g()({title:"Error acceso "+e.response.status,text:"Error, no tienes acceso a esta secci\xf3n.",icon:"error",button:"Aceptar",timer:"3000"}):g()({title:"Error "+e.response.status,text:"Error interno",icon:"error",button:"Aceptar",timer:"3000"})})))}))},P=function(e){return null==e?"":e},I=function(){var e=Object(p.a)(u.a.mark((function e(t,n,r,o,a,c,i,s){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=P(r),o=P(o),a=P(a),c=P(c),i=P(i),O.a.fire({title:"Editar",html:"<label for='EnombreCompuesto'>Nombre:</label>\n    <input class=\"swal2-input\" id='EnombreCompuesto' type='text' value='".concat(r,"'>\n    <label for='Edescripcion'>Descripci\xf3n:</label>\n    <input class=\"swal2-input\" id='Edescripcion' type='text' value='").concat(o,"'>\n    <label for='Eformula'>F\xf3rmula:</label>\n    <input class=\"swal2-input\" id='Eformula' type='text' value='").concat(a,"'>\n    <label for='Etipo'>Tipo:</label>\n    <input class=\"swal2-input\" id='Etipo' type='text' value='").concat(c,"'>\n    <label for='Eestructura'>Estructura:</label>\n    <input class=\"swal2-input\" id='Eestructura' type='text' value='").concat(i,"'>"),showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Editar",cancelButtonText:"Cancelar",focusConfirm:!1,preConfirm:function(){var e=O.a.getPopup().querySelector("#EnombreCompuesto").value,t=O.a.getPopup().querySelector("#Edescripcion").value,n=O.a.getPopup().querySelector("#Eformula").value,r=O.a.getPopup().querySelector("#Etipo").value,o=O.a.getPopup().querySelector("#Eestructura").value;return e||O.a.showValidationMessage("Alg\xfan campo obligatorio vac\xedo"),{EnombreCompuesto:e,Edescripcion:t,Eformula:n,Etipo:r,Eestructura:o}}}).then((function(e){if(e.isConfirmed){g()({icon:E.a,button:!1,allowOutsideClick:!1});var t;t={nombre:"".concat(e.value.EnombreCompuesto),formula:"".concat(e.value.Eformula),descripcion:"".concat(e.value.Edescripcion),tipo:"".concat(e.value.Etipo),estructura:"".concat(e.value.Eestructura)},m.a.put("compuesto-quimico/"+"".concat(n),t).then((function(e){e.status>=200&&e.status<=205&&window.location.reload(!0)})).catch((function(e){401==e.status?g()({title:"Error acceso "+e.response.status,text:"Error, no tienes acceso a esta secci\xf3n.",icon:"error",button:"Aceptar",timer:"3000"}):g()({title:"Error interno "+e.response.status,text:"Error interno, vuelve a intentarlo en unos momentos.",icon:"error",button:"Aceptar",timer:"3000"})}))}}));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,o,a,c,i,s){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],O.a.fire({title:"Crear componente",html:"\n    <label for='Enombre'>Nombre:</label><br>\n    <input class=\"swal2-input\" id='Enombre' type='text' placeholder=\"Nombre\"><br>\n    <label for='Eformula'>Formula:</label><br>\n    <input class=\"swal2-input\" id='Eformula' type='text' placeholder=\"Formula\"><br>\n    <label for='Edescripcion'>Descripcion:</label><br>\n    <input class=\"swal2-input\" id='Edescripcion' type='text' placeholder=\"Descripcion\"><br>\n    <label for='Etipo'>Tipo:</label><br>\n    <input class=\"swal2-input\" id='Etipo' type='text' placeholder=\"Tipo\"><br>\n    <label for='Eestructura'>Estructura:</label><br>\n    <input class=\"swal2-input\" id='Eestructura' type='text' placeholder=\"Estructura\"><br>\n    ",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Crear",cancelButtonText:"Cancelar",focusConfirm:!1,preConfirm:function(){var e=O.a.getPopup().querySelector("#Enombre").value,t=O.a.getPopup().querySelector("#Eformula").value,n=O.a.getPopup().querySelector("#Edescripcion").value,r=O.a.getPopup().querySelector("#Etipo").value,o=O.a.getPopup().querySelector("#Eestructura").value;return e||O.a.showValidationMessage("Alg\xfan campo obligatorio vac\xedo"),{Enombre:e,Eformula:t,Edescripcion:n,Etipo:r,Eestructura:o}}}).then((function(e){e.isConfirmed&&(t={nombre:"".concat(e.value.Enombre),formula:"".concat(e.value.Eformula),descripcion:"".concat(e.value.Edescripcion),tipo:"".concat(e.value.Etipo),estructura:"".concat(e.value.Eestructura)},A(t))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("compuesto-quimico",t).then((function(e){e.status>=200&&e.status<=205&&window.location.reload(!0)})).catch((function(e){401==e.status?g()({title:"Error acceso "+e.response.status,text:"Error, no tienes acceso a esta secci\xf3n.",icon:"error",button:"Aceptar",timer:"3000"}):g()({title:"Error interno "+e.response.status,text:"Error interno, vuelve a intentarlo en unos momentos.",icon:"error",button:"Aceptar",timer:"3000"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D={position:"bottom"},F=function(){var e=Object(d.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1],o=[];Object(d.useEffect)(Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!sessionStorage.getItem("token")||!sessionStorage.getItem("user")){e.next=4;break}return JSON.parse(sessionStorage.getItem("user")),e.next=4,m.a.get("compuestos-quimicos").then((function(e){if(e.status>=200&&e.status<=205)for(var t=0;t<e.data.length;t++)o.push({key:t,id:e.data[t].id,nombreCompuesto:e.data[t].nombre,descripcion:e.data[t].descripcion,formula:e.data[t].formula,tipo:e.data[t].tipo,estructura:e.data[t].estructura,idCompuesto:e.data[t].id})})).catch((function(e){401==e.status?g()({title:"Error acceso "+e.response.status,text:"Error, no tienes acceso a esta secci\xf3n.",icon:"error",button:"Aceptar",timer:"3000"}):g()({title:"Error interno "+e.response.status,text:"Error interno, vuelve a intentarlo en unos momentos.",icon:"error",button:"Aceptar",timer:"3000"})}));case 4:r(o);case 5:case"end":return e.stop()}}),e)}))),[]);var a=Object(d.useState)({bordered:!1,loading:!1,pagination:D,size:"default",showHeader:true,rowSelection:{},scroll:void 0,hasData:!0,tableLayout:"fixed",top:"none",bottom:"bottomRight",xScroll:!1,yScroll:!1}),c=Object(s.a)(a,2),l=c[0],b=(c[1],{});l.yScroll&&(b.y=240),l.xScroll&&(b.x="100vw");var h=N.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{ellipsis:l.ellipsis})}));return"fixed"===l.xScroll&&(h[0].fixed=!0,h[h.length-1].fixed="right"),Object(k.jsxs)(k.Fragment,{children:[z(),Object(k.jsx)(C,{children:Object(k.jsx)(f.a,Object(i.a)(Object(i.a)({},l),{},{pagination:{position:[l.top,l.bottom],pageSize:6},columns:h,dataSource:n||null,scroll:b,className:"components-table"}))})]})};t.default=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(a.a,{}),Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(c.a,{}),Object(k.jsx)(F,{})]})]})}}}]);
//# sourceMappingURL=6.7db29da9.chunk.js.map