import React from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setLoggedInUser} from '../../store/actions/userActions';
import {drawerStyles} from '../styling/drawerStyles';

const DrawerMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.loggedInUser);

  const handleLogout = async () => {
    try {
      dispatch(setLoggedInUser(null));
    } catch (error) {
      Alert.alert('Error', 'Failed to logout');
    }
  };

  return (
    <View style={drawerStyles.drawerContainer}>
      <View style={drawerStyles.drawerHeader}>
        <Image
          source={require('../components/assets/user.png')}
          style={drawerStyles.drawerIcon}
        />
        <Text style={drawerStyles.drawerHeaderText}>
          {user?.firstName + ' ' + user?.lastName}
        </Text>
      </View>
      <TouchableOpacity
        style={drawerStyles.drawerItem}
        onPress={handleLogout}
        activeOpacity={0.7}>
        <Image
          source={require('../components/assets/logout-icon.png')}
          style={drawerStyles.drawerIcon}
        />
        <Text style={drawerStyles.drawerItemText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerMenu;
