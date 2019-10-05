import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Counter from './components/Counter'
import Footer from './components/Footer'
import Header from './components/Header'
import ImgContainer from './components/ImgContainer'
import Profile from './components/Profile'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.profile}>
          <Profile />
        </View>
        <View style={styles.counter}>
          <Counter />
        </View>
        <View style={styles.imgContainer}>
          <ImgContainer />
        </View>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    fontFamily: 'Helvetica Neue',
  },
  header: {
    flex: 1,
  },
  counter: {
    flex: 2,
  },
  profile: {
    flex: 2.3,
  },
  footer: {
    flex: 1,
  },
  imgContainer: {
    flex: 7,
  }
});
