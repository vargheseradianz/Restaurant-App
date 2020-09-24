import React from 'react';
import { View, Text } from 'react-native';
import Banner from './Banner';
import { dummyData } from './Data';

const SwiperBanner = ({ navigation }) => {
  return (
    <View>
      <Banner data={dummyData} />
    </View>
  );
};

export default SwiperBanner;
