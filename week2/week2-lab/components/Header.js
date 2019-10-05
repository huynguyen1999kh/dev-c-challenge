import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img}
          source={require('../assets/1200px-Instagram_logo.svg.png')} resizeMode="contain" />
        <Feather name="inbox" size={27} color="black" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 5,
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    flex: 1,
    width: null,
    height: 40,
    marginLeft: 27,
  },
});
