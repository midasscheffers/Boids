class Boid {

  constructor(x, y) {
    this.pos = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.rot = random(360);
    this.moveSpeed = 5;
    this.Xspeed = 1;
    this.Yspeed = 0;
    this.seeRange = 200;
    this.seeAngle = 250;
    this.color = [50, 150, 150];
  }

  blit(){
    push();
      translate(this.pos.x, this.pos.y);
      rotate(radians(this.rot));
      fill(this.color);
      noStroke();
      triangle(0, 0, -15, 5, -15, -5);
      fill(255, 50);
      arc(0, 0, this.seeRange, this.seeRange, radians(-this.seeAngle/2), radians(this.seeAngle/2), PIE);
      stroke(255);
      line(0, 0, 20, 0)
    pop();
  }

  move(){
    this.velocity.x = cos(radians(this.rot)) * this.moveSpeed;
    this.velocity.y = sin(radians(this.rot)) * this.moveSpeed;
    this.pos.add(this.velocity);
    if (this.pos.x > innerWidth  || this.pos.x < 0 || this.pos.y > innerHeight || this.pos.y < 0){
      this.pos.x = (this.pos.x - innerWidth/2) * -1 + innerWidth/2
      this.pos.y = (this.pos.y - innerHeight/2) * -1 + innerHeight/2
    }
  }

}
