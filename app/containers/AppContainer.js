import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Home from './Home';
import { Navigator, Text, StyleSheet, View, TouchableHighlight } from 'react-native';



class AppContainer extends Component {
    render() {
        const routes = [
            {title: 'First Scene', index: 0},
            {title: 'Second Scene', index: 1},
        ];
        return (
            <Navigator
                initialRoute={{id: 'first'}}
                renderScene={(route, navigator) => {
                        switch (route.id) {
                        case 'first':
                            return (<Home navigator={navigator} title="first" {...this.props} />);
                        case 'second':
                            return (<Home navigator={navigator} title="first" {...this.props} />);
                        }
                    }
                }
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={{
                            LeftButton: (route, navigator, index, navState) =>
                            {
                                if (route.index === 0) {
                                    return null;
                                } else {
                                    return (
                                        <TouchableHighlight onPress={() => navigator.pop()}>
                                            <Text>Back</Text>
                                        </TouchableHighlight>
                                    );
                                }
                            },
                            RightButton: (route, navigator, index, navState) =>
                            { return (
                                <View style={styles.navbarContainer}>
                                    <Text style={styles.navbarText}>Søk</Text>
                                </View>
                            ); },
                            Title: (route, navigator, index, navState) =>
                            { return (
                                <View style={styles.navbarContainer}>
                                    <Text style={styles.navbarTitle}>Neste</Text>
                                </View>
                                ); },
                        }}
                        style={{
                            backgroundColor: 'rgb(78,161,255)',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    />
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    navbarText: {
        color: '#fff',
        padding: 12
    },
    navbarTitle: {
        color: '#fff',
        fontSize: 20,
        padding: 8,
        fontWeight: '200'
    }
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return {} }, mapDispatchToProps)(AppContainer);