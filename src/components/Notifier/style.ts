import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

export const _style = StyleSheet.create({
  block: {
    height: 50,
    width: '100%',
    zIndex: 999,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.danger,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: Colors.white,
    fontSize: 20,
  },
});
