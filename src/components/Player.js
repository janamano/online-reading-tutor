import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class Player extends Component {
    render() {
        const width = this.props.size[0];
        const height = this.props.size[1];
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;

        let currentFrame = Frames['frame' + this.props.frame]
        return (
            <Image
                style={{
                    position: 'absolute',
                    right: x,
                    top: y,
                    width: width,
                    height: height,
                }}
                resizeMode="stretch"
                source={currentFrame}
                 />
        )
    }
}
