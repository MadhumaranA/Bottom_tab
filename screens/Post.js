import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Post = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Post</Text>
      <Button title="click Me" onPress={() => console.log('Button clicked')} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
});
