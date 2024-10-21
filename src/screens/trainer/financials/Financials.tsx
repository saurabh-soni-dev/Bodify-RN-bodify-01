import {CustomStatusbar} from '@components';
import FinancialsTopTabs from '@navigation/topTabs/financialsTopTabs/FinancialTopTabs';
import color from '@theme/color';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './financials.style';

const Financials: FC = () => {
  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.primaryBG}
        barStyle="dark-content"
      />
      <View style={styles.contentWrapper}>
        <Text allowFontScaling={false} style={styles.headingText}>
          Financials
        </Text>
        <FinancialsTopTabs />
      </View>
    </View>
  );
};

export default Financials;
