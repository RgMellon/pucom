import styled from 'styled-components';

export const Container = styled.View`
  margin-top: 20px;
`;

export const BoxImage = styled.View`
  height: 222px;
  border-width: 1px;
  border-color: #fafafa;
`;

export const ImageItem = styled.Image`
  flex: 1;
`;

export const InfoCupom = styled.View`
  flex: 1;
  background-color: #6400f2;
  padding-left: 10px;
  padding-right: 10px;
  height: 150px;
  position: relative;
  flex-direction: row;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const DetailOnCuponRight = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 80px;
  position: absolute;
  background-color: #fafafa;
  right: -18px;
  margin-top: 69px;
`;

export const DetailOnCuponLeft = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 80px;
  position: absolute;
  background-color: #fafafa;
  margin-left: -18px;
  margin-top: 69px;
`;

export const Discount = styled.View`
  width: 75px;
  height: 75px;
  border-radius: 80px;
  background-color: #f7dd2d;
  border-style: dashed;
  border-width: 1.5px;
  border-color: #fff;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
`;

export const MoreInfoCupon = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 20px;
  color: #fff;
  font-size: 21px;
  font-weight: bold;
`;

export const Validate = styled.Text`
  font-size: 17px;
  color: #fff;
  margin-top: 15px;
`;

export const DiscountValue = styled.Text`
  margin-top: 15px;
  font-size: 17px;
  color: #fff;
`;

export const DiscountPercent = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 18px;
`;
