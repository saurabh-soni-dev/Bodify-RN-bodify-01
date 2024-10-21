import React, { FC, memo } from 'react';
import { Modal, ModalProps, View, ViewStyle } from 'react-native';
import CustomStatusbar from '../customStatusbar/CustomStatusbar';
import styles from './modalComponent.style';

interface ModalComponentProps {
  visible: boolean;
  animationType?: 'none' | 'slide' | 'fade';
  containerStyle?: ViewStyle;
  modalProp?: ModalProps;
  children: React.ReactNode;
  statusBar?: boolean;
  onRequestClose?:()=>void
}
const ModalComponent: FC<ModalComponentProps> = ({
  children,
  visible,
  animationType,
  containerStyle,
  statusBar,
  modalProp,
  onRequestClose
}) => {
  return (
    <Modal
      animationType={animationType}
      visible={visible}
      statusBarTranslucent
      transparent
      onRequestClose={onRequestClose}
      {...modalProp}>
      {statusBar && <CustomStatusbar />}
      <View style={[styles.container, containerStyle]}>{children}</View>
    </Modal>
  );
};

export default memo(ModalComponent);
ModalComponent.defaultProps = {
  statusBar: false,
};
