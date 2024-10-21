import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, { forwardRef, memo, useRef, useState } from 'react';
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { styles } from './inputContainer.style';

interface InputPorps {
  reference?: React.Ref<TextInput>;
  containerStyle?: ViewStyle;
  lableRowStyle?: ViewStyle;
  labelIcon?: React.JSX.ElementType;
  label?: string;
  labelStyle?: TextStyle;
  labelSecondOptional?: string;
  labelSecondOptionalStyle?: TextStyle;
  labelSecond?: string;
  labelSecondViewStyle?: ViewStyle;
  labelSecondIcon?: React.JSX.ElementType;
  labelSecondTextStyle?: TextStyle;
  inputContainerStyle?: ViewStyle;
  leftIcon?: React.JSX.ElementType;
  inputStyle?: TextStyle;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  inputProps?: TextInputProps;
  rightElementType?: 'password' | 'dropdown' | 'textButton';
  hidePassword?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  editable?: boolean;
  onPressDropdown?: () => void;
  onPressTextButton?: () => void;
  textButtonText?: string;
  error?: string;
  errorLabelStyle?: TextStyle;
  validationLabelcolor?: boolean;
  onSubmitEditing?: (value: any) => void;
}

const InputContainer = forwardRef<TextInput, InputPorps>(
  (
    {
      reference,
      containerStyle,
      lableRowStyle,
      label,
      labelStyle,
      labelSecondOptional,
      labelSecondOptionalStyle,
      labelSecond,
      labelSecondViewStyle,
      labelSecondTextStyle,
      inputContainerStyle,
      inputStyle,
      placeholder,
      placeholderTextColor,
      secureTextEntry,
      autoCapitalize,
      returnKeyType,
      rightElementType,
      hidePassword,
      value,
      onChangeText,
      keyboardType,
      multiline,
      numberOfLines,
      maxLength,
      editable,
      onPressDropdown,
      onPressTextButton,
      textButtonText,
      error,
      errorLabelStyle,
      validationLabelcolor,
      inputProps,
      onSubmitEditing,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const inputRef: any = ref ?? useRef<TextInput>(null);
    const checkIsFocusedHandler = () => {
      setTimeout(() => {
        let result = inputRef?.current?.isFocused();
        setIsFocused(result);
      }, 0);
    };
    return (
      <View style={[styles.container, containerStyle]}>
        {label && (
          <View style={[styles.lableRow, lableRowStyle]}>
            {props.labelIcon && (
              <View style={styles.lableIcon}>
                {props?.labelIcon && <props.labelIcon />}
              </View>
            )}
            {label && (
              <Text
                allowFontScaling={false}
                style={[styles.lable, labelStyle]}
                numberOfLines={1}>
                {label}{' '}
                {labelSecondOptional && (
                  <Text
                    allowFontScaling={false}
                    style={[styles.optionalLable, labelSecondOptionalStyle]}>
                    {labelSecondOptional}
                  </Text>
                )}
              </Text>
            )}
          </View>
        )}
        {labelSecond && (
          <View style={[styles.lableSecondView, labelSecondViewStyle]}>
            {props?.labelSecondIcon && (
              <View style={styles.lableSecondIconView}>
                <props.labelSecondIcon />
              </View>
            )}
            <Text
              allowFontScaling={false}
              style={[
                styles.lableSecond,
                labelSecondTextStyle,
                {
                  color:
                    validationLabelcolor && error
                      ? color.warning
                      : color.primaryText,
                },
              ]}
              numberOfLines={1}>
              {labelSecond}
            </Text>
          </View>
        )}
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: error
                ? color.warning
                : !isFocused
                ? color.lightgray
                : color.primary,
              borderWidth: !isFocused && !error ? 1 : 1.5,
            },
            inputContainerStyle,
          ]}>
          {props.leftIcon && (
            <View style={styles.leftIconView}>
              <props.leftIcon />
            </View>
          )}
          <TextInput
            ref={inputRef}
            style={[styles.inputStyle, inputStyle]}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor ?? color.secondaryText}
            onFocus={checkIsFocusedHandler}
            onEndEditing={checkIsFocusedHandler}
            secureTextEntry={
              rightElementType === 'password'
                ? !showPassword
                : hidePassword
                ? true
                : false
            }
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            multiline={multiline}
            numberOfLines={numberOfLines}
            maxLength={maxLength}
            editable={editable}
            cursorColor={color.primary}
            autoCapitalize={autoCapitalize}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            allowFontScaling={false}
            {...inputProps}
          />
          {rightElementType === 'password' && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setShowPassword(!showPassword)}>
              {!showPassword ? <SvgIndex.closeEye /> : <SvgIndex.openEye />}
            </TouchableOpacity>
          )}
          {rightElementType === 'dropdown' && (
            <TouchableOpacity
              style={styles.dropDownStyle}
              activeOpacity={0.8}
              onPress={onPressDropdown}>
              <SvgIndex.downArroy />
            </TouchableOpacity>
          )}
          {rightElementType === 'textButton' && (
            <TouchableOpacity activeOpacity={0.8} onPress={onPressTextButton}>
              <Text allowFontScaling={false} style={styles.textBtnText}>
                {textButtonText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        {error && (
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={[styles.errorLabel, errorLabelStyle]}>
            {error}
          </Text>
        )}
      </View>
    );
  },
);

export default memo(InputContainer);
