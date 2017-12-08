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
import Main from './components/Main.js';
import AddNew from './components/AddNew';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const Navigator = StackNavigator({
  First: {screen: Main},
  Second:{screen :Details},
  Third:{screen:AddNew}
});

export default class App extends Component<{}> {
  render() {
    return (
     <Navigator/>
    );
  }
}

