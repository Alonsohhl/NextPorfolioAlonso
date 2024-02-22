(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3703:function(A,e,t){Promise.resolve().then(t.bind(t,4338)),Promise.resolve().then(t.bind(t,8782)),Promise.resolve().then(t.bind(t,79)),Promise.resolve().then(t.bind(t,6369)),Promise.resolve().then(t.t.bind(t,5250,23)),Promise.resolve().then(t.bind(t,9721)),Promise.resolve().then(t.t.bind(t,3232,23))},4338:function(A,e,t){"use strict";t.r(e);var s=t(3827),a=t(4090),i=t(9317),n=t(2404);let l={name:"",email:"",subject:"",message:""};e.default=()=>{let[A,e]=(0,a.useState)(l),[t,o]=(0,a.useState)({submitting:!1,status:null}),r=A=>{e(e=>({...e,[A.target.name]:A.target.value}))},[c,d]=(0,a.useState)(!1);(0,a.useEffect)(()=>{d(!0)},[]);let g=(A,t)=>{o({submitting:!1,status:{ok:A,msg:t}}),A&&e(l),setTimeout(()=>{o(A=>({...A,status:null}))},3e3)};return(0,s.jsx)("main",{className:"page-background ",children:(0,s.jsx)("div",{id:"content",className:"site-content",children:(0,s.jsxs)("div",{className:"content-holder center-relative content-1170",children:[(0,s.jsx)("h1",{className:"entry-title page-title center-text",children:"Contact Me"}),(0,s.jsx)("img",{className:"page-featured-image",src:n.Z.src,alt:""}),(0,s.jsxs)("div",{className:"one_half",children:[(0,s.jsx)("p",{children:"Passionate about crafting unique web experiences? I'm your go-to developer. With proficiency in TypeScript and a keen eye for modern design, I bring ideas to life. Connect for collaborative projects, innovative solutions, or just to chat about the latest in web development. Reach out, and let's create something amazing together!"}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{className:"my-info",children:[(0,s.jsx)("span",{children:"Address:"})," Victoria, BC, Canada ",(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:"Phone:"})," +1 250-880-5401 ",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"social-holder",children:[(0,s.jsx)("a",{className:"social-text",href:"https://www.linkedin.com/in/alonsohhl",children:"LINKEDIN"}),(0,s.jsx)("a",{className:"social-text",href:"https://github.com/Alonsohhl/",children:"GITHUB"})]})]}),(0,s.jsx)("div",{className:"one_half last",children:(0,s.jsxs)("form",{className:"contact-form",onSubmit:e=>{e.preventDefault(),o({submitting:!0}),(0,i.Z)({method:"post",url:"https://formspree.io/f/xrgnbojk",data:A,headers:{"Content-Type":"application/json"}}).then(A=>{g(!0,"Message Has Been Send")}).catch(A=>{g(!1,"Error occuars while sending")})},children:[(0,s.jsx)("div",{children:(0,s.jsx)("input",{id:"name",type:"text",name:"name",placeholder:"Name",required:!0,value:A.name,onChange:r})}),(0,s.jsx)("div",{children:(0,s.jsx)("input",{id:"contact-email",type:"email",name:"email",placeholder:"Email",pattern:"(?=.*[a-zA-Z])[a-zA-Z0-9]+@[a-zA-Z]+\\.[a-zA-Z]{2,}",required:!0,value:A.email,onChange:r})}),(0,s.jsx)("div",{children:(0,s.jsx)("input",{id:"subject",type:"text",name:"subject",placeholder:"Subject",value:A.subject,onChange:r})}),(0,s.jsx)("div",{children:(0,s.jsx)("textarea",{id:"message",name:"message",placeholder:"Message",required:!0,value:A.message,onChange:r})}),(0,s.jsx)("div",{className:"contact-submit-holder",children:(0,s.jsx)("input",{type:"submit",value:"SEND"})})]})}),(0,s.jsx)("div",{className:"clear"})]})})})}},6369:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return c}});var s=t(3827),a=t(4090),i=t(6657);t(3232);var n=t(3696),l=t(4992),o={src:"/_next/static/media/home_02B.d3f843e2.jpg"},r={src:"/_next/static/media/home_04.eadf9ee6.jpg"},c=function(A){let{children:e}=A,[t,c]=(0,a.useState)(0),d=()=>{c(0)};return(0,a.useEffect)(()=>{let A=document.getElementById("page-background");document.querySelectorAll(".site-content"),null==A||A.clientWidth},[]),(0,a.useEffect)(()=>{n.ZP.registerPlugin(l.i);let A=n.ZP.utils.toArray("section"),e=document.querySelector(".horizontal-container");return n.ZP.to(A,{xPercent:-100*(A.length-1),ease:"none",scrollTrigger:{trigger:".horizontal-container",pin:!0,scrub:1,snap:1/(A.length-1),end:()=>"+="+e.offsetWidth}}),()=>{l.i&&l.i.getAll().forEach(A=>A.kill())}},[]),(0,s.jsxs)(s.Fragment,{children:[e,(0,s.jsx)(i.Z,{open:0!==t,closeOnDocumentClick:!0,onClose:d,modal:!0,children:(0,s.jsxs)("div",{className:"my-popup",children:[(0,s.jsx)("div",{className:"close-popup-btn",role:"button",onClick:d,children:(0,s.jsx)("img",{src:"/_next/static/media/close.dd09ca4c.png",alt:"close icon"})}),1===t?(0,s.jsx)("div",{className:"popup-image-box",children:(0,s.jsx)("img",{src:o.src,alt:"portfolio image"})}):2===t?(0,s.jsx)("p",{className:"video-framer poped-up-item",onClick:close,children:(0,s.jsx)("iframe",{src:"https://player.vimeo.com/video/199192931",width:"100%",allow:"autoplay; fullscreen"})}):3===t?(0,s.jsx)("div",{className:"popup-image-box",children:(0,s.jsx)("img",{src:r.src,alt:"portfolio image"})}):4===t?(0,s.jsx)("p",{className:"video-framer poped-up-item",onClick:close,children:(0,s.jsx)("iframe",{src:"https://player.vimeo.com/video/199192931",width:"100%",allow:"autoplay; fullscreen"})}):(0,s.jsx)(s.Fragment,{})]})})]})}},2404:function(A,e){"use strict";e.Z={src:"/_next/static/media/contact.75f98b79.jpg",height:783,width:1566,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqwf/xAAbEAEAAgIDAAAAAAAAAAAAAAACAQMEEQASIf/aAAgBAQABPwAmcg4ENvapruS7ey5Op3z/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:4}},8782:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/home_alonso.48e2bce7.jpg",height:267,width:800,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAlwf/xAAcEAACAgIDAAAAAAAAAAAAAAABAgMRACEEMUH/2gAIAQEAAT8AWNOQkYmt6WTbEltl/e8//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:3}},79:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/work.f6159db9.jpg",height:341,width:1024,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAlQf/xAAaEAEBAAIDAAAAAAAAAAAAAAABAgAFESFB/9oACAEBAAE/ANpdByPdktPqmf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:3}}},function(A){A.O(0,[922,250,317,15,971,69,744],function(){return A(A.s=3703)}),_N_E=A.O()}]);