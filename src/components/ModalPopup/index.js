/** @format */

import React, {
  memo,
  useCallback,
  useMemo,
  useState,
  useRef,
  useEffect,
} from 'react';
import {
  Animated,
  Easing,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {styles} from './styles';

const ANIMATION_IN_DURATION = 300;
const ANIMATION_OUT_DURATION = 200;
const INIT_OFFSET = 100;
const INIT_OPACITY = 0;

export const ModalPopup = memo(
  ({
    children = null,
    onDidClose = () => {},
    onDidOpen = () => {},
    onRequestClose = () => {},
    onRequestOpen = () => {},
    isVisible = false,
  }) => {
    const [currentVisibility, setCurrentVisibility] = useState(isVisible);
    const offsetPosition = useRef(new Animated.Value(INIT_OFFSET)).current;
    const backgroundOpacity = useRef(new Animated.Value(INIT_OPACITY)).current;

    const backdropStyle = useMemo(() => {
      return [styles.backdrop, {opacity: backgroundOpacity}];
    }, [backgroundOpacity]);

    const contentStyle = useMemo(() => {
      return [
        styles.content,
        {transform: [{translateY: offsetPosition}]},
        {opacity: backgroundOpacity},
      ];
    }, [offsetPosition, backgroundOpacity]);

    const handleAnimate = useCallback(
      (offset, opacity, duration, easing, onFinish = () => {}) =>
        Animated.parallel([
          Animated.timing(offsetPosition, {
            toValue: offset,
            duration: duration,
            easing: easing,
            useNativeDriver: true,
          }),
          Animated.timing(backgroundOpacity, {
            toValue: opacity,
            duration: duration,
            easing: easing,
            useNativeDriver: true,
          }),
        ]).start(onFinish),
      [backgroundOpacity, offsetPosition],
    );

    const handleShow = useCallback(() => {
      setCurrentVisibility(true);
      onRequestOpen();
      handleAnimate(
        0,
        1,
        ANIMATION_IN_DURATION,
        Easing.out(Easing.ease),
        onDidOpen,
      );
    }, [handleAnimate, onRequestOpen, onDidOpen]);

    const handleHide = useCallback(() => {
      handleAnimate(
        INIT_OFFSET,
        INIT_OPACITY,
        ANIMATION_OUT_DURATION,
        Easing.in(Easing.ease),
        () => {
          setCurrentVisibility(false);
          onDidClose();
        },
      );
    }, [handleAnimate, onDidClose]);

    useEffect(() => {
      if (isVisible !== currentVisibility) {
        Keyboard.dismiss();

        if (isVisible) {
          handleShow();
        } else {
          handleHide();
        }
      }
    }, [handleHide, handleShow, isVisible, currentVisibility]);

    if (!currentVisibility) {
      return null;
    }

    return (
      <Modal
        onDismiss={onRequestClose}
        onRequestClose={onRequestClose}
        transparent={true}
        visible={currentVisibility}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <Animated.View style={backdropStyle}>
            <View style={styles.container}>
              <TouchableWithoutFeedback>
                <Animated.View style={contentStyle}>{children}</Animated.View>
              </TouchableWithoutFeedback>
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  },
);
