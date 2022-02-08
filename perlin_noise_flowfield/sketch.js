var inc = 0.10;
var scl = 10;
var columns, rows;

//var fr;

zoff = 0;

var particles = [];

var flowField;

var cnv;

let keep_going = false;

function setup() {
  cnv = createCanvas(600, 600);
  columns = floor(width / scl);
  rows = floor(height / scl);
  
  //fr = createP('');
  
  flowField = new Array(rows * columns);
  
  for(var i = 0; i < 250; i++){
    particles[i] = new Particle();
  }
  
   background(255);
  
}

function draw() {
 
    if(keep_going){
	var yoff = 0;
    
	for(var y = 0; y < rows; y++){
	    var xoff = 0;
	    for(var x = 0; x < columns; x++){
		var index = x +y * columns;
		var angle = noise(xoff, yoff, zoff) * TWO_PI * 2;
		var v = p5.Vector.fromAngle(angle);
		v.setMag(0.5);
		flowField[index] = v;
		xoff += inc;
		
		//stroke(0, 50);
		//strokeWeight(1);
		//push();
		//translate(x*scl, y*scl);
		//rotate(v.heading());
		//line(0, 0, scl, 0);
		
		
	    }
	    yoff += inc;
	    
	    zoff += 0.0001;
	}
	
	for(var i = 0; i < particles.length; i++){
	    particles[i].follow(flowField);
	    particles[i].update();
	    particles[i].show();
	    particles[i].edges();
	}
    }
  
}


function mouseClicked() {
    console.log(cnv.position(), cnv.size(), mouseX, mouseY);
    
    if(mouseX > 0 && mouseX < cnv.size().width && mouseY > 0 && mouseY < cnv.size().height){
	keep_going = !keep_going;
    }
}
