// ==UserScript==
// @name         Winter Bash 2020 Bug
// @namespace    https://github.com/SmartManoj/smart-user-scripts
// @version      0.1
// @description  https://meta.stackexchange.com/questions/357921/1-new-hat-notification-doesnt-go-away
// @author       SmartManoj
// @match        *://*.stackoverflow.com/*
// @match        *://*.stackexchange.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.mathoverflow.net/*
// @updateURL     https://raw.githubusercontent.com/SmartManoj/SmartUserScripts/master/Winter_Bash_2020_Bug.user.js
// ==/UserScript==

var $ = unsafeWindow.jQuery;
var b = $('.wb-unread-count.indicator-badge');
if (b.text()=="1"){
    b.css({'display': 'none'});
}
