import color from '@theme/color';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: color.primaryBG,
  },
  keyBoard: {
    flex: 1,
  },
});
