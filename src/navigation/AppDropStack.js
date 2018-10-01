import { createStackNavigator } from 'react-navigation';

import WeddingsHome from '../WeddingsHome/WeddingsHome';
import InviteScreen from '../InviteScreen/InviteScreen';

const AppDropStack = createStackNavigator({
  WeddingsHome: WeddingsHome,
  InviteScreen: InviteScreen,
})

export default AppDropStack;