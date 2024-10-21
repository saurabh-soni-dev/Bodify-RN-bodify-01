import {Container, Dropdown} from '@components';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './transaction.style';
import useTransaction from './useTransaction';

export interface TransactionProps {
  transactionInfo: TransactionInfoProps;
  updateTransactionState: (key: string, value: string | boolean) => void;
  onOpenDropdown: () => void;
  onConnectToPaypal: () => void;
}
export interface TransactionInfoProps {
  currencyList: itemProps[];
  selectedValue: string;
  isConnected: boolean;
}
interface itemProps {
  id: number;
  title: string;
}

const Transaction: FC = () => {
  const {transactionInfo, updateTransactionState, onConnectToPaypal} =
    useTransaction();

  return (
    <Container
      wrapperType="simple"
      headerShown
      showBackIcon
      lable="Transaction">
      <View style={styles.mainContainer}>
        <Dropdown
          label="Default Units"
          mainViewStyle={styles.mainViewStyle}
          lableStyle={styles.lableStyle}
          containerStyle={styles.dropdownContainerStyle}
          placeholderStyle={styles.placeholderStyle}
          data={transactionInfo?.currencyList}
          placeholder="USD - US Doller"
          innerLabel="Currency"
          value={transactionInfo?.selectedValue}
          setValue={res => updateTransactionState('selectedValue', res)}
        />
        <Text allowFontScaling={false} style={styles.paypalText}>
          Paypal Account integration
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.paypalBtn}
          onPress={onConnectToPaypal}>
          <SvgIndex.paypal />
          <Text allowFontScaling={false} style={styles.paypalBtnText}>
            Connect Paypal Account
          </Text>
          {transactionInfo?.isConnected && (
            <View style={styles.deleteIcon}>
              <SvgIndex.deleteIcon fill={color.secondaryBG} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Transaction;
