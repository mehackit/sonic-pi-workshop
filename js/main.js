audiojs.events.ready(function() {
  var as = audiojs.createAll();
});

$( document ).ready(function() {
  if (document.getElementById("keyboard")) {
    var a = new AudioSynthView();
    a.draw();
  }
});