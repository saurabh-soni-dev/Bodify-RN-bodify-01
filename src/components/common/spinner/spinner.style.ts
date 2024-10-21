import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.transparentColor,
  },
  labelText: {
    fontSize: 14,
    fontFamily: font.workSansMedium,
    color: color.secondaryBG,
    marginRight: 5,
    textTransform: 'capitalize',
  },
});
