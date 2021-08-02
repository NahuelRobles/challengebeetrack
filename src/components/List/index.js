/** @format */

import React, {memo, useCallback} from 'react';
import {View, FlatList, TouchableOpacity, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {NAVIGATION} from '../../constants';

import {styles} from './styles';

export const List = memo(({data = null, error = null, isLoading = true}) => {
  const navigation = useNavigation();

  const renderEmptyContainer = () => {
    return (
      <View>
        <Text> Empty </Text>
      </View>
    );
  };
  const onPressItem = useCallback(
    item => {
      navigation.navigate(NAVIGATION.ROUTE.SEARCH, {
        location: item?.location?.coordinates,
        person: item?.name?.first + ' ' + item?.name?.last,
      });
    },
    [navigation],
  );
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => onPressItem(item)} id={index}>
        <View style={styles.viewCard}>
          <View style={styles.viewImage}>
            <Image source={{uri: item?.picture?.medium}} style={styles.image} />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.nameStyle}>
              {item?.name?.first} {item?.name?.last}
            </Text>
            <Text>
              {item?.location?.street?.number} {item?.location?.street?.name},{' '}
              {item?.location?.state}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        extraData={isLoading}
        data={data}
        renderItem={!error ? renderItem : renderEmptyContainer}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
});
