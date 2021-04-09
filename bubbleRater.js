var start = 0;
let i = 0;
var words = ['Jobless','Guitar lover','Spy','Farmer','lawyer','Rockstar']; 
let finalword = 0;

var r1x = 0;
var r1y = -4;

var r2x = -4;
var r2y = 0;

let canvaswidth = 480;
let canvasheight = 350;
let fr = 10;

let a;

let p1 = 50;
let p2 = 30;
let p3 = 20;

let t = [1,4,3];

function setup(){
  let canvas = createCanvas(canvaswidth,canvasheight);
  canvas.parent("p5");
  capture = createCapture(VIDEO);
  capture.size(canvaswidth, canvasheight);
  capture.hide();
}

function draw() {
  background(255);  
  image(capture, 0, 0, canvaswidth, canvasheight);
  
  if(start == 1){
    noStroke();
    fill(255,0,0);
    rect(r1x,r1y,canvaswidth,4);
    rect(r2x,r2y,4,canvasheight);
    //de verhouding moet hier altijd hetzelfde zijn als Width/height
    r1y = r1y += 3;
    r2x = r2x += 4;
    a = random(0,words.length);
    
    var word = random(words);
    fill(0,0,0);
    rect(25,230, 100, 30);
    fill(255,255,255);
    text(word,30,250);
  }
  
  if(r1y >= canvasheight){
    start = 2;
  }
  
  if(start == 2){
    finalword = words[round(a)];
    
    fill(0,0,0);
    rect(25,230, 430, 30);
    fill(255,255,255);
    text(finalword,30,250);
    
    fill(130,130,130);
    rect(26,231, ( 4.3 * p1 ) - 2, 28);
    fill(255,255,255);
    text(words[t[0]],26 + 4,250);

    
    fill(100,100,100);
    rect(26 + ( 4.3 * p1 ),231, ( 4.3 * p2 ) - 2, 28);
    fill(255,255,255);
    text(words[t[1]],26 + ( 4.3 * p1 ) + 4,250);

    fill(60,60,60);
    rect(26 + ( 4.3 * p1 ) + ( 4.3 * p2 ),231, ( 4.3 * p3 ) - 2, 28);
    fill(255,255,255);
    text(words[t[2]],26 + ( 4.3 * p1 ) + ( 4.3 * p2 ) + 4,250);

  }
}

function mousePressed (){
  r1x = 0;
  r1y = -4;

  r2x = -4;
  r2y = 0;
  
  start = 1;
}