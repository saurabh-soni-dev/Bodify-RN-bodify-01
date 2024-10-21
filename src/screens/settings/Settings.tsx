import {SettingsCard} from '@card';
import {ConfirmationModal, CustomStatusbar} from '@components';
import imageIndex from '@imageIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import {SectionProps} from 'src/components/card/settingsCard/SettingsCard';
import styles from './settings.style';
import useSettings from './useSettings';

export interface SettingsProps {
  settings: SectionProps[];
  deleteModal: boolean;
  logoutModal: boolean;
}

const Settings: FC = () => {
  const {settingsInfo, handleModal, handleNavigation} = useSettings();
  return (
    <>
      <View style={styles.container}>
        <CustomStatusbar backgroundColor={color.primaryBG} barStyle={'dark-content'}/>
        <View style={styles.mainContainer}>
          <Text allowFontScaling={false} style={styles.headingText}>
            Settings
          </Text>
          <FlatList
            data={settingsInfo?.settings}
            keyExtractor={(_, index) => {
              return `${index}`;
            }}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <SettingsCard
                key={index}
                item={item}
                index={index}
                onPress={() => handleNavigation(item?.id)}
              />
            )}
          />
        </View>
      </View>
      <ConfirmationModal
        visible={settingsInfo?.deleteModal}
        animationType="slide"
        image={imageIndex.deleteAccount}
        titleText={`Delete Account`}
        desText={`Are you sure you want to delete your account? You will lose all of\nyour data`}
        cancelLabel="Cancel"
        confirmLabel="Yes"
        onConfirm={() => handleModal(1)}
        onCancel={() => handleModal(3)}
        onClose={() => handleModal(3)}
        confirmBtnStyle={styles.confirmBtnStyle}
        cancelBtnStyle={styles.deletCancelBtnStyle}
        cancelLableStyle={styles.cancelLableStyle}
      />
      <ConfirmationModal
        visible={settingsInfo?.logoutModal}
        animationType="slide"
        image={imageIndex.logout}
        titleText={`Are you sure you want to\nlog out?`}
        cancelLabel="Cancel"
        confirmLabel="Yes"
        onConfirm={() => handleModal(2)}
        onCancel={() => handleModal(3)}
        onClose={() => handleModal(3)}
        cancelBtnStyle={styles.cancelBtnStyle}
        confirmBtnStyle={styles.logoutConfirmBtnStyle}
        btnViewStyle={styles.btnViewStyle}
        confirmLableStyle={styles.deleteConfirmBtnStyle}
      />
    </>
  );
};

export default Settings;
