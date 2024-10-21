import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  headerStyle: {
    paddingHorizontal: 20,
    marginBottom: 0,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: color.primaryBG,
    paddingHorizontal: 20,
  },
  searchBarContainer: {
    marginTop: 20,
    marginBottom: 13,
  },
  coachInstructionContainer: {
    marginBottom: 21,
    paddingTop: 9,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: color.paleLavender,
    borderRadius: 5,
    height: 364,
    maxHeight: 364,
  },
  headerView: {
    height: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backSquatText: {
    fontFamily: font.openSansSemiBold,
    fontSize: 12,
    color: color.primaryText,
  },
  iconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIconButton: {
    height: 18,
    width: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  deleteIconButton: {
    height: 18,
    width: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoView: {
    marginTop: 6,
    height: 198,
    width: '100%',
    backgroundColor: color.primary,
    borderRadius: 5,
  },
  videoImageStyle: {
    width: '100%',
    height: 198,
    borderRadius: 5,
  },
  detailsView: {
    paddingHorizontal: 3,
    marginTop: 3,
  },
  coachTextStyle: {
    marginTop: 5,
    fontFamily: font.openSansSemiBold,
    fontSize: 12,
    lineHeight: 18,
    color: color.primaryText,
  },
  descriptionTextStyle: {
    marginTop: 5,
    fontFamily: font.openSansRegular,
    fontSize: 10,
    lineHeight: 18,
    color: color.primaryText,
  },
  emptyView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 364,
  },
  selectText: {
    fontFamily: font.openSansSemiBold,
    fontSize: 16,
    color: color.primaryText,
    lineHeight: 30,
    textAlign: 'center',
  },
  lisView: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 50,
    rowGap: 14,
  },
  confirmBtnStyle: {
    backgroundColor: color.warning,
    marginRight: 5,
  },
  cancelBtnStyle: {
    marginLeft: 5,
  },
  cancelLableStyle: {
    color: color.primaryText,
  },
  btnViewStyle: {
    marginBottom: 12,
  },
  cardSpaceStyle: {
    justifyContent: 'space-between',
  },
  modalContainerStyle: {
    backgroundColor: color.transparent,
  },
});

export default styles;
