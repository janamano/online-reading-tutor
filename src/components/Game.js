import React, { Component } from "react";
import {
  StyleSheet, StatusBar, Text, View, Image, Button, Alert
} from "react-native";
import Modal from "react-native-modal";
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";
import Constants from "./Constants.js";
import Player from "./Player.js";
import Physics from "./Physics.js";
import Platform from "./Platform.js";
import { getHighScore, setHighScore, storeWrapper } from "./Helpers.js"

export class Game extends Component {
  constructor(props) {
    super(props);
    this.gameEngine = null;
    this.entities = this.setupWorld();
    this.goToHome = this.goToHome.bind(this);

    this.state = {
      running: true,
      showModal: false,
      score: 0,
      lastScore: 0 
    }
  }

  setupWorld = () => {
    const engine = Matter.Engine.create({ enableSleeping: false });
    const world = engine.world;
    world.gravity.y = 0.0;
    // player and platform
    let player = Matter.Bodies.rectangle(-Constants.MAX_WIDTH / 5, Constants.MAX_HEIGHT / 2, 60*(Constants.RATIO), 60); 
    let platform1 = Matter.Bodies.rectangle(
      0,
      Constants.MAX_HEIGHT - 150,
      Constants.MAX_WIDTH + 4,
      50,
      { isStatic: true }
    );

    const platform2 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH,
      Constants.MAX_HEIGHT - 150,
      Constants.MAX_WIDTH + 4,
      50,
      { isStatic: true }
    );
    
    // platform 3 and 4 are ceiling
    let platform3 = Matter.Bodies.rectangle(
      0,
      Constants.MAX_HEIGHT / 100,
      Constants.MAX_WIDTH + 4,
      50,
      { isStatic: true }
    );

    const platform4 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH,
      Constants.MAX_HEIGHT / 100,
      Constants.MAX_WIDTH + 4,
      50,
      { isStatic: true }
    );

    Matter.World.add(world, [player, platform1, platform2, platform3, platform4]);
    
    // touch anything you die
    // Matter.Events.on(engine, 'collisionStart', (event) => {
    //   var pairs = event.pairs;

    //   this.gameEngine.dispatch({ type: "game-over"});

    // });

    return {
      physics: { engine: engine, world: world },
      player: { body: player, renderer: Player },
      platform1: { body: platform1, renderer: Platform },
      platform2: { body: platform2, renderer: Platform },
      platform3: { body: platform3, renderer: Platform },
      platform4: { body: platform4, renderer: Platform }

    };
  }

  goToHome = () => {
    this.props.navigation.navigate("Home");
    this.setState({
      showModal: false
    });
  }

  onEvent = (e) => {
    if (e.type === "game-over") {
      this.setState({
        lastScore: this.state.score
      });
      setHighScore(this.state.score);
      storeWrapper();
      this.setState({
        running: false,
        showModal: true,
        score: 0
      });
      //this.showAlert()
    } else if (e.type === "scored") {
      this.setState({
        score: this.state.score + 1
      });
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
            <Image style={styles.backgroundImage} resizeMode="stretch" source={require("../assets/game/background.png")} />
            <GameEngine
                ref={(ref) => { this.gameEngine = ref; }}
                style={styles.gameContainer}
                systems={[Physics]}
                running={this.state.running}
                onEvent={this.onEvent}
                entities={this.entities}>
                <StatusBar hidden={true} />
            </GameEngine>
            <Text style={styles.score}>{this.state.score}</Text>
            <View>
              <Modal animationType = {"slide"} transparent = {true}
                visible = {this.state.showModal} >
                  <View style={styles.gameOverContainer}>
                    <Text style={styles.gameOverText}> Game Over </Text>
                    <Text style={styles.gameOverScoreText}> Score: {this.state.lastScore} </Text>
                    <Text style={styles.gameOverScoreText}> High Score: {getHighScore()} </Text>
                    <Image
                      source=
                      {require('../assets/game/sprite.png')}
                      style={styles.ImageIconStyle}
                    />
                    <Button title = "Restart" onPress= {() => this.reset()} />
                    <Button title = "Exit" onPress= {() => this.goToHome()} />
                  </View>
              </Modal>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
},
score: {
  position: 'absolute',
  color: 'white',
  fontSize: 72,
  top: 50,
  left: -20,
  textShadowColor: '#444444',
  textShadowOffset: { width: 2, height: 2},
  textShadowRadius: 2,
},
backgroundImage: {
    position: 'absolute',
    // top:  0,
    // bottom: 0,
    left: -Constants.MAX_WIDTH / 2,
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT
  },
  gameContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  gameOverText: {
    color: "black",
    fontSize: 40,
    alignSelf: "center",
    padding: 10,
    textShadowColor: '#444444',
    textShadowOffset: { width: 2, height: 2},
    textShadowRadius: 2,
  },
  gameOverScoreText: {
    color: "black",
    fontSize: 20,
    alignSelf: "center",
    padding: 10
  },
  gameOverSubText: {
    color: "white",
    fontSize: 24
  },
  gameOverContainer: {
    backgroundColor: "#ffffff",
    alignSelf: "center",
    borderRadius: 10,
    width: 350,
    height: 600,
    flex: 0.5
  },
  ImageIconStyle: {
    width: 250,
    height: 140,
    alignSelf: "center",
    margin: 25
  }

});
