/** @format */

import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  input: isError => ({
    paddingTop: 5,
    borderColor: isError ? 'rgb(219, 106, 95)' : 'lightgrey',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 50,
    width: '100%',
    fontSize: 8,
    marginTop: 20,
  }),
  label: {
    fontWeight: 'bold',
    fontSize: 10,
    paddingLeft: 15,
    paddingBottom: Platform.OS === 'android' ? 0 : 4,
    top: 2,
  },
  textError: {
    fontSize: 10,
    color: 'rgb(219, 106, 95)',
  },
  containerError: {
    marginTop: 10,
  },
});
