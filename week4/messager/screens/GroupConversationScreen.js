import React from "react";
import { Image, Text, ScrollView, StyleSheet, View } from "react-native";
import { BaseScreen } from "../BaseScreen";

export default class GroupConversationScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const messages = this.props.navigation.state.params.conversation.map(item => {
            return (
                <View style={styles.otherMessage} key={item.id}>
                    <Image
                        source={{ uri: item.avatar_url }}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 35,
                            marginRight: 8,
                        }}
                    />
                    <View>
                        <Text style={styles.name}>
                            {item.first_name}{" "}
                            {item.last_name}{"-"}
                        </Text>
                        <Text style={styles.messageLeft}>{item.last_message_content}</Text>
                        <Text style={{alignSelf:'flex-end', marginRight: 10}}>{item.last_message_date}</Text>
                    </View>
                </View>
            )
        })
        return (
            <View style={styles.container}>
                <ScrollView style={styles.contentContainer}>
                    {
                        messages
                    }
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
                            <Text style={styles.messageRight}>
                                lorem ipsum dolor sit amet consectetur adipiscing elit vivamus mi augue viverra sit amet ultricies
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

GroupConversationScreen.navigationOptions = {
    title: "Group Conversation"
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
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
