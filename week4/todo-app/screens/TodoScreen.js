import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Entypo} from '@expo/vector-icons'
import TodoList from '../components/TodoList';

export default class TodoScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
    return (
        <View style={styles.container}>
          <View style={styles.newTodoContainer}>
            <TextInput style={styles.newTodo}
            placeholder="Enter a Todo item ..."/>
            <TouchableOpacity style={styles.newTodoButton}>
                <Entypo name="plus" size={30} color='#fff'></Entypo>
            </TouchableOpacity>
          </View>
          <TodoList navigate={this.props.navigation.navigate}/>
        </View>
      );
  }
}

TodoScreen.navigationOptions = {
    title: 'Todos',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  newTodoContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  newTodo: {
      width: '65%',
      height: 40,
      borderBottomWidth: 3,
      fontSize: 22,
      borderBottomColor: '#5AB3B3',
      color: '#5AB3B3',
  },
  newTodoButton: {
      height: 40,
      width: 40,
      backgroundColor: '#5AB3B3',
      borderRadius: 20,
      marginLeft: 10,
      alignItems: "center",
      justifyContent: 'center',
  }
});
