import {StyleSheet} from 'react-native';
export const signinStyles = StyleSheet.create({
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
