  let song, buttton, fft, space_between_lines = 2;
  
  function preload() {
    song = loadSound('/StoreOfTheFutureDemo/asset/voiceOver/AI_page 1_Agenda.mp3');
  }
  
  function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent("p5");
    angleMode(DEGREES); // Change the mode to DEGREES
    colorMode(HSB);
    buttton = select('#audioPlayer');
    song.play();  
    fft = new p5.FFT(0.9, 128);
    space_between_lines = width / 128;
  }
  
  //Switch to branch symmetric-spectrum using "git checkout symmetric-spectrum" if you want symmetric spectrum.
  
  function draw() {
    background(255);
    
    let spectrum = fft.analyze();
    fill(0);
    for (let i = 0; i < spectrum.length; i++) {
      let amp = spectrum[i];
      let y = map(amp, 0, 256, height, 0);
      rect(width - (i * space_between_lines), y, space_between_lines, height - y);
    }
  }
  
  // Chrome 70 will require user gestures to enable web audio api
  // Click on the web page to start audio
  function touchStarted() {
    getAudioContext().resume();
  }