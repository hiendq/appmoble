import React from 'react';
import { Image, View, StyleSheet} from 'react-native';
import { Text } from 'expo-ui-kit';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Feather, AntDesign } from '@expo/vector-icons';

import { AuthContext } from '../navigation/context'; 
import Title from '../constants/Title';
import Route from '../constants/Route';

export const DrawerContentLogin = (props) => {
  const { signOut } = React.useContext(AuthContext)
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
      <View>
        <View style = {styles.container}>
          <Image
            source={{
              uri: 'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png',
              height: 60,
              width: 60,
              scale: 0.5,
            }}
              resizeMode="center"
              style={styles.avatar}
            /> 
            <Text white title>Nguyễn V.An</Text>
            <Text white size={9}>contact@gamil.com</Text>
        </View>
          <View style = {{ marginTop: 150}}>
            <DrawerItem
                label= {Title.CHANGE_INFO}
                labelStyle={{ color: 'white'}}
                style={{ alignItems: 'flex-start', marginVertical: 0 }}
                onPress={() => props.navigation.navigate( Route.CHANGE_INFO )}
                icon={() => <AntDesign name="user" color="white" size={16} />}
                {...props}
              />
            <DrawerItem
              label= {Title.CHANGE_PASSWORD}
              labelStyle={{ color: 'white'}}
              style={{ alignItems: 'flex-start', marginVertical: 0 }}
              onPress={() => props.navigation.navigate( Route.CHANGE_PASSWORD )}
              icon={() => <AntDesign name="key" color="white" size={16} />}
              {...props}
            />
            <DrawerItem
              label= {Title.POSTED}
              labelStyle={{ color: 'white'}}
              style={{ alignItems: 'flex-start', marginVertical: 0 }}
              onPress={() => props.navigation.navigate( Route.POSTED )}
              icon={() => <Feather name="book" size={18} color ='white' />}
              {...props}
            />
            <DrawerItem
              label= {Title.LOGOUT}
              labelStyle={{ color: 'white'}}
              onPress={() => signOut() }
              icon = {() =>  <Feather name="log-out" size={18} color ='white' />}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    );
  };
  export const DrawerContentLogout = (props) => {
    return (
      <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
        <View>
          <View style = {{ marginTop: 50}}>
            <DrawerItem
              label= {Title.LOGIN}
              labelStyle={{ color: 'white'}}
              onPress={() => props.navigation.navigate( Route.SIGN_IN )}
              icon = {() =>  <AntDesign name="login" size={18} color ='white' />}
              {...props}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    );
  };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingLeft: 20
  },
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
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
  drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
  drawerLabel: { color: 'white', marginLeft: -16 },
  avatar: {
    marginLeft: 10,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: StyleSheet.hairlineWidth,
  },
});