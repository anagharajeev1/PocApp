import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  DrawerLayoutAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setLoggedInUser, setAllUsers} from '../../store/actions/userActions';
import {homeStyles} from '../styling/homeStyles';

interface User {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  id: number;
}

const HomeScreen: React.FC<any> = ({route}) => {
  const dispatch = useDispatch();
  const {loggedInUser, allUsers} = useSelector((state: any) => state.user);
  const navigation = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  let drawerRef: DrawerLayoutAndroid | null = null;

  useEffect(() => {
  }, [dispatch, route]);

  const handleUserTap = (user: User) => {
    navigation.navigate('UserDetail', {user});
  };

  const handleLogout = () => {
    dispatch(setLoggedInUser(null));
    navigation.navigate('Landing');
    drawerRef?.current?.closeDrawer();
  };

  const toggleDrawer = (isOpen: boolean) => {
    setIsDrawerOpen(isOpen);
  };

  const openDrawer = () => {
    drawerRef?.openDrawer();
  };

  return (
    <ImageBackground
      source={require('../../images/bg6.jpg')}
      style={homeStyles.backgroundImage}>
      <DrawerLayoutAndroid
        drawerWidth={200}
        drawerPosition={'left'}
        ref={ref => (drawerRef = ref)}
        renderNavigationView={() => (
          <View style={homeStyles.drawerContent}>
            <Text style={homeStyles.menuHead}>Account</Text>
            <TouchableOpacity onPress={handleLogout}>
              <Text style={homeStyles.menuItem}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
        drawerOpen={isDrawerOpen}
        onDrawerClose={() => toggleDrawer(false)}
        onDrawerOpen={() => toggleDrawer(true)}>
        <View style={homeStyles.container}>
          {loggedInUser && (
            <View>
              <TouchableOpacity onPress={openDrawer}>
                <Text style={homeStyles.hamburgerText}>☰</Text>
              </TouchableOpacity>
              <Text style={homeStyles.welcomeText}>
                Welcome, {loggedInUser.firstName || loggedInUser.username}!
              </Text>
            </View>
          )}

          {allUsers.length > 0 && (
            <View>
              <Text style={homeStyles.usersListHeader}>
                All Registered Users:
              </Text>
              <FlatList
                data={allUsers}
                keyExtractor={(item: User, index) => index.toString()}
                renderItem={({item}: {item: User}) => (
                  <TouchableOpacity onPress={() => handleUserTap(item)}>
                    <Text
                      style={homeStyles.linkText}
                      onPress={() => handleUserTap(item)}>
                      {item.firstName} {item.lastName} - {item.username}
                      {'\n'}
                      {item.email}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>
      </DrawerLayoutAndroid>
    </ImageBackground>
  );
};

export default HomeScreen;
