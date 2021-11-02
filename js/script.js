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


let userNumber = document.getElementById('unumber');
let buyerNumber = document.getElementById('buyer_number');
let goodKey = '0123456789';
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

function show_hide_password(target){
	var input = document.getElementById('psw');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}


let filterInput = function(val) {
	return (goodKey.indexOf(val) > -1);
}
userNumber.addEventListener('input', checkInputTel);
buyerNumber.addEventListener('input', checkInputTel);

$.fn.capitalize = function () {
	$.each(this, function () {
			let split = this.value.split(' ');
			for (var i = 0, len = split.length; i < len; i++) {
				split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
		}
		this.value = split.join(' ');
	});
	return this;
};

$('textarea').on('keyup', function () {
	$(this).capitalize();
}).capitalize();

