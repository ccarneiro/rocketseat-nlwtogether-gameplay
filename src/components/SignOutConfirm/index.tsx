import React from 'react';
import { View, Text, PanResponder } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

const gesture = PanResponder.create({
  onPanResponderTerminationRequest: () => false,
  onStartShouldSetPanResponderCapture: () => true,
});

type Props = {
  confirm?: () => void;
  dismiss?: () => void;
};

export function SignOutConfirm({ confirm, dismiss }: Props) {
  return (
    <View style={styles.container} {...gesture.panHandlers}>
      <View style={styles.message}>
        <Text style={styles.title}>Deseja sair do Game</Text>
        <Text style={[styles.title, styles.primary]}>Play</Text>
        <Text style={styles.title}>?</Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => dismiss && dismiss()}>
          <Text style={styles.buttonText}>Não</Text>
        </RectButton>
        <RectButton
          style={[styles.button, styles.defaultButton]}
          onPress={() => confirm && confirm()}
        >
          <Text style={styles.buttonText}>Sim</Text>
        </RectButton>
      </View>
    </View>
  );
}
