import React, { Children, ReactNode } from 'react';
import {
  View,
  Text,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from 'react-native';
import { Background } from '../Background';
import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
  height?: number;
};

export function ModalView({ children, closeModal, height, ...rest }: Props) {
  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={() => closeModal && closeModal()}>
        <View style={styles.overlay}>
          <View style={[styles.container, height ? { flex: 0, height } : {}]}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
