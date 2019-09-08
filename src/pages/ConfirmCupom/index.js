import React from 'react';

import {
  Container,
  ImageCongratulations,
  TextCongratulations,
  CodDiscount,
} from './styles';

import happy from '~/assets/img/happy.png';

export default function ConfirmCupom() {
  return (
    <Container>
      <ImageCongratulations source={happy} />
      <TextCongratulations>
        Ebaaaa, seu cupom já foi resgatado, leve até a loja e apresente o código
        abaixo para receber o DESCONTO
      </TextCongratulations>
      <CodDiscount> #EE245@f34</CodDiscount>
    </Container>
  );
}
