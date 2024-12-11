// ==UserScript==
// @name        GitHub shortcuts
// @namespace   Violentmonkey Scripts
// @match       https://github.com/*
// @grant       none
// @version     1.0
// @author      Smart Manoj
// @description 12/11/2024, 11:58:46 AM
// ==/UserScript==



document.addEventListener("keydown", function(event) {
    if (event.altKey && event.key === "d") { // Check if the 'd' key is pressed
        const url = `x-github-client://openRepo/${location.href}`;
        window.open(url);
    }
});
