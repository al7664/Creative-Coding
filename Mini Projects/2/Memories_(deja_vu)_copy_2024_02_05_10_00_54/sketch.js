let x = 0;
let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(600, 400);
  background(227, 66, 52);
}

function draw() {
  strokeWeight(4);
  noStroke();
  //hair

  let s = random(0, 5);
  strokeWeight(s);

  strokeWeight(s);
  b;

  if (x < 18) {
    x = x + 1;
  }
  //confetti
  fill(0, 189, 189);
  circle(110, height / 2, x);
  fill(249, 113, 113);
  circle(130, height / 1.5, x);
  fill(249, 113, 113);
  circle(470, height / 2.5, x);
  fill(118, 122, 172);
  circle(210, height / 3, x);
  fill(225, 226, 128);
  circle(280, height / 3.1, x);
  fill(155, 226, 128);
  circle(350, height / 4, x);
  fill(0, 189, 189);
  circle(450, height / 1.5, x);
  fill(223, 100, 40);
  circle(270, height / 8, x);

  //hair
  fill(0, 0, 0);
  arc(300, 250, 210, 200, PI, 0, CHORD);
  quad(195, 250, 405, 250, 425, 450, 175, 450);

  //clothes
  fill(255, 255, 255);
  rectMode(CENTER);
  rect(300, 450, 200, 100, 50, 50, 0, 0);

  //neck
  fill(253, 228, 200);
  rectMode(CENTER);
  rect(300, 365, 50, 30);
  quad(275, 380, 325, 380, 340, 400, 260, 400);
  triangle(340, 400, 260, 400, 300, 420);

  //face
  rectMode(CENTER);
  rect(300, 300, 150, 130, 0, 0, 65, 65);

  //forehead
  triangle(300, 195, 250, 235, 350, 235);

  //eyes
  fill(0, 0, 0);
  circle(335, 270, 25);
  circle(270, 270, 25);
  fill(255, 255, 255);
  circle(270, 270, 10);
  circle(335, 270, 10);

  //eyebrows
  fill(0, 0, 0);
  triangle(255, 243, 255, 253, 280, 253);
  triangle(345, 243, 345, 253, 320, 253);

  //nose
  fill(203, 173, 72);
  arc(300, 305, 20, 20, PI, 0, CHORD);
  //cheeks
  fill(255, 192, 203);
  circle(350, 300, 17);
  circle(250, 300, 17);

  //mouth
  fill(275, 145, 145);
  ellipse(300, 340, 30, 10);

  //ears
  fill(253, 228, 200);
  rectMode(CENTER);
  rect(217.5, 290, 15, 20, 10, 0, 0, 10);
  rect(382.5, 290, 15, 20, 0, 10, 10, 0);

  //circle(mouseX,mouseY,20);
  //line(mouseX,mouseY,200,200);
  stroke(r, g, b);

  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if (keyIsPressed) {
    if (key == "d" || key == "D") {
      r = random(0, 255);
      g = random(0, 255);
      b = random(0, 255);
    } else if (key == "p" || key == "P") {
      circle(random(0, 600), random(0, 600), random(0, 5));
    } else if (key == "b" || key == "B") {
      r = 0;
      g = 0;
      b = 0;
    }
  } else if (keyCode == 32) {
    background(250);
  }
  fill(250);
  triangle(0, 200, 0, 0, 300, 0);
  fill(250);
  triangle(0, 200, 0, 600, 300, 400);
  fill(250);
  triangle(300, 0, 600, 0, 600, 200);
  fill(250);
  triangle(300, 400, 600, 400, 600, 200);
}
