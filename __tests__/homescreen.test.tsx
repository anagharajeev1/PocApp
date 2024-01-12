import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {useDispatch, useSelector} from 'react-redux';
import HomeScreen from '../src/components/HomeScreen';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock('@react-avigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('HomeScreen', () => {
  beforeEach(() => {
    (useDispatch as jest.Mock).mockClear();
    (useSelector as jest.Mock).mockClear();
    (
      require('@react-native-async-storage/async-storage').getItem as jest.Mock
    ).mockClear();
    (
      require('@react-native-async-storage/async-storage').setItem as jest.Mock
    ).mockClear();
    (
      require('@react-native-async-storage/async-storage')
        .removeItem as jest.Mock
    ).mockClear();
  });

  it('should render HomeScreen with user details and all registered users', async () => {
    (useSelector as jest.Mock).mockReturnValueOnce({
      loggedInUser: {username: 'testUser', firstName: 'Test', lastName: 'User'},
      allUsers: [
        {
          id: 1,
          username: 'user1',
          email: 'user1@example.com',
          firstName: 'First',
          lastName: 'User1',
        },
        {
          id: 2,
          username: 'user2',
          email: 'user2@example.com',
          firstName: 'Second',
          lastName: 'User2',
        },
      ],
    });

    const {getByText, queryByTestId} = render(<HomeScreen route={{}} />);
    expect(getByText('Welcome, Test!')).toBeTruthy();

    expect(getByText('All Registered Users:')).toBeTruthy();
    expect(getByText('First User1 - user1')).toBeTruthy();
    expect(getByText('Second User2 - user2')).toBeTruthy();
  });

  it('should handle user tap and navigate to UserDetail screen', () => {
    (useSelector as jest.Mock).mockReturnValueOnce({
      loggedInUser: {username: 'testUser', firstName: 'Test', lastName: 'User'},
      allUsers: [
        {
          id: 1,
          username: 'user1',
          email: 'user1@example.com',
          firstName: 'First',
          lastName: 'User1',
        },
      ],
    });

    const mockNavigate = jest.fn();
    const mockUseNavigation = jest.fn(() => ({navigate: mockNavigate}));
    jest.mock('@react-navigation/native', () => ({
      ...jest.requireActual('@react-navigation/native'),
      useNavigation: mockUseNavigation,
    }));

    const {getByText} = render(<HomeScreen route={{}} />);

    fireEvent.press(getByText('First User1 - user1'));

    expect(mockNavigate).toHaveBeenCalledWith('UserDetail', {
      user: {
        id: 1,
        username: 'user1',
        email: 'user1@example.com',
        firstName: 'First',
        lastName: 'User1',
      },
    });
  });

  it('should handle logout and navigate to Landing screen', async () => {
    (useSelector as jest.Mock).mockReturnValueOnce({
      loggedInUser: {username: 'testUser', firstName: 'Test', lastName: 'User'},
      allUsers: [
        {
          id: 1,
          username: 'user1',
          email: 'user1@example.com',
          firstName: 'First',
          lastName: 'User1',
        },
      ],
    });

    const {getByText} = render(<HomeScreen route={{}} />);

    fireEvent.press(getByText('☰'));

    fireEvent.press(getByText('Logout'));

    await waitFor(() =>
      expect(
        require('@react-native-async-storage/async-storage').removeItem,
      ).toHaveBeenCalled(),
    );
    expect(mockNavigate).toHaveBeenCalledWith('Landing');
  });
});
