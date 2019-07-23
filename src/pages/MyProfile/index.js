import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

import pandaSorry from '../../assets/img/avatar/pandaSorry.jpg';

export default function MyProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={pandaSorry} style={styles.avatar} />
        <Text style={styles.name}> Renan Melo </Text>
      </View>
    </View>
  );
}
