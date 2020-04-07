function setup() { 
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	//xinja.display();
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



