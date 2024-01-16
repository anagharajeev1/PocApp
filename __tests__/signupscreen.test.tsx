import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import SignupScreen from '../src/components/SignupScreen';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe('SignupScreen', () => {
  // it('should handle signup with valid details', async () => {
  //   (
  //     require('@react-native-async-storage/async-storage') as any
  //   ).getItem.mockResolvedValueOnce(JSON.stringify([]));

  //   const mockNavigation = {navigate: jest.fn()};

  //   const {getByLabelText, getByText} = render(
  //     <SignupScreen navigation={mockNavigation} />,
  //   );

  //   fireEvent.changeText(getByLabelText('First Name'), 'Lily');
  //   fireEvent.changeText(getByLabelText('Last Name'), 'James');
  //   fireEvent.changeText(getByLabelText('Username'), 'lily');
  //   fireEvent.changeText(getByLabelText('Email'), 'lily@gmail.com');
  //   fireEvent.changeText(getByLabelText('Password'), 'anagha');

  //   fireEvent.press(getByText('Signup'));

  //   await waitFor(() =>
  //     expect(
  //       require('@react-native-async-storage/async-storage').setItem,
  //     ).toHaveBeenCalled(),
  //   );

  //   expect(mockNavigation.navigate).toHaveBeenCalledWith('Landing');
  // });

  it('should handle signup with invalid details', async () => {
    (
      require('@react-native-async-storage/async-storage') as any
    ).getItem.mockResolvedValueOnce(JSON.stringify([]));

    const {getByText} = render(<SignupScreen navigation={{}} />);

    fireEvent.press(getByText('Signup'));

    expect(getByText('First Name is required')).toBeTruthy();
    expect(getByText('Last Name is required')).toBeTruthy();
    expect(getByText('Username is required')).toBeTruthy();
    expect(getByText('Email is required')).toBeTruthy();
    expect(getByText('Password is required')).toBeTruthy();
  });
});
