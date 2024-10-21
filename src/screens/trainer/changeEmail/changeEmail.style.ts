import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  containerViewStyle: {
    paddingHorizontal: 0,
  },
  headerContainerStyle: {
    paddingHorizontal: 20,
    marginBottom: 0,
  },
  headerDescriptionText: {
    marginTop: 6,
    paddingLeft: 51,
    paddingRight: 20,
    fontSize: 12,
    fontFamily: font.openSansRegular,
    lineHeight: 18,
    color: color.primaryText,
  },
  inputContentContainers: {
    marginTop: 33,
    flex: 1,
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  emailInputStyle: {
    marginBottom: 2,
  },
  inputContainerStyle: {
    backgroundColor: color.primaryBG,
    borderWidth: 0,
    paddingHorizontal: 0,
  },
  inputStyle: {
    color: color.primaryText,
    lineHeight: 14,
    fontSize: 13,
    fontWeight: '400',
    fontFamily: font.openSansRegular,
  },
  verificationInputContainer: {
    marginTop: 0,
  },
  verificationTextInput: {
    color: color.primaryText,
    fontSize: 13,
  },
  createPackagesBtnStyle: {
    width: 257,
    height: 47,
    borderRadius: 71,
    alignSelf: 'center',
  },
  createPackagesStyle: {
    color: color.secondaryBG,
    fontSize: 14,
    lineHeight: 19.07,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
  },
  btnViewStyle: {
    marginTop: 44,
  },
  confirmLableStyle: {
    color: color.secondaryBG,
  },
  confirmBtnStyle: {
    backgroundColor: color.primary,
    marginHorizontal: 60,
  },
  descriptionText: {
    marginLeft: 51,
    marginRight: 39,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: color.primaryText,
  },
  contentContainer: {
    flexGrow: 1,
  },
  btnView: {
    paddingVertical: 30,
    backgroundColor: color.primaryBG,
  },
  btnContainer: {
    width: 114,
    backgroundColor: color.primary,
    height: 39,
    borderRadius: 10,
  },
  nameTextStyle: {
    fontSize: 14,
    color: color.secondaryBG,
    lineHeight: 19,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
  },
  inputContainer: {
    backgroundColor: color.secondaryBG,
  },
  inputErrorLabel: {
    marginTop: 60,
  },
  inputOtpErrorLabel: {
    marginTop: 80,
  },
});
