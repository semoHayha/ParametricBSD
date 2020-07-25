// Selecting html canvas element.
let canvas = document.querySelector("canvas");

// Setting Height and width of the selected element( in our case it is canvas).
canvas.height = window.innerHeight;
canvas.width  = window.innerWidth;

// context is used to draw stuff(shapes) on the html canvas.
let context = canvas.getContext('2d');

// doing some shit with context

let k1 = 0,
	k2 = 0,
	k3 = 0,
	k4 = 0;

let s1 = document.getElementById("s1"),
	s2 = document.getElementById("s2"),
	s3 = document.getElementById("s3"),
	s4 = document.getElementById("s4");

let x1 = document.getElementById("x1"),
	y1 = document.getElementById("y1"),
	x2 = document.getElementById("x2"),
	y2 = document.getElementById("y2");

x1.innerHTML = s1.value;
y1.innerHTML = s2.value;
x2.innerHTML = s3.value;
y2.innerHTML = s4.value;

s1.oninput = function() {
	k1 = this.value;
	x1.innerHTML = this.value;
}
s2.oninput = function() {
	k2 = this.value;
	y1.innerHTML = this.value;
}
s3.oninput = function() {
	k3 = this.value;
	x2.innerHTML = this.value;
}
s4.oninput = function() {
	k4 = this.value;
	y2.innerHTML = this.value;
}

let r = 150;
let t = 0.01;
context.translate(window.innerWidth/2, window.innerHeight/2);


function animate() {
	requestAnimationFrame(animate);
	context.clearRect(-window.innerWidth/2, -window.innerHeight/2, window.innerWidth, window.innerHeight);
	for(let i = 0; i < 100; i++) {
		let x1 = r*Math.sin(k1*t)
		let y1 = r*Math.cos(k2*t)
		let x2 = r*Math.sin(k3*t)
		let y2 = r*Math.cos(k4*t)

		context.beginPath();
		context.strokeStyle = "cyan";
		context.arc(0, 0, 150, 0, Math.PI*2);
		context.stroke();

		context.beginPath();
		context.strokeStyle = 'cyan';
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.stroke();
		t += .1;
	}
}
animate();
