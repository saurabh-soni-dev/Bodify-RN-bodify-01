import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer:{
    marginTop:20,
  },
  container: {
    height: 46,
    borderWidth: 1,
    borderColor: color.lightgray,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: color.primaryBG,
  },
  isFoucs: {
    borderWidth: 1.5,
    borderColor: color.primary,
  },
  isError: {
    borderWidth: 1.5,
    borderColor: color.warning,
  },
  labelView: {
    marginLeft: 7,
    paddingHorizontal: 4,
    backgroundColor: color.primaryBG,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
    height: 18,
    top: -9,
  },
  labelText: {
    fontSize: 13,
    fontFamily: font.openSansSemiBold,
    fontWeight: '600',
    color: color.primaryText,
    lineHeight: 17.7,
  },
  iconView: {
    height: 30,
    width: 30,
    backgroundColor: color.primaryBG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    flex: 1,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 34,
    color: color.secondaryText,
  },
  dateText: {
    flex: 1,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 34,
    color: color.primaryText,
  },
  errorView: {
    marginTop: 6,
    height: 16,
    maxHeight: 16,
  },
  errorLabel: {
    fontSize: 12,
    lineHeight: 16,
    color: color.warning,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
  },
});
