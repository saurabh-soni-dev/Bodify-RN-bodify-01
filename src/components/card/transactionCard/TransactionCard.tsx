import React, {FC, memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './transactionCard.style';
interface TransactionCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
}
interface ItemProps {
  id?: number;
  identifier?: string;
  amount?: string;
  date?: string;
}
const TransactionCard: FC<TransactionCardProps> = ({item, index, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.amountView}>
        <Text allowFontScaling={false} style={styles.idText}>
          ID: {item?.identifier}
        </Text>
        <Text allowFontScaling={false} style={styles.amountText}>
          ${item?.amount}
        </Text>
      </View>
      <Text allowFontScaling={false} style={styles.dateText}>
        {item?.date}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(TransactionCard);
