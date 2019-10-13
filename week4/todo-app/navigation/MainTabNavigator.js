import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TodoScreen from '../screens/TodoScreen';
import ReportScreen from '../screens/ReportScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const TodoStack = createStackNavigator(
  {
    Todo: TodoScreen,
    TodoDetails: TodoDetailsScreen,
  },
  config
);

TodoStack.navigationOptions = {
  tabBarLabel: 'Todo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-list-box'}`
          : 'md-list-box'
      }
    />
  ),
};

TodoStack.path = '';

const ReportStack = createStackNavigator(
  {
    Report: ReportScreen,
  },
  config
);

ReportStack.navigationOptions = {
  tabBarLabel: 'Report',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-stats' : 'md-stats'} />
  ),
};

ReportStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  TodoStack,
  ReportStack,
});

tabNavigator.path = '';

export default tabNavigator;