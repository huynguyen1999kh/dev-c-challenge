import React from 'react';
import { View, Text,StyleSheet,TextInput, ScrollView } from 'react-native';
import { messages } from "../data/messages.js";
import Contact from '../components/Contact.js';
import { BaseScreen } from '../BaseScreen.js';

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: messages,
    }
  }
  search = (name)=>{
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
        <ScrollView>
          {this.state.messages.map(info => (
            <Contact key={info.id} info={info} navigateToConversation={this.props.navigation.navigate}/>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
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
})

ContactPage.navigationOptions = {
  title: "Contacts"
};