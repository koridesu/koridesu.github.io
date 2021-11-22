function Alien(speed = 100) {
  this.speed = speed;
  this.r = 15;
  console.log(this.speed);
  this.spawn = function () {
    const arbital = Math.floor(Math.random() * 2);

    if (arbital === 1) {
      this.y = Math.floor(Math.random() * 50);
    } else {
      this.y = Math.floor(Math.random() * 50) + 600;
    }

    this.x = Math.floor(Math.random() * 200) + 1500;
  };
  this.spawn();

  this.show = function () {
    fill(255, 150, 110);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.move = function (x, y, accelarator, deathLimit) {
    move = this.speed / 10;

    if (this.x !== x) {
      farkX = this.x - x;

      if (farkX < deathLimit && farkX > -deathLimit) {
        move = accelarator;
      }
      this.x = this.x - (farkX * move) / 100;
    }

    if (this.y !== y) {
      farkY = this.y - y;

      if (farkX < deathLimit && farkX > -deathLimit) {
        move = accelarator;
      }
      this.y = this.y - (farkY * move) / 100;
    }
  };
}
