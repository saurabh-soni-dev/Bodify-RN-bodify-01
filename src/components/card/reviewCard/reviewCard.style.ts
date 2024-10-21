import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  imageView: {
    height: 46,
    width: 46,
    backgroundColor: color.deactivatedBG,
    borderRadius: 50,
  },
  image: {
    height: 46,
    width: 46,
    borderRadius: 50,
  },
  ratingText: {
    fontFamily: font.openSansMedium,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: color.primaryText,
    marginRight: 4,
  },
  reviewView: {
    flex: 1,
    marginLeft: 16,
  },
  timeText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 20,
    color: color.secondaryText,
  },
  reviewText: {
    marginTop: 4,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    color: color.primaryText,
  },
  ratingView: {
    marginLeft: 26,
    flexDirection: 'row',
  },
});
