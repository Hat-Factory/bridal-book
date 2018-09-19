import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import CreateAccount from '../createAccount/createAccount';
import SignInDrop from '../components/SignInDrop';
import { createStackNavigator } from 'react-navigation';

const LoginNavigator =  createStackNavigator({
  CreateAccount: CreateAccount,
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
  // Nav: Nav,
  SignInDrop: SignInDrop

})

export default LoginNavigator;