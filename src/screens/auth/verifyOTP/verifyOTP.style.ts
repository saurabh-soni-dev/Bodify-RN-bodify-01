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
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  otpContainer: {
    marginTop: 28,
  },
  otp: {
    fontFamily: font.openSansBold,
    fontSize: 20,
    lineHeight: 27,
    color: color.primaryText,
  },
  cell: {
    width: 62,
    height: 62,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: color.primaryBG,
    borderColor: color.lightgray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorLabel: {
    marginBottom: 10,
  },
  description: {
    marginTop: 18,
    fontSize: 12,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    lineHeight: 16.34,
    color: color.primaryText,
    flex: 1,
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
    marginBottom: 16,
  },
  loginLabel: {
    fontFamily: font.openSansRegular,
    fontWeight: '700',
    color: color.primaryText,
    textDecorationLine: 'underline',
  },
  headerContainerStyle: {
    paddingBottom: 0,
  },
  btnContainerStyle: {
    width: 257,
    height: 46,
  },
});

export default styles;
