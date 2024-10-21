import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  headingText: {
    marginTop: 20,
    fontFamily: font.workSansSemiBold,
    fontSize: 28,
    color: color.primaryText,
    lineHeight: 32.84,
  },
  desText: {
    fontFamily: font.openSansRegular,
    fontSize: 12,
    color: color.primaryText,
    lineHeight: 16.34,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  dataContainer: {
    flex: 1,
    marginTop: 28,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  rememberLabel: {
    fontSize: 12,
    lineHeight: 16,
    color: color.primaryText,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  loginLabel: {
    fontFamily: font.openSansRegular,
    fontWeight: '700',
    color: color.primaryText,
    textDecorationLine: 'underline',
  },
  inputContainer: {
    marginTop: 0,
  },
  headerContainerStyle: {
    paddingBottom: 0,
  },
  headingDesTextStyle: {
    marginTop: 1,
  },
  btnContainerStyle: {
    height: 46,
    width: 257,
  },
});

export default styles;
