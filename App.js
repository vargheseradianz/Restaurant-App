import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './screens/LoginScreen/Login';
import RegisterScreen from './screens/RegisterScreen/Register';
import ItemScreen from './screens/ItemScreen/Item';
import List from './screens/ItemScreen/list';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Searchbar from './SearchBar/index';

import Tabnavigator from './component/bottomTab';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Switch from './component/switch';

//const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return <Tabnavigator />;
  }
}
