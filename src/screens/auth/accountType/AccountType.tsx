import { Button, Container } from '@components';
import imageIndex from '@imageIndex';
import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import style from './accountType.style';
import useAccountType from './useAccountType';

export interface AccountTypeProps{
  type:bodiFyAccountType,
  isLoading:boolean
  updateAccountTypeInputValue:(key:string, value:string|boolean)=>void
  onClickContinue:()=>void
  onClickBack:()=>void
}
export type bodiFyAccountType = 'Exercise' | 'Instruct' | undefined;

const AccountType: FC = () => {
  const {accountType, updateAccountTypeInputValue,onClickContinue, onClickBack} = useAccountType();
  return (
    <Container
      wrapperType="simple"
      headerShown
      showBackIcon
      onPressBackIcon={onClickBack}>
      <Text allowFontScaling={false} style={style.headingText}>I want to</Text>
      <View style={style.containerView}>
        <View style={style.contentContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => updateAccountTypeInputValue('type','Exercise')}>
            <Image
              source={imageIndex.trainerType}
              style={[
                style.typeLogo,
                style.border,
                accountType?.type === 'Exercise' ? style.borderActive : style.border,
              ]}
              resizeMode="contain"
            />
            <Text allowFontScaling={false}
              style={[
                style.typeLabel,
                accountType?.type === 'Exercise' ? style.activeTypeLabel : style.typeLabel,
              ]}>
              Exercise
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => updateAccountTypeInputValue('type','Instruct')}>
            <Image
              source={imageIndex.instructorType}
              style={[
                style.typeLogo,
                style.border,
                accountType?.type === 'Instruct' ? style.borderActive : style.border,
              ]}
              resizeMode="contain"
            />
            <Text allowFontScaling={false}
              style={[
                style.typeLabel,
                accountType?.type === 'Instruct' ? style.activeTypeLabel : style.typeLabel,
              ]}>
              Instruct
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.buttonContainer}>
        <Button
          label="Continue"
          onPress={onClickContinue}
          inActive={!accountType?.type}
          containerStyle={style.btnContainerStyle}
          isLoading={accountType?.isLoading}
        />
      </View>
    </Container>
  );
};

export default AccountType;
