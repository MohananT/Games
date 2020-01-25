import utils from './utils'
import "../styles.css"


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


const modal = document.getElementById('id-modal');
const btnNewGame = document.getElementById('id-btn-newgame');
const canvasContainerId = document.getElementById('canvas-container-id');

canvas.width = canvasContainerId.offsetWidth;
canvas.height = canvasContainerId.offsetHeight;

const mouse = {
  x: canvasContainerId.offsetWidth,
  y: canvasContainerId.offsetHeight
}

function getXY(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

// Event Listeners
canvasContainerId.addEventListener('mousemove', (event) => {
  var obj = getXY(canvas, event);
  mouse.x = obj.x;
  mouse.y = obj.y;

})

addEventListener('resize', () => {
  canvas.width = canvasContainerId.offsetWidth;
  canvas.height = canvasContainerId.offsetHeight;
  // init()
})

btnNewGame.addEventListener('click', (event) => {
  blueBallObj.reset();
  modal.style.display = "none";
});

// Object
class Balls {
  constructor(x, y, radius, color, xVelocity, yVelocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color;
    this.dx = xVelocity;
    this.dy = yVelocity;
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
    this.draw()
  }

  downdate(dx, dy) {
    this.x = this.x + dx;
    this.y = this.y - dy;
    this.draw()
  }

}

class User {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.lifeColors = [
      { life: 1, color: '#FFFFFF' },
      { life: 2, color: '#00CDFF' },
      { life: 3, color: '#1300FF' },
      { life: 4, color: '#FF00E0' },
    ];
    // below informations are for strictly games
    this.points = 0;
    this.lives = 2;
  }

  // getter ans setter
  getPoints() {
    return this.points;
  }

  getLives() {
    return this.lives;
  }

  setLives(live) {
    this.lives = live;
  }

  setPoints(pt) {
    this.points = pt;
  }

  draw() {
    c.save();
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.shadowColor = this.color;
    c.shadowBlur = 15;
    c.fill()
    c.closePath()
    c.restore();
  }

  changeColor() {
    let clrIndex = this.lives > 0 ? this.lives - 1 : 0;
    let colr = this.lifeColors[clrIndex];
    // console.log(this.lives);
    // console.log(this.lifeColors);
    // console.log(colr);
    this.color = colr.color;
  }

  calculateLives() {
    if (this.lives <= 0) {
      // logic to show game over
    }
    if (this.lives > 4) this.lives = 4;
  }

  reset() {
    this.lives = 2;
    this.points = 2;
  }

  mouseMove(dx, dy) {
    this.x = dx;
    this.y = dy;
    this.draw()
  }

  greenBallsCollision(ballsArray) {

    for (let i = 0; i < ballsArray.length; i++) {
      let dist = utils.distance(this.x, this.y, ballsArray[i].x, ballsArray[i].y);
      // document.getElementById("point").innerHTML = '  Point' + i + ':' + dist;
      // consider the radius while collison
      // default radius calculation - 10 is hardcoded
      // destroy the green circle
      // remove them in array
      if (dist < 10) {
        this.points += 1;
        document.getElementById("point").innerHTML = "Score : " + this.points;
        // reduce the radius to zero
        ballsArray[i].radius = 0;

        // create mini balls to scatter
        for (let j = 0; j < 5; j++) {
          miniBallsObjArray.push(new MiniBalls(ballsArray[i].x, ballsArray[i].y, 2, ballsArray[i].color))
        }
      }
    }
  }

  redBallsCollision(ballsArray) {
    for (let i = 0; i < ballsArray.length; i++) {
      let dist = utils.distance(this.x, this.y, ballsArray[i].x, ballsArray[i].y);
      // document.getElementById("point").innerHTML = '  Point' + i + ':' + dist;
      // consider the radius while collison
      // default radius calculation - 10 is hardcoded
      // destroy the green circle
      // remove them in array
      if (dist < 10) {
        this.lives -= 1;
        //console.log('document.getElementById("live").innerHTML', document.getElementById("live").innerHTML);
        document.getElementById("live").innerHTML = "Lives : " + this.lives;
        // reduce the radius to zero
        ballsArray[i].radius = 0;

        // create mini balls to scatter
        for (let j = 0; j < 5; j++) {
          miniBallsObjArray.push(new MiniBalls(ballsArray[i].x, ballsArray[i].y, 2, this.color));
        }
      }
    }
  }
}


class MiniBalls {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.xVelocity = Math.sin(utils.randomIntFromRange(1, 100));
    this.yVelocity = Math.sin(utils.randomIntFromRange(1, 100));;
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.x = this.x + this.xVelocity;
    this.y = this.y + this.yVelocity;
    this.draw();
  }
}


let rebBallsObjArray = [];
let greenBallsObjArray = [];
let miniBallsObjArray = [];
var blueBallObj;

// Reb balls - decreases points
function initRedBalls() {
  let colorInFun = '#FF0000';
  for (let i = 0; i < 50; i++) {
    let x = utils.randomIntFromRange(-1000, 0)
    let y = utils.randomIntFromRange(-1500, canvas.height)
    let radius = utils.randomIntFromRange(2, 8);
    let dx = utils.randomIntFromRange(1, 5);
    let dy = 1;
    rebBallsObjArray.push(new Balls(x, y, radius, colorInFun, dx, dy));
  }
}

function initGreenBalls() {
  let colorInFun = '#00FF00';
  for (let i = 0; i < 10; i++) {
    let x = utils.randomIntFromRange(-1000, 0)
    let y = utils.randomIntFromRange(-1500, canvas.height)
    let radius = 8;
    let dx = utils.randomIntFromRange(1, 5);
    let dy = utils.randomIntFromRange(1, 5);
    greenBallsObjArray.push(new Balls(x, y, radius, colorInFun, dx, dy));
  }
}

// blue ball - user

function initBlueBalls() {
  //let colorInFun = '#00CDFF'
  let colorInFun = '#FFFFFF'
  let radius = 8;
  let x = utils.randomIntFromRange(100, 100);
  let y = utils.randomIntFromRange(1000, 500);
  blueBallObj = new User(x, y, radius, colorInFun);
}

function calculateGame() {
  let lives = blueBallObj.getLives();
  // console.log(lives);
  if (lives <= 0) {
    console.log(lives);
    modal.style.display = "block";
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  rebBallsObjArray.forEach((object, index) => {
    if (object.radius == 0) {
      rebBallsObjArray.splice(index, 1);
    }
    object.update();
  });

  greenBallsObjArray.forEach((obj, index) => {
    if (obj.radius == 0) {
      greenBallsObjArray.splice(index, 1);
    }
    obj.update();
  });

  blueBallObj.mouseMove(mouse.x, mouse.y);
  blueBallObj.greenBallsCollision(greenBallsObjArray);
  blueBallObj.redBallsCollision(rebBallsObjArray);
  blueBallObj.calculateLives();
  blueBallObj.changeColor();

  // for modal popup
  calculateGame();

  miniBallsObjArray.forEach((object, index) => {
    setTimeout(() => {
      object.radius -= 1;
    }, 1000);
    if (object.radius <= 0) {
      miniBallsObjArray.splice(index, 1);
    }
    object.update();
  });

}

setInterval(() => {
  initRedBalls();
  initGreenBalls();
  // console.log('Points', points);
}, 5000);


initRedBalls();
initBlueBalls();
initGreenBalls();
animate()


