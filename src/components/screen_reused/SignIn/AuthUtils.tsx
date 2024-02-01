import {Alert} from 'react-native';
import {Dispatch} from 'redux';
import {setLoggedInUser} from '../../../../store/actions/userActions';

export interface User {
  email: string;
  password: string;
}

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

export const handleSignIn = (
  dispatch: Dispatch,
  allUsers: User[],
  email: string,
  password: string,
  setEmailError: (error: string) => void,
  setPasswordError: (error: string) => void,
): void => {
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
