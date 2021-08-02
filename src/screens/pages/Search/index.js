/** @format */

import React, {memo, useCallback, useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import {SEARCHVIEW} from '../../../constants';
import {ToolBar, Content} from '../../../components';
import {useTranslation} from '../../../hooks';

import {styles} from './styles';

export const Search = memo(
  ({
    route: {
      params: {location, person},
    },
  }) => {
    const t = useTranslation();
    const navigation = useNavigation();
    const [currentLocation, setCurrentLocation] = useState({
      latitude: '57.6619',
      longitude: '81.8422',
    });

    useEffect(() => {
      Geolocation.getCurrentPosition(info => {
        setCurrentLocation({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      });
    }, []);

    const handleBack = useCallback(() => {
      navigation.goBack();
    }, [navigation]);

    const LeftButtonComponent = (
      <TouchableOpacity onPress={handleBack} style={styles.button}>
        <Icon size={20} name="arrow-left" />
      </TouchableOpacity>
    );
    return (
      <View>
        <Content>
          <ToolBar
            title={t('Search')}
            LeftButtonComponent={LeftButtonComponent}
          />
          <MapView
            style={styles.mapView}
            region={{
              latitude: parseInt(location.latitude, 10),
              longitude: parseInt(location.longitude, 10),
              latitudeDelta: 0.015,
              longitudeDelta: 321,
            }}>
            <Marker
              coordinate={{
                latitude: parseInt(location.latitude, 10),
                longitude: parseInt(location.longitude, 10),
              }}
              title={person}
            />
            {person !== SEARCHVIEW && (
              <Marker
                coordinate={{
                  latitude: parseInt(currentLocation.latitude, 10),
                  longitude: parseInt(currentLocation.longitude, 10),
                }}
                title={t('Me')}
              />
            )}
          </MapView>
        </Content>
      </View>
    );
  },
);
