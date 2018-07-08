// ==UserScript==
// @name         WhatsApp
// @namespace    http://smartmanoj.blogspot.com/2018/07/smart-whatsapp-web.html
// @version      0.1
// @description  Awesome Whatsapp Features
// @author       SmartManoj
// @match        https://web.whatsapp.com/*
// @grant        GM_addStyle
// @grant        unsafeWindow
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
    rt.href=`https://api.whatsapp.com/send?phone=${e}&text=Hi`;
    rt.click();
}
window.api2=function(e){
    e = e || window.event;
      if(e.key == 'Enter') {
        window.api();
    }
}
unsafeWindow.api=api;
unsafeWindow.api2=api2;
GM_addStyle(".hidden{display:none}");
function r(){
console.log('cool');
    document.querySelector('[title="Status"]').remove();
}
document.onkeydown=function(e) {

if (e.ctrlKey && e.key=='.'){
    r();
 }
if (e.altKey && e.key=='c'){
    $('#c2c').toggleClass('hidden');
 }
};
(async function() {
    while(!document.querySelector('[title="Status"]')){
    await sleep(2);
    }
    r();
       $('#side').prepend($(`<div id="c2c" class='hidden'>
<input id=mob style="width:90%;" onkeydown=api2(event) placeholder="Enter New Mobile Number to Chat" type=text>
<button  style="top: 7px;position: relative;" onclick=api()><span data-icon="send" class="">
<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path fill="#263238" fill-opacity=".45" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z">
</path></svg></span></button>
<a style="display:none" id=rt href="https://bit.ly/my3blog">C2C</a><div>`));
})();
