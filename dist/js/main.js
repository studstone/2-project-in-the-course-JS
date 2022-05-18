(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{const n=performance.now();requestAnimationFrame((function c(r){let l=(r-n)/o;l>1&&(l=1);const s=e(l);t(s),l<1&&requestAnimationFrame(c)}))};(e=>{const t=document.getElementById("timer-days"),o=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds"),r=document.querySelectorAll("#timer span")[1],l=()=>{const e=(new Date("16 may 2022 13:30:00").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/3600/24),hours:Math.floor(e/3600%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}},s=e=>Number(e)>=0&&Number(e)<10?`0${e}`:e;l().timeRemaining>0&&setInterval((()=>{(()=>{const e=l();e.timeRemaining>0&&(t.textContent=`${s(e.days)} дн`,o.textContent=`${s(e.hours)}`,n.textContent=`${s(e.minutes)}`,c.textContent=`${s(e.seconds)}`),0===e.days&&(t.textContent="",r.textContent="")})()}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=t.querySelectorAll("a"),n=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",n),o.forEach((e=>e.addEventListener("click",n))),document.addEventListener("keydown",(e=>{"Escape"===e.key&&t.classList.remove("active-menu")})),window.addEventListener("click",(e=>{const o=e.target;o.closest("menu")||o.closest(".menu")||t.classList.remove("active-menu")}))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),n=o.querySelector(".popup-close"),c=document.querySelector(".popup-content"),r=document.documentElement.clientWidth;t.forEach((t=>{t.addEventListener("click",(()=>{r<=768?o.style.display="block":e({duration:1e3,timing:e=>e,draw(e){o.style.display="block",c.style.opacity=e}})}))})),n.addEventListener("click",(()=>{o.style.display=""})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&(o.style.display="")})),window.addEventListener("click",(e=>{const t=e.target;t.closest("popup")||t.closest(".popup-btn")||(o.style.display="")}))})(),(()=>{const e=document.querySelector("body"),t=document.querySelector('a[href="#service-block"]'),o=document.querySelector("#service-block"),n=document.querySelector("main"),c=document.querySelector("menu").querySelectorAll("a"),r=document.createElement("div");r.innerHTML='<img src="./images/up-arrow.svg" alt="" />',r.style.cssText="\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    width: 30px;\n    height: 30px;\n    z-index: 100;\n    cursor: pointer;\n  ",e.append(r);const l=e=>{e.preventDefault(),document.querySelector(e.target.hash).scrollIntoView({block:"start",behavior:"smooth"})};c.forEach(((e,t)=>{t>0&&e.addEventListener("click",l)})),t.addEventListener("click",(e=>{e.preventDefault(),o.scrollIntoView({block:"start",behavior:"smooth"})})),r.addEventListener("click",(e=>{e.preventDefault(),n.scrollIntoView({block:"start",behavior:"smooth"})})),window.addEventListener("scroll",(()=>{const e=document.documentElement.scrollTop;r.style.display=e<=900?"none":""}))})(),document.querySelectorAll(".calc-item").forEach(((e,t)=>{t>0&&e.addEventListener("change",(()=>{/[^\d]/g.test(e.value)?(e.value="Ввeдите число",e.style.cssText="\n          border-color: red;\n          color: red;\n          "):e.style.borderColor="green"})),e.addEventListener("click",(()=>{e.value="",e.removeAttribute("style")}))})),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab"),n=document.documentElement.clientWidth;e.addEventListener("click",(e=>{e.target.closest(".service-header-tab")&&t.forEach(((t,c)=>{const r=e.target.closest(".service-header-tab");if(t===r&&n>768){let e=0;t.classList.add("active"),o[c].classList.remove("d-none"),o[c].style.opacity=0;const n=setInterval((()=>{e+=.1,o[c].style.opacity=e,o[c].style.opacity>=1&&clearInterval(n)}),40)}else t===r&&n<=768?(t.classList.add("active"),o[c].classList.remove("d-none")):(t.classList.remove("active"),o[c].classList.add("d-none"),o[c].removeAttribute("style"))}))}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n,c=0;t.forEach(((e,t)=>{o.innerHTML+=`<li class="dot ${0===t?"dot-active":""}"></li>`}));const r=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},s=()=>{const e=document.querySelectorAll(".dot");r(t,c,"portfolio-item-active"),r(e,c,"dot-active"),c++,c>=t.length&&(c=0),l(t,c,"portfolio-item-active"),l(e,c,"dot-active")},a=(e=1500)=>{n=setInterval(s,e)};e.addEventListener("click",(e=>{const o=document.querySelectorAll(".dot");e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(r(t,c,"portfolio-item-active"),r(o,c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(c=o)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),l(t,c,"portfolio-item-active"),l(o,c,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&a(2e3)}),!0),a(2e3)})(),((t=100)=>{const o=document.querySelector(".calc-block"),n=o.querySelector(".calc-type"),c=o.querySelector(".calc-square"),r=o.querySelector(".calc-count"),l=document.getElementById("total"),s=o.querySelector(".calc-day");o.addEventListener("input",(o=>{o.target!==n&&o.target!==c&&o.target!==r&&o.target!==s||(()=>{const o=+n.options[n.selectedIndex].value,a=+c.value;let i=0,d=1,u=1;r.value>1&&(d+=r.value/10),s.value&&s.value<5?u=2:s.value&&s.value<10&&(u=1.5),i=n.value&&c.value?t*o*a*d*u:0,e({duration:1e3,timing:e=>e,draw(e){l.textContent=Math.round(i*e)}})})()}))})()})();