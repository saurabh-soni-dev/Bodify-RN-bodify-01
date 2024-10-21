import SvgIndex from '@svgIndex';
import React, {memo} from 'react';
import {Modal, Text, View} from 'react-native';
import Button from '../button/Button';
import styles from './saveConfirmationModal.style';
interface ModalProps {
  visible: boolean;
  onSave: () => void;
  onCancel: () => void;
}
const SaveConfirmationModal: React.FC<ModalProps> = ({
  visible,
  onSave,
  onCancel,
}) => {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <SvgIndex.dissatisfied />
            <Text style={styles.labelStyle}>
              Are you sure you want to save the{'\n'}session ?
            </Text>
            <View style={styles.rowContainer}>
              <View style={styles.saveContainer}>
                <Button
                  label="Save"
                  onPress={onSave}
                  containerStyle={styles.saveBtn}
                  nameTextStyle={styles.saveLabel}
                />
              </View>
              <View style={styles.cancelContainer}>
                <Button
                  label="Cancel"
                  containerStyle={styles.cancelBtn}
                  onPress={onCancel}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default memo(SaveConfirmationModal);
