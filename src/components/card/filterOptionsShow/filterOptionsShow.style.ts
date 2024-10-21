import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardStyle: {
    height: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  cardTextStyle: {
    fontSize: 14,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    flex: 1,
    fontWeight: '400',
  },
});
export default styles;
