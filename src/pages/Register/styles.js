import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: center;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 20px;
  width: 100%;
  height: 60px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  /* width: 60%; */
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

export const ImageRegister = styled.Image`
  width: 100px;
  height: 100px;
`;
