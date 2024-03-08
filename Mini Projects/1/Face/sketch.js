function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(175, 215, 400);
  noStroke();
  
  //Hair
  fill(80, 50, 50)
  rect(200, 250,180, 200)
  //Highlight
  fill(220, 180, 130)
  rect(200, 230, 135, 200)
  //Hair
  fill(80, 50, 50)
  rect(200, 230, 130, 200)
  //Highlight
  fill(220, 180, 130)
  rect(200, 230, 75, 200)
  //Hair
  fill(80, 50, 50)
  rect(200, 230, 70, 200)
  
  //Neck
  fill(250,220, 200)
  rectMode(CENTER)
  rect(200,275,47,60)
  
  //Ears
  fill(250, 220, 200)
  ellipse(130, 200, 30, 30); 
  ellipse(270, 200, 30, 30); 
  fill(245, 210, 180)
  ellipse(130, 200, 20, 30); 
  ellipse(270, 200, 20, 30); 
  
  //Face
  fill (250, 220, 200)
  rectMode(CENTER)
  rect(200, 200, 150, 150, 0, 0, 65, 65)
  //Top
  fill(80, 50, 50)
  arc(200,150, 180,165,PI,0,CHORD) 
  //Highlights
  fill (220, 180, 130)
  triangle(120, 150, 200, 95, 285, 150);
  fill (80, 50, 50)
  triangle(120, 150, 200, 100, 285, 150);
  fill (220, 180, 130)
  triangle(125, 150, 200, 105, 275, 150);
  //Forehead
  fill (250,220, 200)
  triangle(125, 150, 200, 110, 275, 150);
  //Blush
  fill(255, 207, 207)
  ellipse(150, 215, 30, 30); 
  ellipse(250, 215, 30, 30); 
  

  //Eyes
  fill(250); 
  ellipse(160, 175, 30, 20); 
  ellipse(240, 175, 30, 20); 
  fill(0)
  ellipse(160, 175, 17, 20);
  ellipse(240, 175, 17, 20);
  
  //Eyebrows
  arc(160,160,30,10,PI,0,CHORD) 
  arc(240,160,30,10,PI,0,CHORD)  

  //Nose
  fill(245, 210, 180);
  triangle(200, 190, 190, 220, 210, 220);
  fill(247, 215, 190)
  arc(200,220,20,20,PI,0,CHORD)  

  //Mouth
  fill(255, 120, 100); 
  arc(200, 230, 50, 40, 0, PI);
  fill(250)
  rect(200, 231.5, 40, 3)
  fill(167, 0, 0)
  ellipse(200, 243, 30, 10)
  
  //Shoulders
  fill(0, 0, 130)
  rect(200, 400, 120, 190, 0, 0, 65, 65)
  fill(0)
  arc(135,400,80,190,PI,0,CHORD) 
  arc(265,400,80,190,PI,0,CHORD) 
  fill (250, 220, 200)
  triangle(165, 305, 200, 330, 235, 305);
  fill (250, 220, 200)
  triangle(165, 305, 200, 295, 235, 305);

}
