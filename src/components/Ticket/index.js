import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            style={{flex: 1}}
            source={{
              uri: this.props.img,
            }}
          />

        </View>
        <View style={styles.description}>

          <View style={styles.detailLeft} />
          <View style={styles.detailRight} />


          <View style={styles.discount}>
            <Text style={styles.discountPrice}> 20% </Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.storeName}>
              Dona Maria
            </Text>

            <Text style={styles.itemDiscount}>
              20 % desconto camiseta
            </Text>

            <Text style={styles.validate}>
                Valido até 24/09/21 as 13:00
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
