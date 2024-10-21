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
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  footerSpace: {
    marginBottom: 30,
  },
  btnView: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: color.primaryBG,
  },
  createPackagesBtnStyle: {
    height: 46,
    width: 257,
  },
  createPackagesStyle: {
    fontSize: 14,
    lineHeight: 19.07,
    fontFamily: font.openSansSemiBold,
    fontWeight: '600',
  },
  searchBarStyle: {
    marginTop: 0,
  },
  listView: {
    flex: 1,
    marginTop: 18,
  },
});
