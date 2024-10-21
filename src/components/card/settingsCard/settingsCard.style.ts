import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  sectionText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.42,
    color: color.primaryText,
    marginBottom: 12,
  },
  settingsContainer: {
    marginBottom: 24,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
  },
  settingCard: {
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
  },
  settingButton: {
    height: 74,
    justifyContent: 'center',
    borderTopWidth: 0,
    borderTopColor: color.secondaryBG,
  },
  separatorLine: {
    borderTopWidth: 1,
    borderTopColor: color.lightgray,
  },
  settingDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  settingTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingTitle: {
    marginLeft: 13,
    fontFamily: font.openSansSemiBold,
    fontSize: 13,
    lineHeight: 17.7,
    color: color.primaryText,
  },
});
export default styles;
