var i;
let canvaswidth = 1200;
let canvasheight = 450;

let capturewidth = 450;
let captureheight = 325;

let white = 255;
let black = 0;
let grey = 150;

let imgs = [];
let numImgs = 13
let randoImg;

function preload() {

  let fot1 = loadImage('asset/Clothing/kleding_1.png');
  let fot2 = loadImage('asset/Clothing/kleding_2.png');
  let fot3 = loadImage('asset/Clothing/kleding_3.png');
  let fot4 = loadImage('asset/Clothing/kleding_4.png');
  let fot5 = loadImage('asset/Clothing/kleding_5.png');
  let fot6 = loadImage('asset/Clothing/kleding_6.png');
  let fot7 = loadImage('asset/Clothing/kleding_7.png');
  let fot8 = loadImage('asset/Clothing/kleding_8.png');
  let fot9 = loadImage('asset/Clothing/kleding_9.png');
  let fot10 = loadImage('asset/Clothing/kleding_10.png');
  let fot11 = loadImage('asset/Clothing/kleding_11.png');
  let fot12 = loadImage('asset/Clothing/kleding_12.png');
  let fot13 = loadImage('asset/Clothing/kleding_13.png');
  let fot14 = loadImage('asset/Clothing/kleding_14.png');
  imgs = [fot1, fot2, fot3, fot4,fot5, fot6, fot7, fot8,fot9, fot10, fot11, fot12,fot13,fot14];
  randoImg = random(imgs);

}

function setup() {
    let canvas = createCanvas(capturewidth,captureheight);
    canvas.parent("p5");

    capture = createCapture(VIDEO);
    capture.size(capturewidth, captureheight);
    capture.hide();
}

function draw() {
  background(white);
  image(capture, 0, 0, capturewidth, captureheight);

  image(randoImg, -160, 80);

}