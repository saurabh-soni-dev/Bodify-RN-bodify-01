import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headingText: {
    fontFamily: font.workSansMedium,
    fontSize: 20,
    lineHeight: 23.46,
    color: color.primaryText,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainerStyle: {
    paddingBottom: 30,
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalInnerContainer: {
    height: 284,
    width: 315,
    maxHeight: 284,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
  },
  imageStyle: {
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 14,
  },
  modalTitleText: {
    textAlign: 'center',
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19.07,
    color: color.primaryText,
  },
  modalDesText: {
    marginTop: 12,
    paddingHorizontal: 46,
    textAlign: 'center',
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.07,
    color: color.secondaryText,
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 28,
    marginBottom: 18,
  },
  btnContainer: {
    width: 114,
    backgroundColor: color.warning,
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
  confirmBtnStyle: {
    backgroundColor: color.warning,
    marginRight: 5,
  },
  deletCancelBtnStyle: {
    marginLeft: 5,
  },
  deleteConfirmBtnStyle: {
    color: color.primaryText,
  },
  cancelLableStyle: {
    color: color.primaryText,
  },
  cancelBtnStyle: {
    backgroundColor: color.primary,
    marginLeft: 5,
  },
  btnViewStyle: {
    marginTop: 44,
  },
  labelHeaderStyle: {
    fontSize: 20,
    fontFamily: font.openSansRegular,
    lineHeight: 23,
  },
  logoutConfirmBtnStyle: {
    marginRight: 5,
  },
});

export default styles;
