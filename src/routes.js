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

import DetailCupom from '~/pages/DetailPucom';
import ConfirmCupom from '~/pages/ConfirmCupom';
import MyCupons from '~/pages/MyCupons';

import Register from '~/pages/Register';
import SignInScreen from '~/pages/SignInScreen';

import SignIn from '~/pages/SignIn';

import DetailStore from '~/pages/DetailStore';

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        header: null,

        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <Icon size={20} name="ticket-alt" style={{ color: tintColor }} />
        ),
      },
    },

    Stores: {
      screen: Stores,
      navigationOptions: {
        title: 'Stores',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <Icon size={20} name="search" style={{ color: tintColor }} />
        ),
      },
    },

    Maps: {
      screen: MyCupons,
      navigationOptions: {
        title: 'MyCupons',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <Icon size={20} name="list" style={{ color: tintColor }} />
        ),
      },
    },

    User: {
      screen: MyProfile,
      navigationOptions: {
        title: 'Meu Perfil',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <Icon size={20} name="user-alt" style={{ color: tintColor }} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#F8F8F8', // active icon color
      inactiveTintColor: '#586589', // inactive icon color
      showLabel: false,
      style: {
        backgroundColor: '#320050',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      },
    },
  }
);

const AuthStack = createSwitchNavigator(
  {
    SignInScreen,
    Register,
    SignIn,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default (isSigned = false) =>
  createAppContainer(
    createStackNavigator(
      {
        App: AppStack,
        Auth: AuthStack,
        DetailStore,
        DetailCupom,
        ConfirmCupom,
      },
      {
        defaultNavigationOptions: {
          header: null,
        },
        cardStyle: {
          backgroundColor: '#320061',
        },
      },
      {
        initialRouteName: isSigned ? 'App' : 'Auth',
      }
    )
  );
