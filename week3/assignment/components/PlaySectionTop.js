import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class PlaySectionTop extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    var img
    if (this.props.comChoose == 0) img=require('../assets/rock.png')
    else if (this.props.comChoose == 1) img=require('../assets/scissor.png')
    else if (this.props.comChoose == 2) img=require('../assets/paper.png')
    return (
      <View style={styles.container}>
        <View style={styles.sideSection}>
          <MaterialCommunityIcons name="crown" size={32} color="rgb(250,250,30)"
            style={{display: this.props.isWinning?'flex':'none'}}/>
          <Text style={styles.score}>{this.props.comScore}</Text>
        </View>
        <View style={styles.centerSection}>
          <Text style={styles.vs}>V</Text>
          <Image style={styles.img}
            source={img}
            resizeMode="contain"></Image>
        </View>
        <View style={styles.sideSection}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(117,194,246)',
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
  },
  vs: {
    width: 60,
    height: 35,
    fontWeight: '800',
    fontSize: 25,
    backgroundColor: 'rgb(193,6,51)',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "absolute",
    bottom: 0,
  },
  img: {
    width: '60%',
    height: '70%',
    transform: [{ rotate: '180deg'}]
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
    borderColor: 'rgb(200,200,100)',
    backgroundColor: 'rgb(250,250,30)',
    alignItems: 'center',
    justifyContent: 'center',
  }
});