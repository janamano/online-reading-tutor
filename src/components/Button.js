import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// import the global styles for the button 
import globalStyles from "./../styles/global.js"


function Button(props) {
    return (
        <TouchableOpacity
            style={globalStyles.primaryBtn}
            onPress={props.onPress}
        >
            <Text
                style={globalStyles.primaryBtnText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}



export default Button;