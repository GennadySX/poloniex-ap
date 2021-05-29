import {StyleSheet} from 'react-native';
import {Colors} from '../../../../styles';

export const _style = StyleSheet.create({
  block: {
    marginBottom: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#000',
    borderWidth: 1,
  },
  container: {
    paddingRight: 10,
  },
  text: {
    color: Colors.black,
  },
  animLayer: {
    backgroundColor: '#82ee82',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
