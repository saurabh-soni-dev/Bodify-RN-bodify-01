import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: color.primaryBG,
  },
  headingText: {
    fontFamily: font.workSansMedium,
    fontSize: 20,
    lineHeight: 23.46,
    color: color.primaryText,
    marginBottom: 9.55,
  },
});
