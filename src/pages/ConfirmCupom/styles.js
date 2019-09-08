import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#320061', '#954cbf'],
})`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const ImageCongratulations = styled.Image`
  width: 100%;
  height: 300px;
  align-self: center;
  border-radius: 4px;
  margin-top: 20px;
  border: 1px solid;
`;

export const TextCongratulations = styled.Text`
  color: #fff;
  font-size: 19px;
  text-align: center;
  margin-top: 40px;
`;

export const CodDiscount = styled.Text`
  font-size: 30px;
  margin-top: 40px;
  color: white;
  font-weight: bold;
`;
