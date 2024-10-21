import {Button, Container, CustomDatePicker, InputContainer} from '@components';
import SvgIndex from '@svgIndex';
import moment from 'moment';
import React, {FC, RefObject} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './createAccount.style';
import useCreateAccount from './useCreateAccount';

export interface CreateAccountProps {
  inputRef: RefObject<TextInput>;
  accountInfo: AccountInfoProps;
  createAccountError: CreateAccountErrorProps;
  updateCreateAccountInputValue: (key: string, value: string | boolean) => void;
  isContinue: () => void;
  onOpenDatePicker: () => void;
  onCloseDatePicker: () => void;
  onCheckPrivacyPolicy: () => void;
  onSelectDateOfBirth: () => void;
  onValidateCreateAccount: () => void;
  onClickBack: () => void;
}
export interface AccountInfoProps {
  isAccept: boolean;
  dateOfBirth: string;
  firstName: string;
  lastName: string;
  password: string;
  visibleDatePicker: boolean;
  isLoading: boolean;
}

export interface CreateAccountErrorProps {
  firstNameError?: string | undefined;
  lastNameError?: string | undefined;
  passwordError?: string | undefined;
  dateOfBirthError?: string | undefined;
}

const CreateAccount: FC = () => {
  const {
    inputRef,
    accountInfo,
    createAccountError,
    updateCreateAccountInputValue,
    isContinue,
    onOpenDatePicker,
    onCloseDatePicker,
    onSelectDateOfBirth,
    onCheckPrivacyPolicy,
    onValidateCreateAccount,
    onClickBack,
  } = useCreateAccount();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container
        wrapperType="scroll"
        headerShown
        showBackIcon
        onPressBackIcon={onClickBack}>
        <Text allowFontScaling={false} style={styles.headingText}>
          Create Account
        </Text>
        <View style={styles.dataContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.inputContainer}>
              <InputContainer
                ref={inputRef}
                labelSecond="First Name"
                containerStyle={styles.inputLeft}
                placeholder="First name"
                onChangeText={res =>
                  updateCreateAccountInputValue('firstName', res?.trim())
                }
                value={accountInfo?.firstName}
                keyboardType="default"
                error={createAccountError?.firstNameError}
                maxLength={20}
              />
            </View>
            <View style={styles.inputContainer}>
              <InputContainer
                labelSecond="Last Name"
                placeholder="Last name"
                containerStyle={styles.inputRight}
                onChangeText={res =>
                  updateCreateAccountInputValue('lastName', res?.trim())
                }
                value={accountInfo?.lastName}
                keyboardType="default"
                error={createAccountError?.lastNameError}
                maxLength={20}
              />
            </View>
          </View>
          <InputContainer
            labelSecond="Password"
            placeholder="Enter Password"
            onChangeText={res =>
              updateCreateAccountInputValue('password', res?.trim())
            }
            value={accountInfo?.password}
            rightElementType="password"
            hidePassword
            maxLength={15}
            error={createAccountError?.passwordError}
          />
          <CustomDatePicker
            visible={accountInfo?.visibleDatePicker}
            onOpen={onOpenDatePicker}
            onClose={onCloseDatePicker}
            label="Date of Birth"
            placeholder="Date of Birth"
            onConfirm={(res: Date) => onSelectDateOfBirth(res?.toString())}
            value={
              accountInfo?.dateOfBirth
                ? moment(accountInfo?.dateOfBirth).format('DD MMMM YYYY')
                : ''
            }
            error={createAccountError?.dateOfBirthError}
            maxDate={new Date()}
          />
          <View style={styles.privacyPolicyContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={onCheckPrivacyPolicy}>
              {!accountInfo?.isAccept ? (
                <SvgIndex.checkboxEmpty />
              ) : (
                <SvgIndex.checkboxFilled />
              )}
            </TouchableOpacity>
            <Text allowFontScaling={false} style={styles.description}>
              I agree to Bodify’s{' '}
              <Text allowFontScaling={false} style={styles.policyLabel}>
                Privacy Policy
              </Text>{' '}
              and{' '}
              <Text allowFontScaling={false} style={styles.policyLabel}>
                Terms of Service
              </Text>
            </Text>
          </View>
        </View>
      </Container>
      <View style={styles.buttonContainer}>
        <Button
          containerStyle={styles.btnContainerStyle}
          label="Continue"
          onPress={onValidateCreateAccount}
          disabled={isContinue}
          inActive={isContinue}
          isLoading={accountInfo?.isLoading}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateAccount;
