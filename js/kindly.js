(function(){let isOpen=!1;document.addEventListener("kindly:ui",()=>{if(isOpen)return;isOpen=!0;const chatContainer=document.getElementById("kindly-chat-api"),chatButton=document.querySelector("#kindly-chat-api > div")?.shadowRoot?.querySelector("#ChatButtonContainer");if(!chatContainer||!chatButton)return;chatContainer.style.zIndex=2147483632;const timeout=setInterval(()=>{window.getComputedStyle(chatButton).opacity!=="0"&&(clearTimeout(timeout),chatContainer.style.removeProperty("z-index"),isOpen=!1)},250)}),document.addEventListener("drawerOrModalOpen.drawer-cart",()=>{window.kindlyChat?.hideBubble(),window.kindlyChat?.closeChat()}),document.addEventListener("kindly:load",event=>{window.kindlyChat.isBrowserCompatible&&setTimeout(()=>{window.kindlyChat.hideBubble()})}),document.addEventListener("topMenuChatBubbleClick",()=>{window.localStorage?.getItem("startedManualChatAt")?window.zE.activate():window.kindlyChat.openChat()})})();
//# sourceMappingURL=/cdn/shop/t/91/assets/kindly.js.map?v=7974455345386536621741784929
