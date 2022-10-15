img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
  coin = loadSound("coin.wav");
  jump = loadSound("jump.wav");
  kick = loadSound("kick.wav");
  mariodie = loadSound("mariodie.wav");
  over = loadSound("gameover.wav");

}

function setup() {
	canvas = createCanvas(500,300);
	instializeInSetup(mario);

  video = createCapture(VIDEO);
  video.size(500,300);
  video.parent("console");

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw() {
game();
background("#D3D3D3");
  if(noseX < 300)
  {
    marioX = marioX - 1;
  }
  if(noseX > 300)
  {
    marioX = marioX + 1;
  }
  if(noseY < 150)
  {
    marioY = marioY - 1;
  }
  image(img,marioX, marioY, 40,70);
}

function modelLoaded(){
console.log("model is loaded");


}

function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +", noseY = " + noseY);
  }
}




