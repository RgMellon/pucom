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

function Cupom({
  navigation,
  id,
  name,
  storeName,
  priceDiscount,
  price,
  discount,
  shopImage,
  imgCupom,
}) {
  function handleRedirect() {
    console.tron.log(id);
    navigation.navigate('DetailCupom', { id });
  }

  return (
    <Card onPress={handleRedirect}>
      <CicleDiscount>
        <TextCicleDiscount> {discount} </TextCicleDiscount>
      </CicleDiscount>
      <ImageProduct
        source={{
          uri: imgCupom,
        }}
      />
      <Details>
        <Discount>
          <PriceDiscount>
            R$ {parseFloat(priceDiscount).toFixed(2)}
          </PriceDiscount>
          <Price> R$ {parseFloat(price).toFixed(2)} </Price>
        </Discount>
        <ProductName> {name} </ProductName>
        <StoreDetail>
          <IconStore source={{ uri: shopImage }} />
          <StoreName> {storeName} </StoreName>
        </StoreDetail>
      </Details>
    </Card>
  );
}

export default Cupom;
