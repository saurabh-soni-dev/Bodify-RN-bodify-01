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
    marginTop: 20,
    alignSelf: 'flex-start',
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
    marginRight: 11,
  },
  priceImageContainer: {
    borderRadius: 17,
    backgroundColor: color.secondaryBG,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11,
    paddingVertical: 4,
    marginRight: 12,
    paddingRight: 13,
  },
  priceText: {
    fontFamily: font.openSansMedium,
    fontSize: 10,
    paddingRight: 5,
    color: color.primaryText,
    fontWeight: '600',
    lineHeight: 14,
    paddingLeft: 2,
  },
  priceIcon: {
    borderWidth: 5,
    borderRadius: 20,
    backgroundColor: color.primaryText,
    height: 23,
    width: 23,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
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
});
export default styles;
