import React from 'react';
import { Button, View } from 'react-native';

interface AuthButtonProps {
  title: string;
  onPress: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ title, onPress }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

export default AuthButton;
