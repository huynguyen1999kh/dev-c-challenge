import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import { todos } from '../data/todos'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todos,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                {
                    this.state.todos.map(todoItem => (
                        <TodoItem key={todoItem.id} item={todoItem}></TodoItem>
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