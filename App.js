import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './src/navigation/Drawer';

export default ()=>{
  return (
    <NavigationContainer>
    <Drawer/>
    </NavigationContainer>

  );
}


