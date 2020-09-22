import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Keyboard,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import Icon from 'react-native-vector-icons/Ionicons';
class App extends Component {
  state = {
    searchBarFocused: false,
  };

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow
    );
    this.keyboardWillShow = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow
    );
    this.keyboardWillHide = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide
    );
  }

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true });
  };

  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true });
  };

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 50,
            backgroundColor: '#c45653',
            justifyContent: 'center',
            paddingHorizontal: 5,
          }}
        >
          <Animatable.View
            animation="slideInRight"
            duration={500}
            style={{
              height: 50,
              backgroundColor: 'white',
              flexDirection: 'row',
              padding: 5,
              alignItems: 'center',
            }}
          >
            <Animatable.View
              animation={
                this.state.searchBarFocused ? 'fadeInLeft' : 'fadeInRight'
              }
              duration={400}
            >
              <Icon
                name={
                  this.state.searchBarFocused ? 'md-arrow-back' : 'ios-search'
                }
                style={{ fontSize: 24 }}
              />
            </Animatable.View>
            <TextInput
              placeholder="Search"
              style={{ fontSize: 24, marginLeft: 15, flex: 1 }}
            />
          </Animatable.View>
        </View>
      </View>
    );
  }
}
export default App;
