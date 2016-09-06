$(document).ready(function blink(){
	var name = document.getElementById("blinking");
	name.style.opacity = name.style.opacity == 1? 0 : 1;
	setTimeout(blink,1000);
});