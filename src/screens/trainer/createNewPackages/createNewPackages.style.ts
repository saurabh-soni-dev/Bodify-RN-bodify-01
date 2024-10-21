import color from '@theme/color';
import font from '@theme/font';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainerStyle: {
    paddingTop: 17,
    paddingBottom: 25,
    marginBottom: 0,
    marginTop: 0,
  },
  inputContainer: {
    marginTop: 0,
    marginBottom: 15,
  },
  inputContainerStyle: {
    backgroundColor: color.secondaryBG,
    borderWidth: 0,
    height: 36
  },
  desInputContainerStyle: {
    backgroundColor: color.secondaryBG,
    borderWidth: 0,
    height: 163,
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  thumbnailView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addedView: {
    marginTop: 15,
  },
  headingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addBtnText: {
    marginLeft: 5,
    fontFamily: font.openSansRegular,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 17.6,
    color: color.primary,
  },
  contentContainerStyle: {
    marginTop: 15,
    flexGrow: 1,
    rowGap:12
  },
  footerSpace: {
    marginBottom: 30,
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primaryBG,
    height: 92,
    paddingHorizontal: 20,
    paddingTop: 21,
    paddingBottom: 25,
  },
  cancelBtnStyle: {
    width: 167,
    marginRight: 20,
    borderColor: color.primary,
  },
  cancelBtnText: {
    color: color.primary,
    fontSize: 14,
    lineHeight: 16.42,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
  },
  createPackagesBtnStyle: {
    width: 167,
  },
  createPackagesStyle: {
    color: color.secondaryBG,
    fontSize: 14,
    lineHeight: 16.42,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
  },
  inputLabelStyle: {
    fontSize: 15,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    fontWeight: '500',
  },
  lable: {
    fontFamily: font.openSansRegular,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 17.6,
    color: color.primaryText,
  },
  AddProgramLable: {
    fontFamily: font.openSansRegular,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 17.6,
    color: color.primaryText,
    flex: 1,
  },
  uploadCardContainer: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  uploadImageStyle: {
    width: 84,
  },
  uploadImageRatioStyle: {
    width: 166,
  },
});
