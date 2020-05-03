// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

var world, engine;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1366, 653); 

	engine = Engine.create();
	world = engine.world;


    ground = new Ground();

    tanker = new Tanker(100,height - 220,200,200);

    tankHead = new TankHead(216,height - 208,60,60);
}

function draw() {

    background("lightskyblue");
	Engine.update(engine);
    
    ground.display();
    
    tankHead.display();
    tanker.display();
    
}


function keyReleased() {
    // Call the shoot method for the cannon.
}