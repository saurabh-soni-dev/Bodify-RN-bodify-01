import color from '@theme/color';
import font from '@theme/font';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  keyView: {
    flex: 1,
  },
  headingText: {
    marginTop: 20,
    fontFamily: font.workSansSemiBold,
    fontSize: 28,
    color: color.primaryText,
  },
  desText: {
    marginTop: 9,
    fontFamily: font.openSansRegular,
    fontSize: 12,
    color: color.primaryText,
  },
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  keyBoardView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  description: {
    width: '80%',
  },
  socialView: {
    marginTop: 43,
  },
  socialHeadingText: {
    fontFamily: font.openSansSemiBold,
    fontSize: 16,
    color: color.primaryText,
    marginBottom: 12,
  },
  buttonContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    backgroundColor: color.primaryBG,
  },
  inputContainerStyle: {
    height: 91,
    alignItems: 'flex-start',
    paddingTop: Platform.OS == 'ios' ? 10 : 0,
    paddingHorizontal: 17,
  },
  heightDropdown: {
    flex: 1,
  },
  headerContainerStyle: {
    paddingBottom: 0,
  },
  headingDesTextStyle: {
    marginTop: 9,
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 40,
  },
  btnContainerStyle: {
    height: 46,
    width: 257,
  },
  inputViewStyle: {
    marginTop: 49,
  },
  inputView: {
    marginTop: 0,
    marginBottom: 0,
  },
  youtubeContainer: {
    marginTop: 32,
    marginBottom: 0,
  },
  aboutInput: {
    marginTop: 32,
  },
  instagramInputContainer: {
    marginBottom: 32,
  },
  socialInputContainer: {
    height: 48,
  },
  containerStyleLocation: {
    marginTop: 19,
  },
  containerStyleEducation: {
    marginTop: 0,
    marginBottom: 19,
  },
  errorLabelStyle: {
    marginTop: 94,
  },
  locContainer: {
    marginTop: 19,
    marginBottom: 0,
  },
});

export default styles;
