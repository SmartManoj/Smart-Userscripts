// ==UserScript==
// @name         WhatsApp
// @namespace    http://smartmanoj.blogspot.com/2018/07/smart-whatsapp-web.html
// @version      0.1
// @description  try to take over the world!
// @author       SmartManoj
// @match        https://web.whatsapp.com/
// @grant        none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

//disable csp; Firefox ->  about:config security.csp.enable;false
//disable csp; Chrome -> https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden
function sleep(s){
    return new Promise(r=>setTimeout(r,s*1000));
}
window.api=function(){
    var e=$('#mob')[0].value;
    if (e.length==10)e='91'+e;
    rt.href=`https://api.whatsapp.com/send?phone=${e}&text=Hi`
    rt.click()
}

function r(){
console.log('cool');
    document.querySelector('[title="Status"]').remove();
}
document.onkeydown=function(e) {

if (e.ctrlKey && e.key=='.'){
    r();

 }
};
(async function() {
    while(!document.querySelector('[title="Status"]')){
    await sleep(6);
    }
    r();
    $('#side').prepend($('<input id=mob  value=8807328487 type=text><button onclick=api()>C2c</button> <a style="display:none" id=rt href="https://bit.ly/my3blog">C2C</a>'));
})();
