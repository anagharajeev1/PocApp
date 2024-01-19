import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setLoggedInUser} from '../../store/actions/userActions';
import { signinStyles } from '../styling/sigininStyles';

const SignInScreen = ({navigation}) => {
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
      navigation.navigate('Home', {user: matchedUser});
    } else {
      Alert.alert('Sign In Failed', 'Invalid email or password');
    }
  };

  return (
    <ImageBackground
      source={require('../../images/bg6.jpg')}
      style={signinStyles.backgroundImage}>
      <ScrollView contentContainerStyle={signinStyles.container}>
        <View style={signinStyles.container}>
          <Text style={signinStyles.label}>Email</Text>
          <TextInput
            style={signinStyles.input}
            value={email}
            onChangeText={text => {
              setEmail(text);
              setEmailError('');
            }}
            keyboardType="email-address"
            accessibilityLabel="Email"
          />
          <Text style={signinStyles.errorText}>{emailError}</Text>

          <Text style={signinStyles.label}>Password</Text>
          <TextInput
            style={signinStyles.input}
            value={password}
            onChangeText={text => {
              setPassword(text);
              setPasswordError('');
            }}
            secureTextEntry
            accessibilityLabel="Password"
          />
          <Text style={signinStyles.errorText}>{passwordError}</Text>

          <View style={signinStyles.signinStyle}>
            <Button title="Sign In" onPress={handleSignIn} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignInScreen;
