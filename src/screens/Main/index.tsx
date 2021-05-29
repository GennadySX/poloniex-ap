import React from 'react';
import 'react-native-gesture-handler';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {_style} from './style';
import {Button} from '../../components/Button';
import {Routes} from '../../routes';

export type MainScreenType = {};

export const MainScreen = ({}: MainScreenType) => {
  const navigation = useNavigation<any>();
  const toCatalogScreen = () => navigation.navigate(Routes.Catalog);

  return (
    <View style={_style.block}>
      <Button title={'Котировки'} onPress={toCatalogScreen} />
    </View>
  );
};
