import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'

import styles from './styles';

export default class Categories extends Component {


  state = {
    categories: [
      {
        id: 1,
        name: 'Tênis',
      },
      {
        id: 2,
        name: 'Camisa',
      },
      {
        id: 3,
        name: 'Blusa',
      },
      {
        id: 4,
        name: 'Comida',
      },
      {
        id: 5,
        name: 'Lazer',
      },
      {
        id: 6,
        name: 'Ingresso',
      },
      {
        id: 7,
        name: 'Comida',
      },
      {
        id: 8,
        name: 'Comida',
      },
    ]
  }


  render() {
    const { categories } = this.state;
    return (
      // <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={categories}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.badge}>
              <Text> {item.name} </Text>
            </View>
          )}
        />

      </View>

    );
  }
}
