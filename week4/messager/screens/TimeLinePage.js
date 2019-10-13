import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Feed from '../components/Feed';

export default class TimeLinePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Feed />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    width: '100%',
  }
})

TimeLinePage.navigationOptions = {
  title: "Timeline"
};