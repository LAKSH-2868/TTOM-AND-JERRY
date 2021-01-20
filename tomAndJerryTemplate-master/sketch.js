var garden,gardenImage;
var chuha,chuhaImage;
var billi,billiImage,billirunning;

function preload() {
    //load the images here
    gardenImage = loadImage("garden.png");
    chuhaImage = loadImage("jerry1.png");
    billiImage = loadImage("tomOne.png");
    billirunning = loadAnimation("tomThree.png","tomTwo.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage("garden",gardenImage);

    chuha = createSprite(250,600);
    chuha.addImage("chucha",chuhaImage);
    chuha.scale = 0.1;

    billi = createSprite(750,600);
    billi.addImage("billis",billiImage);
    billi.scale=0.12;

    billirunning = createSprite(750,600);
    billirunning.addAnimation("billa",billirunning);


    
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide3

    keyPressed();
   
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    billirunning.velocityX = -5
    billirunning.changeAnimation("billa",billirunning);
}

}
