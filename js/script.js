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

let signer   = document.getElementById('signer'),
	register  = document.getElementById('register'),
	seller    = document.getElementById('seller'),
	buyer     = document.getElementById('buyer');
window.onclick = function(event) {
	if (event.target == register) {
		signer.style.display   = "none";
		register.style.display = "none";
		seller.style.display   = "block";
		buyer.style.display    = "block";
	}
}

let inputEl = document.getElementById('unumber');
let goodKey = '0123456789+';
let checkInputTel = function(e) {
	let key = (typeof e.which == "number") ? e.which : e.keyCode;
	let start = this.selectionStart,
		end = this.selectionEnd;

	let filtered = this.value.split('').filter(filterInput);
	this.value = filtered.join("");

  /* Prevents moving the pointer for a bad character */
	let move = (filterInput(String.fromCharCode(key)) || (key == 0 || key == 8)) ? 0 : 1;
	this.setSelectionRange(start - move, end - move);
}

let filterInput = function(val) {
	return (goodKey.indexOf(val) > -1);
}
inputEl.addEventListener('input', checkInputTel);

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