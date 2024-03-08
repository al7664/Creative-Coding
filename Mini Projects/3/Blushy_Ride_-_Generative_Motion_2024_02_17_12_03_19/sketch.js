let angle = 0;
let x11, y11;
let amp = 200;
let amp2 = 100;
let freq = 2;
let freq2 = 5;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  //line circles
  let t2 = frameCount * 0.3;
  let x1 = 80;
  let y1 = height / 2 + sin(t2) * 200;
  //fill(245, 196, 209);
  ellipse(x1, y1, 30, 30);
  let x2 = 160;
  let y2 = height / 2 + sin(t2) * 100;
  //fill(245, 211, 216);
  ellipse(x2, y2, 30, 30);
  let x3 = 240;
  let y3 = height / 2 + sin(t2) * 50;
  //fill(251, 175, 192);
  ellipse(x3, y3, 30, 30);
  let x4 = 320;
  let y4 = height / 2 + sin(t2) * 200;
  //fill(234, 139, 159);
  ellipse(x4, y4, 30, 30);
  let x5 = 400;
  let y5 = height / 2 + sin(t2) * 100;
  //fill(245, 196, 209);
  ellipse(x5, y5, 30, 30);
  let x6 = height / 2 + cos(t2) * 200;
  let y6 = 80;
  //fill(234, 139, 159);
  ellipse(x6, y6, 30, 30);
  let x7 = height / 2 + sin(t2) * 100;
  let y7 = 160;
  //fill(245, 211, 216);
  ellipse(x7, y7, 30, 30);
  let x8 = height / 2 + sin(t2) * 50;
  let y8 = 240;
  //fill(251, 175, 192);
  ellipse(x8, y8, 30, 30);
  let x9 = height / 2 + sin(t2) * 200;
  let y9 = 320;
  //fill(234, 139, 159);
  ellipse(x9, y9, 30, 30);

  fill(250);
  noStroke();
  angle = angle + 1;
  y11 = height / 2 + sin(angle * freq) * amp;
  circle(angle, y11, 10);
  y11 = height / 2 + sin(angle * freq2) * amp2;
  circle(angle, y11, 10);

  //centercircle
  let t = frameCount * 0.9;
  let r = map(sin(t), -1, 1, 250, 225);
  let g = map(cos(t), -1, 1, 120, 180);
  let b = map(sin(t + PI / 2), -1, 1, 225, 150);
  let x = width / 2 + cos(t) * 150;
  let y = height / 2 + sin(t) * 150;
  noStroke();
  fill(r, g, b);
  ellipse(x, y, 600, 200);

  //Waves
  //fill(250);
  noStroke();
  angle = angle + 1;
  y11 = height / 2 + sin(angle * freq) * amp;
  circle(angle, y11, 10);
  y11 = height / 2 + sin(angle * freq2) * amp2;
  circle(angle, y11, 10);
}
