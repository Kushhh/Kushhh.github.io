var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var settings = {
	amp: 69,
	// period: 16,
	period: 14,
	hsl: true,
	speed: 4,
	stroke: false,
	//mouse: false
}
var W = window.innerWidth;
var H = window.innerHeight;

var gui = new dat.GUI();
gui.add(settings, 'hsl');
gui.add(settings, 'stroke', 0.5, 20);
gui.add(settings, 'amp', 0, 140).step(1);;
gui.add(settings, 'period', 0, 80).step(1);
gui.add(settings, 'speed', 0.5, 40);



function drawCircle(n, radius, delay, color, centerX, centerY) {
	context.fillStyle = color;
	centX = centerX || window.innerWidth/2;
	centY = centerY || window.innerHeight/2;
	context.beginPath();
	for (var i = 0; i < n; i++) {
		var x = centX + (radius + settings.amp * Math.sin(settings.period * i * 2 * Math.PI / (n - 1))) * Math.sin(i * 2 * Math.PI / (n - 1) + delay);
		var y = centY + (radius + settings.amp * Math.sin(settings.period * i * 2 * Math.PI / (n - 1))) * Math.cos(i * 2 * Math.PI / (n - 1) + delay);
		if (i == 0) {
			context.moveTo(x, y);
		} else {
			context.lineTo(x, y);
		}

	}


	context.closePath();
	if (settings.stroke) {
		context.fillStyle = "#000000";
		context.strokeStyle = "#ffffff";
		context.stroke();
		context.fill();
	} else {
		context.fill();
	}
}

var mousePos;

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}
document.body.addEventListener('mousemove', function (evt) {
	mousePos = getMousePos(canvas, evt);
}, false);


var time = 0;

function draw() {
	time++;
	context.clearRect(0, 0, 800, 800);
	context.fillStyle = '#000000';
	context.fillRect(0, 0, 800, 800);

	var offset;
	if (mousePos) {
		offset = {
			x: (mousePos.x - 400) / 400,
			y: (mousePos.y - 400) / 400
		}
	} else {
		offset = {
			x: 0,
			y: 0
		};
	}
	if (!settings.mouse) {
		offset = {
			x: 0,
			y: 0
		};
	}
	// weight = {x:Math.sin(time/100),y:Math.cos(time/100)};
	for (var i = 0; i < 29; i++) {
		var col = (i % 2) ? 'black' : 'white';
		if (settings.hsl) {
			col = 'hsl(' + i * 5 + ', 70%, 66%)';
		}
		drawCircle(400, 280 - i * 10, settings.speed * time / (1000 + 50 * i), col, 400 - offset.x * 20 * i / 10, 400 - offset.y * 20 * i / 10);
	}


	window.requestAnimationFrame(draw);
}

draw();