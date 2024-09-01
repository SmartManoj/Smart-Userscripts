// ==UserScript==
// @name        Perplexity Shortcuts
// @namespace   Smart User Scripts
// @match       https://www.perplexity.ai/*
// @grant       none
// @version     1.0.0
// @author      Smart Manoj
// @description Perplexity Shortcuts to edit the query
// @updateURL   https://raw.githubusercontent.com/SmartManoj/SmartUserScripts/main/perplexity-shortcuts.user.js

// ==/UserScript==

(function() {
  // Wait for the DOM to be fully loaded
  window.addEventListener('load', function() {

    document.addEventListener('keydown', function(event) {

          if (event.ctrlKey && event.key === 'e') {
            event.preventDefault();
            document.querySelector('div.mt-sm.flex.items-center.justify-between > div.flex.items-center.gap-x-xs > button:nth-child(2)').click()
          }
        });
  });
})();
