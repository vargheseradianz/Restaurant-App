import React, { useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native';

export default function SwitchItem() {
  const [switchEnable, setSwitchEnable] = useState(false);
  return (
    <View style={styles.container}>
      <Switch
        value={switchEnable}
        onValueChange={(value) => setSwitchEnable(value)}
        trackColor={{ true: 'red' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
});
