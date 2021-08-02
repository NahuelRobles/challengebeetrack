/** @format */

import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height - 150,
  },
  viewCard: {
    flexDirection: 'row',
    height: 80,
    borderBottomWidth: 0.5,
    padding: 10,
  },
  viewImage: {
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  viewTitle: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
