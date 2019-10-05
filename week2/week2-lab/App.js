import * as React from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Header from './components/Header';
import Feed from './components/Feed'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header />
         <ScrollView>
        <Feed />
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f3f6fa',
  },
});
