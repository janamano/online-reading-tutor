import * as React from 'react';
import { Text, View, Button } from 'react-native';


function LessonScreen({ navigation }) {
    return (
        <View>
            <Text>Lesson Simulation</Text>
            <Button title="Click here to finish lesson (go back to home screen)"
                onPress={() => navigation.navigate('Home')}
            ></Button>
        </View>
    );
}



export default LessonScreen;