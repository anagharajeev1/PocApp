import React from 'react';
import { TextInput, Text } from 'react-native';
import { signinStyles } from '../../styling/sigininStyles';

interface AuthTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error: string;
  secureTextEntry?: boolean;
  keyboardType?: string;
  accessibilityLabel: string;
}

const AuthTextInput: React.FC<AuthTextInputProps> = ({
  label,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
  keyboardType = 'default',
  accessibilityLabel,
}) => {
  return (
    <>
      <Text>{label}</Text>
      <TextInput
        style={signinStyles.input}
        value={value}
        onChangeText={(text) => {
          onChangeText(text);
        }}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        accessibilityLabel={accessibilityLabel}
      />
      <Text style={signinStyles.errorText}>{error}</Text>
    </>
  );
};

export default AuthTextInput;
