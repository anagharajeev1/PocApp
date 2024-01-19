import React from 'react';
import {View, Button, ImageBackground, StyleSheet} from 'react-native';
import {landingStyles} from '../styling/landingStyles';

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
      source={require('../../images/bg5.jpg')}
      style={landingStyles.backgroundImage}>
      <View style={landingStyles.container}>
        <View style={landingStyles.loginStyle}>
          <Button title="Login" onPress={goToLogin} color="mediumturquoise" />
        </View>
        <View style={landingStyles.signupStyle}>
          <Button
            title="Signup"
            onPress={goToRegistration}
            color="mediumturquoise"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default LandingScreen;
