import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.secondaryBG,
    borderRadius: 5,
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
  columnStyle: {
    flex: 1,
  },
  labalText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 16,
    color: color.secondaryText,
  },
  lableTextExtra: {
    marginTop: 14,
  },
  valueText: {
    marginTop: 2,
    fontFamily: font.openSansSemiBold,
    fontSize: 13,
    lineHeight: 16,
    color: color.primaryText,
  },
  discountView: {
    flexDirection: 'row',
  },
  discount: {
    flex: 1,
  },
});
