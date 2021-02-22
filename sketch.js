var wall, thickness;
var bullet, weight , speed;


function setup(){
  createCanvas(1600, 800);

  weight = random(223,321);
  speed  = random(30,52);
  thickness = random(22,83)

  bullet = createSprite(100,400,100,30);
  bullet.shapeColor = ("white");
  bullet.velocityX = speed;

  wall = createSprite(1500,400,thickness,740);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("pink");  


  textSize(25);
  fill("green");
  strokeWeight(0);
  text("Green: damage = < 10 (BEST)",50,740);
  fill("red");
  text("Red: damage = > 10 (BAD)",50,770)

 if(hasCollided(bullet,wall)){
   bullet.velocityX = 0;
   var damage = 0.5 *weight * speed * speed/(thickness * thickness * thickness);

   if(damage > 5){
     bullet.shapeColor = ("black")
     wall.shapeColor = ("red");
   }
   if(damage < 5){
     bullet.shapeColor = ("black")
     wall.shapeColor = ("green");
   }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall){
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;

   if(bulletRightEdge >= wallLeftEdge){
     return true;
   }
     return false;
}  