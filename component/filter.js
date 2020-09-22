import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Button,
} from 'react-native';

export default class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  displayModal(show) {
    this.setState({ isVisible: show });
  }

  render() {
    return (
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 90,
          height: 70,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}
      >
        <Modal
          transparent={true}
          animationType={'slide'}
          visible={this.state.isVisible}
        >
          <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
            <View
              style={{
                backgroundColor: '#ffffff',
                margin: 20,
                padding: 40,
                borderRadius: 10,
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                Catogory List
              </Text>
              <Button
                title="submit"
                onPress={() => {
                  this.displayModal(false);
                }}
              />
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => {
            this.displayModal(true);
          }}
        >
          <View
            style={{
              width: 100,
              backgroundColor: '#d3d3d3',
              height: 50,
              borderRadius: 10,
              padding: 10,
              marginLeft: 142,
              marginBottom: 200,
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 12 }}>Filter by</Text>
            <Text style={{ fontWeight: 'bold' }}>Category</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
