import React from 'react';
import {Button} from 'react-native';

interface LoginButtonProps {
  onPress: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({onPress}) => {
  return <Button title="Login" onPress={onPress} color="mediumturquoise" />;
};

export default LoginButton;
