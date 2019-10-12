import React from "react";
import { Text, ScrollView, View, CheckBox, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import styles from './TodoDetailsScreenStyle'

export default class TodoDetailsScreen extends React.Component {
    constructor(props) {
        super(props)
        const item = props.navigation.state.params.item;
        this.state = {
            inputFocus : false,
            item : item,
            inputText: "",
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
        this.checkIsDone()
    }
    checkIsDone = () => {
        const newItem = this.state.item
        if (!newItem.jobs.find(job => job.check == false)){
            newItem.isDone = true
        }
        else {
            newItem.isDone = false
        }
        this.setState({
            item: newItem,
        })
        this.props.navigation.state.params.refresh()
    }
    updateInputText = (newText) => {
        this.setState({
          inputText: newText,
        })
      }
    addNewTask = async () => {
        const taskcontent = this.state.inputText
        if (taskcontent ==="") return
        const task = {
          id: this.state.item.jobs.length + 1,
          content: taskcontent,
          check: false,
        }
        await this.setState(prev => {
          const newItem = prev.item
          newItem.jobs.push(task)
          return {
            todos: newItem,
          }
        })
        this.checkIsDone()
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
                        onChangeText={text => this.updateInputText(text)}
                        blurOnSubmit={true}
                        placeholder="Add new tasks ..." />
                    <TouchableOpacity style={styles.newTodoButton}
                        onPress={this.addNewTask}>
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