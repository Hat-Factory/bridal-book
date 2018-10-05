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
// import InviteFriendsForm from '../inviteFriends/InviteFriends';
// import AppDropStack from './appDropNav';

import TaskHome from '../taskHome/TaskHome';
import CreateTask from '../createTask/createTask';
import ViewTaskContainer from '../viewTaskContainer/ViewTaskContainer';
import DisplayedTaskForm from '../DisplayedTaskForm/DisplayedTaskForm';
// import AppDrop from '../AppDrop/AppDrop';
// import InviteScreen from '../InviteScreen/InviteScreen';

// import Channels from '../Channels/Channels';
// import Menu from '../Menu/Menu';
// import Profile from '../Profile/Profile'
// import OpenChannel from '../OpenChannel/OpenChannel'
// import Chat from '../Chat/Chat';

// import CreateAccount from '../createAccount/createAccount';
import HomeCarousel from '../HomeCarousel/HomeCarousel';


const HomeStack = createStackNavigator({
  // Menu: Menu,
  // Profile: Profile,
  // OpenChannel: OpenChannel,
  // Chat: Chat,
  // HomeCarousel: HomeCarousel,
  Home: HomeScreen,
  CreateAccount: CreateAccount,
  AppDrop: AppDrop, 
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

const TasksStack = createStackNavigator({
  TaskHome: TaskHome,
  DisplayedTaskForm: DisplayedTaskForm,
  CreateTask: CreateTask,
  ViewTaskContainer: ViewTaskContainer,
  // Task: Task,
});

TasksStack.navigationOptions = {
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
  TasksStack,
  SettingsStack
});
