import { Button, Container, ErrorText } from '@components';
import color from '@theme/color';
import React, { FC, RefObject } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import useVerifyOTP from './useVerifyOTP';
import styles from './verifyOTP.style';

export interface VerifyOTPProps {
  OTPRef: RefObject<TextInput>;
  otp: string | undefined;
  verifyOtpError: string | undefined;
  updateVerifyOtpInputValue: () => void;
  onSubmitEditing: () => void;
  onValidateVerifyOTP: () => void;
  navigateToLogin: () => void;
}

const VerifyOTP: FC = () => {
  const {
    otp,
    OTPRef,
    verifyOtpError,
    updateVerifyOtpInputValue,
    onSubmitEditing,
    onValidateVerifyOTP,
    navigateToLogin,
  } = useVerifyOTP();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container wrapperType="scroll" headerShown showBackIcon>
        <Text allowFontScaling={false} style={styles.headingText}>Please Check Your{'\n'}Email</Text>
        <View style={styles.otpContainer}>
          <CodeField
            ref={OTPRef}
            value={otp}
            onChangeText={updateVerifyOtpInputValue}
            cellCount={4}
            keyboardType="number-pad"
            returnKeyType="done"
            textContentType="oneTimeCode"
            allowFontScaling={false}
            onSubmitEditing={onSubmitEditing}
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                style={[
                  styles.cell,
                  {
                    borderColor: verifyOtpError
                      ? color.warning
                      : !isFocused
                      ? color.secondaryText
                      : color.primaryText,
                    borderWidth: verifyOtpError ? 1.5 : !isFocused ? 1 : 1.5,
                  },
                ]}>
                <Text allowFontScaling={false} key={index} style={[styles.otp]}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </View>
        <Text allowFontScaling={false} style={styles.description}>
          Please enter the code that we have just{'\n'}sent you.
        </Text>
      </Container>
      <View style={styles.buttonContainer}>
        <ErrorText error={verifyOtpError} errorText={styles.errorLabel} />
        <Text allowFontScaling={false} style={styles.rememberLabel}>
          Remember password?{' '}
          <Text allowFontScaling={false} onPress={navigateToLogin} style={styles.loginLabel}>
            Log in
          </Text>
          .
        </Text>
        <Button
          label="Continue"
          inActive={!otp}
          disabled={!otp}
          onPress={onValidateVerifyOTP}
          containerStyle={styles.btnContainerStyle}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default VerifyOTP;
