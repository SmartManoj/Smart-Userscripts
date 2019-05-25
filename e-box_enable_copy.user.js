// ==UserScript==
// @name         Enable Copy Paste
// @version      0.3
// @description  try to take over the world!
// @author       SmartManoj
// @match        http://app.e-box.co.in/*
// @namespace   https://github.com/SmartManoj
// @updateURL   https://raw.githubusercontent.com/SmartManoj/SmartUserScripts/raw/master/e-box_enable_copy.user.js
// @downloadURL https://raw.githubusercontent.com/SmartManoj/SmartUserScripts/raw/master/e-box_enable_copy.user.js
// @grant    GM_setClipboard
// @grant  unsafeWindow
// @run-at      document-idle
// ==/UserScript==
function sleep(s) {
  return new Promise(resolve => setTimeout(resolve, 1000*s));
}
unsafeWindow.rt=function (){
    rt2.style.display='inline';
    try{
copyText();;    rt2.value=clipbordText;
    }catch(e){rt2.value=document.querySelector('.editor').innerText}
 document.execCommand('copy');rt2.style.display='none';
GM_setClipboard(clipbordText);console.log(clipbordText);
}
$('body').append('<button style="display:none" onclick="rt()">C</button><textarea style="display:none" id=rt2></textarea>');
document.onkeydown=function(e){
    console.log(e.key);
    if (e.altKey && e.key=='c')
    {rt()}
};
(async function() {
    

var allowPaste = function(e){

  e.stopImmediatePropagation();
    unsafeWindow.copyText();

  return true;
};

document.addEventListener('cut', allowPaste, true);
document.addEventListener('copy', allowPaste, true);
document.addEventListener('paste', allowPaste, true);
try{
for(i=0;i<5 && !pasteTextModal ;i++)
await sleep(2);
    pasteTextModal.remove();
    copyTextModal.remove();}catch(e){}
    
    // Your code here...
})();
window.onkeydown=function(e){
    if (e.altKey && e.key =='b')
    {pasteTextModal.remove();
    copyTextModal.remove();}
}