import React, { Component } from 'react';

import { View, Text } from 'react-native';

import {
  Container,
  HeaderStore,
  ImageStore,
  TitleStore,
  AddresStore,
  InfoStore,
  DetailExpiration,
  CupomRescue,
  Discount,
  ValueDiscount,
  DescriptionDiscount,
  Hole,
  RescueCupomButton,
  WrapperDiscount,
  TextButton,
  ImageContainer,
  ImageProduct,
  ContainerDescription,
  DescriptionProduct,
  Product,
} from './styles';

export default class DetailPucom extends Component {
  static navigationOptions = {
    // header: null,
  };

  state = {};

  render() {
    return (
      <Container>
        <HeaderStore>
          <ImageStore
            source={{
              uri: 'https://img.olx.com.br/images/29/293913002523368.jpg',
            }}
          />
          <InfoStore>
            <TitleStore> Dona Maria </TitleStore>
            <AddresStore> R.Alberto Vieira Bonfim, 841</AddresStore>
          </InfoStore>
        </HeaderStore>

        <DetailExpiration>
          Ao resgatar o cupom, você tem 30 min antes dele expirar, corra ...
        </DetailExpiration>

        <CupomRescue>
          <Hole />
          <WrapperDiscount>
            <Discount>
              <ValueDiscount>20%</ValueDiscount>
            </Discount>
            <DescriptionDiscount>
              De desconto no produto abaixo
            </DescriptionDiscount>
          </WrapperDiscount>
          <RescueCupomButton>
            <TextButton> Resgatar </TextButton>
          </RescueCupomButton>
        </CupomRescue>

        <Product>
          <ImageContainer>
            <ImageProduct
              source={{
                uri:
                  'https://assets.xtechcommerce.com/uploads/images/medium/a84adebedbfaef7792e23cec2f588ba9.jpg',
              }}
            />
          </ImageContainer>
          <DescriptionProduct>
            Camiseta Nazaré com 20% desconto.
          </DescriptionProduct>
        </Product>
      </Container>
    );
  }
}
