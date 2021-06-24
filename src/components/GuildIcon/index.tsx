import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export interface GuildIconProps {}

export function GuildIcon(props: GuildIconProps) {
  const uri =
    'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg';
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
