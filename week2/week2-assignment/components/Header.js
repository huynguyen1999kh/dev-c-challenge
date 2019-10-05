import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {MAIN_GREY} from '../favColor'

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AntDesign name="arrowleft" size={21} color={MAIN_GREY} />
        <MaterialCommunityIcons name="view-dashboard" size={21} color={MAIN_GREY} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal:10,
  },
});
