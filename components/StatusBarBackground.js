import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export class StatusBarBackground extends React.Component {
    render() {
        return (
            <View  style={[styles.statusBarBackground, this.props.style || {}]}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusBarBackground:{
        backgroundColor: "white",
        height:20,
    }
});

export default StatusBarBackground;


