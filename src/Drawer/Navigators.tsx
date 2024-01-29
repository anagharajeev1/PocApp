// import React from 'react';
// import DrawerNavigators from './DrawerNavigators';
// import StackNavigators from './StackNavigators';
// import {setLoggedInUser} from '../../store/actions/userActions';
// import {useSelector} from 'react-redux';

// const Navigators = () => {
//   const isLoggedIn = setLoggedInUser(
//     useSelector((state: any) => state.setLoggedInUser),
//   );
//   console.log(isLoggedIn, '123');

//   return <>{isLoggedIn.payload ? <DrawerNavigators /> : <StackNavigators />}</>;
// };

// export default Navigators;


import React from 'react';
import DrawerNavigators from './DrawerNavigators';
import StackNavigators from './StackNavigators';
import { useSelector } from 'react-redux';

const Navigators = () => {
  const loggedInUser = useSelector((state: any) => state.user.loggedInUser);

  return <>{loggedInUser ? <DrawerNavigators /> : <StackNavigators />}</>;
};

export default Navigators;
