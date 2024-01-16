import userReducer from '../store/reducers/userReducer';

test('SET_LOGGED_IN_USER action updates the loggedInUser in state', () => {
  const initialState = {
    loggedInUser: null,
    allUsers: [],
  };

  const user = {
    username: 'lily',
    email: 'lily@gmail.com',
    password: 'anagha',
  };

  const action = {
    type: 'SET_LOGGED_IN_USER',
    payload: user,
  };

  const newState = userReducer(initialState, action);

  expect(newState.loggedInUser).toEqual(user);
});
