import color from '@theme/color';
import font from '@theme/font';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderWidth: 1,
    marginLeft: 10,
    borderColor: color.primaryText,
    flexDirection: 'row',
  },
  priceText: {
    fontFamily: font.openSansRegular,
    fontSize: 11,
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: color.primaryText,
    fontWeight: '400',
    lineHeight: 15,
    // textTransform: 'capitalize',
  },
  textView: {
    marginRight: 5,
  },
});
export default styles;
