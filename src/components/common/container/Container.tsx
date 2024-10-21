import color from '@theme/color';
import React, {memo} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  View,
  ViewStyle,
} from 'react-native';
import CustomStatusbar from '../customStatusbar/CustomStatusbar';
import Header, {HeaderProps} from '../header/Header';
import {styles} from './container.style';

interface ContainerProps extends HeaderProps {
  wrapperType: 'simple' | 'scroll' | 'form';
  containerViewStyle?: ViewStyle;
  statusBarShown?: boolean;
  headerShown?: boolean;
  contentContainerStyle?: ViewStyle;
  children?: React.ReactNode;
  scrollContainerStyle?: ViewStyle;
  headerShownWithScroll?: boolean;
  scrollViewProps?: ScrollViewProps;
  statusBarColor?: string;
  bounces?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  wrapperType,
  containerViewStyle,
  statusBarShown,
  headerShown,
  contentContainerStyle,
  children,
  scrollContainerStyle,
  headerShownWithScroll,
  scrollViewProps,
  statusBarColor,
  bounces,
  ...restProps
}) => {
  const renderHeader = () => {
    if (!headerShown) return null;
    return <Header {...restProps} />;
  };

  const renderSimpleContainer = () => (
    <View style={[styles.mainContainer, contentContainerStyle]}>
      {headerShown && renderHeader()}
      {children}
    </View>
  );

  const renderScrollContainer = () => (
    <>
      {headerShown && renderHeader()}
      <ScrollView
        bounces={bounces}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        overScrollMode="never"
        keyboardShouldPersistTaps="handled"
        alwaysBounceVertical={false}
        contentContainerStyle={[styles.contentContainer, scrollContainerStyle]}
        {...scrollViewProps}>
        {headerShown && headerShownWithScroll && renderHeader()}
        {children}
      </ScrollView>
    </>
  );

  const renderFormContainer = () => (
    <>
      {headerShown && renderHeader()}
      <KeyboardAvoidingView
        style={styles.keyBoard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          overScrollMode="never"
          keyboardShouldPersistTaps="handled"
          alwaysBounceVertical={false}
          contentContainerStyle={[
            styles.contentContainer,
            scrollContainerStyle,
          ]}
          {...scrollViewProps}>
          {headerShown && headerShownWithScroll && renderHeader()}
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );

  return (
    <View style={styles.mainContainer}>
      {statusBarShown && (
        <CustomStatusbar
          backgroundColor={statusBarColor}
          barStyle={'dark-content'}
        />
      )}
      <View style={[styles.container, containerViewStyle]}>
        {wrapperType === 'simple' && renderSimpleContainer()}
        {wrapperType === 'scroll' && renderScrollContainer()}
        {wrapperType === 'form' && renderFormContainer()}
      </View>
    </View>
  );
};

export default memo(Container);
Container.defaultProps = {
  wrapperType: 'simple',
  statusBarShown: true,
  headerShown: false,
  statusBarColor: color.primaryBG,
  bounces: false,
};
