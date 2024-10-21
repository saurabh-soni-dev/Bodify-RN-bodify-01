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
  },
  searchStyle: {
    height: 36,
  },
  searchInputStyle: {
    fontSize: 10,
    fontFamily: font.openSansRegular,
    color: color.priceTagBG,
  },
  searchFilterStyle: {
    height: 36,
    width: 36,
  },
  searchBarContainer: {
    marginTop: 10,
    marginBottom: 28,
    paddingHorizontal: 20,
  },
  listView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainerStyle: {
    flexGrow: 1,
    rowGap: 12,
    paddingBottom: 20,
  },
  bottonContainer: {
    paddingVertical: 30,
    backgroundColor: color.primaryBG,
  },
  modalContainer: {
    backgroundColor: color.primaryText,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    marginTop: 65,
  },
  innerContainer: {
    flex: 1,
  },
  modelTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginLeft: 23,
    marginRight: 12,
  },
  modalTitleText: {
    flex: 1,
    color: color.secondaryBG,
    fontFamily: font.workSansSemiBold,
    lineHeight: 33.6,
    fontSize: 20,
    textTransform: 'capitalize',
  },
  closeIconView: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoCard: {
    marginTop: 26,
    backgroundColor: color.lightgray,
    width: '100%',
    height: 221,
    maxHeight: 221,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlayer: {
    width: '100%',
    height: 221,
    maxHeight: 221,
    borderRadius: 3,
  },
  desView: {
    height: 42,
    backgroundColor: color.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  desText: {
    flex: 1,
    color: color.secondaryBG,
    fontFamily: font.openSansSemiBold,
    lineHeight: 15,
    fontSize: 12,
    marginLeft: 10,
  },
  scrollContentContainerStyle: {
    flexGrow: 1,
    paddingTop: 21,
    paddingBottom: 12,
    paddingLeft: 13,
    paddingRight: 22,
  },
  instructionsView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  instructionText: {
    fontSize: 12,
    fontFamily: font.openSansRegular,
    lineHeight: 14,
    color: color.secondaryBG,
    marginBottom: 10,
  },
  bottomCard: {
    justifyContent: 'flex-end',
    backgroundColor: color.primary,
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 20,
  },
  bottomCardTitle: {
    fontSize: 15,
    fontFamily: font.workSansMedium,
    lineHeight: 15,
    color: color.secondaryBG,
  },
  bottomCardDes: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: font.openSansRegular,
    lineHeight: 15,
    color: color.secondaryBG,
  },
});

export default styles;
