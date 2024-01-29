import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View, Image} from 'react-native';
import HomeScreen from './HomeScreen';
import UserDetailScreen from './UserDetailScreen';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  const headerIcon = () => (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <View>
        <Image
          source={require('../components/assets/hamburger-icon.png')}
          style={{width: 20, height: 20, resizeMode: 'contain'}}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'green'},
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitle: '',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerLeft: headerIcon}}
      />
      <Stack.Screen
        name="UserDetails"
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
  );
};

export default AppStack;
