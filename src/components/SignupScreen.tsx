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
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({navigation}) => {
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

  const handleSignup = async () => {
    if (validateFields()) {
      const userDetails = {
        firstName,
        lastName,
        username,
        email,
        password,
      };

      try {
        const allUsersJSON = await AsyncStorage.getItem('allUserDetails');
        const allUsers = allUsersJSON ? JSON.parse(allUsersJSON) : [];

        if (allUsers.some(user => user.email === email)) {
          setEmailError('Email is already registered');
          return;
        }

        if (allUsers.some(user => user.username === username)) {
          setUsernameError('Username is already taken');
          return;
        }

        const updatedUsers = [...allUsers, userDetails];

        await AsyncStorage.setItem(
          'allUserDetails',
          JSON.stringify(updatedUsers),
        );
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
      } catch (error) {
        console.error('Error saving user details', error);
      }
    }
  };

  return (
    <ImageBackground
      source={require('../../images/bg6.jpg')}
      style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={text => {
              setFirstName(text);
              setFirstNameError('');
            }}
            accessibilityLabel="First Name"
          />
          <Text style={styles.errorText}>{firstNameError}</Text>

          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={text => {
              setLastName(text);
              setLastNameError('');
            }}
            accessibilityLabel="Last Name"
          />
          <Text style={styles.errorText}>{lastNameError}</Text>

          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={text => {
              setUsername(text);
              setUsernameError('');
            }}
            accessibilityLabel="Username"
          />
          <Text style={styles.errorText}>{usernameError}</Text>

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
            accessibilityLabel="Password"
            secureTextEntry
          />
          <Text style={styles.errorText}>{passwordError}</Text>

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={text => {
              setConfirmPassword(text);
              setConfirmPasswordError('');
            }}
            secureTextEntry
          />
          <Text style={styles.errorText}>{confirmPasswordError}</Text>

          <View style={{marginTop: 19, width: 150, marginLeft: 90}}>
            <Button title="Signup" onPress={handleSignup} />
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
  headerText: {
    color: 'blue',
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SignupScreen;
