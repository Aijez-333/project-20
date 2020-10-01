var car1, car2, car3;
var wall1, wall2, wall3;
var road1, road2, road3;
var speed1,speed2,speed3,weight;


function setup() {
  createCanvas(600,400);

  speed1 = random(55,90)
  speed2 = random(55,90)
  speed3 = random(55,90)
  weight = random(400,1500)

  road1 =createSprite(300,100,600,90)
  road1.shapeColor = "black";

  road2 =createSprite(300,200,600,90)
  road2.shapeColor = "black";

  road3 =createSprite(300,300,600,90)
  road3.shapeColor = "black";


  car1 = createSprite(100, 100, 50, 25);
  car1.velocityX = speed1;
  car1.shapeColor="white";
  
  car2 = createSprite(100, 200, 50, 25);
  car2.velocityX = speed2;
  car2.shapeColor="white";
  
  car3 = createSprite(100, 300, 50, 25);
  car3.velocityX = speed3;
  car3.shapeColor="white";

  wall1 = createSprite(500,100,10,60)

  wall2 = createSprite(500,200,10,60)

  wall3 = createSprite(500,300,10,60)
 
  

}

function draw() {
  background(255,255,255); 

  if(wall1.x - car1.x < (car1.width+wall1.width)/2){
car1.velocityX = 0
var deformation = (0.5*weight*speed1*speed1)/22500
if(deformation>180){
  car1.shapeColor = "red";
}
if(deformation<180&&deformation>100){
  car1.shapeColor = "yellow";
}
if(deformation<100){
  car1.shapeColor = "green";
}

  }

  if(wall2.x - car2.x < (car2.width+wall2.width)/2){
    car2.velocityX = 0
    var deformation = (0.5*weight*speed2*speed2)/22500
    if(deformation>180){
      car2.shapeColor = "red";
    }
    if(deformation<180&&deformation>100){
      car2.shapeColor = "yellow";
    }
    if(deformation<100){
      car2.shapeColor = "green";
    }
    
      }

      if(wall3.x - car3.x < (car3.width+wall3.width)/2){
        car3.velocityX = 0
        var deformation = (0.5*weight*speed3*speed3)/22500
        if(deformation>180){
          car3.shapeColor = "red";
        }
        if(deformation<180&&deformation>100){
          car3.shapeColor = "yellow";
        }
        if(deformation<100){
          car3.shapeColor = "green";
        }
        
          }

  drawSprites();
}

function isTouching(object1,object2){
if(object1.x-object2.x<object1.width/2+object2.width/2
&&object2.x-object1.x<object2.width/2+object1.width/2
&&object1.y-object2.y<object1.height/2+object2.height/2
&&object2.y-object1.y<object2.height/2+object1.height/2){
return true;
}
else{
  return false;
}

}

function bounceOff(object1,object2){
  if(object1.x-object2.x < object1.width/2+object2.width/2
  &&object2.x-object1.x < object1.width/2+object2.width/2){
    object1.velocityX = object1.velocityX *(-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if(object1.y-object2.y < object1.height/2+object2.height/2
  &&object2.y-object1.y < object1.height/2+object2.height/2){
    object1.velocityY = object1.velocityY *(-1);
    object2.velocityY = object2.velocityY *(-1); 
  }



}
