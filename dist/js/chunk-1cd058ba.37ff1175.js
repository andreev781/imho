(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cd058ba"],{"0b1f":function(t,a,e){},"84a6":function(t,a,e){"use strict";e("0b1f")},b97e:function(t,a,e){"use strict";e.r(a);var r,s,i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"admin-analytics"},[a("div",{staticClass:"admin-analytics__content"},[a("div",{staticClass:"admin-analytics__body"},t._l(t.rows,(function(t){return a("MainRow",{key:t[0].property,attrs:{features:t}})})),1)])])},l=[],o=function(){var t=this,a=t._self._c;return a("div",{staticClass:"admin-analytics__row row-analytics"},[a("div",{staticClass:"row-analytics__content main-color"},[a("div",{staticClass:"row-analytics__info"},[t._m(0),t._l(t.features,(function(e,r){return a("div",{key:r,staticClass:"row-analytics__features"},[a("div",{staticClass:"row-analytics__property",class:{"row-analytics__role":e.color},style:[e.color?{background:e.color,"font-weight":400,"font-size":"12px",padding:"2px 4px"}:void 0,e.weight?{"font-weight":e.weight}:void 0]},[a("p",[t._v(t._s(e.property))])]),a("div",{staticClass:"row-analytics__value"},[a("p",[t._v(t._s(e.value))])])])}))],2),a("div",{staticClass:"row-analytics__graph"},[a("line-chart",{attrs:{styles:{height:"150px"}}})],1)])])},n=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"row-analytics__title"},[a("p",[t._v("Всего")])])}],p=e("1fca"),c={extends:p["b"],data(){return{options:{layout:{},elements:{point:{radius:3},line:{tension:0}},scales:{paddingLeft:100,yAxes:[{ticks:{mirror:!0,stepSize:1e3,max:2e3,beginAtZero:!0,callback:t=>0==t?"":t,z:999,labelOffset:12},gridLines:{display:!0,drawOnChartArea:!1}}],xAxes:[{ticks:{display:!1},gridLines:{display:!1}}]},legend:{display:!1},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1}}},mounted(){this.renderChart({labels:["1","2","3"],datasets:[{data:[1e3,1900,2e3],fill:!0,borderColor:"rgba(0,141,196, 1)",backgroundColor:"rgb(230,243,249)",borderRadius:0,borderWidth:3}]},this.options)}},u=c,d=e("2877"),y=Object(d["a"])(u,r,s,!1,null,null,null),v=y.exports,_={props:{features:{type:Array,default:()=>[]}},components:{LineChart:v}},f=_,w=(e("84a6"),Object(d["a"])(f,o,n,!1,null,null,null)),b=w.exports,h={data(){return{rows:[[{property:"Авторов",value:"12 989"},{property:"Спикер",value:"1 989 (23%)",color:"#E2E2E2"},{property:"Спикер",value:"1 989 (23%)",color:"#FCD1A7"},{property:"Спикер",value:"1 989 (23%)",color:"#FFF1A3"}],[{property:"Публикаций",value:"1 129 989"},{property:"Горячие новости",value:"1 129 989"},{property:"Тема дня",value:"1 129 989"}],[{property:"Пользователей",value:"12 989"},{property:"ВЧС",value:"1 989 (23%)",weight:"500"},{property:"РЧК",value:"1 989 (23%)",weight:"500"}],[{property:"Просмотры",value:"12 989"},{property:"Авторы",value:"1 989 (23%)"},{property:"ВЧК",value:"1 989 (23%)"},{property:"РЧК",value:"1 989 (23%)"}]]}},components:{MainRow:b}},g=h,C=Object(d["a"])(g,i,l,!1,null,null,null);a["default"]=C.exports}}]);
//# sourceMappingURL=chunk-1cd058ba.37ff1175.js.map