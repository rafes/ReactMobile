import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,ListView, TouchableOpacity,
  TextInput,
} from 'react-native';



export default class AddNewBookComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      author: '',
      year: 2000,
    };
  }

  save(){
    const books = this.props.navigation.state.params.books || [];
    let newbooks = books.slice();
    let maxId = Math.max.apply(Math, newbooks.map(function(p){ return p.id; })) + 1;
    if (newbooks.length == 0) {
      maxId = 1;
    }
    newbooks.push({
      id: maxId,
      title: this.state.title,
      author: this.state.author,
      year: this.state.year,
    });
    this.props.navigation.state.params.update(newbooks);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View >
        <Text style={{fontSize: 20}}> Add a book:</Text>
        <TextInput style={{fontSize: 20, width: 250}} value={this.state.title} placeholder="Title"
                  onChangeText={(text) => this.setState({title: text})}>
        </TextInput>
        <TextInput style={{fontSize: 20, width: 250}} value={this.state.author} placeholder="Author"
                  onChangeText={(text) => this.setState({author: text})}>
        </TextInput>
        <TextInput style={{fontSize: 20, width: 250}} value={this.state.year} placeholder="Year"
                  onChangeText={(text) => this.setState({year: text})}>
        </TextInput>
      
        <Button
          onPress={this.save.bind(this)}
          title="Save"/>
      </View>
    );
  }
}