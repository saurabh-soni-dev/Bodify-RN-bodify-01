import {CustomStatusbar} from '@components';
import AnalyticsTopTabs from '@navigation/topTabs/analyticsTopTabs/AnalyticsTopTabs';
import color from '@theme/color';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './analytics.style';

const Analytics: FC = () => {
  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.primaryBG}
        barStyle="dark-content"
      />
      <View style={styles.contentWrapper}>
        <Text allowFontScaling={false} style={styles.headingText}>
          Analytics
        </Text>
        <AnalyticsTopTabs />
      </View>
    </View>
  );
};

export default Analytics;
