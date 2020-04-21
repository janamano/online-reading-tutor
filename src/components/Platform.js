import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class Platform extends Component {
    render() {
        const width = this.props.size[0];
        const height = this.props.size[1];
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;

        const overflowPlatform = Math.ceil(width / height);

        return (
            <View
                style={{
                    position: 'absolute',
                    right: x,
                    top: y,
                    width: width,
                    height: height,
                    overflow: 'hidden',
                    flexDirection: 'row'}} >

                    {Array.apply(null, Array(overflowPlatform)).map((elem, index) => {
                        return <Image style={{ width: height , height: height}} key={index} resizeMode="stretch" source={require('../assets/platform.png')} />
                    })}
                </View>
        )
    }
}
