import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Button} from 'expo-ui-kit';
import {DrawerContentLogin, DrawerContentLogout} from '../screens/Menu';
import AuthNavigator from '../navigation/Auth';
import Dashboard from '../screens/Dashboard';
import ChangeInfo from '../screens/auth/ChangeInfo';
import { SignIn } from '../screens/auth/SignIn';
import { SignUp } from '../screens/auth/SignUp';
import { ChangePassword } from '../screens/auth/ChangePassword';
import Posted from '../screens/auth/Posted';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import Title from '../constants/Title';
import Route from '../constants/Route';

import { AuthContext } from "./context";
import {
  CreateAccount,
  Search,
  Home,
  Details,
  Search2,
  Profile,
  Splash
} from "./Screens";


const DrawerStack = createStackNavigator();
const DrawerStackScreen = ({navigation}) => (
  <DrawerStack.Navigator>
     <DrawerStack.Screen name= {Route.CHANGE_INFO}  component={ChangeInfo} 
    options = {{
      headerTransparent: true,
      title: null,
    }}/>
  </DrawerStack.Navigator>
);

const SignInStack = createStackNavigator();
const SignInStackScreen = ({navigation}) => (
  <SignInStack.Navigator>
    <SignInStack.Screen name= { Route.SIGN_IN } component={SignIn}
    options = {{
      headerTransparent: true,
      headerLeft: () => (
        <Button transparent onPress={() => navigation.navigate(Route.DASHBOARD)}>
          <Feather name="arrow-left" size={18} color="black" style={{ paddingHorizontal: 10 }} />
        </Button>
      ),
      title: null,
    }} />
    <SignInStack.Screen name= { Route.SIGN_UP }  component={SignUp} 
    options = {{
      headerTransparent: true,
      title: null,
    }}/>
  </SignInStack.Navigator>
);

const Drawer = createDrawerNavigator();

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        alert('2');
        setIsLoading(false);
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#E94057', '#4A00E0']}>
      <AuthContext.Provider value={authContext}>
            {userToken ? (
              <Drawer.Navigator
              drawerType="slide"
              overlayColor="transparent"
              drawerStyle={styles.drawerStyles}
              contentContainerStyle={{ flex: 1 }}
              sceneContainerStyle={{ backgroundColor: 'transparent' }}
              drawerContent={props => {
              setProgress(props.progress);
              return <DrawerContentLogin {...props} /> }}>

                <Drawer.Screen name='Dashboard' >
                  {props => <AuthNavigator {...props}  style={animatedStyle} />}
                </Drawer.Screen>

                <Drawer.Screen name= {Route.CHANGE_INFO} component = {DrawerStackScreen}/> 
              </Drawer.Navigator>              
            ) : (
              <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={styles.drawerStyles}
                contentContainerStyle={{ flex: 1 }}
                sceneContainerStyle={{ backgroundColor: 'transparent' }}
                drawerContent={props => {
                setProgress(props.progress);
                return <DrawerContentLogout {...props} />}}>
      
                <Drawer.Screen name='Dashboard' options = {{
                  headerLeft: null,
                  title: null,
                }}>{props => <AuthNavigator {...props} style={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name= {Route.SIGN_IN} component = {SignInStackScreen}/> 
              </Drawer.Navigator>
            )}
      </AuthContext.Provider>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
});
