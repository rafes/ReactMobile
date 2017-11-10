import React, { Component } from 'react';
import Component1 from  './components/Component1.js';
import {Platform,StyleSheet,Text,View} from 'react-native';
import {StackNavigator,} from 'react-navigation';

export const BasicApp = StackNavigator({
  Main: {screen: MainScreen},
  List: {screen: Component1},
});

export class MainScreen extends Component
{
	constructor(props , context) {
    super(props , context);
    this.goToListScreen = this.goToListScreen.bind(this);
  }

  goToDetailScreen() {
    this.props.navigation.navigate('List');
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>this.goToListScreen}
      />
    );
  }
}


