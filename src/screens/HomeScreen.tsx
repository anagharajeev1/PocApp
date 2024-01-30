import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
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

  const handleUserTap = (user: User) => {
    navigation.navigate('UserDetails', {user});
  };

  // const handleLogout = () => {
  //   dispatch(setLoggedInUser(null));
  //   navigation.navigate('Landing');
  // };

  return (
    <ImageBackground
      source={require('../../images/bg6.jpg')}
      style={homeStyles.backgroundImage}>
      <View style={homeStyles.container}>
        {loggedInUser && (
          <View>
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
    </ImageBackground>
  );
};

export default HomeScreen;
