import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainerStyle: {
    paddingTop: 29,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  screenBackgroundStyle: {
    flex: 1,
    backgroundColor: color.secondaryBG,
  },
  inputContentContainers: {
    flex: 1,
    marginTop: 26,
  },
  contentContainerStyle: {
    marginTop: 7,
    flexGrow: 1,
  },
  bottonView: {
    marginBottom: 30,
    alignSelf: 'center',
    width: 257,
  },
});
