import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';

// import { Container } from './styles';
import Header from '../../components/Header';
import Ticket from '../../components/Ticket';
import Categories from '../../components/Categories';

export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <ScrollView style={styles.container}>
        <Ticket img='https://assets.xtechcommerce.com/uploads/images/medium/a84adebedbfaef7792e23cec2f588ba9.jpg'/>
        <Ticket img='http://www.tskf.com.br/blog/wp-content/uploads/2018/04/181069-x-curiosidades-sobre-a-culinaria-da-china-para-voce-conhecer.jpg'/>
        <Ticket img='https://assets.xtechcommerce.com/uploads/images/medium/39635e61742c275e9985781ae5f974ad.jpg' />
      </ScrollView>
    </>
  );
}
