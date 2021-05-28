var bg, cat, mouse;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png")
    mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("cat",catimg1);
    cat.scale = 0.3;
    mouse = createSprite(200,600);
    mouse.addAnimation("mouse",mouseimg1);
    mouse.scale = 0.2;
}

function draw() {
    
    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width-mouse.width)/2){
        mouse.addAnimation("mousehapp",mouseimg2);
        mouse.changeAnimation("mousehapp",mouseimg2);  
    }
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -3;
        cat.addAnimation("catrun",catimg2);
        cat.changeAnimation("catrun",catimg2);
        mouse.addAnimation("mouserun",mouseimg2);
    }

  //For moving and changing animation write code here


}
