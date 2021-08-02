/** @format */

import React, {memo, useCallback, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {NAVIGATION, SEARCHVIEW} from '../../../constants';
import {Input} from '../../../components';
import {useTranslation} from '../../../hooks';
import {getValidation} from '../../../utils';

import {styles} from './styles';

export const PopUp = memo(({onRequestClose}) => {
  const t = useTranslation();
  const navigation = useNavigation();

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isErrorLatitude, setErrorLatitude] = useState(false);
  const [isErrorLongitude, setErrorLongitude] = useState(false);

  const validate = useCallback(() => {
    let flagValidate = false;
    if (getValidation(latitude)) {
      setErrorLatitude(true);
      flagValidate = true;
    }
    if (getValidation(longitude)) {
      setErrorLongitude(true);
      flagValidate = true;
    }
    return flagValidate;
  }, [latitude, longitude]);

  const handleLatitude = useCallback(
    newLatitude => {
      setLatitude(newLatitude);
      if (isErrorLatitude) {
        setErrorLatitude(false);
      }
    },
    [isErrorLatitude],
  );
  const handleLongitude = useCallback(
    newLongitude => {
      setLongitude(newLongitude);
      if (isErrorLongitude) {
        setErrorLongitude(false);
      }
      setErrorLongitude(false);
    },
    [isErrorLongitude],
  );
  const handleOnPress = useCallback(() => {
    const validateForm = validate();
    if (!validateForm) {
      onRequestClose();
      navigation.navigate(NAVIGATION.ROUTE.SEARCH, {
        location: {latitude: latitude, longitude: longitude},
        person: SEARCHVIEW,
      });
    }
  }, [latitude, longitude, navigation, onRequestClose, validate]);

  return (
    <View style={styles.container}>
      <Input
        label={t('Latitude')}
        onChangeText={handleLatitude}
        isError={isErrorLatitude}
        value={latitude}
        errorMessageText={t('Only Number!')}
      />
      <Input
        label={t('Longitude')}
        onChangeText={handleLongitude}
        isError={isErrorLongitude}
        value={longitude}
        errorMessageText={t('Only Number!')}
      />
      <TouchableOpacity style={styles.searchBtn} onPress={handleOnPress}>
        <Text>{t('Search')}</Text>
      </TouchableOpacity>
    </View>
  );
});
