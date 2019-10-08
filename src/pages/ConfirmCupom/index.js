import React, { useMemo } from 'react';

import {
  Container,
  ImageCongratulations,
  TextCongratulations,
  CodDiscount,
  Header,
} from './styles';

import happy from '~/assets/img/happy.png';

export default function ConfirmCupom({ navigation }) {
  const expiratedAt = navigation.getParam('expiratedAt');
  const codCupom = navigation.getParam('coupon');

  return (
    <Container>
      <Header>
        <ImageCongratulations source={happy} />
      </Header>
      <TextCongratulations>
        Ebaaaa, seu cupom já foi pego, leve até a loja e apresente o código
        abaixo para receber o DESCONTO
      </TextCongratulations>

      <CodDiscount>
        {expiratedAt} {codCupom}
      </CodDiscount>
    </Container>
  );
}
