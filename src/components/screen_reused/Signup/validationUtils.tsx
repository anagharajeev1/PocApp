import {
  EMAIL_REGEX,
  ERROR_MESSAGES,
  MIN_PASSWORD_LENGTH,
  NAME_REGEX,
  USERNAME_REGEX,
} from './constants';

interface ValidationErrors {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: ValidationErrors;
}

export const validateFields = (
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
): ValidationResult => {
  let isValid = true;
  const errors: ValidationErrors = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  if (!firstName) {
    errors.firstName = ERROR_MESSAGES.firstName.required;
    isValid = false;
  } else if (!NAME_REGEX.test(firstName)) {
    errors.firstName = ERROR_MESSAGES.firstName.invalid;
    isValid = false;
  }

  if (!lastName) {
    errors.lastName = ERROR_MESSAGES.lastName.required;
    isValid = false;
  } else if (!NAME_REGEX.test(lastName)) {
    errors.lastName = ERROR_MESSAGES.lastName.invalid;
    isValid = false;
  }

  if (!username) {
    errors.username = ERROR_MESSAGES.username.required;
    isValid = false;
  } else if (!USERNAME_REGEX.test(username)) {
    errors.username = ERROR_MESSAGES.username.invalid;
    isValid = false;
  }

  if (!email) {
    errors.email = ERROR_MESSAGES.email.required;
    isValid = false;
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = ERROR_MESSAGES.email.invalid;
    isValid = false;
  }

  if (!password) {
    errors.password = ERROR_MESSAGES.password.required;
    isValid = false;
  } else if (password.length < MIN_PASSWORD_LENGTH) {
    errors.password = ERROR_MESSAGES.password.invalid;
    isValid = false;
  }

  if (!confirmPassword) {
    errors.confirmPassword = ERROR_MESSAGES.confirmPassword.required;
    isValid = false;
  } else if (confirmPassword !== password) {
    errors.confirmPassword = ERROR_MESSAGES.confirmPassword.mismatch;
    isValid = false;
  }

  return {isValid, errors};
};
