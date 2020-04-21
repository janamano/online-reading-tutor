import * as React from "react";
import * as Constants from "../constants/constants";
import { Text, View, Button, Image, StyleSheet } from "react-native";

const DisplayBadge = (props) => {

	// props is the badges object:
	// [0] -> {badgeId: .. , badgeName: .. , badgeState: ..},
	// ...
	renderWorldImages = () => {
			let WorldTags = []
			for(let i = Constants.LESSON_COMPLETION_ID; i < props.badges.length; i++) {
				WorldTags.push(<Image key={props.badges[i].badgeID} source={props.badges[i].badgeImage} style={{margin: 5, width: 100, height: 100, opacity: props.badges[i].badgeState ? 1 : 0.5}} />);
			}
			return WorldTags;
	}
	renderStreakImages = () => {
		let StreakTags = []
		for(let i = Constants.LESSON_COMPLETION_ID; i < props.badges.length; i++) {
			StreakTags.push(<Image source=
				{require('../assets/award.png')}style={{margin: 5, width: 100, height: 100, opacity: props.badges[i].badgeState ? 1 : 0.5}} />);
		}
		return StreakTags;
	}
	renderMonthImages = () => {
		let MonthTags = []
		for(let i = Constants.LESSON_COMPLETION_ID; i < props.badges.length; i++) {
			MonthTags.push(<Image source=
				{require('../assets/lesson_badge.png')} style={{margin: 5, width: 100, height: 100, opacity: props.badges[i].badgeState ? 1 : 0.5}} />);
		}
		return MonthTags;
	}

  return (
	<View>
		<Text style={styles.title}>World completion badges</Text>
		<View style={styles.badgeContainer}>
			{renderWorldImages()}
		</View>
		<Text style={styles.title}>Streak badges</Text>
		<View style={styles.badgeContainer}>
			{renderStreakImages()}
		</View>
		<Text style={styles.title}>Monthly badges</Text>
		<View style={styles.badgeContainer}>
			{renderMonthImages()}
		</View>
	</View>
  );
};

export default DisplayBadge


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	badgeContainer: {
		margin: 20,
	    height: 100,
	    flexDirection: "row"
	},
	ImageIconStyle: {
		width: 200,
		height: 200,
	},
	title: {
		alignSelf: "center",
		fontWeight: 'bold',
		fontSize: 20
	}
  });
  