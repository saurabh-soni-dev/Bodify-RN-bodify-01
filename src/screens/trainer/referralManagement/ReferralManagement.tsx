import {ReferralCard} from '@card';
import {Button, SearchBar} from '@components';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './referralManagement.style';
import useReferralManagement from './useReferralManagement';
import {percentageHeight} from '@utility/functions/dimensionsScale';

export interface ReferralManagementProps {
  referralList: ReferralItemProps[];
  filterReferralList: ReferralItemProps[];
  searchItem: string;
}
interface ReferralItemProps {
  id: number;
  referralCode: string;
  referredBy: string;
  noOfSubs: string;
  conversionRate: string;
  revenueGenerated: string;
  discount: string;
}

const ReferralManagement: FC = () => {
  const {referralInfo, navigateToCreateReferralCode, onSearchReferral} =
    useReferralManagement();

  const EmptyContainer = () => (
    <View style={styles.emptyContainer}>
      <SvgIndex.referralUser
        height={percentageHeight(7)}
        width={percentageHeight(7)}
      />
      <Text allowFontScaling={false} style={styles.emptyText}>
        You don’t have any referral {'\n'} codes created
      </Text>
      <Button
        label="+ Create New Code"
        containerStyle={styles.btnContainer}
        nameTextStyle={styles.btnText}
        onPress={navigateToCreateReferralCode}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder={`Search`}
        placeholderTextColor={color.primaryText}
        containerStyle={styles.searchBarContainer}
        textInputViewStyle={styles.searchView}
        showPlusIcon={true}
        showFilterIcon={true}
        filterButtonStyle={styles.filterIconContainerStyle}
        plusButtonStyle={styles.addIconContainerStyle}
        inputStyle={styles.inputStyle}
        searchIcon={SvgIndex.search}
        plusIconHeight={11.45}
        plusIconWidth={11.45}
        onPressPlus={navigateToCreateReferralCode}
        value={referralInfo?.searchItem}
        setValue={onSearchReferral}
        selectionColor={color.primaryText}
      />
      <View style={styles.listView}>
        <FlatList
          bounces={false}
          data={referralInfo?.referralList}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(_, index) => {
            return `${index}`;
          }}
          renderItem={({item, index}) => (
            <ReferralCard key={index} item={item} index={index} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={EmptyContainer}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          initialNumToRender={10}
        />
      </View>
    </View>
  );
};

export default ReferralManagement;
