/** @format */

import React, {memo, useEffect, useState} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import {useTranslation} from '../../../hooks';

import {styles} from './styles';

export const NetworkStatusWrapper = memo(({children}) => {
  const [isConnected, setConnected] = useState(true);
  const t = useTranslation();

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const unsubscribe = NetInfo.addEventListener(({isConnected}) => {
      setConnected(isConnected);
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {!isConnected && (
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {t('No internet connection')}
          </Text>
        </View>
      )}
      <View style={styles.container}>
        {children}
        {!isConnected && <View style={styles.overlay} />}
      </View>
    </SafeAreaView>
  );
});
