let x, y;
let creatureColor = 150;
let prevPositions = [];
let pollutionClouds = [];
let canMove = true;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5canvas")
  x = width / 2;
  y = height / 2;
  background(173, 216, 230);
  resetCanvas();
}

function draw() {
  background(173, 216, 230);

  // Draw Clouds
  drawClouds();

  // Pollution Clouds
  for (let i = 0; i < pollutionClouds.length; i++) {
    let cloud = pollutionClouds[i];
    fill(100, 100, 100, 100);
    ellipse(cloud.x, cloud.y, cloud.size);

    // Update cloud position
    cloud.x += cloud.speed;
    if (cloud.x > width + cloud.size) {
      cloud.x = -cloud.size;
    }
  }

  // Periodic Cloud
  if (frameCount % 60 === 0) {
    pollutionClouds.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      speed: random(1, 3),
    });
  }

  // Draw Creature
  drawCreature();

  // Arrow Keys
  if (canMove && keyIsPressed) {
    handleArrowKeys(5); // Adjust speed as needed
  }

  // Change Color
  if (mouseIsPressed) {
    creatureColor -= 5;
    if (creatureColor < 0) {
      creatureColor = 0;
    }
  }

  drawInstructions();
}

function drawClouds() {
  drawMovingCloud(0, 400, 0.5);
  drawMovingCloud(400, 220, 0.3);
  drawMovingCloud(-400, 0, 0.7);
}

function drawMovingCloud(cloudX, cloudY, speed) {
  cloudX += (frameCount * speed) % width; //
  fill(255);
  noStroke();
  ellipse(cloudX, cloudY, 100, 50);
  ellipse(cloudX + 50, cloudY + 20, 200, 75);
  ellipse(cloudX + 100, cloudY, 150, 100);
  ellipse(cloudX + 150, cloudY + 20, 200, 100);
  ellipse(cloudX + 200, cloudY, 200, 100);
  ellipse(cloudX + 250, cloudY + 20, 150, 100);
}

function drawCreature() {
  // Ellipse Size
  let ellipseWidth = sin(frameCount * 0.1) * 30 + 50;
  let ellipseHeight = sin(frameCount * 0.1) * 30 + 50;
  let alpha = map(ellipseWidth, 50, 80, 0, 255);
  fill(creatureColor, alpha);
  ellipse(x, y, ellipseWidth, ellipseHeight);
  prevPositions.push({ x: x, y: y });

  // Draw Tail
  drawTail();

  // Draw Eyes
  drawEyes();

  // Draw Eyebrows
  drawEyebrows();
}

function drawTail() {
  for (let i = 0; i < prevPositions.length; i++) {
    let pos = prevPositions[i];
    let circleSize = sin(frameCount * 0.1 - i * 0.1) * 30 + 50;
    let circleAlpha = map(circleSize, 50, 80, 0, 255);
    fill(creatureColor, circleAlpha);
    ellipse(pos.x, pos.y, circleSize, circleSize);
  }
}

function drawEyes() {
  let eyeSize = 25;
  let eyeOffset = 20;
  fill(255);
  ellipse(x - eyeOffset, y - eyeOffset, eyeSize * 1.2, eyeSize * 1.2);
  ellipse(x + eyeOffset, y - eyeOffset, eyeSize * 1.2, eyeSize * 1.2);
  fill(0);
  ellipse(x - eyeOffset, y - eyeOffset, eyeSize * 0.8, eyeSize * 0.8);
  ellipse(x + eyeOffset, y - eyeOffset, eyeSize * 0.8, eyeSize * 0.8);
}

function drawEyebrows() {
  fill(0);
  noStroke();

  push();
  translate(x - 20 - 12, y - 20 - 25);
  rotate(radians(45));
  rect(0, 0, 25, 8, 3);
  pop();

  push();
  translate(x + 20 - 13, y - 20 - 25);
  rotate(radians(-45));
  rect(-10, 17, 25, 8, 3);
  pop();
}

function handleArrowKeys(speed) {
  if (keyIsDown(UP_ARROW) && y - speed >= 0) {
    y -= speed;
  } else if (keyIsDown(DOWN_ARROW) && y + speed <= height) {
    y += speed;
  } else if (keyIsDown(LEFT_ARROW) && x - speed >= 0) {
    x -= speed;
  } else if (keyIsDown(RIGHT_ARROW) && x + speed <= width) {
    x += speed;
  }
}

function resetCanvas() {
  background(173, 216, 230);
  prevPositions = [];
  pollutionClouds = [];
  creatureColor = 150;
  canMove = true;
}

function keyPressed() {
  if (keyCode === 32) {
    resetCanvas();
  }
}

function drawInstructions() {
  textSize(14);
  fill(0);
  textAlign(LEFT, TOP);
  text("Utilize the arrows and mouse", 10, 10);
  text("Press spacebar to reset canvas", 10, 30);
}

function mouseClicked() {
  creatureColor -= 5;
  if (creatureColor < 0) {
    creatureColor = 0;
  }
}
