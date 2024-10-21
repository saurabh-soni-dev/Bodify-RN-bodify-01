import color from '@theme/color';
import font from '@theme/font';
import { Dimensions, StyleSheet } from 'react-native';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: width,
    marginTop: 12,
    height: 397,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  innerContainer: {
    height: 397,
    position: 'absolute',
    right: 0,
  },
  tag: {
    marginTop: 18,
    position: 'absolute',
    marginLeft: 20,
  },
  tagText: {
    fontFamily: font.openSansMedium,
    fontSize: 12,
    paddingHorizontal: 8,
    color: color.secondaryBG,
    fontWeight: '500',
    lineHeight: 14,
  },
  crossFitText: {
    fontFamily: font.openSansRegular,
    fontSize: 24,
    color: color.secondaryBG,
    fontWeight: '400',
    lineHeight: 28.15,
  },
  backText: {
    fontFamily: font.openSansRegular,
    fontSize: 15,
    color: color.secondaryBG,
    fontWeight: '600',
    lineHeight: 20.43,
  },
  statusContainer: {
    position: 'absolute',
    right: 20,
    marginTop: 20,
  },
  statusDot: {
    borderWidth: 5,
    borderRadius: 10,
    height: 5,
    width: 5,
    marginLeft: 5,
  },
  title: {
    fontFamily: font.openSansMedium,
    fontWeight: '600',
    fontSize: 18,
    marginHorizontal: 8,
    marginTop: 12,
    color: color.secondaryBG,
    lineHeight: 21,
    marginLeft: 14,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  infoRow: {
    flexDirection: 'row',
    marginLeft: 14,
    marginBottom: 5,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: font.openSansRegular,
    color: color.secondaryBG,
    lineHeight: 19.07,
  },
  priceContainer: {
    borderRadius: 17,
    backgroundColor: color.secondaryBG,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
    width: 77,
  },
  priceIcon: {
    borderWidth: 5,
    borderRadius: 20,
    backgroundColor: color.primaryText,
    width: 23,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4
  },
  priceText: {
    fontFamily: font.openSansRegular,
    fontSize: 10,
    paddingRight: 15,
    paddingLeft: 4,
    color: color.primaryText,
    fontWeight: '600',
    lineHeight: 14,
  },
  textView: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: font.openSansRegular,
    color: color.secondaryBG,
    lineHeight: 14.52,
  },
  postisionStyle: {
    position: 'absolute',
    bottom: 21,
    left: 20,
  },
  star: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginHorizontal: 1.3,
  },
  nameText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: font.openSansRegular,
    color: color.secondaryBG,
    lineHeight: 14.52,
    textAlign: 'right',
    marginRight: 4,
  },
});
export default styles;
