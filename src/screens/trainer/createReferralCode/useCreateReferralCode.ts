import Clipboard from '@react-native-clipboard/clipboard';
import {checkString} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {
  CreateReferralCodeErrorProps,
  CreateReferralCodeProps,
} from './CreateReferralCode';

const useCreateReferralCode = () => {
  const [referralCodeInfo, setReferralCodeInfo] =
    useState<CreateReferralCodeProps>({
      referralCode: 'SUPERSAVER',
      referredBy: 'John walker',
      discount: '15',
      comment: '',
      isCodeCopied: false,
      isEntered: false,
    });
  const [referralCodeError, setReferralCodeError] =
    useState<CreateReferralCodeErrorProps>({
      referralCodeError: undefined,
      referredByError: undefined,
      discountError: undefined,
      commentError: undefined,
    });

  useEffect(() => {
    onGetCopiedReferralCode();
  }, [referralCodeInfo?.isCodeCopied]);

  //** Handle save button isDisabled & isActive*/
  const isSaveButton = useMemo(
    () =>
      (referralCodeInfo?.referralCode &&
        referralCodeInfo?.referredBy &&
        referralCodeInfo?.discount) ||
      referralCodeInfo?.isCodeCopied,
    [referralCodeInfo],
  );

  //** Update referal info state */
  const updateReferralCodeState = useCallback(
    (key: string, value: string | boolean) => {
      setReferralCodeInfo(prevState => ({...prevState, [key]: value}));
    },
    [referralCodeInfo],
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (
        referralCodeInfo?.discount?.length >= 1 &&
        referralCodeInfo?.discount?.length < 4
      ) {
        updateReferralCodeState('discount', referralCodeInfo?.discount + '%');
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [referralCodeInfo?.isEntered]);

  //** Add % sign on discount input feild */
  const onChangeDiscount = (text: string) => {
    const cleanedText = referralCodeInfo?.discount?.replace(/\D/g, '');
    if (cleanedText?.length <= 1) {
      updateReferralCodeState('discount', text);
    } else {
      updateReferralCodeState('discount', cleanedText + '%');
    }
  };

  //** Set Copied referral code */
  const onCopyReferralCode = useCallback(() => {
    Clipboard.setString(referralCodeInfo?.referralCode);
    updateReferralCodeState('isCodeCopied', !referralCodeInfo?.isCodeCopied);
  }, [referralCodeInfo]);

  //** Get Copied referral code */
  const onGetCopiedReferralCode = useCallback(async () => {
    const copiedText = await Clipboard.getString();
  }, [referralCodeInfo]);

  //** Validate referral code feild  */
  const onValidateReferralCode = useCallback(() => {
    let tempError = {};
    let discount = referralCodeInfo?.discount?.replace('%', '');
    if (!checkString(referralCodeInfo?.referredBy)) {
      tempError = {
        referredByError: validationMessage.invalidReferredBy,
      };
    } else if (discount >= '90') {
      tempError = {
        discountError: validationMessage.invalidDiscount,
      };
    } else {
      tempError = {};
    }
    setReferralCodeError(tempError);
  }, [referralCodeError, referralCodeInfo]);

  return {
    referralCodeInfo,
    referralCodeError,
    updateReferralCodeState,
    isSaveButton,
    onCopyReferralCode,
    onChangeDiscount,
    onValidateReferralCode,
  };
};

export default useCreateReferralCode;
