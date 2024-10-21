import color from '@theme/color';
import font from '@theme/font';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textView: {
    marginRight: 5,
  },
  tag: {
    height: 22,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  tagText: {
    fontFamily: font.openSansMedium,
    fontSize: 12,
    color: color.secondaryBG,
    fontWeight: '500',
    lineHeight: 14,
    textAlign: 'center',
  },
  priceContainer: {
    borderRadius: 17,
    backgroundColor: color.secondaryBG,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    marginRight: 10,
  },
  offerContainer: {
    borderRadius: 17,
    backgroundColor: color.primary,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    marginRight: 10,
  },
  priceImageContainer: {
    borderRadius: 17,
    backgroundColor: color.secondaryBG,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 9,
    marginBottom: 12,
  },
  priceText: {
    fontFamily: font.openSansRegular,
    fontSize: 10,
    paddingRight: 5,
    color: color.primaryText,
    fontWeight: '600',
    lineHeight: 14,
    paddingLeft: 2,
  },
  priceCancelText: {
    fontFamily: font.openSansRegular,
    fontSize: 14,
    color: color.black,
    fontWeight: '600',
    lineHeight: 19,
  },
  priceCancelTextStyle: {
    marginBottom: 6,
    color: color.secondaryBG,
    marginTop: 4,
    fontSize: 12,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    lineHeight: 16,
    textDecorationLine: 'line-through',
  },
  offerText: {
    fontFamily: font.openSansRegular,
    fontSize: 10,
    paddingRight: 5,
    color: color.secondaryBG,
    fontWeight: '600',
    lineHeight: 14,
    paddingLeft: 2,
  },

  backgroundStyleImage: {
    height: 235,
    width: 260,
    marginRight: 20,
  },
  followerShowView: {
    flexDirection: 'row',
    marginTop: 83,
    marginBottom: 8,
    marginLeft: 10,
  },
  blurView: {
    height: 80,
    backgroundColor: color.transparentColor,
    justifyContent: 'center',
    opacity: 1,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: color.secondaryBG,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.08,
    fontFamily: font.openSansRegular,
    width: 175,
    textTransform: 'uppercase'
  },
  durationText: {
    color: color.secondaryBG,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 14,
    fontFamily: font.openSansCondensedMedium,
  },
  nameText: {
    color: color.secondaryBG,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 13.62,
    fontFamily: font.openSansCondensedMedium,
  },
  blurContainer: {
    marginLeft: 10,
  },
  tagLinearColor: {
    height: 22,
    paddingLeft: 8,
    paddingRight: 4,
    paddingVertical: 4,
    flexDirection: 'row',
    width: 82,
  },
  tagTextLinear: {
    fontFamily: font.openSansRegular,
    fontSize: 12,
    color: color.black,
    fontWeight: '500',
    lineHeight: 14,
    marginRight: 4
  },
  priceViewStyle: {
    alignItems: 'center',
    paddingRight: 7
  }
});
export default styles;
