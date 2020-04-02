function setup() { 
  createCanvas(windowWidth, windowHeight);
  ca = color(226, 25, 112);
  cb = color(118, 67, 148);
} 

function set_gradient(colour_a, colour_b) {
  for (var i = 0; i < height; i++) {
    var x = map(i, 0, height, 0, 1);
    var colour = lerpColor(colour_a, colour_b, x);
    stroke(colour);
    line(0, i, width, i);
  }
}

function draw() { 
	background(set_gradient(ca, cb));
	ellipse(windowWidth/2, windowHeight/2, 100, 100);
}

function windowResized() {
	  resizeCanvas(windowWidth, windowHeight);
}


