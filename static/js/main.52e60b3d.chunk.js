(this.webpackJsonprock=this.webpackJsonprock||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.759a2075.svg"},,function(e,t,a){e.exports=a.p+"static/media/bg-triangle.1fd44bdf.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-rock.8ce1e109.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-paper.69a8c2e9.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-scissors.bec2f9b3.svg"},function(e,t,a){e.exports=a.p+"static/media/image-rules.5d74d25d.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-close.919ab92a.svg"},,function(e,t,a){e.exports=a(28)},,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),i=a.n(r),l=a(8),s=a.n(l),o=a(1),m=function(){var e=Object(o.c)((function(e){return e.score}));return c.a.createElement("div",{className:"scoreBoard"},c.a.createElement("img",{src:s.a,alt:""}),c.a.createElement("div",{className:"score"},c.a.createElement("div",null,"S C O R E"),c.a.createElement("div",{className:"number"},e)))},u=a(10),d=a.n(u),E=a(11),v=a.n(E),f=function(e){var t=e.id;return c.a.createElement("div",null,c.a.createElement("button",{className:"rock",id:t},c.a.createElement("div",null,c.a.createElement("img",{src:v.a,alt:""}))))},O=a(12),p=a.n(O),b=function(e){var t=e.id;return c.a.createElement("div",null,c.a.createElement("button",{className:"paper",id:t},c.a.createElement("div",null,c.a.createElement("img",{src:p.a,alt:""}))))},N=a(13),g=a.n(N),h=function(e){var t=e.id;return c.a.createElement("div",null,c.a.createElement("button",{className:"scissors",id:t},c.a.createElement("div",null,c.a.createElement("img",{src:g.a,alt:""}))))},y=function(e){return{type:e}},S=function(){var e=Object(o.b)();function t(t){e(y(t)),e({type:function(){var e=Math.random();return e>0&&e<=.33?"ROBOT_ROCK":e>.33&&e<=.66?"ROBOT_PAPER":"ROBOT_SCISSORS"}()})}return c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"triangle"},c.a.createElement("img",{src:d.a,alt:""}),c.a.createElement("div",{onClick:function(){return t("ROCK")},className:"gameRock"},c.a.createElement(f,null)),c.a.createElement("div",{onClick:function(){return t("PAPER")},className:"gamePaper"},c.a.createElement(b,null)),c.a.createElement("div",{onClick:function(){return t("SCISSORS")},className:"gameScissors"},c.a.createElement(h,null))))},C=function(){var e=Object(o.b)();return c.a.createElement("div",{className:"rules"},c.a.createElement("div",{onClick:function(){return e({type:"RULES"})},className:"ruleClick"},"R U L E S"))},R=a(14),k=a.n(R),P=a(15),T=a.n(P),j=function(){var e=Object(o.c)((function(e){return e.rules})),t=Object(o.b)();return c.a.createElement("div",null,!0===e?c.a.createElement("div",{className:"ruleImage"},c.a.createElement("div",{className:"name"},"RULES"),c.a.createElement("img",{onClick:function(){return t({type:"RULES"})},className:"x",src:T.a,alt:""}),c.a.createElement("img",{className:"image",src:k.a,alt:""})):null)},U=a(16),Y=function(e){var t=e.decision,a=Object(o.b)();return Object(n.useEffect)((function(){var e=setTimeout((function(){a({type:t})}),3e3);return function(){return clearTimeout(e)}}),[a,t]),c.a.createElement("div",{className:"winnerContainer"},c.a.createElement("div",{className:"winner"},c.a.createElement("div",null,t),c.a.createElement("button",{onClick:function(){return a(y("EMPTY"))}},"PLAY AGAIN")))},I=function(){var e=Object(o.c)((function(e){return e.choice})),t=Object(o.c)((function(e){return e.robot})),a=Object(n.useState)("none"),r=Object(U.a)(a,2),i=r[0],l=r[1];function s(){return 1===e.code&&2===t.code?c.a.createElement(Y,{decision:"YOU LOSE"}):1===e.code&&3===t.code?c.a.createElement(Y,{decision:"YOU WIN"}):2===e.code&&3===t.code?c.a.createElement(Y,{decision:"YOU LOSE"}):2===e.code&&1===t.code||3===e.code&&2===t.code?c.a.createElement(Y,{decision:"YOU WIN"}):3===e.code&&1===t.code?c.a.createElement(Y,{decision:"YOU LOSE"}):c.a.createElement(Y,{decision:"YOU TIED"})}function m(){return"YOU WIN"===s().props.decision?{you:"visible",house:"hidden"}:"YOU LOSE"===s().props.decision?{you:"hidden",house:"visible"}:{you:"hidden",house:"hidden"}}return console.log(m()),Object(n.useEffect)((function(){var e=setTimeout((function(){l("block")}),2e3);return function(){return clearTimeout(e)}}),[]),c.a.createElement("div",{className:"match"},c.a.createElement("div",{className:"youGroup"},c.a.createElement("h4",null,"YOU PICKED"),c.a.createElement("div",{className:"youPicked"},c.a.createElement("div",{className:"radial",style:{visibility:m().you}},c.a.createElement("div",{className:"firstCircle"},c.a.createElement("div",{className:"secondCircle"},c.a.createElement("div",{className:"thirdCircle"}," ")))),c.a.createElement("div",{className:"front"}," ",e.type," "))),c.a.createElement("div",{style:{display:i},className:"winner"},s()),c.a.createElement("div",{className:"houseGroup"},c.a.createElement("h4",null,"THE HOUSE PICKED"),c.a.createElement("div",{className:"housePicked"},c.a.createElement("div",{className:"radial",style:{visibility:m().house}},c.a.createElement("div",{className:"firstCircle"},c.a.createElement("div",{className:"secondCircle"},c.a.createElement("div",{className:"thirdCircle"}," ")))),c.a.createElement("div",{className:"shadow"}),c.a.createElement("div",{className:"front"},t.type))))},w=function(){var e=Object(o.c)((function(e){return e.rules})),t=Object(o.c)((function(e){return e.choice}));return c.a.createElement("div",{className:"body"},c.a.createElement("div",{className:"container",style:!0===e?{backgroundColor:"black",opacity:"0.5"}:{}},c.a.createElement(m,null),"EMPTY"===t?c.a.createElement(S,null):c.a.createElement(I,null),c.a.createElement(C,null)),c.a.createElement(j,null))},L=a(2),x=Object(L.b)({rules:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RULES":return!e;default:return e}},choice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"EMPTY",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROCK":return{type:c.a.createElement(f,{id:"animation4"}),code:1};case"PAPER":return{type:c.a.createElement(b,{id:"animation5"}),code:2};case"SCISSORS":return{type:c.a.createElement(h,{id:"animation6"}),code:3};case"EMPTY":return"EMPTY";default:return e}},robot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROBOT_ROCK":return{type:c.a.createElement(f,{id:"animation1"}),code:1};case"ROBOT_PAPER":return{type:c.a.createElement(b,{id:"animation2"}),code:2};case"ROBOT_SCISSORS":return{type:c.a.createElement(h,{id:"animation3"}),code:3};default:return e}},score:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"YOU WIN":return e+1;default:return e}}}),B=Object(L.c)(x);i.a.render(c.a.createElement(o.a,{store:B},c.a.createElement(w,null)),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.52e60b3d.chunk.js.map