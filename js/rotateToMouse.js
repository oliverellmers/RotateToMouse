

var p1, p2, dir;
var isMousePressed = false;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  var fov = 60 / 180 * PI;
  var cameraZ = height / 2.0 / tan(fov / 2.0);
  perspective(60 / 180 * PI, width / height, cameraZ * 0.1, cameraZ * 10);

  p1 = createVector(-200, 100, -200);
  p2 = createVector(200, 100, -500);

}

function draw() {
  drawBoxes();
}


function drawBoxes(){
  background(255);
  //p1.x = map(mouseX, 0, width, -400, 400);
  //p1.y = map(mouseY, 0, height, -400, 400);
  p1.x = winMouseX;
  p1.y = winMouseY;
  p1.z = -400;

  var boxSize = width / 30;
  var stepSize = boxSize * 1.75;

  translate(width/2 + boxSize/2, height/2 + boxSize/2);

  push();
  pointLight(200, 200, 200, p1.x, -p1.y + height/2, p1.z);
  pop();

  
  for(var x = 50; x < width - boxSize/2 - 100; x+=stepSize){
    for(var y = 50; y < height - boxSize/2 - 100; y+= stepSize){

      var tempP2 = createVector(x, y,100);
      //dir = p5.Vector.sub(p2, p1);
      dir = p5.Vector.sub(tempP2, p1);

      var pitch = asin(dir.y / dir.mag());
      var yaw = -asin(dir.x / (cos(pitch) * dir.mag()));


      push();
      translate(x - width + boxSize/2,y - height, 0);
      rotateX(-pitch);
      rotateY(yaw);
      
      //normalMaterial();

      //box(boxSize);
      sphere(boxSize * 0.5);
      pop();
    }

  }

}

function mousePressed(){
  isMousePressed = true;

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}




