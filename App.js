import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IntroScreen from './src/screens/IntroScreen';
import LoginScreen from './src/screens/LoginScreen';

const navigator = createStackNavigator(
  {
    Intro: IntroScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Intro",
    headerMode: "none",
    defaultNavigationOptions: {
      title: "Feel People",
    }
  }
)

export default createAppContainer(navigator)