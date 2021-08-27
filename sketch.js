const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var stones=[]


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground=new base(0,height-10,width*2,20,"#795548",true)
  leftWall=new base(300,height/2+50,600,100,"#8d6e63",true)
  rightWall=new base(width-300,height/2+50,600,100,"#8d6e63",true)
  joinPoint=new base(width-600,height/2+10,40,20,"#8d6e63",true)
  bridge=new Bridge(15,{x:width/2-400,y:height/2})
  Matter.Composite.add(bridge.body,joinPoint)
  joinLink=new link(bridge,joinPoint)
  for(var i=0;i<=8;i++){
    var X=random(width/2-200,width/2+300)
    var Y=random(-10,140)
    var S=new stone(X,Y,80,80)
    stones.push(S)
  }
}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show()
  leftWall.show()
  rightWall.show()
  joinPoint.show()
  bridge.show()
  for(var S of stones){
    S.show()
  }
}
