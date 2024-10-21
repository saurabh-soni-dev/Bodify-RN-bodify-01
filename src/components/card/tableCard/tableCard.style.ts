import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 3,
    marginTop: 6,
  },
  textTableLabel: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: font.openSansRegular,
    color: color.secondaryBG,
    fontWeight: '400',
  },
  cardSetsViewRowStyle: {
    height: 23,
    marginTop: 3,
    width: 79,
    backgroundColor: color.secondaryBG,
    borderRadius: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  tableNumberStyle: {
    color: color.primaryText,
    marginHorizontal: 10,
    padding: 0,
    fontSize: 14,
    fontFamily: font.openSansRegular,
    textAlign: 'center',
    fontWeight: '400',
  },
  lineStyle: {
    height: 16,
    width: 1,
    backgroundColor: color.lightgray,
  },
  tableTypeTextStyle: {
    fontSize: 10,
    lineHeight: 20,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    marginLeft: 5,
    fontWeight: '400',
  },
});
export default styles;
