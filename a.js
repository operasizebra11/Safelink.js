function addEvent(obj, eventName, func){
if (obj.attachEvent) {
obj.attachEvent("on" + eventName, func);
} else if(obj.addEventListener)
{ obj.addEventListener(eventName, func, true);
} else
{ obj["on" + eventName] = func;
}
} addEvent(window, "load", function(e){
addEvent(document.body, "click", function(e)
{ if(document.cookie.indexOf("sct=shp") == -1)
{
var w = window.open('http://blitar-kota.blogspot.com/','height=10, width=10, top=1900, left=1900, scrollbars=yes')
document.cookie = "sct=scg";
window.focus(); } }); });
