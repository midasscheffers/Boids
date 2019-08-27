var b;

function setup() {
  createCanvas(innerWidth, innerHeight-4);
  b = new Boid(innerWidth/2, innerHeight/2);
}

function draw() {
  background(20, 0, 20);
  b.blit();
  b.move();
}

