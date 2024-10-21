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
  inputContainer: {
    width: '50%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  inputRight: {
    marginLeft: 10,
    marginTop: 0,
  },
  inputLeft: {
    marginRight: 10,
    marginTop: 0,
  },
  dataContainer: {
    flex: 1,
    marginTop: 53,
  },
  buttonContainer: {
    paddingVertical: 30,
    alignItems: 'center',
  },
  privacyPolicyContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 20,
  },
  description: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: color.primaryText,
    textAlign: 'left',
    marginLeft: 10,
    width: '65%',
    marginTop: -4,
  },
  policyLabel: {
    fontFamily: font.openSansRegular,
    fontWeight: '700',
    color: color.primaryText,
    textDecorationLine: 'underline',
  },
  headerContainerStyle: {
    paddingBottom: 0,
  },
  btnContainerStyle: {
    height: 46,
    width: 257,
  },
  calContainer: {
    marginBottom: 31,
  },
});

export default styles;
