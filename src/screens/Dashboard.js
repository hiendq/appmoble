import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Route from '../constants/Route';
import TabBarIcon from '../components/TabBarIcon';
import Search from './home/Search';
import PostNew from '../screens/home/PostNew';
import ActionNavigator from '../navigation/Action';
import HomeNavigator from '../navigation/Home';

const Tabs = createBottomTabNavigator();
const TabsScreen = (props) => (
  <Tabs.Navigator >
     <Tabs.Screen name= {Route.HOME} component={ HomeNavigator } options ={{
      title: '',
      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />
      }}/>
    <Tabs.Screen name= {Route.ACTION} component={ActionNavigator} options ={{
      title: '',
      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="heart" />
      }}/>
    <Tabs.Screen name= {Route.POST} component={PostNew} options ={{
      title: '',
      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="pluscircleo" />
      }}/>
    <Tabs.Screen name= {Route.SEARCH} component={Search} options ={{
      title: '',
      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="search1" />
      }}/>
  </Tabs.Navigator>
);
export default function Dashboard() {
  return (
    <TabsScreen />
  );
};
