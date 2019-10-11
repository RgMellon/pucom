import styled from 'styled-components/native';
import CardFlip from 'react-native-card-flip';

export const MyCard = styled(CardFlip)`
  width: 100%;
  height: 470;
`;

export const FrontCard = styled.TouchableOpacity`
  width: 100%;
  height: 470;
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

export const TimeExpirate = styled.View`
  align-self: center;
  width: 70%;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;

export const DateExpire = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const SeeMore = styled.Text`
  margin-top: 20px;
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

export const Address = styled.Text`
  /* margin-top: 10px; */
`;

export const Map = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
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
