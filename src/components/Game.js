import React, { Component } from "react";
import { StyleSheet, StatusBar, Text, View, Image, Button, Alert, TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';
import { GameEngine } from "react-native-game-engine";
import Matter from 'matter-js';
import Constants from './Constants.js';
import Player from './Player.js';
import Physics from './Physics.js';
import Platform from './Platform.js';
import Obstacle from './Obstacle.js'


export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const generateObstacleHeight = () => {
  let obstacleHeight = randomNumber(50, (Constants.MAX_HEIGHT / 6));
  return obstacleHeight;
}

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.gameEngine = null;
    this.entities = this.setupWorld();
    this.goToHome = this.goToHome.bind(this)  ;

    this.state = {
      running: true,
      showModal: false
    }
  }

  setupWorld = () => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;

    // player and platform
    let player = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 950, Constants.MAX_HEIGHT / 2, 50, 50);
    let platform = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 1000, Constants.MAX_HEIGHT - 150, Constants.MAX_WIDTH, 50, { isStatic: true })

    // obstacles
    let height1 = generateObstacleHeight();
    let highPoint1 = Constants.MAX_HEIGHT - (height1 / 2) - 175;
    let obstacle1 = Matter.Bodies.rectangle(Constants.MAX_WIDTH - (Constants.OBSTACLE_WIDTH / 2), highPoint1, Constants.OBSTACLE_WIDTH, height1, {isStatic: true});

    let height2 = generateObstacleHeight()
    let highPoint2 = Constants.MAX_HEIGHT - (height2 / 2) - 175
    let obstacle2 = Matter.Bodies.rectangle(Constants.MAX_WIDTH * 2 - (Constants.OBSTACLE_WIDTH / 2), highPoint2, Constants.OBSTACLE_WIDTH, height2, {isStatic: true});
    
    // TODO: randomize obstacle size
    // TODO: replace boxes with with acutal avatars, obstacles using SVG or PNG

    Matter.World.add(world, [player, platform, obstacle1, obstacle2]);
    
    Matter.Events.on(engine, 'collisionStart', (event) => {
      // TODO: check collision for all obstacles
      var collision1 = Matter.SAT.collides(player, obstacle1);
      if (collision1.collided) {
          this.gameEngine.dispatch({ type: "game-over"});
      }

    });

    return {
      physics: { engine: engine, world: world },
      player: { body: player, size: [50, 50], color: 'blue', renderer: Player },
      platform: { body: platform, size: [Constants.MAX_WIDTH, 50], color: 'red', renderer: Platform },
      obstacle1: {body: obstacle1, size: [Constants.OBSTACLE_WIDTH, height1], color: 'yellow', renderer: Obstacle},
      obstacle2: {body: obstacle2, size: [Constants.OBSTACLE_WIDTH, height2], color: 'yellow', renderer: Obstacle}

    }
  }

  /*
  showAlert() {
    const {navigation, position} = this.props

    
    Alert.alert(
      'Game Over',
        '',
        [
          {text: 'Retart', onPress: () => this.reset()},
          {text: 'Exit', onPress: () => this.goToHome()},
        ]
      );
      
    }

*/

  goToHome = () => {
    this.props.navigation.navigate('Home')
    this.setState({
      showModal: false
    });
    }

  onEvent = (e) => {
    if (e.type === "game-over") {
      
      this.setState({
        running:false,
        showModal: true
      })
      //this.showAlert()
    }
  }

  reset = () => {
    this.gameEngine.swap(this.setupWorld());
    this.setState({
      running: true,
      showModal: false
    });
  }

  render() {
    return (
        <View style={styles.container}>
            <GameEngine
                ref={(ref) => { this.gameEngine = ref; }}
                style={styles.gameContainer}
                systems={[Physics]}
                running={this.state.running}
                onEvent={this.onEvent}
                entities={this.entities}>
                <StatusBar hidden={true} />
            </GameEngine>

            <View>
              <Modal animationType = {"slide"} transparent = {true}
                visible = {this.state.showModal} >
                  <View style={styles.gameOverContainer}>
                    <Text style={styles.gameOverText}> Game Over </Text>
                    <Image
                      source=
                      {require('../assets/baby_dragon.png')}
                      style={styles.ImageIconStyle}
                    />
                    <Button title = "Retart" onPress= {() => this.reset()} />
                    <Button title = "Exit" onPress= {() => this.goToHome()} />
                  </View>
              </Modal>
          </View>
          
            {/*<Text style={styles.score}>{this.state.score}</Text>
            {/* TODO: fix the gameover screen formatting and give option to restart the game */}
            {/*} {!this.state.running ?
                    <View onPress={this.reset}><Text style={styles.gameOverText}>Game Over</Text>
            <Text style={styles.gameOverSubText}>Try Again</Text></View> : null} */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#000',
},
backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT
},
gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
},
gameOverText: {
    color: 'black',
    fontSize: 48,
    alignSelf: 'center',
    padding: 10
    // fontFamily: '04b_19'
},
gameOverSubText: {
    color: 'white',
    fontSize: 24,
    // fontFamily: '04b_19'
},
gameOverContainer: {
    backgroundColor:"#ffffff",
    alignSelf: 'center',
    borderRadius: 10,
    width: 350,
    height: 600,
    flex: 0.5
},
ImageIconStyle: {
     width: 200,
     height: 200,
     alignSelf: 'center',
     margin: 25
}
// fullScreen: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'black',
//     opacity: 0.8,
//     justifyContent: 'center',
//     alignItems: 'center'
// },
// score: {
//     position: 'absolute',
//     color: 'white',
//     fontSize: 72,
//     top: 50,
//     left: Constants.MAX_WIDTH / 2 - 20,
//     textShadowColor: '#444444',
//     textShadowOffset: { width: 2, height: 2},
//     textShadowRadius: 2,
//     fontFamily: '04b_19'
// },
// fullScreenButton: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     flex: 1
// }
});