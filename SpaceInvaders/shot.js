function Shot(x, y, type, bulletSpeed) {
  this.type = type;
  this.bulletSpeed = bulletSpeed;
  this.x = x + 10;
  this.y = y + 10;
  this.r = 5;

  this.shotBullet = function () {};

  this.show = function () {
    fill(25, 0, 51);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.move = function () {
    this.x += this.bulletSpeed;
  };

  this.destroy = function () {
    if (this.x > window.innerWidth) {
      return true;
    } else return false;
  };

  this.isHit = function (alien) {
    let d = dist(this.x, this.y, alien.x, alien.y);

    if (d < this.r + alien.r) {
      return true;
    } else {
      return false;
    }
  };
}
