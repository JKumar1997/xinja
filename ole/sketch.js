let xinja;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  bg_colour1 = color(226, 25, 112);
  bg_colour2 = color(118, 67, 148);
  bg_colour3 = color(115, 121, 136);
  xinja = new Xinja();
  drop_shadow = color(0);
  head_colour = color(random(1, 256), random(1, 256), random(1,256));
  white = color(255);

}

function draw() {
	xinja.display();
} 

class Xinja {
	constructor() {
	}
	display() {
		//Drop Shadow
		drop_shadow.setAlpha(64);
		fill(drop_shadow);
		noStroke();
		ellipse(windowWidth/2+10, windowHeight/2+2, 245, 245);	
		//Head
		//fill(set_gradient(white, head_colour));
		noStroke();
		ellipse(windowWidth/2, windowHeight/2, 245, 245);
		//Cutey Eyes
		fill(255);
		ellipse(windowWidth/2-57, windowHeight/2-22, 54, 54);
		ellipse(windowWidth/2+57, windowHeight/2-22, 54, 54);
		rect(windowWidth/2-55, windowHeight/2-49, 110 ,54);
		noFill();
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


