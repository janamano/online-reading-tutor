import { StyleSheet } from "react-native";
import variables from "./variables";

// global styles

// global shared component/screen styles
export default StyleSheet.create({
  primaryBtn: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: variables.palette.blue.primary,
    borderRadius: 50
  },
  primaryBtnText: {
    paddingLeft: 15,
    paddingRight: 15,
    color: variables.palette.white.primary,
    textAlign: "center",
    fontSize: 18
  },
  appContainer: {
    backgroundColor: variables.palette.gray.uiBackground
  }
});
