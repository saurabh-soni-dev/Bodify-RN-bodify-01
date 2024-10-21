import color from '@theme/color';
import font from '@theme/font';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondaryBG,
    height: 62,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 16,
    // ...Platform.select({
    //   ios: {
    //     shadowColor: color.black,
    //     shadowOffset: {width: 0, height: 4},
    //     shadowOpacity: 0.1,
    //     shadowRadius: 40,
    //   },
    //   android: {
    //     elevation: 10,
    //   },
    // }),
  },
  amountView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  idText: {
    flex: 1,
    fontSize: 12,
    fontFamily: font.openSansSemiBold,
    lineHeight: 14.52,
    color: color.primaryText,
  },
  amountText: {
    fontSize: 12,
    fontFamily: font.openSansSemiBold,
    lineHeight: 14.52,
    color: color.primaryText,
  },
  dateText: {
    marginTop: 4,
    fontSize: 10,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    lineHeight: 12.1,
    color: color.secondaryText,
  },
});
