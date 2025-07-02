// ==UserScript==
// @name         Reddit Code Highlighter
// @namespace    smartmanoj
// @version      1.3
// @description  Enable dark syntax highlighting for code on Reddit
// @match        https://www.reddit.com/*
// @match        https://old.reddit.com/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @require      https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js
// @resource     hljsCSS https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/monokai-sublime.min.css
// ==/UserScript==

(function () {
  'use strict';

  // Load and apply highlight.js theme CSS
  const css = GM_getResourceText("hljsCSS");
  GM_addStyle(css);

  // Wait for Reddit to load content
  const applyHighlighting = () => {
    const blocks = document.querySelectorAll("pre");
    if (blocks.length === 0) {
      setTimeout(applyHighlighting, 500); // wait for content to load
      return;
    }

    blocks.forEach(pre => {
      if (!pre.querySelector("code")) {
        const code = document.createElement("code");
        code.textContent = pre.textContent;
        pre.innerHTML = "";
        pre.appendChild(code);
      }
    });

    setTimeout(() => hljs.highlightAll(), 50); // wait for DOM changes
    console.log("✅ Highlight.js");
  };

  applyHighlighting();
})();
