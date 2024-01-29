import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigation from '../screens/HomeNavigation';
import DrawerMenu from './DrawerMenu';

const DrawerNavigators = () => {
  const Drawer = createDrawerNavigator();
  const drawerContent = () => <DrawerMenu />;
  return (
    <Drawer.Navigator
      drawerContent={drawerContent}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeNavigation" component={HomeNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigators;