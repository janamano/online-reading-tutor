import React, { Component } from "react";
import { StyleSheet, StatusBar, Text, View, Image, Button, Alert } from "react-native";
import Modal from 'react-native-modal';
import { GameEngine } from "react-native-game-engine";
import Matter from 'matter-js';
import Constants from './Constants.js';
import Player from './Player.js';
import Physics from './Physics.js';
import Platform from './Platform.js';

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
    let player = Matter.Bodies.rectangle(0, Constants.MAX_HEIGHT / 2, 50, 50);
    let platform1 = Matter.Bodies.rectangle(
      0,
       Constants.MAX_HEIGHT - 150,
        Constants.MAX_WIDTH + 4,
         50,
         { isStatic: true });

    let platform2 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH,
      Constants.MAX_HEIGHT - 150,
      Constants.MAX_WIDTH + 4,
        50,
        { isStatic: true });

    Matter.World.add(world, [player, platform1, platform2]);
 

    return {
      physics: { engine: engine, world: world },
      player: { body: player, size: [50, 50], color: 'blue', renderer: Player },
      platform1: { body: platform1, size: [Constants.MAX_WIDTH + 4, 50], renderer: Platform },
      platform2: { body: platform2, size: [Constants.MAX_WIDTH + 4, 50], renderer: Platform },

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
            {/* <Image style={styles.backgroundImage} resizeMode="stretch" source={require("../assets/game_menu.png")} /> */}
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
    // top:  0,
    // bottom: 0,
    left: -Constants.MAX_WIDTH / 2,
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
},
gameOverSubText: {
    color: 'white',
    fontSize: 24,
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

});