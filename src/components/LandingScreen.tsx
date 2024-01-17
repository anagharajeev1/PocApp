import React from 'react';
import {View, Button, ImageBackground, StyleSheet} from 'react-native';

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
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.loginStyle}>
          <Button title="Login" onPress={goToLogin} color="mediumturquoise" />
        </View>
        <View style={styles.signupStyle}>
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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 40,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  loginStyle: {marginTop: -16, width: '60%', alignSelf: 'center'},
  signupStyle: {marginTop: 30, width: '60%', alignSelf: 'center'},
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
});

export default LandingScreen;
