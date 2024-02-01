import React from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {homeStyles} from '../styling/homeStyles';
import { User } from '../components/reused/Interface';

const HomeScreen: React.FC<any> = ({route}) => {
  const {loggedInUser, allUsers} = useSelector((state: any) => state.user);
  const navigation = useNavigation();

  const handleUserTap = (user: User) => {
    navigation.navigate('UserDetails', {user});
  };

  return (
    <ImageBackground
      source={require('../../src/components/assets/bg6.jpg')}
      style={homeStyles.backgroundImage}
      resizeMode="cover">
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
                  <View style={homeStyles.userContainer}>
                    <Text style={homeStyles.linkText}>
                      {item.firstName} {item.lastName} - {item.username}
                      {'\n'}
                      {item.email}
                    </Text>
                  </View>
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
