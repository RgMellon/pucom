import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { withNavigationFocus } from 'react-navigation';

import openMap from 'react-native-open-maps';
import api from '~/services/api';

import {
  Container,
  MyCard,
  FrontCard,
  BackCard,
  ImageCupom,
  TitleCupom,
  DescCupom,
  ContentCode,
  Code,
  ExpirateTime,
  NameLocale,
  ContainerBackCard,
  DescriptionStore,
  Address,
  Map,
  ContentVisiStore,
  TextVisitStore,
  ContentPrice,
  OldPrice,
  DiscountPrice,
  ListCouponsTake,
} from './styles';

function MyCupons({ isFocused, navigation }) {
  const [listCoupons, setListCoupons] = useState([]);

  // function goTo() {
  //   openMap({ latitude: 37.865101, longitude: -119.53833 });
  // }

  function handleRedirectStore(id) {
    navigation.navigate('DetailStore', { id });
  }

  async function getCuponsTaked() {
    const response = await api.get('/coupons/take');
    const { coupons } = response.data;

    const newData = coupons.map(item => ({
      ...item,
      formatedOldPrice: parseFloat(item.price).toFixed(2),
      formatedNewPrice: parseFloat(item.value).toFixed(2),
    }));

    setListCoupons(newData);
  }

  useEffect(() => {
    if (isFocused) {
      getCuponsTaked();
    }
  }, [isFocused]);

  return (
    <Container>
      <ListCouponsTake
        keyExtractor={item => item.id.toString()}
        data={listCoupons}
        renderItem={({ item }) => (
          <MyCard ref={card => (this[`card${item.id}`] = card)}>
            <FrontCard
              activeOpacity={1}
              onPress={() => this[`card${item.id}`].flip()}
            >
              <ImageCupom
                source={{
                  uri: item.image,
                }}
              />
              <TitleCupom> {item.title} </TitleCupom>
              <DescCupom>
                Lorem Ipsum sit a met quer brincar com o dolinho seu amigguinho
              </DescCupom>

              <ContentPrice>
                <OldPrice> De R$ {item.formatedOldPrice} </OldPrice>
                <DiscountPrice> Por R$ {item.formatedNewPrice}</DiscountPrice>
              </ContentPrice>

              <ContentCode>
                <Code> {item.coupon} </Code>
              </ContentCode>

              <ExpirateTime>Expira has 12:20</ExpirateTime>
            </FrontCard>

            <BackCard
              activeOpacity={1}
              onPress={() => this[`card${item.id}`].flip()}
            >
              <ImageCupom
                source={{
                  uri: item.shop_image,
                }}
              />
              <ContainerBackCard>
                <NameLocale> {item.fantasy_name} </NameLocale>
                <DescriptionStore numberOfLines={3}>
                  {item.description}
                </DescriptionStore>
                <Map>
                  <Address> R. Alberto Vieira Bonfim, 841 </Address>
                  {/* <TextMaps> Ver no Maps </TextMaps> */}
                </Map>

                <ContentVisiStore
                  onPress={() => handleRedirectStore(item.shop_id)}
                >
                  <TextVisitStore> Visitar Loja </TextVisitStore>
                </ContentVisiStore>
              </ContainerBackCard>
            </BackCard>
          </MyCard>
        )}
      />
    </Container>
  );
}

MyCupons.navigationOptions = {
  tabBarLabel: 'Meus cupons',

  tabBarIcon: ({ tintColor }) => (
    <Icon size={18} name="list" color={tintColor} />
  ),
};

export default withNavigationFocus(MyCupons);
