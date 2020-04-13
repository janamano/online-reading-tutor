import * as React from 'react';
import { Text, View, Button } from 'react-native';


function GameScreen({ navigation }) {
    return (
        <View>
            <Text>Game before the lesson!</Text>
            <Button title="Click here to go to individual lesson"
                onPress={() => navigation.navigate('Lesson')}
            ></Button>
        </View>
    );
}



export default GameScreen;