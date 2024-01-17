import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {updateUsername} from '../../store/actions/userActions';

interface User {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

const UserDetailScreen: React.FC<any> = ({route}) => {
  const {user} = route.params;
  const dispatch = useDispatch();
  const [updatedUsername, setUpdatedUsername] = useState(user.username);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleUpdateUsername = async () => {
    try {
      const updatedUserDetails = {...user, username: updatedUsername};
      const allUsersJSON = await AsyncStorage.getItem('allUserDetails');
      if (allUsersJSON) {
        const allUsers = JSON.parse(allUsersJSON);
        const updatedAllUsers = allUsers.map(u =>
          u.email === user.email ? updatedUserDetails : u,
        );
        await AsyncStorage.setItem(
          'allUserDetails',
          JSON.stringify(updatedAllUsers),
        );
      }

      await AsyncStorage.setItem(
        'userDetails',
        JSON.stringify(updatedUserDetails),
      );

      dispatch(updateUsername(user.email, updatedUsername));

      setUpdatedUsername(updatedUserDetails.username);
      route.params.user = updatedUserDetails;

      setIsEditMode(false);
    } catch (error) {
      console.error('Error updating username:', error);
    }
  };

  return (
    <View>
      <Text style={styles.userDetails}>
        Name: {user.firstName} {user.lastName}
      </Text>
      <Text style={styles.userDetails}>Email: {user.email}</Text>
      <Text style={styles.userDetails}>Username: {updatedUsername}</Text>

      {isEditMode && (
        <View>
          <Text style={styles.updateLabel}>Update Username:</Text>
          <TextInput
            style={styles.input}
            value={updatedUsername}
            onChangeText={text => setUpdatedUsername(text)}
          />
          <View style={{marginTop: 45, width: '60%', alignSelf: 'center'}}>
            <Button title="Save Username" onPress={handleUpdateUsername} />
          </View>
        </View>
      )}

      {!isEditMode && (
        <View style={{marginTop: 45, width: '60%', alignSelf: 'center'}}>
          <Button title="Edit Username" onPress={() => setIsEditMode(true)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    position: 'absolute',
    marginTop: 9,
    left: 0,
    zIndex: 1,
  },
  userDetails: {
    marginTop: 20,
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  updateLabel: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});

export default UserDetailScreen;
