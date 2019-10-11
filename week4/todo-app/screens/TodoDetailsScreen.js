import React from "react";
import { Image, Text, ScrollView, StyleSheet, View, CheckBox } from "react-native";
import { todos } from '../data/todos'
import { FontAwesome } from '@expo/vector-icons'

export default class TodoDetailsScreen extends React.Component {
    constructor(props) {
        super(props)
        const propsFromMessages = props.navigation.state.params;
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Text style={styles.title}>
                        {this.props.navigation.state.params.title}
                    </Text>
                    <View style={styles.titleContainer}>

                        <Text style={styles.status}
                            color={this.props.navigation.state.params.isDone ? '#92D04E' : '#E84946'}>
                            Status: {this.props.navigation.state.params.isDone ? "Done!" : "Not done"}
                        </Text>
                        <FontAwesome name={this.props.navigation.state.params.isDone ? 'check' : 'remove'}
                            size={30} color={this.props.navigation.state.params.isDone ? '#92D04E' : '#E84946'} />
                    </View>
                    <View style={styles.jobList}>
                        <Text style={styles.tasks}>Tasks</Text>
                        {this.props.navigation.state.params.jobs.map(job => (
                            <View key={job.id} style={styles.jobContainer}>
                                <Text style={styles.job}>{job.id}: {job.content}</Text>
                                <CheckBox></CheckBox>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

TodoDetailsScreen.navigationOptions = {
    title: "Details"
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    contentContainer: {
        alignItems: "center",
        justifyContent: "center"
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
    }
});