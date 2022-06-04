(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{const n=performance.now();requestAnimationFrame((function r(c){let l=(c-n)/o;l>1&&(l=1);const a=e(l);t(a),l<1&&requestAnimationFrame(r)}))},t=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),n=o.querySelectorAll("input"),r=document.createElement("span"),c={"form-name":/^[а-яА-ЯёЁa]{2,20}$/,"top-form":/^[а-яА-ЯёЁa]{2,20}$/,"form-email":/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,"form-phone":/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,mess:/^[?!,.а-яА-ЯёЁ0-9\s]+$/};n.forEach((e=>{e.addEventListener("focus",(e=>{var t;(t=e.target).style.border&&(t.style.border="")}))}));try{if(!o)throw new Error("Верни форму на место");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=new FormData(o),l={};var a;e.forEach(((e,t)=>{l[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);l[e.id]="block"===e.type?t.textContent:t.value})),(e=>{const t=Array.from(e);Object.keys(c).forEach((e=>{const o=t.find((t=>t.classList.contains(e)));o&&!c[e].test(o.value)&&(o.style.border="solid red 2px")}))})(n),(e=>{let t=!0;return e.forEach((e=>{""===e.value&&(t=!1)})),t})(n)&&(r.textContent="Загрузка...",r.style.color="#fff",o.append(r),(a=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((()=>{r.textContent="Спасибо! Наш менеджер с вами свяжется!",n.forEach((e=>{e.value=""}))})).catch((()=>r.textContent="Ошибка...")))})()}))}catch(e){alert(e.massage)}};(e=>{const t=document.getElementById("timer-days"),o=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),c=document.querySelectorAll("#timer span")[1],l=()=>{const e=(new Date("5 june 2022 13:30:00").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/3600/24),hours:Math.floor(e/3600%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}},a=e=>Number(e)>=0&&Number(e)<10?`0${e}`:e;l().timeRemaining>0&&setInterval((()=>{(()=>{const e=l();e.timeRemaining>0&&(t.textContent=`${a(e.days)}`,o.textContent=`${a(e.hours)}`,n.textContent=`${a(e.minutes)}`,r.textContent=`${a(e.seconds)}`),0===e.days&&(t.textContent="",c.textContent="")})()}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=t.querySelectorAll("a"),n=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",n),o.forEach((e=>e.addEventListener("click",n))),document.addEventListener("keydown",(e=>{"Escape"===e.key&&t.classList.remove("active-menu")})),window.addEventListener("click",(e=>{const o=e.target;o.closest("menu")||o.closest(".menu")||t.classList.remove("active-menu")}))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),n=o.querySelector(".popup-close"),r=document.querySelector(".popup-content"),c=document.documentElement.clientWidth;n.style.cursor="pointer",t.forEach((t=>{t.addEventListener("click",(()=>{c<=768?o.style.display="block":e({duration:1e3,timing:e=>e,draw(e){o.style.display="block",r.style.cssText=`\n            opacity: ${e};\n            left: 50%;\n            transform: translateX(-50%);\n            `}})}))})),n.addEventListener("click",(()=>{o.style.display=""})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&(o.style.display="")})),window.addEventListener("click",(e=>{e.target.closest(".popup-content")||(o.style.display="")}))})(),(()=>{const e=document.querySelector("body"),t=document.querySelector('a[href="#service-block"]'),o=document.querySelector("#service-block"),n=document.querySelector("main"),r=document.querySelector("menu").querySelectorAll("a"),c=document.createElement("div");c.innerHTML='<img src="./images/up-arrow.svg" alt="" />',c.style.cssText="\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    width: 30px;\n    height: 30px;\n    z-index: 100;\n    cursor: pointer;\n    ",e.append(c);const l=e=>{e.preventDefault(),document.querySelector(e.target.hash).scrollIntoView({block:"start",behavior:"smooth"})};r.forEach(((e,t)=>{t>0&&e.addEventListener("click",l)})),t.addEventListener("click",(e=>{e.preventDefault(),o.scrollIntoView({block:"start",behavior:"smooth"})})),c.addEventListener("click",(e=>{e.preventDefault(),n.scrollIntoView({block:"start",behavior:"smooth"})})),window.addEventListener("scroll",(()=>{const e=document.documentElement.scrollTop;c.style.display=e<=900?"none":""}))})(),document.querySelectorAll(".calc-item").forEach(((e,t)=>{t>0&&e.addEventListener("change",(()=>{/[^\d]/g.test(e.value)?(e.value="Ввeдите число",e.style.cssText="\n          border-color: red;\n          color: red;\n          "):e.style.borderColor="green"})),e.addEventListener("click",(()=>{e.value="",e.removeAttribute("style")}))})),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab"),n=document.documentElement.clientWidth;e.addEventListener("click",(e=>{e.target.closest(".service-header-tab")&&t.forEach(((t,r)=>{const c=e.target.closest(".service-header-tab");if(t===c&&n>768){let e=0;t.classList.add("active"),o[r].classList.remove("d-none"),o[r].style.opacity=0;const n=setInterval((()=>{e+=.1,o[r].style.opacity=e,o[r].style.opacity>=1&&clearInterval(n)}),40)}else t===c&&n<=768?(t.classList.add("active"),o[r].classList.remove("d-none")):(t.classList.remove("active"),o[r].classList.add("d-none"),o[r].removeAttribute("style"))}))}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n,r=0;t.forEach(((e,t)=>{o.innerHTML+=`<li class="dot ${0===t?"dot-active":""}"></li>`}));const c=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},a=()=>{const e=document.querySelectorAll(".dot");c(t,r,"portfolio-item-active"),c(e,r,"dot-active"),r++,r>=t.length&&(r=0),l(t,r,"portfolio-item-active"),l(e,r,"dot-active")},s=(e=1500)=>{n=setInterval(a,e)};e.addEventListener("click",(e=>{const o=document.querySelectorAll(".dot");e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(c(t,r,"portfolio-item-active"),c(o,r,"dot-active"),e.target.matches("#arrow-right")?r++:e.target.matches("#arrow-left")?r--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(r=o)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),l(t,r,"portfolio-item-active"),l(o,r,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&s(2e3)}),!0),s(2e3)})(),((t=100)=>{const o=document.querySelector(".calc-block"),n=o.querySelector(".calc-type"),r=o.querySelector(".calc-square"),c=o.querySelector(".calc-count"),l=document.getElementById("total"),a=o.querySelector(".calc-day");o.addEventListener("input",(o=>{o.target!==n&&o.target!==r&&o.target!==c&&o.target!==a||(()=>{const o=+n.options[n.selectedIndex].value,s=+r.value;let i=0,d=1,m=1;c.value>1&&(d+=c.value/10),a.value&&a.value<5?m=2:a.value&&a.value<10&&(m=1.5),i=n.value&&r.value?t*o*s*d*m:0,e({duration:1e3,timing:e=>e,draw(e){l.textContent=Math.round(i*e)}})})()}))})(),t({formId:"form1",someElem:[{type:"block",id:"total"}]}),t({formId:"form2",someElem:[{type:"block",id:"total"}]}),t({formId:"form3",someElem:[{type:"block",id:"total"}]})})();