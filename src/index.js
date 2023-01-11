import Matter from "matter-js"

// module aliases
const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite;

// create an engine
const engine = Engine.create();

// create a renderer
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    showDebug: true
  }
});

// render.options.wireframes = false

// create two bodies and a ground

function createBall() {
  return Bodies.circle(Math.floor(Math.random() * 800), 50, 10)
}

function addBall(arr) {
  arr.push(createBall())
}

const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true});

const balls = []
for(let i = 0; i < 300; i++) {
  balls.push(createBall())
}



balls.push(ground)

const canvas = document.querySelector('canvas')
canvas.addEventListener('click', () => {
  console.log('add');
  addBall(balls)
})


// add all the bodies to the world
Composite.add(engine.world, balls);

// run the render
Render.run(render);

// create runner
const runner = Runner.create();

//run the engine
Runner.run(runner, engine);