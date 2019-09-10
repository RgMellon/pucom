import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container, ListCategories, ListCoupons } from './styles';
import Cupom from '../../components/Cupom';
import Category from '../../components/Category';
import Header from '~/components/Header';
import Background from '~/components/Background';

export default function Home({ navigation }) {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    async function getCoupons() {
      try {
        const response = await api.get('coupons');
        const allCoupons = response.data;

        if (allCoupons.status) {
          setCoupons(allCoupons.data);
        }
      } catch (err) {
        console.tron.log(err);
      }
    }

    getCoupons();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ListCategories
          data={coupons}
          renderItem={({ item }) => <Category />}
        />

        <ListCoupons
          data={coupons}
          renderItem={({ item }) => (
            <Cupom
              navigation={navigation}
              name={item.description}
              address={item.address}
              id={item.id}
            />
          )}
        />
      </Container>
    </>
  );
}

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
