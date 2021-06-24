import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type Pros = {
  title: string;
  subtitle: string;
};

export function ListHeader({ title, subtitle }: Pros) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
