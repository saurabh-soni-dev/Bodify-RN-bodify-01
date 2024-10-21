import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  payoutView: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  nextPayoutView: {
    flex: 1,
    backgroundColor: color.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.lightgray,
  },
  nextTitleText: {
    fontSize: 14,
    fontFamily: font.openSansSemiBold,
    lineHeight: 19.07,
    color: color.secondaryBG,
  },
  nextAmountText: {
    marginTop: 10,
    fontSize: 25,
    fontFamily: font.openSansSemiBold,
    lineHeight: 34.05,
    color: color.secondaryBG,
  },
  lastPayoutView: {
    flex: 1,
    backgroundColor: color.secondaryBG,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  lastTitleText: {
    fontSize: 14,
    fontFamily: font.openSansMedium,
    lineHeight: 19,
    color: color.primaryText,
    fontWeight: '600',
  },
  lastAmountText: {
    marginTop: 10,
    fontSize: 25,
    fontFamily: font.openSansSemiBold,
    lineHeight: 34.05,
    color: color.primaryText,
  },
  nextDateTitleText: {
    marginTop: 5,
    fontSize: 10,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    lineHeight: 13.62,
    color: color.secondaryBG,
  },
  lastDateTitleText: {
    flex: 1,
    marginLeft: 5,
    fontSize: 10,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    lineHeight: 13.62,
    color: color.primaryText,
  },
  nextDateText: {
    fontSize: 10,
    fontFamily: font.openSansRegular,
    fontWeight: '700',
    lineHeight: 13.62,
    color: color.secondaryBG,
  },
  lastDateText: {
    fontSize: 10,
    fontFamily: font.openSansRegular,
    fontWeight: '700',
    lineHeight: 13.62,
    color: color.primary,
  },
  chartContainer: {
    height: 247,
    maxHeight: 247,
    padding: 10,
  },
  chartTitle: {
    marginBottom: 0,
  },
  dropdownCotainerStyle: {
    marginTop: 9,
  },
  progressView: {
    // flex: 1,
    marginTop: 5,
    flexDirection: 'row',
  },
  connectBtnView: {
    marginTop: 2,
    backgroundColor: color.skyBlue,
    borderRadius: 10,
    padding: 14,
    paddingBottom: 12,
  },
  btnTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connectToPaypalText: {
    marginTop: 14,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.07,
    color: color.primaryText,
  },
  btnTitleText: {
    marginLeft: 12.05,
    fontFamily: font.openSansSemiBold,
    fontSize: 16,
    lineHeight: 21.79,
    color: color.midnightBlue,
  },
  paypalBtn: {
    marginTop: 19,
    height: 32,
    width: 185,
    borderRadius: 5,
    backgroundColor: color.pacificBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paypalBtnText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.34,
    color: color.secondaryBG,
    marginLeft: 10,
  },
  transactionHeadingView: {
    marginTop: 21,
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionHeadingText: {
    flex: 1,
    fontFamily: font.openSansMedium,
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 19.94,
    color: color.primaryText,
  },
  filterBtn: {
    height: 36,
    width: 36,
    borderRadius: 3,
    backgroundColor: color.primaryText,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionContainer: {
    flex: 1,
    marginTop: 12,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 20,
    rowGap: 12,
  },
});

export default styles;
