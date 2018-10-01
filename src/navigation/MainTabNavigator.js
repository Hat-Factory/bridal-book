import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CreateAccount from '../createAccount/createAccount';

import AppDrop from '../AppDrop/AppDrop';
import WeddingsHome from '../WeddingsHome/WeddingsHome';
import InviteScreen from '../InviteScreen/InviteScreen';
// import AppDropStack from './appDropNav';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  AppDrop: AppDrop, 
  // AppDropStack: AppDropStack,
  WeddingsHome: WeddingsHome,
  InviteScreen: InviteScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'ios-home-outline'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Tasks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-list${focused ? '' : '-outline'}` : 'ios-list-outline'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

// const AppDropStack = createStackNavigator({
//   WeddingsHome: WeddingsHome,
//   InviteScreen: InviteScreen,
// })

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});
