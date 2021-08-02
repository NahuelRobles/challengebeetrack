/** @format */

import React from 'react';
import {Text, TextInput, View} from 'react-native';

import {styles} from './styles';

export const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
  autoCompleteType,
  isError,
  style,
  label,
  errorMessageText,
}) => {
  const errorMessage = () => (
    <View style={styles.containerError}>
      <Text style={styles.textError}>*{errorMessageText}</Text>
    </View>
  );

  const textInputComponent = () => (
    <View>
      <TextInput
        {...{
          placeholder,
          value,
          onChangeText,
          secureTextEntry,
          autoCapitalize,
          autoCompleteType,
        }}
        keyboardType="numeric"
        paddingLeft={15}
        style={!label && [styles.input(isError), style]}
        placeholderTextColor={'grey'}
      />
      {isError && errorMessage()}
    </View>
  );

  return label ? (
    <View style={[styles.input(isError), style]}>
      <Text style={styles.label}>{label}</Text>
      {textInputComponent()}
    </View>
  ) : (
    textInputComponent()
  );
};
