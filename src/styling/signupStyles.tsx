import {StyleSheet} from 'react-native';
export const signupStyles = StyleSheet.create({
  container: {
    padding: 16,
  },
  buttonStyle: {marginTop: 19, width: 150, marginLeft: 90},
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
