import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#320061', '#954cbf'],
})`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 250px;
  height: 130px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-top: 60px;
  text-align: center;
  font-weight: bold;
`;

export const ButtonRegister = styled.TouchableOpacity`
  width: 300px;
  height: 60px;
  border-radius: 100px;
  background: #f7dd2d;
  margin-top: 90px;

  justify-content: center;
  align-items: center;
`;

export const TextButtonRegister = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const ButtonSigIn = styled.TouchableOpacity`
  width: 300px;
  height: 60px;
  border-radius: 100px;
  background: #fff;
  margin-top: 20px;

  justify-content: center;
  align-items: center;
`;

export const TextButtonSignIn = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;
