import {StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  backgroundImage: {
    flex: 10,
    resizeMode: 'cover',
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'blue',
    textAlign: 'center',
  },
  hamburgerText: {
    fontSize: 30,
    color: 'grey',
    margin: 16,
  },
  usersListHeader: {
    fontSize: 18,
    marginTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'green',
  },
  userListItem: {
    fontSize: 16,
    marginBottom: 20,
    marginTop: 25,
    color: 'black',
  },
  drawerContent: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  menuHead: {
    fontSize: 25,
    color: 'black',
    marginTop: 10,
  },
  menuItem: {
    fontSize: 15,
    color: 'black',
    marginTop: 30,
  },
  linkText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 4,
    marginTop: 12,
  },

  userContainer: {
    borderColor: 'black', // Adjust the color as needed
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8, // Optional: add border radius for rounded corners
  },
});
