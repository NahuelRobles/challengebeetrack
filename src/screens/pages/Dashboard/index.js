/** @format */

import React, {memo, useEffect, useCallback, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useMappedState} from 'redux-react-hook';

import {
  ToolBar,
  Content,
  Spinner,
  List,
  FloatingButton,
  ModalPopup,
} from '../../../components';
import {PopUp} from '../../../components/ModalPopup/PopUp';

import {useTranslation} from '../../../hooks';

import {
  loadMainContactsList,
  mainContactsListSelector,
} from '../../../store/modules';

import {styles} from './styles';

export const Dashboard = memo(() => {
  const t = useTranslation();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const {isLoading, list, error} = useMappedState(mainContactsListSelector);

  useEffect(() => {
    dispatch(loadMainContactsList());
  }, [dispatch]);

  const handleOnPress = useCallback(() => {
    setIsVisible(true);
  }, []);

  return (
    <View style={styles.container}>
      <Content>
        <ToolBar title={t('Home')} />
        {isLoading && !list ? (
          <Spinner />
        ) : (
          <List data={list} error={error} isLoading={isLoading} />
        )}
        <FloatingButton handleSearch={handleOnPress} />
        <ModalPopup
          isVisible={isVisible}
          onRequestClose={() => setIsVisible(false)}>
          <PopUp onRequestClose={() => setIsVisible(false)} />
        </ModalPopup>
      </Content>
    </View>
  );
});
