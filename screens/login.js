import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewContainer from "../components/ViewContainer"
import StatusBarBackground from '../components/StatusBarBackground'
export class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.size);
    }

    render() {
        return (
            <ViewContainer>
                <StatusBarBackground style={{backgroundColor:"mistyrose"}} />
                <Button title="Increment" onPress={() => this.props.increment(this.props.size + 1)} />
                <Text>{JSON.stringify(this.props.size)}</Text>
            </ViewContainer>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"blue",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});
LoginScreen.propTypes = {
    increment: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired
};

const mapDispatch = ({count: { increment }}) =>
    ({ increment });

const mapState = (state) =>
    ({
        size: state.count.size
});

export default connect(mapState, mapDispatch)(LoginScreen)


