import React from "react";
import { ScrollView, StyleSheet, View, Picker,Text } from "react-native";

export default class ReportsScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View styles={styles.container}>
        <View style={styles.header}>
          <Text style={styles.dateTime}>{(new Date()).toDateString()}</Text>
          <Picker
            style={{ height: 50, width: 130 }}>
            <Picker.Item label="All Tasks" value="all" />
            <Picker.Item label="Done Tasks" value="done" />
            <Picker.Item label="Undone Tasks" value="undone" />
          </Picker>
        </View>
      </View>
    );
  }
}

ReportsScreen.navigationOptions = {
  title: "Reports"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateTime: {
    fontSize: 20,
    fontWeight: '700',
  }
});
