import React from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { messages } from "../data/messages.js";
import MessageLabel from "../components/MessageLabel.js"
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MessagePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: messages,
    }
    this.search = this.search.bind(this)
  }
  search(name){
    this.setState({
      messages: messages.filter(mess => (mess.first_name+' '+mess.last_name)
        .toLowerCase()
        .indexOf(name.toLowerCase())>-1)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.search}
        onChangeText={name => this.search(name)}
        placeholder="Tìm kiếm"/>
        <ScrollView style={styles.listMess}>
          {this.state.messages.map(info => (
            <MessageLabel key={info.id} info={info} navigateToConversation={this.props.navigation.navigate}/>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    padding: 20,
  },
  search: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#eee',
    width: '100%',
    paddingHorizontal: 20,
    fontSize: 22,
    marginBottom: 10,
  },
  listMess:{
    width: '100%',
  },
  iconDrawer: {
    width: 40,
    height: 40,
    marginLeft: 15,
  }
})

MessagePage.navigationOptions = props => {
  return {
    title: "Messages",
    headerLeft: () => {
      return (
        <TouchableOpacity onPress={props.navigation.openDrawer}>
          <Image
            style={styles.iconDrawer}
            source={{
              uri:
                "https://cdn3.iconfinder.com/data/icons/ui-ux-essentials-solid/24/hamburger-menu-solid-512.png"
            }}
          />
        </TouchableOpacity>
      );
    }
  };
};