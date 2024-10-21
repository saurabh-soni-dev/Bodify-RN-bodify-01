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
  headerContainer: {
    marginBottom: 18,
  },
  listContainer: {
    flex: 1,
  },
  row: {
    height: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  titleText: {
    fontFamily: font.workSansMedium,
    fontSize: 14,
    color: color.primaryText,
  },
  btnView: {
    paddingVertical: 30,
    backgroundColor: color.primaryBG,
    paddingHorizontal: 48,
  },
});
