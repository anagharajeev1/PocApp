import React from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Styles from '../components/Styles';
import {setLoggedInUser} from '../../store/actions/userActions';
import {useNavigation} from '@react-navigation/native';

const DrawerMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.loggedInUser);
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      dispatch(setLoggedInUser(null));
    } catch (error) {
      Alert.alert('Error', 'Failed to logout');
    }
  };

  return (
    <View style={Styles.drawerContainer}>
      <View style={Styles.drawerHeader}>
        <Image
          source={require('../components/assets/user.png')}
          style={Styles.drawerIcon}
        />
        <Text style={Styles.drawerHeaderText}>
          {user?.firstName + ' ' + user?.lastName}
        </Text>
      </View>
      <TouchableOpacity
        style={Styles.drawerItem}
        onPress={handleLogout}
        activeOpacity={0.7}>
        <Image
          source={require('../components/assets/logout-icon.png')}
          style={Styles.drawerIcon}
        />
        <Text style={Styles.drawerItemText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerMenu;
