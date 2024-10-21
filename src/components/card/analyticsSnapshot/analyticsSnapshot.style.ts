import color from '@theme/color';
import font from '@theme/font';
import {percentageHeight} from '@utility/functions/dimensionsScale';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  fContainer: {
    height: percentageHeight(10.8),
    borderRadius: percentageHeight(0.5),
    paddingVertical: percentageHeight(0.6),
    paddingHorizontal: percentageHeight(0.8),
    backgroundColor: color.primary,
    width: '100%',
    alignItems: 'center',
    marginBottom: percentageHeight(1.2),
  },
  fContentView: {
    height: percentageHeight(7.3),
    alignItems: 'center',
  },
  fTitle: {
    fontFamily: font.openSansRegular,
    fontWeight: '700',
    fontSize: percentageHeight(1.6),
    lineHeight: percentageHeight(2),
    color: color.secondaryBG,
  },
  averageView: {
    height: 16,
    alignSelf: 'center',
  },
  fType: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 18,
    color: color.primaryText,
  },
  fAmount: {
    marginTop: percentageHeight(0.8),
    fontFamily: font.openSansRegular,
    fontWeight: '700',
    fontSize: percentageHeight(3.5),
    lineHeight: percentageHeight(4.7),
    color: color.secondaryBG,
  },
  fProgressView: {
    marginTop: percentageHeight(0.6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  fProgressValue: {
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: percentageHeight(1.2),
    lineHeight: percentageHeight(1.5),
    color: color.secondaryBG,
  },
  fProgressText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: percentageHeight(1.2),
    lineHeight: percentageHeight(1.5),
    color: color.secondaryBG,
  },
  hContainer: {
    paddingVertical: percentageHeight(0.6),
    paddingHorizontal: percentageHeight(0.9),
    backgroundColor: color.primaryBG,
    alignItems: 'flex-start',
    borderRadius: percentageHeight(0.5),
    width: '48.2%',
    borderWidth: 1.2,
    borderColor: color.transparent,
  },
  hContentView: {
    // height: 63,
    alignItems: 'flex-start',
  },
  hTitle: {
    fontFamily: font.openSansSemiBold,
    fontSize: percentageHeight(1.6),
    lineHeight: percentageHeight(2.2),
    color: color.primaryText,
  },
  hAmount: {
    marginTop: percentageHeight(1.1),
    fontFamily: font.openSansSemiBold,
    fontSize: percentageHeight(2.9),
    lineHeight: percentageHeight(3.8),
    color: color.primaryText,
  },
  hProgressView: {
    marginTop: percentageHeight(0.5),
    flexDirection: 'row',
  },
  hProgressValue: {
    flex: 1,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: percentageHeight(1.1),
    lineHeight: percentageHeight(1.5),
    color: color.primary,
  },
  hProgressText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: percentageHeight(1),
    lineHeight: percentageHeight(1.5),
    color: color.primaryText,
  },
  iconView: {
    marginRight: percentageHeight(0.4),
    // height: 13,
    // width: 13,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  isSelected: {
    borderWidth: 1.2,
    borderColor: color.primary,
  },
});
