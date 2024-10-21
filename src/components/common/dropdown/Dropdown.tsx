import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, memo, useCallback, useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import style from './dropdown.style';
import {percentageHeight} from '@utility/functions/dimensionsScale';

export interface DropdownProps {
  containerStyle?: ViewStyle;
  dropdownContainerStyle?: ViewStyle;
  data?: DataProps[];
  placeholder?: string;
  placeholderStyle?: TextStyle;
  labelStyle?: TextStyle;
  value?: string;
  setValue?: (title: string) => void;
  label?: string;
  lableStyle?: TextStyle;
  innerLabel?: string;
  mainViewStyle?: ViewStyle;
  showRightIcon?: boolean;
  onPressRight?: () => void;
  filterRowContainer?: ViewStyle;
  arrowHeight?: number;
  arrowWidth?: number;
  isShowType?: boolean;
  typeData?: DataProps[];
  typeValue?: string;
  setTypeValue?: (title: string) => void;
  isDoneButtonHide?: boolean;
  error?: string;
  mainFilterIconStyle?: ViewStyle;
  isShowScaleFilterIcon?: boolean;
}
interface Dropdown {
  isOpen: boolean;
  dropdownData: Array<string>;
  selectedItem: string;
  typeData: Array<string>;
  typeSelectedItem: string;
}

interface DataProps {
  title: string;
}
const Dropdown: FC<DropdownProps> = ({
  placeholder,
  containerStyle,
  dropdownContainerStyle,
  value,
  data,
  setValue,
  placeholderStyle,
  label,
  lableStyle,
  innerLabel,
  mainViewStyle,
  showRightIcon,
  onPressRight,
  filterRowContainer,
  arrowHeight,
  arrowWidth,
  isShowType,
  typeData,
  typeValue,
  setTypeValue,
  isDoneButtonHide,
  error,
  mainFilterIconStyle,
  isShowScaleFilterIcon,
}) => {
  const refDropdown = useRef<RBSheet>(null);
  const [dropdownState, setDropdownState] = useState<Dropdown>({
    dropdownData: [],
    typeData: [],
    isOpen: false,
    selectedItem: '',
    typeSelectedItem: '',
  });

  //** Update dropdown state value */
  const updateDropdownState = useCallback(
    (key: string, value: unknown) => {
      setDropdownState(prevState => ({...prevState, [key]: value}));
    },
    [dropdownState],
  );

  //** Set dropdown data and row data as required to scrollpicker */
  useEffect(() => {
    data?.map(item => {
      dropdownState?.dropdownData.push(item.title);
    });
    updateDropdownState('dropdownData', [...dropdownState.dropdownData]);
  }, [data]);

  useEffect(() => {
    typeData?.map(item => {
      dropdownState?.typeData.push(item.title);
    });
    updateDropdownState('typeData', [...dropdownState.typeData]);
  }, [typeData]);

  //** Open bottomsheet */
  const onOpen = () => {
    refDropdown?.current?.open();
    if (Keyboard) {
      Keyboard.dismiss();
    }
  };
  //** Set value default and if user select */
  const onDone = () => {
    refDropdown?.current?.close();
    if (!dropdownState.selectedItem) {
      setValue?.(dropdownState?.dropdownData[0]);
    } else {
      setValue?.(dropdownState.selectedItem);
    }
    if (!dropdownState?.typeSelectedItem) {
      setTypeValue?.(dropdownState?.typeData[0]);
    } else {
      setTypeValue?.(dropdownState.typeSelectedItem);
    }
  };

  return (
    <View style={[style.mainView, mainViewStyle]}>
      {label && (
        <Text allowFontScaling={false} style={[style.label, lableStyle]}>
          {label}
        </Text>
      )}
      <View style={[style.filterRowContainer, filterRowContainer]}>
        <TouchableOpacity
          style={[style.container, containerStyle]}
          activeOpacity={0.8}
          onPress={onOpen}>
          <View style={style.innerLableView}>
            {innerLabel && (
              <Text allowFontScaling={false} style={style.innerLable}>
                {innerLabel}
              </Text>
            )}
            <View style={style.valueView}>
              <Text
                allowFontScaling={false}
                style={[
                  value ? style.valueText : style.placeholderText,
                  placeholderStyle,
                ]}>
                {value ? value : placeholder}
              </Text>
            </View>
          </View>
          <View style={style.arrowView}>
            <SvgIndex.downArroy height={arrowHeight} width={arrowWidth} />
          </View>
        </TouchableOpacity>
        {showRightIcon && (
          <TouchableOpacity
            onPress={onPressRight}
            activeOpacity={0.8}
            style={[style.filterIconStyle, mainFilterIconStyle]}>
            {isShowScaleFilterIcon ? (
              <SvgIndex.filterWhite
                height={percentageHeight(2)}
                width={percentageHeight(2.2)}
              />
            ) : (
              <SvgIndex.filterWhite />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text allowFontScaling={false} style={[style.errorLabel]}>
          {error}
        </Text>
      )}
      <RBSheet
        ref={refDropdown}
        height={300}
        customStyles={{
          container: style.bottomSheetList,
        }}>
        <View style={style.sheetContent}>
          <TouchableOpacity onPress={onDone} activeOpacity={0.6}>
            <Text style={style.doneLabelStyle} allowFontScaling={false}>
              Done
            </Text>
          </TouchableOpacity>
          <View style={style.dropdownView}>
            <ScrollPicker
              dataSource={dropdownState.dropdownData}
              selectedIndex={0}
              itemTextStyle={style.selectOptionBottomSheetStyle}
              activeItemTextStyle={style.selectActiveOptionBottomSheetStyle}
              onValueChange={data => updateDropdownState('selectedItem', data)}
              wrapperHeight={260}
              wrapperBackground={color.secondaryBG}
              itemHeight={40}
              highlightBorderWidth={0}
              highlightColor={color.secondaryBG}
            />
            {isShowType && (
              <ScrollPicker
                dataSource={dropdownState?.typeData}
                selectedIndex={0}
                itemTextStyle={style.selectOptionBottomSheetStyle}
                activeItemTextStyle={style.selectActiveOptionBottomSheetStyle}
                onValueChange={data =>
                  updateDropdownState('typeSelectedItem', data)
                }
                wrapperHeight={260}
                wrapperBackground={color.secondaryBG}
                itemHeight={40}
                highlightBorderWidth={0}
                highlightColor={color.secondaryBG}
              />
            )}
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default memo(Dropdown);
