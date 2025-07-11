// ==UserScript==
// @name         AI Studio: Press Enter to Run
// @auther       Smart Manoj
// @version      1.0
// @description  Pressing Enter clicks the Run button
// @match        https://aistudio.google.com/*
// @grant        none
// ==/UserScript==
(function () {
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            const btn = document.querySelector('.run-button-content');
            if (btn) {
                e.preventDefault();
                btn.click();
            }
        }
    }, true);
})();
