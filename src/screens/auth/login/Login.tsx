import {Button, Container, InputContainer, OrLine} from '@components';
import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './login.style';
import useLogin from './useLogin';

export interface LoginProps {
  userLogin: UserLoginProps;
  userLoginError: UserLoginErrorProps;
  updateLoginInputValue: (key: string, value: string | boolean) => void;
  isLogin: () => void;
  onValidateLogin: () => void;
  navigateToForgotPassword: () => void;
  navigateToSignUp: () => void;
}

export interface UserLoginProps {
  email: string;
  password: string;
  isLoading: boolean;
}

export interface UserLoginErrorProps {
  emailError?: string;
  passwordError?: string;
}

const Login: FC = () => {
  const {
    userLogin,
    userLoginError,
    updateLoginInputValue,
    isLogin,
    onValidateLogin,
    navigateToForgotPassword,
    navigateToSignUp,
  } = useLogin();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container wrapperType="scroll" headerShown showBackIcon>
        <Text allowFontScaling={false} style={styles.headingText}>
          Log in
        </Text>
        <View style={styles.formContainer}>
          <InputContainer
            labelSecond="Email"
            placeholder="Enter Email"
            onChangeText={res =>
              updateLoginInputValue('email', res?.toLowerCase()?.trim())
            }
            value={userLogin?.email}
            keyboardType="email-address"
            error={userLoginError?.emailError}
            containerStyle={styles.emailContainer}
          />
          <InputContainer
            labelSecond="Password"
            placeholder="Enter Password"
            rightElementType={'password'}
            value={userLogin?.password}
            onChangeText={res => updateLoginInputValue('password', res?.trim())}
            maxLength={16}
            error={userLoginError?.passwordError}
            containerStyle={styles.inputContainer}
            inputProps={{returnKeyType: 'done'}}
          />
          <TouchableOpacity
            style={styles.forgotPassButton}
            activeOpacity={0.8}
            onPress={navigateToForgotPassword}>
            <Text allowFontScaling={false} style={styles.forgotPasswordLabel}>
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
      <View style={styles.btnContainer}>
        <View style={styles.privacyContainer}>
          <Text allowFontScaling={false} style={styles.dontHaveAccount}>
            By signing up, you agree to our{' '}
            <Text allowFontScaling={false} style={styles.signUpLabel}>
              Terms of service.
            </Text>
            {'\n'}
            Learn how we process your data in our{' '}
            <Text allowFontScaling={false} style={styles.signUpLabel}>
              Privacy Policy
            </Text>
            {'\n'}
            and{' '}
            <Text allowFontScaling={false} style={styles.signUpLabel}>
              Cookies Policy
            </Text>
            .
          </Text>
        </View>
        <OrLine />
        <Text allowFontScaling={false} style={styles.dontIfDont}>
          If you don’t already have an account, please{'\n'}click here to{' '}
          <Text
            allowFontScaling={false}
            style={styles.signUpLabel}
            onPress={navigateToSignUp}>
            sign up
          </Text>
          .
        </Text>
        <Button
          label="Log in"
          disabled={isLogin}
          inActive={isLogin}
          onPress={onValidateLogin}
          containerStyle={styles.btnStyle}
          isLoading={userLogin.isLoading}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
