import React ,{Component} from 'react';
import {AppRegistry, View , Text, TouchableOpacity,ListView,StyleSheet,Button} from 'react-native';

export default class Details extends React.Component
{

	constructor(props)
	{
		super(props);
	}

	render()
	{
		const {state} = this.props.navigation;
		return (
				<View>
					<Text>Title :{state.params.name}</Text>
					<Text>Author:{state.params.authorname}</Text>
					<Text>Year:{state.params.year}</Text>
			<Button
			  style={{fontSize: 20, color: 'green',paddingHorizontal:10}}
			  styleDisabled={{color: 'red'}}
			  title="Press Me"
				onPress={()=>goBack()} >
			</Button>
				</View>
			);
	}
}
AppRegistry.registerComponent('Details',()=>Details);