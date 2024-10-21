import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  headerContainer: {
    paddingHorizontal: 20,
  },
  headerText: {
    textTransform: 'capitalize',
  },
  mainContainer: {
    flex: 1,
    marginTop: 7,
  },
  listView: {
    backgroundColor: color.secondaryBG,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  arrowView: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    position: 'absolute',
    zIndex: 1,
    right: 15,
    top: 5,
  },
  arrowBtn: {
    height: 25,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainerWeekStyle: {
    flexGrow: 1,
    borderRadius: 5,
  },
  horizontalLine: {
    height: 0.4,
    backgroundColor: color.secondaryText,
  },
  sessionList: {
    marginTop: 35,
    paddingHorizontal: 20,
  },
  sessionMainView: {
    height: 338,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: color.paleLavender,
  },
  emptyListIcon: {
    marginTop: 96,
  },
  sessionsTxtStyle: {
    marginTop: 12,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.34,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
  },
  clipStyleSecond: {
    marginTop: 39,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: color.primary,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  clipTextSecond: {
    fontSize: 15,
    lineHeight: 18,
    marginLeft: 10,
    color: color.secondaryBG,
    fontWeight: '600',
    fontFamily: font.openSansRegular,
  },
  contentContainerStyle: {
    flexGrow: 1,
    borderRadius: 5,
    rowGap: 10,
    paddingBottom: 50,
  },
  rowViewManageButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  saveButtonStyle: {
    width: '90%',
    backgroundColor: color.secondaryBG,
    borderWidth: 1,
    borderColor: color.primary,
  },
  reviewButtonStyle: {
    width: '90%',
    // backgroundColor: color.lightgray,
  },
  saveButtonTextStyle: {
    color: color.primary,
  },
  reviewButtonTextStyle: {
    color: color.primaryText,
  },
  wrapperBg: {
    backgroundColor: color.transparentColorOne,
  },
  bottomMenuSheetContainer: {
    height: 135,
    paddingBottom: 30,
  },
  showBottomCardStyle: {
    height: 45,
    backgroundColor: color.secondaryBG,
    paddingHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: color.buttonBG,
  },
  showOptionBottom: {
    fontSize: 16,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    marginLeft: 6,
    fontWeight: '400',
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  titleText: {
    flex: 1,
    fontFamily: font.openSansSemiBold,
    fontSize: 16,
    color: color.primaryText,
  },
  addNewSessionBtn: {
    height: 26,
    borderRadius: 5,
    backgroundColor: color.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: font.openSansRegular,
    fontSize: 14,
    color: color.secondaryBG,
    lineHeight: 16,
  },
});

export default styles;
