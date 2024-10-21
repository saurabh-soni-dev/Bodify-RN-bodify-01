import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardView: {
    marginBottom: 30,
  },
  rowViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontFamily: font.workSansMedium,
    fontSize: 14,
    color: color.primaryText,
    flex: 1,
  },
  valueTextStyle: {
    fontFamily: font.openSansRegular,
    fontSize: 12,
    color: color.secondaryText,
    marginTop: 11,
  },
  outLine: {
    marginTop: 20,
    height: 1,
    backgroundColor: color.lightgray,
  },
});
export default styles;
