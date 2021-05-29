import React, {useEffect, useRef} from 'react';
import {Animated, Text} from 'react-native';
import {_style} from './style';
import {Colors} from '../../styles';

export type NotifierType = {
  type: 'success' | 'danger';
  active: boolean;
};

export const Notifier = ({active, type}: NotifierType) => {
  let notifierAnim = useRef(new Animated.Value(-120)).current;

  const onShow = () => {
    Animated.spring(notifierAnim, {
      useNativeDriver: false,
      toValue: active ? 0 : -120,
      damping: 100,
    });
  };

  useEffect(() => onShow(), [active]);

  return (
    <Animated.View
      style={[
        _style.block,
        {
          top: notifierAnim,
          backgroundColor: Colors[type],
        },
      ]}>
      <Text style={_style.text}>Ошибка</Text>
    </Animated.View>
  );
};
