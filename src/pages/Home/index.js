import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

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
          const couponsList = allCoupons.data.map(item => ({
            ...item,
            formatedDiscount:
              item.type === 'percentage'
                ? `${item.discount}%`
                : `${item.discount}R$`,

            formatedTitle:
              item.title.length > 10
                ? `${item.title.substr(0, 10)}...`
                : item.title,
          }));

          setCoupons(couponsList);
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
        {/* <ListCategories
          data={coupons}
          renderItem={({ item }) => <Category />}
        /> */}

        <ListCoupons
          data={coupons}
          renderItem={({ item }) => (
            <Cupom
              navigation={navigation}
              name={item.formatedTitle}
              address={item.address}
              id={item.id}
              storeName={item.fantasy_name}
              priceDiscount={item.price}
              price={item.value}
              discount={item.formatedDiscount}
              shopImage={item.shop_image}
              imgCupom={item.image}
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

Home.navigationOptions = {
  tabBarLabel: 'Home',

  tabBarIcon: ({ tintColor }) => (
    <Icon size={18} name="ticket-alt" color={tintColor} />
  ),
};
