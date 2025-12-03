/*
 * Starter file 
 */
(function() {
  "use strict";

function handleReset(){
	document.getElementById("input-text").value = "";
}

function shiftCypher(){
	let Input = document.getElementById("input-text").value;
	let Output = "";
	for(let I=0; I<Input.length; I++){
		let charCode = Input.charCodeAt(I)
		if(charCode<65||(charCode>90&&charCode<97)||charCode>122){
			Output+= Input[I];
			continue;
			}
		if(Input[I]==="z"){
			Output+= "a";
		}else if(Input[I]==="Z"){
			Output+= "A";
		}else{
			Output+= String.fromCharCode(Input.charCodeAt(I) + 1)
		}
	}
	document.getElementById("result").textContent = Output;
}

window.addEventListener("load", init);

function init() {
	console.log("Window loaded!");
    // set up event handlers for UI elements
	document.getElementById("reset").onclick = handleReset;
	document.getElementById("encrypt-it").onclick = shiftCypher;
  }

})();
