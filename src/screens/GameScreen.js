import * as React from 'react';
import { Text, View, Button } from 'react-native';

// import the global styles for the button 
import globalStyles from "./../styles/global.js"


function GameScreen({ navigation }) {
    return (
        <View>
            <Text
                style={globalStyles.primaryBtn}
            >Game before the lesson!</Text>
            <Button
                color="red"
                style={globalStyles.primaryBtn}
                title="Click here to go to individual lesson"
                onPress={() => navigation.navigate('Lesson')}
            ></Button>
        </View>
    );
}



export default GameScreen;