import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'black',
          fontSize: 25,
          marginBottom: 10,
          fontWeight: 'bold',
        }}>
        Home
      </Text>
      <Button title="click Me" onPress={() => console.log('Button clicked')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aqua',
  },
});
