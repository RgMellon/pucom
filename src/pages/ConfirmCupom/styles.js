import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: #fff;
  /* padding: 20px; */
`;

export const ImageCongratulations = styled.Image`
  width: 100%;
  height: 300px;
  align-self: center;
  border-radius: 4px;
  /* margin-top: 20px; */
  /* border: 1px solid #e6e6e6; */
`;

export const TextCongratulations = styled.Text`
  color: #320061;
  font-size: 23px;
  text-align: center;
  margin-top: 50px;
  line-height: 30px;
  font-weight: 500;
  margin-top: 40px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #d6d6d6;
  text-align: center;
  margin-top: 20px;
`;

export const CodDiscount = styled.Text`
  font-size: 20px;
  margin-top: 20px;
  color: #d6d6d6;
  /* font-weight: bold; */
  text-align: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 300px;
  background: #fff;
`;

export const Content = styled.ScrollView`
  width: 100%;
  padding: 20px;
`;

export const CodCupomContent = styled.View`
  margin-top: 30px;
  align-self: center;
  padding: 20px;
  width: 200px;
  height: 50px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #320061;
  margin-bottom: 40px;
`;

export const TextCodCupom = styled.Text`
  color: #320061;
  font-size: 16px;
`;

export const Head = styled.View`
  height: 60px;
  background: #320061;
  width: 100%;
  padding: 20px;
`;

export const ButtonBack = styled(RectButton)`
  height: 20px;
  width: 40px;
  justify-content: center;
  align-items: center;
  background: #320061;
`;
