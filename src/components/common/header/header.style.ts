import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: color.primaryBG,
  },
  rightIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  isHasRightText: {
    flex: 0.8,
  },
  backButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 18,
    paddingVertical: 6,
  },
  labelText: {
    fontFamily: font.workSansMedium,
    fontWeight: '400',
    fontSize: 20,
    color: color.primaryText,
    lineHeight: 23.46,
  },
  rightView: {
    flex: 0.2,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 3,
    paddingVertical: 3,
    marginLeft: 10,
  },
  rightText: {
    fontFamily: font.openSansSemiBold,
    fontWeight: '600',
    fontSize: 14,
    color: color.primary,
    textTransform: 'capitalize',
  },
});
