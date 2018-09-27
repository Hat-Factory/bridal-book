import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import CreateAccount from '../createAccount/createAccount';
import SignInDrop from '../components/SignInDrop';
import InviteFriends from '../inviteFriends/InviteFriends';
import SignInModal from '../components/SignInModal';
import { createStackNavigator } from 'react-navigation';

import TaskHome from '../taskHome/TaskHome';
import CreateTask from '../createTask/createTask';
import ViewTaskContainer from '../viewTaskContainer/ViewTaskContainer';
import DisplayedTaskForm from '../DisplayedTaskForm/DisplayedTaskForm';
import AppDrop from '../AppDrop/AppDrop';
import InviteScreen from '../InviteScreen/InviteScreen';

const LoginNavigator =  createStackNavigator({
  // DisplayedTaskForm: DisplayedTaskForm,
  InviteScreen: InviteScreen,
  AppDrop: AppDrop,
  TaskHome: TaskHome,
  CreateTask: CreateTask,
  ViewTaskContainer: ViewTaskContainer,
  // Task: Task,
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