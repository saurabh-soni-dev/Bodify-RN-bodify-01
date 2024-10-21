import {StyleSheet} from 'react-native';
import color from '@theme/color';
import font from '@theme/font';

export default StyleSheet.create({
  cardContainer: {
    width: `${100 / 7}%`,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateCircle: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: color.secondaryBG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDateCircle: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 14,
    fontFamily: font.openSansMedium,
    color: color.primaryText,
  },
  selectedDateText: {
    fontSize: 14,
    fontFamily: font.openSansSemiBold,
    color: color.secondaryBG,
  },
});
