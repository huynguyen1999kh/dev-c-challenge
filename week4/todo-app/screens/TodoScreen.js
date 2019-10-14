import React from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import TodoItem from "../components/TodoItem";
import styles from './TodoScreenStyle'
import { withNavigationFocus } from 'react-navigation';

class TodoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      todos: props.screenProps.todos,
    };
    this.userInput = null;
    this.scrollView = null;
    this.refresh = this.refresh.bind(this);
  }
  refresh() {
    this.setState({
      somethingToRender: 0
    });
  }
  updateInputText = newText => {
    this.setState({
      inputText: newText
    });
  };
  addNewTodo = () => {
    const title = this.state.inputText;
    if (title === "") return;
    const todo = {
      id: this.state.todos.length + 1,
      title: title,
      jobs: [],
      isDone: false
    };
    this.setState(prev => {
      const newTodos = prev.todos;
      newTodos.push(todo);
      return {
        todos: newTodos,
        unInputFocus: true
      };
    });
  };
  deleteItem(item) {
    this.setState(prevState => {
      const newTodos = prevState.todos.filter(todo => todo != item);
      console.warn(newTodos);
      return {
        todos: newTodos
      };
    });
  }
  render() {
    //this.props.navigation.navigate(rou)
    return (
      <View style={styles.container}>
        <View style={styles.newTodoContainer}>
          <TextInput
            style={styles.newTodo}
            onChangeText={text => this.updateInputText(text)}
            blurOnSubmit={true}
            //onSubmitEditing={this.addNewTodo}
            placeholder="Enter a Todo item ..."
          />
          <TouchableOpacity
            style={styles.newTodoButton}
            onPress={this.addNewTodo}
          >
            <Entypo name="plus" size={30} color="#fff"></Entypo>
          </TouchableOpacity>
        </View>
        <View style={styles.todoList}>
          <ScrollView
            ref={ref => (this.scrollView = ref)}
            onContentSizeChange={(contentWidth, contentHeight) => {
              this.scrollView.scrollToEnd({ animated: true });
            }}
          >
            {this.state.todos.map(todoItem => (
              <TodoItem
                key={todoItem.id}
                item={todoItem}
                deleteItem={this.deleteItem.bind(this)}
                refresh={this.refresh}
                navigate={this.props.navigation.navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

TodoScreen.navigationOptions = {
  title: "Todos"
};

export default withNavigationFocus(TodoScreen);