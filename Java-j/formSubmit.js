/*
Mary Ashley Kovacevich
12-1-2019
test.js
JavaScript setup for Form validation
*/


"use strict"

window.onload = init ;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thanks for signing up!") ;
      return false ;
   }
}

var kaizuUpdates = document.getElementById("kaizuForm") ;

kaizuUpdates.addEventListener("submit", (e) => {
  e.preventDefault() ;
  console.log("OMG It worked!") ;
}) ;
