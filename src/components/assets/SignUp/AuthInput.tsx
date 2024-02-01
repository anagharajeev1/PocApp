import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface AuthInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: string;
  accessibilityLabel: string;
  error?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  accessibilityLabel,
  error,
}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={{
          // Add your styles here
          borderColor: 'gray',
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        accessibilityLabel={accessibilityLabel}
      />
      <Text style={{ color: 'red' }}>{error}</Text>
    </View>
  );
};

export default AuthInput;
