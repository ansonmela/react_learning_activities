// document.getElementById("one").addEventListener('click', function() {
// 	console.log('you clicked the button');
// });

document.getElementById("one").addEventListener('load', function() {
	document.getElementById("one").innerText = "click me";
});

document.getElementById("two").addEventListener('mouseover', function() {
	document.getElementById("two").innerText = 'you hovered over me';
});

document.body.addEventListener('timeEvent', stateTime);

function stateTime(e) {
	alert("event time is: " + e.detail);
}

var myEvent = new CustomEvent("timeEvent", {
	'detail': new Date()
});

document.getElementById('theme').addEventListener('click', function() {
  document.body.classList.toggle('theme2');
});

