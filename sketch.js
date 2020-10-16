var helicopterImg, helicopterSprite, packageSprite, packageImg;
var packageBody, ground;
var box1Sprite, box2Sprite, box3Sprite;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterImg = loadImage("helicopter.png");
	packageImg = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255);

	box1Sprite = createSprite(300, 610, 15, 100);
	box1Sprite.shapeColor = color("red");

	box2Sprite = createSprite(392, 660, 200, 15);
	box2Sprite.shapeColor = color("red");

	box3Sprite = createSprite(485, 610, 15, 100);
	box3Sprite.shapeColor = color("red");

	packageSprite = createSprite(width / 2, 200, 10, 10);
	packageSprite.addImage(packageImg);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterImg);
	helicopterSprite.scale = 0.7;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, {
		restitution: 0.5,
		isStatic: true
	});
	World.add(world, packageBody);

	//create Boxes

	box1 = Bodies.rectangle(300, 610, 15, 100, {
		isStatic: true
	});
	World.add(world, box1);

	box2 = Bodies.rectangle(392, 660, 200, 15, {
		isStatic: true
	});
	World.add(world, box2);

	box3 = Bodies.rectangle(485, 610, 15, 100, {
		isStatic: true
	});
	World.add(world, box3);

	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, {
		isStatic: true
	});
	World.add(world, ground);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;

	box1Sprite.x = box1.position.x;
	box1Sprite.y = box1.position.y;

	box2Sprite.x = box2.position.x;
	box2Sprite.y = box2.position.y;

	box3Sprite.x = box3.position.x;
	box3Sprite.y = box3.position.y;

	if (packageSprite.y >= box2Sprite.y - 100) {
		fill("lime");
		textSize(50);
		strokeWeight(2);
		stroke("red");
		text("MISSION SUCCESS!!", 170, 400);
	}


	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
}