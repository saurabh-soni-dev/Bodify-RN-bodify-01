import color from '@theme/color';
import font from '@theme/font';
import {
  percentageHeight,
  percentageWidth,
} from '@utility/functions/dimensionsScale';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerViewStyle: {
    paddingHorizontal: 0,
  },
  containerStyle: {
    height: percentageHeight(4.8),
    borderRadius: percentageHeight(0.2),
    padding: 10,
    backgroundColor: color.secondaryBG,
    paddingHorizontal: 10,
    marginTop: percentageHeight(2.2),
    marginBottom: percentageHeight(2),
  },
  placeholderStyle: {
    fontSize: percentageHeight(1.8),
    color: color.primaryText,
    lineHeight: percentageHeight(2.4),
  },
  listView: {
    marginTop: percentageHeight(0.6),
    paddingTop: percentageHeight(1.2),
    paddingBottom: percentageHeight(1.9),
    paddingHorizontal: percentageHeight(1.2),
    backgroundColor: color.secondaryBG,
    borderRadius: percentageHeight(1.2),
  },
  chartLable: {
    width: 60,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10.5,
    lineHeight: 14.3,
    top: -6,
    color: color.primaryText,
  },
  // scale add style

  filterContainer: {
    height: percentageHeight(4.3),
    width: percentageHeight(4.3),
  },
  graphContainerStyle: {
    marginTop: percentageHeight(1.4),
    marginBottom: percentageHeight(4.9),
    height: percentageHeight(32.9),
    maxHeight: percentageHeight(33.2),
    borderRadius: percentageHeight(1),
    padding: percentageHeight(1),
  },
  graphTitleStyle: {
    fontSize: percentageHeight(2.1),
    lineHeight: percentageHeight(2.8),
    marginBottom: percentageHeight(2.7),
  },
  graphChartStyle: {
    height: percentageHeight(19),
    maxHeight: percentageHeight(18.5),
  },
  graphDropdownContainer: {
    marginTop: percentageHeight(1.3),
    width: percentageWidth(28),
    height: percentageHeight(4.2),
  },
});
