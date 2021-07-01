import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';

import { Avatar } from '../Avatar';
import { ModalView } from '../ModalView';
import { SignOutConfirm } from '../SignOutConfirm';
import { styles } from './styles';

export function Profile() {
  const { user, signOut } = useAuth();
  const [openSignOutConfirm, setOpenSignOutConfirm] = useState(false);

  function handleSignOut() {
    signOut();
    setOpenSignOutConfirm(false);
    // Alert.alert('Logout', 'Deseja sair do Gameplay?', [
    //   {
    //     text: 'Não',
    //     style: 'cancel',
    //   },
    //   {
    //     text: 'Sim',
    //     onPress: () => {
    //       signOut();
    //     },
    //   },
    // ]);
  }

  function handleOpenSignOutConfirm() {
    setOpenSignOutConfirm(true);
  }

  function handleCloseSignOutConfirm() {
    setOpenSignOutConfirm(false);
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleOpenSignOutConfirm}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
      <ModalView
        visible={openSignOutConfirm}
        closeModal={handleCloseSignOutConfirm}
        height={240}
      >
        <SignOutConfirm
          confirm={handleSignOut}
          dismiss={handleCloseSignOutConfirm}
        />
      </ModalView>
    </View>
  );
}
