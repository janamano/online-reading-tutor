import * as React from "react";
import { Text, View, Button, Image } from "react-native";

// Badge IDs
export const BADGE_START = 0; // This is just a state, has nothing to do with badges
export const LESSON_COMPLETION_ID = 1;
export const WORLD_COMPLETION_ID = 2;
export const STREAKS_ID = 3;

// Badge Image names
export const LESSON_COMPLETION_IMG = require("../assets/lesson_badge.png");
export const WORLD_COMPLETION_IMG = require("../assets/world_badge.png");
export const STREAKS_IMG = "";
export const BADGE_UNKNOWN_IMG = "";

// Badge Names
export const LESSON_COMPLETION = "Lesson Completion Badge";
export const WORLD_COMPLETION = "World Completion Badge";
export const STREAKS = "DAILY STREAKS";

// Badge States
export const BADGE_DEFAULT = false;
export const BADGE_ACQUIRED = true;
