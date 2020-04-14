import variables from "./variables";

// global styles
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    primaryBtn: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 20,
        marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: variables.basePurple,
        borderRadius: 50
    },
    primaryBtnText: {
        paddingLeft: 15,
        paddingRight: 15,
        color: "white",
        textAlign: "center",
        fontSize: 18
    }
});
