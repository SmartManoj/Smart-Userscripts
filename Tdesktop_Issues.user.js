// ==UserScript==
// @name        Tdesktop Issues
// @version     0.1
// @description try to take over the world!
// @author      SmartManoj
// @namespace   https://github.com/SmartManoj
// @match       https://github.com/telegramdesktop/tdesktop/issues/new*
// @updateURL   https://raw.githubusercontent.com/SmartManoj/SmartUserScripts/master/Tdesktop_Issues.user.js
// ==/UserScript==
function get_param( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results === null )return "";
  else return results[1];
}
function sleep(s){
    return new Promise(r=>setTimeout(r,s*1000));
}

(async function() {

if (get_param('template')=='BUG_REPORT.md')
a=`<!--
Thanks for reporting issues of Telegram Desktop!

To make it easier for us to help you please enter detailed information below.
-->
### Steps to reproduce
1.
2.
3.

### Expected behaviour
<!--Tell us what should happen -->

### Actual behaviour
<!--Tell us what happens instead -->

### Configuration
**Operating system:** Windows 10

**Version of Telegram Desktop:** 1.7.14

**Used theme**: Midnight

<details><summary><b>Logs</b>:</summary>
Insert log.txt here (if necessary)
</details>`;
else if (get_param('template')=='FEATURE_REQUEST.md')
a=`### Is your feature request related to a problem?
<!-- A clear and concise description of what the problem is. -->

### Describe the solution you'd like
<!-- A clear and concise description of what you want to happen. -->

### Describe alternatives you've considered

<!-- A clear and concise description of any alternative solutions or features you've onsidered. -->

### Additional context
<!-- Add any other context or screenshots about the feature request here. -->`;
    // Your code here...
else a='';
sleep(2);
    console.log('1',issue_body);
while(!issue_body){
    await sleep(2);
    }
    console.log(issue_body);
issue_body.value=a;

})();

