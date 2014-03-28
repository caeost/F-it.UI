
//todo: introspect upon found errors to find common places to remove, catch more errors, get around non propagating events
!function() {
  // http://stackoverflow.com/questions/2420970/how-can-i-get-selector-from-jquery-object/15623322#15623322
  !function(e,t){var n=function(e){var n=[];for(;e&&e.tagName!==t;e=e.parentNode){if(e.className){var r=e.className.split(" ");for(var i in r){if(r.hasOwnProperty(i)&&r[i]){n.unshift(r[i]);n.unshift(".")}}}if(e.id&&!/\s/.test(e.id)){n.unshift(e.id);n.unshift("#")}n.unshift(e.tagName);n.unshift(" > ")}return n.slice(1).join("")};e.fn.getSelector=function(t){if(true===t){return n(this[0])}else{return e.map(this,function(e){return n(e)})}}}(window.jQuery)
  
  var badbad = false,
      locoStorage = window.localStorage;
  
  locoStorage.fitUI || (locoStorage.fitUI = "");

  $("body").on("click", function(e) {
    //todo: use a promise!!! thats a good idea...
    if(badbad) {
      var $blame = $(e.target);
      $blame.remove();
      locoStorage.fitUI += (locoStorage.fitUI ? ", " : "") + $blame.getSelector();
      badbad = false;
    }
  });
  
  var doIt = function() {
   $(locoStorage.fitUI).remove();
  };
  doIt();
  window.onload = doIt;
  
  window.onerror = function() {
      badbad = true;
      return true;
  };
}()

