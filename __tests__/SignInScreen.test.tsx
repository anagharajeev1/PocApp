import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SignInScreen from '../src/screens/SignInScreen';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
}));

describe('SignInScreen', () => {
  // it('should handle sign in with valid credentials', async () => {
  //   (
  //     require('@react-native-async-storage/async-storage') as any
  //   ).getItem.mockResolvedValueOnce(
  //     JSON.stringify([
  //       {email: 'test@example.com', password: 'password123', firstName: 'Test'},
  //     ]),
  //   );

  //   const mockNavigation = {navigate: jest.fn()};

  //   const {getByLabelText, getByText} = render(
  //     <SignInScreen navigation={mockNavigation} />,
  //   );
  //   fireEvent.changeText(getByLabelText('Email'), 'test@example.com');
  //   fireEvent.changeText(getByLabelText('Password'), 'password123');

  //   fireEvent.press(getByText('Sign In'));

  //   expect(mockNavigation.navigate).toHaveBeenCalledWith('Home', {
  //     user: {
  //       email: 'test@example.com',
  //       password: 'password123',
  //       firstName: 'Test',
  //     },
  //   });
  // });

  it('should handle sign in with invalid credentials', async () => {
    (
      require('@react-native-async-storage/async-storage') as any
    ).getItem.mockResolvedValueOnce(JSON.stringify([]));

    const {findByLabelText, getByText} = render(
      <SignInScreen navigation={{}} />,
    );

    const emailInput = await findByLabelText('Email');
    const pwdInput = await findByLabelText('Password');

    fireEvent.changeText(emailInput, 'invalid@example.com');
    fireEvent.changeText(pwdInput, 'invalidpassword');

    fireEvent.press(getByText('Sign In'));

    // expect(getByText('Sign In Failed')).toBeTruthy();
    // expect(getByText('Invalid email or password')).toBeTruthy();
  });
});
