import color from '@theme/color';
import font from '@theme/font';
import {
  percentageHeight,
  percentageWidth,
} from '@utility/functions/dimensionsScale';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerLabelStyle: {
    fontFamily: font.openSansRegular,
    fontSize: percentageHeight(2.3),
  },
  headerContainerStyle: {
    paddingTop: percentageHeight(1.6),
    paddingBottom: percentageHeight(2),
    marginTop: percentageHeight(0),
    backgroundColor: color.primaryBG,
    marginBottom: percentageHeight(0),
  },
  mainContainer: {
    backgroundColor: color.primaryBG,
    flex: 1,
  },
  inputLabelStyle: {
    fontSize: percentageHeight(1.8),
    fontWeight: '500',
    fontFamily: font.openSansRegular,
    color: color.primaryText,
  },
  ProgramNameInputStyle: {
    borderWidth: percentageHeight(0),
    backgroundColor: color.secondaryBG,
    height: percentageHeight(4.3),
  },
  inputTextStyle: {
    padding: percentageHeight(0),
    fontFamily: font.openSansRegular,
    fontSize: percentageHeight(1.5),
    fontWeight: '400',
  },
  inputNameMainStyle: {
    marginBottom: percentageHeight(0),
    marginTop: percentageHeight(0),
  },
  errorLabel: {
    marginTop: percentageHeight(8),
  },
  inputMainStyle: {
    marginBottom: percentageHeight(0),
    marginTop: percentageHeight(1.7),
  },
  rowHorizantal: {
    marginTop: percentageHeight(1.7),
  },
  dropDownRowView: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: percentageHeight(0.5),
  },
  dropDownContainerStyle: {
    flex: 1,
    marginLeft: percentageHeight(0),
    marginRight: percentageHeight(0),
  },
  dropDownLabelTextStyle: {
    fontFamily: font.openSansRegular,
    fontSize: percentageHeight(1.7),
    color: color.primaryText,
    fontWeight: '500',
    letterSpacing: 0.8,
    marginBottom: percentageHeight(1),
  },
  containerStyle: {
    backgroundColor: color.secondaryBG,
    paddingVertical: percentageHeight(0),
    height: percentageHeight(4.2),
  },
  dropDownPlaceholderStyle: {
    color: color.primaryText,
    fontSize: percentageHeight(1.5),
    fontWeight: '400',
  },
  dropDownSpaceManage: {
    width: 21,
  },
  languageView: {
    flex: 1,
  },
  languageLable: {
    fontFamily: font.openSansRegular,
    fontSize: percentageHeight(1.7),
    color: color.primaryText,
    fontWeight: '500',
  },
  languageCard: {
    marginTop: percentageHeight(1),
    flex: 1,
    height: percentageHeight(4.3),
    backgroundColor: color.secondaryBG,
    borderRadius: percentageHeight(0.5),
    paddingLeft: percentageHeight(1),
    paddingRight: percentageHeight(2),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  languagePlaceholder: {
    fontSize: percentageHeight(1.5),
    lineHeight: percentageHeight(1.7),
    fontWeight: '400',
    fontFamily: font.openSansRegular,
    color: color.primaryText,
  },
  valueText: {
    fontFamily: font.openSansSemiBold,
    fontWeight: '600',
    fontSize: percentageHeight(1.5),
    lineHeight: percentageHeight(1.7),
    flex: 1,
    color: color.primaryText,
  },
  imageText: {
    fontSize: percentageHeight(1.8),
    fontWeight: '500',
    lineHeight: percentageHeight(1.8),
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    marginTop: percentageHeight(0.5),
  },
  thumbnailView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadCardContainer: {
    paddingRight: percentageHeight(0),
    paddingLeft: percentageHeight(0),
  },
  uploadImageRatioStyle: {
    width: 164,
  },
  uploadCardTrailerContainer: {
    width: 208,
    height: percentageHeight(10),
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.transparentColorOne,
  },
  modalInnerContainer: {
    width: percentageWidth(80),
    height: percentageHeight(29),
    backgroundColor: color.secondaryBG,
    borderRadius: percentageHeight(1),
    paddingVertical: percentageHeight(2.4),
  },
  imageStyle: {
    alignSelf: 'center',
  },
  modalTitleText: {
    marginTop: percentageHeight(1.5),
    textAlign: 'center',
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: percentageHeight(1.6),
    lineHeight: percentageHeight(2),
    color: color.primaryText,
    paddingHorizontal: percentageHeight(8),
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: percentageHeight(1),
    marginHorizontal: percentageWidth(6),
    marginTop: percentageHeight(4),
  },
  btnContainer: {
    width: 114,
    backgroundColor: color.primary,
    height: percentageHeight(4.7),
    borderRadius: percentageHeight(1),
    marginTop: percentageHeight(0),
    paddingTop: percentageHeight(0),
  },
  btnSolidContainer: {
    width: 114,
    backgroundColor: color.deactivatedBG,
    height: percentageHeight(4.7),
    borderRadius: percentageHeight(1),
    marginTop: percentageHeight(0),
    paddingTop: percentageHeight(0),
  },
  nameTextStyle: {
    fontSize: percentageHeight(1.6),
    color: color.secondaryBG,
    lineHeight: percentageHeight(2),
    fontFamily: font.openSansRegular,
    fontWeight: '600',
  },
  namesSolidButtonTextStyle: {
    fontSize: percentageHeight(1.6),
    color: color.primaryText,
    lineHeight: percentageHeight(2),
    fontFamily: font.openSansRegular,
    fontWeight: '600',
  },
  buttonView: {
    marginTop: percentageHeight(1.8),
    marginBottom: percentageHeight(2.5),
    height: percentageHeight(5.5),
  },
  programDescription: {
    borderWidth: percentageHeight(0),
    backgroundColor: color.secondaryBG,
    height: percentageHeight(14),
    alignItems: 'flex-start',
    paddingTop: percentageHeight(1.2),
    borderRadius: 5,
  },
});

export default styles;
