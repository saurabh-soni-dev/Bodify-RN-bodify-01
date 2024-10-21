import color from '@theme/color';
import font from '@theme/font';
import {
  percentageHeight,
  percentageWidth,
} from '@utility/functions/dimensionsScale';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  searchBarContainer: {
    marginTop: 34,
    marginBottom: 0,
  },
  searchView: {
    height: 38,
    backgroundColor: color.secondaryBG,
    borderWidth: 1,
    borderColor: color.lightgray,
  },
  addIconContainerStyle: {
    marginLeft: 7,
    backgroundColor: color.primary,
  },
  filterIconContainerStyle: {
    marginLeft: 7,
  },
  inputStyle: {
    color: color.primaryText,
  },
  listView: {
    flex: 1,
    marginTop: 20,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 20,
    rowGap: 12,
  },
  emptyContainer: {
    flexGrow: 1,
    backgroundColor: color.paleLavender,
    // height: 514,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  emptyText: {
    fontSize: percentageHeight(1.4),
    color: color.primaryText,
    lineHeight: 16,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: percentageHeight(4.1),
    marginTop: percentageHeight(1.8),
  },
  btnContainer: {
    height: percentageHeight(4.5),
    width: percentageWidth(42),
  },
  btnText: {
    fontSize: percentageHeight(1.8),
    color: color.secondaryBG,
    lineHeight: percentageHeight(2),
    fontFamily: font.workSansRegular,
    fontWeight: '600',
  },
  footer: {
    marginBottom: 30,
  },
});
