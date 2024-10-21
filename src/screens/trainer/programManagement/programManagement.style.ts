import color from '@theme/color';
import font from '@theme/font';
import {
  percentageHeight,
  percentageWidth,
} from '@utility/functions/dimensionsScale';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  dropdownContainer: {
    height: percentageHeight(4.5),
    borderRadius: percentageHeight(0.2),
    padding: 10,
    backgroundColor: color.secondaryBG,
    paddingHorizontal: 10,
    marginTop: percentageHeight(1.2),
    marginBottom: percentageHeight(1.1),
  },
  placeholderStyle: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: percentageHeight(1.8),
    color: color.primaryText,
    lineHeight: percentageHeight(2.4),
  },
  rowView: {
    marginTop: 20.91,
    marginBottom: 13,
  },
  priceRowViewStyle: {
    flexDirection: 'row',
    marginBottom: percentageHeight(1.3),
  },
  textManageTextView: {
    marginLeft: 6,
  },
  priceTextStyle: {
    fontSize: percentageHeight(1.2),
    fontFamily: font.openSansSemiBold,
    color: color.secondaryText,
  },
  priceUKTextStyle: {
    fontSize: percentageHeight(1.6),
    fontFamily: font.openSansSemiBold,
    color: color.primaryText,
  },
  activeCardStyleView: {
    width: percentageWidth(18),
    borderRadius: percentageHeight(5.3),
    backgroundColor: color.forestGreen,
    paddingHorizontal: percentageHeight(1),
    paddingVertical: percentageHeight(0.5),
    alignItems: 'center',
    flexDirection: 'row',
  },
  activePoinStyle: {
    height: percentageHeight(0.8),
    width: percentageHeight(0.8),
    borderRadius: percentageHeight(4.2),
    backgroundColor: color.viridianGreen,
    marginRight: percentageHeight(0.8),
  },
  activeTextPoint: {
    fontSize: percentageHeight(1.4),
    fontFamily: font.openSansRegular,
    color: color.viridianGreen,
  },
  graphContainerStyle: {
    marginTop: percentageHeight(1.1),
    marginBottom: percentageHeight(0.8),
    height: percentageHeight(28),
    maxHeight: percentageHeight(34.2),
    borderRadius: percentageHeight(1),
    padding: percentageHeight(0.8),
  },
  rowDollorIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  // scale style add
  filterContainer: {
    height: percentageHeight(4.1),
    width: percentageHeight(4.1),
  },
  graphTitleStyle: {
    fontSize: percentageHeight(2.1),
    lineHeight: percentageHeight(2.8),
    marginBottom: percentageHeight(1.7),
  },
  graphChartStyle: {
    height: percentageHeight(16.5),
    maxHeight: percentageHeight(16.7),
  },
  graphDropdownContainer: {
    marginTop: percentageHeight(1),
    width: percentageWidth(28),
  },
});
