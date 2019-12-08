
/*window.onload = checkit;

function checkit() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thanks for signing up!");
      return false;
   }
   
   document.getElementById("delivery").onclick = turnOnDelivery;
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
}*/

function  submitInfo() {
	var userName = document.getElementById("nameB");
	var email = document.getElementById("eMail");
	(userName.value && email.value) ? alert("Thanks for signing up!") : alert("Please fill in missing info");

}

