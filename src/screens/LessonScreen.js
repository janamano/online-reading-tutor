import * as React from "react";
import * as Constants from "../constants/constants.js";
import { Text, View, Button, Alert } from "react-native";
import { alertBadgeAcquired } from "../components/BadgeHelpers";
function LessonScreen(props) {
  return (
    <View>
      <Text>Lesson Simulation</Text>
      <Button
        title="Click here to finish lesson (go back to home screen)"
        onPress={() => {
          alertBadgeAcquired(Constants.LESSON_COMPLETION_ID);
          props.navigation.navigate("Home");
          props.badgeUpdate.updateState(Constants.LESSON_COMPLETION_ID);
        }}
      ></Button>
    </View>
  );
}

export default LessonScreen;
