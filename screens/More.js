import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const More = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>More</Text>
      <Button title="click Me" onPress={() => console.log('Button clicked')} />
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
});
