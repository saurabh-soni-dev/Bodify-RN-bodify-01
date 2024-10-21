import {useAuthNavigation} from '@hooks/useAppNavigation';
import moment from 'moment';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {DatesFilterProps} from './DatesFilter';

const useDatesFilter = () => {
  const navigation = useAuthNavigation();
  const daysData = useMemo(
    () =>
      Array.from({length: 8}, (_, i) => moment().weekday(i).format('dd')).slice(
        1,
        8,
      ),
    [],
  );
  const [datesFilter, setDatesFilter] = useState<DatesFilterProps>({
    calendarData: [],
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    selectedDates: [],
  });

  /** Update the calendar component when initialize the page */
  useEffect(() => {
    setDatesFilter(prevState => ({
      ...prevState,
      ['calendarData']: calendarData,
    }));
  }, [datesFilter.month, datesFilter.year]);

  /** Get the days based on month */
  const getDaysInMonth = (year: number, month: number) => {
    if (month < 1 || month > 12) {
      throw new Error('Month must be between 1 and 12');
    }
    const date = new Date(year, month - 1, 1);
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
  };

  /** Get the initial calendar data */
  const calendarData = useMemo(
    () =>
      new Array(getDaysInMonth(datesFilter.year, datesFilter.month + 1))
        .fill(' ')
        .map((_, index) => index + 1),
    [datesFilter.month, datesFilter.year],
  );

  /** Handle forward and backward button for month */
  const handleForwardBackwardMonth = useCallback(
    (type: 'backward' | 'forward') => {
      switch (type) {
        case 'backward':
          if (datesFilter.month == 0) {
            setDatesFilter(prevState => ({...prevState, ['month']: 11}));
            setDatesFilter(prevState => ({
              ...prevState,
              ['year']: datesFilter.year - 1,
            }));
          } else {
            setDatesFilter(prevState => ({
              ...prevState,
              ['month']: datesFilter.month - 1,
            }));
          }
          break;
        case 'forward':
          if (datesFilter.month == 11) {
            setDatesFilter(prevState => ({...prevState, ['month']: 0}));
            setDatesFilter(prevState => ({
              ...prevState,
              ['year']: datesFilter.year + 1,
            }));
          } else {
            setDatesFilter(prevState => ({
              ...prevState,
              ['month']: datesFilter.month + 1,
            }));
          }
          break;
        default:
          break;
      }
    },
    [datesFilter],
  );

  /** handle date selection  */
  const onSelectDates = useCallback(
    (day: number) => {
      const selectedDate = moment([datesFilter?.year, datesFilter?.month, day]);
      const formattedDate = selectedDate.format('DD/MM/YYYY');
      if (!datesFilter?.selectedDates?.includes(formattedDate)) {
        setDatesFilter(prev => ({
          ...prev,
          selectedDates: [...prev?.selectedDates, formattedDate],
        }));
      } else {
        setDatesFilter(prev => ({
          ...prev,
          selectedDates: prev?.selectedDates?.filter(
            date => date !== formattedDate,
          ),
        }));
      }
    },
    [datesFilter],
  );

  //** Clear all the selected filter */
  const clearFilter = useCallback(() => {
    setDatesFilter(prevState => ({
      ...prevState,
      selectedDates: [],
    }));
  }, [datesFilter]);

  /** Get start date & end data from selected dates */
  const startDate = useMemo(() => datesFilter?.selectedDates[0], [datesFilter]);
  const endDate = useMemo(
    () => datesFilter?.selectedDates[datesFilter?.selectedDates?.length - 1],
    [datesFilter],
  );

  /** Navigate to back with selected start and end dates */
  const onPressSave = useCallback(() => {
    navigation.navigate('AnalyticsFilters', {
      date: {
        startDate: startDate,
        endDate: endDate,
      },
    });
  }, [startDate, endDate]);

  //** Handle save button disable & active */
  const isSaveButton = useMemo(
    () => datesFilter?.selectedDates?.length < 2,
    [datesFilter],
  );

  return {
    datesFilter,
    clearFilter,
    onPressSave,
    handleForwardBackwardMonth,
    daysData,
    onSelectDates,
    isSaveButton,
  };
};

export default useDatesFilter;
