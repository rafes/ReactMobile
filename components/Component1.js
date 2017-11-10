import React ,{Component} from 'react';
import {AppRegistry, View , Text, TouchableOpacity,ListView,StyleSheet , Button} from 'react-native';
const SendIntentAndroid = require('react-native-send-intent');

const books=[
	{title:'Where Women are kings',author:'Christie Watson'},
	{title:'First Grave on the  Right',author:'Darynda Jones'},
	{title:'The book thief',author:'Markus Zusak'}
]

const styles=StyleSheet.create(
{
	row: {
    height: 48,
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.054)',
  },
  text: {
    fontSize: 16,
  },
	container: {
  	position:'relative',
    flex: 1,
    justifyContent:'space-between',
    padding:'10',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',


  }

});


export default class Component1 extends React.Component {

	static navigationOptions = {
    	title: 'Welcome',
  	};
	
	constructor(props) 
	{
    	super(props);
    	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    	this.state = {
      	dataSource: ds.cloneWithRows(books), 
    	};
    	this.renderRow=this.renderRow.bind(this);

  	}

 	
 	goDeatilPage()
	{
		
	}


	submit(){
        SendIntentAndroid.sendMail("alexaelenasabina@gmail.com", "New Book!", "This the book");
    } 

	render()
	{
		
		return (
			<View style={styles.container}>
			<Button
			  style={{fontSize: 20, color: 'green',paddingHorizontal:10}}
			  styleDisabled={{color: 'red'}}
			  title="Press Me"
			  onPress={()=>this.submit()}
			>
			  Email
			</Button>

			<ListView 
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
				/>
			</View>
			);
	}

	
	renderRow(rowData)
	{
		const { navigate } = this.props.navigation;
	 return (
              <View style={styles.row} >
              <TouchableOpacity  onPress={()=>navigate('Second',{name:rowData.author})}>
              	<Text style={styles.text}>Author : {rowData.author} , Title: {rowData.title}
              	</Text>
              </TouchableOpacity>
              </View>
            );
	}



};

AppRegistry.registerComponent('Component1',()=>Component1);



