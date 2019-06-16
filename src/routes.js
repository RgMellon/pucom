import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

// Pages

import Home from '~/pages/Home';
import Stores from '~/pages/Stores';
import SignInScreen from '~/pages/SignInScreen';

import AuthLoadingScreen from '~/pages/AuthLoadingScreen';

const AppStack = createStackNavigator({ Home, Stores });
const AuthStack = createStackNavigator({ SignInScreen });

const Routes = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));


export default Routes;
