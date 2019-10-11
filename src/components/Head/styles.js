import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
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
