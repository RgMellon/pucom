import styled from 'styled-components/native';
import CardFlip from 'react-native-card-flip';

export const MyCard = styled(CardFlip)`
  width: 380px;
  height: 550px;
  margin-top: 40px;
  /* margin: 40px; */
  /* background: #fff; */
`;

export const FrontCard = styled.TouchableOpacity`
  width: 100%;
  height: 550;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5;
`;

export const BackCard = styled.TouchableOpacity`
  width: 100%;
  height: 470;
  background: #fff;
  /* padding: 20px; */
  border-radius: 5;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background: #320061;
`;

export const ImageEmpty = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
  border-radius: 100px;
  margin-top: 100px;
`;

export const ContentEmpty = styled.View``;

export const TitleEmpty = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  align-self: center;
  margin-top: 60px;
`;

export const TextEmpty = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  margin-top: 40px;
  align-self: center;
  width: 80%;
  text-align: center;
`;

export const CardCupom = styled.View`
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.1);
  height: 400px;
  border-radius: 4px;
  /* filter: blur(5px); */
`;

export const ImageCupom = styled.Image`
  width: 100%;
  height: 200px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const TitleCupom = styled.Text`
  color: #fff;
  /* font-weight: bold; */
  margin-top: 5px;
  font-size: 18px;
  padding: 10px;
`;

export const DescCupom = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  margin-top: 10px;
  font-size: 14px;
  padding: 20px;
`;

export const ContentCode = styled.View`
  align-self: center;
  width: 70%;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 10px;
  border-radius: 4px;
`;

export const Code = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const ExpirateTime = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  align-self: center;
`;

// Back card

export const ContainerBackCard = styled.View`
  padding: 20px;
  background: #fff;
`;

export const NameLocale = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  /* font-weight: bold; */
  color: #333;
`;

export const DescriptionStore = styled.Text`
  margin-top: 20px;
  color: #333;
  margin-left: 8px;
`;

export const Address = styled.Text`
  /* margin-top: 10px; */
`;

export const Map = styled.TouchableOpacity`
  margin-top: 20px;
  margin-left: 8px;
  width: 90%;
`;

export const TextMaps = styled.Text`
  color: #320061;
`;

export const Separator = styled.View`
  border-width: 1px;
  /* borderRadius: 5px, */
  border-style: dashed;
  margin-top: 70px;
  border-color: #320061;
`;

export const EmptyContent = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ListCouponsTake = styled.FlatList.attrs({
  // horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 10px;
  /* width: 100%; */
`;

export const ContentVisiStore = styled.TouchableOpacity`
  width: 60%;
  height: 50px;
  border-radius: 80px;
  border: 1px solid #320061;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const TextVisitStore = styled.Text`
  color: #320061;
`;

export const ContentPrice = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const OldPrice = styled.Text`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
`;

export const DiscountPrice = styled.Text`
  font-size: 18px;
  color: #fafafa;
`;
