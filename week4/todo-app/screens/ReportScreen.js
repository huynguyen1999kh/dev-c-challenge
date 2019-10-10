import React from 'react';
import { ScrollView, StyleSheet,View } from 'react-native';

export default class ReportsScreen extends React.Component {
  render(){
    return (
        <View styles={styles.container}>
    
        </View>
      );
  }
}

ReportsScreen.navigationOptions = {
  title: 'Reports',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
