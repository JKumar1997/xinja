let xinja;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  bg_colour1 = color(226, 25, 112);
  bg_colour2 = color(118, 67, 148);
  xinja = new Xinja();
  print(xinja.x, xinja.y);
}

function draw() { 
	set_gradient(bg_colour1, bg_colour2);
	xinja.display();
} 

class Xinja {
	constructor() {
	}

	display() {
		noStroke();
		ellipse(windowWidth/2, windowHeight/2, windowHeight/6, windowHeight/6);

	}

}

function set_gradient(colour_a, colour_b) {
  for (var i = 0; i < height; i++) {
    var x = map(i, 0, height, 0, 1);
    var colour = lerpColor(colour_a, colour_b, x);
    stroke(colour);
    line(0, i, width, i);
  }
}

function windowResized() {
	  resizeCanvas(windowWidth, windowHeight);
}


