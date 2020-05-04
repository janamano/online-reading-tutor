import * as React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView, Dimensions} from 'react-native';

import Carousel from 'react-native-snap-carousel';
// local components
import Button from './Button'
import WorldsConstants from './WorldsConstants'
import variables from '../styles/variables'
import BottomSheet from "./index"


export default class CarouselCards extends React.Component  {

    constructor(props){
        super(props);
        this.goToFire = this.goToFire.bind(this);
        this.state = {
          activeIndex:0,
          carouselItems: WorldsConstants.WORLDS,
          showModal: false,
      }
    }

    _renderItem({item,index}){
//        const { navigate } = this.props.navigation.navigate(Game);

        return (
          <View style={{
              backgroundColor: WorldsConstants.WORLDS_BG_COLOR,
              borderRadius: 5,
              height: Dimensions.get('window').height,
              // justifyContent: 'center',
              alignItems: 'center',

          }}>
              <View style={{
                  height: Dimensions.get('window').height *0.5,
                  marginTop:  Dimensions.get('window').height *0.10,
              }}>
                  <Image
                    key={item.title}
                    source={item.icon}
                    style={{
                      flex: 1,
                      resizeMode: 'contain',
                    }}
                  />
              </View>
              <View style={{
                alignItems: 'center',
                marginTop: 30,
                justifyContent: 'center',
                textAlignVertical: 'bottom'}}>
                <Text style={{
                  fontSize: 30,
                  color: 'white',
                }}>
                  {item.title}
                </Text>
                <Text style={{
                  color: 'white',
                }}>
                  {item.text}
                </Text>
              </View>
              <View>
                  <TouchableOpacity
                    style = {styles.button}
                    color="#65269c"
                    disabled={!item.unlocked}
                    onPress= {() =>  this.goToFire()}>
                      <Text>Explore this world</Text>
                  </TouchableOpacity>
              </View>
          </View>
        );
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'#967ECB', paddingTop: 50, paddingBottom:100}}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
              <Carousel
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.carouselItems}
                sliderWidth={300}
                itemWidth={300}
                renderItem={this._renderItem.bind(this)}
                onSnapToItem = { index => this.setState({activeIndex:index}) }
                removeClippedSubviews={false} />
            </View>
          </SafeAreaView>
        );
    }

    goToFire = () => {
      this.props.navigation.navigate('Game')
      this.setState({
        showModal: false
      });
    }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    marginTop: Dimensions.get('window').height * 0.1,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});
