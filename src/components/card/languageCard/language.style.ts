import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: color.lightgray,
    paddingHorizontal: 20,
    paddingVertical: 10.57,
  },
  selectedView: {
    backgroundColor: color.paleLavender,
  },
  title: {
    fontFamily: font.workSansRegular,
    fontSize: 15,
    color: color.primaryText,
    fontWeight: '400',
    lineHeight: 20,
  },
  selectedText: {
    fontWeight: '600',
  },
});
