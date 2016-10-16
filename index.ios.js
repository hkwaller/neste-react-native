import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import api from './utils/api.js';

api.getStationList();

export default class Next extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcomeasfasdct Native!
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sup</Text>
          </TouchableOpacity>
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.iossd.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#ffffff'
  }
});

AppRegistry.registerComponent('Next', () => Next);
