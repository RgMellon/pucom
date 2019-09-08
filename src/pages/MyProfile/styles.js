import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 20px;
`;

export const Header = styled(LinearGradient).attrs({
  colors: ['#fff', '#fff'],
})`
  width: 100%;
  height: 100px;
`;

export const ImageProfile = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 6px;
  align-self: center;
  margin-top: 50px;
`;

export const Content = styled.View`
  margin-top: 10px;
  padding: 20px;
`;

export const Name = styled.Text`
  font-size: 19px;
  font-weight: bold;
  align-self: center;
  color: #333;
  margin-top: 50px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #888;
  font-weight: bold;
`;

export const ItemProfile = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 20px;
`;

export const Separator = styled.View`
  width: 90%;
  height: 0.6px;
  background: #888;
  justify-content: center;
  align-self: flex-end;
  margin-top: 8px;
`;

export const TextItem = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TitleUp = styled.Text`
  font-size: 16px;
  color: #888;
  font-weight: bold;
  margin-top: 50px;
`;
