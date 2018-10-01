import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import WeddingsHome from '../WeddingsHome/WeddingsHome';
import InviteScreen from '../InviteScreen/InviteScreen';


import MainTabNavigator from './MainTabNavigator';
import AppDropStack from './AppDropStack'

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  AppDropStack: AppDropStack,
  WeddingsHome: WeddingsHome,
  InviteScreen: InviteScreen,
});