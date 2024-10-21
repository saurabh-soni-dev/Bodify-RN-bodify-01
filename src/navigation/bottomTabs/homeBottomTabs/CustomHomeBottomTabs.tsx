import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './homeBottomTabs.style';
import {RootState} from '@redux/store';

const CustomHomeBottomTabs: FC<BottomTabBarProps> = ({state, navigation}) => {
  const {typeUser} = useSelector((state: RootState) => state?.UserData);
  const isFocused = state?.index;
  const onPress = (screenName: string) => {
    if (screenName) {
      navigation.navigate(screenName);
    }
  };
  return (
    <View style={styles.container}>
      {typeUser === 'Instruct' ? (
        <>
          <TouchableOpacity
            style={styles.rowView}
            activeOpacity={0.8}
            onPress={() => onPress('MyProgram')}>
            {isFocused === 0 ? (
              <SvgIndex.myProgramsFocus />
            ) : (
              <SvgIndex.myProgramsUnfocus />
            )}
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={[
                styles.nameText,
                {
                  color: isFocused === 0 ? color.primary : color.secondaryText,
                },
              ]}>
              My Programs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rowView}
            activeOpacity={0.7}
            onPress={() => onPress('Financials')}>
            {isFocused === 1 ? (
              <SvgIndex.financialsFocus />
            ) : (
              <SvgIndex.financialsUnfocus />
            )}
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={[
                styles.nameText,
                {color: isFocused === 1 ? color.primary : color.secondaryText},
              ]}>
              Financials
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rowView}
            activeOpacity={0.7}
            onPress={() => onPress('Analytics')}>
            {isFocused === 2 ? (
              <SvgIndex.analyticsFocus />
            ) : (
              <SvgIndex.analyticsUnfocus />
            )}
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={[
                styles.nameText,
                {color: isFocused === 2 ? color.primary : color.secondaryText},
              ]}>
              Analytics
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            style={styles.rowView}
            activeOpacity={0.7}
            onPress={() => onPress('MarketPlace')}>
            {isFocused === 3 ? (
              <SvgIndex.marketplaceFocus />
            ) : (
              <SvgIndex.marketplaceUnfocus />
            )}
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={[
                styles.nameText,
                {color: isFocused === 3 ? color.primary : color.secondaryText},
              ]}>
              Marketplace
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rowView}
            activeOpacity={0.7}
            onPress={() => onPress('Workout')}>
            {isFocused === 4 ? (
              <SvgIndex.myProgramsFocus />
            ) : (
              <SvgIndex.myProgramsUnfocus />
            )}
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={[
                styles.nameText,
                {color: isFocused === 4 ? color.primary : color.secondaryText},
              ]}>
              Workout
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rowView}
            activeOpacity={0.7}
            onPress={() => onPress('History')}>
            {isFocused === 5 ? (
              <SvgIndex.historyFocus />
            ) : (
              <SvgIndex.historyUnfocus />
            )}
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={[
                styles.nameText,
                {color: isFocused === 5 ? color.primary : color.secondaryText},
              ]}>
              History
            </Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity
        style={styles.rowView}
        activeOpacity={0.7}
        onPress={() => onPress('MyProfile')}>
        {isFocused === 6 ? (
          <SvgIndex.myProfileFocus />
        ) : (
          <SvgIndex.myProfileUnfocus />
        )}
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={[
            styles.nameText,
            {color: isFocused == 6 ? color.primary : color.secondaryText},
          ]}>
          My Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rowView}
        activeOpacity={0.7}
        onPress={() => onPress('Settings')}>
        {isFocused === 7 ? (
          <SvgIndex.settingsFocus />
        ) : (
          <SvgIndex.settingsUnfocus />
        )}
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={[
            styles.nameText,
            {color: isFocused === 7 ? color.primary : color.secondaryText},
          ]}>
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHomeBottomTabs;
