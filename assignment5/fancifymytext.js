function biggify(){
	document.getElementById("textbox").style.fontSize = '24pt';
}

function fancify(){
	document.getElementById("textbox").style.color = "blue";
	document.getElementById("textbox").style.textDecoration = 'underline';
	document.getElementById("textbox").style.fontWeight = 'bold';
}

function boringify(){
	document.getElementById("textbox").style.color = "black";
	document.getElementById("textbox").style.textDecoration = 'none';
	document.getElementById("textbox").style.fontWeight = 'normal';
}

function mooify(){
	var splitText = document.getElementById("textbox").value.split(".");
	var mooText = splitText.join("-Moo.");
	document.getElementById("textbox").value = mooText;
}