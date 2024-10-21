import {ReferralCard} from '@card';
import {BottomSheet, EmptyContainer, SearchBar} from '@components';
import svgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {styles} from './analyticsReferralManagement.style';
import useAnalyticsReferralManagement from './useAnalyticsReferralManagement';

export interface RBSheetRef {
  current: typeof RBSheet | null;
}
export interface AnalyticsReferralManagementProps {
  referralList: ReferralListProps[];
  filterReferralList: ReferralListProps[];
  bottomSheetList: BottomSheetItem[];
  searchItem: string;
  activateReferral: boolean;
  selectItemId: string;
}
export interface ReferralListProps {
  id: number;
  referralCode: string;
  referredBy: string;
  noOfSubs: string;
  conversionRate: string;
  revenueGenerated: string;
  discount: string;
}
export interface BottomSheetItem {
  id: number;
  title: string;
  icon: React.JSX.ElementType;
}

const AnalyticsReferralManagement: FC = () => {
  const {
    referralInfo,
    refRBSheet,
    openMenuSheet,
    navigateToFilterScreen,
    onSearchReferral,
    handleSheetOperations,
  } = useAnalyticsReferralManagement();

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder={`Search`}
        placeholderTextColor={color.primaryText}
        containerStyle={styles.searchBarContainer}
        textInputViewStyle={styles.searchView}
        showFilterIcon
        inputStyle={styles.inputStyle}
        searchIcon={svgIndex.search}
        onPressFilter={navigateToFilterScreen}
        value={referralInfo?.searchItem}
        setValue={onSearchReferral}
        selectionColor={color.primaryText}
      />
      <FlatList
        data={referralInfo?.referralList}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(_, index) => {
          return `${index}`;
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyContainer />}
        renderItem={({item, index}) => (
          <>
            <ReferralCard
              key={index}
              item={item}
              index={index}
              onPressThreeDot={() => openMenuSheet(index, item?.id)}
            />
            {/* @ts-ignore*/}
            <RBSheet
              ref={ref => (refRBSheet.current[index] = ref)}
              customStyles={{
                wrapper: styles.wrapper,
                container: styles.sheetContainer,
              }}
              customModalProps={{
                animationType: 'slide',
              }}>
              {referralInfo?.bottomSheetList?.map((item, index) => (
                <BottomSheet
                  key={index}
                  item={item}
                  index={index}
                  onPress={() => handleSheetOperations(item?.id, index)}
                />
              ))}
            </RBSheet>
          </>
        )}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        initialNumToRender={10}
      />
    </View>
  );
};

export default AnalyticsReferralManagement;
