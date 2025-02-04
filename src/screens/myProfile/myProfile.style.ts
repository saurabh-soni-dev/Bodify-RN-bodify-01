import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBarContainer: {
    height: 0,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  bannerImage: {
    height: 115,
    width: '100%',
  },
  profileContainer: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  profileImageView: {
    height: 73,
    width: 73,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: color.priceTagBG,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -36.5,
  },
  profileImage: {
    height: 73,
    width: 73,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: color.priceTagBG,
  },
  editView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 8,
  },
  editText: {
    fontFamily: font.openSansSemiBold,
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 22,
    color: color.primary,
  },
  editIcon: {
    marginLeft: 4,
    height: 16,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileNameView: {
    paddingHorizontal: 20,
    marginVertical: 19,
  },
  nameText: {
    fontFamily: font.workSansMedium,
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 23.46,
    color: color.primaryText,
    textTransform: 'capitalize',
  },
  subscriberText: {
    marginTop: 5,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13.62,
    color: color.primaryText,
  },
  profileInsights: {
    flex: 1,
    backgroundColor: color.buttonBG,
    marginHorizontal: 20,
    height: 115,
    borderRadius: 7,
    paddingLeft: 9,
    paddingTop: 11.69,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  insightItemsRow: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  insightIcon: {
    height: 30.46,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insightText: {
    flex: 1,
    marginLeft: 3,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.34,
    color: color.primaryText,
  },
  insightSpace: {
    marginTop: 7,
  },
  aboutMeView: {
    marginTop: 23.62,
    marginBottom: 21,
    paddingHorizontal: 20,
  },
  aboutMeHeadingText: {
    fontFamily: font.workSansMedium,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 15,
    color: color.primaryText,
    letterSpacing: 0,
  },
  aboutMeText: {
    marginTop: 2.14,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15.96,
    color: color.primaryText,
  },
  crossfitView: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    rowGap: 10,
    columnGap: 10,
  },
  crossfitItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1.05,
    borderColor: color.primary,
    borderRadius: 26,
    alignSelf: 'center',
  },
  selectedCrossfitItem: {
    backgroundColor: color.primary,
  },
  crossfirtText: {
    fontFamily: font.workSansMedium,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'right',
    color: color.primary,
    textTransform: 'capitalize',
  },
  selectedCrossfirtText: {
    color: color.secondaryBG,
  },
  myProgramsView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headingView: {
    flex: 1,
    marginTop: 32.56,
    marginBottom: 16.16,
    flexDirection: 'row',
  },
  myProgramsText: {
    flex: 1,
    fontFamily: font.workSansMedium,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 17.6,
    color: color.primaryText,
  },
  showAllView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: -6,
  },
  showAllText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13.62,
    color: color.primaryText,
  },
  showAllIcon: {
    marginLeft: 5,
    height: 12,
    width: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainerStyle: {
    flexGrow: 1,
    columnGap: 10,
  },
  reviewView: {
    marginTop: 28,
    paddingHorizontal: 20,
  },
  reviewHeadingText: {
    fontFamily: font.workSansRegular,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 17.6,
    color: color.primaryText,
  },
  reviewOverview: {
    marginTop: 10,
    marginBottom: 21,
  },
  overviewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageIcon: {
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewText: {
    fontFamily: font.openSansBold,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'center',
    color: color.primaryText,
    marginHorizontal: 4,
  },
  ratingText: {
    fontFamily: font.openSansMedium,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'center',
    color: color.primaryText,
    marginRight: 4,
  },
  reviewDesText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 12,
    textAlign: 'center',
    color: color.primaryText,
  },
  reviewContentContainerStyle: {
    flexGrow: 1,
    rowGap: 12,
    paddingBottom: 50,
  },
});
