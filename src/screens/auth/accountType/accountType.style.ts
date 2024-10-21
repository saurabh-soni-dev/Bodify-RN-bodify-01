import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
    paddingHorizontal: 20,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 80,
  },
  typeLogo: {
    width: 156,
    height: 156,
  },
  border: {
    borderWidth: 4,
    borderRadius: 10,
    borderColor: color.primaryBG,
  },
  borderActive: {
    borderColor: color.primary,
  },
  typeLabel: {
    fontSize: 15,
    lineHeight: 20,
    color: color.primaryText,
    fontFamily: font.openSansSemiBold,
    textAlign: 'center',
    marginTop: 12,
  },
  activeTypeLabel: {
    fontFamily: font.openSansBold,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  headerContainerStyle: {
    paddingBottom: 0,
  },
  btnContainerStyle: {
    height: 46,
    width: 257,
  },
});

export default styles;
