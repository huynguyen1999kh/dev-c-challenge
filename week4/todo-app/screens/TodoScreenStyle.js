import {
    StyleSheet,
} from 'react-native';

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

export default styles