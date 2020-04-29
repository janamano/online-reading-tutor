import * as React from "react";
// import constants
import Constants from "./Constants";
import * as DataObject from "./NewConstants";
// Import asyncstorage
import AsyncStorage from "@react-native-community/async-storage";

import { Text, View, Button, Alert, Image } from "react-native";

// Generic helper functions that can be used anywhere

// This is bad. This should have been coupled with the
// id in the above object. But I didn't do it initially,
// when I wrote it out :/
// I sad :(

// Returns an Image for the corresponding Badge ID
export const returnImgForID = (badgeID) => {
  switch (badgeID) {
    case Constants.LESSON_COMPLETION_1:
      return Constants.LESSON_COMPLETION_1_IMG;
    case Constants.LESSON_COMPLETION_2:
      return Constants.LESSON_COMPLETION_2_IMG;
    case Constants.LESSON_COMPLETION_3:
      return Constants.LESSON_COMPLETION_3_IMG;
    case Constants.WORLD_COMPLETION_FIRE:
      return Constants.WORLD_COMPLETION_FIRE_IMG;
    case Constants.WORLD_COMPLETION_ICE:
      return Constants.WORLD_COMPLETION_ICE_IMG;
    case Constants.WORLD_COMPLETION_WATER:
      return Constants.WORLD_COMPLETION_WATER_IMG;
    case Constants.STREAKS_5_DAY:
      return Constants.STREAKS_5_DAY_IMG;
    case Constants.STREAKS_10_DAY:
      return Constants.STREAKS_10_DAY_IMG;
    case Constants.STREAKS_15_DAY:
      return Constants.STREAKS_15_DAY_IMG;
    default:
      return "";
  }
};

// Returns the raw image name for the id
export const returnRawImgForID = (badgeID) => {
  switch (badgeID) {
    case Constants.LESSON_COMPLETION_1:
      return Constants.LESSON_COMPLETION_1_IMG_RAW;
    case Constants.LESSON_COMPLETION_2:
      return Constants.LESSON_COMPLETION_2_IMG_RAW;
    case Constants.LESSON_COMPLETION_3:
      return Constants.LESSON_COMPLETION_3_IMG_RAW;
    case Constants.WORLD_COMPLETION_FIRE:
      return Constants.WORLD_COMPLETION_FIRE_IMG_RAW;
    case Constants.WORLD_COMPLETION_ICE:
      return Constants.WORLD_COMPLETION_ICE_IMG_RAW;
    case Constants.WORLD_COMPLETION_WATER:
      return Constants.WORLD_COMPLETION_WATER_IMG_RAW;
    case Constants.STREAKS_5_DAY:
      return Constants.STREAKS_5_DAY_IMG_RAW;
    case Constants.STREAKS_10_DAY:
      return Constants.STREAKS_10_DAY_IMG_RAW;
    case Constants.STREAKS_15_DAY:
      return Constants.STREAKS_15_DAY_IMG_RAW;
    default:
      return "";
  }
};

// Returns an actual react-native img source for the id
export const returnImgForRawImgName = (rawImageName) => {
  switch (rawImageName) {
    case Constants.LESSON_COMPLETION_1_IMG_RAW:
      return Constants.LESSON_COMPLETION_1_IMG;
    case Constants.LESSON_COMPLETION_2_IMG_RAW:
      return Constants.LESSON_COMPLETION_2_IMG;
    case Constants.LESSON_COMPLETION_3_IMG_RAW:
      return Constants.LESSON_COMPLETION_3_IMG;
    case Constants.WORLD_COMPLETION_FIRE_IMG_RAW:
      return Constants.WORLD_COMPLETION_FIRE_IMG;
    case Constants.WORLD_COMPLETION_ICE_IMG_RAW:
      return Constants.WORLD_COMPLETION_ICE_IMG;
    case Constants.WORLD_COMPLETION_WATER_IMG_RAW:
      return Constants.WORLD_COMPLETION_WATER_IMG;
    case Constants.STREAKS_5_DAY_IMG_RAW:
      return Constants.STREAKS_5_DAY_IMG;
    case Constants.STREAKS_10_DAY_IMG_RAW:
      return Constants.STREAKS_10_DAY_IMG;
    case Constants.STREAKS_15_DAY_IMG_RAW:
      return Constants.STREAKS_15_DAY_IMG;
    default:
      return Constants.BADGE_LOCKED_IMG;
  }
};

// Returns a Badge Name for the corresponding Badge ID
export const returnBadgeNameForID = (badgeID) => {
  switch (badgeID) {
    case Constants.LESSON_COMPLETION_1:
      return Constants.LESSON_COMPLETION_1_BADGE;
    case Constants.LESSON_COMPLETION_2:
      return Constants.LESSON_COMPLETION_2_BADGE;
    case Constants.LESSON_COMPLETION_3:
      return Constants.LESSON_COMPLETION_3_BADGE;
    case Constants.WORLD_COMPLETION_FIRE:
      return Constants.WORLD_COMPLETION_FIRE_BADGE;
    case Constants.WORLD_COMPLETION_ICE:
      return Constants.WORLD_COMPLETION_ICE_BADGE;
    case Constants.WORLD_COMPLETION_WATER:
      return Constants.WORLD_COMPLETION_WATER_BADGE;
    case Constants.STREAKS_5_DAY:
      return Constants.STREAKS_5_DAY_BADGE;
    case Constants.STREAKS_10_DAY:
      return Constants.STREAKS_10_DAY_BADGE;
    case Constants.STREAKS_15_DAY:
      return Constants.STREAKS_15_DAY_BADGE;
  }
};

// Show an alert saying you've got a badge
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

// Renders all "World" badges
export const renderWorldBadges = (world_props) => {
  let WorldTags = [];
  console.log(world_props.length);
  for (let i = 0; i < world_props.length; i++) {
    WorldTags.push(
      <Image
        key={world_props[i].badgeName}
        source={returnImgForRawImgName(world_props[i].badgeImage)}
        style={{
          margin: 5,
          width: 100,
          height: 100,
          opacity: world_props.badgeState ? 1 : 0.5,
        }}
      />
    );
  }
  return WorldTags;
};

// Render all "Streak" Badges
export const renderStreakImages = (streak_props) => {
  let StreakTags = [];
  for (let i = 0; i < streak_props.length; i++) {
    StreakTags.push(
      <Image
        key={streak_props[i].badgeName}
        source={returnImgForRawImgName(streak_props[i].badgeImage)}
        style={{
          margin: 5,
          width: 100,
          height: 100,
          opacity: streak_props[i].badgeState ? 1 : 0.5,
        }}
      />
    );
  }
  return StreakTags;
};

// Render all "Lesson" Badges
export const renderLessonImages = (lesson_props) => {
  let MonthTags = [];
  let data = "";
  for (let i = 0; i < lesson_props.length; i++) {
    MonthTags.push(
      <Image
        key={lesson_props[i].badgeName}
        source={returnImgForRawImgName(lesson_props[i].badgeImage)}
        style={{
          margin: 5,
          width: 100,
          height: 100,
          opacity: lesson_props[i].badgeState ? 1 : 0.5,
        }}
      />
    );
  }
  return MonthTags;
};

// Helper function to store a the main data object
// into AsyncStorage
export const storeData = async () => {
  try {
    const dataStore = await AsyncStorage.setItem(
      "data",
      JSON.stringify(DataObject.Data)
    );
    console.log("Data Stored");
  } catch (e) {
    // Store failed
    console.log(e);
    // save error
  }
};

// Startup function - Anything that needs to happen
// before rendering anything
export const startUp = async () => {
  // Set initial, otherwise retrieve latest
  try {
    const data = await AsyncStorage.getItem("data");
    console.log("Promimse returned\n");
    if (data != null) {
      DataObject.Data = JSON.parse(data);
    } else {
      const setFirstTimeData = await AsyncStorage.setItem(
        "data",
        JSON.stringify(DataObject.Data)
      );
      // console.log("P");
    }
  } catch (e) {
    console.log(e);
  }
};

// Update the badge state
export const updateBadgeState = (badgeComponent, badgeID) => {
  for (let i = 0; i < DataObject.Data.BADGES[badgeComponent].length; i++) {
    if (DataObject.Data.BADGES[badgeComponent][i].badgeID == badgeID) {
      DataObject.Data.BADGES[badgeComponent][i].badgeState =
        Constants.BADGE_ACQUIRED;
      DataObject.Data.BADGES[badgeComponent][i].badgeImage = returnRawImgForID(
        badgeID
      );
      break;
    }
  }

  // Make a call to storeData to update the storage
  storeData();
};

export const updateStreaks = () => {
  // Do your update to DataObject.Data
  // storeData()
};

export const worldCompletion = (worldID) => {
  // Do your update to DataObject.Data
  // storeData()
};
