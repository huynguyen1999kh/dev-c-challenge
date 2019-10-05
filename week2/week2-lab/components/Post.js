import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: this.props.feed,
      liked: false,
      saved: false,
    }
    this.like = this.like.bind(this)
    this.save = this.save.bind(this)
  }
  like(){
    this.setState(prevState => {
      var newFeed = prevState.feed
      prevState.liked? newFeed.likeCount-- : newFeed.likeCount++
      return {
        feed: newFeed,
        liked: !prevState.liked
        }
    })
  }
  save(){
    this.setState(prevState => {
      return {saved: !prevState.saved}
    })
  }
  render() {
    return (
      <View style={styles.container} key={this.state.feed.id}>
        <View style={styles.profile}>
          <Image style={styles.avatar}
            source={this.state.feed.avatar} resizeMode="cover" />
          <Text style={styles.name}>{this.state.feed.name}</Text>
        </View>
        <View style={styles.postwrap}>
          <Image style={styles.post}
            source={this.state.feed.image} resizeMode="cover" />
        </View>
        <View style={styles.reactContainer}>
          <TouchableOpacity style={styles.reactBtn} 
            onPress={() => {
              this.like()
              Alert.alert('Instagram says:','liked')}}>
            <AntDesign name="hearto" size={27} color={this.state.liked?"red":"black"}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reactBtn}
            onPress={() => {
              Alert.alert('Instagram says:','comment')}}>
            <MaterialCommunityIcons name="comment-outline" size={27} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.reactBtn}
            onPress={() => {
              Alert.alert('Instagram says:','share')}}>
            <Feather name="share" size={27} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.reactBtnMark}
            onPress={() => {
              this.save()
              Alert.alert('Instagram says:','saved')}}>
            <Feather name="bookmark" size={27} color={this.state.saved?"yellow":"black"}/>
          </TouchableOpacity>
        </View>
        <View style={styles.likes}>
          <AntDesign style={styles.reactBtn} name="heart" size={25} color="black" />
          <Text style={styles.name}>{this.state.feed.likeCount} likes</Text>
        </View>
      </View>
    );
  }
}
export default Post

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  profile: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    marginHorizontal: 12,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  name: {
    marginLeft: 12,
    fontWeight: '500',
    fontSize: 15,
  },
  post: {
    flex: 1,
  },
  postwrap: {
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    height: 300,
  },
  reactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomColor: '#bbbbbb',
    borderBottomWidth: 1,
  },
  reactBtn: {
    paddingTop: 5,
    paddingHorizontal: 5,
  },
  reactBtnMark: {
    paddingTop: 5,
    paddingHorizontal: 5,
    position: "absolute",
    right: 0,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderBottomColor: '#bbbbbb',
    borderBottomWidth: 1,
  },
});
