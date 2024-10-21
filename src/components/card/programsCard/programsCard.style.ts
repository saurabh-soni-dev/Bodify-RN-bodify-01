import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: color.priceTagBG,
    borderBottomWidth: 1.12,
    borderBottomColor: color.lightgray,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  isCardSelected: {
    backgroundColor: color.paleLavender,
  },
  imageView: {
    height: 62,
    width: 62,
  },
  image: {
    height: 62,
    width: 62,
  },
  detailsView: {
    marginLeft: 11.19,
    flex: 1,
    marginRight: 11.2,
  },
  titleText: {
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
    color: color.primaryText,
  },
  desText: {
    flex: 1,
    marginTop: 5,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15.08,
    color: color.primaryText,
  },
  deleteIcon: {
    alignSelf: 'center',
  },
});
