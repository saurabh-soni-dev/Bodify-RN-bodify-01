import color from '@theme/color';
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
    height: percentageHeight(4.8),
    borderRadius: percentageHeight(0.2),
    padding: 10,
    backgroundColor: color.secondaryBG,
    paddingHorizontal: 10,
    marginTop: percentageHeight(1.8),
    marginBottom: percentageHeight(1.7),
  },
  placeholderStyle: {
    fontSize: percentageHeight(1.8),
    color: color.primaryText,
    lineHeight: percentageHeight(2.4),
  },
  graphContainerStyle: {
    marginTop: percentageHeight(1.2),
    marginBottom: percentageHeight(4.9),
    height: percentageHeight(33.5),
    maxHeight: percentageHeight(34.2),
    borderRadius: percentageHeight(1),
    padding: percentageHeight(1),
  },
  filterContainer: {
    height: percentageHeight(4.3),
    width: percentageHeight(4.3),
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
