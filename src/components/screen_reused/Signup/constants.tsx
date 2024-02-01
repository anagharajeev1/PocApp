export const NAME_REGEX: RegExp = /^[A-Za-z]+$/;
export const USERNAME_REGEX: RegExp = /^[a-zA-Z0-9]+$/;
export const EMAIL_REGEX: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MIN_PASSWORD_LENGTH: number = 6;

export const ERROR_MESSAGES = {
  firstName: {
    required: 'First Name is required',
    invalid: 'Invalid First Name',
  },
  lastName: {
    required: 'Last Name is required',
    invalid: 'Invalid Last Name',
  },
  username: {
    required: 'Username is required',
    invalid: 'Invalid Username',
  },
  email: {
    required: 'Email is required',
    invalid: 'Please enter a valid email address',
  },
  password: {
    required: 'Password is required',
    invalid: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`,
  },
  confirmPassword: {
    required: 'Confirm Password is required',
    mismatch: 'Passwords do not match',
  },
};
