interface User {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
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
      const {email, newUsername} = action.payload;

      const updatedAllUsers = state.allUsers.map((user: User) =>
        user.email === email ? {...user, username: newUsername} : user,
      );

      return {
        ...state,
        allUsers: updatedAllUsers,
      };
    default:
      return state;
  }
};

export default userReducer;
