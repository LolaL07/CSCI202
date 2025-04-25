function setup() {
  createCanvas(481, 599);
}

function draw() {
  background(81, 105, 151);
  
    //yellow line
  stroke(237, 203, 70);
  noFill();
  strokeWeight(8);
  bezier(241, 213, 271, 107, 236, 19, 225, 0);
  
  //red circle
  stroke(0);
  strokeWeight(4);
  fill(185, 98, 69);
  circle(149, 203, 79);
  
  //black outline
  noFill();
  stroke(0);
  strokeWeight(4);
  //bottom left to center
  bezier(0, 570, 50, 565, 63, 540, 63, 522);
  bezier(63, 522, 75, 405, 195, 443, 235, 215);
  //center to top
  bezier(235, 215, 265, 110, 231, 19, 220, 0);
  
  //right top bump
  bezier(235, 215, 377, 225, 355, 329, 300, 361);
  //right bottom bump
  bezier(300, 361, 419, 433, 436, 513, 408, 599);
  //red circle point
  bezier(235, 217, 217, 207, 187, 238, 153, 203);
  
  //pull handles
  stroke(200);
  point(217, 207);//first 
  point(187, 238);//second
  //curve guides
  stroke(0);
  point(187, 218);
  point(200, 219);
  point(224, 215);
  //endpoints
  stroke(500);
  point(153, 203);
  point(235, 217);
  point(187, 218);
  
  stroke(0);
  fill(237, 203, 70);
  //yellow triangle
  beginShape();
  vertex(234, 219);
  bezierVertex(230, 246, 175, 281, 174, 280);
  bezierVertex(179, 287, 193, 310, 189, 348);
  bezierVertex(208, 333, 234, 230, 234, 219);
  endShape();
  
}