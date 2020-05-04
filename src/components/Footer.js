import * as React from "react";
import {
  View, StyleSheet, Button
} from "react-native";

import Iconicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

// internal components
//import { Button } from "./Button";


// import styles
import variables from "../styles/variables";

const Footer = (props) => {
  return (
    <View style={styles.container}>
      <View>
      <Icon.Button
        name="home" 
        size={40} 
        color= {variables.palette.blue.primary}
        backgroundColor="black"
        onPress={() => props.navigation.navigate("Home")}>
      </Icon.Button>
      </View>
      <View style={{marginRight: 100/2, marginLeft: 100/2}}>
      <Icon.Button
        name="list-ul" 
        size={40} 
        color={variables.palette.blue.primary}
        backgroundColor="black"
        onPress={() => props.navigation.navigate("Lessons")}>
      </Icon.Button>
      </View>
      <View>
      <Icon.Button
        name="trophy" 
        size={40} 
        color={variables.palette.blue.primary}
        backgroundColor="black"
        onPress={() => props.navigation.navigate("Badges")}>
      </Icon.Button>
      </View>
    </View>

  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    left: 100/2,
    right: 100/2
  },

  hairline: {
    borderBottomColor: variables.palette.gray.primary,
    width: 400,
    height: 2,
  }, 
});

/*
      <Button
        onPress={() => props.navigation.navigate("Lessons")}
      >
      </Button>
      <Button
        onPress={() => props.navigation.navigate("Badges")}
      >
        </Button>*/