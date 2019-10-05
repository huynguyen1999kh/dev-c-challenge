import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Post from './Post'
import {feedData} from '../data/feed'

class Feed extends React.Component {
  constructor(){
    super()
    this.state = {
      feed : feedData,
    }
  }
  render() {
    return (
      <View style={styles.container}>
      {this.state.feed.map(feed => {
        return (
          <Post feed={feed}/>
        )
      })}
      </View>
    );
  }
}
export default Feed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
