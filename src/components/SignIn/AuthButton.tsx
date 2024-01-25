import React from 'react';
import { Button } from 'react-native';

interface AuthButtonProps {
  title: string;
  onPress: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ title, onPress }) => {
  return <Button title={title} onPress={onPress} />;
};

export default AuthButton;
