import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsername } from '../../store/actions/userActions';

const UserDetailScreen: React.FC<any> = ({ route }) => {
  const { user } = route.params;
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state: any) => state.user);
  const [updatedUsername, setUpdatedUsername] = useState(user.username);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleUpdateUsername = () => {
    const updatedUserDetails = { ...user, username: updatedUsername };
    const updatedAllUsers = allUsers.map(u =>
      u.email === user.email ? updatedUserDetails : u,
    );

    // Dispatch the action to update the Redux store
    dispatch(updateUsername(user.email, updatedUsername));

    // Update the username in the local state
    setUpdatedUsername(updatedUserDetails.username);

    // Update the user details in the route params
    route.params.user = updatedUserDetails;

    setIsEditMode(false);
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
          <View style={{ marginTop: 45, width: '60%', alignSelf: 'center' }}>
            <Button title="Save Username" onPress={handleUpdateUsername} />
          </View>
        </View>
      )}

      {!isEditMode && (
        <View style={{ marginTop: 45, width: '60%', alignSelf: 'center' }}>
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
