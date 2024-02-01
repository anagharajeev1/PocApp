import React, {useState} from 'react';
import {View, ScrollView, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signinStyles} from '../styling/sigininStyles';
import AuthTextInput from '../components/screen_reused/SignIn/AuthTextInput';
import AuthButton from '../components/screen_reused/SignIn/AuthButton';
import {handleSignIn} from '../components/screen_reused/SignIn/AuthUtils';
import {User} from '../components/reused/Interface';

const SignInScreen: React.FC = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(
    (state: {user: {allUsers: User[]}}) => state.user.allUsers,
  );

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const onEmailChange = (text: string): void => {
    setEmail(text);
    setEmailError('');
  };

  const onPasswordChange = (text: string): void => {
    setPassword(text);
    setPasswordError('');
  };

  const handleSignInPress = (): void => {
    handleSignIn(
      dispatch,
      allUsers,
      email,
      password,
      setEmailError,
      setPasswordError,
    );
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
            onChangeText={onEmailChange}
            keyboardType="email-address"
            accessibilityLabel="Email"
            error={emailError}
          />

          <AuthTextInput
            label="Password"
            value={password}
            onChangeText={onPasswordChange}
            secureTextEntry
            accessibilityLabel="Password"
            error={passwordError}
          />

          <View style={signinStyles.signinStyle}>
            <AuthButton title="Sign In" onPress={handleSignInPress} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignInScreen;
