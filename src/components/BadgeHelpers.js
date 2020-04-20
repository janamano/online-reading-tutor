import * as React from "react";
// import constants
import * as Constants from "../constants/constants";
import { Text, View, Button, Alert } from "react-native";
// Any helper function for the badges part goes here

// This is bad. This should have been coupled with the
// id in the above object. But I didn't do it initially,
// when I wrote it out :/
// I sad :(

// Returns an Image for the corresponding Badge ID
export const returnImgForID = (badgeID) => {
  switch (badgeID) {
    case Constants.LESSON_COMPLETION_ID:
      return Constants.LESSON_COMPLETION_IMG;
    case Constants.STREAKS_ID:
      return Constants.STREAKS_IMG;
    case Constants.WORLD_COMPLETION_ID:
      return Constants.WORLD_COMPLETION_IMG;
    default:
      return "";
  }
};

// Returns a Badge Name for the corresponding Badge ID
export const returnBadgeNameForID = (badgeID) => {
  switch (badgeID) {
    case Constants.LESSON_COMPLETION_ID:
      return Constants.LESSON_COMPLETION;
    case Constants.STREAKS_ID:
      return Constants.STREAKS;
    case Constants.WORLD_COMPLETION_ID:
      return Constants.WORLD_COMPLETION;
    default:
      return "";
  }
};

export const alertBadgeAcquired = (badgeID) => {
  let badgeName = returnBadgeNameForID(badgeID);
  // Add excalamation point at the end
  badgeName += "!";
  Alert.alert(
    "Congratulations!",
    "You have received a " + badgeName + "\nHead to your profile to see it!",
    [
      {
        text: "OK",
        style: "destructive",
      },
    ],
    { cancelable: false }
  );
};
