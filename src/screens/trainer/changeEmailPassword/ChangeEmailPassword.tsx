import {Container, InputContainer} from '@components';
import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './changeEmailPassword.style';
import useChangeEmailPassword from './useChangeEmailPassword';

export interface ChangeEmailPasswordProps {
  userInfo: UserInfoProps;
  navigateToChange: () => void;
}
export interface UserInfoProps {
  email?: string;
  password?: string;
}

const ChangeEmailPassword: FC = () => {
  const {userInfo, navigateToChange} = useChangeEmailPassword();
  return (
    <Container
      wrapperType="simple"
      headerShown
      showBackIcon
      lable="Change Email & Password">
      <View style={styles.inputContentContainers}>
        <InputContainer
          label="Email"
          placeholder="Enter Email"
          value={userInfo?.email}
          keyboardType="email-address"
          rightElementType="textButton"
          textButtonText="Change"
          onPressTextButton={() => navigateToChange('email')}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          editable={false}
        />
        <InputContainer
          label="Password"
          placeholder="Enter Password"
          value={userInfo?.password}
          keyboardType="email-address"
          secureTextEntry
          containerStyle={styles.containerStyle}
          rightElementType="textButton"
          textButtonText="Change"
          onPressTextButton={navigateToChange}
          hidePassword
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          editable={false}
        />
      </View>
    </Container>
  );
};

export default ChangeEmailPassword;
