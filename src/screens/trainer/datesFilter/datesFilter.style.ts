import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: color.primaryBG,
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: 18,
  },
  calenderContainer: {
    flex: 1,
    justifyContent:'center'
  },
  calenderCard: {
    borderRadius: 12,
    backgroundColor: color.secondaryBG,
  },
  headerButton: {
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  calendarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  monthYearLabel: {
    color: color.primary,
    textDecorationLine: 'underline',
    fontFamily: font.openSansSemiBold,
    fontSize: 16,
  },
  orLineStyle: {
    paddingHorizontal: 0,
  },
  dayNameView: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mainCalendarView: {
    flex: 1,
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  daysLabel: {
    fontFamily: font.openSansSemiBold,
    color: color.secondaryText,
    fontSize: 13,
  },
  datesContainer: {
    padding: 16,
  },
  contentContainer: {
    flexGrow: 1,
    rowGap: 8,
  },
  footerView: {
    padding: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dateCard: {
    paddingVertical: 8,
    paddingHorizontal: 53,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: color.lightgray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 14,
    fontFamily: font.openSansMedium,
    lineHeight: 20,
    color: color.primaryText,
  },
  btnView: {
    paddingVertical: 30,
    backgroundColor: color.primaryBG,
    paddingHorizontal: 48,
  },
});
