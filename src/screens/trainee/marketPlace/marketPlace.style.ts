import color from '@theme/color';
import font from '@theme/font';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondaryBG,
  },
  keyBoardView: {
    flex: 1,
    backgroundColor: color.secondaryBG,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  userHeaderView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 19,
    marginBottom: 3,
  },
  userTextHeader: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21.11,
    fontFamily: font.openSansRegular,
    marginLeft: 10,
  },
  curatedTextStyle: {
    fontSize: 20,
    lineHeight: 23.46,
    fontWeight: '400',
    fontFamily: font.openSansRegular,
    color: color.primaryText,
  },
  viewHorizontal: {
    marginHorizontal: 20,
  },
  activeView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: -10,
  },
  currentViewActive: {
    width: 70,
    height: 4,
    marginHorizontal: 2,
    marginTop: 30,
  },
  rowView: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 29,
    marginBottom: 14,
  },
  rowTextPicks: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21.11,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
  },
  showAllView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showAllTextStyle: {
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13.62,
    fontFamily: font.openSansRegular,
    marginRight: 5,
    color: color.primaryText,
  },
  topContantFlatist: {
    marginHorizontal: 20
  },
  yourFitnesTextStyle: {
    backgroundColor: color.primary,
    paddingHorizontal: 20,
    marginTop: 35,
  },
  yourTextStyle: {
    textTransform: 'uppercase',
    marginVertical: 12,
    color: color.secondaryBG,
    fontSize: 25.39,
    fontWeight: '400',
    lineHeight: 30,
    fontFamily: font.openSansRegular,
  },
  exploreText: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: font.openSansRegular,
    marginTop: 33,
    marginLeft: 20,
    color: color.primaryText,
  },
  contentContainerStyle: {
    flexGrow: 1,
    marginTop: 21,
    marginHorizontal: 10,
  },
  cardManageStyle: {
    paddingHorizontal: 10,
  },
  tagTextSty: {
    fontSize: 12,
    lineHeight: 14,
  }
});

export default styles;
