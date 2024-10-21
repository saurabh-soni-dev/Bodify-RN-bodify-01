import color from '@theme/color';
import font from '@theme/font';
import {percentageHeight} from '@utility/functions/dimensionsScale';
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: percentageHeight(1.2),
    paddingHorizontal: percentageHeight(1.3),
    backgroundColor: color.secondaryBG,
    borderRadius: percentageHeight(1),
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: percentageHeight(1.3),
    marginBottom: percentageHeight(0.6),
  },
  dotView: {
    width: percentageHeight(0.8),
    height: percentageHeight(0.8),
    borderRadius: 5,
    backgroundColor: color.primary,
    marginHorizontal: percentageHeight(0.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: percentageHeight(0.6),
    width: percentageHeight(0.6),
    borderRadius: 5,
    backgroundColor: color.secondaryBG,
  },
  activeDot: {
    backgroundColor: color.primary,
  },
  slide: {
    width: '100%',
    height: '100%',
  },
  card: {
    backgroundColor: color.primaryBG,
    marginRight: percentageHeight(1),
    marginBottom: percentageHeight(1.4),
    borderRadius: 5,
    paddingHorizontal: percentageHeight(0.8),
    width: width / 2.2 - 19.8,
    paddingVertical: percentageHeight(0.6),
    borderWidth: 1,
    borderColor: color.transparent,
  },
  cardTitleView: {
    height: percentageHeight(7.4),
    width: 147,
  },
  cardTitle: {
    fontFamily: font.openSansSemiBold,
    fontSize: percentageHeight(1.6),
    lineHeight: percentageHeight(2.2),
    color: color.secondaryText,
  },
  amount: {
    marginTop: percentageHeight(1.2),
    fontFamily: font.openSansSemiBold,
    fontSize: percentageHeight(2.9),
    lineHeight: percentageHeight(4),
    color: color.primaryText,
  },
  progressView: {
    marginTop: percentageHeight(0.6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconView: {
    height: percentageHeight(1.3),
    width: percentageHeight(1.3),
    marginRight: 3,
  },
  progrssPercent: {
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: percentageHeight(1),
    lineHeight: percentageHeight(1.5),
    color: color.primary,
  },
  progrssText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: percentageHeight(0.9),
    lineHeight: percentageHeight(1.5),
    color: color.primaryText,
  },
  isSelected: {
    borderWidth: 1,
    borderColor: color.primary,
  },
});
