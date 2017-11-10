import React ,{Component} from 'react';
import {AppRegistry, View , Text, TouchableOpacity,ListView,StyleSheet , Button,TextInput} from 'react-native';
const SendIntentAndroid = require('react-native-send-intent');

const books=[
	{title:'Where Women are kings',author:'Christie Watson',year:2017},
	{title:'First Grave on the  Right',author:'Darynda Jones',year:2010},
	{title:'The book thief',author:'Markus Zusak',year:1999}
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
    justifyContent: 'center',
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
      	dataSource: ds.cloneWithRows(books), email:'insert email:',subject:'Insert subject'
    	};
    	this.renderRow=this.renderRow.bind(this);

  	}

 	
 	goDeatilPage()
	{
		
	}

	submit(){
        SendIntentAndroid.sendMail(this.state.email, this.state.subject,"Insert text here");
    }

	render()
	{
		
		return (
			<View style={styles.container}>
			<ListView 
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
				/>
			<Text>
                Email to :
            </Text>
            <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    				value={this.state.email}
                    onChangeText={(text) => this.setState({email: text})}
                    />
            <Text>
                Subject :
            </Text>
            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({subject: text})}
                    value={this.state.subject}/>
			<Button
			  style={{fontSize: 20, color: 'green',paddingHorizontal:10}}
			  styleDisabled={{color: 'red'}}
			  title="send email"
			  onPress={()=>this.submit()}
			>
			</Button>

			
			</View>
			);
	}

	
	renderRow(rowData)
	{
		const { navigate } = this.props.navigation;
	 return (
              <View style={styles.row} >
              <TouchableOpacity  onPress={()=>navigate('Second',{name:rowData.title,authorname:rowData.author,year:rowData.year})}>
              	<Text style={styles.text}>Book: {rowData.title}
              	</Text>
              </TouchableOpacity>
              </View>
            );
	}



};

AppRegistry.registerComponent('Component1',()=>Component1);



