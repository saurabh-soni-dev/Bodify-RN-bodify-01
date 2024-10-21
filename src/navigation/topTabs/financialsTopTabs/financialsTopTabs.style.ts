import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 38,
    borderBottomWidth: 1,
    borderBottomColor: color.secondaryText,
  },
  tabItemContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    height: 38,
    marginRight:13
  },
  tabItemWrapper: {
    justifyContent: 'flex-end',
    borderBottomWidth: 4,
    borderBottomColor: color.primaryBG,
  },
  tabItemView: {
    paddingBottom: 6,
  },
  tabItemText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    color: color.primaryText,
  },
});
