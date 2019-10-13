import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class Counter extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.counter}>210</Text>
        <Text style={styles.content}>Photos</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.counter}>15k</Text>
        <Text style={styles.content}>Followers</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.counter}>600</Text>
        <Text style={styles.content}>Following</Text>
      </View>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  counter : {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    fontSize: 12,
    fontWeight: '600',
  }
})