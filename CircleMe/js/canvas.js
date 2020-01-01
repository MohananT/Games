const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// const fs = require('fs') 
  
// // Data which will write in a file. 
// let data = "Learning how to write in a file."
  
// // Write data in 'Output.txt' . 
// fs.writeFile('Output.txt', data, (err) => { 
      
//     // In case of a error throw err. 
//     if (err) throw err; 
// }) 


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

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']


// Event Listeners
canvasContainerId.addEventListener('mousemove', (event) => {
  // console.log(event);
  // mouse.x = event.x// - (event.x * (1/100));
  // mouse.y = event.y;
  var obj = getXY(canvas, event);
  mouse.x = obj.x;
  mouse.y = obj.y;
})

addEventListener('resize', () => {
  canvas.width = canvasContainerId.offsetWidth;
  canvas.height = canvasContainerId.offsetHeight;
  // init()
});

// Object
function Balls(x, y, radius, color, xVelocity, yVelocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.dx = xVelocity;
    this.dy = yVelocity;

    this.draw = function() {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      c.fillStyle = this.color
      c.fill()
      c.closePath()
    }

    this.update = function() {
      this.x = this.x + this.dx;
      this.y = this.y + this.dy;
      this.draw()
    }

    this.downdate = function(dx, dy) {
      this.x = this.x + dx;
      this.y = this.y - dy;
      this.draw()
    }
}

function User(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color

    this.draw = function() {
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

    this.mouseMove = function(dx, dy) {
      this.x = dx;
      this.y = dy;
      this.draw()
    }

    this.collision = function(ballsArray) {
      
      for (let i = 0; i < ballsArray.length; i++) {
        let dist = distance(this.x, this.y, ballsArray[i].x, ballsArray[i].y);
        // document.getElementById("point").innerHTML = '  Point' + i + ':' + dist;
        // consider the radius while collison
        // default radius calculation - 10 is hardcoded
        // destroy the green circle
        // remove them in array
        if (dist < 10) {
          points += 1;
          document.getElementById("point").innerHTML = "Points : " + points;
          // reduce the radius to zero
          ballsArray[i].radius = 0;

          // create mini balls to scatter
          for(let j = 0; j < 5; j++) {
            miniBallsObjArray.push(new MiniBalls(ballsArray[i].x, ballsArray[i].y, 2, ballsArray[i].color))
          }
        }
      }
    }
}


function MiniBalls(x, y, radius, color) {
  this.x = x
  this.y = y
  this.radius = radius
  this.color = color
  this.xVelocity = Math.sin(randomIntFromRange(1,100));
  this.yVelocity = Math.sin(randomIntFromRange(1,100));;

  this.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  this.update = function() {
    this.x = this.x + this.xVelocity;
    this.y = this.y + this.yVelocity;
    this.draw();
  }
}


let rebBallsObjArray = [];
let greenBallsObjArray = [];
let miniBallsObjArray = [];
let blueBallObj;

// Reb balls - decreases points
function initRedBalls() {
  let colorInFun = '#FF0000';
  for (let i = 0; i < 50; i++) {
    let x = randomIntFromRange(-1000, 0)
    let y = randomIntFromRange(-1500, canvas.height)
    let radius = randomIntFromRange(2, 8);
    let dx = randomIntFromRange(1,5);
    let dy = 1;
    rebBallsObjArray.push(new Balls(x, y, radius, colorInFun, dx, dy));
  }
}

function initGreenBalls() {
  let colorInFun = '#00FF00';
  for (let i = 0; i < 10; i++) {
    let x = randomIntFromRange(-1000, 0)
    let y = randomIntFromRange(-1500, canvas.height)
    let radius = 8;
    let dx = randomIntFromRange(1,5);
    let dy = randomIntFromRange(1,5);
    greenBallsObjArray.push(new Balls(x, y, radius, colorInFun,dx,dy));
  }
}

// blue ball - user

function initBlueBalls() {
  let colorInFun = '#00CDFF'
  let radius = 8;
  let x = randomIntFromRange(100, 100);
  let y = randomIntFromRange(1000, 500);
  blueBallObj = new User(x, y, radius, colorInFun);
}

let greenBall = new Balls(300, 300, 8, '#00FF00');
let greenBallArray = [];
greenBallArray.push(greenBall);

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  rebBallsObjArray.forEach(object => {
    object.update();
  });

  greenBallsObjArray.forEach((obj, index) => {
    if (obj.radius == 0) {
      greenBallsObjArray.splice(index, 1);
    }
    obj.update();
  });

  
  //greenBall.downdate(1,0.1);
  //greenBall.draw();

  blueBallObj.mouseMove(mouse.x, mouse.y);
  //blueBallObj.collision(greenBallArray);
  blueBallObj.collision(greenBallsObjArray);
  
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
  console.log('Points', points);
}, 5000);


initRedBalls();
initBlueBalls();
initGreenBalls();
animate()


// below informations are for strictly games
var points = 0;

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1
  // console.log('xDist', xDist, x1,x2);
  // console.log('yDist', yDist, y1,y2);
  // console.log('xPower', Math.pow(xDist, 2));
  // console.log('yPower', Math.pow(yDist, 2));
  // console.log('Sqrt',Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)));
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}