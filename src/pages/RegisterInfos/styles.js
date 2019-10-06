import styled from 'styled-components/native';

import { Picker } from 'react-native';
// import { RectButton } from 'react-native-gesture-handler';
import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.ScrollView`
  flex: 1;
  background: #320061;
`;

export const Header = styled.View`
  height: 280px;
  background: #fff;
  padding: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImageRegister = styled.Image`
  width: 100%;
  height: 280px;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #fff;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const ContentRegisterInput = styled.View`
  width: 80%;
  justify-content: center;
`;

export const RegisterInput = styled(Input)`
  margin-top: 20px;
  width: 100%;
  height: 60px;
`;

export const Label = styled.Text`
  margin-top: 20px;
  color: #fff;
  font-size: 11px;
  opacity: 0.6;
`;

export const ContainerPicker = styled(Picker)`
  padding: 0 15px;
  height: 56px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: #fff;
  opacity: 0.8;
  margin-top: 20px;
`;

export const ContentCep = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonSearchCep = styled(Button)`
  height: 46px;
  width: 50px;
  background: #3b9eff;
  border-radius: 4px;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
`;

export const TextButtonSearchCep = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const ContentModal = styled.View`
  background: #fff;
  width: 100%;
  margin-top: 300px;
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const ImageConfirmAddress = styled.Image`
  width: 150px;
  height: 150px;
  margin-top: -200px;
  margin-bottom: 20px;
`;

export const TitleModal = styled.Text`
  font-size: 18px;
  color: #320061;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
`;

export const TextAddress = styled.Text`
  color: #333;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;

export const ButtonSubmit = styled(Button)`
  width: 80%;
  align-self: center;
  height: 50px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const TextButtonSubmit = styled.Text`
  color: #fff;
  font-size: 16px;
`;
