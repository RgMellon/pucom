import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Content,
  ImageProfile,
  Name,
  Title,
  ItemProfile,
  TextItem,
  Separator,
  TitleUp,
} from './styles';

export default function MyProfile() {
  return (
    <Container>
      <Header>
        <ImageProfile
          source={{
            uri: 'https://api.adorable.io/avatars/153/abott@adorable.png',
          }}
        />
      </Header>
      <Name> Renan Melo </Name>
      <Content>
        <ItemProfile>
          <Icon name="person" size={25} color="#320061" />
          <TextItem> Alterar conta </TextItem>
          <Icon name="chevron-right" size={25} color="#d6d6d6" />
        </ItemProfile>

        <ItemProfile>
          <Icon name="person" size={25} color="#320061" />
          <TextItem> Ver meus cupons </TextItem>
          <Icon name="chevron-right" size={25} color="#d6d6d6" />
        </ItemProfile>

        <ItemProfile>
          <Icon name="person" size={25} color="#320061" />
          <TextItem> Ver meus cupons </TextItem>
          <Icon name="chevron-right" size={25} color="#d6d6d6" />
        </ItemProfile>

        <ItemProfile>
          <Icon name="person" size={25} color="#320061" />
          <TextItem> Ver meus cupons </TextItem>
          <Icon name="chevron-right" size={25} color="#d6d6d6" />
        </ItemProfile>

        <ItemProfile>
          <Icon name="person" size={25} color="#320061" />
          <TextItem> Ver meus cupons </TextItem>
          <Icon name="chevron-right" size={25} color="#d6d6d6" />
        </ItemProfile>
      </Content>
    </Container>
  );
}
