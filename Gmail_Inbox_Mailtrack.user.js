// ==UserScript==
// @name        Gmail Inbox Mailtrack
// @version     0.1
// @description try to take over the world!
// @author      SmartManoj
// @namespace   https://github.com/SmartManoj
// @match       https://mail.google.com/mail/u/*
// @updateURL   https://raw.githubusercontent.com/SmartManoj/SmartUserScripts/master/Gmail_Inbox_Mailtrack.user.js
// ==/UserScript==



// Usage
//c  - To open compose box
//Shift + ? - To turn on keyboard shortcuts for Gmail


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
document.onkeydown=async function(e) {
    'use strict';
if ( e.key=='c'){
    console.log('MT');
    while(!document.querySelector('div#mt-signature')){
    await sleep(1000);
    }
    document.querySelector('div#mt-signature').remove();
}


}
