import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cancelBtn: {
    borderRadius: 5,
    marginLeft: 10,
  },
  cancelContainer: {
    flex: 1,
  },
  saveLabel: {
    color: color.black,
  },
  saveBtn: {
    borderRadius: 5,
    backgroundColor: color.buttonBG,
  },
  saveContainer: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 35,
  },
  labelStyle: {
    fontFamily: font.openSansRegular,
    fontSize: 14,
    color: color.black,
    textAlign: 'center',
    marginTop: 7,
  },
  modalContent: {
    marginTop: 20,
    alignItems: 'center',
  },
  modalContainer: {
    height: 250,
    backgroundColor: color.secondaryBG,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: color.transparentColor,
    justifyContent: 'center',
  },
});
