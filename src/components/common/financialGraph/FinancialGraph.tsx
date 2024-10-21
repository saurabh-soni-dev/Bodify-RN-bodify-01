import color from '@theme/color';
import React, {FC, memo, useCallback, useEffect, useState} from 'react';
import {Dimensions, Text, TextStyle, View, ViewStyle} from 'react-native';
import {LineChart, LineChartPropsType} from 'react-native-gifted-charts';
import Dropdown, {DropdownProps} from '../dropdown/Dropdown';
import CustomGraphLabel from './CustomGraphLabel';
import {styles} from './financialGraph.style';
import babelConfig from 'babel.config';
import {percentageHeight} from '@utility/functions/dimensionsScale';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const CHART_HEIGHT = 135;
const CHART_WIDTH = SCREEN_WIDTH - 70;
const MAX_VALUE = 500;

interface FinancialGraphProps extends DropdownProps {
  containerStyle?: ViewStyle;
  dropdownCotainerStyle?: ViewStyle;
  title: string;
  titleStyle?: TextStyle;
  showDropdown?: boolean;
  chartData: ChartDataItem[];
  chartContainerStyle?: ViewStyle;
  dropdownBGStyle?: ViewStyle;
}

interface ChartDataItem {
  value: number;
  date?: string;
  labelComponent?: () => React.JSX.Element;
}

const FinancialGraph: FC<FinancialGraphProps> = ({
  containerStyle,
  dropdownCotainerStyle,
  title,
  titleStyle,
  showDropdown,
  chartData,
  chartContainerStyle,
  dropdownBGStyle,
  ...dropdownProps
}) => {
  const [formattedData, setFormattedData] = useState<ChartDataItem[]>();
  const transformChartData = useCallback(() => {
    const transformedData = chartData?.map(item => {
      if (item?.date) {
        return {
          ...item,
          value: item?.value ?? 0,
          labelComponent: () => <CustomGraphLabel label={item?.date} />,
        };
      }
      return item;
    });
    setFormattedData(transformedData);
  }, [chartData]);
  useEffect(() => {
    transformChartData();
  }, []);

  const lineChartProps: LineChartPropsType = {
    areaChart: true,
    curved: true,
    data: formattedData,
    // height: CHART_HEIGHT,
    // height: percentageHeight(15.7),
    height: percentageHeight(14),
    width: CHART_WIDTH,
    color: color.primary,
    thickness: 1,
    startFillColor: color.primary,
    endFillColor: color.secondaryBG,
    yAxisColor: color.lightgray,
    xAxisColor: color.lightgray,
    hideYAxisText: true,
    spacing: 22,
    disableScroll: false,
    scrollAnimation: true,
    initialSpacing: 0,
    endSpacing: 0,
    hideDataPoints: true,
    hideRules: true,
    maxValue: MAX_VALUE,
    startOpacity: 0.8,
    endOpacity: 0.5,
    backgroundColor: color.secondaryBG,
    yAxisLabelWidth: 0,
    pointerConfig: {
      pointerStripUptoDataPoint: true,
      pointerStripColor: color.primary,
      pointerColor: color.primary,
      radius: 4,
      autoAdjustPointerLabelPosition: false,
      pointerLabelComponent: (item: ChartDataItem[]) => {
        return (
          <View style={styles.labelView}>
            <Text allowFontScaling={false} style={styles.labelText}>
              {'$' + item[0]?.value}
            </Text>
          </View>
        );
      },
    },
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {title && (
        <Text allowFontScaling={false} style={[styles.titleText, titleStyle]}>
          {title}
        </Text>
      )}
      <View style={[styles.chartContainer, chartContainerStyle]}>
        <LineChart {...lineChartProps} />
      </View>
      {showDropdown && (
        <View style={[styles.dropdownCotainer, dropdownCotainerStyle]}>
          <Dropdown
            {...dropdownProps}
            containerStyle={styles.dropdownBG}
            placeholderStyle={styles.dropDownTitle}
          />
        </View>
      )}
    </View>
  );
};

export default memo(FinancialGraph);
FinancialGraph.defaultProps = {
  title: 'label',
  showDropdown: true,
};
