import React from 'react';
import {Text, View, Platform , StyleSheet, Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator,createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MessagePage from '../screens/MessagePage';
import ContactPage from '../screens/ContactPage';
import MorePage from '../screens/MorePage';
import TimeLinePage from '../screens/TimeLinePage';
import GroupPage from '../screens/GroupPage';
import ConversationPage from '../screens/ConversationPage';
import DrawerSection from '../components/Drawer'
import ProfileScreen from '../screens/ProfileScreen'
import GroupConversationScreen from '../screens/GroupConversationScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MessageStack = createStackNavigator(
  {
    Messages: MessagePage,
    Conversation: ConversationPage,
    Profile: ProfileScreen,
  },
  config
);

MessageStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'}
    />
  ),
};

MessageStack.path = '';

const ContactStack = createStackNavigator(
  {
    Contacts: ContactPage,
  },
  config
);

ContactStack.navigationOptions = {
  tabBarLabel: 'Contacts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'iose-contact': 'md-contact'} />
  ),
};

ContactStack.path = '';

const GroupStack = createStackNavigator(
  {
    Groups: GroupPage,
    GroupConversation : GroupConversationScreen,
  },
  config
);

GroupStack.navigationOptions = {
  tabBarLabel: 'Groups',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-people': 'md-people'} />
  ),
};

GroupStack.path = '';

const TimeLineStack = createStackNavigator(
  {
    TimeLine: TimeLinePage,
  },
  config
);

TimeLineStack.navigationOptions = {
  tabBarLabel: 'Time Line',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-today' : 'md-today'} />
  ),
};

TimeLineStack.path = '';

const MoreStack = createStackNavigator(
  {
    More: MorePage,
  },
  config
);

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'} />
  ),
};

MoreStack.path = '';

const tabNavigator = createBottomTabNavigator({
  MessageStack,
  ContactStack,
  GroupStack,
  TimeLineStack,
  MoreStack,
});

tabNavigator.path = '';

const Drawer = DrawerSection

const drawer = createDrawerNavigator(
  {
    Initial: tabNavigator
  },
  {
    contentComponent: Drawer
  }
);

export default drawer;
