import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  lable: {
    fontFamily: font.openSansSemiBold,
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 22,
    color: color.primaryText,
  },
  optionalLable: {
    fontSize: 15,
    marginBottom: 8,
    lineHeight: 17.6,
    fontWeight: '300',
    fontFamily: font.openSansRegular,
    color: color.primaryText,
  },
  lableSecondView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.primaryBG,
    zIndex: 1,
    position: 'absolute',
    paddingHorizontal: 4,
    marginLeft: 7,
    height: 18,
    top: -9,
  },
  lableSecondIconView: {
    paddingLeft: 2.4,
    paddingRight: 4.4,
  },
  lableIcon: {
    marginRight: 4.4,
    alignItems: 'center',
    top: 1,
  },
  lableSecond: {
    fontSize: 13,
    fontFamily: font.openSansSemiBold,
    fontWeight: '600',
    color: color.primaryText,
    lineHeight: 17.7,
  },
  inputContainer: {
    height: 46,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.lightgray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  inputStyle: {
    flex: 1,
    fontFamily: font.openSansRegular,
    fontSize: 12,
    color: color.primaryText,
    fontWeight: '400',
  },
  leftIconView: {
    marginRight: 10,
  },
  textBtnText: {
    fontFamily: font.openSansSemiBold,
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 15.25,
    color: color.primary,
  },
  errorLabel: {
    fontSize: 12,
    lineHeight: 16,
    color: color.warning,
    fontFamily: font.openSansRegular,
    marginTop: 50,
    fontWeight: '400',
    position: 'absolute',
  },
  lableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dropDownStyle: {
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
  },
});
