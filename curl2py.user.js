// ==UserScript==
// @name        curl2py
// @version     0.1
// @description try to take over the world!
// @author      SmartManoj
// @namespace   https://github.com/SmartManoj
// @match       https://curl.trillworks.com/#python
// @updateURL   https://raw.githubusercontent.com/SmartManoj/SmartUserScripts/raw/master/curl2py.user.js
// @grant       GM_setClipboard
// ==/UserScript==
function copy(a){
	console.log(a);
	GM_setClipboard(a)
}
unsafeWindow.onkeydown=function(e){
	if (e.altKey && e.key=='c'){
		copy(document.querySelector('#generated-code').value+'\nprint(response.text)')
		
	}
}
