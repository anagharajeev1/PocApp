import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginLeft: 16,
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
  fullUserDetailsContainer: {
    backgroundColor: '#362659',
    borderRadius: 10,
    padding: 16,
    paddingVertical: 32,
    flex: 1,
  },
  userTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 20,
    borderBottomColor: '#6E4C88',
    borderBottomWidth: 1,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  detailValue: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'left',
    width: 220,
  },
  updateButton: {
    alignItems: 'center',
    backgroundColor: '#5D5FDE',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  modalCancelButton: {
    backgroundColor: '#CCCCCC',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  modalUpdateButton: {
    backgroundColor: 'rgb(93, 95, 222)',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalCancelButtonText: {
    color: '#555555', // Adjust color for better visibility
    fontSize: 16,
    fontWeight: '600',
  },
  modalUpdateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'rgb(93, 95, 222)',
  },
  modalTextInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgb(93, 95, 222)',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  form: {
    alignItems: 'center',
    backgroundColor: 'rgb(58, 58, 60)',
    borderRadius: 8,
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 16,
  },
  label: {
    color: 'rgba(235, 235, 245, 0.6)',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    width: 80,
  },
  root: {
    backgroundColor: '#000000',
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  subtitle: {
    color: 'rgba(235, 235, 245, 0.6)',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    marginBottom: 16,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
  },
  textInput: {
    color: '#FFFFFF',
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
    marginBottom: 8,
  },
  errorText: {
    color: 'red',
  },
  hamburgerIconContainer: {
    padding: 0,
    marginLeft: 0,
  },
  hamburgerIcon: {
    width: 35,
    height: 35,
    marginTop: 40,
  },
  boxContainer: {
    backgroundColor: 'rgba(235, 235, 245, 0.8)',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  boxHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: 'black',
  },
  listContainer: {
    maxHeight: 500,
    marginTop: 10,
  },
  userRow: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(93, 95, 222)',
  },
  userEmail: {
    fontSize: 16,
    color: 'rgba(93, 95, 222, 0.7)',
  },
  container: {
    backgroundColor: '#000000',
    padding: 16,
    flex: 1,
    justifyContent: 'center',
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(93, 95, 222, 0.5)',
  },
  drawerHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'rgb(93, 95, 222)',
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
    tintColor: 'rgb(93, 95, 222)',
  },
  drawerItemText: {
    fontSize: 18,
    color: 'black',
  },
});