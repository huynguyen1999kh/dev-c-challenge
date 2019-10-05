import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {MaterialIcons} from '@expo/vector-icons'
import {EvilIcons} from '@expo/vector-icons'
import {MAIN_GREY} from '../favColor'

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MaterialCommunityIcons name="table-of-contents" size={26} color={MAIN_GREY} />
        <EvilIcons name="plus" size={26} color={MAIN_GREY} />
        <MaterialIcons name="person-outline" size={26} color={MAIN_GREY} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
  },
});
