import color from '@theme/color';
import font from '@theme/font';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerViewStyle: {
    paddingHorizontal: 0,
  },
  containerStyle: {
    height: 40,
    borderRadius: 2,
    padding: 10,
    backgroundColor: color.secondaryBG,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  placeholderStyle: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20.43,
    color: color.primaryText,
  },
  listView: {
    marginTop: 6,
    paddingHorizontal: 11,
    paddingVertical: 12,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
  },
  graphContainerStyle: {
    marginTop: 12,
    marginBottom: 0,
  },
  listContainer: {
    flex: 1,
    marginTop: 13,
    paddingBottom: 20,
  },
  contentContainerStyle: {
    flexGrow: 1,
    rowGap: 12,
    paddingBottom: 20,
  },
  chartLable: {
    width: 60,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10.5,
    lineHeight: 14.3,
    top: -6,
    color: color.primaryText,
  },
});
