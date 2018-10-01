import { createStackNavigator } from 'react-navigation';

import WeddingsHome from '../WeddingsHome/WeddingsHome';
import InviteScreen from '../InviteScreen/InviteScreen';
import InviteFriends from '../inviteFriends/InviteFriends'
import InviteFriendsForm from '../InviteFriendsForm/InviteFriendsForm';

const AppDropStack = createStackNavigator({
  WeddingsHome: {
    screen: WeddingsHome,
    navigationOptions: () => ({
      headerBackTitle: null
    }),
  },
  // WeddingsHome: WeddingsHome,
  InviteScreen: {
    screen: InviteScreen,
    navigationOptions: () => ({
      headerBackTitle: null
    }),
  },
  // InviteScreen: InviteScreen,
  InviteFriends: {
    screen: InviteFriends,
    navigationOptions: () => ({
      headerBackTitle: null
    }),
  },
  // InviteFriends: InviteFriends,
  InviteFriendsForm: {
    screen: InviteFriendsForm,
    navigationOptions: () => ({
      headerBackTitle: null
    }),
  },
  // InviteFriendsForm: InviteFriendsForm,
})

export default AppDropStack;