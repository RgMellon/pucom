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
import RegisterInfos from '~/pages/RegisterInfos';
import SuccessGetCupom from '~/pages/SuccessGetCupom';

import Register from '~/pages/Register';
import SignInScreen from '~/pages/SignInScreen';

import SignIn from '~/pages/SignIn';

import DetailStore from '~/pages/DetailStore';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignInScreen,
          Register,
          SignIn,
          SuccessGetCupom,
        }),

        App: createStackNavigator(
          {
            Tab: {
              screen: createBottomTabNavigator(
                {
                  Home,
                  Stores,
                },
                {
                  tabBarOptions: {
                    keyboardHidesTabBar: true,
                    activeTintColor: '#fff',
                    inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                    style: {
                      backgroundColor: '#320050',
                      borderTopRightRadius: 20,
                      borderTopLeftRadius: 20,
                    },
                  },
                }
              ),
            },
            DetailCupom,
            RegisterInfos,
          },
          {
            defaultNavigationOptions: {
              headerTransparent: true,
              header: null,
              headerTintColor: '#fff',
              headerLeftContainerStyle: {
                marginLeft: 10,
              },
            },
            cardStyle: { backgroundColor: '#00000000' },
          }
        ),
      },

      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
