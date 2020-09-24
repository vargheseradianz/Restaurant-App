import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './screens/LoginScreen/Login';
import RegisterScreen from './screens/RegisterScreen/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Searchbar from './SearchBar/index';

import Tabnavigator from './component/bottomTab';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Switch from './component/switch';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
//const Stack = createStackNavigator();
import Animation from './test/animation';

export default class App extends React.Component {
  render() {
    return <Animation />;
  }
}
