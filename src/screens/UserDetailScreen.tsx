import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsername } from '../../store/actions/userActions';
import { userStyles } from '../styling/userStyles';

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

    dispatch(updateUsername(user.email, updatedUsername));

    setUpdatedUsername(updatedUserDetails.username);
    
    route.params.user = updatedUserDetails;

    setIsEditMode(false);
  };

  return (
    <View>
      <Text style={userStyles.userDetails}>
        Name: {user.firstName} {user.lastName}
      </Text>
      <Text style={userStyles.userDetails}>Email: {user.email}</Text>
      <Text style={userStyles.userDetails}>Username: {updatedUsername}</Text>

      {isEditMode && (
        <View>
          <Text style={userStyles.updateLabel}>Update Username:</Text>
          <TextInput
            style={userStyles.input}
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

export default UserDetailScreen;
