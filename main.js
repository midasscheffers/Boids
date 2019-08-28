var Boids = [];
var numBoids = 300;

function setup() {
  createCanvas(innerWidth, innerHeight-4);
  var b;

  for (var i = 0; i < numBoids; i++){
    b = new Boid(innerWidth/2, innerHeight/2);
    Boids.push(b)
  }
  
}

function draw() {
  background(20, 0, 20);
  Boids.forEach(Boid => {
    Boid.blit();
    Boid.move();
  });
  
}

