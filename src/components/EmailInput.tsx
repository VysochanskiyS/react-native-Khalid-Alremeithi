import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Typography} from './Typography';
import {COLOR} from '../constants/COLOR';
import {FONT_COLOR} from '../constants';

export const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Typography mode={'subtitle'} color={isValid ? 'green' : 'red'}>
          Email
        </Typography>
      </View>

      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        autoComplete="email"
        keyboardType="email-address"
        placeholder="Email"
        style={[styles.input, !isValid && styles.invalidInput]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    backgroundColor: COLOR.white,
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    color: FONT_COLOR.gray,
  },
  invalidLabel: {
    color: COLOR.error,
  },
  invalidInput: {
    borderColor: COLOR.error,
    borderWidth: 1,
  },
});
