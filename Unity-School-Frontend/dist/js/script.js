"use strict";function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}document.addEventListener("DOMContentLoaded",(function(){var e,t,r,n;feather.replace(),function(){var e,t=document.querySelector(".sidebar"),r=document.querySelector(".cat-sub-menu"),n=document.querySelectorAll(".sidebar-toggle"),o=_createForOfIteratorHelper(n);try{for(o.s();!(e=o.n()).done;){var a=e.value;a&&r&&a&&a.addEventListener("click",(function(){var e,o=_createForOfIteratorHelper(n);try{for(o.s();!(e=o.n()).done;)e.value.classList.toggle("rotated")}catch(e){o.e(e)}finally{o.f()}t.classList.toggle("hidden"),r.classList.remove("visible")}))}}catch(e){o.e(e)}finally{o.f()}}(),(e=document.querySelectorAll(".show-cat-btn"))&&e.forEach((function(e){var t=e.nextElementSibling;e.addEventListener("click",(function(e){e.preventDefault(),t.classList.toggle("visible"),document.querySelector(".category__btn").classList.toggle("rotated")}))})),t=document.querySelector(".lang-switcher"),r=document.querySelector(".lang-menu"),n=document.querySelector(".layer"),t&&(t.addEventListener("click",(function(){r.classList.add("active"),n.classList.add("active")})),n&&n.addEventListener("click",(function(e){r.classList.contains("active")&&(r.classList.remove("active"),n.classList.remove("active"))}))),function(){var e=document.querySelectorAll(".dropdown-btn"),t=document.querySelectorAll(".users-item-dropdown"),r=document.querySelector(".layer");if(t&&e){var n,o=_createForOfIteratorHelper(e);try{for(o.s();!(n=o.n()).done;)n.value.addEventListener("click",(function(e){r.classList.add("active");var n,o=_createForOfIteratorHelper(t);try{for(o.s();!(n=o.n()).done;){var a=n.value;e.currentTarget.nextElementSibling==a?a.classList.contains("active")?a.classList.remove("active"):a.classList.add("active"):a.classList.remove("active")}}catch(e){o.e(e)}finally{o.f()}}))}catch(e){o.e(e)}finally{o.f()}}r&&r.addEventListener("click",(function(e){var n,o=_createForOfIteratorHelper(t);try{for(o.s();!(n=o.n()).done;){var a=n.value;a.classList.contains("active")&&(a.classList.remove("active"),r.classList.remove("active"))}}catch(e){o.e(e)}finally{o.f()}}))}(),function(){Chart.defaults.backgroundColor="#000";var e=localStorage.getItem("darkMode"),t=document.querySelector(".theme-switcher"),r=function(){document.body.classList.add("darkmode"),localStorage.setItem("darkMode","enabled")};"enabled"===e&&r(),t&&t.addEventListener("click",(function(){"enabled"!==(e=localStorage.getItem("darkMode"))?r():(document.body.classList.remove("darkmode"),localStorage.setItem("darkMode",null)),l()}))}(),function(){var e=document.querySelector(".check-all"),t=document.querySelectorAll(".check");if(e&&t){e.addEventListener("change",(function(r){var n,o=_createForOfIteratorHelper(t);try{for(o.s();!(n=o.n()).done;){var a=n.value;e.checked?(a.checked=!0,a.parentElement.parentElement.parentElement.classList.add("active")):(a.checked=!1,a.parentElement.parentElement.parentElement.classList.remove("active"))}}catch(e){o.e(e)}finally{o.f()}}));var r,n=_createForOfIteratorHelper(t);try{var o=function(){var t=r.value;t.addEventListener("change",(function(r){t.parentElement.parentElement.parentElement.classList.toggle("active"),t.checked||(e.checked=!1);var n=document.querySelectorAll(".users-table .check"),o=document.querySelectorAll(".users-table .check:checked");n&&o&&(n.length==o.length?e.checked=!0:e.checked=!1)}))};for(n.s();!(r=n.n()).done;)o()}catch(e){n.e(e)}finally{n.f()}}}(),function(){var e=document.querySelector(".check-all"),t=document.querySelectorAll(".check"),r=document.querySelector(".checked-sum");if(r&&e&&t){e.addEventListener("change",(function(e){var t=document.querySelectorAll(".users-table .check:checked");r.textContent=t.length}));var n,o=_createForOfIteratorHelper(t);try{for(o.s();!(n=o.n()).done;)n.value.addEventListener("change",(function(e){var t=document.querySelectorAll(".users-table .check:checked");r.textContent=t.length}))}catch(e){o.e(e)}finally{o.f()}}}();var o,a,c={};function l(){"enabled"===localStorage.getItem("darkMode")?(o="#37374F",a="#EFF0F6"):(o="#EEEEEE",a="#171717"),c.hasOwnProperty("visitors")&&(c.visitors.options.scales.x.grid.color=o,c.visitors.options.plugins.title.color=a,c.visitors.options.scales.y.ticks.color=a,c.visitors.options.scales.x.ticks.color=a,c.visitors.update())}!function(){var e,t,r,n=document.getElementById("myChart");if(n){var a=n.getContext("2d"),l=new Chart(a,{type:"line",data:{labels:["Dec","Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"Last 6 months",data:[35,27,40,15,30,25,45],cubicInterpolationMode:"monotone",tension:.4,backgroundColor:["rgba(95, 46, 234, 1)"],borderColor:["rgba(95, 46, 234, 1)"],borderWidth:2},{label:"Previous",data:[20,36,16,45,29,32,10],cubicInterpolationMode:"monotone",tension:.4,backgroundColor:["rgba(75, 222, 151, 1)"],borderColor:["rgba(75, 222, 151, 1)"],borderWidth:2}]},options:{scales:{y:{min:0,max:100,ticks:{stepSize:25},grid:{display:!1}},x:{grid:{color:o}}},elements:{point:{radius:2}},plugins:{legend:{position:"top",align:"end",labels:{boxWidth:8,boxHeight:8,usePointStyle:!0,font:{size:12,weight:"500"}}},title:{display:!0,text:["Visitor statistics","Nov - July"],align:"start",color:"#171717",font:{size:16,family:"Inter",weight:"600",lineHeight:1.4}}},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0}}});c.visitors=l}var i=document.getElementById("customersChart");if(i){var s=i.getContext("2d"),d=new Chart(s,{type:"line",data:{labels:["Dec","Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"+958",data:[90,10,80,20,70,30,50],tension:.4,backgroundColor:function(n){var o=n.chart,a=o.ctx,c=o.chartArea;return c?function(n,o){var a=o.right-o.left,c=o.bottom-o.top;return null!==r&&e===a&&t===c||(e=a,t=c,(r=n.createLinearGradient(0,o.bottom,0,o.top)).addColorStop(0,"rgba(255, 255, 255, 0)"),r.addColorStop(1,"rgba(255, 255, 255, 0.4)")),r}(a,c):null},borderColor:["#fff"],borderWidth:2,fill:!0}]},options:{scales:{y:{display:!1},x:{display:!1}},elements:{point:{radius:1}},plugins:{legend:{position:"top",align:"end",labels:{color:"#fff",size:18,fontStyle:800,boxWidth:0}},title:{display:!0,text:["New Customers","28 Daily Avg."],align:"start",color:"#fff",font:{size:16,family:"Inter",weight:"600",lineHeight:1.4},padding:{top:20}}},maintainAspectRatio:!1}});i.customers=d}}(),l()}));