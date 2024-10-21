import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  errorStyle: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    color: color.warning,
    lineHeight: 16.34,
  },
  errorViewStyle: {
    marginTop: 6,
  },
});
export default styles;
