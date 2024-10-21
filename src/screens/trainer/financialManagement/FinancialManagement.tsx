import {TransactionCard} from '@card';
import {EmptyContainer, FinancialGraph} from '@components';
import SvgIndex from '@svgIndex';
import React, {FC} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './financialManagement.style';
import useFinancialManagement from './useFinancialManagement';

export interface FinancialManagementProps {
  transactions: TransactionItemProps[];
  chartData: ChartDataItemProps[];
  filters: GraphFilterItemProps[];
  selectedFilter: string;
  isPaypalConnected: boolean;
}
export interface TransactionItemProps {
  id: number;
  identifier: string;
  amount: string;
  date: string;
}
export interface ChartDataItemProps {
  value: number;
  date?: string;
}
export interface GraphFilterItemProps {
  id: number;
  title: string;
}

const FinanManagement: FC = () => {
  const {
    financialData,
    updateFinancialData,
    onPressTransaction,
    onConnectToPaypal,
  } = useFinancialManagement();

  return (
    <View style={styles.container}>
      <ScrollView
        bounces={true}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.payoutView}>
          <TouchableOpacity style={styles.nextPayoutView} activeOpacity={0.8}>
            <Text allowFontScaling={false} style={styles.nextTitleText}>
              Next Payout
            </Text>
            <Text allowFontScaling={false} style={styles.nextAmountText}>
              $1,200
            </Text>
            <Text allowFontScaling={false} style={styles.nextDateTitleText}>
              Next Payout Date{': '}
              <Text allowFontScaling={false} style={styles.nextDateText}>
                12/02/23
              </Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lastPayoutView} activeOpacity={0.8}>
            <Text allowFontScaling={false} style={styles.lastTitleText}>
              Last Payout
            </Text>
            <Text allowFontScaling={false} style={styles.lastAmountText}>
              $365
            </Text>
            <View style={styles.progressView}>
              <SvgIndex.trendingUp width={13} height={13} />
              <Text allowFontScaling={false} style={styles.lastDateTitleText}>
                <Text
                  allowFontScaling={false}
                  style={styles.lastDateText}
                  numberOfLines={1}>
                  5%{' '}
                </Text>
                Increase of Last Payout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <FinancialGraph
          title="Earnings"
          chartData={financialData?.chartData}
          data={financialData?.filters}
          showDropdown
          placeholder="Last Work"
          value={financialData?.selectedFilter}
          setValue={res => updateFinancialData('selectedFilter', res)}
          containerStyle={styles.chartContainer}
          titleStyle={styles.chartTitle}
          dropdownCotainerStyle={styles.dropdownCotainerStyle}
        />
        <View style={styles.connectBtnView}>
          <View style={styles.btnTitleView}>
            <SvgIndex.paypalLogo />
            <Text allowFontScaling={false} style={styles.btnTitleText}>
              Paypal
            </Text>
          </View>
          <Text allowFontScaling={false} style={styles.connectToPaypalText}>
            Connect to paypal gateway
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.paypalBtn}
            onPress={onConnectToPaypal}>
            <SvgIndex.paypal />
            <Text allowFontScaling={false} style={styles.paypalBtnText}>
              Connect Paypal Account
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactionHeadingView}>
          <Text allowFontScaling={false} style={styles.transactionHeadingText}>
            Transactions
          </Text>
          <TouchableOpacity style={styles.filterBtn} activeOpacity={0.8}>
            <SvgIndex.filter />
          </TouchableOpacity>
        </View>
        <View style={styles.transactionContainer}>
          <FlatList
            data={financialData?.transactions}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(_, index) => {
              return `${index}`;
            }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyContainer />}
            renderItem={({item, index}) => (
              <TransactionCard
                key={index}
                item={item}
                index={index}
                onPress={onPressTransaction}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FinanManagement;
