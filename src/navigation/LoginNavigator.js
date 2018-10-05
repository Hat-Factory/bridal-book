import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import CreateAccount from '../createAccount/createAccount';
import SignInDrop from '../components/SignInDrop';
import InviteFriends from '../inviteFriends/InviteFriends';
import SignInModal from '../components/SignInModal';
import { createStackNavigator } from 'react-navigation';

// import TaskHome from '../taskHome/TaskHome';
// import CreateTask from '../createTask/createTask';
// import ViewTaskContainer from '../viewTaskContainer/ViewTaskContainer';
// import DisplayedTaskForm from '../DisplayedTaskForm/DisplayedTaskForm';
// import AppDrop from '../AppDrop/AppDrop';
// import InviteScreen from '../InviteScreen/InviteScreen';

import Start from "../.././sendbird/screens/Start";
import Login from "../.././sendbird/screens/Login";
import Menu from "../.././sendbird/screens/Menu";
import Profile from "../.././sendbird/screens/Profile";
import OpenChannel from "../.././sendbird/screens/OpenChannel";
import OpenChannelCreate from "../.././sendbird/screens/OpenChannelCreate";
import Chat from "../.././sendbird/screens/Chat";
import Member from "../.././sendbird/screens/Member";
import BlockUser from "../.././sendbird/screens/BlockUser";
import GroupChannel from "../.././sendbird/screens/GroupChannel";
import GroupChannelInvite from "../.././sendbird/screens/GroupChannelInvite";


const LoginNavigator =  createStackNavigator({
  // DisplayedTaskForm: DisplayedTaskForm,
  // InviteScreen: InviteScreen,
  // AppDrop: AppDrop,
  // TaskHome: TaskHome,
  // CreateTask: CreateTask,
  // ViewTaskContainer: ViewTaskContainer,
  // Task: Task,
  // InviteFriends: InviteFriends,

//   Start: { screen: Start },
//   // Login: Login,
//   Menu: { screen: Menu },
//   Profile: { screen: Profile },
//   OpenChannel: { screen: OpenChannel },
//   OpenChannelCreate: { screen: OpenChannelCreate },
//   Chat: { screen: Chat },
//   Member: { screen: Member },
//   BlockUser: { screen: BlockUser },
//   GroupChannel: { screen: GroupChannel },
//   GroupChannelInvite: { screen: GroupChannelInvite }
// },
// {
//   initialRouteName: 'Start',
//   navigationOptions: ({ navigation }) => ({
//     headerTitleStyle: { fontWeight: "500" }
//   })

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
  CreateAccount: CreateAccount,
  SignInModal: SignInModal,
  SignInDrop: SignInDrop

})

export default LoginNavigator;