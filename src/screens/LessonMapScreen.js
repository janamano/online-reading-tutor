import * as React from 'react';
import { StyleSheet,Text, View, Button } from 'react-native';
import CarouselCards from '../components/Carousel.js';
import WorldsConstants from '../components/WorldsConstants'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WorldsConstants.WORLDS_BG_COLOR,
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
function LessonMapScreen({ navigation }) {
    return (
        <View style= { styles.container }>
                <View>
                    <CarouselCards navigation = {navigation}/>

                </View>
        </View>

    );
}



export default LessonMapScreen;
