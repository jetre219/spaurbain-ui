import React from 'react';
import {View, Button, Text} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.size);
    }

    render() {
        return (
            <View>
                <Button title="Increment" onPress={() => this.props.increment(this.props.size + 1)} />
                <Text>{JSON.stringify(this.props.size)}</Text>
            </View>
        )
    }
}

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


