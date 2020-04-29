import * as React from "react";
import Constants from "../components/Constants.js";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  renderWorldBadges,
  renderStreakImages,
  renderLessonImages,
} from "../components/Helpers.js";

const DisplayBadge = (props) => {
  // props is the badges object:
  // [0] -> [0] -> {badgeId: .. , badgeName: .. , badgeState: ..}
  //     -> [1] -> {badgeId: .. , badgeName: .. , badgeState: ..}
  // [1] -> [0] -> {badgeId: .. , badgeName: .. , badgeState: ..}
  //     -> [1] -> {badgeId: .. , badgeName: .. , badgeState: ..}
  // ...
  return (
    <View>
      <Text style={styles.title}>World badges</Text>
      <ScrollView horizontal={true} style={styles.badgeContainer}>
        {renderWorldBadges(props.badges[Constants.WORLD_COMPLETION])}
      </ScrollView>
      <Text style={styles.title}>Streak badges</Text>
      <ScrollView horizontal={true} style={styles.badgeContainer}>
        {renderStreakImages(props.badges[Constants.STREAKS])}
      </ScrollView>
      <Text style={styles.title}>Lesson badges</Text>
      <ScrollView horizontal={true} style={styles.badgeContainer}>
        {renderLessonImages(props.badges[Constants.LESSON_COMPLETION])}
      </ScrollView>
    </View>
  );
};

export default DisplayBadge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  badgeContainer: {
    margin: 20,
    height: 110,
    flexDirection: "row",
  },
  ImageIconStyle: {
    width: 200,
    height: 200,
  },
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
