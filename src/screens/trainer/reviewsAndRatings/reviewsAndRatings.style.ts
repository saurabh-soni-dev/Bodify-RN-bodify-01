import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenBackgroundContainerStyle: {
    backgroundColor: color.primaryBG,
    paddingHorizontal: 0,
  },
  reviewView: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  reviewOverview: {
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
  headerStyle: {
    marginHorizontal: 20,
  },
  programCardStyle: {
    height: 170,
    marginTop: 24,
    marginHorizontal: 17,
    marginBottom: 15,
  },
  ratingViewStyle: {
    backgroundColor: color.deactivatedBG,
    height: 141,
    marginHorizontal: 20,
    borderRadius: 5,
    paddingLeft: 18,
    paddingRight: 25,
    justifyContent: 'center',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  starContainer: {
    flexDirection: 'row',
    width: 73,
    marginRight: 2,
  },
  ratingBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 180,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: color.deepPurpleColor,
  },
  progressBar: {
    height: 12,
    backgroundColor: '#9575CD',
    borderRadius: 5,
  },
  percentageText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: font.openSansRegular,
    fontWeight: '500',
    color: color.primary,
  },
  percentageContainer: {
    alignSelf: 'center',
    width: 40,
  },
});
