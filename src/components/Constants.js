import { Dimensions } from "react-native";

export default Constants = {
  MAX_WIDTH: Dimensions.get("screen").width,
  MAX_HEIGHT: Dimensions.get("screen").height,
  OBSTACLE_WIDTH: 85,

  // Badges root id
  LESSON_COMPLETION: 0,
  WORLD_COMPLETION: 1,
  STREAKS: 2,

  // Invidividual Lesson Badges
  LESSON_COMPLETION_1: 0,
  // Img name
  LESSON_COMPLETION_1_IMG: require("../assets/badges/lesson_completion.png"),
  // Badge name
  LESSON_COMPLETION_1_BADGE: "Lesson 1 Completed",

  LESSON_COMPLETION_2: 1,
  LESSON_COMPLETION_2_IMG: require("../assets/badges/lesson_completion.png"),
  LESSON_COMPLETION_2_BADGE: "Lesson 2 Completed",

  LESSON_COMPLETION_3: 2,
  LESSON_COMPLETION_3_IMG: require("../assets/badges/lesson_completion.png"),
  LESSON_COMPLETION_3_BADGE: "Lesson 3 Completed",

  // Individual Badge Badges
  WORLD_COMPLETION_FIRE: 0,
  WORLD_COMPLETION_FIRE_IMG: require("../assets/lesson_badge.png"),
  WORLD_COMPLETION_FIRE_BADGE: "Fire World Completed",

  WORLD_COMPLETION_ICE: 1,
  WORLD_COMPLETION_ICE_IMG: require("../assets/lesson_badge.png"),
  WORLD_COMPLETION_ICE_BADGE: "Ice World Completed",

  WORLD_COMPLETION_WATER: 2,
  WORLD_COMPLETION_WATER_IMG: require("../assets/lesson_badge.png"),
  WORLD_COMPLETION_WATER_BADGE: "Water World Complete",

  // Individual Streaks Completion Badges
  STREAKS_5_DAY: 0,
  STREAKS_5_DAY_IMG: require("../assets/badges/01.png"),
  STREAKS_5_DAY_BADGE: "5 Day Streak Achieved",

  STREAKS_10_DAY: 1,
  STREAKS_10_DAY_IMG: require("../assets/badges/01.png"),
  STREAKS_10_DAY_BADGE: "10 Day Streak Achieved",

  STREAKS_15_DAY: 2,
  STREAKS_15_DAY_IMG: require("../assets/badges/01.png"),
  STREAKS_15_DAY_BADGE: "15 Day Streak Achieved",

  BADGE_LOCKED_IMG: require("../assets/badges/locked.png"),

  // Badge States - Default is unaquired (i.e. "greyed out")
  BADGE_DEFAULT: false,
  BADGE_ACQUIRED: true,
};
