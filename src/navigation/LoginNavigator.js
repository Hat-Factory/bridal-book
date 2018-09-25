import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import CreateAccount from '../createAccount/createAccount';
import SignInDrop from '../components/SignInDrop';
import InviteFriends from '../inviteFriends/InviteFriends';
import SignInModal from '../components/SignInModal';
import { createStackNavigator } from 'react-navigation';

import TaskHome from '../taskHome/TaskHome';

const LoginNavigator =  createStackNavigator({
  TaskHome: TaskHome,
  // InviteFriends: InviteFriends,
  SignIn: {
    screen: SignIn,
    navigationOptions: () => ({
      headerBackTitle: null
    }),
  },
  SignUp:  {
    screen: SignUp,
    navigationOptions: () => ({
      headerBackTitle: null
    }),
  },
  SignInModal: SignInModal,
  // CreateAccount: CreateAccount,
  SignInDrop: SignInDrop

})

export default LoginNavigator;