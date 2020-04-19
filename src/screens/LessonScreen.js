import * as React from 'react';
import { Text, View, Button } from 'react-native';


function LessonScreen(props) {
    return (
        <View>
            <Text>Lesson Simulation</Text>
            <Button title="Click here to finish lesson (go back to home screen)"
							onPress = {
							    () => {
							        props.navigation.navigate('Home');
							        props.badgeUpdate.updateState();
							    }
							}
						>
            </Button>
        </View>
    );
}



export default LessonScreen;