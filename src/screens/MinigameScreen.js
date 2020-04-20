import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import Game from '../components/Game.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
    },
});
function MinigameScreen({ navigation }) {
    return (
        <View style= { styles.container }>
            <ImageBackground style= { styles.backgroundImage } source={require('../assets/game_menu.png')} >
                <View>
                    <Game navigation = {navigation}/>
                </View>
            </ImageBackground>


        </View>

    );
}



export default MinigameScreen;