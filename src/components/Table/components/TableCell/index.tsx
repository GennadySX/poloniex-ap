import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleProp, Text, View, ViewStyle} from 'react-native';
import {ItemType} from '../../../../types/Item';
import {_style} from './style';

export type TableCellType = {
  item: ItemType;
  index: string | number;
  style?: StyleProp<ViewStyle>;
};

export const TableCell = React.memo(({index, item, style}: TableCellType) => {
  let anim = useRef(new Animated.Value(0)).current;
  const [animActive, setAnimActive] = useState<boolean>(false);
  const ifChange = () => {
    Animated.timing(anim, {
      useNativeDriver: false,
      toValue: 1,
      duration: 50,
    }).start(() => {
      Animated.spring(anim, {
        useNativeDriver: false,
        toValue: 0,
        delay: 500,
      }).start();
    });
  };

  useEffect(() => {
    animActive && ifChange();
  }, [item.last]);

  useEffect(() => {
    !!item.name && !animActive && setAnimActive(true);
  }, [item.name]);

  return (
    <View key={index} style={[_style.block, style]}>
      <Animated.View
        style={[
          _style.animLayer,
          {
            opacity: anim,
          },
        ]}
      />
      <View
        key={index}
        style={[_style.container, {width: '25%', paddingLeft: 5}]}>
        <Text numberOfLines={1} style={_style.text}>
          {item.name}
        </Text>
      </View>
      <View key={index} style={[_style.container, {width: '30%'}]}>
        <Text numberOfLines={1} style={_style.text}>
          {item.last}
        </Text>
      </View>
      <View key={index} style={[_style.container, {width: '22.5%'}]}>
        <Text numberOfLines={1} style={_style.text}>
          {item.percentChange}
        </Text>
      </View>
      <View key={index} style={[_style.container, {width: '22.5%'}]}>
        <Text numberOfLines={1} style={_style.text}>
          {item.percentChange}
        </Text>
      </View>
    </View>
  );
});
