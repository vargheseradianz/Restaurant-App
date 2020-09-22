import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  ScrollView,
  Button,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { Body, Title, Card, CardItem, Left, Right, Input } from 'native-base';
//import Button from '../LoginScreen/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
import Home from './Home';
import Header from '../../component/Header';
import BottomTab from '../../component/bottomTab';
import SwitchItem from '../../component/switch';

const list = [
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1224&q=80',
  'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1536489885071-87983c3e2859?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
];

const HEADER_HEIGHT = 100;

export default function HomeScreen() {
  const [scrollAnim] = useState(new Animated.Value(0));
  const [offsetAnim] = useState(new Animated.Value(0));
  const [clampedScroll, setClampedScroll] = useState(
    Animated.diffClamp(
      Animated.add(
        scrollAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolateLeft: 'clamp',
        }),
        offsetAnim
      ),
      0,
      1
    )
  );

  renderList = ({ item }) => {
    return (
      <View style={{ marginRight: 5, marginLeft: 5 }}>
        <Image
          source={{ uri: item }}
          style={{
            width: '100%',
            height: 200,
            marginTop: 20,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#808080',
            height: 50,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Name
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 10,
              color: 'white',
              marginTop: 10,
            }}
          >
            $price
          </Text>
          <View>
            <SwitchItem />
          </View>

          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                backgroundColor: '#d3d3d3',
                alignItems: 'flex-end',
                justifyContent: 'center',
                borderRadius: 15,
                padding: 15,
                marginLeft: 70,
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: '800',
                  fontWeight: 'bold',
                }}
              >
                Edit items
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <Header />
      <Home />
      <Animated.FlatList
        contentInset={{ top: HEADER_HEIGHT }}
        contentOffset={{ y: -HEADER_HEIGHT }}
        bounces={false}
        scrollEventThrottle={16}
        data={list}
        renderItem={renderList}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollAnim },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 10000,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
