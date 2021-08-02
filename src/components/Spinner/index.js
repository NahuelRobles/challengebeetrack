/** @format */

import React, {memo} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {styles} from './styles';

export const Spinner = memo(() => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
});
