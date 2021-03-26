//create all the global variables needed
var ninja
var ninjaJump , ninjaWalk , ninjaDie
var test
var weapon1,weapon2,weapon3,weapon4
var enemy;

// load all your images
function preload(){
ninjaWalk=loadImage("images/w1.png");
//ninjaWalk= loadAnimation("images/w1.png","images/w8.png")
ninjaDie= loadAnimation("images/die.png")
//test = loadImage("images/w8.gif")
weapon1img= loadImage("images/weapon1.png")
//enemyimg =loadImage("")
}


//declare all your sprite objects 
function setup() {
  createCanvas(1200,800);
 ninja=  createSprite(400, 200, 50, 50);
 ninja.addImage(ninjaWalk);
//ninja.addAnimation("walk",ninjaWalk);
//ninja.addAnimation("Die",ninjaDie);
//ninja.addAnimation("Jump",ninjaJump);

// create sprites for weapon1,2,3,4,
weapon1=createSprite(50,100,10,10)
weapon1.addImage(weapon1img)
//create a weapon group and add all the 1,2,3,4 in them
weaponGroup=new Group()
weaponGroup.add(weapon1)

//create a sprite for enenmy,add image
enemy = createSprite(200,100,20,30)

}
//add the functionality of objects
function draw() {
  background(255,255,255); 
  
  var r = Math.round((1,4))
  console.log(r)
// to display weapons randomly
  if(r === 1){
  weapon1.visible=true
  }
  if(r === 2){
    weapon2.visible=true
    }

if(weaponGroup.isTouching(ninja)){
  //weapon is invisible and score and sound will display
  //weapon should disappear
  if(r === 1){
    weapon1.visible=false;
    }
    if(r === 2){
      weapon2.visible=false;
      }

}

if(enemy.isTouching(ninja)){
  // ninja is dead one life is lost
//ninja.changeAnimation("Die",ninjaDie);
ninja.addImage(ninjaDie);
  
}


  if(keyDown("U") || (keyDown("UP_ARROW")))
  {
  /*console.log("Ashrith")*/
   ninja.y=ninja.y-20
  }
  
  if(keyDown("DOWN_ARROW") || (keyDown("D"))){
    ninja.y=ninja.y+20
  }

  if(keyDown("RIGHT_ARROW") || (keyDown("R"))){
     ninja.x=ninja.x+20
  }

  if(keyDown("LEFT_ARROW") || (keyDown("L"))){
     ninja.x=ninja.x-20
  }

  drawSprites();
}