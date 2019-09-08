import React from 'react';

import {
  Card,
  Details,
  ImageProduct,
  ProductName,
  Discount,
  PriceDiscount,
  Price,
  IconStore,
  StoreDetail,
  StoreName,
  CicleDiscount,
  TextCicleDiscount,
} from './styles';

function Cupom({ navigation, id }) {
  function handleRedirect() {
    navigation.navigate('DetailCupom', { id });
  }

  return (
    <Card onPress={handleRedirect}>
      <CicleDiscount>
        <TextCicleDiscount> 50% </TextCicleDiscount>
      </CicleDiscount>
      <ImageProduct
        source={{
          uri:
            'https://assets.xtechcommerce.com/uploads/images/medium/a84adebedbfaef7792e23cec2f588ba9.jpg',
        }}
      />
      <Details>
        <Discount>
          <PriceDiscount> R$ {parseFloat(22.9).toFixed(2)} </PriceDiscount>
          <Price> R$ {parseFloat(18).toFixed(2)} </Price>
        </Discount>
        <ProductName> Camiseta Naza ...</ProductName>
        <StoreDetail>
          <IconStore
            source={{
              uri:
                'https://2.kekantoimg.com/WhIqGyB9nYyQcKPuY82yx4y1PiU=/fit-in/600x600/s3.amazonaws.com/kekanto_pics/pics/934/193934.jpg',
            }}
          />
          <StoreName> Loja do Galo </StoreName>
        </StoreDetail>
      </Details>
    </Card>
  );
}

export default Cupom;
