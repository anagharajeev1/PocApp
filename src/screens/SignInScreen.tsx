import React, {useState} from 'react';
import {View, ScrollView, ImageBackground, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setLoggedInUser} from '../../store/actions/userActions';
import {signinStyles} from '../styling/sigininStyles';
import AuthTextInput from '../components/SignIn/AuthTextInput';
import AuthButton from '../components/SignIn/AuthButton';

const SignInScreen = ({}) => {
  const dispatch = useDispatch();
  const allUsers = useSelector(state => state.user.allUsers);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = password => {
    return password.length >= 6;
  };

  const handleSignIn = () => {
    setEmailError('');
    setPasswordError('');

    if (!email || !isValidEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }

    if (!password || !isValidPassword(password)) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }

    const matchedUser = allUsers.find(
      user => user.email === email && user.password === password,
    );

    if (matchedUser) {
      dispatch(setLoggedInUser(matchedUser));
    } else {
      Alert.alert('Sign In Failed', 'Invalid email or password');
    }
  };

  return (
    <ImageBackground
      source={require('../../src/components/assets/bg6.jpg')}
      style={signinStyles.backgroundImage}>
      <ScrollView contentContainerStyle={signinStyles.container}>
        <View style={signinStyles.container}>
          <AuthTextInput
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

          <AuthTextInput
            label="Password"
            value={password}
            onChangeText={text => {
              setPassword(text);
              setPasswordError('');
            }}
            secureTextEntry
            accessibilityLabel="Password"
            error={passwordError}
          />

          <View style={signinStyles.signinStyle}>
            <AuthButton title="Sign In" onPress={handleSignIn} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignInScreen;
