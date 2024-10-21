import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 0,
    marginBottom:0
  },
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  mainContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  footerSpace: {
    marginBottom: 30,
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
});
