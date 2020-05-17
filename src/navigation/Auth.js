import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button} from 'expo-ui-kit';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';

import Title from '../constants/Title';
import Route from '../constants/Route';

import Dashboard from '../screens/Dashboard';
import ChangeInfo from '../screens/auth/ChangeInfo';
import ChangePassword from '../screens/auth/ChangePassword';
import Posted from '../screens/auth/Posted';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';

const Stack = createStackNavigator();

export default ({navigation, style}) =>{
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerLeft: () => (
            <Button transparent onPress={() => navigation.navigate(Route.DASHBOARD)}>
              <Feather name="arrow-left" size={18} color="black" style={{ paddingHorizontal: 10 }} />
            </Button>
          )}}>
        <Stack.Screen name= {Route.DASHBOARD} options = {{
          headerLeft: null,
          title: null,
        }}>{props => <Dashboard {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
});

