import React, { Component } from 'react';

import {
  Container,
  BoxImage,
  ImageItem,
  InfoCupom,
  DetailOnCuponRight,
  DetailOnCuponLeft,
  Discount,
  MoreInfoCupon,
  Title,
  Validate,
  DiscountValue,
  DiscountPercent,
} from './styles';

class Ticket extends Component {
  state = {};

  render() {
    const { img } = this.props;

    return (
      <Container>
        <BoxImage>
          <ImageItem source={{ uri: img }} />
        </BoxImage>

        <InfoCupom>
          <DetailOnCuponLeft />
          <DetailOnCuponRight />

          <Discount>
            <DiscountPercent> 20% </DiscountPercent>
          </Discount>

          <MoreInfoCupon>
            <Title> Dona Maria </Title>

            <DiscountValue> 20% desconto camiseta </DiscountValue>

            <Validate> Valido até 24/09/21 as 13:00 </Validate>
          </MoreInfoCupon>
        </InfoCupom>
      </Container>
    );
  }
}
export default Ticket;
