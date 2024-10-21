import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
    paddingHorizontal: 20,
  },
  mainContainer: {
    flex: 1,
  },
  keyBoardView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  inputContentContainers: {
    marginTop: 2,
    flex: 1,
    marginBottom: 50,
  },
  inputContainerStyle: {
    backgroundColor: color.buttonBG,
    borderColor: color.secondaryText,
    borderWidth: 1,
  },
  inputStyle: {
    color: color.primaryText,
    lineHeight: 16,
    fontSize: 13,
    fontWeight: '400',
    fontFamily: font.openSansRegular,
  },
  containerStyle: {
    marginTop: 12,
  },
});
