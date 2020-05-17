import React from 'react';
import { View, Text, StyleSheet, Platform} from 'react-native';

export default ({ navigation , style }) => {
  return (
    <View style = {styles.container}>
      <Text>Đăng bài viết</Text>
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