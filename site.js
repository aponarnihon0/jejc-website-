(()=>{"use strict";
const h=document.querySelector(".site-header"),m=document.querySelector(".menu-btn"),n=document.querySelector(".nav-links");
const onScroll=()=>h&&h.classList.toggle("scrolled",scrollY>10);onScroll();addEventListener("scroll",onScroll,{passive:true});
if(m&&n){m.addEventListener("click",()=>{const o=n.classList.toggle("open");m.setAttribute("aria-expanded",String(o))});n.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{n.classList.remove("open");m.setAttribute("aria-expanded","false")}))}
const els=[...document.querySelectorAll(".reveal")];if("IntersectionObserver"in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{rootMargin:"0px 0px -8%"});els.forEach(e=>io.observe(e))}else els.forEach(e=>e.classList.add("in"));
document.querySelectorAll("[data-mail-form]").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(f),name=d.get("name")||"",phone=d.get("phone")||"",service=d.get("service")||"",message=d.get("message")||"";const body=`Name: ${name}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`;location.href=`mailto:info@jejcbd.com?subject=${encodeURIComponent("JEJC Consultation Request")}&body=${encodeURIComponent(body)}`}));
})();
