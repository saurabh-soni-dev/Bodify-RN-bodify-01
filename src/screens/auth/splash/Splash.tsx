import {Button, CustomStatusbar} from '@components';
import imageIndex from '@imageIndex';
import React, {FC, RefObject} from 'react';
import {Image, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import styles from './splash.style';
import useSplash from './useSplash';

interface SplashProps {
  videoRef: RefObject<Video>;
  isMuted: boolean;
  navigateToCreateAccountScreen: () => void;
  navigateToLoginScreen: () => void;
}

const Splash: FC = () => {
  const {top} = useSafeAreaInsets();
  const {
    videoRef,
    isMuted,
    navigateToCreateAccountScreen,
    navigateToLoginScreen,
  } = useSplash();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        translucent={true}
        backgroundColor={'transparent'}
        containerStyle={styles.statusBarContainer}
        barStyle="light-content"
      />
      <View style={styles.mainContainer}>
        <View style={[styles.logoContainer, {top: top + 30}]}>
          <Image
            source={imageIndex.newBodifyLogo}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>
        <View style={styles.contentContainer}>
          <Button
            label="Create Account"
            onPress={navigateToCreateAccountScreen}
            containerStyle={styles.solidContainerStyle}
          />
          <View style={styles.loginButton}>
            <Button
              label="Login"
              type="Outline"
              onPress={navigateToLoginScreen}
              containerStyle={styles.containerStyle}
            />
          </View>
        </View>
        <Video
          ref={videoRef}
          source={imageIndex.splashVideo}
          style={styles.videoStyle}
          resizeMode="cover"
          fullscreenOrientation="portrait"
          repeat={true}
          muted={isMuted}
          ignoreSilentSwitch="obey"
          mixWithOthers={'mix'}
        />
      </View>
    </View>
  );
};

export default Splash;
