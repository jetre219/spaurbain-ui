import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export class ViewContainer extends React.Component {
    render() {
        return (
            <View  style={styles.viewContainer}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "stretch"

    }
});

export default ViewContainer;


