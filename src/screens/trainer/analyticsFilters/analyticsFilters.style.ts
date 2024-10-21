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
    backgroundColor: color.primaryBG,
    paddingHorizontal: 20,
  },
  filterContainer: {
    flex: 1,
    marginTop: 21,
  },
  row: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: color.lightgray,
  },
  titleText: {
    fontFamily: font.workSansMedium,
    fontSize: 14,
    color: color.primaryText,
  },
  valueText: {
    marginTop: 15,
    paddingBottom: 8,
    fontFamily: font.openSansRegular,
    fontSize: 12,
    color: color.secondaryText,
  },
  btnContainer: {
    marginVertical: 30,
    paddingHorizontal: 48,
  },
});
