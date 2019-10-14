import React from 'react';
import {View, Text} from 'react-native'
import TabAll from '../components/TabAll'
import TabDone from '../components/TabDone'
import TabUndone from '../components/TabUndone'
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';


const TabScreen = createMaterialTopTabNavigator(
  {
    Done: { screen: TabDone },
    Undone: { screen: TabUndone },
    All: { screen: TabAll },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#f8f8f8',
      style: {
        backgroundColor: '#F8BC45',
        borderRadius: 5,
        marginTop: 10,
        height: 45,
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 15,
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 3,
      },
    },
  }
);

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  switch: TabScreen,
  //Inner: ReportTabNavigator,
});

const TabApp = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    // navigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#633689',
    //   },
    //   headerTintColor: '#FFFFFF',
    //   title: 'TabExample',
    // },
  },
});
export default createAppContainer(switchNavigator);
