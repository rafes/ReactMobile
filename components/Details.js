import React ,{Component} from 'react';
import {AppRegistry, View , Text, TouchableOpacity,ListView,StyleSheet,Button,TextInput} from 'react-native';
export default class Details extends React.Component
{

	constructor(props)
	{
		super(props);
		this.state={
			id:this.props.navigation.state.params.book.id,
			title:this.props.navigation.state.params.book.title,
			author:this.props.navigation.state.params.book.author,
			year:this.props.navigation.state.params.book.year
		}
	}

	render()
	{
		const {state} = this.props.navigation;
		return (
				<View>
					<TextInput value={this.state.title} onChangeText={(title) => this.setState({title})}/>
					<TextInput value={this.state.author} onChangeText={(author) => this.setState({author})}/>
					<Button title="Save" onPress={this.Save.bind(this)}/>
				</View>
			);
	}

	Save()
	{
		const books = this.props.navigation.state.params.books || [];
    	let newbooks = books.slice();
	    for(i=0;i<newbooks.length;i++){
	      if(this.state.id==newbooks[i].id){
	        newbooks[i].title=this.state.title;
	        newbooks[i].author=this.state.author;
	        newbooks[i].year=this.state.year;
	        break;
	      }
	    }
	    this.props.navigation.state.params.update(newbooks);
	    this.props.navigation.goBack();
	}
}
AppRegistry.registerComponent('Details',()=>Details);