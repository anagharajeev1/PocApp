import React from 'react';
import {View, Text} from 'react-native';
import AuthInput from './AuthInput';

interface UserDetailsInputProps {
  firstName: string;
  lastName: string;
  setUsername: (text: string) => void;
  setEmail: (text: string) => void;
  setFirstNameError: (error: string) => void;
  setLastNameError: (error: string) => void;
  setUsernameError: (error: string) => void;
  setEmailError: (error: string) => void;
  username: string;
  email: string;
  firstNameError: string;
  lastNameError: string;
  usernameError: string;
  emailError: string;
}

const UserDetailsInput: React.FC<UserDetailsInputProps> = ({
  firstName,
  lastName,
  setUsername,
  setEmail,
  setFirstNameError,
  setLastNameError,
  setUsernameError,
  setEmailError,
  username,
  email,
  firstNameError,
  lastNameError,
  usernameError,
  emailError,
}) => {
  return (
    <View>
      <Text>First Name</Text>
      <AuthInput
        label="First Name"
        value={firstName}
        onChangeText={text => {
          setFirstName(text);
          setFirstNameError('');
        }}
        accessibilityLabel="First Name"
        error={firstNameError}
      />

      <Text>Last Name</Text>
      <AuthInput
        label="Last Name"
        value={lastName}
        onChangeText={text => {
          setLastName(text);
          setLastNameError('');
        }}
        accessibilityLabel="Last Name"
        error={lastNameError}
      />

      <Text>Username</Text>
      <AuthInput
        label="Username"
        value={username}
        onChangeText={text => {
          setUsername(text);
          setUsernameError('');
        }}
        accessibilityLabel="Username"
        error={usernameError}
      />

      <Text>Email</Text>
      <AuthInput
        label="Email"
        value={email}
        onChangeText={text => {
          setEmail(text);
          setEmailError('');
        }}
        keyboardType="email-address"
        accessibilityLabel="Email"
        error={emailError}
      />
    </View>
  );
};

export default UserDetailsInput;
