import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingScreen from './src/screens/LandingScreen';
import SignupScreen from './src/screens/SignupScreen';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import UserDetailScreen from './src/screens/UserDetailScreen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
                headerTintColor: 'green',
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
                headerTintColor: 'green',
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
                headerTintColor: 'green',
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
      </PersistGate>
    </Provider>
  );
};

export default App;
