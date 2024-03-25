/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new AdaLianDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(137,207,240);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class AdaLianDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.bodyY = sin(frameCount * 0.05) * 2;
    this.shirtOffset = sin(frameCount * 0.05) * 2;
    this.hairY = 0 - 67 + sin(frameCount * 0.05) * 5;
    this.faceY = 0 - 63 + sin(frameCount * 0.05) * 5;
    this.eyeY = 0 - 57 + sin(frameCount * 0.05) * 5;
    this.noseY = 0 - 63 + sin(frameCount * 0.05) * 5;
    this.mouthY = 0 - 40 + sin(frameCount * 0.05) * 5;
    this.eyebrowOffset = sin(frameCount * 0.05) * 2;
    this.hairOffset = sin(frameCount * 0.05) * 5;
    this.hairOffset -= 63;
    this.eyebrowOffset += 60;
    this.armOffset = sin(frameCount * 0.05) * 5;
  }
  update() {
    this.bodyY = sin(frameCount * 0.05) * 2;
    this.shirtOffset = sin(frameCount * 0.05) * 2;
    this.hairY = 0 - 67 + sin(frameCount * 0.05) * 5;
    this.faceY = 0 - 63 + sin(frameCount * 0.05) * 5;
    this.eyeY = 0 - 57 + sin(frameCount * 0.05) * 5;
    this.noseY = 0 - 63 + sin(frameCount * 0.05) * 5;
    this.mouthY = 0 - 40 + sin(frameCount * 0.05) * 5;
    this.eyebrowOffset = sin(frameCount * 0.05) * 2;
    this.hairOffset = sin(frameCount * 0.05) * 5;
    this.hairOffset -= 63;
    this.eyebrowOffset += 60;
    this.armOffset = sin(frameCount * 0.05) * 5;
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    push()
    translate(0, 80)


    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    noStroke();
    // Body
    fill(255, 206, 180);
    ellipse( - 5,  this.bodyY + 2, 5, 15);
    ellipse( + 5,  this.bodyY + 2, 5, 15);
    // Pants
    fill(102, 178, 178);
    rect(- 10,  - 9, 20, 10);
    ellipse( - 5,  - 3, 10, 5);
    ellipse( + 5, this.bodyY - 3, 10, 5);
    fill(191, 229, 191);
    ellipse( - 6, this.bodyY + 8, 7, 4);
    ellipse( + 4, this.bodyY + 8, 7, 4);
    // Shirt
    fill(225, 193, 110);
    arc(0,  - 5 - this.shirtOffset, 30, 50, PI, 0, CHORD);
    // Arms
    fill(255, 206, 180);
    circle( - 15, 0 - 12 - this.armOffset, 10);
    circle(0 + 15, 0 - 12 - this.armOffset, 10);
    // Hair Center
    fill("black");
    ellipse(0, this.hairY, 70, 80);

    // Face
    fill(255, 206, 180);
    ellipse(0, this.faceY, 70, 80);
    circle(0 + 35, this.eyeY, 20);
    // Eyes
    fill("black");
    circle(0 + 10, this.eyeY - 10, 4);
    circle(0 - 10, this.eyeY - 10, 4);
    // Mouth
    fill(230, 118, 117);
    ellipse(0, this.mouthY, 7.5, 7.5);

    // Nose
    fill("white");
    ellipse(0, this.noseY, 5, 25);

    // Eyebrows
    fill("black");
    ellipse(0 - 10, 0 - 20 - this.eyebrowOffset, 12.5, 15);
    ellipse(0 + 10, 0 - 20 - this.eyebrowOffset, 12.5, 15);
    fill(255, 206, 180);
    ellipse(
      0 - 10,
      0 - 19.5 - this.eyebrowOffset,
      12.5,
      15
    );
    ellipse(
      0 + 10,
      0 - 19.5 - this.eyebrowOffset,
      12.5,
      15
    );

    // Hair Front
    push();
    translate(0 - 10, 0 - 36 + this.hairOffset);
    rotate(radians(60));
    fill("black");
    ellipse(0, 0, 8, 15);
    pop();
    push();
    translate(0, 0 - 36 + this.hairOffset);
    rotate(radians(0));
    fill("black");
    ellipse(0, 0, 8, 15);
    pop();
    push();
    translate(0 + 10, 0 - 36 + this.hairOffset);
    rotate(radians(300));
    fill("black");
    ellipse(0, 0, 8, 15);
    pop();
    pop()






    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/