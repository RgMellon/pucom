import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { ButtonBack, Container } from './styles';

export default function Head() {
  function handleRedirect() {
    navigation.popToTop();
  }

  return (
    <Container>
      <ButtonBack onPress={handleRedirect}>
        <Icon name="angle-left" color="#fff" size={23} />
      </ButtonBack>
    </Container>
  );
}
