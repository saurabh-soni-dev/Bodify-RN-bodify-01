import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  KeyboardView: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  headerStyle: {
    paddingHorizontal: 20,
  },
  scrollView: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputBoxStyle: {
    height: 45,
    borderColor: color.lightgray,
    backgroundColor: color.secondaryBG,
  },
  inputContainerStyle: {
    marginBottom: 0,
    marginTop: 6,
  },
  labelViewStyle: {
    marginBottom: 10,
  },
  labelStyle: {
    fontFamily: font.openSansMedium,
    fontSize: 15,
    color: color.primaryText,
  },
  dropDownView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  leftFlex: {
    flex: 1,
    marginRight: 10,
  },
  rightFlex: {
    flex: 1,
    marginLeft: 10,
  },
  mainViewStyle: {
    marginTop: 0,
  },
  equipmentMainView: {
    marginTop: 16,
  },
  containerStyle: {
    height: 48,
    borderWidth: 1,
    backgroundColor: color.secondaryBG,
    borderRadius: 8,
    borderColor: color.lightgray,
  },
  manageDropDown: {
    marginRight: 8,
  },
  imageRowViewMain: {
    // marginTop: 24,
  },
  imageText: {
    fontSize: 13,
    fontFamily: font.openSansSemiBold,
    fontWeight: '600',
    lineHeight: 22,
    color: color.primaryText,
    marginBottom: 12,
  },
  videoPlayer: {
    borderRadius: 5,
    height: 198,
    width: 353,
  },
  crossIcon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 15,
    top: 45,
    backgroundColor: color.primaryText,
  },
  videoUploadContanier: {
    backgroundColor: color.deactivatedBG,
    borderRadius: 5,
    height: 198,
    width: '100%',
  },
  uploadTextRegular: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    fontFamily: font.openSansRegular,
    color: color.secondaryText,
  },
  coachInstructionInput: {
    marginTop: 20,
  },
  coachInstructionInputStyle: {
    borderColor: color.lightgray,
    height: 121,
    maxHeight: 121,
    paddingTop: 10,
    alignItems: 'flex-start',
  },
  btnContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    backgroundColor: color.primaryBG,
  },
  bottonView: {
    width: 257,
    height: 46,
  },
  inputLabelStyle: {
    fontFamily: font.workSansMedium,
    fontSize: 15,
    color: color.primaryText,
  },
  inputContenerStyle: {
    marginHorizontal: 20,
  },
  dropDownMainViewStyle: {
    marginLeft: 0,
    marginRight: 0,
  },
  errorLabelStyle: {
    marginTop: 121,
  },
  uploadCardContainer: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  uploadButton: {
    backgroundColor: color.primary,
    alignSelf: 'flex-start',
    paddingHorizontal: 18,
    paddingVertical: 6.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default styles;
