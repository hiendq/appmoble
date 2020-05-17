import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'expo-ui-kit';
export default ({ navigation , style }) => {
  return (
    <View style = {styles.container}>
      <Text></Text>
      <Input
            id='email'
            placeholder='Email'
            keyboardType='email-address'
          />
    </View>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});