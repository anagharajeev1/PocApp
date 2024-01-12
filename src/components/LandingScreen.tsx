import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  StyleSheet,
} from 'react-native';

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

  const Spacer = ({height}) => <View style={{height}} />;

  return (
    <ImageBackground
      source={require('../../images/bg5.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={{ marginTop: -16,width: '60%', alignSelf: 'center'}}>
          <Button title="Login" onPress={goToLogin} color="mediumturquoise" />
        </View>
        <Spacer height={20} />
        <View style={{marginTop: 5, width: '60%', alignSelf: 'center'}}>
          <Button
            title="Signup"
            titleStyle={{color: 'black'}}
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
