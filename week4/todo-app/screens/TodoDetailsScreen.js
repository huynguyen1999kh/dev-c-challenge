import React from "react";
import { Image, Text, ScrollView, StyleSheet, View, CheckBox, TextInput, TouchableOpacity } from "react-native";
import { todos } from '../data/todos'
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

export default class TodoDetailsScreen extends React.Component {
    constructor(props) {
        super(props)
        const item = props.navigation.state.params.item;
        this.state = {
            inputFocus : false,
            item : item,
        }
    }
    textInputFocused() {
        this.setState({
            inputFocus: true,
        })
    }
    textInputLostFocus() {
        this.setState({
            inputFocus: false,
        })
    }
    checkJob = (job) => {
        const newItem = this.state.item
        newItem.jobs.find(tjob => tjob.id == job.id).check = !job.check
        if (!newItem.jobs.find(job => job.check == false)){
            newItem.isDone = true
        }
        else {
            newItem.isDone = false
        }
        this.setState({
            item: newItem,
        })
    }
    render() {
        return (
            <View style={this.state.inputFocus?styles.containerReverse:styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Text style={styles.title}>
                        {this.state.item.title}
                    </Text>
                    <View style={styles.titleContainer}>
                        <Text style={styles.status}
                            color={this.state.item.isDone ? '#92D04E' : '#E84946'}>
                            Status: {this.state.item.isDone ? "Done!" : "Not done"}
                        </Text>
                        <FontAwesome name={this.state.item.isDone ? 'check' : 'remove'}
                            size={30} color={this.state.item.isDone ? '#92D04E' : '#E84946'} />
                    </View>
                    <View style={styles.jobList}>
                        <Text style={styles.tasks}>Tasks</Text>
                        {this.state.item.jobs.map(job => (
                            <View key={job.id} style={styles.jobContainer}>
                                <Text style={styles.job}>{job.id}: {job.content}</Text>
                                <CheckBox
                                    value={job.check}
                                    onValueChange={() => {
                                        this.checkJob(job)
                                        this.props.navigation.state.params.refresh()
                                    }}
                                    />
                            </View>
                        ))}
                    </View>
                </ScrollView>
                <View style={styles.newTodoContainer}>
                    <TextInput style={styles.newTodo}
                        onFocus={this.textInputFocused.bind(this)}
                        onBlur={this.textInputLostFocus.bind(this)}
                        placeholder="Add new tasks ..." />
                    <TouchableOpacity style={styles.newTodoButton}>
                        <Entypo name="plus" size={30} color='#fff'></Entypo>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

TodoDetailsScreen.navigationOptions = {
    title: "Details"
};

const styles = StyleSheet.create({
    invisible: {
        display: 'none',
    },
    container: {
        flex: 1,
        alignContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
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