import Matter from 'matter-js';
import Constants from './Constants.js';
import Obstacle from './Obstacle.js';

let jumps = 0;
let obstacles = 0;
let timer = 0;

export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
export const generateObstacleHeight = () => {
    let obstacleHeight = randomNumber(50, (Constants.MAX_HEIGHT / 8));
    return obstacleHeight;
}

export const addObstacleToGame = (x, world, entities) => {
    let obstacleHeight = generateObstacleHeight();
    let width = Constants.OBSTACLE_WIDTH;

    let obstacle = Matter.Bodies.rectangle(
        x,
        Constants.MAX_HEIGHT - (obstacleHeight / 2) - 175,
        width,
        obstacleHeight,
        {isStatic: true}
    );

    Matter.World.add(world, [obstacle]);
    entities["obstacle" + obstacles] = {
        body: obstacle, size: [width, obstacleHeight], renderer: Obstacle
    }
    obstacles += 1

}

const Physics = (entities, { touches, time }) => {
    let engine = entities.physics.engine;
    let player = entities.player.body;
    let world = entities.physics.world;

    touches.filter(t => t.type === "press").forEach(t => {
        
        if (jumps < 1) {
            Matter.Body.setVelocity(player, {x: player.velocity.x, y: -10});
            jumps += 1;
        }

    });

     var collision1 = Matter.SAT.collides(player, entities.platform1.body);
     var collision2 = Matter.SAT.collides(player, entities.platform2.body);

    if (collision1.collided || collision2.collided) {
        jumps = 0;
    }

    if (timer >= 250) {
        timer = 0;
        addObstacleToGame((Constants.MAX_WIDTH * 2) - (Constants.OBSTACLE_WIDTH / 2), world, entities);
    } else {
        timer += 1;
    }

    Object.keys(entities).forEach(key => {
    if (key.indexOf("obstacle") === 0 && entities.hasOwnProperty(key)){
        Matter.Body.translate(entities[key].body, {x: -2, y: 0});

    } else if (key.indexOf("platform") === 0){
            if (entities[key].body.position.x <= -1 * Constants.MAX_WIDTH){
                Matter.Body.setPosition(entities[key].body, { x: Constants.MAX_WIDTH, y: entities[key].body.position.y})
            } else {
                Matter.Body.translate(entities[key].body, {x: -2, y: 0});
            }
        }
    })

    
    if (player.position.x != 0) {
        Matter.Body.setPosition(player, {x: 0, y: player.position.y})
    }

    Matter.Engine.update(engine, time.delta)

    return entities;
}

export default Physics;
