import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  label: {
    flex: 1,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    color: color.primaryText,
  },
  checked: {
    fontFamily: font.openSansSemiBold,
  },
  checkboxContainer: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
});
