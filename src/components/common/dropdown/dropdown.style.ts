import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  sheetContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  doneLabelStyle: {
    fontFamily: font.openSansMedium,
    fontSize: 14,
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: color.midnightBlue,
  },
  selectOptionBottomSheetStyle: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    color: color.secondaryText,
  },
  selectActiveOptionBottomSheetStyle: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    color: color.black,
  },
  bottomSheetList: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  mainView: {
    flexDirection: 'column',
  },
  label: {
    fontFamily: font.openSansSemiBold,
    fontSize: 13,
    fontWeight: '600',
    color: color.primaryText,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    height: 36,
    borderRadius: 4,
    paddingHorizontal: 9,
    paddingVertical: 9,
    backgroundColor: color.lightgray,
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholderText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16.34,
    fontWeight: '400',
    fontFamily: font.openSansRegular,
    color: color.secondaryText,
  },
  valueText: {
    fontFamily: font.openSansSemiBold,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16.34,
    flex: 1,
    color: color.primaryText,
  },
  itemDivider: {
    height: 1,
    backgroundColor: color.lightgray,
  },
  itemRow: {
    paddingHorizontal: 11,
    paddingVertical: 12,
    backgroundColor: color.secondaryBG,
  },
  titleText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: color.primaryText,
  },
  innerLable: {
    color: color.lightgray,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: font.workSansRegular,
    marginBottom: 6,
  },
  valueView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIconStyle: {
    height: 36,
    width: 36,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 13,
    backgroundColor: color.primaryText,
  },
  filterRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  openDropdown: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: 150,
    zIndex: 1,
    backgroundColor: color.secondaryBG,
  },
  arrowView: {
    height: 24,
    width: 24,
  },
  innerLableView: {
    flex: 1,
  },
  isMatch: {
    fontWeight: '600',
    fontFamily: font.openSansSemiBold,
  },
  dropdownView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorLabel: {
    fontSize: 10,
    color: color.warning,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
  },

  handleStyle: {
    height: 0,
    paddingTop: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: color.secondaryBG,
  },
  handleIndicatorStyle: {
    display: 'none',
  },
  backgroundStyle: {
    backgroundColor: color.secondaryBG,
  },
});
export default style;
