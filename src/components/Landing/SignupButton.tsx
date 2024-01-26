import React from 'react';
import {Button} from 'react-native';

interface SignupButtonProps {
  onPress: () => void;
}

const SignupButton: React.FC<SignupButtonProps> = ({onPress}) => {
  return <Button title="Signup" onPress={onPress} color="mediumturquoise" />;
};

export default SignupButton;
