import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from 'formik'
import * as yup from 'yup'

import Route from '../../constants/Route';
import { Button, Block, Text, Input } from '../../components';
import * as theme from '../../constants/theme';
import { AuthContext } from '../../navigation/context'; 

const { height } = Dimensions.get('window');
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object().shape({
  name: yup.string().label('Full name').required(),
  email: yup.string().label('Email address').email().required(),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  password: yup.string().label('Password').required().min(3, 'Seems a bit short...').max(10, 'We prefer insecure system, try a shorter password'),
  confirmPassword: yup.string().label('confirm password').test('passwords-match', 'Passwords must match ya fool', function(value) {
    return this.parent.password === value;
  }),
})

export const SignUp = ({ navigation }) =>  {
  const { signUp } = React.useContext(AuthContext);
    return (
      <KeyboardAwareScrollView 
      style={{ marginVertical: 60 }} 
      showsVerticalScrollIndicator={false}>
        <Formik
        initialValues = {{name :'', email : '',phone: '' ,password: '', confirmPassword: ''}}
        onSubmit = {(values) => {
          alert(JSON.stringify(values));
          signUp();
        }}
        validationSchema = {validationSchema}
        >
        {formikProps => (
          <Block center>
            <Text h3 style={{ marginBottom: 6 }}>
              Your account
            </Text>
            <Text paragraph color="black3">
              Please enter your credentials to proceed.
            </Text>
            <Block center style={{ marginTop: 25 }}>
              <Input
                full
                label="Full name"
                style={{ marginBottom: 25 }}
                formikProps = {formikProps}
                formikKey = 'name'
                autoFocus
              />
              <Input
                full
                email
                label="Email address"
                style={{ marginBottom: 25 }}
                formikProps = {formikProps}
                formikKey = 'email'
              />
              <Input
                full
                phone
                label="Phone number"
                style={{ marginBottom: 25 }}
                formikProps = {formikProps}
                formikKey = 'phone'
              />
              <Input
                full
                password
                label="Password"
                style={{ marginBottom: 25 }}
                formikProps = {formikProps}
                formikKey = 'password'
              />
              <Input
                full
                password
                label="confirm password"
                style={{ marginBottom: 25 }}
                formikProps = {formikProps}
                formikKey = 'confirmPassword'
              />

              <Button
                full
                style={{ marginBottom: 12 }}
                onPress={ formikProps.handleSubmit}
              >
                <Text button>Create Account</Text>
              </Button>
             <Text paragraph color="gray">
               Already have an account? <Text
                height={18}
                color="blue"
                onPress={() => navigation.navigate(Route.SIGN_IN)}>
                Sign in
              </Text>
            </Text>
          </Block>
        </Block>
        )}
        </Formik>
        
      </KeyboardAwareScrollView>
    )
  }


const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 5,
    backgroundColor: theme.colors.white,
  },
  active: {
    borderColor: theme.colors.blue,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: theme.colors.lightblue,
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  icon: {
    flex: 0,
    height: 48,
    width: 48,
    borderRadius: 48,
    marginBottom: 15,
    backgroundColor: theme.colors.lightblue
  },
  check: {
    position: 'absolute',
    right: -9,
    top: -9,
  }
})