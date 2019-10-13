import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Image ,Platform, Switch} from 'react-native';

export default class Drawer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nightVisionOn : false,
        }
    }
    nightVisionSwitch = (value)=>{this.setState({nightVisionOn:value})}
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                    <Image style={styles.avatar} source={require('../assets/profile3.jpg')}></Image>
                </TouchableOpacity>
                <Text style={styles.name}>Kiona Anh</Text>
                <Text style={styles.label}>Settings</Text>
                <View style={styles.settings}>
                    <Ionicons name={Platform.OS === 'ios' ? 'ios-cloudy-night' : 'md-cloudy-night'} size={27}/>
                    <Text style={styles.label}>Night Vision</Text>
                    <Switch style={styles.switch} 
                        value={this.state.nightVisionOn}
                        onValueChange={this.nightVisionSwitch}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        alignItems: 'center',
        width: '100%',
    },
    avatar: {
        width: 140,
        height: 140,
        borderRadius: 70,
    },
    name: {
        fontSize: 23,
        fontWeight: '700',
        marginVertical: 20,
    },
    settings:{
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    label :{
        fontSize: 18,
        fontWeight: '500',
        marginHorizontal: 10,
    },
    switch: {
        position:'absolute',
        right: 5,
    }
})