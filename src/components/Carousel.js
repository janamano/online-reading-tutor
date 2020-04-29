import * as React from "react";
import {
  Text,
  View,
  SafeAreaView, Dimensions
} from "react-native";

import Carousel from "react-native-snap-carousel";
// local components
import { Button } from "./index";
import * as DataObject from "./NewConstants";

export default class CarouselCards extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    let test = DataObject.Data.lesson_completion_per_world;
    console.log(DataObject.Data.lesson_completion_per_world);
    this.goToFire = this.goToFire.bind(this);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Fire World",
          text: DataObject.Data.lesson_completion_per_world.fire_world["lessons_completed"] + "/10", // TODO: change to state of lessons completion
          index: 1 // TODO: use this to navigate to the right game for each world

        },
        {
          title: "Ice World",
          text: DataObject.Data.lesson_completion_per_world.ice_world["lessons_completed"] + "/10", // TODO: change to state of lessons completion
          index: 2

        },
        {
          title: "Jungle World",
          text: DataObject.Data.lesson_completion_per_world.jungle_world["lessons_completed"] + "/10", // TODO: change to state of lessons completion
          index: 3

        },
        {
          title: "Alien World",
          text: DataObject.Data.lesson_completion_per_world.alien_world["lessons_completed"] + "/10", // TODO: change to state of lessons completion
          index: 4

        }

      ]
    };
  }

  _renderItem({ item, index }) {
    //        const { navigate } = this.props.navigation.navigate(Game);
    return (
      <View style={{
        backgroundColor: "rebeccapurple",
        borderRadius: 5,
        height: Dimensions.get("window").height * 0.4,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
        marginTop: Dimensions.get("window").height * 0.15
      }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  goToFire = () => {
    this.props.navigation.navigate("Game");
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <SafeAreaView style={{
        flex: 1, backgroundColor: "black", paddingTop: 50, paddingBottom: 100
      }}
      >
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
          <Carousel
            layout="default"
            ref={(ref) => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />

        </View>
        <Button text="Start" onPress={() => this.goToFire()} />
      </SafeAreaView>
    );
  }
}
