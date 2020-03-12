// ==UserScript==
// @name         AutoFill convocation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       SmartManoj
// @match        http://grad2020.kongu.edu/convocation.php
// @updateURL   https://raw.githubusercontent.com/SmartManoj/SmartUserScripts/master/autoFill_convocation.user.js
// @grant        none
// ==/UserScript==

window.onload=(function() {
    'use strict';
var d={
  "nam": "",
  "presentstatus": "Employed",
  "exam": "NIL",
  "score": "NIL",
  "feedback": "https://t.me/KEC_2_0",
  "submit": "submit",
  "Reset": "Reset"

}
    document.querySelectorAll('[name]').forEach(function(e){if(!e.value)e.value=d[e.name] || '';});
    document.querySelector('[name=degree]').value="BE"
    depart();
    document.querySelector('[name=dept]').value="COMPUTER SCIENCE AND ENGINEERING",
    roll()
    document.querySelector('[name=cap]').value=document.querySelector('[name=key]').value

    prstvalidate();
    // Your code here...
});
