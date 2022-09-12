function setup() {
  createCanvas(750, 1500);
  angleMode(DEGREES); //set the angle/value of the desired shape to degrees
}

function preload() {
  font1 = loadFont("Orbitron.ttf"); //loads external files to be called (font file)
}

function draw() {
  background(0);
  
  //digital clock
  
  //declaring time variables
  let hr = hour();
  let min = minute();
  let sec = second();

  //declared other time variables
  let dy = day();
  let mnth = month();
  let yr = year();

  //simple text function to place time variables, seperated by semi-colon's.
  fill(0, 153, 255);
  noStroke(0);
  textSize(30);
  //calls specific font
  textFont(font1);
  text("TIME", 162, 180);
  text(hr + ":" + min + ":" + sec, 130, 210);
  fill(50);

  fill(0, 153, 255);
  noStroke();
  textSize(20);
  text("DATE", 170, 250);
  text(dy + ":" + mnth + ":" + yr, 142, 270);
  
  //analog clock
  
  strokeWeight(4);
  noFill();
  stroke(0, 153, 255);
  //maps the number of seconds (sec) which goes between 0 & 60 to between 0 & 360
  let end1 = map(sec, 0, 60, 0, 360);
  arc(200, 200, 300, 300, 0, end1); //arc is another draw function
  
  stroke(0, 102, 204);
  let end2 = map(min, 0, 60, 0, 360);
  arc(200, 200, 280, 280, 0, end2); //different measurements to get different levels
  
  stroke(0, 0, 255);
  let end3 = map(hr, 0, 60, 0, 360);
  arc(200, 200, 260, 260, 0, end3);
  
}
