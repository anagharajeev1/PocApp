import {StyleSheet} from 'react-native';
export const landingStyles = StyleSheet.create({
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
