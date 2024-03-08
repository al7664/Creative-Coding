function setup() {
  createCanvas(600, 600);
  background(220)
  noStroke();
  for (let i = 0; i < 200; i++) {
    for (let a = 0; a < 20; a++) {
      fill(random(255), random(255), random(255), 150);
      rect(i * 10, a * 40, 600, 600);
      rotate(PI / 70);
      scale(0.99);
      translate(20, 2);
    }
  }
}
