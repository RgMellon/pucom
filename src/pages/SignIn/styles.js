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

export const Title = styled.Text`
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
`;

export const TextSubmit = styled.Text`
  color: #fff;
  font-size: 17px;
`;

export const Back = styled.TouchableOpacity`
  align-self: center;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;

export const TextBack = styled.Text`
  color: #fff;
  font-size: 19px;
  border-bottom-color: #fff;
`;

export const FormInput = styled(Input)`
  margin-bottom: 20px;
  width: 100%;
  height: 60px;
`;
