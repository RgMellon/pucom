import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  height: 200px;
  width: 98%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-top: 15px;
  margin-bottom: 15px;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const Header = styled.View`
  flex-direction: row;
  height: 70px;
  background: #fafafa;
  border: 1px solid #ddd;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
`;

export const ContainerInfoStore = styled.View`
  position: relative;
`;

export const StoreLocation = styled.Text`
  font-size: 14px;
  font-family: 'NunitoSans-Bold';
  margin-left: 10px;
  color: #bbb;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  width: 87%;
  text-align: center;
  /* font-weight: 500; */
  letter-spacing: 0.4px;
  margin-top: 20px;
  font-family: 'NunitoSans';
`;

export const ContainerImage = styled.View`
  position: relative;
  width: 80%;
  padding: 10px;
  height: 250px;
  align-self: center;
  /* border: 1px solid #eee; */
  border-radius: 4px;
  margin-top: 30px;
`;

export const ImageProduct = styled.Image.attrs({
  resizeMode: 'contain',
})`
  margin: 10px;
  width: 150px;
  height: 150px;
`;

export const Discount = styled.View``;

export const ValueDiscount = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 18px;
`;

export const ButtonRescueCupom = styled.TouchableOpacity`
  width: 50%;
  border: 1px solid #320061;
  border-radius: 50px;
  align-self: center;
  margin-top: 20px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #320061;
`;

export const Details = styled.View`
  background: rgba(255, 255, 255, 0.8);
  flex: 1;
  align-items: center;
`;

export const PriceDiscount = styled.Text`
  font-size: 14px;
  color: #7a7680;
  align-items: center;
  margin-top: 15px;
  margin-left: 118px;
`;

export const Price = styled.Text`
  color: #320061;
  font-weight: 200;
  font-size: 23px;
  margin-left: 73px;
  font-family: 'NunitoSans';
`;

export const StoreDetail = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;

  /* justify-content: space-between; */
`;

export const StoreName = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  font-family: 'NunitoSans-Bold';
  margin-left: 10px;
`;

export const IconStore = styled.Image`
  margin-top: 10px;
  width: 30px;
  height: 30px;
  border-radius: 25px;
  border: 1px solid #eee;
`;

export const CicleDiscount = styled.View`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background: #dec534;
  position: absolute;
  left: 145;
  top: 10;
  z-index: 999;
  justify-content: center;
  align-items: center;
  border-style: dashed;
  border-width: 0.8px;
  border-color: #320061;
`;

export const TextCicleDiscount = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 700;
`;
