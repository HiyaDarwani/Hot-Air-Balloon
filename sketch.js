var Backgroundimg;
var balloon, balloonanimation;
var balloonpositionref

function preload(){
  Backgroundimg = loadImage("Background.png")
  balloonanimation = loadAnimation("Hot Air Ballon-01.png" ,"Hot Air Ballon-02.png" ,"Hot Air Ballon-03.png")
  


}

function setup() {
  createCanvas(1300,700);
  database = firebase.database();
  balloon = createSprite(400, 200, 50, 50);
  balloon.addAnimation("BALLOON",balloonanimation)
  balloonpositionref = database.ref("Balloon/Height")
  balloonpositionref.on("value", readHeight, showError)
  
}

function draw() {
  background(Backgroundimg);  
  drawSprites();
  
  if(keyDown(LEFT_ARROW)){
      balloon.x = balloon.x - 10;
  }
  else if(keyDown(RIGHT_ARROW)){
      balloon.x = balloon.x + 10; 
  }
  else if(keyDown(UP_ARROW)){
      balloon.y = balloon.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
      balloon.y = balloon.y +10;
  }


}

function updateHeight(x, y){
  database.ref(balloon/Height).set({
    x: Height.x + x,
    y: Height.y + y
  })
}

function readHeight(data){
Height = data.val()
balloon.x = Height.x
balloon.y =  Height.y

}

function showError(){
  console.log("Error in writing to the database")
}