import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const ListStore = styled.FlatList``;

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Form = styled.View`
  margin-top: 20px;
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 0.5px;
  border-color: #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 4px;
  margin-right: 7px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const Input = styled.TextInput.attrs({
  placeHolderTextColor: '#999',
})`
  flex: 1;
  height: 50px;
  background: #fafafa;
  border-radius: 3px;
  padding: 0 15px;
  border-radius: 4px;
  border: 1px solid #eee;
  /* margin: 0px 20px 0px 20px; */
`;
