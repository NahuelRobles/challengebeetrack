/** @format */

import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';

export const FloatingButton = memo(({handleSearch = () => {}}) => (
  <TouchableOpacity style={styles.container} onPress={handleSearch}>
    <Icon size={15} name="search" />
    <Text> Search </Text>
  </TouchableOpacity>
));
