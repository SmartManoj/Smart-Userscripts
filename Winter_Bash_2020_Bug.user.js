// ==UserScript==
// @name         Winter Bash 2020 Bug
// @namespace    https://github.com/SmartManoj/smart-user-scripts
// @version      0.5
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
var selector = '.wb-unread-count.indicator-badge';

$(function() {
    return;
    var checkExist = setInterval(function() {
        if ($(selector).length) {
            console.log("Exists!");
            setTimeout(function(){
                var b = $(selector);
                if (b.text()=="1"){
                    b.css({'display': 'none'});
                }
                console.log("Fixed!");
            }, 1000);
            clearInterval(checkExist);
        }
    }, 100);
});
