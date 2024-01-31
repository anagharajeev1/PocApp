import React, {useState} from 'react';
import {ScrollView, ImageBackground, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setAllUsers} from '../../store/actions/userActions';
import {signupStyles} from '../styling/signupStyles';
import AuthInput from '../components/SignUp/AuthInput';
import AuthButton from '../components/SignUp/AuthButton';

const SignupScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const allUsers = useSelector(state => state.user.allUsers);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateFields = () => {
    let isValid = true;
    setFirstNameError('');
    setLastNameError('');
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!firstName) {
      setFirstNameError('First Name is required');
      isValid = false;
    } else if (!isValidName(firstName)) {
      setFirstNameError('Invalid First Name');
      isValid = false;
    }

    if (!lastName) {
      setLastNameError('Last Name is required');
      isValid = false;
    } else if (!isValidName(lastName)) {
      setLastNameError('Invalid Last Name');
      isValid = false;
    }

    if (!username) {
      setUsernameError('Username is required');
      isValid = false;
    } else if (!isValidUsername(username)) {
      setUsernameError('Invalid Username');
      isValid = false;
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!isValidPassword(password)) {
      setPasswordError('Password must be at least 6 characters long');
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    return isValid;
  };

  const isValidName = name => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
  };

  const isValidUsername = username => {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(username);
  };

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = password => {
    return password.length >= 6;
  };

  const handleSignup = () => {
    if (validateFields()) {
      const userDetails = {
        firstName,
        lastName,
        username,
        email,
        password,
      };

      dispatch(setAllUsers([...allUsers, userDetails]));

      Alert.alert(
        'Signup Successful',
        'User details saved successfully',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Landing'),
          },
        ],
        {cancelable: false},
      );
    }
  };

  return (
    <ImageBackground
      source={require('../../src/components/assets/bg6.jpg')}
      style={signupStyles.backgroundImage}>
      <ScrollView contentContainerStyle={signupStyles.container}>
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

        <AuthInput
          label="Password"
          value={password}
          onChangeText={text => {
            setPassword(text);
            setPasswordError('');
          }}
          accessibilityLabel="Password"
          secureTextEntry
          error={passwordError}
        />

        <AuthInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={text => {
            setConfirmPassword(text);
            setConfirmPasswordError('');
          }}
          accessibilityLabel="Confirm Password"
          secureTextEntry
          error={confirmPasswordError}
        />

        <AuthButton title="Signup" onPress={handleSignup} />
      </ScrollView>
    </ImageBackground>
  );
};

export default SignupScreen;
