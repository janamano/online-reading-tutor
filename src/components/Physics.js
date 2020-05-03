import Matter from 'matter-js';
import Constants from './Constants.js';
import Obstacle from './Obstacle.js';

let obstacles = 0;
let timer = 0;
let frameCount = 0;
let currentFrame = 1;



export const addObstacleToGame = (px, py, x, world, entities) => {
    let rad1 = Matter.Common.random(30, 100);
    let ox = x;
    let oy = Constants.MAX_HEIGHT / 2;
    let obstacle1 = Matter.Bodies.circle(
        ox,
        oy,
        rad1,
        {
            isStatic: true,
        }
    );
    Matter.World.add(world, [obstacle1]);
    // get force and direction to apply
    let fx = px - ox;
    let fy = py -oy;

    // get rotation
    let rotation = Math.asin(fy/fx);
    // Matter.Body.rotate(obstacle1, rotation);
    entities["obstacle" + obstacles] = {
        body: obstacle1, angle: rotation, fx: fx, fy: fy, rad: rad1, scoreClaimed: false, goingUp: true, renderer: Obstacle
    }
    obstacles += 1

}
export const collisionCheck = (otherBody, playerBody, dispatch) => {
    let collision = Matter.SAT.collides(otherBody, playerBody);
    if (collision.collided) {
        dispatch({ type: "game-over" });
    }
}

// export const addObstacleToGame = (x, world, entities) => {
//     let obstacleHeight = generateObstacleHeight();
//     let width = Constants.OBSTACLE_WIDTH;
//     let rad1 = Matter.Common.random(30, 70);
//     let rad2 = Matter.Common.random(30, 70);
//     let obstacle1 = Matter.Bodies.circle(
//         x,
//         Constants.MAX_HEIGHT / 2,
//         rad1,
//         {
//             isStatic: true,
//             render: {
//                 texture: require('../assets/game/ball.png')
//             }
//         }
//     );
    
//     let obstacle2 = Matter.Bodies.circle(
//         x,
//         Constants.MAX_HEIGHT / 2 ,
//         rad2,
//         {
//             isStatic: true,
//             render: {
//                 texture: require('../assets/game/ball.png')
//             }
//         }
//     );

//     Matter.World.add(world, [obstacle1, obstacle2]);
//     entities["obstacle" + obstacles] = {
//         body: obstacle1, rad: rad1, scoreClaimed: false, goingUp: true, renderer: Obstacle
//     }
//     obstacles += 1
//     entities["obstacle" + obstacles] = {
//         body: obstacle2, rad: rad2, scoreClaimed: false, goingUp: false, renderer: Obstacle
//     }
//     obstacles += 1


// }

const Physics = (entities, { touches, time, dispatch }) => {
    let engine = entities.physics.engine;
    let player = entities.player.body;
    let world = entities.physics.world;
    let firstPress = false;
    touches.filter(t => t.type === "press").forEach(t => {
        if (!firstPress) {
            world.gravity.y = 1.2;
        }
        Matter.Body.setVelocity(player, {x: player.velocity.x, y: -10 });
    });

    var collision1 = Matter.SAT.collides(player, entities.platform1.body);
    var collision2 = Matter.SAT.collides(player, entities.platform2.body);
 
    if (timer >= 110) {
        timer = 0;
        addObstacleToGame(player.position.x, player.position.y, (Constants.MAX_WIDTH), world, entities);        
    } else {
        timer += 1;
    }

    Object.keys(entities).forEach(key => {
        if (key.indexOf("obstacle") === 0 && entities.hasOwnProperty(key)){

            collisionCheck(entities[key].body, player, dispatch);
            Matter.Body.translate(entities[key].body, {x: entities[key].fx * 0.01, y: entities[key].fy * 0.013});
            Matter.Body.rotate(entities[key].body, entities[key].angle);
            if (entities[key].body.position.x <= player.position.x && !entities[key].scoreClaimed) {
                entities[key].scoreClaimed = true;
                dispatch({ type: "scored" });
            }

            var obstacleCeilingCollision1 = Matter.SAT.collides(entities[key].body, entities['platform3'].body);
            var obstacleCeilingCollision2 = Matter.SAT.collides(entities[key].body, entities['platform4'].body);
            var obstaclePlatformCollision3 = Matter.SAT.collides(entities[key].body, entities['platform1'].body);
            var obstaclePlatformCollision4 = Matter.SAT.collides(entities[key].body, entities['platform2'].body);

            if (obstacleCeilingCollision1.collided || obstacleCeilingCollision2.collided || obstaclePlatformCollision3.collided || obstaclePlatformCollision4.collided) {
                if (entities[key].goingUp) {
                    entities[key].goingUp = false
                } else {
                    entities[key].goingUp  = true
                }
            }
        } else if (key.indexOf("platform") === 0){
            collisionCheck(entities[key].body, player, dispatch);
            if (entities[key].body.position.x <= -1 * Constants.MAX_WIDTH){
                Matter.Body.setPosition(entities[key].body, { x: Constants.MAX_WIDTH, y: entities[key].body.position.y})
            } else {
                Matter.Body.translate(entities[key].body, {x: -2, y: 0});
            }
        }
    })

    Matter.Engine.update(engine, time.delta)

    return entities;
}

export default Physics;
