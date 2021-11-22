function setup() {
  ship = new Ship();
  aliens = [];
  shots = [];
  stars = [];
  particles = [];
  retryButton = createButton('Retry');
 
  retryButton.position(windowWidth/2 -50, windowHeight/2 + 200);
  backButton = createButton('HomePage');
  backButton.position(windowWidth/2 +50, windowHeight/2 + 200);

  retryButton.mousePressed(setup);
  backButton.mousePressed(goBack);

  for (let i = 0; i < 20; i++) {
    stars.push(new Star());
  }

  createCanvas(windowWidth, windowHeight / 2 + 200);
  for (let i = 0; i < ship.level; i++) {
    aliens[i] = new Alien(ship.level);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);

  if (keyIsDown(UP_ARROW)) {
    ship.move(0, -1);
  }
  if (keyIsDown(DOWN_ARROW)) {
    ship.move(0, 1);
  }
  if (keyIsDown(LEFT_ARROW)) {
    ship.move(-1, 0);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    ship.move(1, 0);
  }

  for (let i = 0; i < stars.length; i++) {
    stars[i].show();
    stars[i].move();
    if (stars[i].x < 0) {
      stars.splice(i, 1);
      stars.push(new Star());
    }
  }

  if (ship.dead) {
    textSize(100);
    text('YOU DEAD', windowWidth / 2 - 230, windowHeight / 2);
    return;
  }
  ship.show();

  for (let i = 0; i < aliens.length; i++) {
    aliens[i].show();
    aliens[i].move(ship.x, ship.y, ship.getAccelerator(), ship.getDeathZone());
    if (ship.isDead(aliens[i])) {
      ship.destroy();
    }
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
    particles[i].move();

    if (particles[i].isExpired()) particles.splice(i, 1);
  }

  for (let i = 0; i < shots.length; i++) {
    shots[i].show();
    shots[i].move();
    if (shots[i].destroy()) {
      shots.splice(i, 1);
      break;
    }

    for (let j = 0; j < aliens.length; j++) {
      if (shots[i].isHit(aliens[j])) {
        for (let i = 0; i < 6; i++) {
          particles.push(new Particle(aliens[j].x, aliens[j].y, 255, 0, 0));
        }
        aliens.splice(j, 1);
        shots.splice(i, 1);
        break;
      }
    }
  }

  if (aliens.length === 0) {
    levelHandler(ship, aliens);
  }
}

function keyPressed() {
  // if (keyCode === UP_ARROW) {
  //   ship.move(0, -1);
  // }
  // if (keyCode === DOWN_ARROW) {
  //   ship.move(0, 1);
  // }
  // if (keyCode === LEFT_ARROW) {
  //   ship.move(-1, 0);
  // }
  // if (keyCode === RIGHT_ARROW) {
  //   ship.move(1, 0);
  // }
  if (keyCode === 32) {
    for (let i = 0; i < 4; i++) {
      particles.push(new Particle(ship.x, ship.y, 255 , 255 , 0));
    }
    shots.push(new Shot(ship.x, ship.y, 'fire', 7));
  }
}

function levelHandler(ship, aliens) {
  ship.levelUp();
  for (let i = 0; i < ship.level; i++) {
    aliens[i] = new Alien(ship.level);
  }


}
function goBack(){
  window.location.href = "../index.html"
}

