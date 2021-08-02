/** @format */

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    elevation: 6,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    zIndex: 999,
  },
  buttons: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  title: {
    alignItems: 'center',
    color: '#282B33',
    fontSize: 18,
    position: 'absolute',
    textAlign: 'center',
    marginLeft: 10,
    width: '100%',
    zIndex: 1,
  },
});
