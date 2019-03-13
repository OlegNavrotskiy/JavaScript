'use strict';


function testKey(e)
{
  // Make sure to use event.charCode if available
  var key = (typeof e.charCode == 'undefined' ? e.keyCode : e.charCode);

  // Ignore special keys
  if (e.ctrlKey || e.altKey || key < 32)
    return true;

  key = String.fromCharCode(key);
  return /\w/.test(key);
}
