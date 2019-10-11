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

export default function Store({ handleNavigateStore, name, image }) {
  return (
    <Container onPress={handleNavigateStore}>
      <Header>
        <StoreImage
          resizeMode="cover"
          source={{
            uri: image,
          }}
        />
      </Header>
      <Content>
        <TitleStore> {name} </TitleStore>
        <DetailCupom>
          <Icon name="receipt" color="#dec534" size={20} />
          <CuponsAvailable> 3 disponíveis </CuponsAvailable>
        </DetailCupom>
      </Content>
    </Container>
  );
}
