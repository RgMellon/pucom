import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const HeaderStore = styled.View`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 40px;
  flex-direction: row;
`;
export const ImageStore = styled.Image`
  width: 91px;
  height: 91px;
  border-radius: 50px;
  border: 1px solid #eee;
`;
export const TitleStore = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #707070;
  font-family: 'NunitoSans';
`;
export const AddresStore = styled.Text`
  font-family: 'NunitoSans';
  color: #707070;
  font-size: 16px;
`;

export const InfoStore = styled.View`
  flex-direction: column;
  margin-left: 20px;
  font-weight: bold;
`;

export const DetailExpiration = styled.Text`
  color: #707070;
  line-height: 22px;
  font-size: 17px;
  text-align: center;
  width: 300px;
  align-self: center;
  margin-top: 60px;
`;

export const CupomRescue = styled.View`
  width: 95%;
  height: 180px;
  background-color: #6400f2;
  border: 1px solid #eee;
  margin-top: 60px;
  border-radius: 14px;
  align-self: center;
  padding: 15px;

  position: relative;
`;

export const Discount = styled.View`
  width: 62px;
  height: 62px;
  justify-content: center;
  align-items: center;
  background: #f7dd2d;
  border: 1px solid #fff;
  border-radius: 31px;
`;

export const ValueDiscount = styled.Text`
  font-size: 18px;
  color: white;
`;

export const DescriptionDiscount = styled.Text`
  font-family: NunitoSans;
  font-size: 19px;
  margin-left: 15px;
  width: 270px;
  color: white;
  flex-wrap: wrap;
`;

export const Hole = styled.View`
  background: white;
  border-radius: 50px;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 10;
  right: 10;
`;

export const RescueCupomButton = styled.View`
  height: 50px;
  width: 90px;
  background: #4b40f5;
  margin-top: 1px;
  align-self: flex-end;
  border: 1px solid #4b40f5;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const WrapperDiscount = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  color: #fff;
  font-family: 'NunitoSans';
  font-weight: bold;
`;

export const Product = styled.View`
  width: 95%;
  align-self: center;
  background-color: #d1caca;
  height: 120px;
  margin-top: 120px;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  width: 120px;
  height: 200px;
  margin-top: -80px;
  border: 1px solid #fafafa;
`;

export const ImageProduct = styled.Image`
  flex: 1;
`;

export const DescriptionProduct = styled.Text`
  margin-left: 20px;
  align-self: center;
  width: 180px;
  font-size: 18px;
  font-family: 'NunitoSans';
  font-weight: bold;
  color: #707070;
`;
