document.addEventListener("keydown", keyPressed);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var controlerX_p1 = 0;
var controlerY_p1 = 1;
var controlerX_p2 = 0;
var controlerY_p2 = -1;

ctx.fillStyle = "black";
ctx.fillRect(0,0,c.width, c.height);

var player01 = new motorCycle(c.width / 2, 15, controlerX_p1, controlerY_p1, "blue");
var player02 = new motorCycle(c.width / 2, c.height - 15, controlerX_p2, controlerY_p2, "yellow")

function motorCycle(x, y, dx, dy, color) {
	this.x = x;
	this.y = y;
	this.color = color;
	this.dx = dx;
	this.dy = dy;

	this.drawMotorcycle = function() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, 10, 10);
	}
	this.update = function(dx, dy) {
		this.x = this.x + this.dx;
		this.y = this.y + this.dy;

		if (this.y + 10 == c.height) {
			alert("Game Over!");
			clearCanvas();
			return;
		}
		if (this.y - 10 == 0) {
			alert("Game Over!");
			clearCanvas();
			return;
		}
		if (this.x + 10 == c.width) {
			alert("Game Over!");
			clearCanvas();
			return;
		}
		if (this.x - 10 == 0) {
			alert("Game Over!");
			clearCanvas();
			return;
		}
	}
}

function draw() {
	player01.update(controlerX_p1, controlerY_p1);
	player01.drawMotorcycle();
	
	player02.update(controlerX_p2, controlerY_p2);
	player02.drawMotorcycle();

	window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);

function clearCanvas() {
   ctx.fillStyle = "black";
   ctx.fillRect(0, 0, c.width, c.height);
}

function keyPressed(event) {
    console.log(event);

    if (event.key == "ArrowUp") {
        controlerY_p1 = -1;
    } else if (event.key == "ArrowDown") {
        controlerY_p1 = 1;
    } else if (event.key == "ArrowLeft") {
        controlerX_p1 = -1;
    } else if (event.key == "ArrowRight") {
        controlerX_p1 = 1;
    }

    if (event.key == "w") {
    	controlerY_p2 = -1;
    } else if (event.key == "s") {
    	controlerY_p2 = 1;
    } else if (event.key == "a") {
    	controlerX_p2 = -1;
    } else if (event.key == "d") {
    	controlerX_p2 = 1;
    }
}
