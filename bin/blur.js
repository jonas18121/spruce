const supportsCSSFilters=e=>{void 0===e&&(e=!1);const t=document.createElement("test");t.style.cssText=(e?"-webkit-":"")+"filter: blur(2px)";const s=0!=t.style.length,o=void 0===document.documentMode||document.documentMode>9;return s&&o},images=[];for(let e of document.querySelectorAll(".blurry-load")){const t={element:e,dataLarge:e.getAttribute("data-large")};images.push(t)}if(!supportsCSSFilters(!0)&&!supportsCSSFilters(!1))for(let e of images)e.element.src="",e.element.classList.add("no-blur"),e.element.classList.remove("blurry-load");window.addEventListener("DOMContentLoaded",()=>{for(let e of images){const t=new Image;t.src=e.dataLarge,t.onload=(()=>{e.element.src=t.src,e.element.classList.add("blur-out"),e.element.classList.remove("blurry-load")})}});
