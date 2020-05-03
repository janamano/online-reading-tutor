import * as React from "react";
import Constants from "../components/Constants.js";
import { StyleSheet, Text, View, Button, Alert, ScrollView, TouchableOpacity } from "react-native";
import { useState } from 'react';
import {
  updateBadgeState,
  updateLessonBadgeState,
  updateLessonAndWorldCompletion,
  checkAndIssueWorldBadge,
  storeWrapper,
  updateStreaksCount,
  checkAndIssueStreaksBadge,
} from "../components/Helpers";


PlaySound=(item)=>{


  Alert.alert(item);
}


function LessonScreen(props) {

  q_and_a = [

      { question: "dode", answer: ["dode", "dobe", "doke"]},
      { question: "jafe", answer: ["jase", "jafe", "jale"]},
      { question: "taje", answer: ["taje", "tade", "tabe"]},
      { question: "loce", answer: ["loze", "lote", "loce"]},
      { question: "bele", answer: ["bebe", "bele", "beke"]},
      { question: "jafe", answer: ["jase", "jafe", "jale"]},
      { question: "rike", answer: ["rike", "roke", "ruke"]},
      { question: "gake", answer: ["gace", "guke", "gake"]},
      { question: "pebe", answer: ["pabe", "pebe", "pibe"]},
      { question: "mupe", answer: ["mipe", "mupe", "mape"]}

    ];
  const [index, setIndex] = useState(0);
  const current = q_and_a[index];

  return (
 
      <View style={styles.MainContainer}>
       <Text style={styles.TextStyle} onPress={PlaySound.bind(this, current.question)} >{current.question}</Text>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.TextStyle} onPress={() => {
                                          if(current.answer[0]===current.question){
                                           setIndex(index + 1);
                                          } else {
                                            Alert.alert("Try again!");
                                          }
                                           if (index === 9){
                                            setIndex(0);
                                            updateBadgeState(
                                              Constants.LESSON_COMPLETION,
                                              Constants.LESSON_COMPLETION_1
                                            );
                                            updateLessonAndWorldCompletion(Constants.CURRENT_LESSON_PARENT);
                                            checkAndIssueWorldBadge();
                                            storeWrapper();
                                            props.navigation.navigate("Home");
                                          }
                                        }} 
                                        > {current.answer[0]} </Text>
          <Text style={styles.TextStyle} onPress={() => {
                                          if(current.answer[1]===current.question){
                                           setIndex(index + 1);
                                          } else {
                                            Alert.alert("Try again!");
                                          }
                                           if (index === 9){
                                            setIndex(0);
                                            updateBadgeState(
                                              Constants.LESSON_COMPLETION,
                                              Constants.LESSON_COMPLETION_1
                                            );
                                            updateLessonAndWorldCompletion(Constants.CURRENT_LESSON_PARENT);
                                            checkAndIssueWorldBadge();
                                            storeWrapper();
                                            props.navigation.navigate("Home");
                                          }
                                        }} 
                                        > {current.answer[1]} </Text>
          <Text style={styles.TextStyle} onPress={() => {
                                          if(current.answer[2]===current.question){
                                           setIndex(index + 1);
                                          } else {
                                            Alert.alert("Try again!");
                                          }
                                          if (index === 9){
                                           setIndex(0);
                                            updateBadgeState(
                                              Constants.LESSON_COMPLETION,
                                              Constants.LESSON_COMPLETION_1
                                            );
                                            updateLessonAndWorldCompletion(Constants.CURRENT_LESSON_PARENT);
                                            checkAndIssueWorldBadge();
                                            storeWrapper();
                                            props.navigation.navigate("Home");
                                          }
                                        }} 
                                        > {current.answer[2]} </Text>
        </View>
      
      <Button
        title="Click here to exit lesson (go back to home screen)"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({

 MainContainer: {
   flex: 1,
   margin: 10
 },

 TextStyle:{
   fontSize : 30,
    textAlign: 'center'
 }
 
});

export default LessonScreen;

