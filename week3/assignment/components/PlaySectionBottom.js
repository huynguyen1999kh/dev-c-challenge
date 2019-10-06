import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class PlaySectionBottom extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userChose: null,
            img: null,
        }
    }
    render() {
        var alert
        if (this.props.isUserWin == 0) alert="It's a Draw"
        else if (this.props.isUserWin == 1) alert="You Win"
        else if (this.props.isUserWin == 2) alert="You Lose"
        return (
            <View style={styles.container}>
                <View style={styles.sideSection}>
                    <MaterialCommunityIcons name="crown" size={35} color="rgb(250,250,30)"
                        style={{display: this.props.isWinning?'flex':'none'}}/>
                    <Text style={styles.score}>{this.props.userScore}</Text>
                    <TouchableOpacity style={styles.button}
                         onPress={this.props.clickSetting}>
                        <MaterialCommunityIcons name="settings" size={32} color="rgb(193,6,51)" />
                    </TouchableOpacity>
                </View>
                <View style={styles.centerSection}>
                    <Text style={styles.vs}>S</Text>
                    <Image style={styles.img}
                        source={this.state.img}
                        resizeMode="contain"></Image>
                    <Text style={styles.alert}>
                        {alert}
                    </Text>
                </View>
                <View style={styles.sideSection}>
                    <TouchableOpacity style={styles.button} 
                        onPress={() => {
                            this.props.fight(0)
                            this.setState({
                                img: require('../assets/rock.png'),
                                userChose: 0,
                            })}
                        }>
                        <FontAwesome name="hand-rock-o" size={32} color="rgb(193,6,51)" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                         onPress={() => {
                            this.props.fight(1)
                            this.setState({
                                img: require('../assets/scissor.png'),
                                userChose: 1,
                            })}
                        }>
                        <FontAwesome name="hand-scissors-o" size={32} color="rgb(193,6,51)" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                         onPress={() => {
                            this.props.fight(2)
                            this.setState({
                                img: require('../assets/paper.png'),
                                userChose: 2,
                            })}
                        }>
                        <FontAwesome name="hand-paper-o" size={32} color="rgb(193,6,51)" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(193,6,51)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    sideSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    centerSection: {
        flex: 3.5,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    score: {
        width: 54,
        height: 54,
        borderRadius: 27,
        fontWeight: '600',
        fontSize: 20,
        backgroundColor: 'rgb(250,250,30)',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 10,
    },
    vs: {
        width: 60,
        height: 35,
        fontWeight: '800',
        fontSize: 25,
        backgroundColor: 'rgb(116,193,245)',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: "absolute",
        top: 0,
    },
    img: {
        width: '60%',
        height: '70%',
    },
    alert: {
        fontWeight: '700',
        fontSize: 25,
        color: '#fff',
    },
    button: {
        width: 54,
        height: 54,
        marginVertical: 10,
        borderRadius: 27,
        borderWidth: 2,
        borderColor: 'rgb(200,200,200)',
        backgroundColor: 'rgb(250,250,30)',
        alignItems:'center',
        justifyContent:'center',
    }
});