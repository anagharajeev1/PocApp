import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedInUser, setAllUsers } from '../../store/actions/userActions';

interface User {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  id: number;
}

const HomeScreen: React.FC<any> = ({ route }) => {
  const dispatch = useDispatch();
  const { loggedInUser, allUsers } = useSelector((state: any) => state.user);
  const navigation = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  let drawerRef: DrawerLayoutAndroid | null = null;

  useEffect(() => {
    // No need to fetch user details from AsyncStorage, as it will be handled by redux-persist
    // Instead, rely on the persisted Redux store

    // Fetching allUsers from AsyncStorage is also unnecessary due to redux-persist

  }, [dispatch, route]);

  const handleUserTap = (user: User) => {
    navigation.navigate('UserDetail', { user });
  };

  const handleLogout = () => {
    // Remove the user details directly from the Redux store
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
      style={styles.backgroundImage}>
      <DrawerLayoutAndroid
        drawerWidth={200}
        drawerPosition={'left'}
        ref={ref => (drawerRef = ref)}
        renderNavigationView={() => (
          <View style={styles.drawerContent}>
            <Text style={styles.menuHead}>Account</Text>
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.menuItem}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
        drawerOpen={isDrawerOpen}
        onDrawerClose={() => toggleDrawer(false)}
        onDrawerOpen={() => toggleDrawer(true)}>
        <View style={styles.container}>
          {loggedInUser && (
            <View>
              <TouchableOpacity onPress={openDrawer}>
                <Text style={styles.hamburgerText}>☰</Text>
              </TouchableOpacity>
              <Text style={styles.welcomeText}>
                Welcome, {loggedInUser.firstName || loggedInUser.username}!
              </Text>
            </View>
          )}

          {allUsers.length > 0 && (
            <View>
              <Text style={styles.usersListHeader}>All Registered Users:</Text>
              <FlatList
                data={allUsers}
                keyExtractor={(item: User, index) => index.toString()}
                renderItem={({ item }: { item: User }) => (
                  <TouchableOpacity onPress={() => handleUserTap(item)}>
                    <Text
                      style={styles.linkText}
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

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  backgroundImage: {
    flex: 10,
    resizeMode: 'cover',
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'blue',
    textAlign: 'center',
  },
  hamburgerText: {
    fontSize: 30,
    color: 'grey',
    margin: 16,
  },
  usersListHeader: {
    fontSize: 18,
    marginTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'green',
  },
  userListItem: {
    fontSize: 16,
    marginBottom: 20,
    marginTop: 25,
    color: 'black',
  },
  drawerContent: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  menuHead: {
    fontSize: 25,
    color: 'black',
    marginTop: 10,
  },
  menuItem: {
    fontSize: 15,
    color: 'black',
    marginTop: 30,
  },
  linkText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 4,
    marginTop: 12,
  },
});

export default HomeScreen;
