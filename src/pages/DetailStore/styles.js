import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  /* border-top-right-radius: 20px; */
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 20px 0 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-family: 'NunitoSans';
  color: #333;
  font-weight: 600;
  margin-top: 20px;
  margin-left: -8px;
`;

export const ContentAdress = styled.View`
  border-radius: 4px;
  border: 1px solid #d4d4d4;
  margin-top: 20px;
  padding: 10px;
`;

export const Address = styled.Text`
  color: 18px;
  color: #333;
  margin-top: 8px;
`;

export const ListCoupons = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const Cupom = styled.TouchableOpacity`
  width: 300;
  margin: 0 10px 0 10px;
  height: 100;
  border: 1px solid #d6d6d6;
  border-radius: 4px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ImageCupom = styled.Image`
  width: 90px;
  height: 90px;
`;

export const ContainerCupomStore = styled.View`
  margin-top: 60px;
`;

export const TitleCupom = styled.Text`
  color: #333;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const TitleItem = styled.Text`
  font-size: 17px;
  color: #333;
`;

export const DesCupom = styled.Text`
  font-size: 16px;
  color: #d6d6d6;
  padding: 10px;
`;

export const Info = styled.View`
  flex-direction: column;
`;

export const Phone = styled.Text`
  font-size: 17px;
  color: #333;
  margin-top: 20px;
`;

export const DescStore = styled.Text`
  margin-top: 10px;
`;
