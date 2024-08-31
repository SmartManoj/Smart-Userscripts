// ==UserScript==
// @name         Claude.ai Shortcuts
// @namespace    Smart User Scripts
// @version      0.3
// @description  Open Claude.ai new chat with Ctrl+Shift+O, Focus Input with Shift+Escape
// @match        https://claude.ai/*
// @grant        none
// @author       Smart Manoj
// @updateURL    https://raw.githubusercontent.com/SmartManoj/smart-user-scripts/main/claude.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Open new chat with Ctrl+Shift+O
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'O') {
            e.preventDefault();
            window.open('https://claude.ai/chat/new', '_self');
        }
    });

    // Focus on the contenteditable div with Shift+Escape
    document.addEventListener('keydown', function(e) {
        if (e.shiftKey && e.key === 'Escape') {
            e.preventDefault();
            // Query the contenteditable div
            const editableDiv = document.querySelector('div[contenteditable="true"]');
            if (editableDiv) {
                editableDiv.focus();
            }
        }
    });
})();
