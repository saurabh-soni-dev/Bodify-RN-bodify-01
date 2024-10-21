import colors from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  marginContainer: {
    marginHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    height: 46,
    borderRadius: 46 / 2,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inActiveContainer: {
    flexDirection: 'row',
    backgroundColor: colors.buttonBG,
    height: 46,
    borderRadius: 46 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineContainer: {
    flexDirection: 'row',
    height: 46,
    borderRadius: 46 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.secondaryBG,
  },
  nameStyle: {
    fontFamily: font.openSansSemiBold,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    color: colors.secondaryBG,
  },
  inActiveNameStyle: {
    fontFamily: font.openSansSemiBold,
    fontSize: 14,
    fontWeight: '600',
    color: colors.primaryText,
    lineHeight: 19,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    marginRight: 5,
  },
  rightIcon: {
    marginLeft: 5,
  },
});
export default style;
