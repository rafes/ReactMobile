/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import DetailsComponent from './components/DetailsComponent.js';
import BookListComponent from './components/BookListComponent.js';
import AddNewBookComponent from './components/AddNewBookComponent';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const Navigator = StackNavigator({
  First: {screen: BookListComponent},
  Second:{screen :DetailsComponent},
  Third:{screen:AddNewBookComponent}
});

export default class App extends Component<{}> {
  render() {
    return (
     <Navigator/>
    );
  }
}

