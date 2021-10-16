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
};

let register = document.getElementById('register'),
	signer = document.getElementById('signer'),
	seller = document.getElementById('seller'),
	buyer = document.getElementById('buyer');
window.onclick = function(event) {
	if (event.target == register) {
		register.style.display = "none";
		signer.style.display = "none";
		seller.style.display = "block";
		buyer.style.display = "block";
	}
}