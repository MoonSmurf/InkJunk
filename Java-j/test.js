/*
Mary Ashley Kovacevich
12-1-2019
test.js
JavaScript setup for Form validation
*/
"use strict"
window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thanks for signing up!");
      return false;
   }

   document.getElementById("submit").onclick = turnOnDelivery;
   document.getElementById("pickup").onclick=turnOnPickup;
}

function turnOnDelivery() {
   document.getElementById("addressBox").disabled=false;
   document.getElementById("delBox").disabled=false;
   document.getElementById("pickupBox").disabled=true;
}

function turnOnPickup() {
   document.getElementById("addressBox").disabled=true;
   document.getElementById("delBox").disabled=true;
   document.getElementById("pickupBox").disabled=false;
}

/*var smallForm = document.getElementById("kaizuForm");

smallForm.addEventListener("submit", (e) =>{
  e.preventDefault();

  //console.log("OMG It worked!");
});

var kaizuUpdates = document.getElementById("kaizuForm");

kaizuUpdates.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("OMG It worked!");
});
function popUpConfirm() {
  alert("Thanks for signing up!");
}*/
