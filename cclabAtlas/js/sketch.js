let x, y;
let speed = 5;
let prevPositions = [];
let cloudX1 = 0;
let cloudY1 = 400;
let cloudX2 = 400;
let cloudY2 = 220;
let cloudX3 = -400;
let cloudY3 = 0;
let cloudSpeed = 1;
let creatureColor = 150;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.id("p5canvas")
  x = width / 2;
  y = height / 2;
  background(173, 216, 230);
}

function draw() {
  background(173, 216, 230);

  // Clouds
  fill(255);
  noStroke();
  ellipse(cloudX1, cloudY1, 100, 50);
  ellipse(cloudX1 + 50, cloudY1 + 20, 200, 75);
  ellipse(cloudX1 + 100, cloudY1, 150, 100);
  ellipse(cloudX1 + 150, cloudY1 + 20, 200, 100);
  ellipse(cloudX1 + 200, cloudY1, 200, 100);
  ellipse(cloudX1 + 250, cloudY1 + 20, 150, 100);
  cloudX1 += cloudSpeed;
  if (cloudX1 > width) {
    cloudX1 = -200;
  }

  ellipse(cloudX2, cloudY2, 200, 100);
  ellipse(cloudX2 + 50, cloudY2 + 20, 50, 50);
  ellipse(cloudX2 + 100, cloudY2, 150, 100);
  ellipse(cloudX2 + 150, cloudY2 + 20, 200, 100);
  ellipse(cloudX2 + 200, cloudY2, 200, 75);
  ellipse(cloudX2 + 250, cloudY2 + 20, 100, 70);
  cloudX2 += cloudSpeed;
  if (cloudX2 > width) {
    cloudX2 = -200;
  }

  ellipse(cloudX3, cloudY3, 150, 50);
  ellipse(cloudX3 + 50, cloudY3 + 20, 50, 50);
  ellipse(cloudX3 + 100, cloudY3, 250, 75);
  ellipse(cloudX3 + 150, cloudY3 + 20, 200, 100);
  ellipse(cloudX3 + 200, cloudY3, 180, 100);
  ellipse(cloudX3 + 250, cloudY3 + 20, 250, 50);
  cloudX3 += cloudSpeed;
  if (cloudX3 > width) {
    cloudX3 = -200;
  }

  // Arrow Keys
  if (keyIsPressed) {
    if (keyCode === UP_ARROW && y - speed >= 0) {
      y -= speed;
    } else if (keyCode === DOWN_ARROW && y + speed <= height) {
      y += speed;
    } else if (keyCode === LEFT_ARROW && x - speed >= 0) {
      x -= speed;
    } else if (keyCode === RIGHT_ARROW && x + speed <= width) {
      x += speed;
    } else if (keyCode === 32) {
      restartCanvas();
    }
  }
  // Ellipse Size
  let ellipseWidth = sin(frameCount * 0.1) * 30 + 50;
  let ellipseHeight = sin(frameCount * 0.1) * 30 + 50;
  let alpha = map(ellipseWidth, 50, 80, 0, 255);
  fill(creatureColor, alpha);
  ellipse(x, y, ellipseWidth, ellipseHeight);
  prevPositions.push({ x: x, y: y });

  // Tail
  for (let i = 0; i < prevPositions.length; i++) {
    let pos = prevPositions[i];
    let circleSize = sin(frameCount * 0.1 - i * 0.1) * 30 + 50;
    let circleAlpha = map(circleSize, 50, 80, 0, 255);
    fill(creatureColor, circleAlpha);
    ellipse(pos.x, pos.y, circleSize, circleSize);
  }

  // Scarier Eyes
  let eyeSize = 25;
  let eyeOffset = 20;
  fill(255);
  ellipse(x - eyeOffset, y - eyeOffset, eyeSize * 1.2, eyeSize * 1.2);
  ellipse(x + eyeOffset, y - eyeOffset, eyeSize * 1.2, eyeSize * 1.2);
  fill(0);
  ellipse(x - eyeOffset, y - eyeOffset, eyeSize * 0.8, eyeSize * 0.8);
  ellipse(x + eyeOffset, y - eyeOffset, eyeSize * 0.8, eyeSize * 0.8);

  // Eyebrows
  fill(0);
  noStroke();

  push();
  translate(x - eyeOffset - 12, y - eyeOffset - 25);
  rotate(radians(45));
  rect(0, 0, 25, 8, 3);
  pop();

  push();
  translate(x + eyeOffset - 13, y - eyeOffset - 25);
  rotate(radians(-45));
  rect(-10, 17, 25, 8, 3);
  pop();

  // Change Color
  if (mouseIsPressed) {
    creatureColor -= 5;
    if (creatureColor < 0) {
      creatureColor = 0;
    }
  }

  drawInstructions(); 
}

function restartCanvas() {
  x = width / 2;
  y = height / 2;
  creatureColor = 150;
  prevPositions = [];
  background(173, 216, 230);
}

function drawInstructions() {
  textSize(20);
  fill(0);
  textAlign(CENTER);
  text("Utilize the arrows to spread the pollution Smogo", width / 2, 30);
  text("Click the mouse to make it darker", width / 2, 60);
  text("Press spacebar to restart", width / 2, 90);
}
