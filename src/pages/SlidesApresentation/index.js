import React, { Component } from 'react';
import Carousel from 'react-native-banner-carousel';
import {
  StyleSheet, Image, View, Dimensions, Text,
} from 'react-native';

import search from '../../assets/img/slides/2.png';
import sentada from '../../assets/img/slides/sentada.jpg';

const BannerWidth = Dimensions.get('window').width - 50;
const BannerHeight = '80%';
const images = [search, sentada];

export default class SlidesApresentation extends Component {
  static navigationOptions = {
    header: null,
  };

  // eslint-disable-next-line class-methods-use-this
  renderPage(image, index) {
    return (
      <View
        key={index}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'red',
          width: '100%',
        }}
      >
        <Image
          style={{ width: BannerWidth, height: BannerHeight, borderRadius: 5 }}
          source={image}
        />
        <Text> oi </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel autoplay autoplayTimeout={55000} loop index={0} pageSize={BannerWidth}>
          {images.map((image, index) => this.renderPage(image, index))}
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fafafa',
  },
});
