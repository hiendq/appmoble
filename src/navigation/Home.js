import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Route from '../constants/Route';
import { Button} from 'expo-ui-kit';
import { Feather } from '@expo/vector-icons';
import {Home , Map, Detail } from '../screens/home'
import Title from '../constants/Title';

const Stack = createStackNavigator();

export default ({navigation}) =>{
  return (
      <Stack.Navigator >
        <Stack.Screen name = {Route.HOME}  options = {{
            headerLeft: () =>(
              <Button transparent onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={18} color="black" style={{ paddingHorizontal: 10 }} />
              </Button>
            ), 
            title: Title.HOME,
        }}>
          {props => <Home {...props} />}</Stack.Screen>

        <Stack.Screen name = {Route.DETAIL} options = {{
          title: 'Chi tiết phòng'
        }} >{props => <Detail {...props} />}</Stack.Screen>
        <Stack.Screen name = {Route.MAP} >{props => <Map {...props} />}</Stack.Screen>
      </Stack.Navigator>
  );
}

