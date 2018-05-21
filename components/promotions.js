import React from 'react';
import { View, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Promotions extends React.Component {
    constructor(props) {
        super(props);
    }

    _renderItem({item, index}) {
        return (
            <View>
                <Image source={{ uri: item.pictureURL }} />
            </View>
        )
    }

    render() {
        return (
            <View>
                <Carousel
                    data={this.props.promotions}
                    renderItem={this._renderItem}
                />
            </View>
        )
    };
}

Promotions.PropTypes = {
    promotions: PropTypes.object.isRequired
};


const mapState = (state) => ({
    promotions: state.promotions.promotions
});

export default connect(mapState, null)(Promotions)
