import colors from '@theme/color';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  lineView: {
    flex: 1,
    height: 1,
    backgroundColor: colors.lightgray,
  },
  labelStyle: {
    width: 'auto',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 16,
    color: colors.lightgray,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});
