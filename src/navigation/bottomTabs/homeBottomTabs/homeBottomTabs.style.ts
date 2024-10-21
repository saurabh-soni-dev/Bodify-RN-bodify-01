import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 90,
    backgroundColor: color.secondaryBG,
    paddingTop: 10,
    paddingBottom: 28,
    paddingHorizontal: 25,
    elevation: 15,
    shadowColor: color.primary,
  },
  rowView: {
    flex: 1,
    alignItems: 'center',
  },
  nameText: {
    marginTop: 6,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13.62,
    color: color.secondaryText,
  },
  financialAlignItems: {
    marginBottom: 8,
  },
});
