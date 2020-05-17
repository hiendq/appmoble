import React from 'react';
import { View, Text, StyleSheet, Platform} from 'react-native';

export default ({ navigation , style }) => {
  return (
    <View style = {styles.container}>
      <Text>Tìm kiếm</Text>
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