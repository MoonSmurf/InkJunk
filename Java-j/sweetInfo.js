"use strict"
/*
Mary Ashley Kovacevich
12-10-2019
sweetInfo.js
display more info button
*/
var infoDark = document.getElementById("darkProfile") ;
function moreInfoDark() {
  if (infoDark.style.display === "block") {
    infoDark.style.display = "none";
  }else{
    infoDark.style.display = "block" ;
  }
}
