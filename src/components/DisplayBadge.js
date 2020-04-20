import * as React from "react";
import * as Constants from "../constants/constants";
import { Text, View, Button, Image } from "react-native";

const DisplayBadge = (props) => {

	// props is the badges object:
	// [0] -> {badgeId: .. , badgeName: .. , badgeState: ..},
	// ...
	renderImages = () => {
			let Tags = []
			for(let i = Constants.LESSON_COMPLETION_ID; i < props.badges.length; i++) {
				Tags.push(<Text key={props.badges[i].badgeName}>{props.badges[i].badgeName}</Text>)
				Tags.push(<Image key={props.badges[i].badgeID} source={props.badges[i].badgeImage} style={{width: 100, height: 100, opacity: props.badges[i].badgeState ? 1 : 0.2}} />);
			}
			return Tags;
	}

  return (
    <View>
    	{renderImages()}
    </View>
  );
};

export default DisplayBadge