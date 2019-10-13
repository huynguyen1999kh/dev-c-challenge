import React from 'react';
import { ScrollView, StyleSheet, View, Picker, Text } from "react-native";
import TabApp from '../navigation/ReportTabNavigator';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
        <View style={styles.container}>
          <TabApp />
        </View>
    )
  }
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  header: {
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  today: {
    fontSize: 20,
    fontWeight: '700',
  },
  dateTime: {
    fontSize: 18,
    fontWeight: '700',
  },
  done: {
    alignSelf: 'flex-end',
    marginLeft: -30,
    fontWeight: '600',
  },
  undone: {
    alignSelf: 'flex-end',
    marginRight: -30,
    fontWeight: '600',
  }
});

