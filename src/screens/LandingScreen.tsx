import React from 'react';
import {View, ImageBackground} from 'react-native';
import {landingStyles} from '../styling/landingStyles';
import LoginButton from '../components/screen_reused/Landing/LoginButton';
import SignupButton from '../components/screen_reused/Landing/SignupButton';

interface LandingScreenProps {
  navigation: any;
}

const LandingScreen: React.FC<LandingScreenProps> = ({navigation}) => {
  const goToLogin = () => {
    navigation.navigate('SignIn');
  };

  const goToRegistration = () => {
    navigation.navigate('Signup');
  };

  return (
    <ImageBackground
      source={require('../components/assets/bg5.jpg')}
      style={landingStyles.backgroundImage}>
      <View style={landingStyles.container}>
        <View style={landingStyles.loginStyle}>
          <LoginButton onPress={goToLogin} />
        </View>
        <View style={landingStyles.signupStyle}>
          <SignupButton onPress={goToRegistration} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default LandingScreen;
