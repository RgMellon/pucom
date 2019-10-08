import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ToastAndroid } from 'react-native';
import api from '~/services/api';

import {
  Container,
  Header,
  ContainerImage,
  ImageProduct,
  Content,
  Separator,
  ProductName,
  ContentOff,
  OffText,
  OffStoreName,
  ContentOldPrice,
  OldPrice,
  Discount,
  PriceWithDiscount,
  Warn,
  TextWarn,
  Footer,
  ConfirmButton,
  TextButton,
} from './styles';

export default function DetailPucom({ navigation }) {
  const [cupom, setCupom] = useState({});
  const [loading, setLoading] = useState(false);

  const id = navigation.getParam('id');

  useEffect(() => {
    async function loadCupom() {
      try {
        const response = await api.get(`coupons/${id}`);
        setCupom(response.data);
        setLoading(false);
      } catch (e) {
        console.tron.log(e);
      }
    }

    loadCupom();
  }, []);

  async function handleGetCupom() {
    setLoading(true);
    try {
      const response = await api.post(`coupons/${id}`);
      if (response.data.take) {
        ToastAndroid.show(
          'Você ja pegou esse cupom, veja na sua lista',
          ToastAndroid.SHORT
        );

        setLoading(false);
        return;
      }

      if (response.data.status === false) {
        navigation.navigate('RegisterInfos', { id });
        return;
      }

      const { expirated_at: expiratedAt, coupon } = response.data;
      setLoading(false);
      navigation.navigate('ConfirmCupom', { expiratedAt, coupon });
    } catch (e) {
      setLoading(false);
      ToastAndroid.show(
        'Falha ao pegar cupom, tente novamente mais tarde',
        ToastAndroid.SHORT
      );
    }
  }

  return (
    <>
      <Container>
        <Header>
          <ContainerImage>
            <ImageProduct
              resizeMode="contain"
              source={{
                uri: cupom.image,
              }}
            />
          </ContainerImage>
        </Header>
        <Content>
          <ProductName>{cupom.title}</ProductName>

          <Separator />

          <ContentOff>
            <OffText> Oferta de </OffText>
            <OffStoreName> {cupom.fantasy_name} </OffStoreName>
          </ContentOff>

          <ContentOldPrice>
            <OldPrice> R$ {cupom.price} </OldPrice>
            <Discount> ({cupom.discount} de desconto) </Discount>
          </ContentOldPrice>

          <PriceWithDiscount> R$ {cupom.value} </PriceWithDiscount>

          <Separator />

          <Warn> Aviso </Warn>
          <TextWarn>
            Ao clicar em resgatar você tem {cupom.minutes} minutos para pegar na
            lojas
          </TextWarn>
        </Content>

        <Footer>
          <ConfirmButton onPress={handleGetCupom}>
            {loading ? (
              <ActivityIndicator size="small" color="#320061" />
            ) : (
              <TextButton> Resgatar </TextButton>
            )}
          </ConfirmButton>
        </Footer>
      </Container>
    </>
  );
}

DetailPucom.defaultNavigationOptions = {
  headerTransparent: true,
};
