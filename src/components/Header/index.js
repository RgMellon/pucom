import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import logo from '../../assets/img/brandPucom.png';

export default function Header() {
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}> Pucom </Text>
        <Text style={styles.subTitle}> Economize facíl </Text>
      </View>

      <View>
        <Image style={styles.img} source={logo} />
      </View>
    </View>
  );
}
