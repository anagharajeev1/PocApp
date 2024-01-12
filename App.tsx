import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingScreen from './src/components/LandingScreen';
import SignupScreen from './src/components/SignupScreen';
import SignInScreen from './src/components/SignInScreen';
import HomeScreen from './src/components/HomeScreen';
import UserDetailScreen from './src/components/UserDetailScreen';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers';
import {configureStore} from '@reduxjs/toolkit';

const Stack = createStackNavigator();

const store = configureStore({
  reducer: rootReducer,
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
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
              headerTintColor: 'blue', // Set the text color of the header
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
                marginLeft: 67,
              },
              headerTitle: 'Register Here',
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
              headerTintColor: 'blue',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
                marginLeft: 67,
              },
              headerTitle: 'Sign in',
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserDetail"
            component={UserDetailScreen}
            options={{
              headerStyle: {
                backgroundColor: 'white',
                height: 60,
              },
              headerTintColor: 'blue',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
                marginLeft: 67,
              },
              headerTitle: 'User details',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
