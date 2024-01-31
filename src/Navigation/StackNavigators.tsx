import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import SignupScreen from '../screens/SignupScreen';
import SignInScreen from '../screens/SignInScreen';
import {registerHeaderStyle, signInHeaderStyle} from '../styling/stackStyles';

const NavigationStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          ...registerHeaderStyle,
          headerTitle: 'Register here!',
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          ...signInHeaderStyle,
          headerTitle: 'Sign in',
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
