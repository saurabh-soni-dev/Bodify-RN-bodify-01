import color from '@theme/color';
import font from '@theme/font';
import {percentageHeight} from '@utility/functions/dimensionsScale';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    height: 291,
    maxHeight: 291,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
    padding: 15,
    paddingLeft: 14,
  },
  titleText: {
    textAlign: 'center',
    fontFamily: font.openSansSemiBold,
    fontSize: 18,
    lineHeight: 24,
    color: color.secondaryText,
    marginBottom: 30,
  },
  chartContainer: {
    height: 157.87,
    width: '100%',
    maxHeight: 158,
  },
  dropdownCotainer: {
    marginTop: 16,
    width: 110,
    alignSelf: 'flex-end',
    height: 36,
  },
  labelView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 16,
    width: 47,
    borderRadius: 3.15,
    backgroundColor: color.buttonBG,
    marginTop: -14,
  },
  labelText: {
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: font.openSansRegular,
    fontSize: 10.05,
    lineHeight: 14.3,
    color: color.primaryText,
  },
  dropdownBG: {
    backgroundColor: color.graphDropdown,
    paddingHorizontal: 9,
    paddingVertical: 6,
    //default height:36
    height: percentageHeight(4.2),
  },
  xAxisLabelView: {
    // marginLeft: 9.75,
    marginLeft: percentageHeight(1.1),
    width: 44,
    marginTop: percentageHeight(-0.3),
    // marginTop: -3,
  },
  xAxisLabelText: {
    fontFamily: font.openSansRegular,
    // fontSize: 10.5,
    fontSize: percentageHeight(1.2),
    // lineHeight: 14.3,
    lineHeight: percentageHeight(1.7),
    color: color.primaryText,
  },
  dropDownTitle: {
    // default
    fontSize: percentageHeight(1.4),
    lineHeight: percentageHeight(1.9),
  },
});
