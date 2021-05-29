import {StyleSheet} from 'react-native';
import {WIDTH} from '../../helpers/Screen';

export const _style = StyleSheet.create({
  block: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    width: WIDTH * 0.33,
    padding: 5,
  },
  title: {
    alignSelf: 'center',
    fontSize: 17
  },
});
