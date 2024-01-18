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
      style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => {
              setEmail(text);
              setEmailError('');
            }}
            keyboardType="email-address"
            accessibilityLabel="Email"
          />
          <Text style={styles.errorText}>{emailError}</Text>

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={text => {
              setPassword(text);
              setPasswordError('');
            }}
            secureTextEntry
            accessibilityLabel="Password"
          />
          <Text style={styles.errorText}>{passwordError}</Text>

          <View style={styles.signinStyle}>
            <Button title="Sign In" onPress={handleSignIn} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  backgroundImage: {
    flex: 40,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  signinStyle: {marginTop: 15, width: '60%', alignSelf: 'center'},
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    marginTop: -8,
  },
});

export default SignInScreen;
