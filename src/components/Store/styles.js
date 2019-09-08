import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 180px;
  height: 200px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #eee;
  margin: 20px 8px 0px 8px;
`;

export const Header = styled.View`
  height: 40%;
  width: 100%;
  /* background: red; */
`;

export const StoreImage = styled.Image`
  /* margin-top: -20px; */
  width: 100%;
  height: 100px;
`;

export const Content = styled.View`
  margin-top: 10px;
`;

export const TitleStore = styled.Text`
  color: #333;
  font-size: 16px;
  text-align: center;
  /* font-weight: bold; */
  margin-top: 20px;
`;

export const CuponsAvailable = styled.Text`
  font-size: 14px;
  color: #333;
  text-align: center;
`;

export const DetailCupom = styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 20px;
  align-items: center;
`;
