interface User {
  username: string;
  email: string;
  password: string;
}

interface UserState {
  loggedInUser: User | null;
  allUsers: User[];
}

const initialState: UserState = {
  loggedInUser: null,
  allUsers: [],
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_LOGGED_IN_USER':
      return {...state, loggedInUser: action.payload};
    case 'SET_ALL_USERS':
      return {...state, allUsers: action.payload};
    case 'UPDATE_USERNAME':
      console.log('Payload:', action.payload);
      const {email, newUsername} = action.payload;

      const updatedAllUsers = state.allUsers.map((user: User) =>
        user.email === email ? {...user, username: newUsername} : user,
      );

      return {
        ...state,
        loggedInUser: state.loggedInUser
          ? {...state.loggedInUser, username: newUsername}
          : state.loggedInUser,
        allUsers: updatedAllUsers,
      };
    default:
      return state;
  }
};

export default userReducer;
