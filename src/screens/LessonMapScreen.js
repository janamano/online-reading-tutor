import * as React from 'react';
import { Text, View, Button } from 'react-native';


function LessonMapScreen({ navigation }) {
    return (
        <View>
            <Text>Lessons/Worlds screen</Text>
            <Button title="Click here to start a 'world'"
                onPress={() => navigation.navigate('Game')}
            ></Button>
        </View>
    );
}



export default LessonMapScreen;