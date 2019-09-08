import React, { useEffect, useState } from 'react';

import { Alert } from 'react-native';
import {
  Container,
  Header,
  HeaderText,
  ValueText,
  Content,
  HeaderContent,
  ImageProduct,
  ContentDetail,
  ProductName,
  ProductDescription,
  Prices,
  OldPrice,
  NewPrice,
  TextWarn,
  Warn,
  ImageWarn,
  TextButton,
  ButtonRescue,
  // Product,
  ImageContainer,
  DescriptionProduct,
} from './styles';

import time from '~/assets/img/time.png';

import api from '~/services/api';

export default function DetailPucom({ navigation }) {
  const [cupom, setCupom] = useState({});

  const id = navigation.getParam('id');

  async function handleGetCupom() {
    try {
      const response = await api.post(`coupons/${id}`);

      // navigation.navigate('ConfirmCupom');
    } catch (e) {
      Alert.alert('Ocorreu um erro ao resgatar, tente novamente mais tarde');
    }
  }

  useEffect(() => {
    async function loadCupom() {
      try {
        const response = await api.get(`coupons/${id}`);
        setCupom(response.data[0]);
      } catch (e) {
        Alert.alert('Ocorreu um erro ao carregar cupom');
      }
    }

    loadCupom();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderText> Economize </HeaderText>
        <ValueText> 30% </ValueText>
      </Header>
      <Content>
        <HeaderContent>
          <ImageProduct
            source={{
              uri:
                'https://assets.xtechcommerce.com/uploads/images/medium/a84adebedbfaef7792e23cec2f588ba9.jpg',
            }}
            resizeMode="cover"
          />
        </HeaderContent>
        <ContentDetail>
          <ProductName> Camisa NazaRé </ProductName>
          <ProductDescription>{cupom.description}</ProductDescription>
          <Prices>
            <OldPrice> R$ 22,00</OldPrice>
            <NewPrice> R$ 15,00 </NewPrice>
          </Prices>
        </ContentDetail>
      </Content>
      <Warn>
        <ImageWarn source={time} />
        <TextWarn>
          Após clicar em resgatar cupom, você tem 30 minutos para apresentar a
          loja antes de expirar, vai perder essa promoção?
        </TextWarn>
      </Warn>

      <ButtonRescue onPress={handleGetCupom}>
        <TextButton> Eu QUEROO! </TextButton>
      </ButtonRescue>
    </Container>
  );
}
