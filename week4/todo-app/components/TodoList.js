import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import { todos } from '../data/todos'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: todos,
        }
    }
    addNewTodo = () => {
        console.warn("ass")
        const title = this.props.getNewTodoTitle
        const todo = {
            id: this.state.todos.length+1,
            title: title,
            jobs: [],
            isDone: false,
        }
        this.setState(prev => {
            const newTodos = prev.todos
            newTodos.push(todo)
            return {
            todos: newTodos,
        }})
        console.warn(todo)
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                {
                    this.state.todos.map(todoItem => (
                        <TodoItem key={todoItem.id} item={todoItem} 
                        navigate={this.props.navigate}/>
                    ))
                }
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 20,
        width: '100%',
    },
});