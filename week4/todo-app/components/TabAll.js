import React from 'react';
import { View, Text , StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default class TabAll extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            todos: props.screenProps.todos,
            isTodos: true,
        }
    }
    render() {
        const allitems =this.state.todos.map(item => (
            <View key={item.id} style={item.isDone?styles.itemDone:styles.itemUndone}>
                <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
            </View>
        ))
        return (
            <ScrollView style={styles.container}>
                {allitems}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    itemDone: {
        height: 40,
        width: '100%',
        borderLeftColor: '#92D04E',
        borderLeftWidth: 3,
        justifyContent: 'center',
        margin: 5,
        backgroundColor: '#fff',
    },
    itemUndone: {
        height: 40,
        width: '100%',
        borderLeftColor: '#E84946',
        borderLeftWidth: 3,
        justifyContent: 'center',
        margin: 5,
        backgroundColor: '#fff',
    },
    itemTitle: {
        marginLeft: 10,
        fontSize: 15,
    },
})