function Particle(x, y, red = 255, green = 255, blue = 255) {
  this.x = x;
  this.y = y;
  this.horizontalVelocity = -5 + Math.random() * (10 - -5);
  this.verticalVelocity = Math.floor(Math.random() * 10) + 5;
  (this.width = Math.floor(Math.random() * 10) + 5),
    (this.height = Math.floor(Math.random() * 10) + 5);

  this.show = function () {
    fill(red, green, blue);
    ellipse(this.x, this.y, this.width, this.height);
  };

  this.move = function () {
    // let gravity  = createVector(0,0.2);

    this.x += this.horizontalVelocity;
    this.y -= this.verticalVelocity;

    this.verticalVelocity -= 0.9;
  };

  this.isExpired = function () {
    if (this.verticalVelocity < -20) {
      return true;
    }

    return false;
  };
}
