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
import { Entypo } from '@expo/vector-icons'
import { todos } from '../data/todos'
import TodoItem from '../components/TodoItem'

export default class TodoScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: "",
      todos: todos,
    }
    this.userInput = null
    this.scrollView = null
    this.onSubmit = this.onSubmit.bind(this)
    this.refresh = this.refresh.bind(this)
  }
  refresh() {
    this.setState({
      somethingToRender: 0,
    })
  }
  onSubmit() {
    this.userInput.blur();
  }
  updateInputText = (newText) => {
    this.setState({
      inputText: newText,
    })
  }
  addNewTodo = () => {
    const title = this.state.inputText
    if (title==="") return
    const todo = {
      id: this.state.todos.length + 1,
      title: title,
      jobs: [],
      isDone: false,
    }
    this.setState(prev => {
      const newTodos = prev.todos
      newTodos.push(todo)
      return {
        todos: newTodos,
        unInputFocus: true,
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.newTodoContainer}>
          <TextInput style={styles.newTodo}
            ref={(input) =>  this.userInput = input}
            onChangeText={text => this.updateInputText(text)}
            blurOnSubmit={true}
            //onSubmitEditing={this.addNewTodo}
            placeholder="Enter a Todo item ..." />
          <TouchableOpacity style={styles.newTodoButton}
            onPress={this.addNewTodo}>
            <Entypo name="plus" size={30} color='#fff'></Entypo>
          </TouchableOpacity>
        </View>
        <View style={styles.todoList}>
          <ScrollView
            ref={ref => this.scrollView = ref}
            onContentSizeChange={(contentWidth, contentHeight)=>{        
                this.scrollView.scrollToEnd({animated: true});
            }}>
            {
              this.state.todos.map(todoItem => (
                <TodoItem key={todoItem.id} item={todoItem}
                  refresh = {this.refresh}
                  navigate={this.props.navigation.navigate} />
              ))
            }
          </ScrollView>
        </View>
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
    paddingBottom: 5,
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
  },
  todoList: {
    flex: 1,
    borderRadius: 20,
    width: '100%',
  },
});
