import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: this.props.item,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.item.title}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <View style={styles.status} backgroundColor={this.state.item.isDone ? '#92D04E' : '#E84946'}>
                            <FontAwesome name={this.state.item.isDone ? 'check' : 'remove'} size={30} color='#fff' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.status} backgroundColor='#5AB3B3'>
                            <MaterialIcons name='delete' size={30} color='#fff' />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        height: 80,
        backgroundColor: '#F8BC45',
        flexDirection: 'row',
        width: '100%',
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: '700',
        fontSize: 18,
    },
    status: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
});