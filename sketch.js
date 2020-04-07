let xinja;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  xinja = new Xinja();
}

function draw() {
	xinja.display();
} 

class Xinja {
	display() {
		noStroke();
		fill(255);
		ellipse(windowWidth/2-57, windowHeight/2-22, 54, 54);
		ellipse(windowWidth/2+57, windowHeight/2-22, 54, 54);
		rect(windowWidth/2-55, windowHeight/2-49, 110 ,54);
	}
}

/*
function set_gradient(colour_a, colour_b) {
  for (var i = 0; i < height; i++) {
    var x = map(i, 0, height, 0, 1);
    var colour = lerpColor(colour_a, colour_b, x);
    stroke(colour);
    var y = line(0, i, width, i);
    fill(y);
  }
}
*/


function windowResized() {
	  resizeCanvas(windowWidth, windowHeight);
}



