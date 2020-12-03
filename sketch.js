//Create variables here
var dog , dogimg , happydog ;
var database;
var foods, foodstock;

function preload()
{
  //load images here
  dogimg = loadImage("dogimg.png");
  happydog = loadImage("dogimg1.png");
}


function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,300,10,10);
  database=firebase.database();
  dog.addImage(dogimg)
  dog.scale=0.2;
  foodstock=database.ref('Food');
  foodstock.on("value",readstock);
}


function draw() {  
  background(46, 139, 87) 

  if(keyWentDown(UP_ARROW)){
    foods=foods-1
    writestock(foods);
    dog.addImage(happydog)
  }

  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogimg)
  }

  if(keyWentDown(LEFT_ARROW)){
    foods=30
    writestock(foods);
    dog.addImage(dogimg)
  }
  
  drawSprites();
  textSize(20)
  fill("red")
  text("food remaining =" + foods,170,200);

  textSize(15);
  fill("black");
  text("Note:press upp arrow key to feed dog",130,18);

  textSize(15);
  fill("black");
  text("Note:press leftarrow key to reset food remaining",105,50);
}
  

  //add styles here


  function readstock(data){
    foods=data.val();
  }

  function writestock(x){
    database.ref('/').update({
      Food:x
    })
  }




