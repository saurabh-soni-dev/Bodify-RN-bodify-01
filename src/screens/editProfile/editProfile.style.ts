import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  keyView: {
    flex: 1,
  },
  containerViewStyle: {
    paddingHorizontal: 0,
  },
  lableStyle: {
    fontFamily: font.openSansSemiBold,
  },
  formView: {
    paddingHorizontal: 20,
    marginTop: 18,
  },
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  headerContainerStyle: {
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 16,
  },
  scrollContentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  ContentContainers: {
    flex: 1,
    marginHorizontal: 20,
  },
  keyBoardView: {
    flex: 1,
  },
  bottonView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.secondaryBG,
    height: 91,
  },
  backgroundImageStyle: {
    height: 115,
    width: '100%',
  },
  userViewImage: {
    height: 73,
    width: 73,
    borderRadius: 50,
    backgroundColor: color.secondaryBG,
    marginTop: -35,
    marginLeft: 20,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    height: 71,
    width: 71,
    borderRadius: 50,
  },
  gallaryImage: {
    position: 'absolute',
    right: -8,
    top: 30,
    zIndex: 1,
  },
  selectGallerystyle: {
    position: 'absolute',
    right: 12,
    top: 7,
  },
  inputContainerStyle: {
    backgroundColor: color.secondaryBG,
    height: 48,
    borderRadius: 8,
    borderWidth: 0,
  },
  inputAboutContainerStyle: {
    backgroundColor: color.secondaryBG,
    height: 91,
    borderRadius: 8,
    borderWidth: 0,
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  centnerInputStyle: {
    fontFamily: font.openSansRegular,
    fontSize: 12,
  },
  mainInputStyle: {
    marginVertical: 0,
  },
  dropDownContainerStyle: {
    backgroundColor: color.secondaryBG,
    height: 48,
    borderRadius: 8,
  },
  dropDownStyle: {
    // marginHorizontal: 15,
    marginTop: 15,
  },
  dropDownMarginStyle: {
    marginHorizontal: 15,
    marginTop: 25,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  borderClipText: {
    textTransform: 'lowercase',
    color: color.primary,
  },
  borderClipStyle: {
    borderColor: color.primary,
    marginBottom: 10,
    marginLeft: 0,
    marginHorizontal: 10,
  },
  borderClipColorText: {
    textTransform: 'lowercase',
    color: color.secondaryBG,
  },
  borderClipColorStyle: {
    borderColor: color.primary,
    marginBottom: 10,
    marginLeft: 0,
    marginHorizontal: 10,
    backgroundColor: color.primary,
  },
  textStyle: {
    fontFamily: font.workSansRegular,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    color: color.primary,
  },
  containerStyles: {
    marginTop: 0,
    marginBottom: 15,
  },
  containerStylesSocial: {
    marginTop: 0,
    marginBottom: 17,
  },
  socialHeadingText: {
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: color.primaryText,
    marginTop: 5,
    marginBottom: 15,
  },
  btnView: {
    paddingVertical: 30,
    alignItems: 'center',
    backgroundColor: color.primaryBG,
  },
  createPackagesBtnStyle: {
    width: 257,
  },
  createPackagesStyle: {
    fontSize: 14,
    lineHeight: 19.07,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
  },
  expertiseView: {
    marginTop: 7,
    marginBottom: 16,
  },
  containerStyleLocation: {
    marginTop: 19,
  },
  firstNameErrorStyle: {
    marginTop: 78,
  },
});

export default styles;
