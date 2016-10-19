import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

class DepartureContainer extends Component {
    render() {
        return (
            <View>
                <Text>Imma departureContainer</Text>
            </View>
        );
    }
}

export default DepartureContainer;