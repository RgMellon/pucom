import styled from 'styled-components/native';

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

export const RegisterInput = styled(Input)`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: 60px;
`;
