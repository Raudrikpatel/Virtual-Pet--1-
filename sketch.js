//Create variables here
var dog,happyDog,database,foodS,foodStock;
function preload()
{
  //load images here
  dog_Image=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(300,300,20,20)
  dog.addImage(dog_Image)
  dog.scale=0.3;
}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here

if(keyIsDown("UP_ARROW")){
  fill("red") 
  text("food:  " + count , 200, 20)

}
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy)
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}
}
foodStock=database.ref('food');
foodStock.on("value",writeStock);



