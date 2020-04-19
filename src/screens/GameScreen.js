import * as React from 'react';
import { Text, View } from 'react-native';

// local components
import Button from "./../components/Button"

function GameScreen({ navigation }) {
    return (
        <View>
            <Text>Game before the lesson!</Text>
            <Button text="Click here to play a minigame"
                onPress={() => navigation.navigate('Minigame')}
            ></Button>
            <Button
                text="individual lesson"
                onPress={() => navigation.navigate('Lesson')}>
            </Button>
        </View>
    );
}



export default GameScreen;