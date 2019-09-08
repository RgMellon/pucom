import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
} from './styles';

export default function MyCupons() {
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
            {' '}
            Veja mais <Icon name="chevron-right" />{' '}
          </SeeMore>
        </FrontCard>
        <BackCard activeOpacity={1} onPress={() => this.card.flip()} />
      </MyCard>
    </Container>
  );
}
