import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Route from '../../constants/Route';
import {Item} from '../../components';

export default ({ navigation }) => {
  return (  
    <KeyboardAwareScrollView style = {styles.safeArea}>
      <Item navigation = {navigation}/>
      <Item navigation = {navigation}/>
      <Item navigation = {navigation}/>
      <Item navigation = {navigation}/>
      <Item navigation = {navigation}/>
      <Item navigation = {navigation}/>
    </KeyboardAwareScrollView>    
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
