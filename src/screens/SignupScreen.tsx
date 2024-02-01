import React, {useState} from 'react';
import {ScrollView, ImageBackground, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setAllUsers} from '../../store/actions/userActions';
import {signupStyles} from '../styling/signupStyles';
import AuthInput from '../components/assets/SignUp/AuthInput';
import AuthButton from '../components/assets/SignUp/AuthButton';
import {validateFields} from '../components/screen_reused/Signup/validationUtils';

const SignupScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state: any) => state.user.allUsers);

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

  const handleSignup = () => {
    const {isValid, errors} = validateFields(
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
    );

    if (isValid) {
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
    } else {
      setFirstNameError(errors.firstName);
      setLastNameError(errors.lastName);
      setUsernameError(errors.username);
      setEmailError(errors.email);
      setPasswordError(errors.password);
      setConfirmPasswordError(errors.confirmPassword);
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
