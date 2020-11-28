(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{169:function(e,a,r){},180:function(e,a,r){"use strict";r.r(a);var t=r(0),o=r(1),l=r.n(o),n=r(7),i=r.n(n);r(68),r(69);var b=function(){return Object(t.jsx)("div",{class:"banner",children:Object(t.jsx)("div",{class:"title",children:Object(t.jsx)("h1",{children:"Diversity in CS at PSU"})})})},s=r(58),d=r(59),c=r(62),g=r(61),u=(r(70),r(60));var h=function(){var e=l.a.useMemo((function(){return[{label:"Series 1",data:[[0,1],[1,2],[2,4],[3,2],[4,7]]},{label:"Series 2",data:[[0,3],[1,1],[2,5],[3,6],[4,4]]}]}),[]),a=l.a.useMemo((function(){return[{primary:!0,type:"linear",position:"bottom"},{type:"linear",position:"left"}]}),[]);return Object(t.jsx)("div",{style:{width:"100%",height:"100%"},children:Object(t.jsx)(u.Chart,{data:e,axes:a})})},p=r(8),C=(r(169),{labels:["2015","2016","2017","2018","2019"],datasets:[{label:"Male",data:[86,95,98,130,155],backgroundColor:"rgb(249, 153, 0)"},{label:"Legal Sex Unknown",data:[1,2,2,1,2],backgroundColor:"rgb(192,192,192)"},{label:"Female",data:[10,19,12,15,22],backgroundColor:"rgb(252, 70, 26)"}]}),j={display:!0,position:"bottom",labels:{fontColor:"#323130",fontSize:14}},f={scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0}}],xAxes:[{stacked:!0}]},tooltips:{mode:"label"}},m=function(){return Object(t.jsx)(p.Bar,{data:C,legend:j,options:f})},y={labels:["2015","2016","2017","2018","2019"],datasets:[{label:"Asian",data:[11,18,18,13,24],fill:!1,backgroundColor:"rgb(37, 45, 72)",borderColor:"rgba(37, 45, 72, 0.5)"},{label:"Black or African American",data:[1,4,2,1,1],fill:!1,backgroundColor:"rgb(249, 153, 0)",borderColor:"rgba(249, 153, 0.5)"},{label:"Hispanic or Latino",data:[4,8,6,15,6],fill:!1,backgroundColor:"rgb(242, 119, 117)",borderColor:"rgba(242, 119, 117, 0.5)"},{label:"International",data:[6,4,7,18,17],fill:!1,backgroundColor:"rgb(0, 109, 140)",borderColor:"rgba(0, 109, 140, 0.5)"},{label:"Two or More Races",data:[2,4,6,10,10],fill:!1,backgroundColor:"rgb(252, 70, 26)",borderColor:"rgba(252, 70, 26, 0.5)"},{label:"Unknown",data:[7,8,9,12,9],fill:!1,backgroundColor:"rgb(192,192,192)",borderColor:"rgba(192,192,192, 0.5)"},{label:"White",data:[66,70,64,77,112],fill:!1,backgroundColor:"rgb(0, 0, 0)",borderColor:"rgba(0, 0, 0, 0.5)"}]},x={display:!0,position:"bottom",labels:{fontColor:"#323130",fontSize:14}},O={scales:{yAxes:[{ticks:{beginAtZero:!0}}]},tooltips:{mode:"label"}},k=function(){return Object(t.jsx)(p.Line,{data:y,legend:x,options:O})},S={labels:[2015,2016,2017,2018,2019],datasets:[{type:"line",label:"Overall Starting Cohort",borderColor:"rgb(0, 0, 0)",borderWidth:2,fill:!1,data:[361,313,382,355,315]},{type:"line",label:"Female Starting Cohort",borderColor:"rgb(252, 70, 26)",borderWidth:2,fill:!1,data:[59,54,65,70,58]},{type:"line",label:"Male Starting Cohort",borderColor:"rgb(249, 153, 0)",borderWidth:2,fill:!1,data:[294,254,312,280,252]},{type:"bar",label:"Overall Persisted",backgroundColor:"rgba(0, 0, 0, 0.7)",data:[124,153,211,243,0]},{type:"bar",label:"Female Persisted",backgroundColor:"rgb(252, 70, 26)",data:[18,15,35,39,0]},{type:"bar",label:"Male Persisted",backgroundColor:"rgb(249, 153, 0)",data:[103,137,173,202,0]}]},v={scales:{yAxes:[{ticks:{beginAtZero:!0}}]},tooltips:{mode:"label"}},w=function(){return Object(t.jsx)(p.Bar,{data:S,options:v})},P=r(33),A=Object(P.WidthProvider)(P.Responsive),M=h,F=m,U=k,z=w,B=function(e){Object(c.a)(r,e);var a=Object(g.a)(r);function r(){return Object(s.a)(this,r),a.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var e=[{id:1,name:"PSU compared to Tier One CS",chart:M},{id:2,name:"PSU CS Grad Class by Legal Sex",chart:F},{id:3,name:"PSU CS Grad by Ethnicity",chart:U},{id:4,name:"PSU CS Persistence",chart:z}];return Object(t.jsx)("div",{class:"grid",children:Object(t.jsx)(A,{layouts:{lg:[{i:"1",x:0,y:0,w:5,h:3},{i:"2",x:5,y:0,w:5,h:3},{i:"3",x:0,y:0,w:5,h:3},{i:"4",x:5,y:0,w:5,h:3}]},measureBeforeMount:!0,className:"layout",autoSize:!0,rowHeight:this.props.rowHeight,isDragable:!0,isResizable:!0,onDrag:this.onDragging,onDragStop:this.onMoveCard,onResizeStop:this.onResizeCard,margin:[20,20],children:e.map((function(e,a){return Object(t.jsxs)("div",{className:"grid-item",children:[Object(t.jsx)("h3",{children:e.name}),Object(t.jsx)("div",{style:{width:"90%",height:"80%",margin:"0 auto"},children:Object(t.jsx)(e.chart,{})})]},e.id)}))})})}}]),r}(l.a.Component),D=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,181)).then((function(a){var r=a.getCLS,t=a.getFID,o=a.getFCP,l=a.getLCP,n=a.getTTFB;r(e),t(e),o(e),l(e),n(e)}))};i.a.render(Object(t.jsxs)("div",{children:[Object(t.jsx)(b,{}),Object(t.jsx)(B,{})]}),document.getElementById("root")),D()},68:function(e,a,r){},69:function(e,a,r){},70:function(e,a,r){}},[[180,1,2]]]);
//# sourceMappingURL=main.017a861c.chunk.js.map