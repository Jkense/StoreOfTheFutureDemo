var start = 0;
var condition = 0;
let i = 0;
var words = ['Chic','Sloppy','Casual','Cheerful','Smart','Bohemian', 'Vintage', 'Business']; 
let finalword = 0;

let slider1;
let slider2;
let slider3;
let slider4;
let slider5;

var r1x = 0;
var r1y = -4;

var r2x = -4;
var r2y = 0;

let canvaswidth = 480;
let canvasheight = 270;
let fr = 10;

let a;

    var p1 = 50;
    var p2 = 30;
    var p3 = 20;
    var p4 = 10;
    var p5 = 10;
let t = [1,4,3,2,5];

function setup(){
  let canvas = createCanvas(canvaswidth,canvasheight);
  canvas.parent("p5");
  capture = createCapture(VIDEO);
  capture.size(canvaswidth, canvasheight);
  capture.hide();

  slider1= createSlider(0, 255, p1*2.55);
    slider1.position(25, 270);
    slider1.style('width', '80px');
  
  slider2= createSlider(0, 255, p2*2.55);
    slider2.position(26,300);
    slider2.style('width', '80px');
  
  slider3= createSlider(0, 255, p3*2.55);
    slider3.position(26,330);
    slider3.style('width', '80px');
  
  slider4= createSlider(0, 255, p4*2.55);
    slider4.position(26,360);
    slider4.style('width', '80px');
  
  slider5= createSlider(0, 255, p5*2.55);
    slider5.position(26,390);
    slider5.style('width', '80px');
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
    r2x = r2x += 5.5
    
    var word = random(words);
    fill(0,0,0);
    rect(26,20, 100, 30);
    fill(255,255,255);
    text(word,30,40);
    
    fill(0,0,0);
    rect(26, 60, 100, 30);
    fill(255,255,255);
    text(word,26 + 4, 80);
    
    fill(0,0,0);
    rect(26, 100, 100, 30);
    fill(255,255,255);
    text(word,26 + 4, 120);
    
    fill(0,0,0);
    rect(26, 140, 100, 30);
    fill(255,255,255);
    text(word,26 + 4, 160);
    
    fill(0,0,0);
    rect(26, 180, 100, 30);
    fill(255,255,255);
    text(word,26 + 4, 200);
  }
  
  if(r1y >= canvasheight){
    start = 2;
  }
  
  if(start == 2){
    finalword = words[round(a)];
    let x1waarde = map(slider1.value(), 0, 255, 0, 300);
    let x2waarde = map(slider2.value(), 0, 255, 0, 300);
    let x3waarde = map(slider3.value(), 0, 255, 0, 300);
    let x4waarde = map(slider4.value(), 0, 255, 0, 300);
    let x5waarde = map(slider5.value(), 0, 255, 0, 300);

    //fill(0,0,0);
    //rect(25,230, 430, 30);
    //fill(255,255,255);
    //text(finalword,30,250);
    
    fill(0,0,0);
    rect(26, 20, x1waarde, 30);
    fill(255,255,255);
    text(words[t[0]] + ' ' + round(x1waarde/300*100) + '%',26 + 4, 40);

    fill(0,0,0);
    rect(26, 60, x2waarde, 30);
    fill(255,255,255);
    text(words[t[1]] + ' ' + round(x2waarde/300*100) + '%',26 + 4, 80)
    
    fill(0,0,0);
    rect(26, 100, x3waarde, 30);
    fill(255,255,255);
    text(words[t[2]] + ' ' + round(x3waarde/300*100) + '%',26 + 4, 120)

    fill(0,0,0);
    rect(26, 140, x4waarde, 30);
    fill(255,255,255);
    text(words[t[3]] + ' ' + round(x4waarde/300*100) + '%',26 + 4, 160);
    
    fill(0,0,0);
    rect(26, 180, x5waarde, 30);
    fill(255,255,255);
    text(words[t[4]] + ' ' + round(x5waarde/300*100) + '%',26 + 4, 200);
  }
}

function mousePressed (){
  if(condition == 0){
  r1x = 0;
  r1y = -4;

  r2x = -4;
  r2y = 0;
  
  start = 1;
  condition = 1;
}
}