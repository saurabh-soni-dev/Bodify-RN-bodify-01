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
    marginTop: 42,
    flex: 1,
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  oldPasswordInputStyle: {
    marginVertical: 0,
  },
  oldInputContainerStyle: {
    backgroundColor: color.secondaryBG,
  },
  newPasswordInputStyle: {
    marginVertical: 0,
    marginTop: 30,
  },
  confirmPasswordInputStyle: {
    marginVertical: 0,
    marginTop: 30,
  },
  inputTextStyle: {
    color: color.primaryText,
    fontSize: 13,
  },
  btnView: {
    paddingVertical: 30,
    backgroundColor: color.primaryBG,
  },
  createPackagesBtnStyle: {
    width: 257,
    height: 47,
    borderRadius: 71,
    alignSelf: 'center',
  },
  createPackagesStyle: {
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
  keyBoardView: {
    flex: 1,
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
  inputErrorLabelStyle: {
    marginTop: 80,
  },
});
