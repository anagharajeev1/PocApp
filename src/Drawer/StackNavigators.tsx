import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import SignupScreen from '../screens/SignupScreen';
import SignInScreen from '../screens/SignInScreen';

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
          headerStyle: {
            backgroundColor: 'white',
            height: 60,
          },
          headerTintColor: 'green',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            marginLeft: 150,
          },
          headerTitle: 'Register here!',
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerStyle: {
            backgroundColor: 'white',
            height: 60,
          },
          headerTintColor: 'green',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            marginLeft: 67,
          },
          headerTitle: 'Sign in',
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
