import {StyleSheet} from 'react-native';
import font from '@theme/font';
import color from '@theme/color';

export const styles = StyleSheet.create({
  container: {
    maxHeight: 268,
    borderRadius: 10,
    backgroundColor: color.secondaryBG,
    marginBottom: 12,
  },
  collapsedView: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  isHeaderColor: {
    backgroundColor: color.deactivatedBG,
  },
  titleView: {
    flex: 1,
  },
  title: {
    fontFamily: font.openSansMedium,
    fontSize: 14,
    lineHeight: 19.07,
    color: color.primaryText,
  },
  description: {
    marginTop: 4,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    color: color.secondaryText,
  },
  iconView: {
    height: 19,
    width: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    borderTopWidth: 1,
    borderTopColor: color.lightgray,
    paddingHorizontal: 20,
    paddingBottom: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
