import color from '@theme/color';
import font from '@theme/font';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainerStyle: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: color.primaryBG
  },
  screenBackgroundStyle: {
    backgroundColor: color.primaryBG
  },
  container: {
    backgroundColor: color.primaryBG,
    flex: 1
  },
  inputContentContainers: {
    flex: 1,
    marginTop: 68,
  },
  contentContainerStyle: {
    marginTop: 7,
    flexGrow: 1,
  },
  bottonView: {
    marginBottom: 25,
    marginTop: 32,
  },

  weekRowViewManage: {
    flexDirection: 'row',
  },
  weekTextStyle: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.34,
    fontFamily: font.openSansRegular,
    marginBottom: 10,
    flex: 1,
    color: color.primaryText
  },
  weekMainShowSessionView: {
    height: 85,
    backgroundColor: color.secondaryBG,
    paddingHorizontal: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: color.buttonBG,
    paddingTop: 10
  },
});
