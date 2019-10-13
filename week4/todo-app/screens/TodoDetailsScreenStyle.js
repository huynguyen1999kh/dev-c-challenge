import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    invisible: {
        display: 'none',
    },
    container: {
        flex: 1,
        alignContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#F8F8F8'
    },
    containerReverse: {
        flex: 1,
        flexDirection: 'column-reverse',
        alignContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    contentContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: '700',
        fontSize: 25,
        margin: 10,
        color: '#5AB3B3',
        maxWidth: '75%',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    status: {
        fontSize: 17,
    },
    tasks: {
        color: '#F8BC45',
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center',
        marginBottom: 5,
    },
    job: {
        alignSelf: 'flex-start',
        maxWidth: '75%',
        fontSize: 16,
    },
    jobContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    jobList: {
        padding: 15,
        borderColor: '#92D04E',
        borderWidth: 1,
        borderRadius: 10,
        paddingBottom: 15,
        margin: 5,
        width: '90%',
    },
    newTodoContainer: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 30,
        alignSelf: 'center',
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
});

export default styles