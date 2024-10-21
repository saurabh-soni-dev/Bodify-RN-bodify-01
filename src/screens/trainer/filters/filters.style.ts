import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenBackgroundStyle: {
    backgroundColor: color.primaryBG,
  },
  headerContainerStyle: {
    paddingBottom: 10,
    paddingTop: 28,
    marginBottom: 0,
    marginTop: 0,
  },
  inputContentContainers: {
    flex: 1,
    marginTop: 41,
  },
  labelStyle: {
    fontFamily: font.workSansMedium,
    fontSize: 14,
    color: color.primaryText,
    flex: 1,
  },
  valueTextStyle: {
    fontFamily: font.openSansRegular,
    fontSize: 12,
    color: color.secondaryText,
    marginTop: 11,
  },
  bottonView: {
    marginBottom: 30,
    width: 257,
    alignSelf: 'center',
  },
  rowViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outLine: {
    marginTop: 20,
    height: 1,
    backgroundColor: color.lightgray,
  },
  outLineSlider: {
    marginTop: 32,
    height: 1,
    backgroundColor: color.lightgray,
  },
  cardView: {
    marginBottom: 30,
  },
  multiSliderView: {
    marginTop: 18,
  },
  markerView: {
    height: 20,
    width: 20,
    borderRadius: 30,
    backgroundColor: color.secondaryBG,
  },
  textSliderStyleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    position: 'absolute',
    bottom: 0,
  },
  textSlidePriceText: {
    color: color.black,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '400',
  },
  thumbStyleView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: color.secondaryBG,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 4,
  },
  unSelectSliderStyle: {
    flex: 1,
    height: 2,
    backgroundColor: color.lightgray,
  },
  selectSliderStyle: {
    flex: 1,
    height: 3,
    backgroundColor: color.primary,
  },
  priceLabelViewStyle: {
    marginTop: 25,
    position: 'absolute',
    right: -10,
    width: 60,
    alignItems: 'center',
    backgroundColor: color.transparent,
  },
  weeksLabelViewStyle: {
    marginTop: 25,
    position: 'absolute',
    right: -5,
    width: 60,
    alignItems: 'center',
    backgroundColor: color.transparent,
  },
  priceLabelLowViewStyle: {
    marginTop: 25,
    position: 'absolute',
    left: -18,
    width: 60,
    alignItems: 'center',
    backgroundColor: color.primaryBG,
  },
  weeksLabelLowViewStyle: {
    marginTop: 25,
    position: 'absolute',
    left: -4,
    width: 60,
    alignItems: 'center',
    backgroundColor: color.primaryBG,
  },
  labelSliderText: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '400',
    fontFamily: font.openSansRegular,
    color: color.secondaryText,
  },
});
