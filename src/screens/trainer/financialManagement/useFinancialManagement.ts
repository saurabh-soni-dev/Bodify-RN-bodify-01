import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useState } from 'react';
import { FinancialManagementProps } from './FinancialManagement';
import {
  chartList,
  dropdownList,
  transactionList,
} from './financialManagement.const';

const useFinancialManagement = () => {
  const navigation = useAuthNavigation();
  const [financialData, setFinancialData] = useState<FinancialManagementProps>({
    transactions: transactionList,
    chartData: chartList,
    filters: dropdownList,
    selectedFilter: 'Last Week',
    isPaypalConnected: false,
  });

  //** Update financial state */
  const updateFinancialData = useCallback(
    (key: string, value: string | boolean) => {
      setFinancialData(prevState => ({...prevState, [key]: value}));
    },
    [financialData],
  );

  //** Navigate to transactions details screen */
  const onPressTransaction = useCallback(() => {}, [
    navigation,
    financialData.transactions,
  ]);

  //** Connect to paypal */
  const onConnectToPaypal = useCallback(() => {
    updateFinancialData('isPaypalConnected', !financialData?.isPaypalConnected);
  }, [financialData]);

  return {
    financialData,
    updateFinancialData,
    onPressTransaction,
    onConnectToPaypal,
  };
};

export default useFinancialManagement;
