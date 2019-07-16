function sleep(s){
    return new Promise(r=>setTimeout(r,s*1000));
}

_sleep



function get_param( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results === null )return "";
  else return results[1];
}