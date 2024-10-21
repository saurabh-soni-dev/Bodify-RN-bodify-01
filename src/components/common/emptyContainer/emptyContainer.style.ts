import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {    
    fontSize: 16,
    fontFamily: font.openSansMedium,
    color: color.primaryText,
  },
});