import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    flex: 1,
    fontFamily: font.openSansSemiBold,
    fontSize: 16,
    color: color.primaryText,
  },
  addNewSessionBtn: {
    height: 26,
    borderRadius: 5,
    backgroundColor: color.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: font.openSansRegular,
    fontSize: 14,
    color: color.secondaryBG,
    lineHeight: 16,
  },
  sessionList: {
    marginTop: 18,
    rowGap: 10,
  },
  sessionCard: {
    paddingLeft: 10,
    paddingVertical: 13,
    borderRadius: 5,
    backgroundColor: color.secondaryBG,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionTitle: {
    flex: 1,
    fontFamily: font.openSansRegular,
    fontSize: 16,
    color: color.primaryText,
    textTransform: 'capitalize',
  },
  hamburgBtn: {
    paddingHorizontal: 10,
  },
});
