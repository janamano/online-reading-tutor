import * as React from "react";
import { Text, View, Button, Alert } from "react-native";

function LessonScreen(props) {
  const alertCompletion = () => {
    Alert.alert(
      "Congratulations!",
      "You have received a new badge! Head to your profile to see it!",
      [
        {
          text: "OK",
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      <Text>Lesson Simulation</Text>
      <Button
        title="Click here to finish lesson (go back to home screen)"
        onPress={() => {
          alertCompletion();
          props.navigation.navigate("Home");
          props.badgeUpdate.updateState();
        }}
      ></Button>
    </View>
  );
}

export default LessonScreen;
