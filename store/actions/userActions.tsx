export const setLoggedInUser = (user: any) => ({
  type: 'SET_LOGGED_IN_USER',
  payload: user,
});

export const setAllUsers = (users: any) => ({
  type: 'SET_ALL_USERS',
  payload: users,
});

export const updateUsername = (email: string, newUsername: string) => ({
  type: 'UPDATE_USERNAME',
  payload: {email, newUsername},
});
