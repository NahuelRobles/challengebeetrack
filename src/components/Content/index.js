/** @format */

import React, {memo} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

export const Content = memo(({children = null}) => (
  <View style={styles.container}>{children}</View>
));
