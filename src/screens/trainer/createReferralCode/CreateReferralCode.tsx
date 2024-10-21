import {Button, Container, InputContainer} from '@components';
import SvgIndex from '@svgIndex';
import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './createReferralCode.style';
import useCreateReferralCode from './useCreateReferralCode';

export interface CreateReferralCodeProps {
  referralCode: string;
  referredBy: string;
  discount: string;
  comment: string;
  isCodeCopied: boolean;
  isEntered: boolean;
}
export interface CreateReferralCodeErrorProps {
  referralCodeError?: string;
  referredByError?: string;
  discountError?: string;
  commentError?: string;
}
const CreateReferralCode: FC = () => {
  const {
    referralCodeInfo,
    referralCodeError,
    updateReferralCodeState,
    isSaveButton,
    onCopyReferralCode,
    onChangeDiscount,
    onValidateReferralCode,
  } = useCreateReferralCode();

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container
        wrapperType="form"
        headerShown
        showBackIcon
        lable="Referral management"
        containerStyle={styles.headerContainerStyle}>
        <InputContainer
          label="Create code"
          labelStyle={styles.inputLabelStyle}
          value={referralCodeInfo?.referralCode}
          onChangeText={res => updateReferralCodeState(res, 'referralCode')}
          containerStyle={styles.createCodeContainerStyle}
          inputContainerStyle={styles.createCodeInputContainerStyle}
          inputStyle={styles.createCodeInputStyle}
          error={referralCodeError?.referralCodeError}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.copyView}
          onPress={onCopyReferralCode}>
          {referralCodeInfo?.isCodeCopied ? (
            <SvgIndex.copyAllPurple />
          ) : (
            <SvgIndex.copyAll />
          )}
          <Text
            allowFontScaling={false}
            style={[
              styles.copyText,
              referralCodeInfo?.isCodeCopied && styles.isCopyCode,
            ]}>
            Copy code
          </Text>
        </TouchableOpacity>
        <InputContainer
          label="Referral by"
          labelStyle={styles.inputLabelStyle}
          value={referralCodeInfo?.referredBy}
          onChangeText={res => updateReferralCodeState('referredBy', res)}
          containerStyle={styles.containerStyleRef}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          error={referralCodeError?.referredByError}
          errorLabelStyle={styles.errorLabelStyle}
        />
        <InputContainer
          label="Discount"
          labelStyle={styles.inputLabelStyle}
          value={referralCodeInfo?.discount}
          onChangeText={res => {
            updateReferralCodeState('discount', res);
            updateReferralCodeState('isEntered', true);
          }}
          containerStyle={styles.containerView}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          error={referralCodeError?.discountError}
          errorLabelStyle={styles.errorLabelStyle}
          keyboardType="number-pad"
          maxLength={2}
        />
        <InputContainer
          label="Write a comment"
          labelStyle={styles.inputLabelStyle}
          labelSecondOptional=" (optional)"
          labelSecondOptionalStyle={styles.inputLabelOptionsStyle}
          value={referralCodeInfo?.comment}
          onChangeText={res => updateReferralCodeState('comment', res)}
          containerStyle={styles.containerView}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          multiline
          error={referralCodeError?.commentError}
          errorLabelStyle={styles.errorLabelCommentStyle}
        />
      </Container>
      <View style={styles.btnView}>
        {referralCodeInfo?.isCodeCopied && (
          <View style={styles.btnContainer}>
            <Button
              type="Outline"
              leftIcon={SvgIndex.sharecode}
              label="share code"
              disabled={!isSaveButton}
              inActive={!isSaveButton}
              containerStyle={styles.shareBtn}
              nameTextStyle={styles.lableText}
            />
          </View>
        )}
        <View
          style={[
            styles.btnContainer,
            !referralCodeInfo?.isCodeCopied && styles.saveBtn,
          ]}>
          <Button
            label="Save"
            disabled={!isSaveButton}
            inActive={!isSaveButton}
            containerStyle={styles.shareBtn}
            onPress={onValidateReferralCode}
            nameTextStyle={styles.buttonTextStyle}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateReferralCode;
