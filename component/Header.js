import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Filter from '../component/filter';
export default function Header() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image
        source={{
          uri:
            'https://images-workbench.99static.com/uNN5i13HsdTZqMFxxZ96TF1vPXY=/99designs-contests-attachments/118/118612/attachment_118612943',
        }}
        style={{
          marginTop: 40,
          width: 100,
          height: 60,
          borderRadius: 30 / 2,
          alignItems: 'flex-start',
        }}
      />
      <View style={{ flex: 1, paddingTop: 20 }}>
        <View
          style={{
            height: 70,
            backgroundColor: 'grey',
            justifyContent: 'center',
            paddingHorizontal: 5,
            borderRadius: 10,
            marginTop: 15,
            marginRight: 8,
          }}
        >
          <View
            style={{
              height: 50,
              backgroundColor: 'white',
              flexDirection: 'row',
              padding: 5,
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Icon name="ios-search" style={{ fontSize: 25 }} />
            <TextInput
              placeholder="Search...."
              style={{ fontSize: 18, paddingLeft: 15 }}
            />
          </View>
          <Filter />
        </View>
      </View>
    </View>
  );
}
