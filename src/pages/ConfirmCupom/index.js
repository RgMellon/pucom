import React, { useMemo } from 'react';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  ImageCongratulations,
  TextCongratulations,
  CodDiscount,
  Header,
  SubTitle,
  Content,
  CodCupomContent,
  TextCodCupom,
  Head,
  ButtonBack,
} from './styles';

import happy from '~/assets/img/happy.png';

// import

export default function ConfirmCupom({ navigation }) {
  const expiratedAt = navigation.getParam('expiratedAt');
  const codCupom = navigation.getParam('coupon');

  function handleRedirect() {
    navigation.popToTop();
  }

  const formatedDate = useMemo(
    () =>
      format(parseISO(expiratedAt), "dd MMMM yy' às' H:mm aa", {
        locale: pt,
      }),
    [expiratedAt]
  );

  return (
    <Container>
      <Head>
        <ButtonBack onPress={handleRedirect}>
          <Icon name="angle-left" color="#fff" size={23} />
        </ButtonBack>
      </Head>
      <Content>
        <Header>
          <ImageCongratulations source={happy} />
        </Header>

        <TextCongratulations>Cupom Resgatado</TextCongratulations>
        <SubTitle>
          Agora é só apresentar o código na loja para aproveitar o desconto
        </SubTitle>

        <TextCongratulations> Valido até </TextCongratulations>
        <CodDiscount>{formatedDate}</CodDiscount>

        <TextCongratulations>Codigo cupom </TextCongratulations>
        <CodCupomContent>
          <TextCodCupom> {codCupom}</TextCodCupom>
        </CodCupomContent>
      </Content>
    </Container>
  );
}
