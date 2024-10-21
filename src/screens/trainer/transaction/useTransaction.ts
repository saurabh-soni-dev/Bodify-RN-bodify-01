import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useState} from 'react';
import {TransactionInfoProps} from './Transaction';
import {currencyLists} from './transaction.const';

const useTransaction = () => {
  const navigation = useAuthNavigation();
  const [transactionInfo, setTransactionInfo] = useState<TransactionInfoProps>({
    currencyList: currencyLists,
    selectedValue: '',
    isConnected: false,
  });

  //** Handle state change */
  const updateTransactionState = useCallback(
    (key: string, value: string | boolean) => {
      setTransactionInfo(prevState => ({...prevState, [key]: value}));
    },
    [transactionInfo],
  );

  //** Connect to paypal button */
  const onConnectToPaypal = useCallback(() => {
    updateTransactionState('isConnected', !transactionInfo?.isConnected);
  }, [transactionInfo]);

  return {
    transactionInfo,
    updateTransactionState,
    onConnectToPaypal,
  };
};

export default useTransaction;
