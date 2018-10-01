import { createStackNavigator } from 'react-navigation';

import WeddingsHome from '../WeddingsHome/WeddingsHome';
import InviteScreen from '../InviteScreen/InviteScreen';
import InviteFriends from '../inviteFriends/InviteFriends'
import InviteFriendsForm from '../InviteFriendsForm/InviteFriendsForm';

const AppDropStack = createStackNavigator({
  InviteFriendsForm: InviteFriendsForm,
  WeddingsHome: WeddingsHome,
  InviteScreen: InviteScreen,
  InviteFriends: InviteFriends
})

export default AppDropStack;