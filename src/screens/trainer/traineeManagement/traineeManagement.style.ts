import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerViewStyle: {
    paddingHorizontal: 0,
  },
  containerStyle: {
    height: 40,
    borderRadius: 2,
    padding: 10,
    backgroundColor: color.secondaryBG,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  placeholderStyle: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20.43,
    color: color.primaryText,
  },
  listView: {
    marginTop: 6,
    paddingTop: 16,
    paddingBottom: 15,
    paddingHorizontal: 11,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
  },
  graphContainerStyle: {
    marginTop: 12,
    marginBottom: 0,
  },
  contentView: {
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 29,
  },
  title: {
    flex: 1,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: color.secondaryText,
  },
  value: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: color.primaryText,
  },
  expandText: {
    fontFamily: font.workSansRegular,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: color.primary,
    textAlign: 'right',
    marginBottom: 10,
  },
  chartLable: {
    width: 60,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10.5,
    lineHeight: 14.3,
    top: -6,
    color: color.primaryText,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  infoView: {
    flex: 1,
    marginTop: 25,
  },
});
