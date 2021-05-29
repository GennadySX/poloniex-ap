import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {_style} from './style';

export type ButtonType = {
  titleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
  disabled?: boolean;
  focusOpacity?: number;
};

export const Button = ({
  title,
  onPress,
  disabled,
  style,
  titleStyle,
  focusOpacity = 0,
}: ButtonType) => {
  return (
    <TouchableOpacity
      style={[_style.block, style]}
      onPress={onPress}
      activeOpacity={focusOpacity}
      disabled={!!disabled}>
      <Text style={[_style.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
