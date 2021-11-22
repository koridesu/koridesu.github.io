function Star() {
  this.speed = Math.random() * 5 + 1;
  this.width = Math.random() * 10;

  this.x = Math.floor(Math.random() * 1500);
  this.y = Math.floor(Math.random() * 600);

  if (this.width > 5) {
    this.speed = Math.random() * 2 + 1;
  }

  this.move = function () {
    this.x -= this.speed;
  };
  this.show = function () {
    fill(255, 255, 255);
    ellipse(this.x, this.y, this.width, this.width);
  };
}
