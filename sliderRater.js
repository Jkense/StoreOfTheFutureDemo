var start = 0;
var condition = 0;
let i = 0;
var words = ['Chic','Serious','Casual','Cheerful','Smart','Bohemian', 'Vintage', 'Business']; 
let finalword = 0;

let slider1;
let slider2;
let slider3;
let slider4;
let slider5;

let canvaswidth = 1200;
let canvasheight = 450;

let capturewidth = 450;
let captureheight = 325;

let scorex= 500;
let scorey= 60;

let scorex1 = scorex+150;

let white = 255;
let black = 0;
let grey = 150;

let c1 =60
let c2 = c1 + 60
let c3 = c2 + 60
let c4 = c3 + 60
let c5 = c4 + 60

var fill1 = 160;
var fill2 = 0;

var r1x = 600;
var r1y = -4;

var r2x = 596-4;
var r2y = 0;

var r3y = captureheight;


let fr = 10;

let a;

    var p1 = 50;
    var p2 = 30;
    var p3 = 20;
    var p4 = 10;
    var p5 = 10;

var waarde1 = p1*2.55
var waarde2 = p2*2.55
var waarde3 = p3*2.55
var waarde4 = p4*2.55
var waarde5 = p5*2.55

let f=2.55

let t = [1,4,3,2,5];

function setup() {
  var canvas = createCanvas(canvaswidth,canvasheight);
  canvas.parent("#p5");
  capture = createCapture(VIDEO);
  capture.size(capturewidth, captureheight);
  capture.hide();
  
  if(condition == 0){
    r1x = 0;
    r1y = -4;
  
    r2x = -4;
    r2y = 0;
    
    start = 1;
    condition = 1;
  }
}

function draw() {
  background(white); 
  
    noStroke();
  fill(0);
    rect(300,450, 600, 500);
  
  image(capture, 0, 0, capturewidth, captureheight);
  
  
  //filter(INVERT);
  
  if(r1y >= captureheight-4){
    r1y = r1y +=0;
    fill1 = 0;
    fill2 = 0;
    noStroke();
    fill(0,255,0, 160);
    rect(0,r3y,capturewidth,10);
    fill(0,255,0,fill2);
    rect(0,r3y+3,capturewidth,4);
    
    r3y = r3y -= 2;
  }
 
 
  if(r3y <= 4){
    
  start = 2; 
    
  }
  
  if(start == 1){
    noStroke();
    fill(0,255,0,fill1);
    rect(0,r1y,capturewidth,10);
    fill(0,255,0,fill2);
    rect(0,r1y+3,capturewidth,4);
    //rect(r2x,r2y,10,canvasheight, 50);
    //de verhouding moet hier altijd hetzelfde zijn als Width/height
    r1y = r1y += 2;
    //r2x = r2x += 5.5/2;
    
    fill(black);
    text('Percentage'+' '+'of'+' '+'visual'+" "+'representation',scorex1+30, scorey-40);
    
     fill(black);
    text('Characteristics',scorex+4, scorey-40);
    
    var word = random(words);
    fill(grey);
    rect(scorex1,scorey, 100*f, 30);
    
    fill(grey);
    rect(scorex1, scorey+c1, 100*f, 30);
    
    fill(grey);
    rect(scorex1, scorey+c2, 100*f, 30);
    
    fill(grey);
    rect(scorex1, scorey+c3, 100*f, 30);
    
    fill(grey);
    rect(scorex1, scorey+c4, 100*f, 30);
    
    fill(black);
    rect(scorex1,scorey, 5, 30);
    fill(black);
    text(word,scorex+4,scorey+20);
    
    fill(black);
    rect(scorex1, scorey+c1, 5, 30);
    fill(black);
    text(word,scorex + 4, scorey+c1+20);
    
    fill(black);
    rect(scorex1, scorey+c2, 5, 30);
    fill(black);
    text(word,scorex + 4, scorey+c2+20);
    
    fill(black);
    rect(scorex1, scorey+c3, 5, 30);
    fill(black);
    text(word,scorex + 4, scorey+c3+20);
    
    fill(black);
    rect(scorex1, scorey+c4, 5, 30);
    fill(black);
    text(word,scorex + 4, scorey+c4+20);
  }
  
  if(start == 2){
    finalword = words[round(a)];
    //let x1waarde = map(slider1.value(), 0, 255, 0, 300);
    //let x2waarde = map(slider2.value(), 0, 255, 0, 300);
    //let x3waarde = map(slider3.value(), 0, 255, 0, 300);
    //let x4waarde = map(slider4.value(), 0, 255, 0, 300);
    //let x5waarde = map(slider5.value(), 0, 255, 0, 300);

    //fill(0,0,0);
    //rect(25,230, 430, 30);
    //fill(255,255,255);
    //text(finalword,30,250);
    
    fill(black);
    text('Percentage'+' '+'of'+' '+'visual'+" "+'representation',scorex1+30, scorey-40);
    
    fill(black);
    text('Characteristics',scorex+4, scorey-40);
    
    fill(grey);
    rect(scorex1,scorey, 100*f, 30);
    
    fill(grey);
    rect(scorex1, scorey+c1, 100*f, 30);
    
    fill(grey);
    rect(scorex1, scorey+c2, 100*f, 30);
    
    fill(grey);
    rect(scorex1, scorey+c3, 100*f, 30);
    
    fill(grey);
    rect(scorex1, scorey+c4, 100*f, 30);
    
    fill(black);
    rect(scorex1, scorey, waarde1, 30);
    fill(black);
    text(words[t[0]] + ' ' + round(waarde1/300*100) + '%',scorex + 4, scorey+20);

    fill(black);
    rect(scorex1, scorey+c1, waarde2, 30);
    fill(black);
    text(words[t[1]] + ' ' + round(waarde2/300*100) + '%',scorex + 4, scorey+c1+20)
    
    fill(black);
    rect(scorex1, scorey+c2, waarde3, 30);
    fill(black);
    text(words[t[2]] + ' ' + round(waarde3/300*100) + '%',scorex + 4, scorey+c2+20)

    fill(black);
    rect(scorex1, scorey+c3, waarde4, 30);
    fill(black);
    text(words[t[3]] + ' ' + round(waarde4/300*100) + '%',scorex + 4, scorey+c3+20);
    
    fill(black);
    rect(scorex1, scorey+c4, waarde5, 30);
    fill(black);
    text(words[t[4]] + ' ' + round(waarde5/300*100) + '%',scorex + 4, scorey+c4+20);
  }
}

function mousePressed (){

}
