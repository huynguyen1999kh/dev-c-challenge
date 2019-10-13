import * as React from 'react';
import {View, StyleSheet } from 'react-native';
import Counter from '../components/Counter'
import ImgContainer from '../components/ImgContainer'
import Profile from '../components/Profile'

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Profile />
        </View>
        <View style={styles.counter}>
          <Counter />
        </View>
        <View style={styles.imgContainer}>
          <ImgContainer />
        </View>
      </View>
    );
  }
}

ProfileScreen.navigationOptions = {
    title: "Profile"
  };

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  counter: {
    flex: 1.8,
  },
  profile: {
    flex: 2.3,
  },
  imgContainer: {
    flex: 8,
  }
});