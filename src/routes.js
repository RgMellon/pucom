import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

// Pages

import Home from '~/pages/Home';
import Stores from '~/pages/Stores';
import MyProfile from '~/pages/MyProfile';

import SignInScreen from '~/pages/SignInScreen';
import SlidesApresentation from '~/pages/SlidesApresentation';

import AuthLoadingScreen from '~/pages/AuthLoadingScreen';

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',

        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <Icon size={24} name="ticket-alt" style={{ color: tintColor }} />
        ),
      },
    },

    Stores: {
      screen: Stores,
      navigationOptions: {
        title: 'Stores',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <Icon size={24} name="search" style={{ color: tintColor }} />
        ),
      },
    },

    Maps: {
      screen: Stores,
      navigationOptions: {
        title: 'Stores',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <Icon size={24} name="map-marked-alt" style={{ color: tintColor }} />
        ),
      },
    },

    User: {
      screen: MyProfile,
      navigationOptions: {
        title: 'Meu Perfil',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <Icon size={24} name="user-alt" style={{ color: tintColor }} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#6400F2',
      inactiveTintColor: 'black',
      showLabel: false,
    },
  },
);

const AuthStack = createStackNavigator({ SignInScreen });

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default Routes;
