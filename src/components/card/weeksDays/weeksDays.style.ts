import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 11,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  weekName: {
    fontFamily: font.openSansRegular,
    fontSize: 12,
    color: color.primaryText,
  },
  dayWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  dayDivider: {
    flex: 1,
    alignItems: 'flex-start',
  },
  dayView: {
    borderWidth: 1,
    borderColor: color.secondaryText,
    borderRadius: 50,
    height: 29,
    width: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayViewSelected: {
    backgroundColor: color.primary,
    borderRadius: 50,
    height: 29,
    width: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },
  isBorder: {
    borderColor: color.primary,
  },
  dayText: {
    fontFamily: font.openSansRegular,
    fontSize: 16,
    color: color.primaryText,
  },
  dayTextSelected: {
    fontFamily: font.openSansRegular,
    fontSize: 16,
    color: color.secondaryBG,
  },
});
