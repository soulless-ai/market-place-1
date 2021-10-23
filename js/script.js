"use strict";

let buttons = document.getElementsByClassName('butt'),
	forEach = Array.prototype.forEach;

forEach.call(buttons, function (b) {
	b.addEventListener('click', addElement);
});

function addElement(e) {
	let addDiv 	= document.createElement('div'),
		mValue 	= Math.max(this.clientWidth, this.clientHeight),
		rect 		= this.getBoundingClientRect(),
		sDiv 		= addDiv.style,
		px 		= 'px';

	sDiv.width = sDiv.height = mValue + px;
	sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
	sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;
	
	addDiv.classList.add('pulse');
	this.appendChild(addDiv);
	document.createElement('div');
};

let signer  = document.getElementById('signer'),
	register = document.getElementById('register'),
	seller   = document.getElementById('seller'),
	buyer   = document.getElementById('buyer');
window.onclick = function(event) {
	if (event.target == register) {
		signer.style.display = "none";
		register.style.display = "none";
		seller.style.display = "block";
		buyer.style.display = "block";
	}
}

function check(e,value) {
	//Check Charater
	let unicode = e.charCode? e.charCode : e.keyCode;
	if (value.indexOf(".") != -1) if ( unicode == 46 ) return false;
	if (unicode!=8) if ((unicode < 48 || unicode > 57) && unicode != 46) return false;
}
function checkLength() {
	let fieldLength = document.getElementById('unumber').value.length;
	//Suppose u want 4 number of character
	if (fieldLength <= 8){
		return true;
	}
	else
	{
		let str = document.getElementById('unumber').value;
			str = str.substring(0, str.length - 1);
		document.getElementById('unumber').value = str;
	}
}