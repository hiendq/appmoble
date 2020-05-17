import React, { useState, useEffect, useCallback } from 'react';
import {
  Image,
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Background from '../assets/Background-login.png';

const COLORS = {
  WHITE: '#FAFAFA',
  BLACK: '#000000',
  BLUE: '#1A73E8',
  GREY: '#AFAFAF',
};

const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 32,
  OR: 20,
  SUBTITLE: 11,
  LABEL: 12,
  PADDING: 12,
};

const firebaseConfig = {
  apiKey: '___FIREBASE_API_KEY___',
};

export default () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('contact@react-ui-kit.com');
  const [password, setPassword] = useState('subscribe');
  const [user, setUser] = useState(null);

  useEffect(() => {
    
  }, );

  const checkAuth = useCallback(() => {
    // Listen for authentication state to change.a
    
  }, );

  const handleLogin = useCallback(() => {
    
  },);

  const handleLogout = useCallback(() => {
   
  });

  const handleAuth = useCallback(() => {
    setLoading(true);
    handleLogin();
  });
  const navigateSignUp = () => {

    props.navigation.navigate(AppRoute.SIGN_UP);
    
  };
  const renderInputs = () => {
    const isValid = email && password;

    return (
      <>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="email"
          selectionColor={COLORS.WHITE}
          placeholderTextColor={COLORS.WHITE}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          secureTextEntry
          value={password}
          style={styles.input}
          placeholder="Password"
          selectionColor={COLORS.WHITE}
          placeholderTextColor={COLORS.WHITE}
          onChangeText={value => setPassword(value)}
        />
        <TouchableOpacity
          disabled={!isValid}
          style={[styles.button, styles.signin]}
          onPress={() => handleAuth('password')}>
          {loading ? (
            <ActivityIndicator size={SIZES.FONT * 1.4} color={COLORS.GREY} />
          ) : (
            <Text style={styles.signinLabel}>Login</Text>
          )}
        </TouchableOpacity>
        <Text style= {styles.or}>OR</Text>
        <View style = {styles.logWith}>
          <TouchableOpacity
            disabled={!isValid}
            style={[styles.button, styles.signin]}>
            <Text style={styles.signinLabel}>Google login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!isValid}
            style={[styles.button, styles.signin]}>
            <Text style={styles.signinLabel}>Facebook login</Text>
          </TouchableOpacity>
        </View>
        <Button
          style={styles.noAccountButton}
          appearance='ghost'
          status='basic'
          onPress={navigateSignUp}>
          Don't have an account?
        </Button>
      </>
     
    );
  };

  const renderUser = () => {
    if (!user) return null;

    return (
      <View>
        <Text style={styles.text}>Hey, {user.email}</Text>
        <TouchableOpacity style={[styles.button, styles.signin]} onPress={() => handleLogout()}>
          <Text style={styles.signinLabel}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    
    <View>
      <Image
      style = {{width: 300, height: 200}}
      source = {Background}/>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <Text style={styles.title}>Firebase</Text> */}
        {user && renderUser()}
        {!user && renderInputs()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: SIZES.BASE,
    justifyContent: 'center',
    padding: SIZES.PADDING / 0.83,
  },
  container: {
    backgroundColor: COLORS.BLUE,
    flex: 1,
    justifyContent: 'center',
    padding: SIZES.PADDING * 2,
  },
  input: {
    borderBottomColor: COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderWidth: 0,
    color: COLORS.WHITE,
    fontSize: SIZES.FONT,
    marginBottom: SIZES.PADDING,
    paddingHorizontal: SIZES.PADDING,
    paddingVertical: SIZES.PADDING * 1.5,
  },
  signin: {
    backgroundColor: COLORS.WHITE,
    borderColor: 'rgba(255,255,255,0.15)',
    borderRadius: SIZES.BASE * 5,
    borderWidth: 4,
    marginTop: SIZES.PADDING,
    paddingVertical: SIZES.PADDING,
    shadowColor: 'rgba(0,0,0,0.10)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 25,
  },
  signinLabel: {
    backgroundColor: 'transparent',
    color: COLORS.BLUE,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  text: {
    color: COLORS.WHITE,
    fontSize: SIZES.FONT,
    textAlign: 'center',
  },
  title: {
    color: COLORS.WHITE,
    fontSize: SIZES.TITLE,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: SIZES.BASE,
    textAlign: 'center',
  },
  logWith:{
    justifyContent: 'center',
    flexDirection: 'row',
  },
  or: {
    marginTop:15,
    color: COLORS.BLACK,
    fontSize: SIZES.OR,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: SIZES.BASE,
    textAlign: 'center',
  }
});
