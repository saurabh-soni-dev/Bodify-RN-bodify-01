import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, Fragment, memo, useMemo} from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {styles} from './customDatePicker.style';

interface CustomDatePickerProps {
  containerStyle?: ViewStyle;
  label?: string;
  placeholder?: string;
  value?: string;
  visible: boolean;
  onOpen: () => void;
  onClose: () => void;
  onConfirm: (date: Date) => void;
  error?: string;
  minDate?: Date;
  maxDate?: Date;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({
  containerStyle,
  placeholder,
  label,
  value,
  error,
  minDate,
  maxDate,
  visible,
  onOpen,
  onClose,
  onConfirm,
}) => {
  //** Start Handle border colors on change status *
  const handleColor = (error?: string, visible?: boolean) => {
    if (error) {
      return color.warning;
    } else if (!visible) {
      return color.lightgray;
    } else {
      return color.primary;
    }
  };
  const borderColor = useMemo(
    () => handleColor(error, visible),
    [error, visible],
  );
  //** End Handle border colors on change status */

  return (
    <Fragment>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onOpen}
        style={[containerStyle, styles.mainContainer]}>
        <View
          style={[
            styles.container,
            {
              borderColor: borderColor,
              borderWidth: !visible && !error ? 1 : 1.5,
            },
          ]}>
          <View style={styles.labelView}>
            <Text allowFontScaling={false} style={styles.labelText}>
              {label}
            </Text>
          </View>
          {!value ? (
            <Text allowFontScaling={false} style={styles.placeholderText}>
              {placeholder}
            </Text>
          ) : (
            <Text allowFontScaling={false} style={styles.dateText}>
              {value}
            </Text>
          )}
          <View style={styles.iconView}>
            <SvgIndex.calender
              height={20}
              width={20}
              fill={color.primaryText}
            />
          </View>
        </View>
        <View style={styles.errorView}>
          <Text allowFontScaling={false} style={styles.errorLabel}>
            {error}
          </Text>
        </View>
      </TouchableOpacity>
      {visible && (
        <DatePicker
          date={new Date()}
          modal
          open={visible}
          mode="date"
          onConfirm={onConfirm}
          onCancel={onClose}
          theme={'light'}
          cancelText="Cancel"
          confirmText="Confirm"
          buttonColor={color.primary}
          dividerColor={color.primary}
          minimumDate={minDate}
          maximumDate={maxDate}
        />
      )}
    </Fragment>
  );
};
export default memo(CustomDatePicker);
