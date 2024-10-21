import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  mainContainer: {
    flex: 1,
  },
  mainViewStyle: {
    marginTop: 65,
  },
  lableStyle: {
    marginBottom: 12,
  },
  placeholderStyle: {
    fontFamily: font.workSansRegular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.42,
  },
  dropdownContainerStyle: {
    height: 61,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.lightgray,
    backgroundColor: color.primaryBG,
    paddingLeft: 13,
    paddingRight: 18,
    paddingTop: 9,
    paddingBottom: 12,
  },
  paypalText: {
    fontFamily: font.workSansRegular,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 17.6,
    color: color.primaryText,
    marginTop: 26,
    textAlign: 'center',
  },
  paypalBtn: {
    marginTop: 12,
    height: 45,
    // width: 229,
    borderRadius: 5,
    paddingHorizontal: 20.5,
    paddingVertical: 10.5,
    backgroundColor: color.pacificBlue,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  paypalBtnText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.34,
    color: color.secondaryBG,
    marginLeft: 10,
  },
  deleteIcon: {
    marginLeft: 14.5,
  },
});
