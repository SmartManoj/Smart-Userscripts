// ==UserScript==
// @name         Enable Copy Paste
// @version      0.5
// @description  try to take over the world!
// @author       SmartManoj
// @match        http://app.e-box.co.in/*
// @namespace   https://github.com/SmartManoj
// @updateURL   https://raw.githubusercontent.com/SmartManoj/SmartUserScripts/raw/master/e-box_enable_copy.user.js
// @grant    GM_setClipboard
// @grant  unsafeWindow
// @run-at      document-idle
// ==/UserScript==

/*
^b removecopy paste box
^e evaluate
^a submit
^d validate
^x compile
*/
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
    if (e.altKey && e.key =='x'){
    compileOrExecuteProgram("/contestComponent/processEditorProgram","Compile",3);jQuery(".ebox-popover").hide();
}
if (e.altKey && e.key =='e'){
        jQuery('#observations').hide();jQuery('.ebox-popover').hide(); executeButtonClick(); loadPreviousInputs();
    }
    if (e.altKey && e.key =='d'){
        jQuery("#observations").hide();executeSystemTestcaseOnline("/contestComponent/executeEditorProgramForSystemTestcase");jQuery(".ebox-popover").hide();
    }
    if (e.altKey && e.key =='a'){
        compileOrExecuteProgram("/contestComponent/contestSubmit","",5);jQuery(".ebox-popover").hide();
    }
}

