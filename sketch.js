var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var divisions = [];
  var particles = [];
  var plinkos = [];

  var score = 0;
  var gameState = "start";
  var count = 0;
  var particle;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <= width; k = k+80) {
    divisions.push(new Divisions(k,650,10,300));
  }
  for (var j = 10; j <= width; j= j+50){
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 70; j <= width; j= j+50){
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 10; j <= width; j= j+50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 70; j <= width; j= j+50){
    plinkos.push(new Plinko(j,375));
  }
}


function draw() {
  background("black");
  textSize(35);
  text("Score : "+score,20,40);
 fill("white"); 
  //text(mouseX + "," + mouseY, 20, 50);
   text(" 500 ", 5, 550); 
   text(" 500 ", 80, 550);
   text(" 500 ", 160, 550); 
   text(" 500 ", 240, 550); 
   text(" 100 ", 320, 550); 
   text(" 100 ", 400, 550); 
   text(" 100 ", 480, 550); 
   text(" 200 ", 560, 550); 
   text(" 200 ", 640, 550); 
   text(" 200 ", 720, 550);
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  if(particle!=null) {
   particle.display();
 if (particle.body.position.y>760) { 
    if (particle.body.position.x < 300) {
           score=score+500;
            particle=null; 
            if ( count>= 5) gameState ="end";
           }
            else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) { 
              score = score + 100;
               particle=null;
                if ( count>= 5) gameState ="end";
               } 
               else if (particle.body.position.x < 900 && particle.body.position.x > 601 ) {
                  score = score + 200;
                   particle=null; 
                   if ( count>= 5) gameState ="end"; 
                  } 
                }
               }
  for (var j = 0; j < particles.length; j++) { particles[j].display(); }
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
   
}
function mousePressed() { 
  if(gameState!=="end") { 
    count++;
     particle=new Particle(mouseX, 10, 10);
     } 
    }