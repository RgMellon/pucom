import React, { useEffect, useState } from 'react';

import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';

import { View, TouchableOpacity, Image } from 'react-native';

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

import api from '~/services/api';

export default function DetailStore({ navigation }) {
  const id = navigation.getParam('id');

  const [store, setStore] = useState({});
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    async function getStore() {
      const response = await api.get(`shops/${id}`);

      const { data } = response;

      const newData = data.coupons.map(item => ({
        ...item,
        formatedTitle:
          item.title.length > 10
            ? `${item.title.substr(0, 10)}...`
            : item.title,

        formatedDesc:
          item.description.length > 10
            ? `${item.description.substr(0, 10)}...`
            : item.description,
      }));

      setCoupons(newData);
      setStore(data);
    }

    getStore();
  }, []);

  function handleRedirectCupom(idCupom) {
    navigation.navigate('DetailCupom', { id: idCupom });
  }

  return (
    <HeaderImageScrollView
      maxHeight={200}
      minHeight={100}
      renderHeader={() => (
        <Image
          source={{
            uri: store.image,
          }}
          style={{ width: '100%', height: 200 }}
        />
      )}
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
      <View
        style={{
          height: 600,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <Container>
          <Content>
            <Title> {store.fantasy_name} </Title>

            <DescStore>{store.description}</DescStore>

            <Title> Endereço </Title>
            <Address>
              {store.address} {store.district} {store.city} / {store.state}
            </Address>

            <Title> Contato </Title>

            <Phone>{store.phone}</Phone>

            <ContainerCupomStore>
              <TitleCupom> Veja mais cupons dessa lojas </TitleCupom>
              <ListCoupons
                keyExtractor={item => item}
                data={coupons}
                renderItem={({ item }) => (
                  <Cupom
                    onPress={() => {
                      handleRedirectCupom(item.id);
                    }}
                  >
                    <ImageCupom
                      source={{
                        uri: item.image,
                      }}
                    />
                    <Info>
                      <TitleItem> {item.formatedTitle} </TitleItem>
                      <DesCupom> {item.formatedDesc} </DesCupom>
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
