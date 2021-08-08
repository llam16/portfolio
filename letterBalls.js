/* global 
  collideCircleCircle, 
  random, 
  textSize, 
  createCanvas, 
  strokeWeight, 
  background, 
  colorMode, 
  HSB, 
  noStroke, 
  color, 
  fill,
  circle,
  text, 
  stroke, 
  width, 
  height,
  windowWidth,
  windowHeight
*/

let dots

function setup() {
  let canvas = createCanvas(windowWidth*0.42, windowHeight*0.575);
  canvas.parent('letter-balls');
  colorMode(HSB, 360, 100, 100);
  createDots();
}

function createDots() {
  dots = [];
  dots.push(new BouncyDot("L"));
  dots.push(new BouncyDot("Y"));
  dots.push(new BouncyDot("D"));
  dots.push(new BouncyDot(" I"));
  dots.push(new BouncyDot("A"));

  for (let i = 0; i < 10; i++) {
      dots.push(new RandomDot());
  }
}

function windowResized() {
  resizeCanvas(windowWidth*0.42, windowHeight*0.575);
  dots.forEach(dot => {
    dot.resizeRadius();
  });
}

function draw() {
  background(90);
  drawDots();
}

function drawDots() {
  dots.forEach(dot => {
    dot.float();
    dot.display();
  });
}

class RandomDot {
  constructor() {
      // Randomly generate position
      this.x = random(width);
      this.y = random(height);
      // Randomly generate radius
      this.radiusPercent = random(0.008, 0.025);
      this.r = windowWidth*this.radiusPercent;
      // Randomly generate color
      this.color = color(0,0,100);
      // Randomly generate a master velocity (broken into components)...
      this.minVelocity
      this.masterXvelocity = random(windowWidth*0.0005, windowWidth*0.001);
      this.masterYvelocity = random(windowWidth*0.0005, windowWidth*0.001);
      // ...and use those as starting velocities.
      this.xVelocity = this.masterXvelocity;
      this.yVelocity = this.masterYvelocity;
  }

  resizeRadius() {
    this.r = windowWidth*this.radiusPercent;
  }

  float() {
      this.x += this.xVelocity;
      this.y += this.yVelocity;
      
      // Standard bounce code
      if (this.x + this.r > width) {
      this.xVelocity = -1 * this.masterXvelocity;
      }
      if (this.x - this.r < 0) {
      this.xVelocity = this.masterXvelocity;
      }
      if (this.y + this.r > height) {
      this.yVelocity = -1 * this.masterYvelocity;
      }
      if (this.y - this.r < 0) {
      this.yVelocity = this.masterYvelocity;
      }
  }

  display() {
      fill(this.color, 50, 100);
      noStroke();
      circle(this.x, this.y, this.r);
  }
}

class BouncyDot {
  constructor(letter) {
      // Randomly generate position
      this.x = random(width);
      this.y = random(height);
      // Randomly generate radius
      this.r = windowWidth*0.03;
      // White color
      this.color = color(0,0,100);
      // Randomly generate a master velocity (broken into components)...
      this.minVelocity
      this.masterXvelocity = random(windowWidth*0.001, windowWidth*0.0018);
      this.masterYvelocity = random(windowWidth*0.001, windowWidth*0.0018);
      // ...and use those as starting velocities.
      this.xVelocity = this.masterXvelocity;
      this.yVelocity = this.masterYvelocity;
      
      this.letter = letter;
  }

  resizeRadius() {
    this.r = windowWidth*0.03;
  }

  float() {
      this.x += this.xVelocity;
      this.y += this.yVelocity;
      
      // Standard bounce code
      if (this.x + this.r > width) {
      this.xVelocity = -1 * this.masterXvelocity;
      }
      if (this.x - this.r < 0) {
      this.xVelocity = this.masterXvelocity;
      }
      if (this.y + this.r > height) {
      this.yVelocity = -1 * this.masterYvelocity;
      }
      if (this.y - this.r < 0) {
      this.yVelocity = this.masterYvelocity;
      }
  }

  display() {
      fill(this.color, 50, 100);
      noStroke();
      circle(this.x, this.y, this.r);
      fill(0,0,0);
      textSize(windowWidth*0.03);
      strokeWeight(windowWidth*0.01);
      text(this.letter, this.x-12,this.y+12);
  }
}