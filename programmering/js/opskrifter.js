filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("opskriftCard");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }

  var btnContainer = document.getElementById("filter");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var btnvar = document.getElementById("fav");
function Toggle(){
  {btnvar.style.color = "#cc4e4a"}
  {window.alert("Du har føjet Ramén til Favoritter")}
}

var btnvar1 = document.getElementById("fav1");
function Toggle1(){
  {btnvar1.style.color = "#cc4e4a"}
  {window.alert("Du har føjet Dumpling til Favoritter")}
}

var btnvar2 = document.getElementById("fav2");
function Toggle2(){
  {btnvar2.style.color = "#cc4e4a"}
  {window.alert("Du har føjet Sushi til Favoritter")}
}

var btnvar3 = document.getElementById("fav3");
function Toggle3(){
  {btnvar3.style.color = "#cc4e4a"}
  {window.alert("Du har føjet Wasabi til Favoritter")}
}

var btnvar4 = document.getElementById("fav4");
function Toggle4(){
  {btnvar4.style.color = "#cc4e4a"}
  {window.alert("Du har føjet Kartofel Salat til Favoritter")}
}

var btnvar5 = document.getElementById("fav5");
function Toggle5(){
  {btnvar5.style.color = "#cc4e4a"}
  {window.alert("Du har føjet Stegte Risboller til Favoritter")}
}