import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import WeddingsHome from '../WeddingsHome/WeddingsHome';
import InviteScreen from '../InviteScreen/InviteScreen';


import MainTabNavigator from './MainTabNavigator';
import AppDropStack from './AppDropStack'

import InviteFriendsForm from '../InviteFriendsForm/InviteFriendsForm';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  InviteFriendsForm: InviteFriendsForm,
  Main: MainTabNavigator,
  AppDropStack: AppDropStack,
});