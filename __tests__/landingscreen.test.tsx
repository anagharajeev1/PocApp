import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LandingScreen from '../src/screens/LandingScreen';

describe('LandingScreen', () => {
  it('should navigate to SignIn screen on Login button press', () => {
    const mockNavigation = {navigate: jest.fn()};
    const {getByText} = render(<LandingScreen navigation={mockNavigation} />);

    fireEvent.press(getByText('Login'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('SignIn');
  });

  it('should navigate to Signup screen on Signup button press', () => {
    const mockNavigation = {navigate: jest.fn()};
    const {getByText} = render(<LandingScreen navigation={mockNavigation} />);

    fireEvent.press(getByText('Signup'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Signup');
  });
});
