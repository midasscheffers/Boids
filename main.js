var Boids = [];
var numBoids = 100;

function setup() {
  createCanvas(innerWidth, innerHeight-4);
  var b;

  for (var i = 0; i < numBoids; i++){
    b = new Boid();
    Boids.push(b)
  }
  
}

function draw() {
  background(20, 0, 20);
  Boids.forEach(Boid => {
    Boid.blit();
    Boid.rotate(Boids);
    Boid.move();
  });
  
}

