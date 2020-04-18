import Matter from 'matter-js';
import Constants from './Constants.js';

const Physics = (entities, { touches, time }) => {
    let engine = entities.physics.engine;
    let player = entities.player.body;
    touches.filter(t => t.type === "press").forEach(t => {
        Matter.Body.applyForce(player, player.position, { x : 0.0, y: -0.1})
    });

    for (let i = 1; i < 3; i++) {
        if (entities["obstacle" +i].body.position.x <= -1 * (Constants.OBSTACLE_WIDTH + Constants.MAX_WIDTH / 2)) {
            Matter.Body.setPosition(entities["obstacle"+i].body, { x: Constants.MAX_WIDTH - (Constants.OBSTACLE_WIDTH / 2), y: entities["obstacle"+i].body.position.y});
        } else {
            Matter.Body.translate(entities["obstacle"+i].body, {x:-2, y:0});
        }
    }

    if (player.position.x != Constants.MAX_WIDTH / 950) {
        Matter.Body.setPosition(player, {x: Constants.MAX_WIDTH / 950, y: player.position.y})
    }

    Matter.Engine.update(engine, time.delta)

    return entities;
}

export default Physics;
