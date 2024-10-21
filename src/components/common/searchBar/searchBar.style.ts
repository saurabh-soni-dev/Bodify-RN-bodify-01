import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 31,
    marginBottom: 17,
  },
  textInputView: {
    flex: 1,
    height: 36,
    flexDirection: 'row',
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: color.primaryText,
  },
  searchIcon: {
    height: 16,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  searchInputStyle: {
    flex: 1,
    fontSize: 13,
    fontFamily: font.openSansRegular,
    color: color.secondaryBG,
    fontWeight: '400',
  },
  filterButton: {
    height: 36,
    width: 36,
    backgroundColor: color.primaryText,
    marginLeft: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  folderButton: {
    height: 36,
    width: 36,
    backgroundColor: color.primary,
    marginLeft: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
