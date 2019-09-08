import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Header,
  StoreImage,
  Content,
  TitleStore,
  CuponsAvailable,
  DetailCupom,
} from './styles';

export default function Store({ handleNavigateStore }) {
  return (
    <Container onPress={handleNavigateStore}>
      <Header>
        <StoreImage
          resizeMode="cover"
          source={{
            uri:
              'http://statig2.akamaized.net/bancodeimagens/du/2e/fb/du2efb7zjw7wcilqg6pbgqwkh.jpg',
          }}
        />
      </Header>
      <Content>
        <TitleStore> Casas Bahia</TitleStore>
        <DetailCupom>
          <Icon name="receipt" color="#dec534" size={20} />
          <CuponsAvailable> 3 disponíveis </CuponsAvailable>
        </DetailCupom>
      </Content>
    </Container>
  );
}
