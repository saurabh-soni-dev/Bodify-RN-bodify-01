import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primaryBG,
  },
  headerContainerStyle: {
    paddingTop: 14,
    marginBottom: 0,
    marginTop: 0,
  },
  contentContainerStyle: {
    marginTop: 7,
    flexGrow: 1,
    rowGap: 12,
  },
  footerSpace: {
    marginBottom: 135,
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.secondaryBG,
    height: 92,
    paddingTop: 21,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  cancelBtnStyle: {
    width: 160,
    marginRight: 10,
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
    width: 160,
    marginLeft: 10,
  },
  createPackagesStyle: {
    color: color.priceTagBG,
    fontSize: 14,
    lineHeight: 16.42,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
  },
  searchInputStyle: {
    fontSize: 10,
    fontFamily: font.openSansRegular,
    color: color.priceTagBG,
  },
  searchStyle: {
    marginBottom: 18,
    marginTop: 31,
  },
});
