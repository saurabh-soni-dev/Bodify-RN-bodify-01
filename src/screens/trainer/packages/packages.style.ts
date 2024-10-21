import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainerStyle: {
    paddingTop: 13,
    paddingBottom: 10,
    backgroundColor: color.secondaryBG,
  },
  screenBackgroundContainerStyle: {
    backgroundColor: color.secondaryBG,
  },
  searchBarStyle: {marginTop: 10},
  contentContainerStyle: {
    marginTop: 4,
    flexGrow: 1,
  },
  footerSpace: {
    marginBottom: 30,
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.secondaryBG,
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
    fontFamily: font.workSansRegular,
    fontWeight: '400',
  },
  createPackagesBtnStyle: {
    width: 167,
  },
  createPackagesStyle: {
    color: color.secondaryText,
    fontSize: 14,
    lineHeight: 16.42,
    fontFamily: font.workSansRegular,
    fontWeight: '400',
  },
});

export default styles;
