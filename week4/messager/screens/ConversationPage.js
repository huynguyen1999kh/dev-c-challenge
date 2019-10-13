import React from "react";
import { Image, Text, ScrollView, StyleSheet, View } from "react-native";
import { BaseScreen } from "../BaseScreen";

export default class ConversationPage extends React.Component {
  constructor(props) {
    super(props);
    const propsFromMessages = props.navigation.state.params;
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
        <View style={styles.otherMessage}>
          <Image
            source={{ uri: this.props.navigation.state.params.avatar_url }}
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              marginRight: 8,
            }}
          />
          <View>
            <Text style={styles.name}>
              {this.props.navigation.state.params.first_name}{" "}
              {this.props.navigation.state.params.last_name}
            </Text>
            <Text style={styles.messageLeft}>{this.props.navigation.state.params.last_message_content}</Text>
            <Text style={{alignSelf:'flex-end', marginRight: 10}}>{this.props.navigation.state.params.last_message_date}</Text>
          </View>
        </View>
        <View style={styles.myMessage}>
          <Image
            source={require('../assets/profile3.jpg')}
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              marginLeft: 8,
            }}
          />
          <View>
            <Text style={styles.myname}>
              Kiona Anh
            </Text>
            <Text style={styles.messageRight}>{this.props.navigation.state.params.last_message_content}</Text>
          </View>
        </View>
      </ScrollView>
      </View>
    );
  }
}

ConversationPage.navigationOptions = {
  title: "Conversation"
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
    width: '100%',
  },
  otherMessage: {
    width: '60%',
    marginLeft: 10,
    flexDirection: 'row',
    marginVertical: 10,
  },
  myMessage: {
    width: '60%',
    marginLeft: 10,
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  messageRight: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
  }, 
  messageLeft: {
    backgroundColor: 'rgb(90,200,250)',
    padding: 10,
    borderRadius: 10,
  },
  myname: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
});
