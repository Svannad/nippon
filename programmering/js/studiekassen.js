var header = document.getElementById("btnGallery1");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var header = document.getElementById("btnGallery2");
var btns = header.getElementsByClassName("bto");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activ");
  current[0].className = current[0].className.replace(" activ", "");
  this.className += " activ";
  });
}

function Noti(){
  window.alert("StudieKassen er Tilføjet til din Kurv")
  top.location.href="kurv.html"
}