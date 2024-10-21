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
  containerView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  dataContainer: {
    flex: 1,
    marginTop: 54,
  },
  rememberLabel: {
    fontSize: 12,
    lineHeight: 16,
    color: color.primaryText,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 16,
    marginHorizontal: 20,
  },
  loginLabel: {
    fontFamily: font.openSansRegular,
    fontWeight: '700',
    color: color.primaryText,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerContainerStyle: {
    paddingBottom: 0,
  },
  inputContainerEmail: {
    marginTop: 0,
  },
  btnContainerStyle: {
    height: 46,
    width: 257,
  },
});

export default styles;
