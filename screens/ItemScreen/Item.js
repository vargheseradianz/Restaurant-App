import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Searchbar,
  Button,
  Picker,
} from 'react-native';
import {
  Container,
  Header,
  Body,
  CheckBox,
  Title,
  Card,
  CardItem,
  Left,
  Right,
  Icon,
  Content,
  Thumbnail,
  Grid,
  Col,
  Text,
  Subtitle,
  Item,
  InputGroup,
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Input from '../RegisterScreen/input';
import SearchBar from '../../SearchBar/index';

export default function App(props) {
  const [selectedValue, setSelectedValue] = useState('Availabe');

  return (
    <Container>
      <Header>
        <SearchBar />
      </Header>
      <ScrollView style={{ backgroundColor: '#FFF' }}>
        <Card
          style={{
            marginTop: 40,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <CardItem>
            <Left>
              <Thumbnail
                source={require('../../assets/a.jpg')}
                style={{
                  width: 100,
                  height: 120,
                  borderRadius: 10,
                  marginRight: 2,
                }}
              />
            </Left>
            <View
              style={{ alignItems: 'center', flexDirection: 'row', top: -50 }}
            >
              <Text style={{ color: 'grey', fontSize: 25, fontWeight: 'bold' }}>
                Burger
              </Text>
            </View>

            <Right>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: 'grey', fontSize: 25, top: -50 }}>
                  85Rs
                </Text>
              </View>
            </Right>
          </CardItem>
          <Card>
            <Right>
              <Picker
                selectedValue={selectedValue}
                style={{
                  height: 50,
                  width: 160,
                  color: 'green',
                  borderRadius: 10,
                }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item
                  label="Available"
                  value="Available"
                  style={{ fontWeight: 'bold' }}
                />
                <Picker.Item
                  label="Not Available"
                  value="Not Available"
                  style={{ fontWeight: 'bold' }}
                />
              </Picker>
            </Right>
          </Card>
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Edit Item</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </Container>
  );
}
const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
