import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import openMap from 'react-native-open-maps';

import {
  Container,
  MyCard,
  FrontCard,
  BackCard,
  ImageCupom,
  TitleCupom,
  DescCupom,
  TimeExpirate,
  DateExpire,
  SeeMore,
  NameLocale,
  ContainerBackCard,
  Address,
  Map,
  TextMaps,
  Separator,
} from './styles';

export default function MyCupons() {
  function goTo() {
    openMap({ latitude: 37.865101, longitude: -119.53833 });
  }
  return (
    <Container>
      <MyCard ref={card => (this.card = card)}>
        <FrontCard activeOpacity={1} onPress={() => this.card.flip()}>
          <ImageCupom
            source={{
              uri:
                'https://i0.wp.com/www.revistabula.com/wp/wp-content/uploads/2018/06/Virado-a-Paulista.jpg?resize=610%2C350&ssl=1',
            }}
          />
          <TitleCupom> Comida da vó </TitleCupom>
          <DescCupom>
            Lorem Ipsum sit a met quer brincar com o dolinho seu amigguinho
          </DescCupom>
          <TimeExpirate>
            <DateExpire> Expira hás 14:00 </DateExpire>
          </TimeExpirate>

          <SeeMore>
            Veja mais <Icon name="chevron-right" />{' '}
          </SeeMore>
        </FrontCard>
        <BackCard activeOpacity={1} onPress={() => this.card.flip()}>
          <ImageCupom
            source={{
              uri:
                'http://statig2.akamaized.net/bancodeimagens/du/2e/fb/du2efb7zjw7wcilqg6pbgqwkh.jpg',
            }}
          />
          <ContainerBackCard>
            <NameLocale> Casas Bahia </NameLocale>
            <Map onPress={goTo}>
              <Address> R. Alberto Vieira Bonfim, 841 </Address>
              <TextMaps> Ver no Maps </TextMaps>
            </Map>
          </ContainerBackCard>
          <Separator />
        </BackCard>
      </MyCard>
    </Container>
  );
}