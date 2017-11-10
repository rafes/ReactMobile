/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Component1 from  './components/Component1.js';
import {Platform,StyleSheet,Text,View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Details from './components/Details.js';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const Navigator = StackNavigator({
  First: {screen: Component1},
  Second:{screen :Details}
});

export default class App extends Component<{}> {
  render() {
    return (
     <Navigator/>
    );
  }
}

