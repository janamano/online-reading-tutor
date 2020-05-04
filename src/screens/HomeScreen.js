import * as React from "react";
import {
    Platform, StyleSheet, Text, View, Dimensions, Image,TouchableOpacity, ImageBackground
} from "react-native";

import Profile from "../components/Profile";
import Footer from "../components/Footer";

// internal components
import { Button, BottomSheet } from "../components/index";
import globalStyles from "../styles/global";
import Constants from "../components/Constants.js";




const instructions = Platform.select({
  ios: "Press Cmd+R to reload for ios,\nCmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\nShake or press menu button for dev menu"
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});


const HomeScreen = (props) => {
    return (
      <View style={styles.container}>
       <View>
        <Profile badges={props.badges}/>
        <Footer navigation={props.navigation}/>
        </View>
      </View>
    );
}
export default HomeScreen;
