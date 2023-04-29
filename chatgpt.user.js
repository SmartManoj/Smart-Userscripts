// ==UserScript==
// @name         Save & Submit shortcut for ChatGPT
// @namespace    https://smartmanoj.com/
// @version      1.0
// @description  Control+Enter Save & Submit
// @match        https://chat.openai.com/*
// @updateURL   https://raw.githubusercontent.com/SmartManoj/SmartUserScripts/master/chatgpt.user.js

// @grant        none
// ==/UserScript==

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.keyCode == 13) {
        document.querySelector('div > button.btn.relative.btn-primary.mr-2').click();
    }
});
