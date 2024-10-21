import color from '@theme/color';
import font from '@theme/font';
import {
  percentageHeight,
  percentageWidth,
} from '@utility/functions/dimensionsScale';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  headerContainerStyle: {
    marginTop: percentageHeight(1.3),
    marginBottom: percentageHeight(0),
  },
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
    paddingHorizontal: percentageHeight(2),
  },
  contentContainer: {
    // flex: 1,
  },
  inputContainerStyle: {
    height: percentageHeight(18.5),
    alignItems: 'flex-start',
    paddingTop: percentageHeight(1.1),
    backgroundColor: color.secondaryBG,
    borderWidth: percentageHeight(0),
  },
  createCodeInputContainerStyle: {
    borderStyle: 'dashed',
    borderColor: color.primary,
    borderWidth: 1,
    backgroundColor: color.secondaryBG,
    marginTop: percentageHeight(0),
    height: percentageHeight(5),
  },
  createCodeInputStyle: {
    fontFamily: font.openSansRegular,
    fontWeight: '700',
    fontSize: percentageHeight(2.3),
    color: color.primary,
    letterSpacing: percentageHeight(0.9),
    textAlign: 'center',
  },
  createCodeContainerStyle: {
    marginTop: percentageHeight(4),
    marginBottom: percentageHeight(1),
  },
  containerStyle: {
    marginTop: 48,
    // marginTop: percentageHeight(5),
  },
  containerStyleRef: {
    marginTop: percentageHeight(2.9),
    marginBottom: percentageHeight(2.2),
  },
  inputContainer: {
    backgroundColor: color.secondaryBG,
    borderWidth: percentageHeight(0),
    height: percentageHeight(5.2),
  },
  inputStyle: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: percentageHeight(1.9),
    lineHeight: percentageHeight(2.6),
    color: color.primaryText,
  },
  containerView: {
    marginTop: percentageHeight(0),
  },
  btnView: {
    paddingVertical: percentageHeight(3.5),
    backgroundColor: color.primaryBG,
    paddingHorizontal: percentageHeight(2.4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btnContainer: {
    width: percentageWidth(40),
  },
  lableText: {
    color: color.primary,
    marginLeft: 5,
    fontSize: percentageHeight(1.6),
  },
  shareBtn: {
    borderColor: color.primary,
    height: percentageHeight(5.5),
  },
  saveBtn: {
    width: 257,
  },
  copyView: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: percentageHeight(4.6),
    width: 113,
    gap: 6,
    alignItems: 'center',
  },
  copyText: {
    paddingHorizontal: percentageHeight(0.7),
    fontFamily: font.workSansRegular,
    fontWeight: '400',
    fontSize: percentageHeight(1.6),
    lineHeight: percentageHeight(1.6),
    textAlign: 'center',
    color: color.secondaryText,
  },
  btnStyle: {
    width: 257,
    height: percentageHeight(5.2),
  },
  isCopyCode: {
    color: color.primary,
  },
  errorLabelStyle: {
    marginTop: percentageHeight(8.9),
    fontSize: percentageHeight(1.4),
    lineHeight: percentageHeight(2),
  },
  errorLabelCommentStyle: {
    marginTop: percentageHeight(22.6),
  },
  inputLabelStyle: {
    fontSize: percentageHeight(1.5),
    lineHeight: percentageHeight(2.4),
  },
  inputLabelOptionsStyle: {
    fontSize: percentageHeight(1.8),
    lineHeight: percentageHeight(1.8),
  },
  buttonTextStyle: {
    fontSize: percentageHeight(1.6),
    lineHeight: percentageHeight(2.1),
  },
});
