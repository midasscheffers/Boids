class Boid {

  constructor() {
    this.pos = createVector(random(innerWidth), random(innerHeight));
    this.velocity = createVector(0, 0);
    this.rot = random(360);
    this.moveSpeed = 1.5;
    this.Xspeed = 1;
    this.Yspeed = 0;
    this.seeRange = 50;
    this.seeAngle = 359;
    this.rotSpeed = 1;
    this.color = [50, 150, 150];
    this.selected = false;
  }

  blit(){
    push();
      translate(this.pos.x, this.pos.y);
      rotate(radians(this.rot));
      fill(this.color);
      noStroke();
      triangle(0, 0, -15, 5, -15, -5);
      if (this.selected){
        noStroke();
        fill(255, 50);
        arc(0, 0, this.seeRange, this.seeRange, radians(-this.seeAngle/2), radians(this.seeAngle/2), PIE);
        stroke(255);
        line(0, 0, 20, 0);
      }
    pop();
  }

  move(){
    this.velocity.x = cos(radians(this.rot)) * this.moveSpeed;
    this.velocity.y = sin(radians(this.rot)) * this.moveSpeed;
    this.pos.add(this.velocity);
    if (this.pos.x > innerWidth  || this.pos.x < 0 || this.pos.y > innerHeight || this.pos.y < 0){
      this.pos.x = (this.pos.x - innerWidth/2) * -.99 + innerWidth/2
      this.pos.y = (this.pos.y - innerHeight/2) * -.99 + innerHeight/2
    }
    if (this.rot > 360) {
      var tempRot = this.rot / 360;
      tempRot += this.rot % 360;
      this.rot = tempRot;
    }
  }

  rotate(Boids){
    var BoidsInArea = this.boidsInView(Boids)
    var avrRot = this.avrRotBoids(BoidsInArea)
    if (this.rot > avrRot) {
      this.rot -= this.rotSpeed;
    }
    else if (this.rot < avrRot) {
      this.rot += this.rotSpeed;
    }
  }

  boidsInView(Boids){
    var BoidsInArea = [];
    Boids.forEach(Boid => {
      if (this.pos.dist(Boid.pos) < this.seeRange){
        BoidsInArea.push(Boid)
      }
    });
    return BoidsInArea;
  }

  avrRotBoids(Boids){
    var avr = 0;
    Boids.forEach(Boid =>{
      avr += Boid.rot;
    });
    avr = avr / Boids.length;
    return avr;
  }

}
