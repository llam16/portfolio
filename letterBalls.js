/* global dist, keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, collideRectCircle, collideCircleCircle, random, mouseIsPressed, clear, textSize, createCanvas, strokeWeight, rect, background, colorMode, HSB, noStroke, backgroundColor, color, fill, ellipse, text, stroke, line, width, height, mouseX, mouseY */

let dots, randomDots;

function setup() {
  let canvas = createCanvas(605, 405);
  canvas.parent('letter-balls');
  colorMode(HSB, 360, 100, 100);
  dots = [];
  dots.push(new BouncyDot("L"));
  dots.push(new BouncyDot("Y"));
  dots.push(new BouncyDot("D"));
  dots.push(new BouncyDot(" I"));
  dots.push(new BouncyDot("A"));

  randomDots = [];
  for (let i = 0; i < 10; i++) {
      randomDots[i] = new RandomDot();
  }
}

function draw() {
  background(90);
  drawDots();
}

function drawDots() {
  for (let i = 0; i < dots.length; i++) {
      dots[i].float();
      dots[i].display();
  }
  for (let i = 0; i < randomDots.length; i++) {
      randomDots[i].float();
      randomDots[i].display();
  }
}

function mousePressed() {
// We'll use this for console log statements only.
}

class RandomDot {
  constructor() {
      // Randomly generate position
      this.x = random(width);
      this.y = random(height);
      // Randomly generate radius
      this.r = random(15,30);
      // Randomly generate color
      this.color = color(0,0,100);
      // Randomly generate a master velocity (broken into components)...
      this.minVelocity
      this.masterXvelocity = random(0.5, 2);
      this.masterYvelocity = random(0.5, 2);
      // ...and use those as starting velocities.
      this.xVelocity = this.masterXvelocity;
      this.yVelocity = this.masterYvelocity;
      
  }

  float() {

      this.x += this.xVelocity;
      this.y += this.yVelocity;
      
      
      
      // Standard bounce code - like the DVD logo, but for spheres.
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
      ellipse(this.x, this.y, this.r * 2);
  }
}

class BouncyDot {
  constructor(letter) {
      // Randomly generate position
      this.x = random(width);
      this.y = random(height);
      // Randomly generate radius
      this.r = 40;
      // White color
      this.color = color(0,0,100);
      // Randomly generate a master velocity (broken into components)...
      this.minVelocity
      this.masterXvelocity = random(1, 2);
      this.masterYvelocity = random(1, 2);
      // ...and use those as starting velocities.
      this.xVelocity = this.masterXvelocity;
      this.yVelocity = this.masterYvelocity;
      
      this.letter = letter;
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
      ellipse(this.x, this.y, this.r * 2);
      fill(0,0,0);
      textSize(40);
      strokeWeight(10);
      text(this.letter, this.x-12,this.y+12);
  }
}