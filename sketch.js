var dog, happyDog, database, foodS, foodStock,dogImage;

function preload()
{
   
  happyDog = loadImage("dogImg1.png");
  dogImage=loadImage("dogImg.png");
 
}


function setup() {
  database=firebase.database();
  createCanvas(500, 500); 
  
  dog = createSprite(200,200,200,200);
  dog.addImage(dogImage);
  dog.scale=0.15;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
   
  }
 text("Food remaining : "+foodS,170,200);
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })

}



