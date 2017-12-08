import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    AppRegistry,Button
} from 'react-native';

import ListItem from './ListItem.js';
import Storage from './Storage.js';

/*[{id:1,title:'Where Women are kings',author:'Christie Watson',year:2001},
                        {id:2,title:'First Grave on the  Right',author:'Darynda Jones',year:2009},
                        {id:3,title:'The book thief',author:'Markus Zusak',year:2000}]*/
export default class BookListComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            books:[] ,
            noteText: '',
        };
        this.stateModified();
    }

     async componentDidMount() {
      const books = await Storage.getBooks();
      this.setState({
        books: books,
      });
    }

    async stateModified(newBooks)
    {
        this.setState({books:newBooks});
        await Storage.setBooks(newBooks);
        this.render();
    }

    render() {
        const { navigate } = this.props.navigation;
        let books = this.state.books.map((val, key)=>{
            return <ListItem key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteNote(key)} onPress={()=>navigate('Second',{books:this.state.books,book:val,update: this.stateModified.bind(this)})}/>
        });
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>- Your Books -</Text>
                    <Button
                  onPress={() => this.props.navigation.navigate('Third', {update: this.stateModified.bind(this), books: this.state.books})}
                  title="Add new"
                />
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {books}
                </ScrollView>
                
            </View>
        );
    }


    async deleteNote(key){
        this.state.books.splice(key, 1);
        this.setState({books: this.state.books});
        await Storage.setBooks(this.state.books);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});