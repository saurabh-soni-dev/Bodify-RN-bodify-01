import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 98,
    backgroundColor: color.lightgray,
    borderRadius: 5,
  },
  selectedContainer: {
    borderWidth: 3,
    borderColor: color.primary,
    borderRadius: 6,
  },
  backgroundImageContainer: {
    height: 98,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  titleView: {
    height: 43,
    backgroundColor: color.transparentColorOne,
    padding: 7,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingBottom: 0,
  },
  titleText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.8,
    color: color.secondaryBG,
    textAlign: 'left',
    textTransform: 'capitalize',
  },
});
