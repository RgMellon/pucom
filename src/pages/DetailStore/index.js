import React from 'react';

import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';

import { View, TouchableOpacity } from 'react-native';
import image from './GIC-0002-014_zoom1.jpg';

import {
  Container,
  Content,
  Title,
  ListCoupons,
  Cupom,
  Address,
  TitleCupom,
  ContainerCupomStore,
  ImageCupom,
  TitleItem,
  DesCupom,
  Info,
  Phone,
  DescStore,
  TitleAddress,
} from './styles';

export default function DetailStore() {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <HeaderImageScrollView
      maxHeight={200}
      minHeight={100}
      headerImage={require('./wallpaper.jpg')}
      renderForeground={() => (
        <View
          style={{
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={() => console.log('tap!!')} />
        </View>
      )}
    >
      <View style={{ height: 600 }}>
        <Container>
          <Content>
            <Title> Casas Bahia </Title>

            <DescStore>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              quis mauris pharetra, laoreet turpis id, facilisis sapien.
              Pellentesque in mi quis tortor rhoncus facilisis quis nec est.
            </DescStore>

            <Title> Endereço </Title>
            <Address>
              Rua do Tiro, Perto da casa da mocinga asoidoadsi saodi saoidsodasi
              o, nº 22
            </Address>

            <Title> Contato </Title>

            <Phone>(18) 99116-1413</Phone>

            <ContainerCupomStore>
              <TitleCupom> Veja mais cupons dessa lojas </TitleCupom>
              <ListCoupons
                keyExtractor={item => item}
                data={data}
                renderItem={({ item }) => (
                  <Cupom>
                    <ImageCupom source={image} />
                    <Info>
                      <TitleItem> Tênis bacana </TitleItem>
                      <DesCupom> lorem ipsum sit amet </DesCupom>
                    </Info>
                  </Cupom>
                )}
              />
            </ContainerCupomStore>
          </Content>
        </Container>
      </View>
    </HeaderImageScrollView>
  );
}
