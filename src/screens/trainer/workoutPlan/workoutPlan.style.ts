import color from '@theme/color';
import font from '@theme/font';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  scrollContainer: {
    backgroundColor: color.primaryBG,
    paddingHorizontal: 0,
  },
  headerContainerStyle: {
    paddingTop: 17,
    paddingBottom: 8,
    paddingHorizontal: 20,
    marginTop: 0,
    marginBottom: 0,
  },
  mainContainer: {
    flex: 1,
    marginBottom: 20,
  },
  thumbnailImage: {
    height: 221,
    width: '100%',
    marginTop: 20,
  },
  viewAsUserView: {
    justifyContent: 'space-between',
    flex: 1,
  },
  viewAsUserBtn: {
    width: 129,
    height: 30,
    backgroundColor: color.secondaryBG,
    borderRadius: 24,
    marginTop: 15,
    alignSelf: 'flex-end',
    marginRight: 15,
    borderWidth: 1,
    borderColor: color.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  viewAsUserBtnText: {
    fontSize: 13,
    fontFamily: font.openSansRegular,
    color: color.primary,
    marginRight: 10,
    fontWeight: '500',
  },
  playTrainerBtn: {
    width: 129,
    height: 30,
    backgroundColor: color.primary,
    borderRadius: 24,
    marginTop: 20,
    alignSelf: 'flex-end',
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  playTrainerBtnText: {
    fontSize: 13,
    fontFamily: font.openSansRegular,
    color: color.secondaryBG,
    flex: 1,
    fontWeight: '500',
  },
  clipText: {
    fontSize: 11,
    color: color.primaryText,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
  },
  clipContainer: {
    borderColor: color.primary,
    borderRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginLeft: 0,
    height: 30,
  },
  programInfoView: {
    marginTop: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  muscleView: {
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  muscleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  targetIcon: {
    marginRight: 10,
    height: 16,
    width: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  muscleList: {
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  muscleText: {
    fontSize: 12,
    fontFamily: font.openSansRegular,
    color: color.secondaryText,
  },
  detailsView:{
    paddingHorizontal: 20
  },
  detailsTitle: {
    fontSize: 15,
    fontFamily: font.openSansMedium,
    color: color.primaryText,
  },
  detailsDes: {
    marginTop: 6,
    fontSize: 12,
    fontFamily: font.openSansRegular,
    color: color.secondaryText,
    lineHeight: 14,
  },
  priceCard: {
    height: 266,
    backgroundColor: color.paleLavender,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  priceStructureText: {
    fontSize: 15,
    fontFamily: font.openSansMedium,
    color: color.black,
  },
  priceTypeTextUnselected: {
    fontSize: 15,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    marginLeft: 5,
    fontWeight: '400',
  },
  priceTypeText: {
    fontSize: 15,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    marginLeft: 5,
    fontWeight: '600',
  },
  inputContainer: {
    borderWidth: 0,
    backgroundColor: color.secondaryBG,
    height: 36,
  },
  inputStyle: {
    fontFamily: font.openSansRegular,
    fontSize: 12,
    color: color.primaryText,
    fontWeight: '400',
  },
  containerStyle: {
    marginVertical: 0,
  },
  errorLabelStyle: {
    marginTop: 37,
  },
  priceDecriptionText: {
    paddingHorizontal: 2,
    fontSize: 12,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.3,
  },
  pricePaymentText: {
    fontSize: 12,
    fontFamily: font.openSansRegular,
    color: color.black,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  priceRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 23,
    marginBottom: 15,
  },
  columnView: {
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:13
  },
  rowViewSubs: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  weeksListView: {
    backgroundColor: color.secondaryBG,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 16,
  },
  contentContainerWeekStyle: {
    flexGrow: 1,
    borderRadius: 5,
  },
  horizontalLine: {
    height: 0.4,
    backgroundColor: color.secondaryText,
  },
  sessionListView: {
    flex: 1,
    marginBottom: 16,
  },
  collapsibleContainer: {
    marginHorizontal: 20,
    backgroundColor: color.secondaryBG,
    borderRadius: 5,
  },
  collapsibleContent: {
    paddingHorizontal: 0,
    borderTopWidth: 0,
    backgroundColor: color.deactivatedBG,
  },
  collapsedStyle: {
    paddingHorizontal: 10,
  },
  cardTitle: {
    fontFamily: font.openSansMedium,
    fontSize: 18,
    color: color.primaryText,
    letterSpacing: 0.4,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 25,
  },
  confirmBtnStyle: {
    backgroundColor: color.primary,
    flex: 0,
    width: 114,
    marginTop: 13,
  },
  modalTitle: {
    color: color.black,
  },
  modalDescriptionText: {
    fontSize: 12,
    color: color.primaryText,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    marginHorizontal: 28,
    textAlign: 'center',
  },
  modalStyle: {
    paddingTop: 40,
  },
  modalImageStyle: {
    height: 57,
    width: 38,
    marginTop: 0,
  },
  contentView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 5,
  },

  sessionRowViewStyle: {
    height: 48,
    width: '100%',
    borderColor: color.lightgray,
    borderBottomWidth: 0.5,
    paddingTop: 3,
  },
  sessionRowViewStyleBorderZero: {
    paddingTop: 3,
    height: 48,
  },
  decTextStyle: {
    fontSize: 14,
    fontFamily: font.openSansRegular,
    color: color.black,
    fontWeight: '300',
  },
  repsTextStyle: {
    fontSize: 12,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    fontWeight: '600',
    marginTop: 5,
  },
});

export default styles;
