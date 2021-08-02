/** @format */

import {LayoutAnimation} from 'react-native';

export const useLayoutAnimation = config => {
  return (callback = () => {}, onAnimationDidEnd = () => {}) => {
    setTimeout(() => {
      LayoutAnimation.configureNext(config, onAnimationDidEnd);
      callback();
    });
  };
};
