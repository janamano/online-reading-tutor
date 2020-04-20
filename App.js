import * as React from "react";

// for the navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// use-state hooks
import { useState } from "react";

// import page components
import BadgeScreen from "./src/screens/BadgeScreen";
import GameScreen from "./src/screens/GameScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LessonMapScreen from "./src/screens/LessonMapScreen";
import LessonScreen from "./src/screens/LessonScreen";
import MinigameScreen from "./src/screens/MinigameScreen";

// import styles
import variables from "./src/styles/variables";
// import constants
import * as Constants from "./src/constants/constants";

const Stack = createStackNavigator();

function App() {
  const [badges, setBadges] = useState([
    {
      badgeID: Constants.INVALID_ID,
      badgeImage: "",
      badgeState: Constants.BADGE_DEFAULT
    },
    {
      badgeID: Constants.LESSON_COMPLETION_ID,
      badgeImage: Constants.LESSON_COMPLETION_IMG,
      badgeState: Constants.BADGE_DEFAULT
    },
    {
      badgeID: Constants.WORLD_COMPLETION_ID,
      badgeImage: Constants.WORLD_COMPLETION_IMG,
      badgeState: Constants.BADGE_DEFAULT
    }
  ]);

  const updateState = (badgeID) => {
    const newState = badges;
    newState[badgeID].badgeState = Constants.BADGE_ACQUIRED;
    setBadges(newState);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: variables.palette.gray.uiBackground
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: variables.palette.white.primary
        }
      }}
      >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: "Home" }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Lessons"
          options={{ title: "Lessons" }}
          component={LessonMapScreen}
        />
        <Stack.Screen
          name="Game"
          options={{ title: "Game" }}
          component={GameScreen}
        />
        <Stack.Screen name="Lesson">
          {(props) => <LessonScreen {...props} badgeUpdate={{ updateState }} />}
        </Stack.Screen>
        <Stack.Screen
          name="Minigame"
          options={{ title: "Minigame Simulation" }}
          component={MinigameScreen}
        />
        <Stack.Screen name="Badges">
          {(props) => <BadgeScreen {...props} badges={badges} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
