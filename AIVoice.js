function preload(){
    sound = loadSound('/StoreOfTheFutureDemo/asset/voicebooking-speech.wav');
  }
  
  function setup(){
    let canvas = createCanvas(300,300);
    canvas.parent("p5");
    canvas.mouseClicked(togglePlay);
    fft = new p5.FFT();
    sound.amp(0.2);
  }
  
  function draw(){
    background(0);
  
    let spectrum = fft.analyze();
    noStroke();
    fill(255, 132, 255);
    for (let i = 0; i< spectrum.length; i++){
      let x = map(i, 0, spectrum.length, 0, width);
      let h = -height + map(spectrum[i], 0, 255, height, 0);
      rect(x, height, width / spectrum.length, h )
    }
  
    let waveform = fft.waveform();
    noFill();
    beginShape();
    stroke(20);
    for (let i = 0; i < waveform.length; i++){
      let x = map(i, 0, waveform.length, 0, width);
      let y = map( waveform[i], -1, 1, 0, height);
      vertex(x,y);
    }
    endShape();
  
    text('tap to play', 20, 20);
  }
  
  function togglePlay() {
    if (sound.isPlaying()) {
      sound.pause();
    } else {
      sound.play();
    }
  }