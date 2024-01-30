import {StyleSheet} from 'react-native';

export const drawerStyles = StyleSheet.create({
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
  },

  drawerHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'orange',
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(93, 95, 222, 0.2)',
  },
  drawerIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
    tintColor: 'grey',
  },
  drawerItemText: {
    fontSize: 18,
    color: 'black',
  },
});
