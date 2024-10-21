import color from '@theme/color';
import font from '@theme/font';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.transparentColorOne,
  },
  modalInnerContainer: {
    width: '85%',
    maxHeight: 350,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
    padding: 18,
    alignItems: 'center'
  },
  imageStyle: {
    alignSelf: 'center',
    marginTop: 5,
    height: 55,
    width: 55,
  },
  modalTitleText: {
    marginTop: 14,
    textAlign: 'center',
    fontFamily: font.openSansSemiBold,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19.07,
    color: color.primaryText,
  },
  modalDesText: {
    marginTop: 12,
    textAlign: 'center',
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.07,
    color: color.primaryText,
    paddingHorizontal: 20,
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 18,
    marginBottom: 18,
  },
  btnContainer: {
    flex: 1,
    backgroundColor: color.buttonBG,
    height: 39,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameTextStyle: {
    fontSize: 14,
    color: color.secondaryBG,
    lineHeight: 19,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
  },
});
