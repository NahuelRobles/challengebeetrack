/** @format */

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 24,
  },
  backdrop: {
    backgroundColor: 'rgba(43, 43, 51, 0.8)',
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  content: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    elevation: 6,
    flexDirection: 'column',
    margin: 30,
    minHeight: 280,
    paddingVertical: 4,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.25,
    shadowRadius: 4.65,
  },
  wrapper: {
    flex: 1,
  },
});
