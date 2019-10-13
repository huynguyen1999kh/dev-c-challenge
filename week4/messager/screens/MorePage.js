import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

export default class MorePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>More</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: 'center',
  }
})

MorePage.navigationOptions = {
  title: "More..."
};